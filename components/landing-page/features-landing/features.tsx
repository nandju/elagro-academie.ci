import { BookOpen, Award, Zap, Users } from "lucide-react"

export default function FeaturesLandingPage() {
  const features = [
    {
      icon: BookOpen,
      title: "Formations Certifiées",
      description: "Apprenez les compétences essentielles"
    },
    {
      icon: Award,
      title: "Certifications Professionnelles",
      description: "Obtenez des certificats reconnus"
    },
    {
      icon: Zap,
      title: "Conseil d'Experts",
      description: "Préparez-vous pour votre carrière"
    },
    {
      icon: Users,
      title: "Expertise Multi-Domaines",
      description: "Maîtrisez tous les domaines"
    },
  ]

  return (
    <section className="bg-[#001A3B] py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <div key={i} className="bg-[#001A3B] border border-[#E0AB6C]/20 flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-3 rounded-lg p-4 sm:p-6 text-center hover:bg-[#001A3B]/90 transition-colors">
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#E0AB6C] flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-white text-xs sm:text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-blue-100 hidden sm:block">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
