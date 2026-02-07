from fastapi import APIRouter, Depends, HTTPException, status, Query
from sqlmodel import Session
from typing import List, Optional
from uuid import UUID
from backend.db import get_session
from backend.dependencies import get_current_user_id
from backend.models import ConversationRead, MessageRead, ConversationWithMessages
from backend.services import conversation_service
from backend.core import gemini_config
from pydantic import BaseModel

router = APIRouter()

class ChatRequest(BaseModel):
    message: str

class ChatResponse(BaseModel):
    response: str
    conversation_id: UUID
    tool_calls: Optional[List[dict]] = None

@router.post("/chat", response_model=ChatResponse)
async def chat(
    request: ChatRequest,
    conversation_id: Optional[UUID] = Query(None),
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Send a message to the AI chatbot.
    Creates a new conversation if conversation_id is not provided.
    """
    # 1. Get or create conversation
    if conversation_id:
        conversation = conversation_service.get_conversation(session, conversation_id, user_id)
        if not conversation:
            raise HTTPException(status_code=404, detail="Conversation not found or access denied")
    else:
        conversation = conversation_service.create_conversation(session, user_id)
        conversation_id = conversation.id
    
    # 2. Get history (limited to last 25 messages)
    history_objs = conversation_service.get_messages(session, conversation_id, user_id)
    history = [{"role": msg.role, "content": msg.content} for msg in history_objs]
    
    # 3. Save user message to database
    conversation_service.create_message(session, conversation_id, "user", request.message)
    
    # 4. Process with Gemini
    try:
        result = await gemini_config.process_chat(session, user_id, request.message, history)
    except Exception as e:
        # Log the error here in a real app
        raise HTTPException(status_code=500, detail=f"Gemini processing error: {str(e)}")
    
    # 5. Save AI response to database
    # Tool calls are stored as a string representation for simplicity in this MVP
    tool_calls_str = None
    if result["tool_calls"]:
        import json
        tool_calls_str = json.dumps(result["tool_calls"])
        
    conversation_service.create_message(
        session, 
        conversation_id, 
        "assistant", 
        result["response"], 
        tool_calls_str
    )
    
    return ChatResponse(
        response=result["response"],
        conversation_id=conversation_id,
        tool_calls=result["tool_calls"]
    )

@router.get("/conversations", response_model=dict)
def list_conversations(
    limit: int = 10,
    offset: int = 0,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """List all conversations for the authenticated user."""
    conversations = conversation_service.get_conversations(session, user_id, limit, offset)
    total = conversation_service.get_conversation_count(session, user_id)
    return {"conversations": conversations, "total": total}

@router.get("/conversations/{conversation_id}", response_model=ConversationWithMessages)
def get_conversation_details(
    conversation_id: UUID,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """Get full details of a conversation including message history."""
    conversation = conversation_service.get_conversation(session, conversation_id, user_id)
    if not conversation:
        raise HTTPException(status_code=404, detail="Conversation not found or access denied")
    
    messages = conversation_service.get_messages(session, conversation_id, user_id)
    return ConversationWithMessages(
        conversation=conversation,
        messages=messages,
        message_count=len(messages)
    )
