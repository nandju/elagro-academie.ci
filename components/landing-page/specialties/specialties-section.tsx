"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, X } from "lucide-react"
import { useTranslation } from "@/lib/translation-context"

interface Specialty {
  id: number
  title: {
    en: string
    fr: string
  }
  description: {
    en: string
    fr: string
  }
  image: string
  tags: {
    en: string[]
    fr: string[]
  }
  level: string
  duration: string
}

const specialties: Specialty[] = [
  {
    id: 1,
    title: { en: "Poultry Farming", fr: "Élevage de Volaille" },
    description: {
      en: "Learn how to manage layers, broilers, quail, and hatcheries efficiently for health and productivity.",
      fr: "Apprenez à gérer les poules pondeuses, poulets de chair, cailles et couvoirs de manière optimale pour la santé et la productivité.",
    },
    image: "/assets/images/illustrations/page-accueil/volaille.png",
    tags: { en: ["Beginner", "Practical", "Animal Health"], fr: ["Débutant", "Pratique", "Santé Animale"] },
    level: "Tous Niveaux",
    duration: "6 semaines",
  },
  {
    id: 2,
    title: { en: "Pig Farming", fr: "Élevage de Porc" },
    description: {
      en: "Master pig breeding, nutrition, housing, and health management for sustainable production.",
      fr: "Maîtrisez l'élevage de porc, la nutrition, l'habitat et la gestion sanitaire pour une production durable.",
    },
    image: "/assets/images/illustrations/page-accueil/porc.png",
    tags: { en: ["Intermediate", "Nutrition", "Animal Care"], fr: ["Intermédiaire", "Nutrition", "Soins Animaux"] },
    level: "Intermédiaire",
    duration: "8 semaines",
  },
  {
    id: 3,
    title: { en: "Rabbit Farming", fr: "Élevage de Lapin" },
    description: {
      en: "Learn efficient rabbit breeding, feeding, and health practices for profitable production.",
      fr: "Apprenez les techniques d'élevage, d'alimentation et de santé des lapins pour une production rentable.",
    },
    image: "/assets/images/illustrations/page-accueil/lapin.png",
    tags: { en: ["Beginner", "Practical"], fr: ["Débutant", "Pratique"] },
    level: "Débutant",
    duration: "5 semaines",
  },
  {
    id: 4,
    title: { en: "Animal Feed & Crops", fr: "Alimentation Animale et Cultures" },
    description: {
      en: "Understand how to grow and process crops to produce healthy feed for livestock.",
      fr: "Comprenez comment cultiver et transformer des cultures pour produire une alimentation saine pour le bétail.",
    },
    image: "/assets/images/illustrations/page-accueil/culture.png",
    tags: { en: ["All Levels", "Practical"], fr: ["Tous Niveaux", "Pratique"] },
    level: "Tous Niveaux",
    duration: "7 semaines",
  },
  {
    id: 5,
    title: { en: "Livestock Marketing", fr: "Commercialisation du Bétail" },
    description: {
      en: "Learn strategies for selling livestock and animal products, pricing, and accessing local and international markets.",
      fr: "Apprenez les stratégies de vente de bétail et de produits animaux, fixation des prix et accès aux marchés locaux et internationaux.",
    },
    image: "/assets/images/illustrations/page-accueil/vente.png",
    tags: { en: ["Intermediate", "Business"], fr: ["Intermédiaire", "Affaires"] },
    level: "Intermédiaire",
    duration: "6 semaines",
  },
  {
    id: 6,
    title: { en: "Aquaculture & Fish Farming", fr: "Pisciculture et Élevage de Poisson" },
    description: {
      en: "Master fish farming techniques, water quality management, and sustainable practices for profitable aquaculture.",
      fr: "Maîtrisez les techniques d'élevage de poisson, la gestion de la qualité de l'eau et les pratiques durables pour une pisciculture rentable.",
    },
    image: "/assets/images/illustrations/page-accueil/poisson.png",
    tags: { en: ["Intermediate", "Sustainability"], fr: ["Intermédiaire", "Durabilité"] },
    level: "Intermédiaire",
    duration: "8 semaines",
  },
  {
    id: 7,
    title: { en: "Ruminant Farming", fr: "Élevage de Ruminants" },
    description: {
      en: "Learn to manage cattle, sheep, and goats, covering breeding, nutrition, and health management for sustainable herding.",
      fr: "Apprenez à gérer les bovins, moutons et chèvres, incluant l'élevage, la nutrition et la santé pour un élevage durable.",
    },
    image: "/assets/images/illustrations/page-accueil/ruminant.png",
    tags: { en: ["Advanced", "Animal Health"], fr: ["Avancé", "Santé Animale"] },
    level: "Avancé",
    duration: "10 semaines",
  },
  {
    id: 8,
    title: { en: "Organic & Bio Markets", fr: "Marchés Bio et Écologiques" },
    description: {
      en: "Discover how to produce, certify, and sell organic livestock products, meeting quality standards and market demand.",
      fr: "Découvrez comment produire, certifier et vendre des produits animaux bio, respectant les normes de qualité et la demande du marché.",
    },
    image: "/assets/images/illustrations/page-accueil/marche-bio.png",
    tags: { en: ["All Levels", "Certification"], fr: ["Tous Niveaux", "Certification"] },
    level: "Tous Niveaux",
    duration: "6 semaines",
  },
  {
    id: 9,
    title: { en: "Agribusiness & Enterprise", fr: "Entreprise Agricole et Élevage" },
    description: {
      en: "Learn business planning, financial management, and entrepreneurship skills to run profitable livestock enterprises.",
      fr: "Apprenez la planification d'entreprise, la gestion financière et l'esprit entrepreneurial pour gérer des élevages rentables.",
    },
    image: "/assets/images/illustrations/page-accueil/entreprise.png",
    tags: { en: ["Advanced", "Business"], fr: ["Avancé", "Affaires"] },
    level: "Avancé",
    duration: "9 semaines",
  },
]

