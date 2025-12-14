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

const firstRow = partners.slice(0, Math.ceil(partners.length / 2))
const secondRow = partners.slice(Math.ceil(partners.length / 2))

function LogoBg({ image, name }: any) {
  return (
    <div className="w-40 h-24 flex items-center justify-center">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain opacity-40 grayscale"
      />
    </div>
  )
}

export function PartnersBackgroundMarquee() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">

      {/* Overlay blur */}
      <div className="absolute inset-0 backdrop-blur-sm bg-white/60 z-10" />

      {/* Marquee layer */}
      <div className="relative z-0 flex flex-col gap-10 py-20">

        <Marquee className="[--duration:25s]">
          {firstRow.map((p, i) => (
            <LogoBg key={i} {...p} />
          ))}
        </Marquee>

        <Marquee reverse className="[--duration:30s]">
          {secondRow.map((p, i) => (
            <LogoBg key={i} {...p} />
          ))}
        </Marquee>

      </div>
    </div>
  )
}
