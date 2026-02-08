# Research: Todo AI Chatbot Implementation

## Overview
This document captures research findings and decisions made during the planning phase for implementing the AI Chatbot feature for the Todo application.

## Gemini AI Architecture Research

### Google Generative AI Integration
- **Decision**: Use Google Gemini Pro with custom tools for the task management functionality
- **Rationale**: Gemini provides strong natural language understanding and tool calling capabilities
- **Alternatives considered**:
  - OpenAI GPT models: More expensive and less accessible in certain regions
  - Self-hosted models: More complex infrastructure requirements

### Custom Tools Implementation
- **Decision**: Implement custom tools using Python, interfacing with existing backend services
- **Rationale**: Custom tools provide standardized way to extend LLM capabilities with domain-specific functions
- **Alternatives considered**:
  - Traditional REST API calls: Would not leverage AI model's tool calling capabilities
  - Pre-built tools: Would not meet specific requirements in spec

## Database Design Research

### Conversation and Message Models
- **Decision**: Create two new models - Conversation and Message - to store chat history
- **Rationale**: Need to persist conversation context between requests for continuity
- **Schema considerations**:
  - Conversation: id, user_id (foreign key to User), created_at, updated_at
  - Message: id, conversation_id (foreign key to Conversation), role (user/assistant/tool), content, created_at

### Relationship Design
- **Decision**: One-to-many relationship between Conversation and Message
- **Rationale**: Each conversation contains multiple messages forming the chat history
- **Security aspect**: Both models include user_id for proper ownership enforcement

## Authentication and Security Research

### User Isolation
- **Decision**: Validate user_id in every custom tool and chat endpoint
- **Rationale**: Specification requires no cross-user data access
- **Implementation**: Use existing JWT validation from auth.py and extend to new endpoints

### Token Safety
- **Decision**: Limit conversation history to last 25 messages as specified
- **Rationale**: Prevents token overflow and maintains performance
- **Implementation**: Query optimization to load only recent messages

## Frontend Integration Research

### ChatKit Integration
- **Decision**: Use OpenAI ChatKit for the frontend chat interface
- **Rationale**: Provides polished chat UX without building from scratch
- **Domain requirements**: Need to configure domain allowlist for ChatKit

### User Experience Flow
- **Decision**: Integrate chat into existing dashboard while also providing standalone chat page
- **Rationale**: Maintains existing workflow while adding new functionality
- **Alternatives considered**: Separate app vs integrated experience

## Technical Architecture Research

### Stateless Backend Design
- **Decision**: Load full conversation history from DB before each model run
- **Rationale**: Maintains statelessness requirement while preserving conversation context
- **Performance consideration**: Caching layer might be needed for high-volume usage

### Tool Response Handling
- **Decision**: Store both assistant responses and tool call results as messages
- **Rationale**: Provides complete conversation history including system actions
- **Implementation**: Custom message type to distinguish between user/assistant/tool messages

## Implementation Approach Research

### Incremental Development
- **Decision**: Phase-based approach starting with backend, then API, then frontend
- **Rationale**: Ensures solid foundation before building upon it
- **Phases**:
  1. Database models and custom tools
  2. API endpoints and Gemini configuration
  3. Frontend integration and testing

## Environment and Dependencies

### Required Dependencies
- Google Generative AI Python SDK for Gemini API
- Additional SQLModel models for conversation/message
- Possible additional dependencies for tool calling implementation

### Configuration Requirements
- GEMINI_API_KEY for API access
- Database connection for Neon PostgreSQL
- Proper CORS setup for ChatKit integration