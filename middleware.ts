// middleware.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Example: Allow all requests (you can customize)
  return NextResponse.next();
}

// Optionally specify which paths to match
export const config = {
  matcher: ["/shop/:path*", "/learn/:path*"], // example
};
