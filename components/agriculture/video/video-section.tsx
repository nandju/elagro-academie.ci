import { Button } from "@/components/ui/button"

export default function VideoSection() {
  return (
    <section className="py-16 bg-[#001A3B]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#E0AB6C] mb-12">
          Démonstrations Vidéo
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Video */}
          <div className="aspect-video rounded-lg overflow-hidden bg-black">
            <video
              src="/assets/videos/video_agriculture.mp4"
              className="w-full h-full object-cover"
              autoPlay
              loop
              controls
              // muted={false}
              muted
            />
          </div>

          {/* Text */}
          <div className="text-white">
            <h3 className="text-2xl font-bold text-[#E0AB6C] mb-4">
              Techniques de plantation optimisées
            </h3>

            <p className="text-gray-200 mb-6">
              Apprenez les techniques de plantation qui ont permis à nos agriculteurs
              d'augmenter leurs rendements de plus de 40% en une seule saison.
            </p>

            <div className="space-y-4">
              {[
                "Préparation du sol optimale",
                "Choix des semences adaptées",
                "Techniques d'irrigation efficaces",
                "Gestion intégrée des nuisibles",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-6 w-6 text-[#E0AB6C] mr-3 font-bold text-lg">✓</div>
                  <p>{item}</p>
                </div>
              ))}
            </div>

            <Button className="mt-6 bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold px-6">
              Voir plus de vidéos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
