from google import genai
from google.genai import types
import os
import traceback
from typing import List, Dict, Any, Optional
from sqlmodel import Session
from backend.services import gemini_tools

def get_gemini_client():
    """Initialize and return the Gemini client."""
    api_key = os.getenv("GEMINI_API_KEY")
    if not api_key:
        print("CRITICAL: GEMINI_API_KEY is not set.")
    
    # Use v1beta for full feature support
    return genai.Client(api_key=api_key, http_options={'api_version': 'v1beta'})

# Manual tool declarations for robust parsing
AI_TOOLS = [
    types.Tool(
        function_declarations=[
            types.FunctionDeclaration(
                name="add_task",
                description="Add a new todo task.",
                parameters=types.Schema(
                    type="OBJECT",
                    properties={
                        "title": types.Schema(type="STRING", description="The title of the task"),
                        "description": types.Schema(type="STRING", description="Optional description of the task")
                    },
                    required=["title"]
                )
            ),
            types.FunctionDeclaration(
                name="list_tasks",
                description="List todo tasks for the user.",
                parameters=types.Schema(
                    type="OBJECT",
                    properties={
                        "completed": types.Schema(type="BOOLEAN", description="Filter by completion status (optional)")
                    }
                )
            ),
            types.FunctionDeclaration(
                name="complete_task",
                description="Mark a task as completed.",
                parameters=types.Schema(
                    type="OBJECT",
                    properties={
                        "task_id": types.Schema(type="INTEGER", description="The ID of the task to complete")
                    },
                    required=["task_id"]
                )
            ),
            types.FunctionDeclaration(
                name="delete_task",
                description="Delete a todo task.",
                parameters=types.Schema(
                    type="OBJECT",
                    properties={
                        "task_id": types.Schema(type="INTEGER", description="The ID of the task to delete")
                    },
                    required=["task_id"]
                )
            ),
            types.FunctionDeclaration(
                name="update_task",
                description="Update an existing task's title or description.",
                parameters=types.Schema(
                    type="OBJECT",
                    properties={
                        "task_id": types.Schema(type="INTEGER", description="The ID of the task to update"),
                        "title": types.Schema(type="STRING", description="New title (optional)"),
                        "description": types.Schema(type="STRING", description="New description (optional)")
                    },
                    required=["task_id"]
                )
            )
        ]
    )
]

SYSTEM_INSTRUCTION = """
You are a helpful Todo AI Assistant. Your goal is to help users manage their todo tasks.
You have access to tools for adding, listing, completing, updating, and deleting tasks.

Guidelines:
1. Always confirm when an action is successful (e.g., "Added task: Buy milk").
2. If a user's request is ambiguous, ask for clarification.
3. When listing tasks, format them nicely.
4. You can only manage the tasks of the current user.
5. If a tool returns an error, explain it to the user gracefully.
"""

async def process_chat(
    session: Session, 
    user_id: str, 
    message: str, 
    history: List[Dict[str, Any]] = None
) -> Dict[str, Any]:
    """
    Process a user message using Gemini, handling tool calls and history.
    """
    try:
        client = get_gemini_client()
        # gemini-2.5-flash-lite is confirmed working with remaining quota
        model_id = 'gemini-2.5-flash-lite'
        
        # Prepare context using the types explicitly
        contents = []
        if history:
            for msg in history:
                role = 'user' if msg['role'] == 'user' else 'model'
                contents.append(types.Content(role=role, parts=[types.Part(text=msg['content'])]))
        
        contents.append(types.Content(role='user', parts=[types.Part(text=message)]))
        
        tools_impl_map = {
            "add_task": gemini_tools.add_task,
            "list_tasks": gemini_tools.list_tasks,
            "complete_task": gemini_tools.complete_task,
            "delete_task": gemini_tools.delete_task,
            "update_task": gemini_tools.update_task
        }
        
        config = types.GenerateContentConfig(
            system_instruction=SYSTEM_INSTRUCTION,
            tools=AI_TOOLS,
            automatic_function_calling=types.AutomaticFunctionCallingConfig(disable=True)
        )
        
        tool_calls_made = []
        
        for turn in range(5):
            print(f"DEBUG: SDK Turn {turn} | Model: {model_id}")
            response = client.models.generate_content(
                model=model_id,
                contents=contents,
                config=config
            )
            
            if not response.candidates:
                return {"response": "I couldn't generate a response.", "tool_calls": tool_calls_made}

            candidate = response.candidates[0]
            if not candidate.content or not candidate.content.parts:
                print("DEBUG: Candidate content or parts is empty")
                break

            part = candidate.content.parts[0]
            
            if part.function_call:
                fc = part.function_call
                print(f"DEBUG: Tool requested: {fc.name}")
                
                # Add the model's call to the sequence
                contents.append(candidate.content)
                
                impl = tools_impl_map.get(fc.name)
                if impl:
                    # Inject hidden params
                    p = dict(fc.args) if fc.args else {}
                    p['session'] = session
                    p['user_id'] = user_id
                    
                    try:
                        res = impl(**p)
                    except Exception as ex:
                        print(f"DEBUG: Tool Error: {ex}")
                        res = {"error": str(ex)}

                    tool_calls_made.append({
                        "name": fc.name,
                        "parameters": dict(fc.args) if fc.args else {},
                        "result": res
                    })
                    
                    # Add tool response to the sequence
                    contents.append(types.Content(
                        role='tool',
                        parts=[types.Part(
                            function_response=types.FunctionResponse(
                                name=fc.name,
                                response=res if isinstance(res, dict) else {"result": res}
                            )
                        )]
                    ))
                    continue
                else:
                    print(f"DEBUG: No implementation for tool {fc.name}")
                    break
            else:
                # Text response
                return {
                    "response": response.text,
                    "tool_calls": tool_calls_made
                }
                
        return {
            "response": "Processing limit reached.",
            "tool_calls": tool_calls_made
        }

    except Exception as e:
        print("CRITICAL: Failed to process chat with Gemini SDK.")
        traceback.print_exc()
        return {
            "response": f"Gemini Error: {str(e)}",
            "tool_calls": []
        }
