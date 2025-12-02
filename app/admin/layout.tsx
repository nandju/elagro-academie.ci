import { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Administration | ELAGRO ACADEMY",
  description: "Espace d'administration de la plateforme",
}

export default async function AdminLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  // Vérifier l'authentification et le rôle admin côté serveur
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value
  console.log("AdminLayout - auth-token:", token)
  // if (!token) {
  //   redirect("/login?redirect=/admin/dashboard")
  // }

  // TODO: Vérifier le rôle admin dans le token ou la session
  // Pour l'instant, on laisse passer - à implémenter selon votre système d'auth

  return children
}

