# Todo Application

This is a full-stack Todo application with a Next.js frontend and FastAPI backend.

## Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Set up environment variables by creating a `.env` file in the backend directory:
```
DATABASE_URL=postgresql://username:password@localhost/todo_db
BETTER_AUTH_SECRET=your-better-auth-secret-here
ALLOWED_ORIGINS=["http://localhost:3000", "http://localhost:3001"]
GEMINI_API_KEY=your-gemini-api-key-here
```

4. Run the backend server:
```bash
python server.py
```

The backend will start on http://localhost:8001 (to avoid port conflicts)

## Frontend Setup

1. Navigate to the root directory where package.json is located:
```bash
cd ..
```

2. Install dependencies:
```bash
cd frontend
npm install
```

3. Run the development server:
```bash
npm run dev
```

The frontend will start on http://localhost:3000

## Environment Variables

### Frontend (.env.local)
```
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=dev-secret-for-local-development
BETTER_AUTH_SECRET=betterauthapi
NEXT_PUBLIC_API_BASE_URL=http://localhost:8001
NEXT_PUBLIC_GEMINI_API_KEY=your-gemini-api-key-here
```

### Backend (.env)
```
DATABASE_URL=postgresql://username:password@localhost/todo_db
BETTER_AUTH_SECRET=your-better-auth-secret-here
ALLOWED_ORIGINS=["http://localhost:3000", "http://localhost:3001"]
```

## API Endpoints

The backend provides the following endpoints:

- `GET /api/{user_id}/tasks` - Get all tasks for a user
- `POST /api/{user_id}/tasks` - Create a new task for a user
- `GET /api/{user_id}/tasks/{task_id}` - Get a specific task
- `PUT /api/{user_id}/tasks/{task_id}` - Update a specific task
- `PATCH /api/{user_id}/tasks/{task_id}/toggle` - Toggle task completion status
- `DELETE /api/{user_id}/tasks/{task_id}` - Delete a specific task

### AI Chatbot Endpoints
- `POST /api/{user_id}/chat` - Send a message to the AI assistant
- `GET /api/{user_id}/conversations` - List all chat sessions
- `GET /api/{user_id}/conversations/{conversation_id}` - Get full chat history

All endpoints require a valid JWT token in the Authorization header and enforce user isolation.

## Troubleshooting

If you encounter issues with relative imports when running the backend, make sure you have installed the package in development mode:
```bash
cd backend
pip install -e .
```

The backend is configured to use SQLite by default for local development. If you want to use PostgreSQL, update the DATABASE_URL in your .env file.