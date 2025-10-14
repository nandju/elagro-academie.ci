"use client"
import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { useTranslation } from '@/lib/translation-context';

export default function ElagroFAQSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="relative bg-background py-16 md:py-24 lg:py-28">
      <div className="container px-4 md:px-8 lg:px-16">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-8 sm:mb-12">
          {t.faqTitle}
        </h2>

        {/* Accordion Items */}
        <div className="space-y-2">
          {t.faqs.map((faq, index) => (
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