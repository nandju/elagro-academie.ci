import HeroSection from "@/components/elevage/hero/hero-section";
import TestimonialsSection from "@/components/elevage/testimonials/testimonials-section";
import SectorsSection from "@/components/elevage/sectors/sectors-section";
import ResourcesSection from "@/components/elevage/resources/resources-section";
import CTASection from "@/components/elevage/cta/cta-section";


export default function ElevagePage() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <SectorsSection />
      <TestimonialsSection />
      <ResourcesSection />
      <CTASection />
    </main>
  )
}
