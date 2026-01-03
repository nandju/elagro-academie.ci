import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section
      className="
        relative
        py-16
        bg-[url('/assets/images/backgrounds/background_elevageCTA_mobile.png')]
        md:bg-[url('/assets/images/backgrounds/background_elevageCTA_desktop&tablette.png')]
        bg-cover
        bg-center
        bg-no-repeat
      "
    >
      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-[#E0AB6C]/85" /> */}
      <div className="absolute inset-0 bg-[#E0AB6C]/70" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001A3B] mb-6">
          Prêt à développer votre élevage ?
        </h2>

        <p className="text-lg text-[#001A3B]/80 mb-8 max-w-3xl mx-auto">
          Rejoignez notre réseau d'éleveurs professionnels et accédez à des formations de qualité, des conseils d'experts et un accompagnement personnalisé.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#001A3B] hover:bg-[#003d7a] text-[#E0AB6C] px-8 py-6 text-lg font-semibold">
            S'inscrire maintenant
          </Button>

          <Button
            variant="outline"
            className="border-[#001A3B] text-[#001A3B] hover:bg-[#001A3B]/60 hover:text-[#E0AB6C] px-8 py-6 text-lg font-semibold"
          >
            Demander un conseil
          </Button>
        </div>
      </div>
    </section>
  );
}
