# Quickstart Guide - Todo App Frontend

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of TypeScript and React

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd hackathon-todo
   ```

2. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

4. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

   Update the following values in `.env.local`:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<generate-a-secret>
   BETTER_AUTH_SECRET=<generate-a-secret>
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser to [http://localhost:3000](http://localhost:3000)

## Key Files and Directories

- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
- `lib/api.ts` - Centralized API client with mock implementations
- `types/index.ts` - Type definitions for the application
- `styles/globals.css` - Global styles using Tailwind

## Authentication Flow

1. User visits any protected route
2. If not authenticated, redirected to `/auth/signin`
3. User can sign up at `/auth/signup` or sign in
4. Successful authentication creates session/JWT
5. User redirected to requested page or dashboard

## Task Management Flow

1. User accesses dashboard after authentication
2. Tasks retrieved from localStorage (mock implementation)
3. User can create new tasks via form
4. Tasks displayed in list with completion toggle
5. User can edit or delete existing tasks

## API Client Usage

All API calls should go through `lib/api.ts`:

```typescript
import { apiClient } from '@/lib/api';

// Get tasks
const tasks = await apiClient.getTasks();

// Create task
const newTask = await apiClient.createTask(taskData);

// Update task
const updatedTask = await apiClient.updateTask(taskId, updateData);

// Delete task
await apiClient.deleteTask(taskId);
```

## Environment Variables

- `NEXTAUTH_URL`: Base URL for the application
- `NEXTAUTH_SECRET`: Secret for signing JWTs
- `BETTER_AUTH_SECRET`: Secret for Better Auth