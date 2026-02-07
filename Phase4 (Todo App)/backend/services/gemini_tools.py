from sqlmodel import Session, select
from backend.models import Task
from typing import Optional, List, Dict, Any
from datetime import datetime

def add_task(session: Session, user_id: str, title: str, description: Optional[str] = None) -> Dict[str, Any]:
    """
    Add a new todo task.
    
    Args:
        session: Database session
        user_id: ID of the user owning the task
        title: Title of the task
        description: Optional description of the task
    """
    task = Task(title=title, description=description, user_id=user_id)
    session.add(task)
    session.commit()
    session.refresh(task)
    return {"id": task.id, "title": task.title, "status": "added", "message": f"Added task: {task.title}"}

def list_tasks(session: Session, user_id: str, completed: Optional[bool] = None) -> List[Dict[str, Any]]:
    """
    List todo tasks for the user.
    
    Args:
        session: Database session
        user_id: ID of the user
        completed: Optional filter by completion status
    """
    statement = select(Task).where(Task.user_id == user_id)
    if completed is not None:
        statement = statement.where(Task.completed == completed)
    tasks = session.exec(statement).all()
    return [{"id": t.id, "title": t.title, "completed": t.completed} for t in tasks]

def complete_task(session: Session, user_id: str, task_id: int) -> Dict[str, Any]:
    """
    Mark a task as completed.
    
    Args:
        session: Database session
        user_id: ID of the user
        task_id: ID of the task to complete
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()
    if not task:
        return {"error": "Task not found", "message": f"Could not find task with ID {task_id}"}
    
    task.completed = True
    task.updated_at = datetime.utcnow()
    session.add(task)
    session.commit()
    return {"id": task.id, "title": task.title, "status": "completed", "message": f"Task '{task.title}' marked complete ✅"}

def delete_task(session: Session, user_id: str, task_id: int) -> Dict[str, Any]:
    """
    Delete a todo task.
    
    Args:
        session: Database session
        user_id: ID of the user
        task_id: ID of the task to delete
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()
    if not task:
        return {"error": "Task not found", "message": f"Could not find task with ID {task_id}"}
    
    title = task.title
    session.delete(task)
    session.commit()
    return {"id": task_id, "status": "deleted", "message": f"Deleted task: {title}"}

def update_task(session: Session, user_id: str, task_id: int, title: Optional[str] = None, description: Optional[str] = None) -> Dict[str, Any]:
    """
    Update an existing task's title or description.
    
    Args:
        session: Database session
        user_id: ID of the user
        task_id: ID of the task to update
        title: New title (optional)
        description: New description (optional)
    """
    statement = select(Task).where(Task.id == task_id, Task.user_id == user_id)
    task = session.exec(statement).first()
    if not task:
        return {"error": "Task not found", "message": f"Could not find task with ID {task_id}"}
    
    if title:
        task.title = title
    if description is not None:
        task.description = description
    
    task.updated_at = datetime.utcnow()
    session.add(task)
    session.commit()
    session.refresh(task)
    return {"id": task.id, "title": task.title, "status": "updated", "message": f"Updated task {task_id} to '{task.title}'"}
