/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const logos = [
  "/assets/images/backgrounds/background_1.png",
  "/assets/images/backgrounds/background_2.png",
  "/assets/images/backgrounds/background_3.png",
  "/assets/images/backgrounds/background_4.png",
]

const firstRow = logos.slice(0, Math.ceil(logos.length / 2))
const secondRow = logos.slice(Math.ceil(logos.length / 2))

const LogoCard = ({ img }: { img: string }) => {
  return (
    <div
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <img
        src={img}
        alt="image"
        className="w-full h-64 object-cover rounded-lg"
      />
    </div>
  )
}

export function MarqueeDemoHorizontale() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden py-10">
      
      {/* Ligne qui défile de gauche vers la droite */}
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((img, i) => (
          <LogoCard key={i} img={img} />
        ))}
      </Marquee>

      {/* Ligne qui défile de droite vers la gauche */}
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((img, i) => (
          <LogoCard key={i} img={img} />
        ))}
      </Marquee>

      {/* Dégradés gauche/droite */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  )
}
