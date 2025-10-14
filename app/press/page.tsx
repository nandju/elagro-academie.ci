import { Navbar } from "@/components/navbar"

export default function PressPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001A3B] mb-8">
            Espace Presse
          </h1>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#001A3B] mb-4">À propos d'ELAGRO ACADEMY</h2>
              <p className="text-gray-600 mb-6">
                ELAGRO ACADEMY est la première plateforme numérique dédiée à la formation, au conseil et à la certification 
                dans le domaine de l'élevage en Côte d'Ivoire. Nous combinons savoir scientifique, expertise locale et 
                technologies innovantes pour accompagner les producteurs vers une agriculture durable.
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-[#001A3B] mb-2">Chiffres clés</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li>• 500+ agriculteurs formés</li>
                    <li>• 20+ formations disponibles</li>
                    <li>• 5 spécialités d'élevage</li>
                    <li>• 95% de satisfaction</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-[#001A3B] mb-2">Contact presse</h3>
                  <p className="text-gray-600">
                    <strong>Email:</strong> press@elagroacademy.com<br/>
                    <strong>Téléphone:</strong> +225 XX XX XX XX
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#001A3B] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Ressources médias</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#E0AB6C] mb-4">Téléchargements</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-[#E0AB6C] transition-colors">
                      📄 Logo ELAGRO ACADEMY
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-[#E0AB6C] transition-colors">
                      📄 Kit de presse complet
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-[#E0AB6C] transition-colors">
                      📄 Photos haute résolution
                    </a>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#E0AB6C] mb-4">Actualités</h3>
                  <div className="space-y-3">
                    <a href="#" className="block text-gray-300 hover:text-[#E0AB6C] transition-colors">
                      📰 Lancement de nouvelles formations
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-[#E0AB6C] transition-colors">
                      📰 Partenariat avec le Ministère de l'Agriculture
                    </a>
                    <a href="#" className="block text-gray-300 hover:text-[#E0AB6C] transition-colors">
                      📰 Certification de 100 agriculteurs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
