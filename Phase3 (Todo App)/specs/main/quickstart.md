# Quickstart Guide: Todo AI Chatbot Implementation

## Overview
This guide provides step-by-step instructions to implement the AI Chatbot feature for the Todo application, following the specifications outlined in the feature requirements.

## Prerequisites

### Environment Setup
1. Ensure you have Python 3.11+ installed
2. Install Node.js 18+ for frontend development
3. Set up your database (Neon PostgreSQL recommended)
4. Obtain a Google Gemini API key

### Required Dependencies
```bash
# Backend dependencies
pip install google-generativeai

# Frontend dependencies
npm install @openai/chat-components
```

### Environment Variables
Add the following to your `.env` files:

Backend (.env):
```env
GEMINI_API_KEY=your_gemini_api_key_here
DATABASE_URL=postgresql://username:password@localhost:5432/todo_db
BETTER_AUTH_SECRET=your_auth_secret
```

Frontend (.env.local):
```env
NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key_here
NEXT_PUBLIC_CHATKIT_ALLOWED_DOMAIN=your_domain.com
```

## Phase 1: Database Models Implementation

### Step 1: Create Conversation and Message Models
1. Extend `backend/models.py` with new models:
   - `Conversation` model with user_id foreign key
   - `Message` model with conversation_id foreign key and role/content fields

2. Update the database schema:
   ```python
   # In backend/models.py
   class Conversation(SQLModel, table=True):
       id: Optional[UUID] = Field(default=None, primary_key=True)
       user_id: str = Field(index=True)  # Foreign key to users.id from Better Auth
       title: Optional[str] = Field(default=None, max_length=255)
       created_at: datetime = Field(default_factory=datetime.utcnow)
       updated_at: datetime = Field(default_factory=datetime.utcnow)

   class Message(SQLModel, table=True):
       id: Optional[UUID] = Field(default=None, primary_key=True)
       conversation_id: UUID = Field(foreign_key="conversations.id", index=True)
       role: str = Field(regex="^(user|assistant|tool)$")  # Enum constraint
       content: str = Field(sa_column=Column(Text))
       tool_calls: Optional[dict] = Field(default=None, sa_column=Column(JSON))
       tool_call_id: Optional[str] = Field(default=None)
       created_at: datetime = Field(default_factory=datetime.utcnow)
   ```

### Step 2: Update Database Migration
1. Update your startup script in `backend/main.py` to create the new tables:
   ```python
   from backend.models import Conversation, Message  # Add to imports
   ```

## Phase 2: Custom Tools Implementation

### Step 3: Create Custom Tools Service
1. Create `backend/services/gemini_tools.py`:
   ```python
   from typing import Dict, Any
   from backend.services.task_service import get_user_tasks, create_task, etc.
   from backend.db import get_session
   from sqlmodel import Session

   class GeminiTaskTools:
       def __init__(self, user_id: str):
           self.user_id = user_id

       def add_task(self, title: str, description: str = None) -> Dict[str, Any]:
           # Implement using existing task creation logic
           pass

       def list_tasks(self, status: str = "all") -> Dict[str, Any]:
           # Implement using existing task listing logic
           pass

       def complete_task(self, task_id: int) -> Dict[str, Any]:
           # Implement using existing task completion logic
           pass

       def delete_task(self, task_id: int) -> Dict[str, Any]:
           # Implement using existing task deletion logic
           pass

       def update_task(self, task_id: int, title: str = None, description: str = None, completed: bool = None) -> Dict[str, Any]:
           # Implement using existing task update logic
           pass
   ```

## Phase 3: Gemini Configuration

### Step 4: Configure Google Gemini
1. Create `backend/core/gemini_config.py`:
   ```python
   import google.generativeai as genai
   from typing import Dict, Any

   class ChatbotAgent:
       def __init__(self):
           genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
           self.model = genai.GenerativeModel('gemini-pro')

       def create_model_with_tools(self):
           # Define tools following custom specification
           tools = [
               {
                   "function_declarations": [
                       {
                           "name": "add_task",
                           "description": "Add a new task for the user",
                           "parameters": {
                               "type": "object",
                               "properties": {
                                   "title": {"type": "string", "description": "The task title"},
                                   "description": {"type": "string", "description": "Optional task description"}
                               },
                               "required": ["title"]
                           }
                       },
                       # Add other 4 tools similarly...
                   ]
               }
           ]

           return self.model
   ```

## Phase 4: Chat Endpoint Implementation

