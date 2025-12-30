import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();

  console.log("cookieStore", cookieStore.getAll());
  const token = cookieStore.get("access_token")?.value;

  return NextResponse.json(
    { isSignedIn: Boolean(token), token },
    {
      headers: { "Cache-Control": "no-store" },
    }
  );
}
