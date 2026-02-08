# Backend Completion Plan – FastAPI + Neon + JWT Isolation

## Current Status & Assumptions

The frontend is already built with modern card UI, animations, light/dark mode, and responsive design. It currently uses mock data and localStorage for persistence. The backend needs to provide real database persistence with strict user isolation using JWT tokens from Better Auth.

**Key Assumptions:**
- Frontend lib/api.ts contains mock implementations to be replaced with real fetch calls
- BETTER_AUTH_SECRET is shared between frontend and backend for JWT verification
- Neon PostgreSQL is available via DATABASE_URL environment variable
- User ID from JWT token.sub must match path parameter for ownership enforcement
- API endpoints follow /api/{user_id}/tasks pattern

## Key Security & Design Decisions

1. **JWT Verification**: Every endpoint validates JWT token from Authorization: Bearer header
2. **Ownership Enforcement**: token.sub must equal path user_id (403 Forbidden if mismatch)
3. **Query Isolation**: All database queries filtered by user_id to prevent cross-user access
4. **SQLModel ORM**: Using SQLModel for PostgreSQL compatibility and Neon support
5. **Pydantic Validation**: Strict request/response validation for security and data integrity
6. **Error Handling**: Proper HTTP status codes (401, 403, 404) for all security violations

## Implementation Plan

### Phase 1: Project Setup and Database Connection

1. **Setup FastAPI Project with Dependencies**
   - Agent: BackendEngineer
   - Files: backend/requirements.txt, backend/main.py, backend/config.py
   - Dependencies: none
   - Notes: Install fastapi, sqlmodel, pydantic, python-jose, uvicorn, psycopg2-binary for Neon
   - Acceptance criteria: Can start FastAPI server with uvicorn and import all dependencies

2. **Database Connection & Session Management**
   - Agent: BackendEngineer
   - Files: backend/db.py, backend/config.py
   - Dependencies: Task #1
   - Notes: Create engine with DATABASE_URL from env, implement get_session dependency with connection pooling
   - Acceptance criteria: Database session can be obtained and closed properly

3. **Task Model Definition**
   - Agent: BackendEngineer
   - Files: backend/models.py
   - Dependencies: Task #2
   - Notes: Define SQLModel Task with user_id foreign key, indexes, validation constraints
   - Acceptance criteria: Task model matches specs/database/schema.md with proper relationships

### Phase 2: Authentication and Security Layer

4. **JWT Verification Dependency**
   - Agent: BackendEngineer
   - Files: backend/auth.py, backend/dependencies.py
   - Dependencies: Task #1
   - Notes: Create JWT token verification utility using BETTER_AUTH_SECRET, extract user_id from token.sub
   - Acceptance criteria: Valid token returns user_id, invalid token raises HTTPException(401)

5. **Ownership Verification Middleware**
   - Agent: BackendEngineer
   - Files: backend/dependencies.py, backend/auth.py
   - Dependencies: Task #4
   - Notes: Create dependency that enforces token.sub === path user_id, raises 403 if mismatch
   - Acceptance criteria: Endpoint returns 403 when JWT user_id doesn't match path user_id

### Phase 3: Core API Routes

6. **Task Creation Endpoint**
   - Agent: BackendEngineer
   - Files: backend/routes/tasks.py, backend/models.py
   - Dependencies: Tasks #3, #5
   - Notes: POST /api/{user_id}/tasks with title validation (1-200 chars), assigns user_id from path
   - Acceptance criteria: Creates task with proper user_id, returns 400 for invalid input, 403 for ownership mismatch

7. **Task Listing Endpoint**
   - Agent: BackendEngineer
   - Files: backend/routes/tasks.py, backend/models.py
   - Dependencies: Tasks #3, #5
   - Notes: GET /api/{user_id}/tasks with query filter by user_id only
   - Acceptance criteria: Returns only tasks owned by user_id, no cross-user data leakage

8. **Task Detail Endpoint**
   - Agent: BackendEngineer
   - Files: backend/routes/tasks.py, backend/models.py
   - Dependencies: Tasks #3, #5
   - Notes: GET /api/{user_id}/tasks/{task_id} with ownership verification
   - Acceptance criteria: Returns task only if owned by user, 404 if not found or not owned

9. **Task Update Endpoint**
   - Agent: BackendEngineer
   - Files: backend/routes/tasks.py, backend/models.py
   - Dependencies: Tasks #3, #5
   - Notes: PUT/PATCH /api/{user_id}/tasks/{task_id} with ownership verification
   - Acceptance criteria: Updates task only if owned by user, 404 if not found or not owned

10. **Task Deletion Endpoint**
    - Agent: BackendEngineer
    - Files: backend/routes/tasks.py, backend/models.py
    - Dependencies: Tasks #3, #5
    - Notes: DELETE /api/{user_id}/tasks/{task_id} with ownership verification
    - Acceptance criteria: Deletes task only if owned by user, 404 if not found or not owned

### Phase 4: Specialized Endpoints and Integration

11. **Task Toggle Endpoint**
    - Agent: BackendEngineer
    - Files: backend/routes/tasks.py, backend/models.py
    - Dependencies: Tasks #3, #5
    - Notes: PATCH /api/{user_id}/tasks/{task_id}/toggle to flip completion status
    - Acceptance criteria: Toggles completion status only for owned tasks, maintains ownership rules

12. **CORS Configuration & Startup Events**
    - Agent: BackendEngineer
    - Files: backend/main.py, backend/config.py
    - Dependencies: Tasks #1, #6-#11
    - Notes: Configure CORS to allow frontend origin, add startup event to create tables
    - Acceptance criteria: API accepts requests from frontend origin, tables created on startup

13. **Error Handling & Validation**
    - Agent: BackendEngineer
    - Files: backend/main.py, backend/exceptions.py
    - Dependencies: Tasks #6-#11
    - Notes: Global exception handler, validation error formatting
    - Acceptance criteria: Proper error responses for all validation and security failures

14. **Health Check & Documentation**
    - Agent: BackendEngineer
    - Files: backend/routes/health.py, backend/main.py
    - Dependencies: Tasks #1-#13
    - Notes: Add basic health check endpoint and configure OpenAPI docs
    - Acceptance criteria: Health endpoint returns status, API docs accessible

## Definition of Done (Backend Ready)
- [ ] All CRUD endpoints implemented with ownership enforcement
- [ ] JWT verification working with BETTER_AUTH_SECRET
- [ ] User ID ownership enforced on every route (token.sub === path user_id)
- [ ] Proper error handling (401/403/404) for all security violations
- [ ] Database tables created automatically on startup
- [ ] CORS configured to allow frontend origin (http://localhost:3000)
- [ ] No data leakage across users (strict isolation)
- [ ] Health check endpoint passes
- [ ] All endpoints follow /api/{user_id}/tasks pattern
- [ ] Input validation working (title 1-200 chars, etc.)

## Next Phase Recommendation
After backend complete → update frontend lib/api.ts to use real API URLs instead of mocks, then run IntegrationTester on full stack to verify end-to-end functionality with security controls intact.