# SQLModel Model Builder Skill

## Purpose
Create robust SQLModel database models with proper relationships, constraints, and validation.

## Function
- Define database tables with appropriate field types and constraints
- Implement foreign key relationships and cascading rules
- Add validation rules and constraints at the model level
- Create indexes for performance optimization
- Define relationship properties (one-to-many, many-to-many, etc.)
- Include proper serialization configurations for API responses

## Model Components
- Primary key definitions with appropriate types (UUID, integer auto-increment)
- Field constraints (nullable, unique, default values)
- Relationship definitions with proper back_populates
- Validation methods and computed properties
- Index specifications for frequently queried fields
- JSON serialization configurations

## Security Considerations
- Define which fields should be excluded from API responses
- Implement proper foreign key constraints for referential integrity
- Consider privacy requirements for sensitive data
- Plan for data retention and deletion policies

## Output Format
- Complete SQLModel class definitions with all necessary imports
- Proper relationship mappings and constraints
- Validation rules and custom methods
- Configuration for serialization/deserialization
- Ready-to-use models compatible with SQLAlchemy migrations