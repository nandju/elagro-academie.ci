import { Button } from "@/components/ui/button"

export default function CTASection() {
  return (
    <section className="relative py-16 overflow-hidden">

      {/* Background images */}
      <div className="absolute inset-0">
        {/* Mobile background */}
        <div
          className="absolute inset-0 bg-cover bg-center md:hidden"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/backgroundCTA_mobile.png')",
          }}
        />

        {/* Tablet & Desktop background */}
        <div
          className="absolute inset-0 bg-cover bg-center hidden md:block"
          style={{
            backgroundImage: "url('/assets/images/backgrounds/backgroundCTA_desktop&tablette.png')",
          }}
        />

        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#E0AB6C]/90" /> */}
        <div className="absolute inset-0 bg-[#E0AB6C]/70" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#001A3B] mb-6">
          Prêt à développer vos compétences en agriculture ?
        </h2>

        <p className="text-lg text-[#001A3B]/80 mb-8 max-w-3xl mx-auto">
          Rejoignez notre communauté d'agriculteurs et bénéficiez d'un accès exclusif à nos formations et ressources.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="bg-[#001A3B] hover:bg-[#003d7a] text-[#E0AB6C] px-8 py-6 text-lg font-semibold">
            Commencer maintenant
          </Button>

          <Button
            variant="outline"
            className="border-[#001A3B] text-[#001A3B] hover:bg-[#001A3B]/60 hover:text-[#E0AB6C] px-8 py-6 text-lg font-semibold"
          >
            Nous contacter
          </Button>
        </div>
      </div>
    </section>
  )
}
