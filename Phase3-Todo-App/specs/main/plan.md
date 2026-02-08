# Implementation Plan: Todo AI Chatbot

**Branch**: `3-chatbot-feature` | **Date**: 2026-02-06 | **Spec**: [chatbot.md](../features/chatbot.md)
**Input**: Feature specification from `/specs/features/chatbot.md`

## Summary

Implementation of a natural-language conversational interface that allows authenticated users to manage their todo tasks via chat. The system will use Google Gemini AI with custom tools to process natural language requests, with conversation state persisted in Neon PostgreSQL. The backend remains fully stateless with all tools validating user_id to enforce strong ownership.

## Technical Context

**Language/Version**: Python 3.11, TypeScript 5.0
**Primary Dependencies**: FastAPI, Google Generative AI SDK, SQLModel, Next.js 14, ChatKit
**Storage**: Neon PostgreSQL database with SQLAlchemy/SQLModel ORM
**Testing**: pytest for backend, Jest for frontend
**Target Platform**: Web application with server-side API and React frontend
**Project Type**: Web application (frontend + backend architecture)
**Performance Goals**: <6 second end-to-end response time, support 200+ consecutive chat requests
**Constraints**: Max 25 messages per request for token safety, user isolation required
**Scale/Scope**: Individual user conversations, no multi-user chats

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- ✅ Single responsibility: Chatbot feature focused on todo management
- ✅ Statelessness: Backend remains stateless as required by spec
- ✅ User isolation: All operations validate user_id for security
- ✅ Technology alignment: Uses specified Google Gemini AI + custom tools
- ✅ Data persistence: Conversation history stored in Neon PostgreSQL
- ✅ Performance: Response time under 6 seconds as specified

## Project Structure

### Documentation (this feature)

```text
specs/features/chatbot/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
backend/
├── src/
│   ├── models/
│   │   ├── __init__.py
│   │   ├── task.py
│   │   ├── user.py
│   │   ├── conversation.py        # New: Conversation model
│   │   └── message.py             # New: Message model for chat history
│   ├── services/
│   │   ├── __init__.py
│   │   ├── task_service.py
│   │   ├── conversation_service.py # New: Conversation management
│   │   └── gemini_tools.py        # New: Custom tools implementation
│   ├── api/
│   │   ├── __init__.py
│   │   └── chat.py                # New: Chat endpoint
│   └── core/
│       ├── __init__.py
│       └── gemini_config.py       # New: Gemini configuration
├── routes/
│   ├── __init__.py
│   ├── tasks.py
│   └── chat.py                    # New: Chat API routes
└── tests/
    ├── unit/
    ├── integration/
    └── contract/

frontend/
├── src/
│   ├── components/
│   │   ├── __init__.py
│   │   ├── ChatInterface.tsx      # New: ChatKit integration
│   │   └── TaskListWithChat.tsx   # New: Combined task/chat UI
│   ├── pages/
│   │   ├── dashboard/
│   │   │   └── index.tsx          # Updated: Add chat interface
│   │   └── chat/
│   │       └── [conversationId].tsx # New: Dedicated chat page
│   └── services/
│       ├── api.ts
│       └── chatService.ts         # New: Chat API client
├── app/
│   ├── dashboard/
│   │   └── page.tsx               # Updated: Integrate chat
│   └── chat/
│       └── [id]/
│           └── page.tsx           # New: Dynamic chat page
└── tests/
    ├── unit/
    └── integration/
```

**Structure Decision**: Web application structure selected with clear separation between frontend and backend. New models, services, and API routes created for chat functionality while maintaining existing task management infrastructure.

## Phase 1: Database Models

### 1. Conversation Model
- Create Conversation model with id, user_id, created_at, updated_at
- Implement proper foreign key relationship to User

### 2. Message Model
- Create Message model with id, conversation_id, role, content, created_at
- Link to Conversation with foreign key relationship

## Phase 2: Custom Tools Implementation

### 3. Task Custom Tools
- Implement add_task custom tool with user validation
- Implement list_tasks custom tool with user validation
- Implement complete_task custom tool with user validation
- Implement delete_task custom tool with user validation
- Implement update_task custom tool with user validation

