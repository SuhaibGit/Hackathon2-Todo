# Todo App Frontend

A responsive, functional Next.js frontend for the Todo application with authentication and task management features.

## Features

- User authentication (sign up, sign in, sign out)
- Secure JWT-based session management
- Task management (create, read, update, delete)
- Responsive design with Tailwind CSS
- Form validation and error handling
- Optimistic UI updates
- Mock API implementation for local development

## Tech Stack

- Next.js 16+ with App Router
- TypeScript
- Tailwind CSS
- Better Auth
- React Hooks

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the frontend directory: `cd frontend`
3. Install dependencies: `npm install`
4. Create a `.env.local` file with the required environment variables (refer to `.env.local` for examples)

### Running the Application

```bash
npm run dev
```

The application will start on `http://localhost:3000`

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   ├── auth/               # Authentication pages
│   │   ├── signin/page.tsx
│   │   └── signup/page.tsx
│   └── dashboard/page.tsx  # Main dashboard
├── components/             # Reusable React components
│   ├── auth/               # Authentication components
│   ├── tasks/              # Task management components
│   └── ui/                 # General UI components
├── lib/                    # Utilities and API client
│   ├── api.ts              # Centralized API client with mock implementation
│   └── auth.ts             # Authentication utilities
├── styles/                 # Global styles
│   └── globals.css         # Tailwind CSS directives
└── types/                  # TypeScript type definitions
    └── index.ts
```

## Environment Variables

The application uses the following environment variables:

- `NEXTAUTH_URL`: Base URL for the application
- `NEXTAUTH_SECRET`: Secret for signing JWTs
- `BETTER_AUTH_SECRET`: Secret for Better Auth

## API Client

All API calls go through the centralized `apiClient` in `lib/api.ts`. The implementation uses localStorage to mock API responses during frontend development. When switching to the real backend, only the implementation in this file needs to be changed.

## Authentication

Authentication is handled using JWT tokens stored in localStorage. The application includes:

- Protected route components
- Authentication context provider
- Session management
- Automatic redirects for unauthenticated users

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request