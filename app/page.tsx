import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/landing-page/hero/hero-section" 
import { SpecialtiesSection } from "@/components/landing-page/specialties/specialties-section"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection language="fr" />
    </main>
  )
}
