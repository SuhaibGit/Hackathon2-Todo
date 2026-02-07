<!-- SYNC IMPACT REPORT:
Version change: N/A -> 1.0.0
Added sections: All sections filled with project-specific content
Modified principles: All placeholders replaced with project-specific principles
Removed sections: None
Templates requiring updates: ⚠️ Manual check needed for .specify/templates/plan-template.md, .specify/templates/spec-template.md, .specify/templates/tasks-template.md, .specify/templates/commands/*.md
Follow-up TODOs: None
-->

# hackathon-todo Constitution

## Core Principles

### Specification Primacy
All code generation MUST reference at least one @specs/... file. If something is ambiguous/missing → propose spec change via propose_spec_change skill/tool instead of guessing. Specs > CLAUDE.md > agent instructions > code.

### Strict User Isolation & Security
Every API operation MUST verify JWT and enforce user_id match. 401 on missing/invalid token, 403 on ownership mismatch, 404 on not found. Never return or allow modification of another user's data. Frontend MUST attach Bearer token to every API request.

### Layer Separation & Scope
BackendEngineer ONLY touches /backend/. FrontendEngineer ONLY touches /frontend/. AuthSpecialist handles Better Auth config + JWT verification + auth flows. IntegrationTester ONLY activates after implementation completion.

### Testability & Evals-First
Every spec addition MUST include measurable acceptance criteria. Prefer falsifiable statements: "Returns 401 when token missing" instead of "handles auth securely". Integration tests MUST cover happy path + negative cases + isolation.

### Minimalism & MVP Focus
No extra features beyond Phase II requirements (task CRUD + auth). Non-goals: real-time sync, due dates, categories, file attachments, admin panel. Defer phase III (chatbot) until phase II is fully working & tested.

### Code Quality & Maintainability
Use dependency injection, context managers, Pydantic models. Server components default in Next.js, client only for interactivity. Tailwind only – no inline styles. Clear error handling with HTTPException / try-catch.

## Enforced Constraints & Non-Goals

**Monorepo Structure**: Root CLAUDE.md + /frontend (Next.js 16+ App Router, TS, Tailwind) + /backend (FastAPI, SQLModel, Neon Serverless PostgreSQL)

**Authentication**: Better Auth (frontend) + JWT tokens (shared secret via BETTER_AUTH_SECRET env var) for stateless backend verification

**API**: RESTful under /api/{user_id}/tasks with strict ownership enforcement (token.sub == path user_id)

**Database**: Neon PostgreSQL – tasks table with user_id foreign key, indexes on user_id and completed

**Non-goals**: Real-time sync, due dates, categories, file attachments, admin panel, advanced reporting, notifications, sharing functionality, import/export features

## Agent Responsibilities Summary

**SpecMaster**: Reviews requirements, validates alignment with specifications, ensures comprehensive coverage of user stories and edge cases

**FrontendEngineer**: Implements Next.js 16+ App Router pages, components, forms, and client-side logic. Uses TypeScript and Tailwind CSS. Handles JWT token management and API integration

**BackendEngineer**: Creates FastAPI endpoints, SQLModel database models, authentication middleware, JWT verification, and implements business logic with strict user isolation

**AuthSpecialist**: Configures Better Auth, manages JWT token lifecycle, implements secure authentication flows, ensures consistent authentication across frontend and backend

**IntegrationTester**: Performs end-to-end testing of the complete application flow, validates user isolation, tests authentication flows, confirms API and UI integration

## Activation & Coordination Rules

**Agentic Dev Stack Workflow**: Write/Update spec → Plan → Break into tasks → Implement via agents (no hand-coding)

**Feature Development Sequence**: Start with SpecMaster for any new feature. Use numbered plans with agent assignments. IntegrationTester as final gate before considering feature done.

**Agent Prefixing**: All agents prefix responses with [AgentName] to ensure accountability and clear communication.

**Coordination Points**:
- Before implementation begins: SpecMaster validates completeness
- During implementation: Agents coordinate via shared spec reference
- After implementation: IntegrationTester validates end-to-end functionality

## Quality Gates & Test Expectations

**Specification Quality**: Every feature specification must include measurable acceptance criteria, error handling requirements, and security considerations.

**Implementation Quality**:
- All code must follow TypeScript/Python best practices
- Authentication and authorization verified at each API endpoint
- Proper error handling with appropriate HTTP status codes
- Type safety maintained throughout

**Testing Coverage**:
- Unit tests for all business logic components
- Integration tests for API endpoints
- End-to-end tests covering user workflows
- Negative test cases (invalid tokens, wrong user IDs, etc.)
- User isolation tests (ensure users can't access others' data)

**Security Validation**:
- JWT token verification at all protected endpoints
- User ID comparison between token and request path
- Input sanitization and validation
- Proper CORS configuration

## Governance

All development must be strictly driven by specifications in /specs/. No assumptions, no manual coding outside agentic workflow. Every change must trace back to a spec file or constitution principle. The "Specs Are the New Syntax" philosophy governs all code generation activities.

Amendments to this constitution require explicit justification, team approval, and corresponding updates to all dependent templates and documentation. The constitution supersedes all other development practices and guidelines.

**Version**: 1.0.0 | **Ratified**: 2026-02-04 | **Last Amended**: 2026-02-04