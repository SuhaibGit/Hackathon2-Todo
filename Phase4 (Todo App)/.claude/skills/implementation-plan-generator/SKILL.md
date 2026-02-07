# Implementation Plan Generator Skill

## Purpose
Transform validated specifications into detailed implementation plans with specific tasks, dependencies, and timelines.

## Function
- Decompose high-level requirements into specific, actionable tasks
- Identify dependencies between different components and tasks
- Assign tasks to appropriate agent types based on expertise
- Define clear acceptance criteria for each task
- Estimate complexity and time requirements for tasks
- Plan integration points and testing phases

## Planning Process
1. **Requirements Analysis**: Parse the specification to identify all required components
2. **Component Identification**: Break down into frontend, backend, database, and integration components
3. **Task Decomposition**: Create granular tasks from each component requirement
4. **Dependency Mapping**: Identify which tasks must be completed before others can begin
5. **Agent Assignment**: Match tasks to appropriate agent types (FrontendEngineer, BackendEngineer, etc.)
6. **Acceptance Criteria**: Define specific, testable criteria for each task completion
7. **Risk Assessment**: Identify potential challenges and mitigation strategies

## Task Structure
Each task should include:
- **Objective**: Clear description of what needs to be accomplished
- **Prerequisites**: Dependencies that must be completed first
- **Agent Assignment**: Which agent type should perform this task
- **Acceptance Criteria**: Specific, testable conditions for completion
- **Deliverables**: Concrete outputs that will be produced
- **Complexity Level**: Simple, Medium, or Complex estimation
- **Risk Factors**: Potential challenges and mitigation strategies

## Output Format
- Numbered list of implementation tasks in dependency order
- Clear mapping of tasks to agent types
- Defined acceptance criteria for each task
- Identified integration points and testing phases
- Risk assessment and mitigation strategies
- Suggested sequence for implementation to maximize efficiency