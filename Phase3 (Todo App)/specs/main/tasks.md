# Implementation Tasks: Todo AI Chatbot

## Feature Overview
Implementation of a natural-language conversational interface that allows authenticated users to manage their todo tasks via chat. The system uses Google Gemini AI with custom tools to process natural language requests, with conversation state persisted in Neon PostgreSQL. The backend remains fully stateless with all tools validating user_id to enforce strong ownership.

## Implementation Strategy
Implement the Todo AI Chatbot in phases, starting with foundational database models and custom tools, followed by API endpoints, then frontend integration. Focus on creating an MVP that handles basic task operations through natural language, ensuring user isolation and conversation persistence. Each user story builds on the previous to create a complete, testable increment.

## User Stories Priority
Based on the feature specification, user stories prioritized as follows:
- **P1**: As a logged-in user, I want to tell the AI in natural language to manage my tasks so I don't have to use buttons/forms
- **P2**: As a user, I want conversations to continue where I left off even after refresh or server restart
- **P3**: As a user, I expect only my own tasks to be visible/editable (strong ownership enforcement)
- **P4**: As a user, I want the AI to always confirm what it did ("I've added...", "Task marked complete", etc.)
- **P5**: As a user, I want the AI to ask clarifying questions when my request is ambiguous

## Phase 1: Setup and Environment Configuration
Setup foundational elements required for all subsequent phases.

### Goal
Prepare the development environment and ensure all dependencies are properly configured for AI chatbot implementation.

### Independent Test Criteria
- Environment variables can be loaded successfully
- Dependencies for Google Gemini and database connections are installed
- Basic project structure is established according to plan

### Implementation Tasks

- [x] T001 Install Google Generative AI Python SDK dependency in backend
- [x] T002 Install ChatKit frontend dependency in frontend
- [x] T003 [P] Add GEMINI_API_KEY to backend/.env
- [x] T004 [P] Add database connection variables to backend/.env
- [x] T005 [P] Add CHATKIT domain variables to frontend/.env.local
- [x] T006 [P] Update backend requirements.txt with google-generativeai dependency
- [x] T007 [P] Update frontend package.json with @openai/chat-components dependency

## Phase 2: Foundational Models and Services
Implement the core data models and service layers needed for conversation management.

### Goal
Establish database models for conversations and messages with proper relationships and validation rules.

### Independent Test Criteria
- Conversation model can be created with proper user_id association
- Message model can be created with proper conversation_id association
- Models follow SQLModel patterns used elsewhere in the application
- Foreign key relationships are properly enforced

### Implementation Tasks

- [x] T008 [P] Extend backend/models.py with Conversation model
- [x] T009 [P] Extend backend/models.py with Message model
- [x] T010 [P] Update backend/main.py to register new models in startup
- [x] T011 [P] Create backend/services/conversation_service.py
- [x] T012 [P] Implement conversation CRUD operations in conversation_service.py
- [x] T013 [P] Implement message CRUD operations in conversation_service.py

## Phase 3: [US1] Natural Language Task Management
Enable users to tell the AI in natural language to manage their tasks instead of using buttons/forms.

### Goal
Implement the core custom tools that allow users to perform all five basic task operations (add, list, complete, delete, update) through natural language.

### Independent Test Criteria
- User can add tasks using natural language commands like "add buy milk and bread"
- User can list tasks using natural language commands like "show me my pending tasks"
- User can complete tasks using natural language commands like "mark task 4 as done"
- User can delete tasks using natural language commands like "delete grocery shopping task"
- User can update tasks using natural language commands like "change task 2 to call mom tonight"

### Implementation Tasks

- [x] T014 [P] Create backend/services/gemini_tools.py
- [x] T015 [US1] Implement add_task custom tool with user validation in gemini_tools.py
- [x] T016 [US1] Implement list_tasks custom tool with user validation in gemini_tools.py
- [x] T017 [US1] Implement complete_task custom tool with user validation in gemini_tools.py
- [x] T018 [US1] Implement delete_task custom tool with user validation in gemini_tools.py
- [x] T019 [US1] Implement update_task custom tool with user validation in gemini_tools.py
- [x] T020 [US1] Update existing task_service.py to enhance user validation for tools

