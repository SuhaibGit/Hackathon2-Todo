# Feature: AI Chatbot for Todo Management

## Overview
A natural-language conversational interface that allows authenticated users to create, read (list), update, complete, and delete their personal todo tasks via chat, powered by OpenAI Agents SDK + Model Context Protocol (MCP) tools, with all state (tasks + conversation history) persisted in Neon PostgreSQL, backend remaining fully stateless.

## Phase
Phase III

## User Stories
- As a logged-in user, I want to tell the AI in natural language to manage my tasks so I don't have to use buttons/forms.
- As a user, I want the AI to always confirm what it did ("I've added...", "Task marked complete", etc.).
- As a user, I want conversations to continue where I left off even after refresh or server restart.
- As a user, I want the AI to ask clarifying questions when my request is ambiguous.
- As a user, I expect only my own tasks to be visible/editable (strong ownership enforcement).

## Acceptance Criteria

### Core Functionality
- Every task operation goes through one of the 5 defined MCP tools (add_task, list_tasks, complete_task, delete_task, update_task)
- All tools receive and validate the authenticated user_id → no cross-user data access possible
- Chat endpoint: POST /api/{user_id}/chat accepts conversation_id (optional) and message
- If no conversation_id provided → new conversation is created
- Full conversation history is loaded from DB before each agent run
- Assistant responses and tool call results are stored as messages
- Server is stateless — no session/memory storage

### Behavior Requirements
- Adding a task: recognizes phrases like "add", "create", "remember to", "new task"
- Listing tasks: recognizes "show", "list", "what are my tasks", "pending/completed/all"
- Completing: "mark as done", "complete task X", "finished #3"
- Deleting: "delete", "remove", "cancel task Y"
- Updating: "change", "update", "rename task Z to ..."
- Always includes friendly confirmation of the action taken
- When task not found / invalid id / permission error → returns helpful message without exposing internals
- Supports follow-up questions in the same conversation

## Natural Language Command Examples

Use a markdown table with at least 10 rows:

| User Input Example                              | Expected MCP Tool(s) Called              | Expected AI Response Contains (snippet)          | Notes                              |
|------------------------------------------------|------------------------------------------|--------------------------------------------------|------------------------------------|
| add a task to buy milk and bread               | add_task                                 | "Added task: Buy milk and bread"                 | description optional               |
| show me my pending tasks                       | list_tasks(status="pending")             | numbered or bulleted list of pending tasks       | nice formatting                    |
| mark task 4 as done                            | complete_task                            | "Task 4 marked complete ✅"                      |                                    |
| delete the grocery shopping task               | (possibly list_tasks first) → delete_task| "Deleted task: Grocery shopping"                 | may need disambiguation            |
| change task 2 to call mom tonight              | update_task                              | "Updated task 2 to 'call mom tonight'"           |                                    |
| what's on my todo list?                        | list_tasks(status="all")                 | full list                                            |                                    |
| I finished washing the car                     | complete_task (after possible search)    | "Great! Task 'Wash the car' marked complete"     | flexible intent matching           |
| remove task number 7                           | delete_task                              | "Task 7 has been removed."                       |                                    |
| add remember to pay electricity bill           | add_task                                 | "Got it — added 'Pay electricity bill'"          | natural phrasing                   |
| what tasks did I complete this week?           | list_tasks(status="completed")           | list of completed tasks                          | (filter may be limited in MVP)     |

## Constraints & Non-Goals (for MVP)
- No support for reordering tasks or priorities
- No file/image attachments in chat
- No multi-participant / shared conversations
- No voice input (text only via ChatKit)
- No custom model fine-tuning — use standard model + good prompt + tools
- Max history loaded per request: last 25 messages (token safety)
- No rate limiting or abuse protection beyond auth (defer)
- AI must NOT execute code, access external APIs, or use tools outside the 5 defined MCP tools

## Success Evals (Defined First — Evals-First Pattern)
- 85%+ of 20 diverse natural-language test inputs correctly trigger the intended MCP tool(s) and produce confirmation
- 100% of task-modifying operations are isolated to the requesting user_id
- Conversation can be resumed correctly when same conversation_id is sent again after 5+ minutes
- No data leakage possible between users (tested with 2 accounts)
- Typical end-to-end response time < 6 seconds (including agent + tool calls)
- Server memory usage remains stable after 200 consecutive chat requests

## Dependencies / Related Specs
- Phase II REST API + authentication + Task model
- @specs/api/mcp-tools.md (exact tool definitions)
- @specs/database/schema.md (updated with Conversation & Message models)
- OpenAI API key + domain allowlist for ChatKit
- Better Auth JWT verification on chat endpoint