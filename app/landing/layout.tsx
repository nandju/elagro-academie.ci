// app/auth/layout.tsx
import BannerLandingPage from "@/components/landing-page/banner/banner";
import ElagroFooter from "@/components/landing-page/footer/footer";
import FooterLandingPage from "@/components/landing-page/footer/footer";
import HeaderLandingPage from "@/components/landing-page/header/header";
import React from "react";
import type { ReactNode } from "react";


export const metadata = {
  title: "ELAGRO ACADEMY — Landing Page",
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <BannerLandingPage />
      <HeaderLandingPage />
        {children}
        <ElagroFooter />
    </div>
  );
}
