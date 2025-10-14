import { Navbar } from "@/components/navbar"

export default function CareersPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001A3B] mb-8">
            Rejoignez notre équipe
          </h1>
          
          <div className="bg-[#001A3B] rounded-2xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Faites partie de la révolution agricole
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Nous cherchons des talents passionnés pour nous aider à transformer l'agriculture en Afrique. 
              Rejoignez une équipe dynamique et contribuez à l'avenir de l'agriculture durable.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#E0AB6C] mb-4">Postes disponibles</h3>
                <div className="space-y-4 text-gray-300">
                  <div className="border-l-4 border-[#E0AB6C] pl-4">
                    <h4 className="font-semibold">Expert en Agriculture</h4>
                    <p className="text-sm">Temps plein - Abidjan</p>
                  </div>
                  <div className="border-l-4 border-[#E0AB6C] pl-4">
                    <h4 className="font-semibold">Développeur Full-Stack</h4>
                    <p className="text-sm">Temps plein - Remote</p>
                  </div>
                  <div className="border-l-4 border-[#E0AB6C] pl-4">
                    <h4 className="font-semibold">Formateur en Élevage</h4>
                    <p className="text-sm">Temps partiel - Abidjan</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#E0AB6C] mb-4">Pourquoi nous rejoindre ?</h3>
                <div className="space-y-2 text-gray-300">
                  <p>• Impact social positif</p>
                  <p>• Environnement de travail flexible</p>
                  <p>• Formation continue</p>
                  <p>• Équipe internationale</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <a 
                href="mailto:careers@elagroacademy.com" 
                className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-bold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Postuler maintenant
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
