import { Button } from "@/components/ui/button"



export default function SectorsSection() {
  return (
          <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Nos Filières Agricoles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Culture du Maïs",
                description: "Techniques modernes de culture, irrigation et gestion des sols pour une production optimale de maïs.",
                icon: "🌽"
              },
              {
                title: "Cacao Durable",
                description: "Apprenez les méthodes de culture biologique et les techniques de transformation du cacao.",
                icon: "🍫"
              },
              {
                title: "Maraîchage Intensif",
                description: "Maîtrisez les techniques de production maraîchère à haut rendement.",
                icon: "🥬"
              },
              {
                title: "Agriculture Biologique",
                description: "Découvrez les principes et pratiques de l'agriculture biologique certifiée.",
                icon: "🌱"
              },
              {
                title: "Gestion des Sols",
                description: "Techniques de conservation et d'amélioration de la fertilité des sols.",
                icon: "🌍"
              },
              {
                title: "Irrigation et Gestion de l'Eau",
                description: "Systèmes d'irrigation efficaces et gestion durable des ressources en eau.",
                icon: "💧"
              }
            ].map((sector, index) => (
              <div 
                key={index} 
                className="bg-white border-2 border-[#E0AB6C] p-6 rounded-lg hover:shadow-lg hover:border-[#d19b5c] transition-all"
              >
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-bold text-[#001A3B] mb-2">{sector.title}</h3>
                <p className="text-gray-700 mb-4">{sector.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-[#E0AB6C] hover:text-[#d19b5c] hover:bg-[#E0AB6C]/10 font-semibold"
                >
                  En savoir plus →
                </Button>
              </div>
            ))}
          </div>
        </div>
          </section>
  )
}
