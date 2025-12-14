"use client"
import React, { useState, useEffect } from 'react';
import { ChevronRight, Globe, Loader2, CheckCircle2, AlertCircle, X, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';

interface ToastItem {
  id: number;
  type: "success" | "error";
  message: string;
}

export default function ElagroFooter() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [language, setLanguage] = useState('fr');
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const translations = {
    fr: {
      stayUpdated: "Restez à jour!",
      subscribe: "Abonnez-vous à notre newsletter pour rester informé des derniers cours, mises à jour, actualités et réductions.",
      emailPlaceholder: "Votre adresse email",
      subscribe_btn: "S'abonner",
      sending: "Envoi en cours...",
      success: "Inscription réussie!",
      error: "Une erreur est survenue. Veuillez réessayer.",
      invalidEmail: "Veuillez entrer une adresse email valide.",
      navigate: "Naviguer",
      company: "Entreprise",
      misc: "Divers",
      courses: "Cours",
      about: "À propos de nous",
      privacy: "Politique de confidentialité",
      browse: "Parcourir par catégorie",
      contact: "Contact & Support",
      faqs: "FAQs",
      allAccess: "Accès complet",
      wallOfLove: "Mur de l'amour",
      waitlist: "Liste d'attente",
      login: "Connexion",
      copyright: "© 2025 Elagro Academy. Tous droits réservés.",
      recaptcha: "Ce site est protégé par reCAPTCHA et la",
      privacy_link: "Politique de confidentialité",
    },
    en: {
      stayUpdated: "Stay Up-to-Date!",
      subscribe: "Subscribe to our Newsletter to stay up-to-date on latest courses, updates, news and discounts from us.",
      emailPlaceholder: "Email Address",
      subscribe_btn: "Join Now",
      sending: "Sending...",
      success: "Successfully subscribed!",
      error: "An error occurred. Please try again.",
      invalidEmail: "Please enter a valid email address.",
      navigate: "Navigate",
      company: "Company",
      misc: "Misc",
      courses: "Courses",
      about: "About Us",
      privacy: "Privacy Policy",
      browse: "Browse by Category",
      contact: "Contact & Support",
      faqs: "FAQs",
      allAccess: "All Access Pass",
      wallOfLove: "Wall of Love",
      waitlist: "Waitlist",
      login: "Login",
      copyright: "© 2025 Elagro Academy. All rights reserved.",
      recaptcha: "This site is protected by reCAPTCHA and the",
      privacy_link: "Privacy Policy",
    },
    es: {
      stayUpdated: "¡Manténgase actualizado!",
      subscribe: "Suscríbase a nuestro boletín para mantenerse actualizado sobre los últimos cursos, actualizaciones, noticias y descuentos.",
      emailPlaceholder: "Dirección de correo electrónico",
      subscribe_btn: "Únase ahora",
      sending: "Enviando...",
      success: "¡Suscripción exitosa!",
      error: "Ocurrió un error. Por favor, inténtelo de nuevo.",
      invalidEmail: "Por favor, ingrese una dirección de correo electrónico válida.",
      navigate: "Navegar",
      company: "Empresa",
      misc: "Varios",
      courses: "Cursos",
      about: "Sobre Nosotros",
      privacy: "Política de Privacidad",
      browse: "Explorar por Categoría",
      contact: "Contacto y Soporte",
      faqs: "Preguntas Frecuentes",
      allAccess: "Acceso Completo",
      wallOfLove: "Muro del Amor",
      waitlist: "Lista de Espera",
      login: "Iniciar sesión",
      copyright: "© 2025 Elagro Academy. Todos los derechos reservados.",
      recaptcha: "Este sitio está protegido por reCAPTCHA y la",
      privacy_link: "Política de Privacidad",
    }
  };

  const t = translations[language as keyof typeof translations];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const addToast = (type: "success" | "error", message: string) => {
    const id = Date.now() + Math.floor(Math.random() * 1000);
    setToasts(prev => [...prev, { id, type, message }]);
  };

  const removeToast = (id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  };

  function Toast({ item }: { item: ToastItem }) {
    useEffect(() => {
      const timer = setTimeout(() => removeToast(item.id), 5000);
      return () => clearTimeout(timer);
    }, [item.id]);

    const isSuccess = item.type === "success";

    return (
      <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-full duration-300">
        <div className="flex items-start gap-4 rounded-lg p-4 min-w-[320px] max-w-md shadow-xl bg-[#001A3B] border border-[#E0AB6C]/30">
          <span className="h-full w-1 rounded-full" style={{ backgroundColor: "#E0AB6C" }} />
          <div className="flex-shrink-0 mt-0.5">
            {isSuccess ? (
              <CheckCircle2 className="h-6 w-6" style={{ color: "#E0AB6C" }} />
            ) : (
              <AlertCircle className="h-6 w-6" style={{ color: "#E0AB6C" }} />
            )}
          </div>
          <p className="flex-1 text-sm font-medium text-white">
            {item.message}
          </p>
          <button
            onClick={() => removeToast(item.id)}
            className="flex-shrink-0 rounded-md p-1 transition-colors hover:bg-white/10"
          >
            <X className="h-4 w-4 text-white" />
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e?: React.MouseEvent<HTMLButtonElement>) => {
    e?.preventDefault();

    if (!validateEmail(email)) {
      addToast("error", t.invalidEmail);
      return;
    }

    setIsLoading(true);
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
      setEmail("");
    } catch (err) {
      console.error("Erreur EmailJS:", err);
      addToast("error", t.error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setToasts(prev => prev.filter(toast => toast.message !== t.sending));
      }, 1200);
    }
  };

  return (
    <footer className="bg-black text-white py-16">
      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 pb-16 border-b border-gray-800">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
  
            {/* Logo seul */}
            <div className="relative w-12 h-12 md:w-14 md:h-14">
              <Image
                src="/assets/images/logo_blanc&noir.png"
                alt="Logo Elagro Academy"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Description courte */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-xs">
              Formations et conseils pratiques en élevage et agriculture, adaptés aux
              réalités du terrain.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex gap-4 pt-2">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
            </div>

          </div>


          {/* Right - Newsletter */}
          <div className="bg-[#001A3B]/50 border border-[#E0AB6C]/20 rounded-lg p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-2">{t.stayUpdated}</h3>
            <p className="text-gray-300 text-sm mb-6">
              {t.subscribe}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.emailPlaceholder}
                disabled={isLoading}
                className="flex-1 bg-[#001A3B] border border-gray-600 rounded px-4 py-3 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#E0AB6C] focus:border-transparent disabled:opacity-50"
                onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading || !email}
                className="bg-[#E0AB6C] hover:bg-[#d49d5a] text-[#001A3B] font-bold px-6 py-3 rounded flex items-center justify-center gap-2 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span className="text-sm">{t.sending}</span>
                  </>
                ) : (
                  <>
                    <span className="text-sm">{t.subscribe_btn}</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Navigate */}
          <div>
            <h4 className="font-semibold mb-6 text-white">{t.navigate}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.courses}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.browse}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.allAccess}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.login}</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-6 text-white">{t.company}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.about}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.contact}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.wallOfLove}</a></li>
            </ul>
          </div>

          {/* Misc */}
          <div>
            <h4 className="font-semibold mb-6 text-white">{t.misc}</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.privacy}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.faqs}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#E0AB6C] transition-colors">{t.waitlist}</a></li>
            </ul>
          </div>

          {/* Language Selector */}
          <div>
            <h4 className="font-semibold mb-6 text-white">Language</h4>
            <button
              onClick={() => {
                const langs = ['fr', 'en', 'es'];
                const current = langs.indexOf(language);
                setLanguage(langs[(current + 1) % langs.length]);
              }}
              className="flex items-center gap-2 bg-[#001A3B] border border-gray-600 rounded px-4 py-2 text-white hover:border-[#E0AB6C] transition-colors text-sm w-full justify-center"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'fr' ? 'Français' : language === 'en' ? 'English' : 'Español'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>{t.copyright}</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#E0AB6C] transition-colors">{t.privacy}</a>
            <span className="text-gray-600">|</span>
            <p>{t.recaptcha} <a href="#" className="text-[#E0AB6C] hover:underline">{t.privacy_link}</a></p>
          </div>
        </div>
      </div>

      {/* Toasts */}
      {toasts.map(item => (
        <Toast key={item.id} item={item} />
      ))}
    </footer>
  );
}