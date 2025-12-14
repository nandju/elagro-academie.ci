import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ElevagePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1a3a5f] to-[#001A3B] text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Formations en Élevage</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">Développez votre expertise en élevage avec nos formations professionnelles et nos conseils d'experts</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6 text-lg">
                <Link href="/courses?category=elevage">Découvrir les formations</Link>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Livestock Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Nos Filières d'Élevage</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Élevage Avicole",
                description: "Techniques modernes d'élevage de volailles pour une production optimale et durable.",
                icon: "🐔"
              },
              {
                title: "Bovins Laitiers",
                description: "Gestion optimale des troupeaux laitiers et techniques de production laitière.",
                icon: "🐄"
              },
              {
                title: "Élevage Porcin",
                description: "Méthodes d'élevage porcin moderne et gestion sanitaire des porcheries.",
                icon: "🐖"
              },
              {
                title: "Apiculture",
                description: "Initiation à l'apiculture et techniques de production de miel de qualité.",
                icon: "🐝"
              },
              {
                title: "Élevage Ovin/Caprin",
                description: "Techniques d'élevage des moutons et chèvres pour la viande et le lait.",
                icon: "🐑"
              },
              {
                title: "Santé Animale",
                description: "Prévention et traitement des maladies courantes en élevage.",
                icon: "💉"
              }
            ].map((livestock, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{livestock.icon}</div>
                <h3 className="text-xl font-semibold text-[#001A3B] mb-2">{livestock.title}</h3>
                <p className="text-gray-600 mb-4">{livestock.description}</p>
                <Button variant="outline" className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10">
                  En savoir plus
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Témoignages d'Éleveurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean Koffi",
                role: "Éleveur de volailles",
                content: "Grâce à la formation en aviculture, j'ai pu augmenter ma production de 60% en un an. Les techniques apprises sont vraiment adaptées à notre contexte local.",
                image: "/placeholder-avatar.jpg"
              },
              {
                name: "Aïssatou Diop",
                role: "Éleveuse de bovins",
                content: "Les conseils en alimentation animale ont révolutionné mon élevage. Je recommande vivement ces formations à tous les éleveurs sérieux.",
                image: "/placeholder-avatar.jpg"
              },
              {
                name: "Mamadou Sow",
                role: "Apiculteur",
                content: "Formation complète et formateurs à l'écoute. J'ai pu développer mon activité d'apiculture de manière professionnelle.",
                image: "/placeholder-avatar.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4 flex items-center justify-center text-xl">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#001A3B]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Ressources Utiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#001A3B] mb-6">Guides Pratiques</h3>
              <div className="space-y-4">
                {[
                  "Guide complet de l'élevage de poulets de chair",
                  "Manuel de santé animale pour les éleveurs",
                  "Fiches techniques d'alimentation animale",
                  "Protocoles de biosécurité en élevage"
                ].map((item, index) => (
                  <div key={index} className="flex items-start p-4 bg-white rounded-lg shadow-sm hover:shadow transition-shadow">
                    <div className="text-[#E0AB6C] mr-3">📄</div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-6 border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10">
                Voir toutes les ressources
              </Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#001A3B] mb-6">Calendrier des Formations</h3>
              <div className="space-y-4">
                {[
                  { date: "15 Déc 2024", title: "Formation en santé animale", location: "Abidjan" },
                  { date: "05 Jan 2025", title: "Atelier sur l'alimentation des bovins", location: "Bouaké" },
                  { date: "20 Jan 2025", title: "Formation en aviculture moderne", location: "Yamoussoukro" },
                  { date: "10 Fév 2025", title: "Gestion économique d'un élevage", location: "En ligne" }
                ].map((event, index) => (
                  <div key={index} className="flex items-start p-4 border-b border-gray-100 last:border-0">
                    <div className="bg-[#E0AB6C]/10 text-[#E0AB6C] px-3 py-1 rounded-md text-sm font-medium mr-4">
                      {event.date}
                    </div>
                    <div>
                      <h4 className="font-medium text-[#001A3B]">{event.title}</h4>
                      <p className="text-sm text-gray-500">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="mt-6 w-full bg-[#E0AB6C] hover:bg-[#d19b5c] text-white">
                Voir tout le calendrier
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#001A3B] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prêt à développer votre élevage ?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Rejoignez notre réseau d'éleveurs professionnels et accédez à des formations de qualité, des conseils d'experts et un accompagnement personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-white px-8 py-6 text-lg">
              S'inscrire maintenant
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Demander un conseil
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
