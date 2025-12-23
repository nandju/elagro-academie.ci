import { Star } from "lucide-react";


export default function TestimonialsSection(){
    return(
              <section className="py-16 bg-[#F9F9F9]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#001A3B] mb-12">Témoignages d'Éleveurs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Jean Koffi",
                role: "Éleveur de volailles",
                content: "Grâce à la formation en aviculture, j'ai pu augmenter ma production de 60% en un an. Les techniques apprises sont vraiment adaptées à notre contexte local.",
                initials: "JK"
              },
              {
                name: "Aïssatou Diop",
                role: "Éleveuse de bovins",
                content: "Les conseils en alimentation animale ont révolutionné mon élevage. Je recommande vivement ces formations à tous les éleveurs sérieux.",
                initials: "AD"
              },
              {
                name: "Mamadou Sow",
                role: "Apiculteur",
                content: "Formation complète et formateurs à l'écoute. J'ai pu développer mon activité d'apiculture de manière professionnelle.",
                initials: "MS"
              }
            ].map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg border-l-4 border-[#E0AB6C] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#E0AB6C] text-[#001A3B] font-bold flex items-center justify-center mr-4 text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#001A3B]">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#E0AB6C] text-[#E0AB6C]" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}