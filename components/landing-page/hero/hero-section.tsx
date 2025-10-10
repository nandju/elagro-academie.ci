"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronRight } from "lucide-react"
import { AgriculturalMarqueeBackground } from "./agricultural-marquee-background"

export function HeroSection() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const [email, setEmail] = useState("")

const translations = {
  fr: {
    headline: "Formation et conseil en élevage",
    subheadline: "Apprenez, progressez, réussissez",
    description:
      "Rejoignez ELAGRO ACADEMY pour développer vos compétences en élevage et maîtriser les meilleures pratiques pour le bien-être et la productivité animale.",
    emailPlaceholder: "Adresse e-mail",
    cta: "Commencer",
  },
  en: {
    headline: "Livestock training and consulting",
    subheadline: "Learn, grow, succeed",
    description:
      "Join ELAGRO ACADEMY to enhance your livestock management skills and master best practices for animal welfare and productivity.",
    emailPlaceholder: "Email address",
    cta: "Get Started",
  },
}



  const t = translations[language]

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

          {/* <p className="text-xl text-[#001A3B]/80 md:text-2xl text-pretty">{t.pricing}</p> */}

          <div className="mx-auto max-w-2xl space-y-4">
            <p className="text-base text-[#001A3B] md:text-lg font-bold">{t.description}</p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Input
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-14 bg-[#FFFFFF]/90 backdrop-blur-sm border-[#E0AB6C]/30 text-[#001A3B] placeholder:text-[#001A3B]/60 text-base sm:min-w-[320px] focus:border-[#E0AB6C] focus:ring-[#E0AB6C]"
              />
              <Button
                size="lg"
                className="h-14 bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-8 gap-2 group shadow-lg hover:shadow-xl transition-all duration-300"
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