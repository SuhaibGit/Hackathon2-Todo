# API Contract - Todo App

## Authentication Endpoints

### POST /api/auth/signup
Register a new user

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
    "email": "user@example.com"
  },
  "token": "jwt-token-string"
}
```

### POST /api/auth/signin
Authenticate an existing user

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
    "email": "user@example.com"
  },
  "token": "jwt-token-string"
}
```

## Task Management Endpoints

### GET /api/users/{userId}/tasks
Get all tasks for a user

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
      "updatedAt": "2026-02-04T10:00:00Z"
    }
  ]
}
```

### POST /api/users/{userId}/tasks
Create a new task

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Request**:
```json
{
  "title": "New task title",
  "description": "Task description (optional)",
  "completed": false
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
    "updatedAt": "2026-02-04T10:00:00Z"
  }
}
```

### PUT /api/users/{userId}/tasks/{taskId}
Update a task

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Request**:
```json
{
  "title": "Updated task title",
  "description": "Updated description",
  "completed": true
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
    "updatedAt": "2026-02-04T11:00:00Z"
  }
}
```

### DELETE /api/users/{userId}/tasks/{taskId}
Delete a task

**Headers**:
```
Authorization: Bearer {jwt-token}
```

**Response**:
```json
{
  "success": true
}
```

### GET /api/users/{userId}/tasks/{taskId}
Get a specific task

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
    "updatedAt": "2026-02-04T10:00:00Z"
  }
}
```