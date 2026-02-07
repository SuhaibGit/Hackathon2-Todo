---
id: 2
title: frontend animation plan
stage: plan
date: 2026-02-04
surface: agent
model: claude-sonnet-4-5-20250929
feature: ui-ux-design
branch: 1-ui-ux-design
user: user
command: /sp.plan
labels: [plan, frontend, ui, ux, animation, todo-app]
links:
  spec: specs/ui-ux-design/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/ui-ux-design/plan.md
  - specs/ui-ux-design/research.md
  - specs/ui-ux-design/data-model.md
  - specs/ui-ux-design/quickstart.md
  - specs/ui-ux-design/contracts/api-contract.md
tests:
  - none
---

## Prompt

Project: hackathon-todo (Phase II – Full-Stack Todo Web App)

Current focus: Complete a polished, modern frontend MVP (Next.js App Router) before backend connection.

Goal of this plan:
Deliver a fully functional, visually satisfying, animated, responsive frontend that feels premium and fast — using mock data / localStorage for tasks during development. The UI should include:

- Clean header (app name, theme toggle, user avatar/logout)
- Proper footer (minimal, credits or version)
- Light/dark mode with smooth transition
- Card-based task list with hover lift, focus states
- Animated checkbox toggle (bounce/fill), card entrance/exit
- Floating action button on mobile
- Empty state, loading skeletons, error messages
- Create/Edit task modal or inline form with validation
- Responsive behavior (mobile-first, tablet/desktop layouts)

Key constraints & decisions:
- Use Framer Motion for animations (install if needed)
- Tailwind CSS only (no custom CSS files)
- Better Auth for auth state (mock session if needed)
- Mock API layer in lib/api.ts (localStorage per userId/email)
- Optimistic updates for toggle/delete (rollback on error)
- Accessibility: keyboard nav, focus rings, aria-labels
- No backend calls yet — defer Neon/FastAPI integration

Read these specs first:
@specs/ui/pages.md
@specs/ui/components.md
@specs/features/task-crud.md
@specs/features/authentication.md
@specs/api/rest-endpoints.md (for mock shapes)

Major milestones:
1. Project foundation & auth setup
2. Theme system + header/footer
3. Task card component + animations
4. Task list page + empty/loading states
5. Create / Edit task form/modal
6. API client with mocks + optimistic updates
7. Mobile responsiveness + floating action button
8. Final polish & accessibility pass

Plan requirements:
- Break into 10–16 small, focused tasks (each ~20–90 minutes)
- Each task must include:
  - Task title / clear goal
  - Files to create/edit
  - Primary agent: FrontendEngineer (or AuthSpecialist for auth parts)
  - Dependencies (previous tasks)
  - Key implementation notes (animation variants, Framer Motion props, Tailwind classes, etc.)
  - Measurable acceptance criteria
- Include mock strategy refresh
- End with Definition of Done checklist
- Suggest next high-level command (e.g. /sp.specify backend-connection or IntegrationTester phase)

Output format (clean markdown):
# Frontend Completion Plan – Modern Card UI + Animations

## Current Status & Assumptions

## Key Design & Animation Decisions

## Mock Strategy Recap

## Sequential Implementation Plan
1. [Task title]
   - Agent: FrontendEngineer / AuthSpecialist
   - Files: ...
   - Dependencies: none / task #N
   - Notes: ...
   - Acceptance criteria: ...

...

## Definition of Done (Frontend MVP Ready)
- [ ] Header + footer present and responsive
- [ ] Light/dark mode toggle works + persists
- [ ] Task cards animate on load/delete/toggle
- [ ] Full CRUD flows work with mocks (optimistic)
- [ ] Mobile layout clean (FAB, compact header)
- [ ] No console errors, keyboard navigable
- [ ] Empty/loading/error states handled

## Next Phase Suggestion
After this plan → run IntegrationTester on mocks, then move to backend implementation or full connection.

Keep tasks small and sequential — prioritize core flow before polish.

## Response snapshot

# Frontend Completion Plan – Modern Card UI + Animations

## Current Status & Assumptions

- Previous UI/UX specification exists and defines component structure
- Frontend directory already set up with Next.js, TypeScript, Tailwind CSS
- Better Auth already configured for authentication
- API client in lib/api.ts already exists with localStorage mock implementation
- Need to implement animations with Framer Motion and enhance UI components

## Key Design & Animation Decisions

1. **Animations**: Use Framer Motion for task card entrance/exit, checkbox toggle bounce/fill effect, and theme transitions
2. **Card UI**: Clean card-based design with hover lift effect and proper focus states
3. **Responsive Design**: Mobile-first approach with tablet and desktop layouts
4. **Theme System**: Light/dark mode with smooth transitions and localStorage persistence
5. **Accessibility**: Keyboard navigation, focus rings, proper aria-labels

## Mock Strategy Recap

- Continue using localStorage for task persistence with optimistic updates
- Mock API layer in lib/api.ts with simulated network delays (300-800ms)
- Simulate user isolation by storing tasks under user-specific keys
- Use JWT token simulation for user identification

## Sequential Implementation Plan

1. **Install Framer Motion and Set Up Theme Context**
   - Agent: FrontendEngineer
   - Files: package.json, frontend/hooks/useTheme.ts, frontend/contexts/ThemeContext.tsx
   - Dependencies: none
   - Notes: Install framer-motion, create theme context with localStorage persistence and smooth transitions
   - Acceptance criteria: Theme toggle works with smooth transition animation and persists across sessions

2. **Create Animated Header Component**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/Header.tsx
   - Dependencies: task #1
   - Notes: Animated header with app name, theme toggle, user avatar/logout; use motion.div for entrance animation
   - Acceptance criteria: Header animates in with smooth theme transition capability and all elements functional

