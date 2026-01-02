"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react"
import { AgriculturalMarqueeBackground } from "@/components/landing-page/hero/agricultural-marquee-background"

export function RegisterSection() {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    phone: "",
    profession: "",
    password: "",
    confirmPassword: ""
  })
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simuler une inscription
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden" style={{ backgroundColor: '#001A3B' }}>
      {/* 3D Marquee Background */}
      <AgriculturalMarqueeBackground />

      {/* Main Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-32">
        <div 
          className="w-full max-w-2xl rounded-lg p-12 shadow-2xl backdrop-blur-sm"
          style={{ backgroundColor: 'rgba(0, 26, 59, 0.85)' }}
        >
          <h1 
            className="mb-2 text-3xl font-bold" 
            style={{ color: '#FFFFFF' }}
          >
            Inscrivez-vous
          </h1>
          <p className="mb-8 text-sm text-gray-400">
            Remplissez le formulaire pour accéder à nos formations
          </p>

          <div className="space-y-4">
            {/* Nom et Prénom */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Nom <span style={{ color: '#E0AB6C' }}>*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Votre nom"
                  value={formData.lastName}
                  onChange={(e) => handleChange('lastName', e.target.value)}
                  className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                  style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Prénom <span style={{ color: '#E0AB6C' }}>*</span>
                </label>
                <Input
                  type="text"
                  placeholder="Votre prénom"
                  value={formData.firstName}
                  onChange={(e) => handleChange('firstName', e.target.value)}
                  className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                  style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                E-mail <span style={{ color: '#E0AB6C' }}>*</span>
              </label>
              <Input
                type="email"
                placeholder="votre.email@exemple.com"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
              />
            </div>

            {/* Numéro de téléphone */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Numéro de téléphone <span style={{ color: '#E0AB6C' }}>*</span>
              </label>
              <Input
                type="tel"
                placeholder="+225 XX XX XX XX XX"
                value={formData.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
                className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
              />
            </div>

            {/* Profession */}
            <div>
              <label className="mb-2 block text-sm font-medium text-white">
                Profession / Domaine d'activité <span style={{ color: '#E0AB6C' }}>*</span>
              </label>
              <Input
                type="text"
                placeholder="Ex: Agriculteur, Agronome, Étudiant..."
                value={formData.profession}
                onChange={(e) => handleChange('profession', e.target.value)}
                className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
              />
            </div>

            {/* Mot de passe */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Mot de passe <span style={{ color: '#E0AB6C' }}>*</span>
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                  style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-white">
                  Confirmer le mot de passe <span style={{ color: '#E0AB6C' }}>*</span>
                </label>
                <Input
                  type="password"
                  placeholder="••••••••"
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  className="w-full border-0 bg-white/10 px-4 py-6 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-white/50"
                  style={{ backgroundColor: 'rgba(224, 171, 108, 0.1)' }}
                />
              </div>
            </div>

            {/* Accept Terms */}
            <div className="flex items-start space-x-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-500"
                style={{ accentColor: '#E0AB6C' }}
              />
              <label htmlFor="terms" className="text-sm text-white">
                J'accepte les{" "}
                <a 
                  href="#" 
                  className="transition-colors hover:underline"
                  style={{ color: '#E0AB6C' }}
                >
                  conditions d'utilisation
                </a>
                {" "}et la{" "}
                <a 
                  href="#" 
                  className="transition-colors hover:underline"
                  style={{ color: '#E0AB6C' }}
                >
                  politique de confidentialité
                </a>
              </label>
            </div>

            {/* Register Button */}
            <Button
              onClick={handleSubmit}
              disabled={isLoading || !acceptTerms}
              className="w-full py-6 font-semibold text-white transition-all hover:opacity-90 disabled:opacity-50"
              style={{ backgroundColor: '#E0AB6C' }}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Inscription en cours...
                </>
              ) : (
                <>
                  S'inscrire
                  <ChevronRight className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>

            {/* Login Link */}
            <div className="pt-4 text-center text-sm text-gray-400">
              Vous avez déjà un compte ?{" "}
              <Link 
                href="/login" 
                className="font-semibold transition-colors hover:underline"
                style={{ color: '#E0AB6C' }}
              >
                Connectez-vous
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
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}