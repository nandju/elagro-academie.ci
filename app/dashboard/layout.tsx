import { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

export const metadata: Metadata = {
  title: "Tableau de bord | ELAGRO ACADEMY",
  description: "Votre espace de formation et d'apprentissage",
}

export default async function DashboardLayoutPage({
  children,
}: {
  children: React.ReactNode
}) {
  // Vérifier l'authentification côté serveur
  const cookieStore = await cookies()
  const token = cookieStore.get("auth-token")?.value

  if (!token) {
    redirect("/login?redirect=/dashboard")
  }

  return children
}

