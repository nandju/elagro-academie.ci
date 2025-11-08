import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const token = request.cookies.get("auth-token")?.value

  if (token) {
    return NextResponse.json(
      {
        authenticated: true,
        message: "Utilisateur authentifié",
      },
      { status: 200 }
    )
  } else {
    return NextResponse.json(
      {
        authenticated: false,
        message: "Non authentifié",
      },
      { status: 401 }
    )
  }
}

