import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CommunautePage() {
  const categories = [
    {
      id: "agriculture",
      title: "Agriculture",
      icon: "🌱",
      description: "Posez vos questions sur les cultures, les techniques agricoles, les maladies des plantes et plus encore",
      color: "from-green-50 to-green-100",
      borderColor: "border-green-200",
      topics: ["Riz", "Maïs", "Manioc", "Maraîchage", "Fertilisation", "Irrigation", "Maladies des cultures"]
    },
    {
      id: "elevage",
      title: "Élevage",
      icon: "🐓",
      description: "Échangez sur l'élevage de volailles, bovins, porcins, ovins et autres animaux d'élevage",
      color: "from-orange-50 to-orange-100",
      borderColor: "border-orange-200",
      topics: ["Poulet", "Pondeuses", "Bœuf", "Porc", "Mouton / Chèvre", "Alimentation animale", "Maladies", "Hygiène & bâtiments"]
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section 
        className="
          relative
          text-white
          py-16 md:py-24
          bg-[#001A3B]
          bg-[url('/assets/images/backgrounds/background_communaute_mobile.png')]
          md:bg-[url('/assets/images/backgrounds/background_communaute_desktop&tablette.png')]
          bg-cover
          bg-center
          bg-no-repeat
        "
      >
        {/* Overlay pour la lisibilité */}
        <div className="absolute inset-0 bg-[#001A3B]/70" />
        
        <div className="relative container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Communauté ELAGRO Academy
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Un espace d'échange public où vous pouvez poser des questions, partager vos expériences et apprendre ensemble
            </p>
            <p className="text-lg text-gray-300">
              👨🏽‍🌾 Des professionnels et experts sont là pour vous aider
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#001A3B] mb-4">
              Choisissez votre domaine
            </h2>
            <p className="text-gray-600 text-lg">
              Explorez les discussions par catégorie et rejoignez la conversation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category) => (
              <Card 
                key={category.id}
                className={`hover:shadow-xl transition-all duration-300 cursor-pointer border-2 ${category.borderColor} overflow-hidden`}
              >
                <Link href={`/communaute/${category.id}`}>
                  <div className={`bg-gradient-to-br ${category.color} p-8`}>
                    <div className="text-6xl mb-4">{category.icon}</div>
                    <CardHeader className="px-0 pt-0">
                      <CardTitle className="text-2xl text-[#001A3B] mb-2">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-base text-gray-700">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="px-0">
                      <div className="mb-6">
                        <p className="text-sm font-semibold text-gray-700 mb-3">
                          Sujets populaires :
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.topics.slice(0, 5).map((topic, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700"
                            >
                              {topic}
                            </span>
                          ))}
                          {category.topics.length > 5 && (
                            <span className="px-3 py-1 bg-white/80 rounded-full text-xs font-medium text-gray-700">
                              +{category.topics.length - 5}
                            </span>
                          )}
                        </div>
                      </div>
                      <Button 
                        className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90 text-white"
                        variant="default"
                      >
                        Explorer {category.title}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-12 bg-[#001A3B]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-4">💬</div>
                <h3 className="font-bold text-[#001A3B] mb-2">Questions & Réponses</h3>
                <p className="text-gray-600 text-sm">
                  Posez vos questions concrètes et recevez des réponses de la communauté
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">👨🏽‍🌾</div>
                <h3 className="font-bold text-[#001A3B] mb-2">Experts Disponibles</h3>
                <p className="text-gray-600 text-sm">
                  Des professionnels et formateurs partagent leur expertise
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">📚</div>
                <h3 className="font-bold text-[#001A3B] mb-2">Base de Connaissances</h3>
                <p className="text-gray-600 text-sm">
                  Les meilleures réponses deviennent une bibliothèque vivante
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

