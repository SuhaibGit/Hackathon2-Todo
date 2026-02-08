import { NextRequest, NextResponse } from 'next/server';

export function middleware(request) {
  // Protect routes that require authentication
  const protectedPaths = ['/dashboard', '/api/users'];
  const isProtectedPath = protectedPaths.some(path =>
    request.nextUrl.pathname.startsWith(path)
  );

  // Check if user is authenticated by looking for auth token
  const token = request.cookies.get('todo_auth_token')?.value;

  if (isProtectedPath && !token) {
    // Redirect to login page if not authenticated
    return NextResponse.redirect(new URL('/auth/signin', request.url));
  }

  // Allow the request to continue
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}