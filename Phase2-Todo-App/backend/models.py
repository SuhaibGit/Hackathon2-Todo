from sqlmodel import SQLModel, Field, create_engine
from typing import Optional
from datetime import datetime
from sqlalchemy import Column, DateTime
from pydantic import Field as PydanticField, EmailStr
from backend.auth import verify_token, get_user_id_from_token


class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)

class User(UserBase, table=True):
    id: Optional[str] = Field(default=None, primary_key=True)
    hashed_password: str
    created_at: datetime = Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), nullable=False))

class UserCreate(UserBase):
    password: str

class UserRead(UserBase):
    id: str
    created_at: datetime = PydanticField(alias='createdAt')

    class Config:
        populate_by_name = True

class TaskBase(SQLModel):
    title: str = Field(min_length=1, max_length=200)
    description: Optional[str] = Field(default=None, max_length=1000)
    completed: bool = Field(default=False)

class Task(TaskBase, table=True):
    id: Optional[int] = Field(default=None, primary_key=True)
    user_id: str = Field(index=True)  # Foreign key to users.id from Better Auth
    created_at: datetime = Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), nullable=False))
    updated_at: datetime = Field(default_factory=datetime.utcnow, sa_column=Column(DateTime(timezone=True), nullable=False))

    def __setattr__(self, name, value):
        """Override to automatically update updated_at when any field changes"""
        if name in ['title', 'description', 'completed']:
            super().__setattr__('updated_at', datetime.utcnow())
        super().__setattr__(name, value)

class TaskCreate(TaskBase):
    pass

class TaskRead(TaskBase):
    id: int
    user_id: str = PydanticField(alias='userId')
    created_at: datetime = PydanticField(alias='createdAt')
    updated_at: datetime = PydanticField(alias='updatedAt')

    class Config:
        populate_by_name = True

class TaskUpdate(SQLModel):
    title: Optional[str] = Field(default=None, min_length=1, max_length=200)
    description: Optional[str] = Field(default=None, max_length=1000)
    completed: Optional[bool] = Field(default=None)