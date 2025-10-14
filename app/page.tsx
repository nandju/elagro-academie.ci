import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/landing-page/hero/hero-section" 
import { SpecialtiesSection } from "@/components/landing-page/specialties/specialties-section"
import ElagroFeaturesSection from "@/components/landing-page/features/features-section"
import ElagroFAQSection from "@/components/landing-page/faq/faq-section"
import ElagroFooterCTA from "@/components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
      <SpecialtiesSection />
      <ElagroFeaturesSection />
      <ElagroFAQSection />
      <ElagroFooterCTA />
    </main>
  )
}
