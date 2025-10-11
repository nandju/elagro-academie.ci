import React from 'react';
import { Tv, Download, Globe, Users } from 'lucide-react';

export default function ElagroFeaturesSection() {
  const features = [
    {
      icon: Tv,
      title: "Formation en Ligne",
      description: "Accédez à des formations agricoles de qualité depuis votre smartphone, tablette ou ordinateur, où que vous soyez.",
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    },
    {
      icon: Download,
      title: "Contenus Téléchargeables",
      description: "Téléchargez vos cours et guides pratiques pour les consulter hors connexion, à tout moment dans vos champs.",
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    },
    {
      icon: Globe,
      title: "Expertise Locale",
      description: "Bénéficiez de conseils adaptés à votre région et de solutions agricoles durables et rentables.",
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    },
    {
      icon: Users,
      title: "Certification Professionnelle",
      description: "Obtenez des certifications reconnues et rejoignez une communauté d'agriculteurs innovants.",
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    }
  ];

  return (
    <div className="relative bg-background py-16 md:py-24 lg:py-28">
        {/* <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8"></div> */}
      <div className="container px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-10 md:mb-14">
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-3">
            Encore plus de raisons de vous abonner
          </h2>
          <p className="text-base md:text-lg text-[#001A3B]/70 max-w-2xl">
            ELAGRO ACADEMY - Votre plateforme d'apprentissage agricole
          </p>
        </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-[#001A3B] rounded-2xl p-8 hover:transform hover:scale-105 transition-all duration-300 ease-in-out border border-[#E0AB6C]/10 hover:border-[#E0AB6C]/30"
              >
                {/* Content */}
                <div className="flex flex-col h-full">
                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-grow mb-8">
                    {feature.description}
                  </p>
                  
                  {/* Icon at bottom */}
                  <div className="flex justify-end mt-auto">
                    <div className={`bg-gradient-to-br ${feature.gradient} p-6 rounded-full`}>
                      <Icon className="w-12 h-12 text-[#E0AB6C]" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
          <div className="text-center mt-16">
          <button className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E0AB6C]/50">
            Commencer maintenant
          </button>
        </div>  
      </div>
    </div>
  );
}