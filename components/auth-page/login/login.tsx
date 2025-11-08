"use client"

import { useState, Suspense } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Loader2, CheckCircle2, AlertCircle, X, Eye, EyeOff } from "lucide-react"
import { AgriculturalMarqueeBackground } from "@/components/landing-page/hero/agricultural-marquee-background"

function LoginForm() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        // Rediriger vers la page demandée ou le dashboard
        const redirect = searchParams.get("redirect") || "/dashboard"
        router.push(redirect)
        router.refresh()
      } else {
        setError(data.message || "Email ou mot de passe incorrect")
      }
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.")
      console.error("Erreur de connexion:", err)
    } finally {
      setIsLoading(false)
    }
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

      {/* Email Input */}
      <div>
        <Input
          type="text"
          placeholder="E-mail ou numéro de mobile"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
          style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
        />
      </div>

      {/* Password Input */}
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border-0 bg-white/10 px-4 py-6 pr-12 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
          style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      {/* Login Button */}
      <Button
        type="submit"
        disabled={isLoading || !email || !password}
        className="w-full py-6 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ backgroundColor: '#E0AB6C' }}
      >
        {isLoading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Connexion...
          </>
        ) : (
          <>
            M'identifier
            <ChevronRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      {/* OR Divider */}
      <div className="relative py-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-transparent px-4 text-gray-400">OU</span>
        </div>
      </div>

      {/* Use Code Button */}
      <Button
        type="button"
        variant="outline"
        className="w-full border-2 py-6 font-medium text-white transition-all hover:bg-white/10"
        style={{ borderColor: '#E0AB6C', backgroundColor: 'transparent' }}
      >
        Utiliser un code d'identification
      </Button>

      {/* Forgot Password */}
      <div className="text-center">
        <a 
          href="#" 
          className="text-sm transition-colors hover:underline"
          style={{ color: '#E0AB6C' }}
        >
          Mot de passe oublié ?
        </a>
      </div>

      {/* Remember Me */}
      <div className="flex items-center space-x-2 pt-2">
        <input
          type="checkbox"
          id="remember"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
          className="h-4 w-4 rounded border-gray-500"
          style={{ accentColor: '#E0AB6C' }}
        />
        <label htmlFor="remember" className="text-sm text-white">
          Se souvenir de moi
        </label>
      </div>

      {/* Sign Up Link */}
      <div className="pt-4 text-center text-sm text-gray-400">
        Première visite ?{" "}
        <a 
          href="/register" 
          className="font-semibold transition-colors hover:underline"
          style={{ color: '#E0AB6C' }}
        >
          Inscrivez-vous maintenant
        </a>
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

export function LoginSection() {

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
            Identifiez-vous
          </h1>

          <Suspense fallback={<div className="text-white">Chargement...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#001A3B] to-transparent" />
    </section>
  )
}