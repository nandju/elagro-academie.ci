"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

type Testimonial = {
  title: string
  quote: string
  author: string
  role: string
  image: string
  rating: number
  tags: string[]
}

export default function TestimonialsLandingPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const carouselRef = useRef<HTMLDivElement>(null)
  
  const testimonials: Testimonial[] = [
    {
      title: "Excellente qualité !",
      quote:
        "Je voulais laisser un avis car leur support m'a aidé en moins d'une journée, c'est exceptionnel ! Merci et 5 étoiles !",
      author: "Jean Kouassi",
      role: "Éleveur, Abidjan",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      tags: ["Élevage", "Support", "Qualité"]
    },
    {
      title: "Formations Complètes",
      quote:
        "Elagro Academy mérite 5 étoiles pour la qualité des formations, la flexibilité et le service de support excellent !",
      author: "Marie Diallo",
      role: "Agricultrice, Dakar",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      tags: ["Agriculture", "Formation", "Flexibilité"]
    },
    {
      title: "Support Client",
      quote: "Très bon support, rapide et efficace pendant la semaine. Ils savent exactement ce dont vous avez besoin.",
      author: "Amadou Traoré",
      role: "Conseiller Agricole, Bamako",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      tags: ["Conseil", "Support", "Efficacité"]
    },
    {
      title: "Expérience Remarquable",
      quote:
        "La plateforme est intuitive et facile à utiliser. J'ai trouvé exactement ce que je cherchais en quelques minutes !",
      author: "Fatou Sow",
      role: "Étudiante, Ouagadougou",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      tags: ["Plateforme", "Intuitif", "Facilité"]
    },
    {
      title: "Meilleur Investissement",
      quote:
        "Ça vaut chaque centime ! Les cours sont complets et les formateurs sont des professionnels de haut niveau.",
      author: "Ibrahim Ba",
      role: "Éleveur, Niamey",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5.0,
      tags: ["Investissement", "Professionnels", "Qualité"]
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = testimonials.length - 1
        return prev >= maxIndex ? 0 : prev + 1
      })
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => {
      if (prev >= maxIndex) return 0
      return prev + 1
    })
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) return maxIndex
      return prev - 1
    })
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Calculate visible items based on screen size
  const getVisibleItems = () => {
    if (typeof window === 'undefined') return 3
    if (window.innerWidth >= 1024) return 3 // lg: 3 items
    if (window.innerWidth >= 640) return 2 // sm: 2 items
    return 1 // mobile: 1 item
  }

  const [visibleItems, setVisibleItems] = useState(3)

  useEffect(() => {
    const updateVisibleItems = () => {
      setVisibleItems(getVisibleItems())
      // Reset index if needed when resizing
      setCurrentIndex(0)
    }
    updateVisibleItems()
    window.addEventListener('resize', updateVisibleItems)
    return () => window.removeEventListener('resize', updateVisibleItems)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - visibleItems)
  
  // Clamp currentIndex to valid range
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [currentIndex, maxIndex])

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#001A3B]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          {/* Label */}
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-[#001A3B] border border-white/20 text-white text-xs md:text-sm font-medium uppercase tracking-wider">
              Nos Apprenants
            </span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nos Histoires de Réussite
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Des leaders partagent comment ils ont transformé leurs compétences et boosté leur carrière avec nos solutions de formation en élevage et agriculture.
          </p>
        </div>

        {/* User Avatars Row */}
        <div className="flex justify-center gap-3 md:gap-4 mb-12 overflow-x-auto pb-4">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-white/30 overflow-hidden cursor-pointer hover:border-[#E0AB6C] transition-all"
              onClick={() => goToSlide(i)}
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#E0AB6C] to-[#E0AB6C]/80 flex items-center justify-center text-white font-bold text-sm">${testimonial.author.split(' ').map(n => n[0]).join('')}</div>`
                  }
                }}
              />
            </div>
          ))}
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative px-4 sm:px-0">
          {/* Carousel Wrapper */}
          <div 
            ref={carouselRef}
            className="overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`
              }}
            >
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 px-2 md:px-3"
                  style={{ 
                    width: `${100 / visibleItems}%`
                  }}
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={i === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#001A3B] border border-white/20 text-white flex items-center justify-center hover:bg-[#001A3B]/80 hover:border-[#E0AB6C]/50 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#001A3B] border border-white/20 text-white flex items-center justify-center hover:bg-[#001A3B]/80 hover:border-[#E0AB6C]/50 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, isActive = false }: { testimonial: Testimonial, isActive?: boolean }) {
  return (
    <div className={`bg-[#001A3B] border rounded-2xl p-6 md:p-8 shadow-lg transition-all h-full flex flex-col relative ${
      isActive 
        ? 'border-[#E0AB6C]/50 shadow-[#E0AB6C]/20' 
        : 'border-white/10'
    }`}>
      {/* Top Section */}
      <div className="flex items-start justify-between mb-4">
        {/* Left - Business Types Label */}
        <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
          <span>★</span>
          <span>Types de Formation</span>
        </div>
        
        {/* Right - Avatar */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border-2 border-white/20 overflow-hidden flex-shrink-0">
          <img
            src={testimonial.image}
            alt={testimonial.author}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              if (target.parentElement) {
                target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#E0AB6C] to-[#E0AB6C]/80 flex items-center justify-center text-white font-bold text-sm md:text-base">${testimonial.author.split(' ').map(n => n[0]).join('')}</div>`
              }
            }}
          />
        </div>
      </div>

      {/* Name and Role */}
      <div className="mb-3">
        <h3 className="text-lg md:text-xl font-bold text-white mb-1">
          {testimonial.author}
        </h3>
        <p className="text-sm md:text-base text-gray-400">
          {testimonial.role}
        </p>
      </div>

      {/* Star Rating */}
      <div className="flex items-center gap-2 mb-4">
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className="w-4 h-4 md:w-5 md:h-5 fill-[#E0AB6C] text-[#E0AB6C]"
            />
          ))}
        </div>
        <span className="text-[#E0AB6C] font-semibold text-sm md:text-base">
          {testimonial.rating.toFixed(1)}
        </span>
      </div>

      {/* Quote Text */}
      <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
        {testimonial.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 rounded-full bg-[#001A3B] border border-white/10 text-white text-xs md:text-sm font-medium"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}