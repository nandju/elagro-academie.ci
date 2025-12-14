"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MarqueeDemoHorizontale } from "./marquee-horizontale"
import { MarqueeDemoVertical } from "./marquee-verticale"

export default function HeroLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 20, 50 50 T100 50' stroke='%23001A3B' fill='none'/%3E%3Cpath d='M0 70 Q25 40, 50 70 T100 70' stroke='%23001A3B' fill='none'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12 sm:py-16 lg:py-0">

          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center order-2 lg:order-1">

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#001A3B] leading-tight mb-4 sm:mb-6">
              Formation & Conseil en{" "}
              <span className="relative inline-block">
                <span className="text-[#E0AB6C]">Élevage</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-[#E0AB6C]/30 -z-10"></span>
              </span>
              <br className="hidden sm:block" />
              Agriculture{" "}
              <span className="text-[#001A3B]">Professionnels</span>
            </h1>

            {/* Sub Text */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 sm:mb-8 max-w-md leading-relaxed">
              Développez vos compétences en élevage et agriculture avec nos formations certifiées et conseils d'experts.
            </p>

            {/* CTA Button */}
            <div className="mb-8 sm:mb-10">
              <Button
                className="w-full sm:w-fit bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl transition-all"
              >
                Commencer maintenant →
              </Button>
            </div>

            <div className="flex items-center gap-3">

            {/* Avatars groupés */}
            <div className="flex -space-x-3">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                alt="Jean Kouassi"
              />
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                alt="Marie Diallo"
              />
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
                alt="Amadou Traoré"
              />
            </div>

            {/* Texte */}
            <div>
              <p className="text-sm sm:text-base font-semibold text-[#001A3B]">
                Plus de 5 000 élèves satisfaits
              </p>
            </div>
          </div>

            {/* Branding */}
            <div className="mt-8 sm:mt-12 flex items-center gap-2 opacity-50">
              <span className="text-sm sm:text-base font-bold text-gray-400">Elagro Academy</span>
              <div className="w-2 h-2 rounded-full bg-[#E0AB6C]"></div>
            </div>

          </div>

          {/* RIGHT SIDE — Visual Element */}
          <div className="relative flex items-center justify-center w-full h-full order-2 lg:order-1">
            
            {/* Mobile + Tablet → Horizontal */}
            <div className="block lg:hidden w-full h-full">
              <MarqueeDemoHorizontale />
            </div>

            {/* Desktop → Vertical */}
            <div className="hidden lg:block w-full h-full">
              <MarqueeDemoVertical />
            </div>

          </div>

        </div>
      </div>

    </section>
  )
}