# JWT Dependency Creator Skill

## Purpose
Create secure JWT authentication dependencies for FastAPI applications with proper token validation and user identification.

## Function
- Implement JWT token verification with configurable secret/key
- Extract and validate user identity from token claims
- Create FastAPI dependency functions for route protection
- Handle token expiration and invalid token scenarios
- Implement proper error responses for authentication failures
- Support for different JWT algorithms (HS256, RS256, etc.)

## Security Features
- Secret key validation from environment variables
- Token signature verification
- Expiration time checking
- User ID extraction and validation
- Algorithm specification and validation
- Proper error handling for different failure scenarios

## Dependency Structure
- Async dependency function that extracts token from request
- Token validation logic with proper exception handling
- User identity retrieval from token claims
- Integration with FastAPI's dependency injection system
- Compatibility with different authentication schemes

## Output Format
- Complete dependency function with all necessary imports
- Proper error handling with appropriate HTTP exceptions
- Environment variable configuration for secret keys
- Type hints and documentation
- Ready-to-use dependency that can be injected into routes