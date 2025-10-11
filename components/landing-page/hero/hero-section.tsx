"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Loader2, CheckCircle2 } from "lucide-react"
import { AgriculturalMarqueeBackground } from "./agricultural-marquee-background"
import emailjs from '@emailjs/browser'

export function HeroSection() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const translations = {
    fr: {
      headline: "Formation et conseil en élevage",
      subheadline: "Apprenez, progressez, réussissez",
      description:
        "Rejoignez ELAGRO ACADEMY pour développer vos compétences en élevage et maîtriser les meilleures pratiques pour le bien-être et la productivité animale.",
      emailPlaceholder: "Adresse e-mail",
      cta: "Commencer",
      success: "Merci ! Nous vous contacterons bientôt.",
      error: "Une erreur s'est produite. Veuillez réessayer.",
      invalidEmail: "Veuillez entrer une adresse e-mail valide.",
    },
    en: {
      headline: "Livestock training and consulting",
      subheadline: "Learn, grow, succeed",
      description:
        "Join ELAGRO ACADEMY to enhance your livestock management skills and master best practices for animal welfare and productivity.",
      emailPlaceholder: "Email address",
      cta: "Get Started",
      success: "Thank you! We'll contact you soon.",
      error: "An error occurred. Please try again.",
      invalidEmail: "Please enter a valid email address.",
    },
  }

  const t = translations[language]

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      setStatus("error")
      return
    }

    setIsLoading(true)
    setStatus("idle")

    try {
      // Remplacez ces valeurs par vos propres identifiants EmailJS
      const SERVICE_ID = "service_ac94qct"
      const TEMPLATE_ID = "template_tyc260u"
      const PUBLIC_KEY = "LYaI0cg635rkUCBZN"

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
          language: language,
          from_name: "ELAGRO ACADEMY",
          message: `Nouvelle inscription depuis le site web (langue: ${language})`,
        },
        PUBLIC_KEY
      )

      setStatus("success")
      setEmail("")
      
      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error("Erreur EmailJS:", error)
      setStatus("error")
      
      setTimeout(() => setStatus("idle"), 5000)
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && email) {
      handleSubmit()
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 3D Marquee Background */}
      <AgriculturalMarqueeBackground />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-4xl font-extrabold leading-tight text-[#001A3B] md:text-5xl lg:text-6xl text-balance">
            {t.headline} <span className="block text-[#E0AB6C]">{t.subheadline}</span>
          </h1>

          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-base text-[#001A3B] md:text-lg font-bold">{t.description}</p>

            <div className="space-y-3">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Input
                  type="email"
                  placeholder={t.emailPlaceholder}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyPress={handleKeyPress}
                  disabled={isLoading}
                  className="h-14 bg-[#FFFFFF]/90 backdrop-blur-sm border-[#E0AB6C]/30 text-[#001A3B] placeholder:text-[#001A3B]/60 text-base sm:min-w-[320px] focus:border-[#E0AB6C] focus:ring-[#E0AB6C] disabled:opacity-50"
                />
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  disabled={isLoading || !email}
                  className="h-14 bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-8 gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      {language === "fr" ? "Envoi..." : "Sending..."}
                    </>
                  ) : (
                    <>
                      {t.cta}
                      <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </div>

              {/* Messages de statut */}
              {status === "success" && (
                <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
                  <CheckCircle2 className="h-5 w-5" />
                  <span>{t.success}</span>
                </div>
              )}
              
              {status === "error" && (
                <div className="flex items-center justify-center gap-2 text-red-600 font-medium">
                  <span>{validateEmail(email) ? t.error : t.invalidEmail}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}