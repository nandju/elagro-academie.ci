import { Button } from "@/components/ui/button";


export default function SectorsSection(){
    return(
              <section className="py-16 bg-white">
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
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border-2 border-[#E0AB6C] hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{livestock.icon}</div>
                <h3 className="text-xl font-bold text-[#001A3B] mb-2">{livestock.title}</h3>
                <p className="text-gray-700 mb-4">{livestock.description}</p>
                <Button 
                  variant="ghost" 
                  className="text-[#E0AB6C] hover:text-[#d19b5c] hover:bg-[#E0AB6C]/10 font-semibold"
                >
                  En savoir plus →
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}