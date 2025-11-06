import HeroLandingPage from "@/components/landing-page/hero/hero-section" 
import TopCategories from "@/components/landing-page/categories/top-categories"
import StudentsAreViewing from "@/components/landing-page/popular/students-are-viewing"
import DualCtas from "@/components/landing-page/ctas/dual-ctas"
import PartnersStrip from "@/components/landing-page/partners/partners-strip"
import FeaturesLandingPage from "@/components/landing-page/features-landing/features"
import SupportLandingPage from "@/components/landing-page/support/support"
import TestimonialsLandingPage from "@/components/landing-page/testimonials/testimonials"
import FooterLandingPage from "@/components/landing-page/footer/footer"

export default function LandingPage() {
  return (
    <main className="relative">
      <HeroLandingPage />
      <FeaturesLandingPage />
      <TopCategories />
      <StudentsAreViewing />
      <SupportLandingPage />
      <TestimonialsLandingPage />
      <DualCtas />
      <PartnersStrip />
    </main>
  )
}


