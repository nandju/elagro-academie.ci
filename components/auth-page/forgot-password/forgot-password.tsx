"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Loader2, AlertCircle, ArrowLeft } from "lucide-react"
import { AgriculturalMarqueeBackground } from "@/components/landing-page/hero/agricultural-marquee-background"
import Link from "next/link"

function ForgotPasswordForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      // Simuler l'envoi d'email de réinitialisation
      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSuccess(true)
      } else {
        setError(data.message || "Une erreur est survenue. Veuillez réessayer.")
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      console.error("Erreur de réinitialisation:", err)
    } finally {
      setIsLoading(false)
    }
  }

  if (success) {
    return (
      <div className="space-y-4">
        {/* Success Message */}
        <div 
          className="mb-4 p-4 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.3)' }}
        >
          <AlertCircle className="w-5 h-5" style={{ color: '#22C55E' }} />
          <p className="text-sm" style={{ color: '#86EFAC' }}>
            Un email de réinitialisation a été envoyé à {email}. Veuillez vérifier votre boîte de réception.
          </p>
        </div>

        {/* Back to Login */}
        <div className="pt-4 text-center">
          <Link 
            href="/login"
            className="inline-flex items-center text-sm transition-colors hover:underline"
            style={{ color: '#E0AB6C' }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour à la connexion
          </Link>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Error Message */}
      {error && (
        <div 
          className="mb-4 p-4 rounded-lg flex items-center gap-2"
          style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)', border: '1px solid rgba(220, 38, 38, 0.3)' }}
        >
          <AlertCircle className="w-5 h-5" style={{ color: '#EF4444' }} />
          <p className="text-sm" style={{ color: '#FCA5A5' }}>
            {error}
          </p>
        </div>
      )}

      {/* Description */}
      <p className="mb-6 text-sm text-gray-400">
        Entrez votre adresse email et nous vous enverrons un lien pour réinitialiser votre mot de passe.
      </p>

      {/* Email Input */}
      <div>
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
          style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isLoading || !email}
        className="w-full py-6 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#E0AB6C' }}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le lien de réinitialisation
            <ChevronRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      {/* Back to Login */}
      <div className="pt-4 text-center">
        <Link 
          href="/login"
          className="inline-flex items-center text-sm transition-colors hover:underline"
          style={{ color: '#E0AB6C' }}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour à la connexion
        </Link>
      </div>

      {/* reCAPTCHA Notice */}
      <div className="pt-4 text-center text-xs text-gray-500">
        Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.{" "}
        <a 
          href="#" 
          className="transition-colors hover:underline"
          style={{ color: '#E0AB6C' }}
        >
          En savoir plus.
        </a>
      </div>
    </form>
  )
}

export function ForgotPasswordSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#001A3B' }}>
      {/* 3D Marquee Background */}
      <AgriculturalMarqueeBackground />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-32">
        <div 
          className="w-full max-w-md rounded-lg p-12 shadow-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0, 26, 59, 0.85)' }}
        >
          <h1 
            className="mb-8 text-3xl font-bold" 
            style={{ color: '#FFFFFF' }}
          >
            Mot de passe oublié
          </h1>

          <ForgotPasswordForm />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

