// import type { NextRequest } from "next/server";
import { NextResponse } from 'next/server';

export function middleware() {
  // const token = req.cookies.get("accessToken")?.value;

  // const token = 'abcd'

  // const { pathname } = req.nextUrl.clone();

  // if (pathname === "/dashboard") {
  //   return NextResponse.redirect(new URL("/dashbord", req.url));
  // }
  // const publicRoutes = ["/auth/login"];

  // const protectedRoutes = ["/dashboard"];

  // if (token && publicRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL("/dashboard", req.url));
  // }

  // if (!token && protectedRoutes.includes(pathname)) {
  //   return NextResponse.redirect(new URL("/login", req.url));
  // }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|static|favicon.ico|assets|favicon|manifest.json|_next).*)',
  ],
};
