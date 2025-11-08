import { NextRequest, NextResponse } from "next/server"

// Identifiants de connexion
const VALID_CREDENTIALS = {
  email: "marcherve-elagroci@gmail.com",
  password: "nanashiuchiwa123",
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Vérifier les identifiants
    if (
      email === VALID_CREDENTIALS.email &&
      password === VALID_CREDENTIALS.password
    ) {
      // Créer un token simple (dans une vraie app, utilisez JWT)
      const token = Buffer.from(`${email}:${Date.now()}`).toString("base64")

      // Créer la réponse
      const response = NextResponse.json(
        {
          success: true,
          message: "Connexion réussie",
          user: {
            email,
            name: "Marc Herve",
          },
        },
        { status: 200 }
      )

      // Définir le cookie d'authentification
      response.cookies.set("auth-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 jours
        path: "/",
      })

      // Définir aussi un cookie pour l'email de l'utilisateur
      response.cookies.set("user-email", email, {
        httpOnly: false,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 7 jours
        path: "/",
      })

      return response
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Email ou mot de passe incorrect",
        },
        { status: 401 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Erreur lors de la connexion",
      },
      { status: 500 }
    )
  }
}

