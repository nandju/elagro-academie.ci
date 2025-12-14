import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AgriculturePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#001A3B] to-[#1a3a5f] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Formations en Agriculture</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">Découvrez nos formations professionnelles pour maîtriser les techniques agricoles modernes</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6 text-lg">
                <Link href="/courses?category=agriculture">Voir les formations</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agricultural Sectors */}
      <section className="py-16 bg-gray-50">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-[#001A3B] mb-2">{sector.title}</h3>
                <p className="text-gray-600 mb-4">{sector.description}</p>
                <Button variant="outline" className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10">
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-[#001A3B]">Articles Récents</h2>
            <Button variant="ghost" className="text-[#E0AB6C] hover:bg-[#E0AB6C]/10">
              Voir tous les articles →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article key={item} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gray-200">
                  {/* Placeholder for article image */}
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#E0AB6C] font-medium">Techniques Agricoles</span>
                  <h3 className="text-xl font-semibold text-[#001A3B] my-2">
                    Les meilleures pratiques pour la culture du maïs en 2024
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Découvrez comment optimiser votre rendement avec ces techniques éprouvées de culture du maïs...
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>15 Nov 2024</span>
                    <span className="mx-2">•</span>
                    <span>5 min de lecture</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Démonstrations Vidéo</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-200 aspect-video rounded-lg overflow-hidden">
              {/* Video Placeholder */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <div className="text-4xl">▶️</div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-[#001A3B] mb-4">Techniques de plantation optimisées</h3>
              <p className="text-gray-600 mb-6">
                Apprenez les techniques de plantation qui ont permis à nos agriculteurs d'augmenter leurs rendements de plus de 40% en une seule saison.
              </p>
              <div className="space-y-4">
                {[
                  "Préparation du sol optimale",
                  "Choix des semences adaptées",
                  "Techniques d'irrigation efficaces",
                  "Gestion intégrée des nuisibles"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#E0AB6C] mr-2">✓</div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-6 bg-[#E0AB6C] hover:bg-[#d19b5c] text-white">
                Voir plus de vidéos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001A3B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à développer vos compétences en agriculture ?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Rejoignez notre communauté d'agriculteurs et bénéficiez d'un accès exclusif à nos formations et ressources.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6 text-lg">
              Commencer maintenant
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
