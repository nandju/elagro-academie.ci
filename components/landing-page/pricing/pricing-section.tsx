"use client";

import React from 'react';
import { useTranslation } from '@/lib/translation-context';
import { Button } from '@/components/ui/button';
import { Check, X } from 'lucide-react';

export default function PricingSection() {
  const { t } = useTranslation();
  const plans = t.pricingPlans;
  const compareFeatures = t.compareFeatures;
  const complianceCards = t.complianceCards;

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === 'boolean') {
      return value ? (
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-[#E0AB6C]/20 flex items-center justify-center">
            <Check className="w-4 h-4 text-[#E0AB6C]" />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="w-6 h-6 rounded-full bg-[#001A3B]/20 flex items-center justify-center">
            <X className="w-4 h-4 text-[#001A3B]/40" />
          </div>
        </div>
      );
    }
    return <span className="text-[#001A3B] text-sm font-medium">{value}</span>;
  };

  return (
    <div className="relative bg-background min-h-screen">
      {/* Header Section */}
      <section className="pt-20 pb-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#001A3B] mb-4">
            {t.pricingTitle}
          </h1>
          <p className="text-lg md:text-xl text-[#001A3B]/70 max-w-2xl mx-auto">
            {t.pricingSubtitle}
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-[#001A3B] rounded-2xl p-8 border border-[#E0AB6C]/10 hover:border-[#E0AB6C]/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{plans.free.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plans.free.price}</span>
                  {plans.free.period && (
                    <span className="text-[#E0AB6C]/70 text-sm ml-2">{plans.free.period}</span>
                  )}
                </div>
                <p className="text-gray-300 mb-6 text-sm">{plans.free.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plans.free.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E0AB6C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#E0AB6C]" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-semibold py-6 rounded-lg transition-all duration-300"
                  onClick={() => window.location.href = '/auth/register'}
                >
                  {plans.free.cta}
                </Button>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-[#001A3B] rounded-2xl p-8 border-2 border-[#E0AB6C] relative hover:shadow-[0_0_30px_rgba(224,171,108,0.3)] transition-all duration-300 hover:transform hover:scale-105">
              {plans.pro.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#E0AB6C] text-[#001A3B] px-4 py-1 rounded-full text-sm font-semibold">
                    {plans.pro.badge}
                  </div>
                </div>
              )}
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{plans.pro.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plans.pro.price}</span>
                  {plans.pro.period && (
                    <span className="text-[#E0AB6C]/70 text-sm ml-2">{plans.pro.period}</span>
                  )}
                </div>
                <p className="text-gray-300 mb-2 text-sm">{plans.pro.description}</p>
                {plans.pro.trial && (
                  <p className="text-[#E0AB6C] text-xs mb-6">
                    {plans.pro.trial}
                  </p>
                )}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plans.pro.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E0AB6C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#E0AB6C]" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-semibold py-6 rounded-lg transition-all duration-300"
                  onClick={() => window.location.href = '/auth/register'}
                >
                  {plans.pro.cta}
                </Button>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-[#001A3B] rounded-2xl p-8 border border-[#E0AB6C]/10 hover:border-[#E0AB6C]/30 transition-all duration-300 hover:transform hover:scale-105">
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-2">{plans.enterprise.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plans.enterprise.price}</span>
                  {plans.enterprise.period && (
                    <span className="text-[#E0AB6C]/70 text-sm ml-2">{plans.enterprise.period}</span>
                  )}
                </div>
                <p className="text-gray-300 mb-6 text-sm">{plans.enterprise.description}</p>
                <ul className="space-y-3 mb-8 flex-grow">
                  {plans.enterprise.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#E0AB6C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#E0AB6C]" />
                      </div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-semibold py-6 rounded-lg transition-all duration-300"
                  onClick={() => window.location.href = '/contact'}
                >
                  {plans.enterprise.cta}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compare Plans Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-background to-[#001A3B]/5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-3">
              {t.comparePlansTitle}
            </h2>
            <p className="text-lg text-[#001A3B]/70 max-w-2xl mx-auto">
              {t.comparePlansSubtitle}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#001A3B]/10">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#001A3B] text-white">
                    <th className="text-left p-6 font-semibold">{t.compareFeaturesLabel}</th>
                    <th className="text-center p-6 font-semibold">
                      <div className="flex flex-col items-center gap-2">
                        <span>{plans.free.name}</span>
                        <Button
                          size="sm"
                          className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] text-xs"
                          onClick={() => window.location.href = '/auth/register'}
                        >
                          {plans.free.cta}
                        </Button>
                      </div>
                    </th>
                    <th className="text-center p-6 font-semibold">
                      <div className="flex flex-col items-center gap-2">
                        <span>{plans.pro.name}</span>
                        <Button
                          size="sm"
                          className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] text-xs"
                          onClick={() => window.location.href = '/auth/register'}
                        >
                          {plans.pro.cta}
                        </Button>
                      </div>
                    </th>
                    <th className="text-center p-6 font-semibold">
                      <div className="flex flex-col items-center gap-2">
                        <span>{plans.enterprise.name}</span>
                        <Button
                          size="sm"
                          className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] text-xs"
                          onClick={() => window.location.href = '/contact'}
                        >
                          {plans.enterprise.cta}
                        </Button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {compareFeatures.map((feature, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? 'bg-white' : 'bg-[#001A3B]/5'}
                    >
                      <td className="p-6 font-medium text-[#001A3B]">{feature.label}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature.free)}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature.pro)}</td>
                      <td className="p-6 text-center">{renderFeatureValue(feature.enterprise)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Certifications Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-3">
              {t.complianceTitle}
            </h2>
            <p className="text-lg text-[#001A3B]/70 max-w-2xl mx-auto">
              {t.complianceSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {complianceCards.map((card, index) => (
              <div
                key={index}
                className="bg-[#001A3B] rounded-2xl p-8 border border-[#E0AB6C]/10 hover:border-[#E0AB6C]/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{card.title}</h3>
                  <div className="bg-[#E0AB6C]/20 text-[#E0AB6C] px-3 py-1 rounded-full text-xs font-semibold">
                    {card.badge}
                  </div>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{card.description}</p>
                <Button
                  className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-semibold"
                  onClick={() => window.location.href = '/contact'}
                >
                  {card.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

