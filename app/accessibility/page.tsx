export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-white py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold text-[#001A3B] mb-8">Accessibilité</h1>
        
        <div className="prose max-w-none">
          <p className="text-gray-600 mb-6">
            Dernière mise à jour : 14 décembre 2024
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Notre engagement en matière d'accessibilité</h2>
            <p className="text-gray-700 mb-4">
              Chez Elagro Academy, nous nous engageons à rendre notre site web accessible à tous les utilisateurs, y compris les personnes en situation de handicap. Nous nous efforçons continuellement d'améliorer l'accessibilité de notre site pour offrir une expérience utilisateur optimale à tous nos visiteurs.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Fonctionnalités d'accessibilité</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#001A3B] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-[#E0AB6C] text-white rounded-full flex items-center justify-center mr-3">1</span>
                  Navigation au clavier
                </h3>
                <p className="text-gray-700">
                  Notre site est entièrement navigable au clavier. Utilisez les touches Tab, Maj+Tab et Entrée pour naviguer entre les différents éléments interactifs.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#001A3B] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-[#E0AB6C] text-white rounded-full flex items-center justify-center mr-3">2</span>
                  Contraste des couleurs
                </h3>
                <p className="text-gray-700">
                  Nous avons veillé à maintenir un contraste suffisant entre le texte et l'arrière-plan pour une meilleure lisibilité.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#001A3B] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-[#E0AB6C] text-white rounded-full flex items-center justify-center mr-3">3</span>
                  Structure sémantique
                </h3>
                <p className="text-gray-700">
                  Notre site utilise une structure HTML sémantique avec des en-têtes hiérarchisés (h1, h2, h3, etc.) pour une meilleure navigation avec les lecteurs d'écran.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#001A3B] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-[#E0AB6C] text-white rounded-full flex items-center justify-center mr-3">4</span>
                  Alternatives textuelles
                </h3>
                <p className="text-gray-700">
                  Toutes les images non décoratives sont accompagnées d'un texte alternatif descriptif.
                </p>
              </div>
              
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-xl font-semibold text-[#001A3B] mb-3 flex items-center">
                  <span className="w-8 h-8 bg-[#E0AB6C] text-white rounded-full flex items-center justify-center mr-3">5</span>
                  Taille du texte
                </h3>
                <p className="text-gray-700">
                  Vous pouvez agrandir le texte de notre site en utilisant les fonctionnalités de zoom de votre navigateur (Ctrl/Cmd + ou -).
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Navigation avec un lecteur d'écran</h2>
            <p className="text-gray-700 mb-4">
              Notre site est compatible avec les lecteurs d'écran courants tels que JAWS, NVDA, VoiceOver et TalkBack. Nous avons veillé à ce que :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Tous les éléments interactifs soient correctement étiquetés</li>
              <li>Les formulaires contiennent des étiquettes descriptives</li>
              <li>Les messages d'erreur soient clairs et explicites</li>
              <li>La navigation soit logique et prévisible</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Améliorations continues</h2>
            <p className="text-gray-700 mb-4">
              Nous nous engageons à améliorer continuellement l'accessibilité de notre site. Nous effectuons régulièrement des tests et des audits pour identifier et corriger les problèmes potentiels.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Signaler un problème d'accessibilité</h2>
            <p className="text-gray-700 mb-4">
              Si vous rencontrez des difficultés pour accéder à certaines parties de notre site, n'hésitez pas à nous le signaler. Votre retour nous est précieux pour améliorer l'expérience de tous nos utilisateurs.
            </p>
            <p className="text-gray-700 mb-4">
              Vous pouvez nous contacter par :
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Email : accessibilite@elagro-academy.ci</li>
              <li>Téléphone : +225 XX XX XX XX</li>
              <li>Formulaire de contact : <a href="/contact" className="text-[#E0AB6C] hover:underline">Page de contact</a></li>
            </ul>
            <p className="text-gray-700">
              Nous nous engageons à vous répondre dans les plus brefs délais.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#001A3B] mb-4">Standards et conformité</h2>
            <p className="text-gray-700 mb-4">
              Notre site s'efforce de respecter les directives d'accessibilité pour le contenu web (WCAG) 2.1 de niveau AA. Ces directives expliquent comment rendre le contenu web plus accessible aux personnes en situation de handicap.
            </p>
            <p className="text-gray-700">
              Si vous avez des suggestions pour améliorer l'accessibilité de notre site, n'hésitez pas à nous contacter.
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
