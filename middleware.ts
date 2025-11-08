import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Routes protégées qui nécessitent une authentification
const protectedRoutes = [
  "/dashboard",
  "/profile",
  "/learn",
  "/certificates",
  "/certificate",
  "/quiz",
]

// Routes d'authentification (rediriger si déjà connecté)
const authRoutes = ["/login", "/register"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vérifier si la route est protégée
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Vérifier si la route est une route d'authentification
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Vérifier l'authentification via le cookie
  const token = request.cookies.get("auth-token")?.value
  const isAuthenticated = !!token

  // Si la route est protégée et l'utilisateur n'est pas authentifié
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Si l'utilisateur est authentifié et essaie d'accéder aux routes d'auth
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
}

