# API Client Method Generator Skill

## Purpose
Create type-safe API client methods for interacting with backend services, with proper error handling and request/response typing.

## Function
- Generate API client functions for different HTTP methods
- Implement proper request/response typing with TypeScript
- Add authentication header attachment for protected endpoints
- Include error handling with proper status code checking
- Create reusable request configuration and interceptors
- Implement retry logic and timeout handling when appropriate

## Client Components
- HTTP method functions (GET, POST, PUT, DELETE)
- Request payload validation and serialization
- Response type definitions and parsing
- Authentication token attachment
- Error response handling and user-friendly messages
- Request configuration (headers, timeout, etc.)

## Error Handling
- Network error detection and handling
- HTTP status code specific error responses
- Timeout handling and retry logic
- User-friendly error message generation
- Logging for debugging purposes
- Graceful degradation for failed requests

## Output Format
- Complete API client module with all necessary imports
- Type-safe request and response functions
- Proper error handling and authentication
- Configuration options for different environments
- Ready-to-use client that integrates with frontend components