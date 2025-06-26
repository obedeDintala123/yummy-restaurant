import { NextRequest, NextResponse } from "next/server";

// Exemplo: protege rotas começando com /dashboard
export function middleware(request: NextRequest) {
  const isAuthenticated = Boolean(request.cookies.get("auth-token"));

  // Rotas protegidas
  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

// Configuração das rotas que usam o middleware
export const config = {
  matcher: ["/dashboard/:path*"]
};
