"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

type Testimonial = {
  title: string
  quote: string
  author: string
  role: string
  image: string
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
      image: "JK"
    },
    {
      title: "Formations Complètes",
      quote:
        "Elagro Academy mérite 5 étoiles pour la qualité des formations, la flexibilité et le service de support excellent !",
      author: "Marie Diallo",
      role: "Agricultrice, Dakar",
      image: "MD"
    },
    {
      title: "Support Client",
      quote: "Très bon support, rapide et efficace pendant la semaine. Ils savent exactement ce dont vous avez besoin.",
      author: "Amadou Traoré",
      role: "Conseiller Agricole, Bamako",
      image: "AT"
    },
    {
      title: "Expérience Remarquable",
      quote:
        "La plateforme est intuitive et facile à utiliser. J'ai trouvé exactement ce que je cherchais en quelques minutes !",
      author: "Fatou Sow",
      role: "Étudiante, Ouagadougou",
      image: "FS"
    },
    {
      title: "Meilleur Investissement",
      quote:
        "Ça vaut chaque centime ! Les cours sont complets et les formateurs sont des professionnels de haut niveau.",
      author: "Ibrahim Ba",
      role: "Éleveur, Niamey",
      image: "IB"
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
    <section className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#001A3B] mb-4">
            Ce Que Disent Nos Apprenants
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Solution complète pour la formation et le conseil en élevage et agriculture. Nos apprenants apprécient Elagro Academy pour la qualité de nos formations et l'expertise de nos instructeurs.
          </p>
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
                  className="flex-shrink-0 px-2"
                  style={{ 
                    width: `${100 / visibleItems}%`
                  }}
                >
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-4 mt-8 md:mt-10">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-[#001A3B] text-white flex items-center justify-center hover:bg-[#001A3B]/90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Pagination dots */}
            <div className="flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(Math.min(index, maxIndex))}
                  className={`transition-all rounded-full ${
                    index === currentIndex 
                      ? 'bg-[#001A3B] w-8 h-2' 
                      : 'bg-gray-300 w-2 h-2 hover:bg-[#E0AB6C]'
                  }`}
                  aria-label={`Aller au témoignage ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-[#001A3B] text-white flex items-center justify-center hover:bg-[#001A3B]/90 transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
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

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="bg-white border border-[#001A3B]/10 rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all h-full flex flex-col">
      {/* Quote Icon */}
      <div className="mb-4">
        <div className="w-12 h-12 rounded-full bg-[#001A3B]/5 flex items-center justify-center mb-4">
          <Quote className="w-6 h-6 text-[#001A3B]" />
        </div>
        <h3 className="text-lg md:text-xl font-bold text-[#001A3B] mb-2">
          {testimonial.title}
        </h3>
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <svg key={index} className="w-4 h-4 fill-[#E0AB6C]" viewBox="0 0 20 20">
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
            </svg>
          ))}
        </div>
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 text-base md:text-lg mb-6 leading-relaxed flex-grow">
        "{testimonial.quote}"
      </p>

      {/* Author Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-[#001A3B]/10">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#001A3B] to-[#001A3B]/80 flex items-center justify-center text-white font-bold text-base flex-shrink-0 shadow-md">
          {testimonial.image}
        </div>
        <div>
          <p className="font-semibold text-base text-[#001A3B]">{testimonial.author}</p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </div>
  )
}