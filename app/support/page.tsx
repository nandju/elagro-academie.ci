import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-24">
        {/* Image pour mobile */}
        <div 
          className="md:hidden absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/background_support_mobile.png')"
          }}
        />
        
        {/* Image pour desktop */}
        <div 
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/background_support_desktop&tablette.png')"
          }}
        />
        
        {/* Overlay avec les codes couleurs */}
        <div className="absolute inset-0 bg-[#001A3B]/80" />
        
        <div className="relative container mx-auto px-4 text-center z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Centre d'Aide</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Trouvez des réponses à vos questions ou contactez notre équipe de support
          </p>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Rechercher dans l'aide..."
              className="pl-10 py-6 text-base border-2 border-gray-200 focus:border-[#E0AB6C] focus-visible:ring-0"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#001A3B] mb-8 text-center">Questions fréquentes</h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {[
              {
                question: "Comment créer un compte ?",
                answer: "Pour créer un compte, cliquez sur 'S'inscrire' en haut à droite de la page et suivez les instructions.",
                category: "Compte"
              },
              {
                question: "Comment accéder à mes formations achetées ?",
                answer: "Connectez-vous à votre compte et rendez-vous dans la section 'Mes formations' de votre tableau de bord.",
                category: "Formations"
              },
              {
                question: "Quels sont les modes de paiement acceptés ?",
                answer: "Nous acceptons les cartes de crédit/débit (Visa, Mastercard) et les paiements mobiles (MTN Mobile Money, Orange Money).",
                category: "Paiement"
              },
              {
                question: "Comment réinitialiser mon mot de passe ?",
                answer: "Cliquez sur 'Mot de passe oublié' sur la page de connexion et suivez les instructions envoyées à votre adresse email.",
                category: "Compte"
              },
              {
                question: "Puis-je obtenir un remboursement ?",
                answer: "Oui, vous pouvez demander un remboursement dans les 14 jours suivant votre achat, à condition de ne pas avoir complété plus de 30% de la formation.",
                category: "Paiement"
              },
              {
                question: "Comment contacter le support technique ?",
                answer: "Vous pouvez nous contacter via le formulaire ci-dessous ou à l'adresse support@elagro-academy.ci. Notre équipe vous répondra dans les 24-48 heures.",
                category: "Support"
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <details className="group">
                  <summary className="flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-[#001A3B] hover:text-[#E0AB6C] transition-colors">{item.question}</span>
                    <span className="text-[#E0AB6C] group-open:rotate-180 transition-transform">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </summary>
                  <div className="text-gray-600 mt-2 pl-2">
                    <p>{item.answer}</p>
                    <span className="inline-block mt-2 text-sm text-[#E0AB6C] bg-[#E0AB6C]/10 px-2 py-1 rounded">
                      {item.category}
                    </span>
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-[#001A3B] mb-6">Contactez notre équipe</h2>
            <p className="text-gray-600 mb-6">
              Vous n'avez pas trouvé de réponse à votre question ? Notre équipe est là pour vous aider.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <Input type="text" id="name" className="w-full" placeholder="Votre nom" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" id="email" className="w-full" placeholder="votre@email.com" />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Sujet</label>
                <select 
                  id="subject" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="technical">Problème technique</option>
                  <option value="billing">Facturation et paiement</option>
                  <option value="course">Question sur un cours</option>
                  <option value="account">Problème de compte</option>
                  <option value="other">Autre</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message" 
                  rows={5} 
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Décrivez votre demande en détail..."
                ></textarea>
              </div>
              
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="h-4 w-4 text-[#E0AB6C] focus:ring-[#E0AB6C] border-gray-300 rounded" />
                <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                  J'accepte la politique de confidentialité et les conditions d'utilisation
                </label>
              </div>
              
              <div className="pt-2">
                <Button type="submit" className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6">
                  Envoyer la demande
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#001A3B] mb-8">Autres ressources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Tutoriels vidéo",
                description: "Découvrez nos guides en vidéo pour une prise en main facile de la plateforme.",
                icon: "🎥"
              },
              {
                title: "Documentation",
                description: "Consultez notre documentation complète pour toutes les fonctionnalités.",
                icon: "📚"
              },
              {
                title: "Communauté",
                description: "Rejoignez notre communauté d'apprenants pour échanger et s'entraider.",
                icon: "👥"
              }
            ].map((item, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-[#001A3B] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
}
