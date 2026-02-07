# API Contract - Todo App with Animations

## Animation-Specific Endpoints

### GET /api/animation-settings
Get animation preferences for the user

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Response**:
```json
{
  "animationEnabled": true,
  "reducedMotion": false,
  "transitionSpeed": 200,
  "themeTransitionSpeed": 300
}
```

## Authentication Endpoints (with animation metadata)

### POST /api/auth/signup
Register a new user with animation preferences

**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123",
  "animationSettings": {
    "enabled": true,
    "reducedMotion": false,
    "transitionSpeed": 200
  }
}
```

**Response**:
```json
{
  "success": true,
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "animationPreferences": {
      "enabled": true,
      "reducedMotion": false,
      "transitionSpeed": 200
    }
  },
  "token": "jwt-token-string"
}
```

### POST /api/auth/signin
Authenticate an existing user with animation preferences

**Request**:
```json
{
  "email": "user@example.com",
  "password": "securePassword123"
}
```

**Response**:
```json
{
  "success": true,
  "user": {
    "id": "user-uuid",
    "email": "user@example.com",
    "animationPreferences": {
      "enabled": true,
      "reducedMotion": false,
      "transitionSpeed": 200
    }
  },
  "token": "jwt-token-string"
}
```

## Task Management Endpoints (with optimistic update support)

### GET /api/users/{userId}/tasks
Get all tasks for a user with animation metadata

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Response**:
```json
{
  "tasks": [
    {
      "id": "task-uuid",
      "userId": "user-uuid",
      "title": "Task title",
      "description": "Task description",
      "completed": false,
      "createdAt": "2026-02-04T10:00:00Z",
      "updatedAt": "2026-02-04T10:00:00Z",
      "animationState": "idle",
      "optimisticUpdate": false
    }
  ]
}
```

### POST /api/users/{userId}/tasks
Create a new task with animation trigger

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Request**:
```json
{
  "title": "New task title",
  "description": "Task description (optional)",
  "animationTrigger": "create-card"
}
```

**Response**:
```json
{
  "task": {
    "id": "task-uuid",
    "userId": "user-uuid",
    "title": "New task title",
    "description": "Task description (optional)",
    "completed": false,
    "createdAt": "2026-02-04T10:00:00Z",
    "updatedAt": "2026-02-04T10:00:00Z",
    "animationState": "entering",
    "optimisticUpdate": true
  }
}
```

### PUT /api/users/{userId}/tasks/{taskId}
Update a task with animation trigger

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Request**:
```json
{
  "title": "Updated task title",
  "description": "Updated description",
  "completed": true,
  "animationTrigger": "toggle-complete"
}
```

**Response**:
```json
{
  "task": {
    "id": "task-uuid",
    "userId": "user-uuid",
    "title": "Updated task title",
    "description": "Updated description",
    "completed": true,
    "createdAt": "2026-02-04T10:00:00Z",
    "updatedAt": "2026-02-04T11:00:00Z",
    "animationState": "updating",
    "optimisticUpdate": true
  }
}
```

### DELETE /api/users/{userId}/tasks/{taskId}
Delete a task with animation trigger

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Query Parameters**:
```
animationTrigger: "delete-slide-out"
```

**Response**:
```json
{
  "success": true,
  "animationState": "exiting"
}
```

### GET /api/users/{userId}/tasks/{taskId}
Get a specific task with animation state

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Response**:
```json
{
  "task": {
    "id": "task-uuid",
    "userId": "user-uuid",
    "title": "Task title",
    "description": "Task description",
    "completed": false,
    "createdAt": "2026-02-04T10:00:00Z",
    "updatedAt": "2026-02-04T10:00:00Z",
    "animationState": "idle",
    "optimisticUpdate": false
  }
}
```

## Theme Settings Endpoint

### PUT /api/users/{userId}/theme
Update theme preferences with transition

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Request**:
```json
{
  "theme": "dark",
  "transitionSpeed": 300
}
```

**Response**:
```json
{
  "success": true,
  "theme": "dark",
  "transitionSpeed": 300,
  "applied": true
}
```