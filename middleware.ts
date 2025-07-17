// // middleware.ts

// import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   // Example: Allow all requests (you can customize)
//   return NextResponse.next();
// }

// // Optionally specify which paths to match
// export const config = {
//   matcher: ["/shop/:path*", "/learn/:path*"], // example
// };

import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const user = req.nextauth.token;

    if (pathname.startsWith('/dashboard') && user?.role !== 'admin') {
      return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = {
  matcher: ['/dashboard/:path*', "/shop/:path*", "/learn/:path*"],
};
