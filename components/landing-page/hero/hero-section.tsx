"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"
import { Marquee3D } from "./marquee3d"
import { AgriculturalMarqueeBackground } from "./agricultural-marquee-background"

export function HeroSection() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [email, setEmail] = useState("")

  const translations = {
    fr: {
      headline: "Formation et conseil en agriculture et élevage",
      subheadline: "Illimité, et bien plus",
      description:
        "Prêt à transformer votre pratique agricole ? Saisissez votre adresse e-mail pour commencer votre formation ou réactiver votre compte.",
      emailPlaceholder: "Adresse e-mail",
      cta: "Commencer",
      pricing: "Formations à partir de 29,99 $US. Annulable à tout moment.",
    },
    en: {
      headline: "Training and consulting in agriculture and livestock",
      subheadline: "Unlimited, and much more",
      description:
        "Ready to transform your agricultural practice? Enter your email address to start your training or reactivate your account.",
      emailPlaceholder: "Email address",
      cta: "Get Started",
      pricing: "Training from $29.99 USD. Cancel anytime.",
    },
  }

  const t = translations[language]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background">
      {/* 3D Marquee Background */}
      <AgriculturalMarqueeBackground />
      {/* <Marquee3D /> */}
      

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-32 text-center">
        <div className="max-w-4xl space-y-8">
          <h1 className="text-5xl font-bold leading-tight text-foreground md:text-6xl lg:text-7xl text-balance">
            {t.headline} <span className="block text-primary">{t.subheadline}</span>
          </h1>

          <p className="text-xl text-muted-foreground md:text-2xl text-pretty">{t.pricing}</p>

          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-base text-muted-foreground md:text-lg">{t.description}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-background/80 backdrop-blur-sm border-muted-foreground/30 text-foreground placeholder:text-muted-foreground text-base sm:min-w-[320px]"
              />
              <Button
                size="lg"
                className="h-14 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 gap-2 group"
              >
                {t.cta}
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
