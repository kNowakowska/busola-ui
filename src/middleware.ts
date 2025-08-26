import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { Routes } from "./lib/routes/routes";

export function middleware(request: NextRequest) {
  const refreshToken = request.cookies.get("refresh_token")?.value;

  if (!refreshToken) {
    return NextResponse.redirect(new URL(Routes.signIn(), request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
};