### 4. Service Layer
- Create conversation_service.py with CRUD operations
- Enhance existing task_service.py with user validation in tools

## Phase 3: Gemini Configuration & Chat Endpoint

### 5. Model Setup
- Configure Google Gemini with custom tools
- Set up proper error handling and response formatting

### 6. Chat API Endpoint
- Create POST /api/{user_id}/chat endpoint
- Implement conversation_id parameter handling
- Load conversation history before model run
- Store responses and tool call results as messages

## Phase 4: Frontend Integration

### 7. Chat Interface Component
- Implement ChatKit integration in frontend
- Create dedicated chat UI component
- Handle conversation_id routing

### 8. Dashboard Integration
- Integrate chat interface into existing dashboard
- Add navigation between tasks and chat
- Maintain existing task UI alongside chat

## Phase 5: Environment & Security

### 9. Environment Variables
- Add GEMINI_API_KEY to backend and frontend env
- Configure database connection for Neon
- Set up proper CORS for ChatKit

### 10. Security & Validation
- Implement user_id validation in all custom tools
- Add rate limiting considerations
- Secure conversation access by user ownership

## Phase 6: Testing & Documentation

### 11. Backend Tests
- Unit tests for custom tools
- Integration tests for chat endpoint
- Security tests for user isolation

### 12. Frontend Tests
- Component tests for chat interface
- Integration tests for API communication
- User flow testing for chat-task interaction

### 13. Documentation Updates
- Update README with chat feature instructions
- Add API documentation for chat endpoints
- Create quickstart guide for chat functionality

## Implementation Tasks

1. **Create Database Models** - Create Conversation and Message models in backend/models.py
2. **Implement Custom Tools** - Build the 5 required custom tools in backend/services/gemini_tools.py
3. **Build Chat Endpoint** - Create the chat API endpoint in backend/routes/chat.py
4. **Configure Gemini** - Set up Google Gemini with proper tools and configuration
5. **Create Chat Frontend** - Implement ChatKit integration in frontend components
6. **Integrate with Dashboard** - Connect chat functionality to existing dashboard
7. **Add Security Checks** - Ensure all operations validate user_id properly
8. **Test Implementation** - Write and run tests for all new functionality
9. **Update Documentation** - Update README and add usage instructions

## Environment Variables Required
- `GEMINI_API_KEY` - For accessing Google Gemini API
- `DATABASE_URL` - For Neon PostgreSQL connection
- `BETTER_AUTH_SECRET` - For JWT verification
- `NEXT_PUBLIC_CHATKIT_ALLOWED_DOMAIN` - For ChatKit domain allowlist

## Success Criteria
- 85%+ of 20 diverse natural-language test inputs correctly trigger the intended custom tool(s)
- 100% of task-modifying operations are isolated to the requesting user_id
- Conversation can be resumed correctly when same conversation_id is sent after 5+ minutes
- No data leakage possible between users
- Typical end-to-end response time < 6 seconds
- Server memory usage remains stable after 200 consecutive chat requests

## Verification / Demo Checklist
- [ ] User can create tasks via natural language: "add buy milk and bread"
- [ ] User can list tasks via natural language: "show me my pending tasks"
- [ ] User can complete tasks via natural language: "mark task 4 as done"
- [ ] User can delete tasks via natural language: "delete grocery shopping task"
- [ ] User can update tasks via natural language: "change task 2 to call mom tonight"
- [ ] AI provides friendly confirmation for all actions taken
- [ ] Conversations persist across refreshes and server restarts
- [ ] User authentication is validated on all operations
- [ ] Users cannot access other users' tasks or conversations
- [ ] AI asks clarifying questions when requests are ambiguous
- [ ] Conversation history is maintained properly
- [ ] Response time stays under 6 seconds

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| Additional DB tables | Required for storing conversation state | Specification mandates persistent chat history |
| Custom tools layer | Required by spec to use Google Gemini + custom tools | Direct API calls wouldn't meet spec requirements |
