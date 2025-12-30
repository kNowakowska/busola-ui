import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
  const cookieStore = await cookies();

  // Debug: Log all cookies and request headers
  const allCookies = cookieStore.getAll();
  const cookieHeader = request.headers.get("cookie");

  console.log("cookieStore.getAll()", allCookies);
  console.log("request.headers.get('cookie')", cookieHeader);

  const token = cookieStore.get("access_token")?.value;

  return NextResponse.json(
    { isSignedIn: Boolean(token), token },
    {
      headers: { "Cache-Control": "no-store" },
    }
  );
}
