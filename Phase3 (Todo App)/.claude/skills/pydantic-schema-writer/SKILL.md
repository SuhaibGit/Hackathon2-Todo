# Pydantic Schema Writer Skill

## Purpose
Create robust Pydantic models for request/response validation with proper typing, validation rules, and serialization options.

## Function
- Define request models for API input validation
- Create response models for API output serialization
- Implement field validation with custom validators
- Add proper type hints and optional field handling
- Configure serialization settings for API responses
- Include documentation and examples for API documentation

## Schema Components
- Field types with proper annotations (str, int, bool, datetime, etc.)
- Validation constraints (min/max length, regex patterns, ranges)
- Optional fields with default values
- Nested models for complex data structures
- Custom validators for business logic validation
- Serialization configuration for API responses

## Validation Features
- Field-level validation (length, format, range)
- Cross-field validation when needed
- Custom validation functions for business rules
- Error message customization
- Type coercion and conversion handling
- Handling of optional and nullable fields

## Output Format
- Complete Pydantic model classes with all necessary imports
- Proper field annotations and validation rules
- Configuration for serialization and validation
- Documentation strings for API documentation
- Ready-to-use models that integrate with FastAPI