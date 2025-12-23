"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Loader2 } from "lucide-react"
import Link from "next/link"

// Articles data
const articlesData = [
  {
    id: "les-meilleures-pratiques-pour-la-culture-du-mais-en-2024",
    title: "Les meilleures pratiques pour la culture du maïs en 2024",
    category: "Techniques Agricoles",
    description: "Découvrez comment optimiser votre rendement avec ces techniques éprouvées de culture du maïs...",
    fullContent: "Qui dit qu'on aurait besoin d'un budget restreint pour explorer le monde ? Voyager avec un budget serré n'est pas une question de sacrifier les expériences mais plutôt de faire des choix judicieux qui vous permettent de vivre plus pour moins. Que vous soyez un voyageur novice ou un explorateur chevronné, ces conseils pour voyager avec un budget restreint vous aideront à tirer le maximum de chaque voyage.\n\nVoyager sur un budget n'est pas seulement une question d'économies mais aussi de faire des choix intelligents qui vous permettent de vivre plus pour moins. Que vous soyez un voyageur novice ou un explorateur chevronné, ces conseils vous aideront à tirer le maximum de chaque voyage.\n\nPlanifiez à l'avance et restez flexible. Les tarifs des billets d'avion, des hébergements et même des activités tendent à être moins chers lorsqu'ils sont réservés à l'avance. Cependant, la flexibilité peut aussi entraîner des économies considérables.",
    image: "/assets/images/illustrations/page-agricultuture&elevage/maïs.png",
    author: "Sara White",
    date: "15 Nov 2024",
    readTime: "5 min de lecture"
  },
  {
    id: "irrigation-moderne-techniques-et-innovations",
    title: "Irrigation moderne : techniques et innovations",
    category: "Gestion de l'Eau",
    description: "Explorez les dernières innovations en matière de systèmes d'irrigation pour maximiser votre efficacité...",
    fullContent: "L'irrigation est l'un des éléments clés de l'agriculture moderne. Les systèmes d'irrigation évoluent constamment pour offrir une meilleure efficacité énergétique et une gestion plus intelligente de l'eau. Des goutte-à-goutte aux systèmes de pivotage automatisés, découvrez comment choisir le système le plus adapté à votre exploitation.",
    image: "/assets/images/illustrations/page-agricultuture&elevage/irrigation.png",
    author: "Jean Martin",
    date: "12 Nov 2024",
    readTime: "7 min de lecture"
  },
  {
    id: "agriculture-biologique-principes-et-certifications",
    title: "Agriculture biologique : principes et certifications",
    category: "Agriculture Bio",
    description: "Comprenez les principes fondamentaux de l'agriculture biologique et comment obtenir vos certifications...",
    fullContent: "L'agriculture biologique n'est pas simplement une absence d'intrants chimiques, c'est une philosophie complète de gestion du sol et de l'écosystème. Cet article explore les principes fondamentaux, les processus de certification et les avantages à long terme pour votre exploitation.",
    image: "/assets/images/illustrations/page-agricultuture&elevage/agriculture-biologique.png",
    author: "Marie Dupont",
    date: "10 Nov 2024",
    readTime: "6 min de lecture"
  },
  {
    id: "gestion-des-sols-amelioration-de-la-fertilite",
    title: "Gestion des sols : amélioration de la fertilité",
    category: "Conservation des Sols",
    description: "Apprenez les techniques essentielles pour améliorer et maintenir la fertilité de vos sols...",
    fullContent: "Un sol fertile est la fondation de toute agriculture productive. Découvrez comment analyser votre sol, améliorer sa structure et maintenir sa fertilité à long terme grâce à des pratiques durables et éprouvées.",
    image: "/assets/images/illustrations/page-agricultuture&elevage/sol.png",
    author: "Pierre Leblanc",
    date: "08 Nov 2024",
    readTime: "8 min de lecture"
  },
  {
    id: "culture-du-cacao-durable-et-rentable",
    title: "Culture du cacao : durable et rentable",
    category: "Cultures Spécialisées",
    description: "Maximisez vos rendements en cacao tout en respectant les principes du développement durable...",
    fullContent: "La culture du cacao offre des opportunités intéressantes pour les agriculteurs cherchant une diversification rentable. Découvrez les techniques modernes de cultivation, les variétés recommandées et les stratégies de marché pour réussir dans la production cacaoyère.",
    image: "/assets/images/illustrations/page-agricultuture&elevage/cacao.png",
    author: "Thomas Ange",
    date: "05 Nov 2024",
    readTime: "9 min de lecture"
  },
  {
    id: "maraichage-intensif-rendement-maximal",
    title: "Maraîchage intensif : rendement maximal",
    category: "Production Maraîchère",
    description: "Techniques pour maximiser votre production en maraîchage sur des surfaces réduites...",
    fullContent: "Le maraîchage intensif permet de produire plus sur moins de surface. Cet article couvre les techniques de cultures associées, l'optimisation de l'espace, la gestion des cultures successives et les outils modernes pour augmenter vos rendements.",
    image: "/assets/images/illustrations/page-agricultuture&elevage/maraichage.png",
    author: "Isabelle Garcia",
    date: "02 Nov 2024",
    readTime: "7 min de lecture"
  }
]

