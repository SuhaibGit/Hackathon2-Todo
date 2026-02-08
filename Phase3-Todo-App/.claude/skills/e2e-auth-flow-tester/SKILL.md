# E2E Auth Flow Tester Skill

## Purpose
Create comprehensive end-to-end tests for the entire authentication flow from registration to protected resource access.

## Function
- Test complete user journey from registration to protected resources
- Verify authentication state persistence across page navigations
- Validate that unauthenticated users cannot access protected routes
- Test token refresh and session management
- Verify logout functionality clears all authentication state
- Test concurrent session handling and security

## E2E Test Scenarios
- Complete registration and login flow
- Navigation to protected routes with valid/invalid sessions
- Token expiration and refresh handling
- Logout and session cleanup
- Concurrent sessions and security
- Error handling during authentication flows

## Testing Framework
- Setup and teardown of test users and data
- Browser automation for UI interactions
- API call verification during auth flows
- Session state validation
- Cross-tab authentication state consistency
- Performance and timing validation

## Output Format
- Complete end-to-end test suite with all necessary imports
- Test scenarios covering complete auth flows
- Setup and teardown functions for test data
- Assertion statements for expected outcomes
- Ready-to-run tests that validate complete auth functionality