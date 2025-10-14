"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react"
import { AgriculturalMarqueeBackground } from "./agricultural-marquee-background"
import emailjs from '@emailjs/browser'
import { useTranslation } from "@/lib/translation-context"

// Composant Toast (tu l'as déjà — on réutilise)
interface ToastProps {
  type: "success" | "error"
  message: string
  onClose: () => void
}

// Remplacer l'ancienne fonction Toast par celle-ci
function Toast({ type, message, onClose }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => onClose(), 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  const isSuccess = type === "success"

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
      <div
        className="flex items-start gap-4 rounded-lg p-4 min-w-[320px] max-w-md shadow-xl"
        role="status"
        aria-live="polite"
        style={{ backgroundColor: "#001A3B", border: "1px solid rgba(224,171,108,0.25)" }}
      >
        {/* Barre d'accent verticale */}
        <span
          className="h-full w-1 rounded-full"
          style={{ backgroundColor: "#E0AB6C" }}
        />

        {/* Icône */}
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="h-6 w-6" style={{ color: "#E0AB6C" }} />
          ) : (
            <AlertCircle className="h-6 w-6" style={{ color: "#E0AB6C" }} />
          )}
        </div>

        {/* Message */}
        <p className="flex-1 text-sm font-medium leading-relaxed" style={{ color: "#FFFFFF" }}>
          {message}
        </p>

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="flex-shrink-0 rounded-md p-1 transition-colors hover:bg-white/10"
          aria-label="Fermer la notification"
        >
          <X className="h-4 w-4" style={{ color: "#FFFFFF" }} />
        </button>
      </div>
    </div>
  )
}


/* ---------------------------
   HERO SECTION (avec toasts)
   --------------------------- */
type ToastItem = { id: number; type: "success" | "error"; message: string }

export function HeroSection() {
  const { language, t } = useTranslation()
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  // file de toasts
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  // ajoute un toast
  const addToast = (type: "success" | "error", message: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000)
    setToasts((prev) => [...prev, { id, type, message }])
  }

  // supprime un toast
  const removeToast = (id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  const handleSubmit = async () => {
    // validation front
    if (!validateEmail(email)) {
      // affiche toast d'erreur
      addToast("error", t.invalidEmail)
      setStatus("error")
      return
    }

    setIsLoading(true)
    setStatus("idle")

    // (optionnel) toast "envoi"
    addToast("success", t.sending) // notification temporaire — on la retire plus bas

    try {
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

      // supprime le toast "envoi" précédent (optionnel : on garde simple et ajoute success)
      addToast("success", t.success)
      setStatus("success")
      setEmail("")
    } catch (error) {
      console.error("Erreur EmailJS:", error)
      addToast("error", t.error)
      setStatus("error")
    } finally {
      setIsLoading(false)
      // on nettoie les toasts "sending" après 2s pour éviter doublons
      setTimeout(() => {
        setToasts((prev) => prev.filter((toast) => toast.message !== t.sending))
      }, 1500)
      // remet le status à idle après affichage
      setTimeout(() => setStatus("idle"), 5000)
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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />

      {/* Render toasts (on les superpose en bas à droite) */}
      {toasts.map((tItem) => (
        <Toast
          key={tItem.id}
          type={tItem.type}
          message={tItem.message}
          onClose={() => removeToast(tItem.id)}
        />
      ))}
    </section>
  )
}