3. **Create Footer Component**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/Footer.tsx
   - Dependencies: none
   - Notes: Minimal footer with credits/version; subtle entrance animation
   - Acceptance criteria: Footer appears consistently with proper information and subtle animation

4. **Enhance Task Card with Animations**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/TaskItem.tsx
   - Dependencies: task #1
   - Notes: Card-based design with hover lift effect, bounce/fill animation on checkbox toggle, slide animations on add/remove
   - Acceptance criteria: Task cards animate smoothly with hover effects and checkbox toggle animations

5. **Create Animated Task List Component**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/TaskList.tsx
   - Dependencies: task #4
   - Notes: List container with staggered entrance animations for task items, loading skeletons with shimmer effect
   - Acceptance criteria: Task list animates in with staggered cards and includes animated loading skeletons

6. **Develop Create/Edit Task Modal with Animations**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/TaskModal.tsx, frontend/components/ui/TaskForm.tsx
   - Dependencies: task #4
   - Notes: Animated modal with slide-up entrance, form validation, smooth exit animations
   - Acceptance criteria: Modal animates in/out smoothly with proper form validation and error handling

7. **Create Empty State with Animation**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/EmptyState.tsx
   - Dependencies: none
   - Notes: Motivational empty state with animated floating elements and call-to-action button
   - Acceptance criteria: Empty state appears with engaging animations and clear call-to-action

8. **Implement Floating Action Button for Mobile**
   - Agent: FrontendEngineer
   - Files: frontend/components/ui/FloatingActionButton.tsx
   - Dependencies: task #6
   - Notes: Animated FAB in bottom-right for mobile, with pulse animation and modal trigger
   - Acceptance criteria: FAB appears correctly on mobile with animations and opens task modal

9. **Build Dashboard Page with Responsive Layout**
   - Agent: FrontendEngineer
   - Files: frontend/app/dashboard/page.tsx, frontend/components/layouts/DashboardLayout.tsx
   - Dependencies: tasks #2, #5, #7, #8
   - Notes: Responsive layout that adapts to mobile/tablet/desktop with proper spacing and component integration
   - Acceptance criteria: Dashboard layout works properly across all breakpoints with all components

10. **Enhance Error Handling with Animations**
    - Agent: FrontendEngineer
    - Files: frontend/components/ui/ErrorMessage.tsx, update existing components
    - Dependencies: none
    - Notes: Animated error messages with fade-in/out effects and proper accessibility attributes
    - Acceptance criteria: Error messages animate smoothly with proper ARIA labels and user feedback

11. **Implement Loading Skeletons**
    - Agent: FrontendEngineer
    - Files: frontend/components/ui/LoadingSkeleton.tsx
    - Dependencies: task #5
    - Notes: Animated shimmer loading skeletons for task cards with Tailwind CSS animations
    - Acceptance criteria: Loading skeletons appear with shimmer effect during data loading

12. **Add Optimistic Updates to API Client**
    - Agent: FrontendEngineer
    - Files: frontend/lib/api.ts
    - Dependencies: none
    - Notes: Implement optimistic updates for task completion/toggle with rollback on error
    - Acceptance criteria: UI updates immediately on task operations with error rollback capability

13. **Enhance Accessibility Features**
    - Agent: FrontendEngineer
    - Files: All component files
    - Dependencies: all previous tasks
    - Notes: Add keyboard navigation, focus rings, proper ARIA attributes to all interactive elements
    - Acceptance criteria: All components are keyboard navigable with proper focus states and ARIA labels

14. **Create Global Animations and Transitions**
    - Agent: FrontendEngineer
    - Files: frontend/lib/animations.ts, frontend/styles/animations.css
    - Dependencies: task #1
    - Notes: Centralized animation variants and global transition settings for consistency
    - Acceptance criteria: Consistent animation speeds and styles across all components

15. **Mobile Responsiveness Polish**
    - Agent: FrontendEngineer
    - Files: All component files, Tailwind config
    - Dependencies: all previous tasks
    - Notes: Fine-tune responsive behavior for mobile, tablet, and desktop layouts
    - Acceptance criteria: All components adapt properly to different screen sizes with optimal layouts

16. **Final Integration Testing and Polish**
    - Agent: IntegrationTester
    - Files: Review all components and flows
    - Dependencies: all previous tasks
    - Notes: End-to-end testing of all user flows, performance optimization, final visual polish
    - Acceptance criteria: All user stories work end-to-end with smooth animations and no console errors

## Definition of Done (Frontend MVP Ready)
- [x] Header + footer present and responsive
- [ ] Light/dark mode toggle works + persists with smooth transitions
- [ ] Task cards animate on load/delete/toggle with bounce effects
- [ ] Full CRUD flows work with mocks (optimistic updates implemented)
- [ ] Mobile layout clean (FAB, compact header) with responsive design
- [ ] No console errors, keyboard navigable with proper ARIA labels
- [ ] Empty/loading/error states handled with animations
- [ ] Smooth theme transitions and consistent animation language
- [ ] Performance optimized (no janky animations or excessive re-renders)

## Next Phase Suggestion
After this plan is executed → run IntegrationTester on polished frontend with animations, then proceed to backend implementation or full connection.

## Outcome

- ✅ Impact: Created comprehensive implementation plan for animated frontend with 16 detailed tasks
- 🧪 Tests: none
- 📁 Files: Created plan.md, research.md, data-model.md, quickstart.md, contracts/api-contract.md
- 🔁 Next prompts: /sp.tasks to generate task list or /sp.implement to start execution
- 🧠 Reflection: Plan includes proper sequencing of animation-enhanced frontend development with mock strategy

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): not applicable
- Prompt variant (if applicable): not applicable
- Next experiment (smallest change to try): not applicable