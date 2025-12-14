"use client"

import { Briefcase, Leaf, Users, TrendingUp, Zap, BookOpen } from "lucide-react"

const categories = [
  { 
    labelFr: "Élevage de Volaille", 
    labelEn: "Poultry Farming", 
    description: "Maîtrisez l'élevage moderne de volaille avec nos cours pratiques et certifiés.",
    icon: Briefcase,
    color: "from-blue-500/20 to-blue-600/10"
  },
  { 
    labelFr: "Élevage Porcin", 
    labelEn: "Pig Farming", 
    description: "Gérez efficacement un élevage de porcs rentable et durable.",
    icon: Zap,
    color: "from-purple-500/20 to-purple-600/10"
  },
  { 
    labelFr: "Élevage de Ruminants", 
    labelEn: "Ruminant Farming", 
    description: "Optimisez votre production bovine et ovine avec les meilleures pratiques.",
    icon: Leaf,
    color: "from-green-500/20 to-green-600/10"
  },
  { 
    labelFr: "Aquaculture", 
    labelEn: "Aquaculture", 
    description: "Découvrez l'élevage du poisson et des fruits de mer en aquaculture.",
    icon: TrendingUp,
    color: "from-cyan-500/20 to-cyan-600/10"
  },
  { 
    labelFr: "Cuniculture", 
    labelEn: "Rabbit Farming", 
    description: "Élevez des lapins de manière professionnelle et rentable.",
    icon: Users,
    color: "from-rose-500/20 to-rose-600/10"
  },
  { 
    labelFr: "Culture Agricole", 
    labelEn: "Crop Farming", 
    description: "Apprenez les techniques modernes de production agricole.",
    icon: Leaf,
    color: "from-amber-500/20 to-amber-600/10"
  },
]

export default function TopCategories() {
  return (
    <section className="w-full bg-[#001A3B] py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-start mb-12 md:mb-16">
          
          {/* Left Content */}
          <div className="flex flex-col justify-start">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Parcourir par <br className="hidden sm:block" />
              Catégorie de Cours
            </h2>
            
            <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 leading-relaxed max-w-sm">
              Explorez nos formations à travers les catégories pour trouver le cours parfait adapté à vos besoins.
            </p>
            
            <button className="w-fit bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-bold px-6 md:px-8 py-3 md:py-4 rounded-lg transition-all duration-300 flex items-center gap-2 group">
              Voir toutes les catégories
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

          {/* Right Categories Grid — NOW 6 ITEMS */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {categories.map((cat, idx) => {
                const Icon = cat.icon
                return (
                  <div 
                    key={idx}
                    className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#001A3B] border border-[#E0AB6C]/20 
                    hover:border-[#E0AB6C]/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl 
                    hover:shadow-[#E0AB6C]/10 cursor-pointer"
                  >
                    {/* Icon */}
                    <div className={`w-12 h-12 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center mb-4 
                      group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 text-[#E0AB6C]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#E0AB6C] transition-colors">
                      {cat.labelFr}
                    </h3>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {cat.description}
                    </p>

                    {/* Hover Line */}
                    <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r 
                      from-[#E0AB6C] to-transparent group-hover:w-12 transition-all duration-300 rounded-full"></div>
                  </div>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
