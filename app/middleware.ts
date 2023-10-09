import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  console.log(path);
  const isPublicPath = path === '/auth/login';

  const token = window.localStorage.getItem('token') || '';

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/dashboard/users', request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL('/auth/login', request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/dashboard/users', '/dashboard/projects', '/dashboard/invoices', '/dashboard/roles'],
};
