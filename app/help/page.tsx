import { Navbar } from "@/components/navbar"

export default function HelpPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001A3B] mb-8">
            Centre d'aide
          </h1>
          
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#001A3B] mb-4">Comment commencer ?</h2>
              <p className="text-gray-600 mb-4">
                Découvrez comment créer votre compte et commencer votre première formation.
              </p>
              <a href="/auth/register" className="text-[#E0AB6C] hover:underline font-semibold">
                Créer un compte →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#001A3B] mb-4">Problèmes techniques</h2>
              <p className="text-gray-600 mb-4">
                Solutions aux problèmes courants de connexion et d'utilisation de la plateforme.
              </p>
              <a href="#contact" className="text-[#E0AB6C] hover:underline font-semibold">
                Contacter le support →
              </a>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-[#001A3B] mb-4">Formations disponibles</h2>
              <p className="text-gray-600 mb-4">
                Explorez notre catalogue complet de formations en agriculture et élevage.
              </p>
              <a href="/#specialties" className="text-[#E0AB6C] hover:underline font-semibold">
                Voir les formations →
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
