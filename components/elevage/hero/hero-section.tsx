import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="
        relative
        text-white
        py-20 md:py-32
        bg-[url('/assets/images/backgrounds/background_elevage_mobile.png')]
        md:bg-[url('/assets/images/backgrounds/background_elevage_desktop&tablette.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#001A3B]/70" />

      {/* Content */}
      <div className="relative container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Formations en Élevage
          </h1>

          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Développez votre expertise en élevage avec nos formations professionnelles et nos conseils d'experts
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold px-8 py-6 text-lg">
              Découvrir les formations
            </Button>

            <Button
              variant="outline"
              className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/60 hover:text-[#001A3B] px-8 py-6 text-lg font-semibold"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
