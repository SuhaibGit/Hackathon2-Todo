# Frontend-First Completion Plan – hackathon-todo

**Branch**: `1-todo-frontend` | **Date**: 2026-02-04 | **Spec**: [link]
**Input**: Feature specification from `/specs/todo-frontend/spec.md`

**Note**: This template is filled in by the `/sp.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Build a responsive, functional Next.js frontend that supports all Phase II user stories using mock data/localStorage while the backend API is incomplete. The frontend will be designed to be "pluggable" with minimal changes needed when switching from mocks to real FastAPI endpoints. Uses Better Auth for authentication and follows mobile-first responsive design with Tailwind CSS.

## Technical Context

**Language/Version**: TypeScript, Next.js 16+
**Primary Dependencies**: Next.js App Router, Better Auth, Tailwind CSS
**Storage**: localStorage for task persistence (mock), JWT tokens for auth
**Testing**: Integration testing planned for later
**Target Platform**: Web application (mobile/desktop browsers)
**Project Type**: Web application with frontend and authentication
**Performance Goals**: <1 second perceived response time, mobile-responsive
**Constraints**: All API calls through centralized lib/api.ts, protected routes, mobile-first design
**Scale/Scope**: Single user interface per session, task management features

## Constitution Check

- [x] Specification Primacy: Following the spec at specs/todo-frontend/spec.md
- [x] Strict User Isolation & Security: JWT token handling for auth state
- [x] Layer Separation & Scope: FrontendEngineer will handle only /frontend/ files
- [x] Testability & Evals-First: Planning for testable acceptance criteria
- [x] Minimalism & MVP Focus: Focusing on core CRUD and auth functionality
- [x] Code Quality & Maintainability: Using TypeScript and Tailwind CSS
- [x] Workflow & Agent Coordination: Using FrontendEngineer and AuthSpecialist as needed

## Project Structure

### Documentation (this feature)

```text
specs/todo-frontend/
├── plan.md              # This file (/sp.plan command output)
├── research.md          # Phase 0 output (/sp.plan command)
├── data-model.md        # Phase 1 output (/sp.plan command)
├── quickstart.md        # Phase 1 output (/sp.plan command)
├── contracts/           # Phase 1 output (/sp.plan command)
└── tasks.md             # Phase 2 output (/sp.tasks command - NOT created by /sp.plan)
```

### Source Code (repository root)

```text
frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── auth/
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── tasks/
│   │   ├── TaskList.tsx
│   │   ├── TaskItem.tsx
│   │   ├── TaskForm.tsx
│   │   └── TaskModal.tsx
│   └── ui/
│       └── ProtectedRoute.tsx
├── lib/
│   └── api.ts
├── styles/
│   └── globals.css
└── types/
    └── index.ts
