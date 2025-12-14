"use client"

import { useState } from "react"
import { Star, Clock, BookOpen, ChevronLeft, ChevronRight } from "lucide-react"

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

const allCards: Card[] = [
  {
    title: "Techniques d'élevage de volaille",
    price: "$39.00",
    rating: 5,
    duration: "12h 30min",
    lessons: 8,
    instructor: "Dr. Jean Dupont",
    description:
      "Maîtrisez les techniques modernes d'élevage de volaille. Apprenez la nutrition, la santé animale et les meilleures pratiques de gestion.",
    image: "/assets/images/illustrations/page-accueil/volaille.png",
    badge: "FEATURED",
  },
  {
    title: "Gestion de ferme durable",
    price: "$45.00",
    rating: 5,
    duration: "15h 20min",
    lessons: 12,
    instructor: "Marie Rousseau",
    description:
      "Développez une ferme durable et rentable. Découvrez les techniques écologiques et la gestion efficace des ressources.",
    image: "/assets/images/illustrations/page-accueil/entreprise.png",
  },
  {
    title: "Nutrition animale pratique",
    price: "$38.00",
    rating: 5,
    duration: "10h 15min",
    lessons: 10,
    instructor: "Prof. André Moreau",
    description:
      "Optimisez la nutrition de vos animaux pour améliorer leur santé et productivité. Formules pratiques et approches modernes.",
    image: "/assets/images/illustrations/page-accueil/ruminant.png",
  },
  {
    title: "Hydroponie et fourrages verts",
    price: "$49.00",
    rating: 5,
    duration: "14h 45min",
    lessons: 11,
    instructor: "Sophie Martin",
    description:
      "Cultivez des fourrages verts efficacement avec la technologie hydroponique. Maximisez vos rendements et réduisez les coûts.",
    image: "/assets/images/illustrations/page-accueil/culture.png",
  },
  {
    title: "Élevage de porcs",
    price: "$49.00",
    rating: 5,
    duration: "16h 30min",
    lessons: 13,
    instructor: "Pierre Leblanc",
    description:
      "Gérez un élevage de porcs rentable et éthique. Santé animale, alimentation optimale et bien-être des animaux.",
    image: "/assets/images/illustrations/page-accueil/porc.png",
  },

  /* ----------------------  
      🔥 Ajout des 4 nouvelles
     ---------------------- */

  {
    title: "ELAGRO Marché Bio",
    price: "$35.00",
    rating: 5,
    duration: "9h 10min",
    lessons: 7,
    instructor: "Awa Konan",
    description:
      "Découvrez les principes du bio, la transformation, la certification et la mise en marché de produits agricoles écologiques.",
    image: "/assets/images/illustrations/page-accueil/marche-bio.png",
  },
  {
    title: "ELAGRO Poisson",
    price: "$42.00",
    rating: 5,
    duration: "11h 50min",
    lessons: 9,
    instructor: "Dr. Hassan Diabaté",
    description:
      "Apprenez l’aquaculture moderne : bassins, alimentation, reproduction et techniques pour une pisciculture rentable.",
    image: "/assets/images/illustrations/page-accueil/poisson.png",
  },
  {
    title: "ELAGRO Lapin",
    price: "$29.00",
    rating: 5,
    duration: "8h 25min",
    lessons: 6,
    instructor: "Fatou Coulibaly",
    description:
      "Maîtrisez l’élevage du lapin : reproduction, alimentation, soins et gestion efficace pour augmenter vos rendements.",
    image: "/assets/images/illustrations/page-accueil/lapin.png",
  },
  {
    title: "ELAGRO Vente",
    price: "$32.00",
    rating: 5,
    duration: "10h 40min",
    lessons: 8,
    instructor: "Serge Aka",
    description:
      "Boostez la commercialisation de vos produits agricoles. Techniques de vente, réseaux, négociation et marketing rural.",
    image: "/assets/images/illustrations/page-accueil/vente.png",
  },
];


export default function LatestCoursesCarousel() {
  const [currentPage, setCurrentPage] = useState(0)

  const cardsPerPage = 3
  const totalPages = Math.ceil(allCards.length / cardsPerPage)
  const currentCards = allCards.slice(currentPage * cardsPerPage, (currentPage + 1) * cardsPerPage)

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1))
  }

  const goToPage = (page: number) => {
    setCurrentPage(page)
  }

  return (
    <section className="w-full bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-10 md:mb-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001A3B]">Derniers Cours</h2>
          <button className="text-[#001A3B] hover:text-[#E0AB6C] font-semibold text-sm md:text-base transition-colors border border-[#001A3B] hover:border-[#E0AB6C] px-4 md:px-6 py-2 md:py-3 rounded-lg">
            Voir tous les cours →
          </button>
        </div>

        {/* Cards Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {currentCards.map((card, idx) => (
              <article 
                key={idx} 
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E0AB6C]/30 hover:border-[#E0AB6C] shadow-md hover:shadow-xl transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-48 w-full bg-gradient-to-br from-[#001A3B]/5 to-[#E0AB6C]/5 overflow-hidden">
                  {card.badge && (
                    <span className="absolute left-4 top-4 z-10 rounded-lg bg-[#E0AB6C] px-3 py-1.5 text-xs font-semibold text-[#001A3B]">
                      {card.badge}
                    </span>
                  )}
                  <div className="w-full h-full flex items-center justify-center p-6">
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
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
                      <span className="text-xs text-gray-500 ml-2">Noté 5 étoiles</span>
                    </div>
                    <span className="text-lg font-bold text-[#E0AB6C]">{card.price}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-[#001A3B] mb-4 line-clamp-2 group-hover:text-[#E0AB6C] transition-colors">
                    {card.title}
                  </h3>

                  {/* Instructor */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E0AB6C] to-[#C8934A] flex items-center justify-center text-[#001A3B] font-semibold text-sm">
                      {card.instructor.charAt(0)}
                    </div>
                    <span className="text-sm text-gray-700">{card.instructor}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 mb-4 flex-1 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-xs text-gray-600 mb-6 pt-4 border-t border-[#E0AB6C]/20">
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
                  <button className="w-full bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn">
                    Voir le cours
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>

                </div>
              </article>
            ))}
          </div>

        </div>

        {/* Carousel Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8 md:mt-10">
          {[...Array(totalPages)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToPage(idx)}
              className={`transition-all duration-300 rounded-full ${
                idx === currentPage
                  ? "bg-[#E0AB6C] w-8 h-2.5"
                  : "bg-[#E0AB6C]/30 hover:bg-[#E0AB6C]/50 w-2.5 h-2.5"
              }`}
              aria-label={`Go to page ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}