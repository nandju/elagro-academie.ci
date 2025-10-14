"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

interface ToastItem {
  id: number;
  type: "success" | "error";
  message: string;
}

export default function FooterAuth() {
  const [email, setEmail] = useState('');
  const [language, setLanguage] = useState<'Français' | 'English'>('Français');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Toasts gérés localement (dans le même fichier)
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const translations = {
    sending: language === 'Français' ? "Envoi..." : "Sending...",
    success: language === 'Français' ? "Merci ! Nous vous contacterons bientôt." : "Thank you! We'll contact you soon.",
    error: language === 'Français' ? "Une erreur s'est produite. Veuillez réessayer." : "An error occurred. Please try again.",
    invalidEmail: language === 'Français' ? "Veuillez entrer une adresse e-mail valide." : "Please enter a valid email address.",
  };

  // Ajoute un toast (success ou error)
  const addToast = (type: "success" | "error", message: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts(prev => [...prev, { id, type, message }]);
  };

  // Supprime un toast par id
  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };


  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (!validateEmail(email)) {
      // toast d'erreur si mail invalide
      addToast("error", translations.invalidEmail);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    // Optionnel : toast temporaire "envoi"
    addToast("success", translations.sending);

    try {
      const SERVICE_ID = "service_ac94qct";
      const TEMPLATE_ID = "template_tyc260u";
      const PUBLIC_KEY = "LYaI0cg635rkUCBZN";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
          language: language === 'Français' ? 'fr' : 'en',
          from_name: "ELAGRO ACADEMY - Footer",
          message: `Nouvelle inscription depuis le footer (langue: ${language})`,
        },
        PUBLIC_KEY
      );

      addToast("success", translations.success);
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Erreur EmailJS:", err);
      addToast("error", translations.error);
      setStatus("error");
    } finally {
      setIsLoading(false);
      // Nettoie le toast "sending" après court délai pour éviter doublons
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.message !== translations.sending));
      }, 1200);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

const footerLinks = {
  column1: [
    { label: 'FAQ', href: '#' },
    { label: "Centre d'aide", href: '#' },
    { label: "Conditions d'utilisation", href: '#' },
    { label: 'Confidentialité', href: '#' },
  ],
  column2: [
    { label: 'Préférences de cookies', href: '#' },
    { label: 'Mentions légales', href: '#' },
    { label: 'Accessibilité', href: '#' },
    { label: 'Sécurité de vos données', href: '#' },
  ],
  column3: [
    { label: 'À propos de ELAGRO ACADEMY', href: '#' },
    { label: 'Nos formations', href: '#' },
    { label: 'Conseils et accompagnement', href: '#' },
    { label: 'Nous contacter', href: '#' },
  ],
  column4: [
    { label: 'Actualités', href: '#' },
    { label: 'Rejoindre la communauté', href: '#' },
    { label: 'Support technique', href: '#' },
    { label: 'Soutenir nos projets', href: '#' },
  ],
};


  return (
    <div className="bg-[#001A3B] text-background">

      {/* Footer Links */}
      <div 
      
      // className="border-t border-gray-800"
      >
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
            <button
              onClick={() => setLanguage(prev => prev === 'Français' ? 'English' : 'Français')}
              className="flex items-center gap-2 bg-[#001A3B] border border-gray-600 rounded px-4 py-2 text-white hover:border-[#E0AB6C] transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