### Step 5: Create Chat API Routes
1. Create `backend/routes/chat.py`:
   ```python
   from fastapi import APIRouter, Depends, HTTPException
   from typing import List, Optional
   from sqlmodel import Session, select
   from backend.models import Message, Conversation
   from backend.db import get_session
   from backend.dependencies import get_current_user_id
   from backend.core.gemini_config import ChatbotAgent
   import uuid

   router = APIRouter()

   @router.post("/{user_id}/chat")
   async def chat_endpoint(
       user_id: str,
       message: str,
       conversation_id: Optional[str] = None,
       session: Session = Depends(get_session)
   ):
       # Validate user_id matches authenticated user
       if user_id != get_current_user_id():  # Simplified validation
           raise HTTPException(status_code=403, detail="Unauthorized")

       # Create or retrieve conversation
       if not conversation_id:
           # Create new conversation
           conv = Conversation(user_id=user_id)
           session.add(conv)
           session.commit()
           session.refresh(conv)
           conversation_id = str(conv.id)
       else:
           # Validate conversation belongs to user
           conv_stmt = select(Conversation).where(
               Conversation.id == conversation_id,
               Conversation.user_id == user_id
           )
           conv = session.exec(conv_stmt).first()
           if not conv:
               raise HTTPException(status_code=404, detail="Conversation not found")

       # Load conversation history (max 25 messages)
       history_stmt = select(Message).where(
           Message.conversation_id == conversation_id
       ).order_by(Message.created_at.desc()).limit(25)
       history = session.exec(history_stmt).all()

       # Call the model with message and history
       agent = ChatbotAgent()
       response = await agent.process_message(message, history)

       # Save user message
       user_msg = Message(
           conversation_id=uuid.UUID(conversation_id),
           role="user",
           content=message
       )
       session.add(user_msg)

       # Save assistant response
       assistant_msg = Message(
           conversation_id=uuid.UUID(conversation_id),
           role="assistant",
           content=response
       )
       session.add(assistant_msg)

       session.commit()

       return {"response": response, "conversation_id": conversation_id}
   ```

### Step 6: Register Chat Routes
1. Add to `backend/main.py`:
   ```python
   from backend.routes import chat  # Add to imports

   # Include chat router
   app.include_router(chat.router, prefix="/api", tags=["chat"])
   ```

## Phase 5: Frontend Integration

### Step 7: Create Chat Interface Component
1. Create `frontend/components/ChatInterface.tsx`:
   ```tsx
   'use client';

   import { useState } from 'react';
   import { Chat, type Message } from '@openai/chat-components';
   import { chatService } from '@/services/chatService';

   export function ChatInterface({ userId, initialConversationId }: { userId: string; initialConversationId?: string }) {
     const [conversationId, setConversationId] = useState(initialConversationId);
     const [messages, setMessages] = useState<Message[]>([]);

     const handleSend = async (input: string) => {
       // Send message to backend
       const response = await chatService.sendMessage(userId, input, conversationId);

       // Update conversation ID if new conversation was created
       if (response.conversation_id && !conversationId) {
         setConversationId(response.conversation_id);
       }

       // Update messages (you'll need to adapt based on your response structure)
       setMessages(prev => [...prev,
         { id: Date.now().toString(), role: 'user', content: input },
         { id: (Date.now() + 1).toString(), role: 'assistant', content: response.response }
       ]);
     };

     return (
       <div className="h-full flex flex-col">
         <Chat
           messages={messages}
           onSend={handleSend}
           welcomeMessage="Hello! I'm your AI assistant for managing tasks. You can say things like 'add a task to buy groceries' or 'show me my pending tasks'."
         />
       </div>
     );
   }
   ```

### Step 8: Integrate with Dashboard
1. Update `frontend/app/dashboard/page.tsx` to include chat interface
2. Add navigation between task and chat views

## Phase 6: Testing and Validation

### Step 9: Backend Tests
1. Create unit tests for custom tools
2. Create integration tests for chat endpoint
3. Verify user isolation in all operations

### Step 10: Frontend Tests
1. Create component tests for ChatInterface
2. Verify proper authentication flow
3. Test conversation persistence

## Running the Application

### Development
1. Start the backend: `cd backend && python -m uvicorn main:app --reload`
2. Start the frontend: `cd frontend && npm run dev`
3. Access the application at `http://localhost:3000`

### API Testing
1. Test the chat endpoint manually or with a tool like Postman
2. Verify conversation history persists across requests
3. Confirm that users can't access others' conversations

## Troubleshooting

### Common Issues
- **Gemini API errors**: Check that GEMINI_API_KEY is properly set
- **Database connection errors**: Verify DATABASE_URL is correct
- **Authentication failures**: Ensure user_id validation works correctly
- **CORS issues**: Check that frontend domain is properly configured

### Debugging Tips
- Enable logging in the chat endpoint to track requests
- Check database to verify conversations and messages are being stored correctly
- Monitor API usage to ensure rate limits aren't exceeded