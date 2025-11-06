"use client"

const partners = [
  { 
    name: "Harvard University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/200px-Harvard_University_coat_of_arms.svg.png"
  },
  { 
    name: "Stanford University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Seal_of_Leland_Stanford_Junior_University.svg/200px-Seal_of_Leland_Stanford_Junior_University.svg.png"
  },
  { 
    name: "MIT", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/MIT_logo.svg/200px-MIT_logo.svg.png"
  },
  { 
    name: "Yale University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Yale_University_Shield_1.svg/200px-Yale_University_Shield_1.svg.png"
  },
  { 
    name: "Oxford University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Oxford-University-Circlet.svg/200px-Oxford-University-Circlet.svg.png"
  },
  { 
    name: "Cambridge University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Coat_of_Arms_of_the_University_of_Cambridge.svg/330px-Coat_of_Arms_of_the_University_of_Cambridge.svg.png"
  },
  { 
    name: "Princeton University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Princeton_seal.svg/200px-Princeton_seal.svg.png"
  },
  { 
    name: "Columbia University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Columbia_coat_of_arms_no_crest.svg/330px-Columbia_coat_of_arms_no_crest.svg.png"
  },
  { 
    name: "University of Chicago", 
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/7/79/University_of_Chicago_shield.svg/225px-University_of_Chicago_shield.svg.png"
  },
  { 
    name: "Cornell University", 
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Cornell_University_seal.svg/200px-Cornell_University_seal.svg.png"
  },
  { 
    name: "Duke University", 
    image: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ce/Duke_University_seal.svg/270px-Duke_University_seal.svg.png"
  },
]

export default function PartnersStrip() {
  return (
    <section className="w-full bg-white py-12 md:py-16 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          {/* Left Content */}
          <div className="md:w-72 flex-shrink-0">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#001A3B] mb-4">
              Avec Qui<br />Apprendrez-Vous ?
            </h2>
            <p className="text-sm text-gray-600 mb-6 leading-relaxed">
              Découvrez nos partenaires et formateurs experts qui partagent leur savoir-faire en élevage et agriculture.
            </p>
            <a 
              href="#" 
              className="text-[#001A3B] hover:text-[#E0AB6C] text-sm font-semibold inline-flex items-center gap-1 transition-colors"
            >
              Voir tous les partenaires
              <span className="text-xs">→</span>
            </a>
          </div>

          {/* Right - Partners Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 items-center">
              {partners.map((partner, i) => (
                <div 
                  key={i} 
                  className="flex items-center justify-center group cursor-pointer"
                  title={partner.name}
                >
                  <div className="relative w-16 h-16 rounded-xl bg-white shadow-md border border-gray-100 flex items-center justify-center transition-all hover:shadow-lg hover:scale-105 p-2 overflow-hidden">
                    <img 
                      src={partner.image} 
                      alt={partner.name}
                      className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}