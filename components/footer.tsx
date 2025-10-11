"use client"
import React, { useState } from 'react';
import { ChevronRight, Globe } from 'lucide-react';

export default function ElagroFooterCTA() {
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState('Français');

  const handleSubmit = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  const footerLinks = {
    column1: [
      { label: 'FAQ', href: '#' },
      { label: 'Relations Partenaires', href: '#' },
      { label: 'Confidentialité', href: '#' },
      { label: 'Test de connexion', href: '#' }
    ],
    column2: [
      { label: "Centre d'aide", href: '#' },
      { label: 'Recrutement', href: '#' },
      { label: 'Préférences de cookies', href: '#' },
      { label: 'Informations légales', href: '#' }
    ],
    column3: [
      { label: 'Compte', href: '#' },
      { label: "Modes d'apprentissage", href: '#' },
      { label: 'Mentions légales', href: '#' },
      { label: 'Seulement sur ELAGRO ACADEMY', href: '#' }
    ],
    column4: [
      { label: 'Presse', href: '#' },
      { label: "Conditions d'utilisation", href: '#' },
      { label: 'Nous contacter', href: '#' }
    ]
  };

  return (
    <div className="bg-[#001A3B] text-background mt-16 md:mt-24 lg:mt-28">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            Prêt à développer vos compétences agricoles ? Saisissez votre adresse e-mail pour vous abonner ou réactiver votre abonnement.
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Adresse e-mail"
              className="flex-1 bg-[#001A3B] border border-gray-600 rounded px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E0AB6C] focus:border-transparent"
              required
            />
            <button
              onClick={handleSubmit}
              type="submit"
              className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-bold text-lg px-8 py-4 rounded flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
            >
              Commencer
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Contact Link */}
        <div className="text-center mt-8">
          <a href="#" className="text-gray-400 hover:text-[#E0AB6C] underline transition-colors duration-200">
            Des questions ? Contactez-nous.
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 */}
            <div className="space-y-3">
              {footerLinks.column1.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#E0AB6C] underline text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 2 */}
            <div className="space-y-3">
              {footerLinks.column2.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#E0AB6C] underline text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 3 */}
            <div className="space-y-3">
              {footerLinks.column3.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#E0AB6C] underline text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Column 4 */}
            <div className="space-y-3">
              {footerLinks.column4.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-400 hover:text-[#E0AB6C] underline text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Language Selector */}
          <div className="mb-8">
            <button className="flex items-center gap-2 bg-[#001A3B] border border-gray-600 rounded px-4 py-2 text-white hover:border-[#E0AB6C] transition-colors duration-200">
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language}</span>
            </button>
          </div>

          {/* Company Info */}
          <div className="text-gray-400 text-sm space-y-4">
            <p>ELAGRO ACADEMY Côte d'Ivoire</p>
            <p>
              Cette page est protégée par Google reCAPTCHA pour nous assurer que vous n'êtes pas un robot.{' '}
              <a href="#" className="text-[#E0AB6C] hover:underline">
                En savoir plus.
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}