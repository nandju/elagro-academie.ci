/* eslint-disable @next/next/no-img-element */
import { cn } from "@/lib/utils"
import { Marquee } from "@/components/magicui/marquee"

const logos = [
  "/assets/images/backgrounds/background_1.png",
  "/assets/images/backgrounds/background_2.png",
  "/assets/images/backgrounds/background_3.png",
  "/assets/images/backgrounds/background_4.png",
]



const LogoCard = ({ img }: { img: string }) => {
  return (
    <div className="p-4 flex items-center justify-center">
      <img
        src={img}
        alt="photo terrain"
        className="
          h-72 
          w-auto 
          rounded-xl 
          object-cover 
          shadow-md 
          opacity-90 
          hover:opacity-100 
          transition
        "
      />
    </div>
  )
}



export function MarqueeDemoVertical() {
  const firstRow = logos.slice(0, Math.ceil(logos.length / 2))
  const secondRow = logos.slice(Math.ceil(logos.length / 2))

  return (
    <div className="relative flex h-[800px] w-full items-center justify-center overflow-hidden">
      <Marquee pauseOnHover vertical className="[--duration:20s]">
        {firstRow.map((img, i) => (
          <LogoCard key={i} img={img} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
        {secondRow.map((img, i) => (
          <LogoCard key={i} img={img} />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div> 
    </div>
  )
}