## Phase 4: [US2] Persistent Conversation State
Ensure conversations continue where users left off after refresh or server restart.

### Goal
Implement conversation persistence and retrieval mechanisms to maintain context across sessions.

### Independent Test Criteria
- Conversation state is saved and can be retrieved after browser refresh
- Conversation history is loaded before each AI interaction
- Conversation continues properly after server restart
- Maximum 25 messages are loaded for token safety as specified

### Implementation Tasks

- [x] T021 [P] [US2] Update Message model to include proper indices for efficient loading
- [x] T022 [US2] Implement function to retrieve conversation history with message limit
- [x] T023 [US2] Implement function to save conversation messages (user and AI responses)
- [x] T024 [US2] Create helper functions for conversation creation and retrieval in conversation_service.py
- [x] T025 [US2] Add logic to enforce max 25 messages per request for token safety

## Phase 5: [US3] User Data Isolation
Ensure only users' own tasks and conversations are visible/editable.

### Goal
Implement robust user validation in all operations to prevent cross-user data access.

### Independent Test Criteria
- Users cannot access other users' conversations
- Users cannot modify other users' tasks through AI commands
- All tool operations validate user_id before execution
- Authentication is properly verified for all operations

### Implementation Tasks

- [x] T026 [P] [US3] Enhance conversation retrieval to validate user_id ownership
- [x] T027 [US3] Update custom tools to validate user_id before task operations
- [x] T028 [US3] Implement user_id validation in chat endpoint
- [x] T029 [US3] Add authentication middleware to protect conversation routes
- [x] T030 [US3] Add comprehensive user validation to all custom tools

## Phase 6: [US4] Action Confirmations
Ensure the AI always confirms what actions it has taken.

### Goal
Implement clear, user-friendly responses from the AI that confirm the results of each action.

### Independent Test Criteria
- AI responds with confirmation when tasks are added: "Added task: Buy milk and bread"
- AI responds with confirmation when tasks are completed: "Task 4 marked complete ✅"
- AI responds with confirmation when tasks are deleted: "Deleted task: Grocery shopping"
- AI responds with confirmation when tasks are updated: "Updated task 2 to 'call mom tonight'"
- AI provides helpful responses when tasks are not found or errors occur

### Implementation Tasks

- [x] T031 [P] [US4] Update custom tools to return properly formatted confirmation messages
- [x] T032 [US4] Enhance add_task tool to return formatted confirmation messages
- [x] T033 [US4] Enhance list_tasks tool to return well-formatted task lists
- [x] T034 [US4] Enhance complete_task tool to return formatted confirmation messages
- [x] T035 [US4] Enhance delete_task tool to return formatted confirmation messages
- [x] T036 [US4] Enhance update_task tool to return formatted confirmation messages

## Phase 7: [US5] AI Disambiguation
Enable the AI to ask clarifying questions when user requests are ambiguous.

### Goal
Implement AI behavior that handles ambiguous requests gracefully by seeking clarification.

### Independent Test Criteria
- AI asks clarifying questions when task IDs are unclear
- AI seeks clarification when task titles are ambiguous
- AI handles partial information appropriately
- AI gracefully handles unsupported operations

### Implementation Tasks

- [x] T037 [P] [US5] Update Gemini model instructions to include disambiguation guidelines
- [x] T038 [US5] Implement error handling in custom tools for ambiguous requests
- [x] T039 [US5] Add logic to custom tools to detect and handle invalid task IDs
- [x] T040 [US5] Implement fallback responses for unsupported operations

## Phase 8: Gemini Configuration and Backend API
Configure the Google Gemini model and implement the main chat API endpoint.

