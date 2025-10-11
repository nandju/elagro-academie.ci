"use client"
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function ElagroFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Qu'est-ce qu'ELAGRO ACADEMY ?",
      answer: "ELAGRO ACADEMY est une plateforme numérique d'apprentissage, de conseil et de certification dédiée aux acteurs du monde agricole et de l'élevage. Elle combine savoir scientifique, expertise locale et technologies innovantes pour accompagner les producteurs vers une agriculture durable, rentable et respectueuse de la santé."
    },
    {
      question: "Combien coûte l'abonnement à ELAGRO ACADEMY ?",
      answer: "Nous proposons plusieurs formules d'abonnement adaptées à vos besoins : un plan mensuel, un plan trimestriel avec réduction, et un plan annuel offrant le meilleur rapport qualité-prix. Contactez-nous pour découvrir l'offre qui correspond à votre exploitation."
    },
    {
      question: "Où puis-je accéder aux formations ?",
      answer: "Vous pouvez accéder à ELAGRO ACADEMY depuis n'importe quel appareil connecté à Internet : smartphone, tablette ou ordinateur. Téléchargez également nos contenus pour les consulter hors connexion directement depuis vos champs."
    },
    {
      question: "Comment puis-je annuler mon abonnement ?",
      answer: "Vous pouvez annuler votre abonnement à tout moment depuis votre espace personnel dans les paramètres de compte. Aucun frais de résiliation n'est appliqué, et vous conservez l'accès jusqu'à la fin de votre période d'abonnement payée."
    },
    {
      question: "Quelles formations puis-je suivre sur ELAGRO ACADEMY ?",
      answer: "Notre catalogue propose des formations en agriculture durable, techniques d'élevage, gestion d'exploitation, agroécologie, utilisation de fertilisants naturels, santé animale, transformation des produits agricoles, et bien plus encore. De nouveaux contenus sont ajoutés régulièrement."
    },
    {
      question: "Les certifications sont-elles reconnues officiellement ?",
      answer: "Oui, nos certifications sont reconnues par les organisations agricoles partenaires et valorisent votre expertise professionnelle. Elles attestent de vos compétences acquises et peuvent améliorer votre crédibilité auprès des acheteurs et institutions."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative bg-background py-16 md:py-24 lg:py-28">
      <div className="container px-4 md:px-8 lg:px-16">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-8 sm:mb-12">
          Foire aux questions
        </h2>

        {/* Accordion Items */}
        <div className="space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#001A3B] hover:bg-[#002856] transition-colors duration-200"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full flex items-center justify-between p-6 sm:p-8 text-left focus:outline-none focus:ring-2 focus:ring-[#E0AB6C] focus:ring-inset"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg sm:text-xl lg:text-2xl font-medium text-white pr-8">
                  {faq.question}
                </span>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <X className="w-8 h-8 text-white transform rotate-0 transition-transform duration-300" strokeWidth={2} />
                  ) : (
                    <Plus className="w-8 h-8 text-white transition-transform duration-300" strokeWidth={2} />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                  <p className="text-base sm:text-lg text-gray-300 leading-relaxed border-t border-[#E0AB6C]/20 pt-6">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}