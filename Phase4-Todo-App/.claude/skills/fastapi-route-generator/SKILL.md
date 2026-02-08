# FastAPI Route Generator Skill

## Purpose
Generate secure, well-structured FastAPI routes with proper authentication, error handling, and documentation.

## Function
- Create RESTful API endpoints following FastAPI best practices
- Implement JWT authentication and authorization checks
- Add proper request/response validation with Pydantic models
- Include comprehensive error handling and status codes
- Generate automatic API documentation (OpenAPI/Swagger)
- Implement rate limiting and security measures where appropriate

## Route Structure Template
- Endpoint definition with proper HTTP methods (GET, POST, PUT, DELETE)
- Path parameters and query parameters validation
- Request body validation using Pydantic models
- Response models with proper serialization
- Authentication dependency injection
- Error responses with appropriate HTTP status codes

## Security Implementation
- JWT token verification using dependency injection
- User ID validation against path parameters
- Permission checks based on user roles
- Input sanitization and validation
- Protection against common vulnerabilities (SQL injection, XSS, etc.)

## Output Format
- Complete route implementation with all necessary imports
- Properly typed request and response models
- Authentication and authorization middleware
- Comprehensive error handling
- Inline documentation and type hints
- Ready-to-use code that follows FastAPI conventions