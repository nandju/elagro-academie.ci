import { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Espace Formateur | ELAGRO ACADEMY",
  description: "Espace de gestion des formations pour les formateurs",
}

export default async function InstructorLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  // Vérifier l'authentification et le rôle instructor côté serveur
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    redirect("/login?redirect=/instructor/dashboard")
  }

  // TODO: Vérifier le rôle instructor dans le token ou la session
  // Pour l'instant, on laisse passer - à implémenter selon votre système d'auth

  return children
}