export default function ArticlesSection() {
  const [currentPage, setCurrentPage] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showAll, setShowAll] = useState(false)

  const articlesPerPage = 3
  const totalPages = Math.ceil(articlesData.length / articlesPerPage)

  // Get articles for current page
  const startIndex = (currentPage - 1) * articlesPerPage
  const endIndex = startIndex + articlesPerPage
  const currentArticles = articlesData.slice(0, showAll ? articlesData.length : endIndex)

  const handleViewAll = async () => {
    setIsLoading(true)
    // Simulate loading
    await new Promise(resolve => setTimeout(resolve, 1500))
    setShowAll(true)
    setIsLoading(false)
  }

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 800))
      setCurrentPage(currentPage + 1)
      setIsLoading(false)
    }
  }

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      setIsLoading(true)
      await new Promise(resolve => setTimeout(resolve, 800))
      setCurrentPage(currentPage - 1)
      setIsLoading(false)
    }
  }

  return (
    <section className="py-16 bg-[#FFFFFF]">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-[#001A3B]">Articles Récents</h2>
          {!showAll && (
            <Button 
              onClick={handleViewAll}
              disabled={isLoading}
              variant="ghost" 
              className="text-[#E0AB6C] hover:text-[#d19b5c] hover:bg-transparent font-semibold flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Chargement...
                </>
              ) : (
                <>
                  Voir tous les articles →
                </>
              )}
            </Button>
          )}
        </div>

        {/* Loading overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 pointer-events-none">
            <div className="bg-white rounded-lg p-8 flex flex-col items-center gap-4 shadow-2xl">
              <Loader2 className="w-12 h-12 text-[#E0AB6C] animate-spin" />
              <p className="text-[#001A3B] font-semibold">Chargement des articles...</p>
            </div>
          </div>
        )}

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentArticles.map((article) => (
            <Link 
              key={article.id}
              href={`/agriculture/${article.id}`}
            >
              <article 
                className="rounded-lg overflow-hidden border-2 border-[#E0AB6C] hover:shadow-lg transition-shadow cursor-pointer group h-full"
              >
                <div className="h-48 bg-gray-300 overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <span className="text-sm text-[#E0AB6C] font-bold uppercase tracking-wide">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#001A3B] my-3">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 mb-4 line-clamp-2 flex-grow">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-[#001A3B]/60 mt-auto">
                    <div>
                      <span>{article.date}</span>
                      <span className="mx-2">•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#E0AB6C] group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        {showAll && (
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              onClick={handlePrevPage}
              disabled={currentPage === 1 || isLoading}
              variant="outline"
              className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← Précédent
            </Button>

            <div className="flex items-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Button
                  key={page}
                  onClick={async () => {
                    setIsLoading(true)
                    await new Promise(resolve => setTimeout(resolve, 800))
                    setCurrentPage(page)
                    setIsLoading(false)
                  }}
                  disabled={isLoading}
                  variant={currentPage === page ? "default" : "outline"}
                  className={currentPage === page 
                    ? "bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold" 
                    : "border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10"
                  }
                >
                  {page}
                </Button>
              ))}
            </div>

            <Button
              onClick={handleNextPage}
              disabled={currentPage === totalPages || isLoading}
              variant="outline"
              className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Suivant →
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}

export { articlesData }