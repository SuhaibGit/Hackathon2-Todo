# CRUD Cycle Smoke Test Skill

## Purpose
Perform end-to-end smoke tests for complete CRUD (Create, Read, Update, Delete) operations to ensure basic functionality works.

## Function
- Test complete CRUD cycle for a resource in a single workflow
- Verify data persistence through the full cycle
- Validate proper error handling during each operation
- Check that relationships and constraints are maintained
- Test concurrent operations and race conditions
- Verify proper cleanup and cascade behaviors

## CRUD Operations Testing
- Create operation with valid and invalid data
- Read operation to verify data persistence
- Update operation with various field modifications
- Delete operation and verification of removal
- Validation of constraints during each operation
- Error handling for constraint violations

## Test Scenarios
- Happy path CRUD cycle with valid data
- Invalid data handling during each operation
- Constraint violation testing
- Race condition handling with concurrent requests
- Transaction rollback scenarios
- Cleanup verification after deletion

## Output Format
- Complete CRUD smoke test suite with all imports
- Sequential operations testing the full cycle
- Data setup and validation for each step
- Error handling and validation checks
- Ready-to-run tests that validate CRUD functionality