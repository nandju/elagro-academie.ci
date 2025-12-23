import ArticlesSection from "@/components/agriculture/articles/articles-section"
import CTASection from "@/components/agriculture/cta/cta-section"
import HeroSection from "@/components/agriculture/hero/hero-section"
import SectorsSection from "@/components/agriculture/sectors/sectors-section"
import VideoSection from "@/components/agriculture/video/video-section"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AgriculturePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <SectorsSection />
      <ArticlesSection />
      <VideoSection />
      <CTASection />
    </main>
  )
}