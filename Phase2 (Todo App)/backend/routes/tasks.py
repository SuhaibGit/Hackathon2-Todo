from datetime import datetime
from fastapi import APIRouter, Depends, HTTPException, status
from typing import List
from sqlmodel import Session, select
from backend.models import Task, TaskCreate, TaskRead, TaskUpdate
from backend.db import get_session
from backend.auth import validate_user_ownership, get_user_id_from_token
from backend.dependencies import get_current_user_id

router = APIRouter()

@router.get("/", response_model=List[TaskRead])
def list_tasks(
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Get all tasks for the authenticated user
    """
    statement = select(Task).where(Task.user_id == user_id)
    tasks = session.exec(statement).all()
    return tasks


@router.post("/", response_model=TaskRead)
def create_task(
    task_data: TaskCreate,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Create a new task for the authenticated user
    """
    # Validate title length (1-200 chars as per spec)
    if len(task_data.title.strip()) < 1 or len(task_data.title.strip()) > 200:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Title must be between 1 and 200 characters"
        )

    # Create new task with user_id from token
    new_task = Task(
        title=task_data.title,
        description=task_data.description,
        completed=task_data.completed,
        user_id=user_id
    )

    session.add(new_task)
    session.commit()
    session.refresh(new_task)

    return new_task


@router.get("/{task_id}", response_model=TaskRead)
def get_task(
    task_id: int,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Get a specific task for the authenticated user
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()

    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found or not owned by user"
        )

    return task


@router.put("/{task_id}", response_model=TaskRead)
def update_task(
    task_id: int,
    task_update: TaskUpdate,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Update a specific task for the authenticated user
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()

    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found or not owned by user"
        )

    # Update only the fields that were provided
    update_data = task_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        if value is not None:
            setattr(task, field, value)

    # Update the updated_at timestamp
    task.updated_at = datetime.utcnow()

    session.add(task)
    session.commit()
    session.refresh(task)

    return task


@router.patch("/{task_id}/toggle", response_model=TaskRead)
def toggle_task_completion(
    task_id: int,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Toggle the completion status of a specific task for the authenticated user
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()

    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found or not owned by user"
        )

    # Toggle completion status
    task.completed = not task.completed
    # Update the updated_at timestamp
    task.updated_at = datetime.utcnow()

    session.add(task)
    session.commit()
    session.refresh(task)

    return task


@router.delete("/{task_id}")
def delete_task(
    task_id: int,
    user_id: str = Depends(get_current_user_id),
    session: Session = Depends(get_session)
):
    """
    Delete a specific task for the authenticated user
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()

    if not task:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Task not found or not owned by user"
        )

    session.delete(task)
    session.commit()

    return {"message": "Task deleted successfully"}