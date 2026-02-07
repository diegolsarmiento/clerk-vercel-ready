import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const DEFAULT_LOCALE = "en";
const LOCALES = new Set(["en", "es"]);

function hasLocale(pathname: string) {
  const seg = pathname.split("/")[1]; // "" | "en" | "es" | ...
  return LOCALES.has(seg);
}

function isBypassPath(pathname: string) {
  // Extra safety (matcher ya evita la mayoría)
  return (
    pathname.startsWith("/_next") ||
    pathname === "/favicon.ico" ||
    pathname.includes(".")
  );
}

export default clerkMiddleware((auth, req) => {
  const { pathname } = req.nextUrl;

  // Skip static-ish stuff (just in case)
  if (isBypassPath(pathname)) return NextResponse.next();

  // Skip API/TRPC (no locale redirects ahí)
  if (pathname.startsWith("/api") || pathname.startsWith("/trpc")) {
    return NextResponse.next();
  }

  // Redirect "/" -> "/en"
  if (pathname === "/") {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}`;
    return NextResponse.redirect(url);
  }

  // Any route without "/en" or "/es" -> prefix with default locale
  if (!hasLocale(pathname)) {
    const url = req.nextUrl.clone();
    url.pathname = `/${DEFAULT_LOCALE}${pathname.startsWith("/") ? "" : "/"}${pathname}`;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
