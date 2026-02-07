from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.config import settings

# Import routers
from backend.routes import tasks, auth, chat

app = FastAPI(title="Todo API", version="1.0.0")

# CORS configuration to allow frontend origin
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
    # Expose authorization header to allow JWT to be sent back to frontend
    expose_headers=["Authorization"]
)

# Include routers
app.include_router(auth.router, prefix="/api/auth", tags=["auth"])
app.include_router(tasks.router, prefix="/api/{user_id}/tasks", tags=["tasks"])
app.include_router(chat.router, prefix="/api/{user_id}", tags=["chat"])

@app.get("/")
def read_root():
    return {"message": "Todo API is running"}

@app.on_event("startup")
async def startup_event():
    """Create tables on startup if they don't exist"""
    from backend.db import engine
    from backend.models import Task, User, Conversation, Message  # Import here to register the models
    from sqlmodel import SQLModel

    # Create tables
    SQLModel.metadata.create_all(bind=engine)

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "todo-api"}