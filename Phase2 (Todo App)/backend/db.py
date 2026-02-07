from sqlmodel import create_engine, Session
from .config import settings
import os

# Determine database URL - use SQLite for local development if not specified
database_url = settings.DATABASE_URL
if not database_url or database_url == "postgresql://username:password@localhost/todo_db":
    # Default to SQLite for local development
    database_url = "sqlite:///./todo.db"

# Configure connect_args for SQLite
connect_args = {"check_same_thread": False} if "sqlite" in database_url.lower() else {}

# Create engine with connection pooling settings
engine = create_engine(
    database_url,
    # Enable connection pooling
    pool_size=5,
    max_overflow=10,
    pool_pre_ping=True,  # Verify connections before use
    pool_recycle=300,    # Recycle connections after 5 minutes
    connect_args=connect_args  # Required for SQLite
)

def get_session():
    """Dependency to get database session"""
    with Session(engine) as session:
        yield session