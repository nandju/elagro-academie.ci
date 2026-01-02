"use client"

import { usePathname } from "next/navigation"
import BannerLandingPage from "@/components/landing-page/banner/banner"
import HeaderLandingPage from "@/components/landing-page/header/header"
import ElagroFooter from "@/components/landing-page/footer/footer"

export function LayoutConditionalWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  
  // Routes d'authentification où on ne veut pas afficher la navbar et le footer
  const isAuthRoute = pathname?.startsWith('/login') || 
                      pathname?.startsWith('/register') || 
                      pathname?.startsWith('/forgot-password')

  return (
    <>
      {!isAuthRoute && (
        <>
          <BannerLandingPage />
          <HeaderLandingPage />
        </>
      )}
      {children}
      {!isAuthRoute && <ElagroFooter />}
    </>
  )
}

