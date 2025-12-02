"use client";

import React from 'react';
import { Tv, Download, Globe, Users } from 'lucide-react';
import { useTranslation } from '@/lib/translation-context';

export default function ElagroFeaturesSection() {
  const { t } = useTranslation();
  
  const features = [
    {
      icon: Tv,
      title: t.features[0].title,
      description: t.features[0].description,
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    },
    {
      icon: Download,
      title: t.features[1].title,
      description: t.features[1].description,
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    },
    {
      icon: Globe,
      title: t.features[2].title,
      description: t.features[2].description,
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    },
    {
      icon: Users,
      title: t.features[3].title,
      description: t.features[3].description,
      gradient: "from-[#E0AB6C]/20 to-[#E0AB6C]/5"
    }
  ];

  return (
    <div id="features" className="relative bg-background py-16 md:py-24 lg:py-28">
        {/* <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8"></div> */}
      <div className="container px-4 md:px-8 lg:px-16">
        {/* Header */}
        <div className="mb-10 md:mb-14">
        <div className=" mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-3">
            {t.featuresTitle}
          </h2>
          <p className="text-base md:text-lg text-[#001A3B]/70 max-w-2xl">
            {t.featuresSubtitle}
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
          <a 
            href="/register" 
            className="inline-block bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-bold text-lg px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#E0AB6C]/50"
          >
            {t.startNow}
          </a>
        </div>  
      </div>
    </div>
  );
}