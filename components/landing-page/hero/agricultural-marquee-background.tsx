/* eslint-disable @next/next/no-img-element */
"use client"

import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee" 

const agriculturalImages = [
  { id: 1, url: "/assets/images/backgrounds/background1.png", alt: "African farmer in field" },
  { id: 2, url: "/assets/images/backgrounds/background2.png", alt: "Livestock cattle grazing" },
  { id: 3, url: "/assets/images/backgrounds/background3.png", alt: "Agricultural training" },
  { id: 4, url: "/assets/images/backgrounds/background3.png", alt: "Modern farming technology" },
  { id: 5, url: "/assets/images/backgrounds/background2.png", alt: "Woman farmer harvesting" },
  { id: 6, url: "/assets/images/backgrounds/background1.png", alt: "Agricultural consultation" },
  { id: 7, url: "/assets/images/backgrounds/background2.png", alt: "Young farmers learning" },
  { id: 8, url: "/assets/images/backgrounds/background3.png", alt: "Smart agriculture tools" },
]

const ImageCard = ({ url, alt }: { url: string; alt: string }) => (
  <div
    className={cn(
      "relative h-64 w-48 cursor-pointer overflow-hidden rounded-lg",
      "transition-transform hover:scale-105"
    )}
  >
    <img src={url || "/placeholder.svg"} alt={alt} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
  </div>
)

export function AgriculturalMarqueeBackground() {
  // On crée 8 colonnes (une pour chaque image, mais avec décalages)
  const columns = [
    agriculturalImages.slice(0, 2),
    agriculturalImages.slice(2, 4),
    agriculturalImages.slice(4, 6),
    agriculturalImages.slice(6, 8),
    agriculturalImages.slice(0, 2),
    agriculturalImages.slice(2, 4),
    agriculturalImages.slice(4, 6),
    agriculturalImages.slice(6, 8),
  ]

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden [perspective:1000px]">
      <div
        className="flex flex-row items-center gap-6"
        style={{
          transform:
            "translateX(-50px) translateY(0px) translateZ(-150px) rotateX(15deg) rotateY(-12deg) rotateZ(15deg)",
        }}
      >
        {columns.map((column, index) => (
          <Marquee
            key={index}
            pauseOnHover
            vertical
            reverse={index % 2 !== 0}
            className="[--duration:25s]"
          >
            {column.map((image) => (
              <ImageCard key={image.id + '-col-' + index} {...image} />
            ))}
          </Marquee>
        ))}
      </div>

      {/* Gradients pour lisser le bord */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
    </div>
  )
}
