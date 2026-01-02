"use client"
import React, { useState, useEffect } from 'react';
import { Globe } from 'lucide-react';
import Link from 'next/link';

export default function FooterAuth() {
  const [language, setLanguage] = useState<'Français' | 'English'>('Français');

  // Liens fonctionnels uniquement
  const footerLinks = {
    column1: [
      { label: 'FAQ', href: '/support' },
      { label: "Centre d'aide", href: '/support' },
      { label: "Conditions d'utilisation", href: '/terms' },
      { label: 'Confidentialité', href: '/privacy' },
    ],
    column2: [
      { label: 'Préférences de cookies', href: '/cookies' },
      { label: 'Mentions légales', href: '/terms' },
      { label: 'Accessibilité', href: '/accessibility' },
      { label: 'Sécurité de vos données', href: '/privacy' },
    ],
    column3: [
      { label: 'À propos de ELAGRO ACADEMY', href: '/' },
      { label: 'Nos formations', href: '/courses' },
      { label: 'Nous contacter', href: '/contact' },
      { label: 'Support', href: '/support' },
    ],
    column4: [
      { label: 'Connexion', href: '/login' },
      { label: 'Inscription', href: '/register' },
      { label: 'Mot de passe oublié', href: '/forgot-password' },
    ],
  };

  return (
    <footer className="bg-black text-white py-16">
      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Aide & Support</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.column1.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E0AB6C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Légal</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.column2.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E0AB6C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Entreprise</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.column3.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E0AB6C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Authentification</h4>
            <ul className="space-y-3 text-sm">
              {footerLinks.column4.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#E0AB6C] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-8">
          <button
            onClick={() => setLanguage(prev => prev === 'Français' ? 'English' : 'Français')}
            className="flex items-center gap-2 bg-[#001A3B] border border-gray-600 rounded px-4 py-2 text-white hover:border-[#E0AB6C] transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            <span className="text-sm">{language}</span>
          </button>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© 2025 Elagro Academy. Tous droits réservés.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#E0AB6C] transition-colors">
              Politique de confidentialité
            </Link>
            <span className="text-gray-600">|</span>
            <p>
              Ce site est protégé par reCAPTCHA et la{' '}
              <Link href="/privacy" className="text-[#E0AB6C] hover:underline">
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
