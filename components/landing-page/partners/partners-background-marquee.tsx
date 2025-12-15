/* eslint-disable @next/next/no-img-element */
"use client"

import { Marquee } from "@/components/magicui/marquee"

const partners = [
  { name: "edX", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/EdX_newer_logo.svg/langfr-330px-EdX_newer_logo.svg.png" },
  { name: "Coursera", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Coursera.svg/langfr-300px-Coursera.svg.png" },
  { name: "Udemy", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/320px-Udemy_logo.svg.png" },
  { name: "Khan Academy", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Khan_Academy_logo_%282018%29.svg/langfr-500px-Khan_Academy_logo_%282018%29.svg.png" },
  { name: "UNESCO", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Logo_UNESCO_2021.svg/langfr-330px-Logo_UNESCO_2021.svg.png" },
  { name: "FAO", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/FAO_logo.svg/langfr-300px-FAO_logo.svg.png" },
]

function LogoBg({ image, name }: any) {
  return (
    <div className="w-44 h-28 flex items-center justify-center">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain opacity-65 grayscale"
      />
    </div>
  )
}

export function PartnersBackgroundMarquee() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Overlay pour lisibilité */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-white/40 z-10" />

      {/* Zone oblique SURDIMENSIONNÉE */}
      <div
        className="
          absolute inset-[-40%]
          z-0
          flex flex-col gap-14
          rotate-[-12deg]
        "
      >
        {/* On répète autant de lignes que nécessaire */}
        {[...Array(5)].map((_, index) => (
          <Marquee
            key={index}
            reverse={index % 2 === 1}
            className="[--duration:28s]"
          >
            {partners.map((p, i) => (
              <LogoBg key={i} {...p} />
            ))}
          </Marquee>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> 
    </div>
  )
}
