from fastapi import Depends, HTTPException, status, Request
from typing import Generator
from sqlmodel import Session
from backend.db import get_session
from backend.auth import verify_token, get_user_id_from_token, validate_user_ownership
from backend.models import Task

def get_current_user_id(request: Request) -> str:
    """
    Extract and verify user_id from JWT token in Authorization header
    """
    auth_header = request.headers.get("Authorization")
    if not auth_header or not auth_header.startswith("Bearer "):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Not authenticated",
            headers={"WWW-Authenticate": "Bearer"},
        )

    token = auth_header.split(" ")[1]
    payload = verify_token(token)

    if not payload:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )

    user_id = payload.get("sub")
    if not user_id:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token: no user ID found",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return user_id

def verify_path_user_id_match(current_user_id: str = Depends(get_current_user_id), path_user_id: str = None) -> str:
    """
    Verify that the user_id from the token matches the user_id in the path
    This enforces ownership and prevents cross-user access
    """
    if path_user_id is None:
        # This would only happen if the dependency is used incorrectly
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Path user_id is required for this endpoint"
        )

    validate_user_ownership(current_user_id, path_user_id)
    return current_user_id

def get_user_tasks(session: Session = Depends(get_session), user_id: str = Depends(get_current_user_id)):
    """
    Get all tasks belonging to the authenticated user
    """
    from sqlmodel import select
    statement = select(Task).where(Task.user_id == user_id)
    tasks = session.exec(statement).all()
    return tasks

def get_task_by_id(task_id: int, session: Session = Depends(get_session), user_id: str = Depends(get_current_user_id)):
    """
    Get a specific task by ID that belongs to the authenticated user
    """
    from sqlmodel import select
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()

    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found or not owned by user"
        )

    return task