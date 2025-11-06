"use client"

import { useState } from "react"
import { ChevronDown, Award, PlayCircle, Users, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HeroLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isLangOpen, setIsLangOpen] = useState(false)

  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q25 20, 50 50 T100 50' stroke='%23001A3B' fill='none'/%3E%3Cpath d='M0 70 Q25 40, 50 70 T100 70' stroke='%23001A3B' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">


        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-20 lg:py-0">
          {/* Left Content */}
          <div className="pt-12 lg:pt-12">
            

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#001A3B] leading-tight mb-6">
              Formation & Conseil en{" "}
              <span className="relative">
                <span className="text-[#E0AB6C]">Élevage</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E0AB6C]/30 -z-10"></span>
              </span>
              <br />
              et Agriculture{" "}
              <span className="text-[#001A3B]">Professionnels</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              Développez vos compétences en élevage et agriculture avec nos formations certifiées et conseils d'experts.
            </p>

            {/* CTA Button */}
            <Button className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-8 py-6 rounded-lg text-lg mb-12 shadow-lg hover:shadow-xl transition-all">
              Commencer maintenant
              <span className="ml-2">→</span>
            </Button>

            {/* Statistics */}
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#001A3B] mb-1">4.8+</div>
                <div className="text-sm text-gray-600">Note moyenne</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#001A3B] mb-1">20,000+</div>
                <div className="text-sm text-gray-600">Apprenants</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-[#001A3B] mb-1">30+</div>
                <div className="text-sm text-gray-600">Formations</div>
              </div>
            </div>

            {/* Logo - Bottom Left */}
            <div className="mt-16 flex items-center gap-2 opacity-50">
              <span className="text-lg font-bold text-gray-400">Elagro Academy</span>
              <div className="w-2 h-2 rounded-full bg-[#E0AB6C]"></div>
            </div>
          </div>

          {/* Right Panel - Hero Image with Feature Bubbles */}
          <div className="relative">
            <div className="relative">
              {/* Main Hero Image */}
              <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/images/backgrounds/background_1.png"
                  alt="Formation en élevage"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A3B]/20 to-transparent"></div>
              </div>

              {/* Feature Bubbles */}
              {/* Top Bubble - Reward */}
              <div className="absolute top-4 left-4 md:top-16 md:left-8 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 max-w-[180px] md:max-w-[200px]" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
                </div>
                <p className="text-xs md:text-sm font-medium text-[#001A3B]">Récompenses à chaque étape</p>
              </div>

              {/* Middle Bubble - Courses */}
              <div className="absolute top-1/2 left-2 md:left-4 -translate-y-1/2 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 max-w-[180px] md:max-w-[200px]" style={{ animation: 'float 3s ease-in-out infinite 1.5s' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                </div>
                <p className="text-xs md:text-sm font-medium text-[#001A3B]">Formations à la demande</p>
              </div>

              {/* Bottom Bubble - Experts */}
              <div className="absolute bottom-4 left-4 md:bottom-20 md:left-8 bg-white rounded-xl px-3 py-2 md:px-4 md:py-3 shadow-lg flex items-center gap-2 md:gap-3 max-w-[180px] md:max-w-[200px]" style={{ animation: 'float 3s ease-in-out infinite' }}>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                </div>
                <p className="text-xs md:text-sm font-medium text-[#001A3B]">Apprenez des experts</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
