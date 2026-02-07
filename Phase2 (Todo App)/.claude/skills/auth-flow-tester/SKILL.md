# Auth Flow Tester Skill

## Purpose
Test authentication flows to ensure proper registration, login, logout, and session management functionality.

## Function
- Create comprehensive test suites for authentication endpoints
- Test successful registration and login scenarios
- Verify error handling for invalid credentials
- Test session management and token refresh
- Validate logout functionality and token invalidation
- Test edge cases and security scenarios

## Test Categories
- Registration flow tests (valid/invalid inputs, duplicate emails)
- Login flow tests (valid/invalid credentials, locked accounts)
- Logout flow tests (token invalidation, session cleanup)
- Session management tests (expiration, refresh)
- Token validation tests (malformed, expired, invalid tokens)
- Security tests (rate limiting, brute force protection)

## Testing Approach
- Unit tests for individual authentication functions
- Integration tests for complete auth flows
- Mock authentication providers for testing
- Test different user roles and permissions
- Verify proper error responses and status codes
- Validate token security and expiration handling

## Output Format
- Complete test suite with all necessary imports and setup
- Individual test cases for each auth scenario
- Mock data and test fixtures
- Assertion statements for expected outcomes
- Ready-to-run tests that verify auth functionality