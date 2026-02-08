# Negative Case Generator Skill

## Purpose
Generate comprehensive negative test cases to verify proper error handling and security measures.

## Function
- Create test cases for invalid inputs and edge cases
- Generate tests for unauthorized access attempts
- Build tests for boundary conditions and overflow scenarios
- Create tests for malformed requests and data
- Develop security-focused test cases (injection, bypass attempts)
- Generate performance edge case tests

## Negative Test Categories
- Invalid input validation (malformed data, wrong types, out-of-range values)
- Unauthorized access attempts (missing auth, wrong user, insufficient permissions)
- Boundary conditions (empty strings, max lengths, numeric limits)
- Malformed requests (invalid JSON, missing fields, extra fields)
- Security vulnerability tests (SQL injection, XSS, CSRF attempts)
- Resource exhaustion tests (rate limiting, memory, connection limits)

## Testing Approach
- Systematic generation of invalid inputs
- Authentication and authorization bypass attempts
- Error response validation and consistency
- Security vulnerability probing
- Performance degradation testing
- Exception handling verification

## Output Format
- Complete suite of negative test cases with all necessary imports
- Various invalid input scenarios for each endpoint
- Security-focused test cases for vulnerabilities
- Expected error responses and status codes
- Ready-to-run tests that validate error handling and security