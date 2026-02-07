# Feature Specification: Complete Backend Implementation – FastAPI + Neon PostgreSQL + JWT User Isolation (Phase II)

**Feature Branch**: `1-backend-implementation`
**Created**: 2026-02-05
**Status**: Draft
**Input**: User description: "Complete Backend Implementation – FastAPI + Neon PostgreSQL + JWT User Isolation (Phase II)

Objective:
Build a secure, production-ready FastAPI backend that fully supports the Todo app's core features with real database persistence and strict multi-user isolation. The backend must enforce ownership (only return/modify tasks belonging to the authenticated user) and integrate seamlessly with the existing frontend (via lib/api.ts).

User Stories to cover (from @specs/features/task-crud.md):
- As a user, I can create a new task (title required, description optional)
- As a user, I can list only my own tasks
- As a user, I can view details of one of my tasks
- As a user, I can update one of my tasks
- As a user, I can delete one of my tasks
- As a user, I can toggle completion status of one of my tasks

Acceptance Criteria:
- All endpoints live under /api/{user_id}/tasks (as defined in @specs/api/rest-endpoints.md)
- Every protected endpoint MUST:
  - Verify JWT token from Authorization: Bearer header
  - Extract user_id from token.sub claim
  - Enforce token.sub === path user_id (403 Forbidden if mismatch)
  - Filter all queries by user_id
  - Return 401 Unauthorized if no/malformed/expired token
  - Return 404 Not Found if task doesn't exist or not owned
