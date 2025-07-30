import contentfulClient from "@/lib/contentful/contentful";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const courses = await contentfulClient.getEntries({
    content_type: "courses",
  });

  // TODO Map data to our types
  return NextResponse.json(courses.items);
}
