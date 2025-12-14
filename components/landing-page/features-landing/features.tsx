import { BookOpen, Award, Zap, Users, MessageCircle, Download, Smile } from "lucide-react"

export default function FeaturesLandingPage() {
  const benefits = [
    {
      icon: Users,
      title: "Formé par des Professionnels",
      description: "Découvrez les meilleures pratiques en élevage et agriculture enseignées par des experts du secteur avec des années d'expérience."
    },
    {
      icon: Award,
      title: "Certifications Reconnues",
      description: "Obtenez des certifications professionnelles reconnues pour booster votre carrière et votre crédibilité auprès des employeurs."
    },
    {
      icon: MessageCircle,
      title: "Support Rapide 24/7",
      description: "Besoin d'aide ? Notre équipe d'experts est disponible pour répondre à vos questions instantanément, 24h/24, 365 jours par an."
    },
    {
      icon: Zap,
      title: "Accès Illimité à Vie",
      description: "Un seul paiement, accès à vie ! Mettez à jour vos compétences autant que vous le souhaitez sans frais supplémentaires."
    },
    {
      icon: BookOpen,
      title: "Accès à la Communauté Privée",
      description: "Rejoignez une communauté d'agriculteurs et d'éleveurs passionnés pour échanger, collaborer et grandir ensemble."
    },
    {
      icon: Download,
      title: "Ressources Téléchargeables",
      description: "Téléchargez des guides pratiques, des fiches techniques et des modèles pour appliquer vos connaissances hors ligne."
    },
  ]

  return (
    <section className="relative bg-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Gradient Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#E0AB6C] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#001A3B] rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="flex justify-center mb-4">
            <Smile className="w-10 h-10 sm:w-12 sm:h-12 text-[#E0AB6C]" />
          </div>
          
          <p className="text-[#E0AB6C] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">
            Avantages Incroyables
          </p>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-4 sm:mb-6 leading-tight">
            Les Bénéfices Extraordinaires <br className="hidden sm:block" /> de nos Formations
          </h2>
          
          <p className="text-[#001A3B] text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Explorez les avantages incroyables de vous inscrire à nos formations en élevage et agriculture pour développer vos compétences.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div 
                key={idx} 
                className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#001A3B] border border-[#E0AB6C]/20 hover:border-[#E0AB6C]/50 rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-[#E0AB6C]/10"
              >
                
                {/* Hover Background Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E0AB6C]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative z-10">
                  
                  {/* Icon */}
                  <div className="mb-5">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#E0AB6C]/20 to-[#E0AB6C]/5 rounded-xl flex items-center justify-center group-hover:from-[#E0AB6C]/30 group-hover:to-[#E0AB6C]/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#E0AB6C]" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#E0AB6C] transition-colors duration-300">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                    {benefit.description}
                  </p>

                  {/* Accent Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-[#E0AB6C] to-transparent group-hover:w-12 transition-all duration-300 rounded-full mt-4"></div>

                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}