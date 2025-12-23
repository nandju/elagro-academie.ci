import { Button } from "@/components/ui/button"

export default function ArticlesSection() {
  return (
         
  <section className="py-16 bg-[#FFFFFF]">
            <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#001A3B]">Articles Récents</h2>
            <Button 
              variant="ghost" 
              className="text-[#E0AB6C] hover:text-[#d19b5c] hover:bg-transparent font-semibold"
            >
              Voir tous les articles →
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <article 
                key={item} 
                className="rounded-lg overflow-hidden border-2 border-[#E0AB6C] hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-[#001A3B] to-[#003d7a]">
                  {/* Placeholder for article image */}
                </div>
                <div className="p-6">
                  <span className="text-sm text-[#E0AB6C] font-bold uppercase tracking-wide">Techniques Agricoles</span>
                  <h3 className="text-xl font-bold text-[#001A3B] my-3">
                    Les meilleures pratiques pour la culture du maïs en 2024
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Découvrez comment optimiser votre rendement avec ces techniques éprouvées de culture du maïs...
                  </p>
                  <div className="flex items-center text-sm text-[#001A3B]/60">
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
  )
}
