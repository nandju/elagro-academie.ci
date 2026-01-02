import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email } = body

    // Vérifier que l'email est fourni
    if (!email) {
      return NextResponse.json(
        {
          success: false,
          message: "L'adresse email est requise",
        },
        { status: 400 }
      )
    }

    // Vérifier le format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Format d'email invalide",
        },
        { status: 400 }
      )
    }

    // Dans une vraie application, vous devriez :
    // 1. Vérifier que l'email existe dans la base de données
    // 2. Générer un token de réinitialisation sécurisé
    // 3. Envoyer un email avec le lien de réinitialisation
    // 4. Stocker le token dans la base de données avec une expiration

    // Pour l'instant, on simule juste un succès
    // TODO: Implémenter l'envoi d'email réel avec un service comme SendGrid, Resend, etc.

    return NextResponse.json(
      {
        success: true,
        message: "Un email de réinitialisation a été envoyé",
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de l'envoi de l'email de réinitialisation",
      },
      { status: 500 }
    )
  }
}

