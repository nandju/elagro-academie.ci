import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/landing-page/hero/hero-section" 

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <HeroSection />
    </main>
  )
}
