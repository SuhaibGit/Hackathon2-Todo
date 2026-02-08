from fastapi import APIRouter, HTTPException, status, Depends
from pydantic import BaseModel, EmailStr
from jose import jwt
from datetime import datetime, timedelta
from backend.config import settings
from backend.models import User, UserCreate, UserRead
from backend.db import get_session
from backend.auth import get_password_hash, verify_password
from sqlmodel import Session, select
import uuid
import os

router = APIRouter()

class UserAuth(BaseModel):
    email: str
    password: str

def create_access_token(data: dict):
    to_encode = data.copy()
    # No expiration for simplicity in this dev phase, or set it to 7 days
    expire = datetime.utcnow() + timedelta(days=7)
    to_encode.update({"exp": expire, "iat": datetime.utcnow()})
    encoded_jwt = jwt.encode(to_encode, settings.BETTER_AUTH_SECRET, algorithm="HS256")
    return encoded_jwt

@router.post("/signup")
async def signup(user_data: UserCreate, session: Session = Depends(get_session)):
    # Check if user already exists
    statement = select(User).where(User.email == user_data.email)
    existing_user = session.exec(statement).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists"
        )
    
    user_id = f"user_{uuid.uuid4().hex[:8]}"
    hashed_password = get_password_hash(user_data.password)
    
    new_user = User(
        id=user_id,
        email=user_data.email,
        hashed_password=hashed_password
    )
    
    session.add(new_user)
    session.commit()
    session.refresh(new_user)
    
    token = create_access_token({"sub": user_id, "email": new_user.email})
    return {
        "success": True,
        "token": token,
        "user": {
            "id": user_id,
            "email": new_user.email
        }
    }

@router.post("/signin")
async def signin(user_data: UserAuth, session: Session = Depends(get_session)):
    statement = select(User).where(User.email == user_data.email)
    user = session.exec(statement).first()
    
    if not user or not verify_password(user_data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password"
        )
    
    token = create_access_token({"sub": user.id, "email": user.email})
    return {
        "success": True,
        "token": token,
        "user": {
            "id": user.id,
            "email": user.email
        }
    }

# Explicit OPTIONS handlers for CORS preflight
@router.options("/signin")
async def signin_options():
    return {}

@router.options("/signup")
async def signup_options():
    return {}

