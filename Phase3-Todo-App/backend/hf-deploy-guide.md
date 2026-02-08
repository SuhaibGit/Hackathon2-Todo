# Hugging Face Inference Endpoints Deployment Guide

Complete guide for deploying your FastAPI backend on Hugging Face.

## Prerequisites

- Hugging Face account (free)
- PostgreSQL database (Neon, Supabase, or similar)
- GitHub repository with your code

---

## Step-by-Step Deployment

### 1. Prepare Your PostgreSQL Database

Hugging Face Inference Endpoints don't provide a database, so you need an external PostgreSQL instance.

**Recommended free options:**

- **Neon** (neon.tech) - Free tier with 10GB storage
- **Supabase** (supabase.com) - Free tier with 500MB
- **Railway** (railway.app) - $5/month starter
- **Render** (render.com) - Free tier with limitations

**Create database:**
1. Sign up for your chosen provider
2. Create a new PostgreSQL database
3. Copy the connection string (DATABASE_URL)
   - Format: `postgresql://user:password@host:port/dbname`

### 2. Generate Secrets

```bash
# Generate a secure BETTER_AUTH_SECRET (32+ characters)
openssl rand -hex 32
# Example output: a3f5c8e2b1d4f6a7c9e2b1d4f6a8c0e2

# Generate a random JWT secret (if different)
openssl rand -hex 32
```

### 3. Set Up Hugging Face Repository

**Option A: Via Web Interface (Easiest)**

1. Go to [huggingface.co/new](https://huggingface.co/new)
2. Select "Inference Endpoint" (not Space)
3. Repository name: `your-username/todo-backend`
4. Make it "Public" or "Private" as needed
5. Click "Create repo"

**Option B: Via CLI**

```bash
pip install huggingface_hub
huggingface-cli login
huggingface-cli repo create todo-backend --type endpoint
```

### 4. Configure Inference Endpoint

1. Go to your new repository on Hugging Face
2. Click "Settings" tab
3. Scroll to "Inference Endpoints" section
4. Click "Create your first endpoint"

**Configuration:**

- **Name**: `production` (or `staging`, etc.)
- **Dockerfile path**: `backend/Dockerfile`
- **Port**: `8080`
- **Health endpoint**: `/health`
- **Hardware**: Select based on needs (CPU is fine for starter)
- **Scale to zero**: Enable (saves cost when not in use)

**Secrets (Environment Variables):**

Add these in the "Secrets" section:

| Name | Value | Required |
|------|-------|----------|
| `DATABASE_URL` | Your PostgreSQL connection string | ✓ |
| `BETTER_AUTH_SECRET` | Generated secret (min 32 chars) | ✓ |
| `ALLOWED_ORIGINS` | `["https://your-frontend.hf.space"]` | ✓ |
| `GEMINI_API_KEY` | Your Gemini API key (optional) | ✗ |

**Note for ALLOWED_ORIGINS:**
- If your frontend is also on Hugging Face Spaces: `["https://your-app.hf.space"]`
- Format must be valid JSON array
- Include both staging and production URLs if needed

### 5. Push Your Code

The Dockerfile is already configured to work with Hugging Face.

```bash
# Make sure you're in the project root
cd "C:\Users\M_S_H\Desktop\Hackathon2 - Todo\Phase3-Todo-App"

# Initialize git if not already done
git init
git add .
git commit -m "Deploy to Hugging Face Inference Endpoints"

# Add Hugging Face remote
git remote add hf https://huggingface.co/your-username/todo-backend

# Push to Hugging Face
git push hf main
```

**If you already have a remote:**
```bash
git remote set-url hf https://huggingface.co/your-username/todo-backend
git push hf main
```

### 6. Wait for Build

Hugging Face will:
1. Build your Docker image (5-15 minutes)
2. Run health checks
3. Start the endpoint

Monitor the build in the "Logs" tab of your endpoint.

---

## Testing the Deployment

### 1. Verify Health Endpoint

Once deployed, your endpoint will have a URL like:
```
https://your-username-todo-backend.hf.space
```

Test the health check:
```bash
curl https://your-username-todo-backend.hf.space/health
```

Expected response:
```json
{"status": "healthy", "service": "todo-api"}
```

### 2. Test Authentication API

```bash
# Sign up a user
curl -X POST https://your-username-todo-backend.hf.space/api/auth/sign-up \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

### 3. Full API Testing

Use the API with your frontend by setting:
```
NEXT_PUBLIC_API_BASE_URL=https://your-username-todo-backend.hf.space
```

---

## Important Notes

### Port Configuration
- Hugging Face Inference Endpoints **require** port `8080`
- The Dockerfile already exposes and runs on 8080
- Don't change this

### Database Migrations
- Tables are created automatically on startup via `SQLModel.metadata.create_all()`
- No separate migration step needed
- First run will create all tables

### Cost Considerations
- Inference Endpoints: ~$0.06/hour when active + request costs
- Enable "Scale to zero" to reduce costs when idle
- Set up billing alerts in Hugging Face

### Monitoring
- View logs in Hugging Face dashboard
- Health endpoint `/health` is checked every 30s
- Set up alerts for failed health checks

---

## Troubleshooting

### Build Fails
- Check Dockerfile syntax
- Ensure all dependencies in `requirements.txt`
- Look at build logs for specific errors

### Can't Connect to Database
- Verify `DATABASE_URL` is correct
- Ensure database allows connections from Hugging Face IPs (some providers restrict)
- Check database provider's firewall rules

### Health Check Fails
- Confirm app starts without errors
- Check that port 8080 is listening
- Verify `/health` endpoint returns 200 status

### CORS Errors
- Update `ALLOWED_ORIGINS` to include your frontend URL
- Must be valid JSON array
- Example: `["https://myapp.hf.space", "http://localhost:3000"]`

---

## Updating the Deployment

After making code changes:

```bash
git add .
git commit -m "Update: description"
git push hf main
```

Hugging Face will automatically rebuild and redeploy.

---

## Alternative: Deploy Backend + Frontend Together

If you want a single deployment:

1. **Convert backend to Next.js API routes** (recommended)
   - Move FastAPI routes to `frontend/app/api/`
   - Easier deployment as single Next.js app
   - Deploy just the frontend to Hugging Face Spaces

2. **Or use Docker Compose** (not supported on HF)
   - Run backend and frontend in one container
   - Not recommended due to complexity

---

## Next Steps After Deployment

1. Update frontend `.env.local`:
   ```
   NEXT_PUBLIC_API_BASE_URL=https://your-username-todo-backend.hf.space
   ```

2. Test full authentication flow
3. Test task CRUD operations
4. Test AI chat features (if using Gemini)
5. Set up custom domain (optional)
6. Configure monitoring and alerts

---

## Support

- Hugging Face Inference Docs: https://huggingface.co/docs
- FastAPI Docs: https://fastapi.tiangolo.com
- Your backend API docs: `https://your-endpoint.hf.space/docs` (auto-generated by FastAPI)
