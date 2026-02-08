import { createAuthClient } from 'better-auth/react';
import { nextCookies } from 'better-auth/next-js';

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
  secret: process.env.BETTER_AUTH_SECRET || 'fallback-secret-for-dev',
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: false,
  },
});