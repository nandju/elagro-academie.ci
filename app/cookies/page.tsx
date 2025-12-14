'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false
  });
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà des préférences enregistrées
    const savedPreferences = localStorage.getItem('cookiePreferences');
    if (savedPreferences) {
      setCookiePreferences(JSON.parse(savedPreferences));
    } else {
      setShowBanner(true);
    }
  }, []);

  const handlePreferenceChange = (type: keyof typeof cookiePreferences) => {
    const newPreferences = {
      ...cookiePreferences,
      [type]: !cookiePreferences[type]
    };
    setCookiePreferences(newPreferences);
  };

  const savePreferences = () => {
    localStorage.setItem('cookiePreferences', JSON.stringify(cookiePreferences));
    setShowBanner(false);
    // Ici, vous pourriez également appeler une API pour enregistrer les préférences côté serveur
  };

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true
    };
    setCookiePreferences(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false
    };
    setCookiePreferences(onlyNecessary);
    localStorage.setItem('cookiePreferences', JSON.stringify(onlyNecessary));
    setShowBanner(false);
  };

  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-[#001A3B] mb-8">Gestion des cookies</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : 14 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Notre utilisation des cookies</h2>
            <p className="text-gray-700 mb-4">
              Nous utilisons des cookies pour améliorer votre expérience sur notre site. Vous pouvez personnaliser vos préférences ci-dessous.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Types de cookies</h2>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-[#001A3B]">Cookies nécessaires</h3>
                    <p className="text-sm text-gray-500">Toujours actifs</p>
                  </div>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      name="necessary" 
                      id="necessary" 
                      checked={true}
                      disabled
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label 
                      htmlFor="necessary" 
                      className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
                    ></label>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">Ces cookies sont essentiels pour le bon fonctionnement du site.</p>
              </div>
              
              {[
                {
                  id: 'analytics',
                  name: 'Cookies analytiques',
                  description: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site.',
                  checked: cookiePreferences.analytics
                },
                {
                  id: 'marketing',
                  name: 'Cookies marketing',
                  description: 'Utilisés pour suivre les visiteurs à travers les sites web pour afficher des publicités pertinentes.',
                  checked: cookiePreferences.marketing
                },
                {
                  id: 'preferences',
                  name: 'Préférences',
                  description: 'Permettent au site de se souvenir des choix que vous faites pour vous offrir une expérience personnalisée.',
                  checked: cookiePreferences.preferences
                }
              ].map((cookie) => (
                <div key={cookie.id} className="p-4 border-b border-gray-200 last:border-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#001A3B]">{cookie.name}</h3>
                      <p className="text-sm text-gray-600">{cookie.description}</p>
                    </div>
                    <div className="relative inline-block w-10 mr-2 align-middle select-none">
                      <input 
                        type="checkbox" 
                        name={cookie.id} 
                        id={cookie.id}
                        checked={cookie.checked}
                        onChange={() => handlePreferenceChange(cookie.id as keyof typeof cookiePreferences)}
                        className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                      />
                      <label 
                        htmlFor={cookie.id} 
                        className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer ${cookie.checked ? 'bg-[#E0AB6C]' : 'bg-gray-300'}`}
                      ></label>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={savePreferences}
                className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white"
              >
                Enregistrer les préférences
              </Button>
              <Button 
                variant="outline" 
                onClick={acceptAll}
                className="border-[#001A3B] text-[#001A3B] hover:bg-[#001A3B]/10"
              >
                Tout accepter
              </Button>
              <Button 
                variant="outline" 
                onClick={rejectAll}
                className="border-gray-300 text-gray-700 hover:bg-gray-100"
              >
                Tout refuser
              </Button>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Plus d'informations</h2>
            <p className="text-gray-700 mb-4">
              Pour plus d'informations sur notre utilisation des cookies, veuillez consulter notre <a href="/privacy" className="text-[#E0AB6C] hover:underline">Politique de confidentialité</a>.
            </p>
            <p className="text-gray-700">
              Vous pouvez modifier vos préférences à tout moment en revenant sur cette page.
            </p>
          </section>
        </div>
      </div>

      {/* Bandeau de consentement des cookies */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 p-4 z-50">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-gray-700">
                  Nous utilisons des cookies pour améliorer votre expérience sur notre site. En continuant à naviguer, vous acceptez notre utilisation des cookies conformément à notre <a href="/privacy" className="text-[#E0AB6C] hover:underline">Politique de confidentialité</a>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <Button 
                  onClick={acceptAll}
                  className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white whitespace-nowrap"
                >
                  Tout accepter
                </Button>
                <Button 
                  variant="outline" 
                  onClick={savePreferences}
                  className="border-[#001A3B] text-[#001A3B] hover:bg-[#001A3B]/10 whitespace-nowrap"
                >
                  Personnaliser
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
