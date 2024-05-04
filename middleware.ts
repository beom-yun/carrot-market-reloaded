import { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
