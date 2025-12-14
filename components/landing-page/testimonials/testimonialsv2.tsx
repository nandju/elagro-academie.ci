"use client"
import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star, Heart } from "lucide-react"

type Testimonial = {
  title: string
  quote: string
  author: string
  role: string
  image: string
  rating: number
  tags: string[]
}

export default function TestimonialsLandingPagev2() {
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
        return (prev + 1) % testimonials.length
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-[#E0AB6C]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#001A3B]/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          
          {/* Heart Icon */}
          <div className="flex justify-center mb-4">
            <Heart className="w-10 h-10 md:w-12 md:h-12 text-[#E0AB6C] fill-[#E0AB6C]" />
          </div>

          {/* Label */}
          <div className="inline-flex items-center justify-center mb-4">
            <span className="px-4 py-1.5 rounded-full bg-[#E0AB6C]/10 border border-[#E0AB6C]/30 text-[#E0AB6C] text-xs md:text-sm font-bold uppercase tracking-widest">
              Nos Apprenants Heureux
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001A3B] mb-4 leading-tight">
            Ne prenez pas notre parole. <br className="hidden sm:block" />
            <span className="text-[#E0AB6C]">Prenez la leur !</span>
          </h2>
          
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Nos apprenants adorent nos cours, donc vous ne regretterez pas d'investir dans nos formations en élevage et agriculture.
          </p>
        </div>

        {/* Navigation Arrows - Top */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-12">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full bg-white border-2 border-[#001A3B] text-[#001A3B] flex items-center justify-center hover:bg-[#001A3B] hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full bg-white border-2 border-[#001A3B] text-[#001A3B] flex items-center justify-center hover:bg-[#001A3B] hover:text-white transition-all shadow-md hover:shadow-lg"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Testimonials Carousel Container */}
        <div className="relative">
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
                transform: `translateX(-${currentIndex * 100}%)`
              }}
            >
              {testimonials.map((testimonial, i) => (
                <div 
                  key={i} 
                  className="flex-shrink-0 w-full px-4 md:px-6"
                >
                  <TestimonialCard 
                    testimonial={testimonial} 
                    isActive={i === currentIndex}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Avatar Indicators */}
        <div className="flex justify-center gap-3 md:gap-4 mt-12 md:mt-14 overflow-x-auto pb-2 px-4">
          {testimonials.map((testimonial, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border-3 overflow-hidden transition-all ${
                i === currentIndex 
                  ? 'border-[#E0AB6C] shadow-lg shadow-[#E0AB6C]/30 scale-110' 
                  : 'border-[#001A3B]/20 hover:border-[#E0AB6C]/50'
              }`}
            >
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.style.display = 'none'
                  if (target.parentElement) {
                    target.parentElement.innerHTML = `<div class="w-full h-full bg-gradient-to-br from-[#E0AB6C] to-[#D99B4C] flex items-center justify-center text-white font-bold text-sm">${testimonial.author.split(' ').map(n => n[0]).join('')}</div>`
                  }
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, isActive = false }: { testimonial: Testimonial, isActive?: boolean }) {
  return (
    <div className={`bg-white rounded-3xl p-8 md:p-10 shadow-lg transition-all duration-300 border-2 ${
      isActive 
        ? 'border-[#E0AB6C] shadow-2xl shadow-[#E0AB6C]/20' 
        : 'border-[#001A3B]/10 hover:border-[#E0AB6C]/30'
    }`}>
      
      {/* Quotation Mark */}
      <div className="mb-6">
        <span className="text-5xl md:text-6xl text-[#E0AB6C]/20">"</span>
      </div>

      {/* Quote Text */}
      <p className="text-gray-700 text-lg md:text-xl mb-8 leading-relaxed font-light">
        {testimonial.quote}
      </p>

      {/* Bottom Section */}
        <div className="
        flex flex-col sm:flex-row 
        sm:items-center sm:justify-between
        pt-6 border-t-2 border-[#001A3B]/10
        gap-4 sm:gap-0
        ">

        {/* Left - Author Info */}
        <div className="flex items-center gap-4 sm:gap-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full border-2 border-[#E0AB6C] overflow-hidden flex-shrink-0">
            <img
                src={testimonial.image}
                alt={testimonial.author}
                className="w-full h-full object-cover"
                onError={(e) => {
                const target = e.target as HTMLImageElement
                target.style.display = 'none'
                if (target.parentElement) {
                    target.parentElement.innerHTML = `
                    <div class='w-full h-full bg-gradient-to-br from-[#E0AB6C] to-[#D99B4C]
                    flex items-center justify-center text-white font-bold text-base md:text-lg'>
                        ${testimonial.author.split(' ').map(n => n[0]).join('')}
                    </div>`
                }
                }}
            />
            </div>

            <div>
            <h4 className="font-bold text-[#001A3B] text-sm sm:text-base md:text-lg">
                {testimonial.author}
            </h4>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
                {testimonial.role}
            </p>
            </div>
        </div>

        {/* Right - Star Rating */}
        <div className="
            flex items-center gap-2 
            sm:items-center sm:justify-end 
            justify-center 
        ">
            <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
                <Star
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-[#E0AB6C] text-[#E0AB6C]"
                />
            ))}
            </div>
            <span className="text-[#E0AB6C] font-bold text-xs sm:text-sm md:text-base ml-2">
            {testimonial.rating.toFixed(1)}
            </span>
        </div>

        </div>


      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-6">
        {testimonial.tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1.5 rounded-full bg-[#E0AB6C]/10 border border-[#E0AB6C]/30 text-[#001A3B] text-xs md:text-sm font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  )
}