### Goal
Connect the custom tools to the Google Gemini model and expose them through the chat API endpoint.

### Independent Test Criteria
- Google Gemini model is configured with all 5 custom tools
- Chat endpoint receives messages and routes them to the model
- Tool calls are properly processed and results returned
- Model responses include proper confirmations

### Implementation Tasks

- [x] T041 [P] Create backend/core/gemini_config.py
- [x] T042 [P] Configure Google Gemini with custom tools in gemini_config.py
- [x] T043 [P] Implement model processing function in gemini_config.py
- [x] T044 Create backend/routes/chat.py
- [x] T045 Implement POST /api/{user_id}/chat endpoint in chat.py
- [x] T046 Add conversation_id handling to chat endpoint
- [x] T047 Connect model to chat endpoint with proper message handling
- [x] T048 Register chat routes in backend/main.py

## Phase 9: Frontend Integration
Integrate the chat interface into the existing frontend application.

### Goal
Provide a seamless chat interface that integrates with the existing dashboard while maintaining all current functionality.

### Independent Test Criteria
- Chat interface is accessible from the dashboard
- Conversation state persists across page refreshes
- User authentication is maintained during chat sessions
- Task list and chat can be used together

### Implementation Tasks

- [x] T049 [P] Create frontend/services/chatService.ts
- [x] T050 [P] Implement sendMessage function in chatService.ts
- [x] T051 [P] Create frontend/components/ChatInterface.tsx
- [x] T052 [P] Implement ChatKit integration in ChatInterface.tsx
- [x] T053 [P] Add conversation state management to ChatInterface.tsx
- [x] T054 [P] Create frontend/app/chat/[id]/page.tsx
- [x] T055 Integrate ChatInterface into frontend/app/dashboard/page.tsx
- [x] T056 Add navigation between task and chat views
- [x] T057 Update frontend layout to accommodate chat interface

## Phase 10: Polish and Cross-Cutting Concerns
Address final integration issues, testing, and documentation.

### Goal
Complete the implementation with proper error handling, testing, and documentation.

### Independent Test Criteria
- All endpoints properly handle errors and edge cases
- Security measures are in place to prevent unauthorized access
- Performance requirements are met (<6 second response times)
- All functionality is documented appropriately

### Implementation Tasks

- [x] T058 Add comprehensive error handling to chat endpoint
- [x] T059 [P] Add logging to track chat interactions and errors
- [x] T060 [P] Update README with chat feature instructions
- [x] T061 [P] Add API documentation for chat endpoints
- [x] T062 Add basic unit tests for custom tools
- [x] T063 Add integration tests for chat endpoint
- [x] T064 Perform end-to-end testing of complete chat workflow
- [x] T065 Optimize performance to meet response time requirements

## Phase 11: Package Migration
- [x] T066 Migrate from legacy google-generativeai to new google-genai SDK
- [x] T067 Update requirements.txt and gemini_config.py to use client-based API
- [x] T068 Verify conversational flow and tool execution with the new SDK

## Dependencies Between User Stories
- US1 (Task Management) is foundational for US2 (Persistence) and US3 (Isolation)
- US2 (Persistence) and US3 (Isolation) must be completed before US4 (Confirmations) and US5 (Disambiguation)
- US4 (Confirmations) and US5 (Disambiguation) rely on US1-3 being functional

## Parallel Execution Opportunities
- Backend model development (T008-T012) can run in parallel with environment setup (T001-T007)
- Custom tools implementation (T014-T019) can be developed in parallel across different team members
- Frontend component development (T049-T054) can happen in parallel with backend API implementation (T041-T048)
- Service layer enhancements (T021-T030) can be parallelized with custom tool development

## MVP Scope
Minimal Viable Product includes:
- US1: Natural language task management (core functionality)
- US2: Conversation persistence across sessions
- US3: User isolation for data security
- Essential parts of US4: Basic action confirmations
- Backend API and basic frontend integration