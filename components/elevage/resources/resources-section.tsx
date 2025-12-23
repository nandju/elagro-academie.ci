import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, FileText } from "lucide-react";
import Link from "next/link";


export default function ResourcesSection(){
    return(
              <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Ressources Utiles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Guides Pratiques */}
            <div>
              <h3 className="text-2xl font-bold text-[#001A3B] mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-[#E0AB6C]" />
                Guides Pratiques
              </h3>
              <div className="space-y-4">
                {[
                  "Guide complet de l'élevage de poulets de chair",
                  "Manuel de santé animale pour les éleveurs",
                  "Fiches techniques d'alimentation animale",
                  "Protocoles de biosécurité en élevage"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start p-4 bg-white border-2 border-[#E0AB6C] rounded-lg hover:shadow-md transition-shadow cursor-pointer group"
                  >
                    <div className="text-2xl mr-3 group-hover:scale-110 transition-transform">📄</div>
                    <span className="text-gray-700 font-medium">{item}</span>
                    <ArrowRight className="w-4 h-4 text-[#E0AB6C] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
              <Button 
                variant="outline" 
                className="mt-6 border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10 font-semibold w-full"
              >
                Voir toutes les ressources
              </Button>
            </div>
            
            {/* Calendrier des Formations */}
            <div className="bg-[#001A3B] p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-[#E0AB6C] mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6" />
                Calendrier des Formations
              </h3>
              <div className="space-y-4">
                {[
                  { date: "15 Déc 2024", title: "Formation en santé animale", location: "Abidjan" },
                  { date: "05 Jan 2025", title: "Atelier sur l'alimentation des bovins", location: "Bouaké" },
                  { date: "20 Jan 2025", title: "Formation en aviculture moderne", location: "Yamoussoukro" },
                  { date: "10 Fév 2025", title: "Gestion économique d'un élevage", location: "En ligne" }
                ].map((event, index) => (
                  <div key={index} className="flex items-start p-4 border-b border-[#E0AB6C]/30 last:border-0">
                    <div className="bg-[#E0AB6C] text-[#001A3B] px-3 py-2 rounded-md text-xs font-bold mr-4 whitespace-nowrap">
                      {event.date}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{event.title}</h4>
                      <p className="text-sm text-gray-300">{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            <Link href="/elevage/calendar">
              <Button className="mt-6 w-full bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold">
                Voir tout le calendrier
              </Button>
            </Link>
            </div>
          </div>
        </div>
      </section>
    );
}