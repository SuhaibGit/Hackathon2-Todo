# Data Model - Frontend Completion Plan

## Theme Entity

**Description**: Represents the visual theme state for the application
**Fields**:
- mode: 'light' | 'dark' (current theme mode)
- primaryColor: string (hex code for primary color, default: #3B82F6 for blue)
- accentColor: string (hex code for accent color)
- transitionSpeed: number (animation speed in ms, default: 200)

**Validation**:
- mode must be either 'light' or 'dark'

## Task Entity (Enhanced for Animations)

**Description**: Represents a user's task with animation states
**Fields**:
- id: string (unique identifier for the task)
- userId: string (foreign key linking to the owning user)
- title: string (required, 1-200 characters)
- description?: string (optional, can be empty)
- completed: boolean (whether the task is completed)
- createdAt: Date (timestamp when task was created)
- updatedAt: Date (timestamp when task was last updated)
- animationState: 'idle' | 'entering' | 'exiting' | 'updating' (state for animations)
- optimisticUpdate: boolean (flag for optimistic update tracking)

**Validation**:
- Title must be 1-200 characters
- UserId must match the authenticated user's ID
- animationState must be one of the allowed values

## User Interface State Entities

### Header State
- showThemeToggle: boolean (whether theme toggle is visible)
- showUserMenu: boolean (whether user menu dropdown is open)
- animationVariant: 'collapsed' | 'expanded' (for header animation)

### Task Card State
- hover: boolean (whether mouse is hovering over card)
- focused: boolean (whether card has focus)
- isDragging: boolean (whether card is being dragged)
- animationTrigger: 'mount' | 'toggle' | 'delete' | 'create' (what triggered animation)

## State Transitions for Animations

### Theme Transition
- 'light' → 'dark': Smooth color transition with transitionSpeed
- 'dark' → 'light': Smooth color transition with transitionSpeed

### Task Animation Transitions
- New Task: 'idle' → 'entering' (slide in from right with slight scale)
- Toggle Completion: 'idle' → 'updating' (bounce effect on checkbox)
- Delete Task: 'idle' → 'exiting' (slide out to right with fade)
- Update Task: 'idle' → 'updating' (pulse effect)

## Relationships

- Theme (1) : Application (1) - One theme state per application instance
- Theme (1) : UserInterfaceStates (Many) - Theme affects all UI elements
- User (1) : Tasks (Many) - Each user can have multiple tasks
- Tasks (Many) : AnimationStates (Many) - Each task can have multiple animation states

## Local Storage Schema for Mock Data

- `todo_theme`: Stores current theme mode ('light' | 'dark')
- `todo_tasks_{userId}`: Stores array of user's tasks with animation states
- `todo_last_sync_time`: Timestamp of last simulated sync (for mock data)