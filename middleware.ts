import { NextRequest } from "next/server";
import getSession from "./lib/session";

export async function middleware(request: NextRequest) {
  const session = await getSession();
  console.log(session);
  if (request.nextUrl.pathname === "/profile") {
    console.log("Middle로부터 허락되지 않습니다.");
    return Response.redirect(new URL("/", request.url));
  }
}
