import { NextRequest, NextResponse } from "next/server";

// Exemplo: protege rotas começando com /dashboard
export function middleware(request: NextRequest) {
  const isAuthenticated = Boolean(request.cookies.get("auth-token"));
  const { pathname } = request.nextUrl;

  // Rotas protegidas
  if (pathname.startsWith("/dashboard")) {
    if (!isAuthenticated) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Se já estiver logado, redireciona de /login ou /register para /dashboard
  if (isAuthenticated && (pathname === "/login" || pathname === "/register")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Configuração das rotas que usam o middleware
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"]
};
