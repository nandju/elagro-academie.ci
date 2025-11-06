"use client"

import Image from "next/image"

type Card = {
  title: string
  price: string
  image: string
  badge?: string
}

const cards: Card[] = [
  { title: "Techniques d'élevage de volaille", price: "$39.00", image: "/assets/images/illustrations/page-accueil/volaille.png", badge: "FEATURED" },
  { title: "Gestion de ferme durable", price: "$45.00", image: "/assets/images/illustrations/page-accueil/entreprise.png" },
  { title: "Nutrition animale pratique", price: "$38.00", image: "/assets/images/illustrations/page-accueil/ruminant.png" },
  { title: "Hydroponie et fourrages verts", price: "$49.00", image: "/assets/images/illustrations/page-accueil/culture.png" },
  { title: "Élevage de porcs", price: "$49.00", image: "/assets/images/illustrations/page-accueil/porc.png" },
]

export default function StudentsAreViewing() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl md:text-2xl font-semibold text-[#001A3B]">Les Plus Consultés</h2>
          <div className="hidden md:flex items-center gap-4 text-sm text-[#001A3B]">
            <button className="underline hover:text-[#E0AB6C] transition-colors">Tous</button>
            <button className="hover:text-[#E0AB6C] transition-colors">Tendances</button>
            <button className="hover:text-[#E0AB6C] transition-colors">Populaire</button>
            <button className="hover:text-[#E0AB6C] transition-colors">En vedette</button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <article key={idx} className="group overflow-hidden rounded-xl border border-[#E0AB6C]/30 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 w-full bg-[#001A3B]/5">
                {card.badge && (
                  <span className="absolute left-3 top-3 z-10 rounded bg-[#E0AB6C] px-2 py-0.5 text-xs font-semibold text-[#001A3B]">
                    {card.badge}
                  </span>
                )}
                <Image src={card.image} alt={card.title} fill sizes="(max-width:768px)100vw,25vw" className="object-contain p-4" />
              </div>
              <div className="p-4">
                <h3 className="line-clamp-2 text-sm font-semibold text-[#001A3B] group-hover:text-[#E0AB6C]">{card.title}</h3>
                <div className="mt-3 text-[#001A3B]">
                  <span className="font-bold">{card.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}