- Use SQLModel for ORM/models
- Use Neon PostgreSQL (DATABASE_URL env var)
- Use Pydantic models for request/response bodies
- Proper error handling with HTTPException
- Connection pooling & session management
- Startup event creates tables if missing
- CORS configured to allow frontend origin (http://localhost:3000 in dev)

Database Schema (from @specs/database/schema.md):
- users table managed by Better Auth (id string PK, email, etc.)
- tasks table:
  - id: int PK auto-increment
  - user_id: str (foreign key to users.id, indexed)
  - title: str not null
  - description: str nullable
  - completed: bool default false
  - created_at: datetime
  - updated_at: datetime

Non-Goals (defer):
- Task due dates / priorities / categories
- Pagination / filtering / sorting beyond basic
- Rate limiting / advanced security headers
- Soft deletes / audit logs
- WebSocket / real-time

Tech constraints:
- FastAPI
- SQLModel (ORM)
- PyJWT or python-jose for JWT verification
- Same BETTER_AUTH_SECRET as frontend
- Uvicorn for dev server
- docker-compose support (already in monorepo)

Integration plan:
- Frontend lib/api.ts will switch from mocks/localStorage to real fetch calls
- No breaking changes to frontend API shape

Output structure:
1. Read relevant specs (@specs/api/rest-endpoints.md, @specs/database/schema.md, @specs/features/task-crud.md, @specs/features/authentication.md)
2. Summary of backend requirements & security model
3. File structure delta (/backend/ models.py, routes/tasks.py, dependencies.py, db.py, main.py)
4. Numbered implementation plan (8–14 tasks)
   - Task title
   - Primary agent: BackendEngineer
   - Files to create/edit
   - Dependencies (previous tasks)
   - Key implementation notes (JWT dep, ownership check, etc.)
   - Acceptance criteria
5. Definition of Done for backend phase
6. Next recommended command (e.g. /sp.plan full-stack connection, or IntegrationTester activation)

Be precise about security — user isolation must be bulletproof.
Prioritize correctness over features."

## User Scenarios & Testing *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY TESTABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.

  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Tested independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - Create New Task (Priority: P1)

As a user, I can create a new task with a required title and optional description. When I submit the form, my task should be securely stored in the database under my user account and immediately appear in my task list.

**Why this priority**: This is the core functionality that enables users to start using the application. Without the ability to create tasks, no other features matter.

**Independent Test**: Can be fully tested by submitting a task creation request with valid JWT and verifying the task appears in the user's list with correct ownership.

**Acceptance Scenarios**:

1. **Given** I am logged in with valid JWT, **When** I POST to `/api/{my_user_id}/tasks` with valid title, **Then** task is created with my user_id and returns 201 Created
2. **Given** I am logged in with valid JWT, **When** I POST to `/api/{my_user_id}/tasks` with title and description, **Then** task is created with both fields and returns 201 Created

---

### User Story 2 - List My Tasks (Priority: P1)

As a user, I can view a list of only my own tasks. When I visit my dashboard, I should only see tasks that belong to my account, not tasks from other users.

**Why this priority**: Essential for the core user experience - users need to see their tasks to derive value from the application.

**Independent Test**: Can be fully tested by creating tasks for multiple users and verifying each user only sees their own tasks when hitting the list endpoint.

**Acceptance Scenarios**:

1. **Given** I have multiple tasks in my account, **When** I GET `/api/{my_user_id}/tasks`, **Then** I receive only my tasks and no others
2. **Given** I have no tasks, **When** I GET `/api/{my_user_id}/tasks`, **Then** I receive an empty array

---

### User Story 3 - View Task Details (Priority: P2)

As a user, I can view detailed information about one of my tasks. When I click on a task, I should see its title, description, completion status, and timestamps.

**Why this priority**: Provides important functionality for users to review task details without having to edit them.

**Independent Test**: Can be fully tested by retrieving a specific task with valid JWT and verifying only tasks owned by the user can be accessed.

**Acceptance Scenarios**:

1. **Given** I own a task with ID 'task123', **When** I GET `/api/{my_user_id}/tasks/task123`, **Then** I receive the task details
2. **Given** I don't own a task with ID 'task456', **When** I GET `/api/{my_user_id}/tasks/task456`, **Then** I receive 404 Not Found

---

### User Story 4 - Update Task (Priority: P2)

As a user, I can modify the details of one of my tasks, including title, description, and completion status. Changes should be reflected immediately and only be accessible to me.

**Why this priority**: Enables users to maintain and refine their tasks over time, improving usability.

**Independent Test**: Can be fully tested by updating a task with valid JWT and verifying changes persist and ownership is enforced.

**Acceptance Scenarios**:

1. **Given** I own a task, **When** I PUT/PATCH `/api/{my_user_id}/tasks/{task_id}` with updated data, **Then** task is updated and returns 200 OK
2. **Given** I don't own a task, **When** I PUT/PATCH `/api/{my_user_id}/tasks/{other_user_task_id}`, **Then** I receive 404 Not Found

---

### User Story 5 - Delete Task (Priority: P2)

As a user, I can delete one of my tasks when it's no longer needed. The task should be permanently removed from my account and no longer appear in my lists.

**Why this priority**: Essential for task management lifecycle - users need to clean up completed or irrelevant tasks.

**Independent Test**: Can be fully tested by deleting a task with valid JWT and verifying it's removed from the user's account only.

**Acceptance Scenarios**:

1. **Given** I own a task, **When** I DELETE `/api/{my_user_id}/tasks/{task_id}`, **Then** task is deleted and returns 200 OK
2. **Given** I don't own a task, **When** I DELETE `/api/{my_user_id}/tasks/{other_user_task_id}`, **Then** I receive 404 Not Found

---

### User Story 6 - Toggle Task Completion (Priority: P1)

As a user, I can mark one of my tasks as completed or incomplete with a simple toggle action. The completion status should update immediately and be reflected in the UI.

**Why this priority**: This is one of the most common task operations and central to the app's core value proposition.

**Independent Test**: Can be fully tested by toggling a task's completion status and verifying the change persists and is properly isolated to the user.

**Acceptance Scenarios**:

1. **Given** I own an incomplete task, **When** I call the toggle endpoint, **Then** task becomes completed and returns updated status
2. **Given** I own a completed task, **When** I call the toggle endpoint, **Then** task becomes incomplete and returns updated status

---

### Edge Cases

- What happens when JWT token doesn't match the user_id in the path? (Should return 403 Forbidden)
- How does system handle malformed JWT tokens? (Should return 401 Unauthorized)
- What if user tries to access tasks with invalid task ID format? (Should return 404 Not Found)
- How does system handle concurrent updates to the same task? (Should handle gracefully with proper transaction isolation)

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST verify JWT token from Authorization: Bearer header on all protected endpoints
- **FR-002**: System MUST extract user_id from token.sub claim and enforce token.sub === path user_id
- **FR-003**: System MUST filter all task queries by user_id to enforce ownership isolation
- **FR-004**: System MUST return 401 Unauthorized for missing/malformed/expired tokens
- **FR-005**: System MUST return 404 Not Found for tasks that don't exist or aren't owned by the user
- **FR-006**: System MUST store tasks in PostgreSQL with user_id foreign key relationship to users table
- **FR-007**: System MUST support CRUD operations for tasks (Create, Read, Update, Delete)
- **FR-008**: System MUST support toggling completion status of tasks with optimistic update capability
- **FR-009**: System MUST validate task title is between 1-200 characters on creation/update
- **FR-010**: System MUST use SQLModel ORM for database operations
- **FR-011**: System MUST implement proper error handling with appropriate HTTP status codes
- **FR-012**: System MUST configure CORS to allow frontend origin (http://localhost:3000)

### Key Entities *(include if feature involves data)*

- **Task**: Represents a user's task with title, description, completion status, timestamps, and user_id relationship
- **User**: Represents a user account managed by Better Auth with string ID, email, etc.

## Success Criteria *(mandatory)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: Users can create tasks that persist across sessions with 99.9% reliability
- **SC-002**: Users can only access tasks they own (zero cross-user data leakage in testing)
- **SC-003**: Task operations (CRUD) complete within 1 second 95% of the time under normal load
- **SC-004**: JWT authentication and authorization enforces proper user isolation without exceptions
- **SC-005**: Frontend lib/api.ts can successfully integrate with backend endpoints without breaking changes
- **SC-006**: System handles concurrent users accessing simultaneously without data corruption
- **SC-007**: All API endpoints return appropriate HTTP status codes (200, 201, 401, 403, 404) as specified
- **SC-008**: Database operations maintain ACID properties and proper transaction handling