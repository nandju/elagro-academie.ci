import { Navbar } from "@/components/navbar"
import { useTranslation } from "@/lib/translation-context"

export default function ContactPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <div className="pt-32 pb-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-[#001A3B] mb-8">
            Contactez-nous
          </h1>
          <div className="bg-[#001A3B] rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Nous sommes là pour vous aider
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Avez-vous des questions sur nos formations ? Besoin d'aide pour choisir le bon programme ? 
              Notre équipe d'experts est à votre disposition.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-[#E0AB6C] mb-4">Informations de contact</h3>
                <div className="space-y-4 text-gray-300">
                  <p><strong>Email:</strong> contact@elagroacademy.com</p>
                  <p><strong>Téléphone:</strong> +225 XX XX XX XX</p>
                  <p><strong>Adresse:</strong> Abidjan, Côte d'Ivoire</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-[#E0AB6C] mb-4">Horaires d'ouverture</h3>
                <div className="space-y-2 text-gray-300">
                  <p>Lundi - Vendredi: 8h00 - 18h00</p>
                  <p>Samedi: 9h00 - 15h00</p>
                  <p>Dimanche: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
