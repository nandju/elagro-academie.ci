"use client"

import { PartnersBackgroundMarquee } from "./partners-background-marquee"

export default function PartnersStrip() {
  return (
    <section className="relative w-full h-[420px] md:h-[460px] bg-white overflow-hidden">

      {/* BACKGROUND LOGOS */}
      <PartnersBackgroundMarquee />

      {/* CONTENT */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#001A3B] mb-4">
          Des partenaires reconnus
        </h2>

        <p className="max-w-xl text-sm sm:text-base text-gray-600 mb-6 leading-relaxed">
          ELAGRO s’inspire des meilleures plateformes éducatives et institutions
          internationales pour offrir des formations agricoles modernes,
          pratiques et adaptées au terrain africain.
        </p>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#E0AB6C] text-[#001A3B] font-semibold px-6 py-3 rounded-lg shadow-md hover:shadow-lg hover:bg-[#E0AB6C]/90 transition"
        >
          Découvrir notre approche
          <span>→</span>
        </a>

      </div>
    </section>
  )
}
