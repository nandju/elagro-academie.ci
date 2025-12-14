import React from "react"
import { Globe } from "@/components/ui/globe"
import { Button } from "@/components/ui/button"

export default function Statistics() {
  return (
    <section className="relative py-16 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl bg-[#001A3B] p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-sm font-semibold text-[#E0AB6C]">Statistiques</p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
                Notre impact en quelques chiffres
              </h2>
              <p className="mt-4 text-gray-300 max-w-xl">
                Nous aidons des milliers d'apprenants a maitriser des competences
                essentielles grace a des formations concues par des experts.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Button className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-6 py-3 rounded-lg shadow-md">
                  En savoir plus
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                {[
                  { value: "5,000+", label: "Apprenants" },
                  { value: "20+", label: "Formations avancees" },
                  { value: "7", label: "Formateurs Pro" },
                  { value: "4.9", label: "Note moyenne" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-3xl sm:text-4xl font-black text-[#E0AB6C]">
                      {s.value}
                    </div>
                    <div className="mt-1 text-sm text-gray-300">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="w-full p-6">
                {/* className="w-full max-w-sm rounded-2xl bg-gradient-to-br from-[#07142a] to-[#001A3B] p-6 shadow-2xl" */}
                <div className="relative aspect-square w-full">
                  <Globe />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
