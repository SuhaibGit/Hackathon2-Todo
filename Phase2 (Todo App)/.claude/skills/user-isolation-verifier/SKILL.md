# User Isolation Verifier Skill

## Purpose
Verify that users can only access their own data and cannot view or modify other users' information.

## Function
- Test that API endpoints properly validate user ownership
- Verify that database queries filter by user ID correctly
- Validate that authentication tokens match requested resources
- Test cross-user data access attempts
- Verify proper error responses for unauthorized access
- Ensure user data segregation at all application layers

## Isolation Testing Areas
- API endpoints that accept user IDs in paths/params
- Database query filters and JOIN clauses
- Authentication token validation against requested resources
- Frontend component data display logic
- API response filtering
- Cross-user modification attempts

## Testing Approach
- Attempt to access other users' data with valid tokens
- Test API endpoints with mismatched user IDs and tokens
- Verify database-level filtering and constraints
- Test edge cases and potential bypass scenarios
- Validate proper error responses (403/404 vs 200)
- Check for information leakage in error messages

## Output Format
- Complete test suite for user isolation verification
- Test cases for each potential isolation breach point
- Mock users and data for cross-access testing
- Assertion statements for expected security responses
- Ready-to-run tests that validate user data segregation