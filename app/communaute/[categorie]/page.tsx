"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare, Users } from "lucide-react"

// Données des sujets par catégorie
const topicsData: Record<string, Array<{ id: string; name: string; description: string; icon: string; questionCount: number }>> = {
  agriculture: [
    { id: "riz", name: "Riz", description: "Questions sur la culture du riz", icon: "🌾", questionCount: 24 },
    { id: "mais", name: "Maïs", description: "Techniques de culture du maïs", icon: "🌽", questionCount: 18 },
    { id: "manioc", name: "Manioc", description: "Culture et transformation du manioc", icon: "🥔", questionCount: 15 },
    { id: "maraichage", name: "Maraîchage", description: "Légumes et cultures maraîchères", icon: "🥬", questionCount: 32 },
    { id: "fertilisation", name: "Fertilisation", description: "Engrais et fertilisation des sols", icon: "🌿", questionCount: 28 },
    { id: "irrigation", name: "Irrigation", description: "Techniques d'irrigation et gestion de l'eau", icon: "💧", questionCount: 21 },
    { id: "maladies-cultures", name: "Maladies des cultures", description: "Identification et traitement des maladies", icon: "🔬", questionCount: 35 },
  ],
  elevage: [
    { id: "poulet", name: "Poulet", description: "Élevage de poulets de chair et poules pondeuses", icon: "🐔", questionCount: 42 },
    { id: "pondeuses", name: "Pondeuses", description: "Gestion des poules pondeuses et production d'œufs", icon: "🥚", questionCount: 28 },
    { id: "boeuf", name: "Bœuf", description: "Élevage bovin et production de viande", icon: "🐄", questionCount: 31 },
    { id: "porc", name: "Porc", description: "Élevage porcin et gestion des porcheries", icon: "🐷", questionCount: 25 },
    { id: "mouton-chevre", name: "Mouton / Chèvre", description: "Élevage ovin et caprin", icon: "🐑", questionCount: 19 },
    { id: "alimentation-animale", name: "Alimentation animale", description: "Nutrition et alimentation des animaux", icon: "🌾", questionCount: 38 },
    { id: "maladies", name: "Maladies", description: "Santé animale et prévention des maladies", icon: "💉", questionCount: 45 },
    { id: "hygiene-batiments", name: "Hygiène & bâtiments", description: "Hygiène, sanitaires et infrastructures d'élevage", icon: "🏠", questionCount: 22 },
  ]
}

const categoryInfo: Record<string, { title: string; icon: string; description: string; color: string; bgMobile: string; bgDesktop: string }> = {
  agriculture: {
    title: "Agriculture",
    icon: "🌱",
    description: "Posez vos questions sur les cultures, les techniques agricoles et les meilleures pratiques",
    color: "from-green-500 to-green-600",
    bgMobile: "/assets/images/backgrounds/background_mobile.png",
    bgDesktop: "/assets/images/backgrounds/background_desktop&tablette.png"
  },
  elevage: {
    title: "Élevage",
    icon: "🐓",
    description: "Échangez sur l'élevage, la santé animale et la gestion des troupeaux",
    color: "from-orange-500 to-orange-600",
    bgMobile: "/assets/images/backgrounds/background_elevage_mobile.png",
    bgDesktop: "/assets/images/backgrounds/background_elevage_desktop&tablette.png"
  }
}

export default function CategoriePage() {
  const params = useParams()
  const categorie = params.categorie as string
  
  const info = categoryInfo[categorie] || categoryInfo.agriculture
  const topics = topicsData[categorie] || []

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className="relative text-white py-12 md:py-16">
        {/* Background images */}
        <div className="absolute inset-0">
          {/* Mobile background */}
          <div
            className="absolute inset-0 bg-cover bg-center md:hidden"
            style={{
              backgroundImage: `url('${info.bgMobile}')`,
            }}
          />
          
          {/* Tablet & Desktop background */}
          <div
            className="absolute inset-0 bg-cover bg-center hidden md:block"
            style={{
              backgroundImage: `url('${info.bgDesktop}')`,
            }}
          />
          
          {/* Overlay pour la lisibilité */}
          <div className="absolute inset-0 bg-[#001A3B]/70" />
        </div>
        
        <div className="relative container mx-auto px-4">
          <Link 
            href="/communaute"
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à la communauté
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{info.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {info.title}
              </h1>
              <p className="text-xl text-white/90 mt-2">
                {info.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-[#001A3B] mb-2">
              Sujets de discussion
            </h2>
            <p className="text-gray-600">
              Sélectionnez un sujet pour voir les questions et réponses de la communauté
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <Card 
                key={topic.id}
                className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#E0AB6C]"
              >
                <Link href={`/communaute/${categorie}/${topic.id}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-4xl">{topic.icon}</span>
                      <Badge variant="secondary" className="bg-[#E0AB6C]/20 text-[#001A3B]">
                        {topic.questionCount} questions
                      </Badge>
                    </div>
                    <CardTitle className="text-xl text-[#001A3B]">
                      {topic.name}
                    </CardTitle>
                    <CardDescription className="text-base mt-2">
                      {topic.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-sm text-gray-500 gap-4">
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{topic.questionCount}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>Communauté active</span>
                      </div>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