```

**Structure Decision**: Chose web application structure with separate frontend directory for Next.js application, following Next.js App Router conventions.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|

## Current Status & Assumptions

- Backend API not yet fully implemented → using mock responses in lib/api.ts
- Better Auth handles signup/signin + JWT issuance on frontend
- Simulating user-specific tasks with localStorage keyed by user ID/email
- No real database calls yet — deferring Neon + SQLModel integration to next phase
- All API calls will go through centralized lib/api.ts (with token handling)
- Protected routes will redirect to signin when not authenticated
- Mobile-first responsive UI with Tailwind CSS

## Key Decisions / Trade-offs

1. **Mock-First Strategy**: Building with localStorage mocks first to enable parallel frontend/backend development
2. **Centralized API Client**: All backend communication through lib/api.ts to enable easy switching from mocks to real API
3. **Protected Routes**: Implementing client-side route guards for authentication checks
4. **Responsive Design**: Mobile-first approach using Tailwind CSS utility classes
5. **Type Safety**: Using TypeScript for strong typing across the application

## Mock API Strategy

- Create lib/api.ts with mock implementations that simulate API responses
- Use 300-800ms artificial delays to simulate network latency
- Store tasks in localStorage keyed by user ID to simulate multi-user data isolation
- Simulate JWT token in memory/session for authentication state
- Mock all required endpoints based on @specs/api/rest-endpoints.md shapes:
  - GET /api/users/{user_id}/tasks → return user's tasks from localStorage
  - POST /api/users/{user_id}/tasks → create task in localStorage
  - PUT /api/users/{user_id}/tasks/{task_id} → update task in localStorage
  - DELETE /api/users/{user_id}/tasks/{task_id} → remove task from localStorage
  - GET /api/users/{user_id}/tasks/{task_id} → get specific task from localStorage

## Implementation Plan

1. **Project Setup and Authentication Foundation**
   - Agent: AuthSpecialist
   - Files: frontend/package.json, frontend/lib/auth.ts, frontend/middleware.ts
   - Dependencies: none
   - Description: Set up Next.js project structure, configure Better Auth, implement JWT handling, create authentication middleware
   - Acceptance criteria: Authentication system initialized and able to issue tokens

2. **Authentication UI Components**
   - Agent: FrontendEngineer
   - Files: frontend/components/auth/LoginForm.tsx, frontend/components/auth/SignupForm.tsx
   - Dependencies: task #1
   - Description: Create reusable authentication forms with validation and error handling
   - Acceptance criteria: Forms render correctly, validate inputs, handle submission errors

3. **Auth Pages (Signin and Signup)**
   - Agent: FrontendEngineer
   - Files: frontend/app/auth/signin/page.tsx, frontend/app/auth/signup/page.tsx
   - Dependencies: task #2
   - Description: Create sign-in and sign-up pages using the auth components
   - Acceptance criteria: Both pages render properly, forms work, successful auth redirects to dashboard

4. **Protected Route Component**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/ProtectedRoute.tsx
   - Dependencies: task #1
   - Description: Create a higher-order component to wrap protected routes
   - Acceptance criteria: Unauthenticated users are redirected to signin, authenticated users see content

5. **Main Dashboard Layout**
   - Agent: FrontendEngineer
   - Files: frontend/app/layout.tsx, frontend/app/dashboard/page.tsx
   - Dependencies: task #3, task #4
   - Description: Create the main dashboard page with protected route wrapper
   - Acceptance criteria: Dashboard is only accessible when logged in, proper layout rendered

6. **Task Types and API Client**
   - Agent: FrontendEngineer
   - Files: frontend/types/index.ts, frontend/lib/api.ts
   - Dependencies: task #1
   - Description: Define task type interfaces and create centralized API client with mock implementations
   - Acceptance criteria: Type definitions match spec, API client handles all CRUD operations with mocks

7. **Task List Component**
   - Agent: FrontendEngineer
   - Files: frontend/components/tasks/TaskList.tsx, frontend/components/tasks/TaskItem.tsx
   - Dependencies: task #6
   - Description: Create components to display the list of tasks with completion toggling
   - Acceptance criteria: Tasks display with title, completion status, and creation date; toggle works with optimistic UI updates

8. **Task Creation and Editing Components**
   - Agent: FrontendEngineer
   - Files: frontend/components/tasks/TaskForm.tsx, frontend/components/tasks/TaskModal.tsx
   - Dependencies: task #7
   - Description: Create forms for creating and editing tasks with validation
   - Acceptance criteria: Forms validate title (1-200 chars), pre-fill data for editing, handle submission properly

9. **Complete Task CRUD Operations**
   - Agent: FrontendEngineer
   - Files: frontend/app/dashboard/page.tsx, components integrated
   - Dependencies: task #8
   - Description: Integrate all components to implement full CRUD functionality
   - Acceptance criteria: All task operations work (create, read, update, delete) with mock backend

10. **Loading States and Error Handling**
    - Agent: FrontendEngineer
    - Files: Update existing components with loading/error states
    - Dependencies: task #9
    - Description: Add proper loading spinners, error messages, and user feedback
    - Acceptance criteria: UI shows appropriate loading states during operations, error messages are user-friendly

11. **Responsive Design and Styling**
    - Agent: FrontendEngineer
    - Files: frontend/styles/globals.css, components updated with Tailwind
    - Dependencies: task #10
    - Description: Apply mobile-first responsive design with Tailwind CSS
    - Acceptance criteria: UI works well on mobile and desktop screen sizes

12. **Final Integration and Testing**
    - Agent: IntegrationTester
    - Files: Review all components and flows
    - Dependencies: task #11
    - Description: Test complete user flows and ensure everything works together
    - Acceptance criteria: All user stories from spec work end-to-end, no console errors, accessibility basics covered

## Definition of Done (Frontend MVP)
- [x] All pages/routes exist and render
- [ ] Auth flow works (signup → login → dashboard → logout)
- [ ] Task CRUD works with mocks (create/list/edit/delete/toggle)
- [ ] UI is responsive on mobile/desktop
- [ ] lib/api.ts abstracts all calls (easy to swap mocks → real)
- [ ] Protected routes redirect correctly
- [ ] No console errors / basic accessibility

## Next Phase Recommendation
After this plan is executed → run IntegrationTester on frontend mocks, then proceed to backend implementation or full connection.