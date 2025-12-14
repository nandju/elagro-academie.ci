"use client"

import { Star, Clock, BookOpen } from "lucide-react"

type Card = {
  title: string
  price: string
  rating: number
  duration: string
  lessons: number
  instructor: string
  description: string
  image: string
  badge?: string
}

const cards: Card[] = [
  {
    title: "Techniques d'élevage de volaille",
    price: "$39.00",
    rating: 5,
    duration: "12h 30min",
    lessons: 8,
    instructor: "Dr. Jean Dupont",
    description: "Maîtrisez les techniques modernes d'élevage de volaille. Apprenez la nutrition, la santé animale et les meilleures pratiques de gestion.",
    image: "/assets/images/illustrations/page-accueil/volaille.png",
    badge: "FEATURED"
  },
  {
    title: "Gestion de ferme durable",
    price: "$45.00",
    rating: 5,
    duration: "15h 20min",
    lessons: 12,
    instructor: "Marie Rousseau",
    description: "Développez une ferme durable et rentable. Découvrez les techniques écologiques et la gestion efficace des ressources.",
    image: "/assets/images/illustrations/page-accueil/entreprise.png"
  },
  {
    title: "Nutrition animale pratique",
    price: "$38.00",
    rating: 5,
    duration: "10h 15min",
    lessons: 10,
    instructor: "Prof. André Moreau",
    description: "Optimisez la nutrition de vos animaux pour améliorer leur santé et productivité. Formules pratiques et approches modernes.",
    image: "/assets/images/illustrations/page-accueil/ruminant.png"
  }
]

export default function FeaturedCourses() {
  return (
    <section className="w-full bg-[#001A3B] py-12 md:py-20 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Les Cours Populaires</h2>
          <div className="h-1 w-20 bg-[#E0AB6C] rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, idx) => (
            <article 
              key={idx} 
              className="group flex flex-col bg-[#001A3B] rounded-2xl overflow-hidden border border-[#333333] hover:border-[#E0AB6C]/50 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-48 w-full bg-gradient-to-br from-[#E0AB6C] to-[#001A3B] overflow-hidden">
                {card.badge && (
                  <span className="absolute left-4 top-4 z-10 rounded-lg bg-[#333333] px-3 py-1.5 text-xs font-semibold text-white border border-[#E0AB6C]/50">
                    {card.badge}
                  </span>
                )}
                <div className="w-full h-full flex items-center justify-center p-6">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                
                {/* Rating & Price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(card.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#E0AB6C] text-[#E0AB6C]" />
                    ))}
                    <span className="text-xs text-gray-400 ml-2">Noté 5 étoiles</span>
                  </div>
                  <span className="text-lg font-bold text-[#E0AB6C]">{card.price}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-4 line-clamp-2 group-hover:text-[#E0AB6C] transition-colors">
                  {card.title}
                </h3>

                {/* Instructor */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0AB6C] to-[#C8934A] flex items-center justify-center text-white font-semibold text-sm">
                    {card.instructor.charAt(0)}
                  </div>
                  <span className="text-sm text-gray-300">{card.instructor}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-400 mb-4 flex-1 leading-relaxed">
                  {card.description}
                </p>

                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-6 pt-4 border-t border-[#333333]">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-[#E0AB6C]" />
                    <span>{card.duration}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-[#E0AB6C]" />
                    <span>{card.lessons} Leçons</span>
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base shadow-lg hover:shadow-xl transition-all">
                  voir le parcours
                  <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </button>

              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}