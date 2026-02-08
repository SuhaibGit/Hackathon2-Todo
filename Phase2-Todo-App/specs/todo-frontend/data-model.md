# Data Model - Todo App Frontend

## User Entity

**Description**: Represents a registered user in the system
**Fields**:
- id: string (unique identifier, typically email or UUID)
- email: string (user's email address, validated format)
- createdAt: Date (timestamp when user was created)
- lastLoginAt: Date (timestamp of last login)

**Validation**:
- Email must follow standard email format
- ID must be unique across all users

## Task Entity

**Description**: Represents a user's todo item
**Fields**:
- id: string (unique identifier for the task)
- userId: string (foreign key linking to the owning user)
- title: string (required, 1-200 characters)
- description: string (optional, can be empty)
- completed: boolean (whether the task is completed)
- createdAt: Date (timestamp when task was created)
- updatedAt: Date (timestamp when task was last updated)

**Validation**:
- Title must be 1-200 characters
- UserId must match the authenticated user's ID
- Completed defaults to false when creating

## State Transitions

**Task State Changes**:
- New Task: { completed: false } → created in localStorage
- Toggle Complete: { completed: false } ↔ { completed: true }
- Update Task: { title, description } → updated in localStorage
- Delete Task: entry removed from localStorage

## Relationships

- User (1) : Task (Many) - Each user can have multiple tasks
- Tasks are isolated by userId - users cannot access others' tasks