export function SpecialtiesSection() {
  const { language, t } = useTranslation()
  const [selectedSpecialty, setSelectedSpecialty] = useState<Specialty | null>(null)

  return (
    <>
      <section id="specialties" className="relative bg-background py-16 md:py-24 lg:py-28">
        <div className="container px-4 md:px-8 lg:px-16">
          <div className="mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-3">
              {t.specialtiesTitle}
            </h2>
            <p className="text-base md:text-lg text-[#001A3B]/70 max-w-2xl">
              {t.specialtiesSubtitle}
            </p>
          </div>

          {/* Horizontal scroll container */}
          <div className="relative -mx-4 md:-mx-8">
            <div className="overflow-x-auto scrollbar-hide px-4 md:px-8">
              <div className="flex gap-4 md:gap-5 pb-6">
                {specialties.map((specialty) => (
                  <button
                    key={specialty.id}
                    onClick={() => setSelectedSpecialty(specialty)}
                    className="group relative flex-shrink-0 w-[260px] md:w-[340px] lg:w-[360px] h-[240px] md:h-[320px] lg:h-[340px] rounded-2xl overflow-hidden transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#E0AB6C]/50 border-2 border-[#E0AB6C]/20 hover:border-[#E0AB6C] shadow-lg hover:shadow-2xl hover:shadow-[#E0AB6C]/20"
                  >
                    {/* Background image */}
                    <div className="absolute inset-0">
                      <img
                        src={specialty.image || "/placeholder.svg"}
                        alt={specialty.title[language]}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#001A3B]/95 via-[#001A3B]/60 to-transparent" />
                    </div>

                    {/* Number overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[140px] md:text-[200px] lg:text-[220px] font-black text-[#E0AB6C]/10 leading-none select-none transition-all duration-300 group-hover:text-[#E0AB6C]/20">
                        {/* {specialty.id} */}
                      </span>
                    </div>

                    {/* Title at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                      <h3 className="text-xl md:text-2xl font-bold text-[#FFFFFF] text-balance mb-2 transition-colors duration-300 group-hover:text-[#E0AB6C]">
                        {/* {specialty.title[language]} */}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-[#E0AB6C] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>{t.learnMore}</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <Dialog open={!!selectedSpecialty} onOpenChange={() => setSelectedSpecialty(null)}>
        <DialogContent className="max-w-4xl p-0  border-[#E0AB6C]/30 overflow-hidden rounded-2xl">
        {/* <DialogContent className="max-w-4xl p-0 bg-[#001A3B]/98 backdrop-blur-xl border-[#E0AB6C]/30 overflow-hidden rounded-2xl"> */}
          {selectedSpecialty && (
            <div className="relative">
              {/* Close button */}
              <button
                onClick={() => setSelectedSpecialty(null)}
                className="absolute top-2 right-2 z-10 p-2 rounded-full bg-[#001A3B] hover:bg-[#E0AB6C] border border-[#E0AB6C] transition-all duration-300 group"
                // className="absolute top-4 right-4 z-10 p-2 rounded-full bg-[#001A3B]/80 hover:bg-[#E0AB6C] border border-[#E0AB6C]/30 transition-all duration-300 group"
              >
                <X className="w-5 h-5 text-[#E0AB6C] group-hover:text-[#001A3B]" />
              </button>

              {/* Hero image */}
              <div className="relative h-[280px] md:h-[380px] overflow-hidden">
                <img
                  src={selectedSpecialty.image || "/placeholder.svg"}
                  alt={selectedSpecialty.title[language]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001A3B] via-[#001A3B]/70 to-transparent" />

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#FFFFFF] mb-4 md:mb-6 text-balance">
                    {/* {selectedSpecialty.title[language]} */}
                  </h2>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <Badge variant="secondary" className="bg-[#E0AB6C] text-[#001A3B] font-semibold px-3 py-1 text-sm">
                      {selectedSpecialty.duration}
                    </Badge>
                    <Badge variant="secondary" className="bg-[#E0AB6C] text-[#001A3B] font-semibold px-3 py-1 text-sm">
                      {selectedSpecialty.level}
                    </Badge>
                    {selectedSpecialty.tags[language].map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-[#E0AB6C]/50 text-[#FFFFFF] bg-[#001A3B]/60 backdrop-blur-sm px-3 py-1 text-sm">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-10 bg-[#001A3B]/98 backdrop-blur-xl overflow-hidden">
                <p className="text-base md:text-lg text-[#FFFFFF]/80 leading-relaxed mb-8">
                  {selectedSpecialty.description[language]}
                </p>

                <a href="/auth/register">
                  <Button size="lg" className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-8 shadow-lg hover:shadow-xl transition-all duration-300 group">
                    {t.startTraining}
                    <ChevronRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}