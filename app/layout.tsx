import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
// import localFont from "next/font/local";
import "./globals.css";
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
  title: "ELAGRO ACADEMY | Formation et Conseil Agricole en Ligne",
  description:
    "Plateforme numérique dédiée à la formation, au conseil et à la certification en agriculture et élevage durables. Accessible à tous les acteurs du monde agro-pastoral en Afrique.",
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
        <div className="font-poppins max-w-screen-2xl mx-auto ">
            {/* <Navbar /> */}
             {children}
             {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
