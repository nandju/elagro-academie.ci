"use client"

import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/translation-context"

const baseItems = [
  { labelFr: "Élevage de Volaille", labelEn: "Poultry Farming", labelEs: "Avicultura", icon: "🐔" },
  { labelFr: "Élevage Porcin", labelEn: "Pig Farming", labelEs: "Porcicultura", icon: "🐖" },
  { labelFr: "Élevage de Ruminants", labelEn: "Ruminant Farming", labelEs: "Ganadería", icon: "🐄" },
  { labelFr: "Aquaculture", labelEn: "Aquaculture", labelEs: "Acuicultura", icon: "🐟" },
  { labelFr: "Cuniculture", labelEn: "Rabbit Farming", labelEs: "Cunicultura", icon: "🐇" },
  { labelFr: "Culture Agricole", labelEn: "Crop Farming", labelEs: "Agricultura", icon: "🌾" },
  { labelFr: "Nutrition Animale", labelEn: "Animal Nutrition", labelEs: "Nutrición Animal", icon: "🌱" },
  { labelFr: "Gestion de Ferme", labelEn: "Farm Management", labelEs: "Gestión de Granja", icon: "🏢" },
  { labelFr: "Santé Animale", labelEn: "Animal Health", labelEs: "Salud Animal", icon: "💉" },
  { labelFr: "Agriculture Bio", labelEn: "Organic Farming", labelEs: "Agricultura Orgánica", icon: "🌿" },
  { labelFr: "Production Fourragère", labelEn: "Forage Production", labelEs: "Producción de Forraje", icon: "🌾" },
  { labelFr: "Conseil Agricole", labelEn: "Agricultural Consulting", labelEs: "Consultoría Agrícola", icon: "🎓" },
]

export default function TopCategories() {
  const { language } = useTranslation()

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <h2 className="text-xl md:text-2xl font-semibold text-[#001A3B] mb-6">Catégories Populaires</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {baseItems.map((item, idx) => {
            const label = language === "fr" ? item.labelFr : language === "es" ? item.labelEs : item.labelEn
            return (
              <div
                key={idx}
                className={cn(
                  "flex items-center gap-3 rounded-lg border border-[#E0AB6C]/30 bg-[#001A3B]/5 px-4 py-3 transition-colors",
                  "hover:bg-[#001A3B]/10"
                )}
              >
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white border border-[#E0AB6C]/30 text-sm">
                  {item.icon}
                </span>
                <span className="text-sm md:text-base text-[#001A3B]">{label}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}


