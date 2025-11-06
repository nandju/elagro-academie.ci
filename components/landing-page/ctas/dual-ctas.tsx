"use client"

export default function DualCtas() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Become An Instructor Card */}
        <div className="rounded-xl bg-white shadow-sm border border-[#001A3B]/10 overflow-hidden flex flex-col md:flex-row items-center hover:shadow-md transition-shadow">
          <div className="p-6 md:p-8 flex-1">
            <h3 className="text-lg md:text-xl font-bold text-[#001A3B] mb-3">Devenez Formateur</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Partagez votre expertise en élevage et agriculture avec des milliers d'apprenants sur Elagro Academy.
            </p>
            <button className="bg-[#001A3B] hover:bg-[#001A3B]/90 text-white px-6 py-2.5 rounded-md text-sm font-semibold transition-colors">
              Commencer à enseigner
            </button>
          </div>
          <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-full">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
              alt="Formateurs" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Transform Access Card */}
        <div className="rounded-xl bg-white shadow-sm border border-[#001A3B]/10 overflow-hidden flex flex-col md:flex-row items-center hover:shadow-md transition-shadow">
          <div className="p-6 md:p-8 flex-1">
            <h3 className="text-lg md:text-xl font-bold text-[#001A3B] mb-3">Accès à la Formation</h3>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Créez un compte pour recevoir notre newsletter, des recommandations de formations et des promotions.
            </p>
            <button className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] px-6 py-2.5 rounded-md text-sm font-semibold transition-colors">
              S'inscrire gratuitement
            </button>
          </div>
          <div className="flex-shrink-0 w-full md:w-48 h-32 md:h-full relative">
            <div className="absolute top-4 right-4 bg-[#E0AB6C] text-[#001A3B] text-xs font-bold px-3 py-1 rounded-full">
              GRATUIT
            </div>
            <img 
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop" 
              alt="Formation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}