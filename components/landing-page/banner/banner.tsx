

export default function BannerLandingPage() {
    return (
      <section className="w-full bg-[#001A3B] py-3 sm:py-4 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white text-xs sm:text-sm md:text-base font-medium">
            Découvrez nos formations exceptionnelles en élevage et agriculture{' '}
            <span className="inline-block">
              <a 
                href="#contact" 
                className="text-[#E0AB6C] hover:text-[#E0AB6C]/80 underline underline-offset-4 transition-colors duration-200 font-semibold"
              >
                En savoir plus
              </a>
            </span>
          </p>
        </div>
      </section>
    );
  }