"use client"

export default function DualCtas() {
  return (
    <section className="w-full bg-gray-50 py-12 md:py-16 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Become An Instructor Card */}
        <div className="rounded-2xl bg-[#001A3B] overflow-hidden flex flex-col md:flex-row items-center shadow-lg hover:shadow-xl transition-shadow">
          {/* Left Section - Text and Button */}
          <div className="p-6 md:p-8 flex-1 w-full md:w-[60%]">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              Devenez Formateur
            </h3>
            <p className="text-sm md:text-base text-white mb-6 leading-relaxed">
              Partagez votre expertise en élevage et agriculture avec des milliers d'apprenants sur Elagro Academy.
            </p>
            <button className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-colors">
              Commencer à enseigner
            </button>
          </div>
          {/* Right Section - Image */}
          <div className="flex-shrink-0 w-full md:w-[40%] h-48 md:h-full min-h-[200px]">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop" 
              alt="Formateurs" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Transform Access Card */}
        <div className="rounded-2xl bg-[#E0AB6C] overflow-hidden flex flex-col md:flex-row items-center shadow-lg hover:shadow-xl transition-shadow">
          {/* Left Section - Text and Button */}
          <div className="p-6 md:p-8 flex-1 w-full md:w-[60%]">
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#001A3B] mb-4 leading-tight">
              Accès à la Formation
            </h3>
            <p className="text-sm md:text-base text-[#001A3B] mb-6 leading-relaxed">
              Créez un compte pour recevoir notre newsletter, des recommandations de formations et des promotions.
            </p>
            <button className="bg-[#001A3B] hover:bg-[#001A3B]/90 text-white px-6 py-3 rounded-lg text-sm md:text-base font-semibold transition-colors">
              S'inscrire gratuitement
            </button>
          </div>
          {/* Right Section - Image */}
          <div className="flex-shrink-0 w-full md:w-[40%] h-48 md:h-full min-h-[200px] relative">
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