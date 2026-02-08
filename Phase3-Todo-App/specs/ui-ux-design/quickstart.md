# Quickstart Guide - Frontend with Animations

## Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Basic knowledge of TypeScript, React, Next.js, Tailwind CSS, and Framer Motion

## Project Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd hackathon-todo
   ```

2. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies (including Framer Motion):
   ```bash
   npm install framer-motion
   # or
   yarn add framer-motion
   ```

4. Install all other dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

5. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

   Update the following values in `.env.local`:
   ```
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=<generate-a-secret>
   BETTER_AUTH_SECRET=<generate-a-secret>
   ```

## Running the Application

1. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

2. Open your browser to [http://localhost:3000](http://localhost:3000)

## Key Animation Components

### Header with Animation
Located in `components/ui/Header.tsx` - uses Framer Motion for smooth entrance animations and theme transitions.

### Task Card with Animations
Located in `components/ui/TaskItem.tsx` - includes:
- Hover lift effect
- Checkbox toggle bounce animation
- Task deletion slide-out animation
- Mount/unmount animations

### Theme Context
Located in `hooks/useTheme.ts` and `contexts/ThemeContext.tsx` - manages light/dark mode with smooth transitions.

### Loading Skeletons
Located in `components/ui/LoadingSkeleton.tsx` - animated shimmer effect for loading states.

### Floating Action Button (FAB)
Located in `components/ui/FloatingActionButton.tsx` - animated button for mobile task creation.

## Animation Properties

All animations use these standard values:
- Duration: 200-300ms for UI interactions
- Easing: `easeInOut` for most transitions
- Stagger: 0.05ms delay between items in lists
- Scale: 1.02-1.05 for hover effects

## Animation Variants

Defined in `lib/animations.ts`:
- `fadeIn`: Simple fade-in effect
- `slideInUp`: Slide up animation for new elements
- `staggerContainer`: Stagger effect for multiple items
- `bounceButton`: Bounce effect for interactive elements
- `cardHover`: Lift effect for cards

## Theme Usage

The theme system supports:
- Light/Dark mode switching with localStorage persistence
- Smooth transitions between themes (200ms)
- Customizable primary and accent colors
- Automatic system preference detection

## API Integration

All API calls in `lib/api.ts` include:
- Optimistic updates with immediate UI feedback
- Error handling with rollback capabilities
- Loading state management
- Mock data simulation with localStorage

## Responsive Behavior

The design adapts at:
- Mobile (<640px): Compact header, FAB, simplified layout
- Tablet (640px-1024px): Balanced layout
- Desktop (>1024px): Expanded layout with more space

## Accessibility Features

- Keyboard navigation support
- Focus rings for interactive elements
- ARIA labels for animated components
- Reduced motion option for accessibility