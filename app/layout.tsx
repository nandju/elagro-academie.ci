import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { TranslationProvider } from "@/lib/translation-context";
import PageWrapper from "@/components/loader-page/page-wrapper";
import BannerLandingPage from "@/components/landing-page/banner/banner";
import HeaderLandingPage from "@/components/landing-page/header/header";
import ElagroFooter from "@/components/landing-page/footer/footer";
// import Footer from "@/components/footer";
// import Navbar from "@/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const altone = localFont({
//   src: [
//     {
//       path: "../public/fonts/Altone-Regular.ttf",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Altone-SemiBold.ttf",
//       weight: "600",
//       style: "normal",
//     },
//     {
//       path: "../public/fonts/Altone-Bold.ttf",
//       weight: "700",
//       style: "normal",
//     },
//   ],
//   variable: "--font-altone", // optionnel si tu veux une variable CSS
// });

const poppins = Poppins({
  variable: "--poppins",
  subsets: ["latin"],
  weight: ["100" , "200" , "300" , "400" , "500" , "600" , "700" , "800" , "900"],
  
});

export const metadata: Metadata = {
  title: "ELAGRO ACADEMY | Formation et Conseil en Élevage",
  description:
    "Plateforme numérique dédiée à la formation, au conseil et à la certification dans le domaine de l’élevage. Découvrez aussi les bonnes pratiques agricoles liées à la production d’aliments pour animaux.",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <TranslationProvider>
          <div className="max-w-screen-2xl mx-auto" style={{ fontFamily: 'var(--poppins), system-ui, sans-serif' }}>
          <PageWrapper>
              {/* <Navbar /> */}
                <BannerLandingPage />
                <HeaderLandingPage />
               {children}
                <ElagroFooter />
               {/* <Footer /> */}
               <Toaster />
          </PageWrapper>
          </div>
        </TranslationProvider>
      </body>
    </html>
  );
}
