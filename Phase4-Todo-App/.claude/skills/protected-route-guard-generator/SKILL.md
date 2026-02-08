# Protected Route Guard Generator Skill

## Purpose
Create route protection mechanisms for Next.js applications to ensure only authenticated users can access certain pages.

## Function
- Implement client-side route guards for protected pages
- Create server-side protection for server components
- Handle unauthenticated access redirects
- Manage loading states during authentication checks
- Integrate with Better Auth session management
- Implement role-based access control when needed

## Guard Components
- Client-side hook for authentication status checking
- Higher-order component wrapper for protected routes
- Server-side authentication check for server components
- Redirect logic for unauthenticated users
- Loading state management during auth checks
- Error handling for authentication failures

## Protection Strategies
- Session validation before rendering protected content
- Automatic redirect to login page when unauthenticated
- Role-based access control for different user permissions
- Token refresh and validation
- Graceful handling of expired sessions
- Prevention of unauthorized data access

## Output Format
- Complete route guard implementation with all imports
- Client and server-side protection components
- Redirect and error handling logic
- Integration with Better Auth session system
- Ready-to-use guards that protect application routes