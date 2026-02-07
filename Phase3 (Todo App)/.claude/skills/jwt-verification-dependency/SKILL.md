# JWT Verification Dependency Skill

## Purpose
Create stateless JWT verification dependencies for backend services that validate tokens issued by Better Auth.

## Function
- Implement token verification using shared secrets or public keys
- Extract user information from token claims
- Validate token expiration and issuer
- Create dependency injection functions for protected endpoints
- Handle different token validation failure scenarios
- Ensure compatibility with Better Auth token format

## Verification Components
- Token extraction from Authorization header
- Signature verification with configured secret/key
- Claim validation (iss, sub, exp, etc.)
- User ID extraction for authorization checks
- Error handling for different failure types
- Integration with FastAPI dependency system

## Security Features
- Proper algorithm validation and specification
- Clock skew tolerance for expiration checking
- Token replay attack prevention
- Secure secret management from environment variables
- Validation of required claims
- Protection against common JWT vulnerabilities

## Output Format
- Complete verification dependency function with all imports
- Proper error handling with appropriate HTTP responses
- Environment variable configuration for secrets
- Type hints and documentation
- Ready-to-use dependency for backend route protection