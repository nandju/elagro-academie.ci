import { NextResponse } from "next/server"

export async function POST() {
  const response = NextResponse.json(
    {
      success: true,
      message: "Déconnexion réussie",
    },
    { status: 200 }
  )

  // Supprimer les cookies
  response.cookies.delete("auth-token")
  response.cookies.delete("user-email")

  return response
}

