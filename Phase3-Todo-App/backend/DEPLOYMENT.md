# Hugging Face Inference Endpoints Deployment

This directory contains the FastAPI backend for the Todo application, configured for deployment on Hugging Face Inference Endpoints.

## Features

- FastAPI REST API with JWT authentication
- PostgreSQL database with SQLModel ORM
- AI chat integration with Gemini
- User isolation and secure endpoints
- Health checks for monitoring

## Required Environment Variables (Secrets)

Set these in your Hugging Face Inference Endpoint configuration:

### Required

- `DATABASE_URL`: PostgreSQL connection string
  - Example: `postgresql://user:password@host:5432/dbname`
  - Recommended providers: Neon, Supabase, Railway, or Render

- `BETTER_AUTH_SECRET`: Secret key for JWT signing
  - Must be at least 32 characters long
  - Generate with: `openssl rand -hex 32`

- `ALLOWED_ORIGINS`: JSON array of allowed CORS origins
  - Example: `["https://your-app.hf.space", "http://localhost:3000"]`

### Optional

- `PORT`: Port number (default: 8080, required by Hugging Face Inference Endpoints)
- `GEMINI_API_KEY`: API key for Gemini AI (if using chat features)

## Database Setup

1. Create a PostgreSQL database on a cloud provider (Neon, Supabase, etc.)
2. Copy the connection string
3. Add it as the `DATABASE_URL` secret in Hugging Face

## Deploying to Hugging Face

### Option 1: Via Hugging Face Web Interface

1. Go to [huggingface.co](https://huggingface.co)
2. Click your profile → "New Inference Endpoint"
3. Select "Custom" container
4. Connect your GitHub repository or upload files
5. Set the following:
   - **Dockerfile path**: `backend/Dockerfile`
   - **Port**: `8080`
   - **Health endpoint**: `/health`
6. Add all required secrets
7. Create the endpoint

### Option 2: Via Hugging Face CLI

```bash
# Install huggingface_hub
pip install huggingface_hub

# Login
huggingface-cli login

# Create repository
huggingface-cli repo create todo-backend --type endpoint

# Push code
cd backend
git init
git add .
git commit -m "Deploy FastAPI backend"
git remote add origin https://huggingface.co/your-username/todo-backend
git push origin main
```

## API Endpoints

Once deployed, your endpoints will be:

- `GET /` - API info
- `GET /health` - Health check
- `GET /ready` - Readiness check (if implemented)
- `POST /api/auth/...` - Authentication endpoints
- `GET/POST/PUT/DELETE /api/{user_id}/tasks` - Task management
- `POST /api/{user_id}/chat` - AI chat
- `GET /api/{user_id}/conversations` - Chat history

All endpoints except `/` and `/health` require JWT authentication in the `Authorization` header.

## Testing Locally

```bash
cd backend
docker build -t todo-backend .
docker run -p 8080:8080 \
  -e DATABASE_URL=postgresql://... \
  -e BETTER_AUTH_SECRET=... \
  -e ALLOWED_ORIGINS='["http://localhost:3000"]' \
  todo-backend
```

## Notes

- The app runs on port 8080 (Hugging Face Inference Endpoints standard)
- Health checks are performed on `/health` (already implemented)
- Database migrations are automatic on startup via `SQLModel.metadata.create_all()`
- For production, consider adding:
  - Rate limiting
  - Request logging
  - Proper error handling
  - Metrics endpoint (`/metrics`) for monitoring
