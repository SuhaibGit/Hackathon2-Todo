from datetime import datetime, timedelta
from typing import Optional
from fastapi import HTTPException, status
import bcrypt
from jose import JWTError, jwt
from backend.config import settings

def verify_password(plain_password: str, hashed_password: str) -> bool:
    """
    Verify a plain text password against a hashed password using bcrypt.
    """
    try:
        if isinstance(plain_password, str):
            plain_password = plain_password.encode('utf-8')
        if isinstance(hashed_password, str):
            hashed_password = hashed_password.encode('utf-8')
        return bcrypt.checkpw(plain_password, hashed_password)
    except Exception as e:
        print(f"Error verifying password: {e}")
        return False

def get_password_hash(password: str) -> str:
    """
    Hash a password using bcrypt.
    """
    if isinstance(password, str):
        password = password.encode('utf-8')
    salt = bcrypt.gensalt()
    hashed = bcrypt.hashpw(password, salt)
    return hashed.decode('utf-8')

def verify_token(token: str) -> Optional[dict]:
    """
    Verify JWT token and return payload if valid
    """
    try:
        # Debug logging
        if token:
            parts = token.split('.')
            print(f"Token received. Parts count: {len(parts)}")
            if len(parts) > 0:
                print(f"Part 1 (header) start: {parts[0][:10]}...")
        
        payload = jwt.decode(
            token,
            settings.BETTER_AUTH_SECRET,
            algorithms=["HS256"],
            options={"verify_exp": True}  # Verify expiration
        )
        return payload
    except JWTError as e:
        print(f"JWT Verification Error: {str(e)}")
        # If it's a header error, let's see what it's trying to decode
        try:
            parts = token.split('.')
            if len(parts) > 0:
                import base64
                # Try to manually decode and see where it fails
                header_b64 = parts[0]
                # Pad if needed
                missing_padding = len(header_b64) % 4
                if missing_padding:
                    header_b64 += '=' * (4 - missing_padding)
                decoded = base64.urlsafe_b64decode(header_b64)
                print(f"Manually decoded header bytes: {decoded[:20]!r}")
        except Exception as b64e:
            print(f"Manual decode also failed: {str(b64e)}")
        return None
    except Exception as e:
        print(f"Unexpected token verification error: {str(e)}")
        return None

def get_user_id_from_token(token: str) -> Optional[str]:
    """
    Extract user_id from JWT token.sub claim
    """
    payload = verify_token(token)
    if payload:
        # Better Auth typically stores user ID in 'sub' claim
        return payload.get('sub')
    return None

def validate_user_ownership(token_user_id: str, path_user_id: str):
    """
    Validate that token user_id matches path user_id
    Raises HTTPException if not valid
    """
    if token_user_id != path_user_id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Access denied: You can only access your own resources"
        )