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

// Routes admin (nécessitent le rôle admin)
const adminRoutes = [
  "/admin",
]

// Routes instructor (nécessitent le rôle instructor)
const instructorRoutes = [
  "/instructor",
]

// Routes d'authentification (rediriger si déjà connecté)
const authRoutes = ["/login", "/register"]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Vérifier si la route est protégée
  const isProtectedRoute = protectedRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Vérifier si la route est admin
  const isAdminRoute = adminRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Vérifier si la route est instructor
  const isInstructorRoute = instructorRoutes.some((route) =>
    pathname.startsWith(route)
  )

  // Vérifier si la route est une route d'authentification
  const isAuthRoute = authRoutes.some((route) => pathname.startsWith(route))

  // Vérifier l'authentification via le cookie
  const token = request.cookies.get("auth-token")?.value
  const isAuthenticated = !!token

  // TODO: Extraire le rôle depuis le token JWT ou la session
  // Pour l'instant, on vérifie juste l'authentification
  // En production, il faudra décoder le token et vérifier le rôle
  const userRole = request.cookies.get("user-role")?.value || "student"

  // Si la route est protégée et l'utilisateur n'est pas authentifié
  if (isProtectedRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Si la route est admin et l'utilisateur n'est pas authentifié
  if (isAdminRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Si la route est admin et l'utilisateur n'est pas admin
  if (isAdminRoute && isAuthenticated && userRole !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  // Si la route est instructor et l'utilisateur n'est pas authentifié
  if (isInstructorRoute && !isAuthenticated) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("redirect", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Si la route est instructor et l'utilisateur n'est pas instructor ou admin
  if (isInstructorRoute && isAuthenticated && userRole !== "instructor" && userRole !== "admin") {
    return NextResponse.redirect(new URL("/dashboard", request.url))
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

