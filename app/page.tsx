import HeroLandingPage from "@/components/landing-page/hero/hero-section" 
import TopCategories from "@/components/landing-page/categories/top-categories"
import StudentsAreViewing from "@/components/landing-page/popular/students-are-viewing"
import DualCtas from "@/components/landing-page/ctas/dual-ctas"
import PartnersStrip from "@/components/landing-page/partners/partners-strip"
import FeaturesLandingPage from "@/components/landing-page/features-landing/features"
import SupportLandingPage from "@/components/landing-page/support/support"
import TestimonialsLandingPage from "@/components/landing-page/testimonials/testimonials"
import FooterLandingPage from "@/components/landing-page/footer/footer"
import FeaturedCourses from "@/components/landing-page/featured-courses/featured-courses"
import Statistics from "@/components/landing-page/statistics/statistics"
import TestimonialsLandingPagev2 from "@/components/landing-page/testimonials/testimonialsv2"


export default function Home() {
  return (
    <main className="relative">
      <HeroLandingPage />
      {/* <FeaturesLandingPage /> */}
      <FeaturedCourses />
      <FeaturesLandingPage />
      {/* <TopCategories /> */}
      <StudentsAreViewing />
      <TopCategories />
      <TestimonialsLandingPagev2 />
      <Statistics />
      {/* <DualCtas /> */}
      {/* <SupportLandingPage /> */}
      <PartnersStrip />
    </main>
  )
}
