"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Clock, User, Calendar } from "lucide-react"
import Link from "next/link"
import { useRouter, useParams } from "next/navigation" 
import { articlesData } from "@/components/agriculture/articles/articles-section"

// Related articles (excluding current)
const getRelatedArticles = (currentId: string) => {
  return articlesData.filter(a => a.id !== currentId).slice(0, 3)
}

export default function ArticleDetail() {
  const router = useRouter()
  const params = useParams()
  const id = params?.id

  // Find the article
  const article = articlesData.find(a => a.id === id)

  if (!article) {
    return (
      <main className="min-h-screen bg-white">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-[#001A3B] mb-4">Article non trouvé</h1>
            <p className="text-gray-600 mb-8">Désolé, l'article que vous recherchez n'existe pas.</p>
            <Link href="/agriculture">
              <Button className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold">
                Retour aux articles
              </Button>
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const relatedArticles = getRelatedArticles(article.id)

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-[#E0AB6C]">
        <div className="container mx-auto px-4 py-4">
          <Link href="/agriculture">
            <Button 
              variant="ghost"
              className="text-[#E0AB6C] hover:text-[#d19b5c] hover:bg-[#E0AB6C]/10 flex items-center gap-2 font-semibold"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux articles
            </Button>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="h-96 overflow-hidden bg-gray-300">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-full object-cover"
        />
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          {/* Article Header */}
          <div className="mb-8">
            <span className="text-sm text-[#E0AB6C] font-bold uppercase tracking-wide bg-[#E0AB6C]/10 px-4 py-2 rounded-full inline-block">
              {article.category}
            </span>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#001A3B] my-6">
              {article.title}
            </h1>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-[#001A3B]/70 border-b border-t border-[#E0AB6C]/30 py-6">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#E0AB6C]" />
                <span className="font-medium">{article.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#E0AB6C]" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#E0AB6C]" />
                <span>{article.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            {article.fullContent.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-8 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Divider */}
          <div className="my-12 border-t-2 border-[#E0AB6C]/30" />

          {/* Author Section */}
          <div className="bg-[#E0AB6C]/10 border-2 border-[#E0AB6C] rounded-lg p-8 mb-12">
            <h3 className="text-2xl font-bold text-[#001A3B] mb-2">À propos de l'auteur</h3>
            <p className="text-gray-700">
              {article.author} est un expert en agriculture moderne avec plus de 15 ans d'expérience dans le secteur. 
              Passionné par les pratiques durables et innovantes, il partage régulièrement ses connaissances et conseils 
              avec la communauté agricole.
            </p>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-[#001A3B] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#E0AB6C] mb-12">Articles Connexes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle) => (
              <article 
                key={relatedArticle.id}
                onClick={() => router.push(`/agriculture/${relatedArticle.id}`)}
                className="rounded-lg overflow-hidden border-2 border-[#E0AB6C] hover:shadow-lg transition-shadow cursor-pointer group bg-[#001A3B]/50"
              >
                <div className="h-40 bg-gray-300 overflow-hidden">
                  <img 
                    src={relatedArticle.image} 
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs text-[#E0AB6C] font-bold uppercase tracking-wide">
                    {relatedArticle.category}
                  </span>
                  <h3 className="text-lg font-bold text-white my-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2 mb-3">
                    {relatedArticle.description}
                  </p>
                  <div className="text-xs text-gray-400">
                    {relatedArticle.date}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

{/* CTA Section */}
<section
  className="
    relative
    py-16
    bg-[#E0AB6C]
    bg-[url('/assets/images/backgrounds/backgroundAgriDetails_mobile.png')]
    md:bg-[url('/assets/images/backgrounds/backgroundAgriDetails_desktop&tablette.png')]
    bg-cover
    bg-center
    bg-no-repeat
  "
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#E0AB6C]/70 md:bg-[#E0AB6C]/60" />

  {/* Content */}
  <div className="relative container mx-auto px-4 text-center">
    <h2 className="text-3xl font-bold text-[#001A3B] mb-4">
      Intéressé par plus de contenu agricole ?
    </h2>

    <p className="text-lg text-[#001A3B]/80 mb-8 max-w-2xl mx-auto">
      Inscrivez-vous à notre newsletter pour recevoir les derniers articles et conseils directement dans votre boîte mail.
    </p>

    <Link href="/agriculture">
      <Button className="bg-[#001A3B] hover:bg-[#003d7a] text-[#E0AB6C] px-8 py-6 text-lg font-semibold">
        Découvrir tous les articles
      </Button>
    </Link>
  </div>
</section>


    </main>
  )
}