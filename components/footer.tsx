"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Loader2, CheckCircle2, AlertCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useTranslation } from '@/lib/translation-context';

interface ToastItem {
  id: number;
  type: "success" | "error";
  message: string;
}

export default function ElagroFooterCTA() {
  const { language, setLanguage, t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // Toasts gérés localement (dans le même fichier)
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
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

  // Toast component inline (pas séparé)
  function Toast({ item }: { item: ToastItem }) {
    useEffect(() => {
      const timer = setTimeout(() => removeToast(item.id), 5000);
      return () => clearTimeout(timer);
    }, [item.id]);

    const isSuccess = item.type === "success";

      return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
      <div
        // container principal : fond sombre, bord fin doré, radius, blur
        className={`flex items-start gap-4 rounded-lg p-4 min-w-[320px] max-w-md shadow-xl
          bg-[#001A3B] border border-[#E0AB6C]/30`}
        role="status"
        aria-live="polite"
      >
        {/* Accent vertical */}
        <span
          className={`h-full w-1 rounded-full`}
          style={{ backgroundColor: "#E0AB6C" }}
        />

        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="h-6 w-6" style={{ color: "#E0AB6C" }} />
          ) : (
            <AlertCircle className="h-6 w-6" style={{ color: "#E0AB6C" }} />
          )}
        </div>

        {/* Message */}
        <p className="flex-1 text-sm font-medium leading-relaxed text-[#FFFFFF]">
          {item.message}
        </p>

        {/* Close button */}
        <button
          onClick={() => removeToast(item.id)}
          className="flex-shrink-0 rounded-md p-1 transition-colors hover:bg-white/10"
          aria-label="Fermer la notification"
        >
          <X className="h-4 w-4" style={{ color: "#FFFFFF" }} />
        </button>
      </div>
    </div>
  );
  }

  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (!validateEmail(email)) {
      // toast d'erreur si mail invalide
      addToast("error", t.invalidEmail);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setIsLoading(true);
    setStatus("idle");

    // Optionnel : toast temporaire "envoi"
    addToast("success", t.sending);

    try {
      const SERVICE_ID = "service_ac94qct";
      const TEMPLATE_ID = "template_tyc260u";
      const PUBLIC_KEY = "LYaI0cg635rkUCBZN";

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          user_email: email,
          language: language,
          from_name: "ELAGRO ACADEMY - Footer",
          message: `Nouvelle inscription depuis le footer (langue: ${language})`,
        },
        PUBLIC_KEY
      );

      addToast("success", t.success);
      setStatus("success");
      setEmail("");
    } catch (err) {
      console.error("Erreur EmailJS:", err);
      addToast("error", t.error);
      setStatus("error");
    } finally {
      setIsLoading(false);
      // Nettoie le toast "sending" après court délai pour éviter doublons
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.message !== t.sending));
      }, 1200);
      setTimeout(() => setStatus("idle"), 4000);
    }
  };


  return (
    <div className="bg-[#001A3B] text-background mt-16 md:mt-24 lg:mt-28">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-8">
          <p className="text-base sm:text-lg text-gray-300 mb-6">
            {t.footerDescription}
          </p>
        </div>

        {/* Email Form */}
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t.emailPlaceholder}
              disabled={isLoading}
              className="flex-1 bg-[#001A3B] border border-gray-600 rounded px-4 py-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E0AB6C] focus:border-transparent disabled:opacity-50"
              required
            />
            <button
              onClick={handleSubmit}
              type="submit"
              disabled={isLoading || !email}
              className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-bold text-lg px-8 py-4 rounded flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t.sending}</span>
                </>
              ) : (
                <>
                  <span>{t.footerCta}</span>
                  <ChevronRight className="w-5 h-5" />
                </>
              )}
            </button>
          </div>
        </div>

        {/* Contact Link */}
        <div className="text-center mt-8">
          <a href="#contact" className="text-gray-400 hover:text-[#E0AB6C] underline transition-colors duration-200">
            {t.contactUs}
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            {/* Column 1 */}
            <div className="space-y-3">
              {t.footerLinks.column1.map((link, index) => (
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
              {t.footerLinks.column2.map((link, index) => (
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
              {t.footerLinks.column3.map((link, index) => (
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
              {t.footerLinks.column4.map((link, index) => (
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
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="flex items-center gap-2 bg-[#001A3B] border border-gray-600 rounded px-4 py-2 text-white hover:border-[#E0AB6C] transition-colors duration-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">{language === 'fr' ? 'Français' : 'English'}</span>
            </button>
          </div>

          {/* Company Info */}
          <div className="text-gray-400 text-sm space-y-4">
            <p>{t.companyInfo}</p>
            <p>
              {t.reCAPTCHA}{' '}
              <a href="#" className="text-[#E0AB6C] hover:underline">
                {t.learnMoreLink}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Render toasts (pile) */}
      {toasts.map(item => (
        <Toast key={item.id} item={item} />
      ))}
    </div>
  );
}
