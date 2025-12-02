import supabase from "@/lib/supabase"
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
    const {data,error} = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    // Vérifier les identifiants
    console.log("Data",data);
    console.log("Error",error);
    if (
     data?.user?.id
    ) {
      // Créer un token simple (dans une vraie app, utilisez JWT)
      const token = data.session.access_token;

      const {data:profileData,error:profileError} = await supabase
      .from('users')
      .select('last_name, first_name, user_role,id ')
      .eq('supabase_user_id', data.user.id)
      .single();

      // Créer la réponse
      const response = NextResponse.json(
        {
          success: true,
          message: "Connexion réussie",
          user: {
            email,
            name: `${profileData?.first_name} ${profileData?.last_name}`,
            role: profileData?.user_role,
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
       response.cookies.set("user-connected", JSON.stringify({name: `${profileData?.first_name} ${profileData?.last_name}`, role: profileData?.user_role,id: profileData?.id}), {
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

