from sqlmodel import Session, select
from backend.models import Conversation, Message
from typing import List, Optional
from uuid import UUID
from datetime import datetime

def get_conversations(session: Session, user_id: str, limit: int = 10, offset: int = 0) -> List[Conversation]:
    """Retrieve a list of conversations for a specific user."""
    statement = select(Conversation).where(Conversation.user_id == user_id).order_by(Conversation.updated_at.desc()).offset(offset).limit(limit)
    return session.exec(statement).all()

def get_conversation_count(session: Session, user_id: str) -> int:
    """Get the total number of conversations for a user."""
    statement = select(Conversation).where(Conversation.user_id == user_id)
    return len(session.exec(statement).all())

def get_conversation(session: Session, conversation_id: UUID, user_id: str) -> Optional[Conversation]:
    """Retrieve a specific conversation by ID and user ID for isolation."""
    statement = select(Conversation).where(Conversation.id == conversation_id, Conversation.user_id == user_id)
    return session.exec(statement).first()

def create_conversation(session: Session, user_id: str, title: str = "New Conversation") -> Conversation:
    """Create a new conversation session."""
    conversation = Conversation(user_id=user_id, title=title)
    session.add(conversation)
    session.commit()
    session.refresh(conversation)
    return conversation

def get_messages(session: Session, conversation_id: UUID, user_id: str, limit: int = 25) -> List[Message]:
    """Retrieve recent messages for a conversation, validating user ownership."""
    statement = (
        select(Message)
        .join(Conversation)
        .where(Message.conversation_id == conversation_id)
        .where(Conversation.user_id == user_id)
        .order_by(Message.created_at.asc())
        .limit(limit)
    )
    return session.exec(statement).all()

def create_message(session: Session, conversation_id: UUID, role: str, content: str, tool_calls: Optional[str] = None) -> Message:
    """Create a new message and link it to a conversation."""
    message = Message(conversation_id=conversation_id, role=role, content=content, tool_calls=tool_calls)
    session.add(message)
    
    # Update conversation's updated_at timestamp
    conversation = session.get(Conversation, conversation_id)
    if conversation:
        conversation.updated_at = datetime.utcnow()
        session.add(conversation)
        
    session.commit()
    session.refresh(message)
    return message
