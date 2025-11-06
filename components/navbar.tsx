"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useTranslation } from "@/lib/translation-context"

export function Navbar() {
  const { language, setLanguage, t } = useTranslation()

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-12 lg:px-20">
      <div className="flex items-center">
        <div className="h-12 md:w-48 w-28 flex items-center justify-center">
          <Image
            src="/assets/images/logo.png"
            alt="ELAGRO ACADEMY logo"
            width={160}
            height={48}
            className="object-contain"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 border border-[#E0AB6C]/30 bg-[#001A3B]/10 backdrop-blur-sm hover:bg-[#001A3B]/20 text-[#FFFFFF]"
            >
              <Globe className="h-4 w-4 text-[#E0AB6C]" />
              <span className="font-medium md:block hidden">{language === "fr" ? "Français" : language === "en" ? "English" : "Español"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-[#001A3B]/95 backdrop-blur-sm border-[#E0AB6C]/30">
            <DropdownMenuItem 
              onClick={() => setLanguage("fr")} 
              className="cursor-pointer text-[#FFFFFF] hover:bg-[#E0AB6C]/20 focus:bg-[#E0AB6C]/20"
            >
              Français
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage("en")} 
              className="cursor-pointer text-[#FFFFFF] hover:bg-[#E0AB6C]/20 focus:bg-[#E0AB6C]/20"
            >
              English
            </DropdownMenuItem>
            <DropdownMenuItem 
              onClick={() => setLanguage("es")} 
              className="cursor-pointer text-[#FFFFFF] hover:bg-[#E0AB6C]/20 focus:bg-[#E0AB6C]/20"
            >
              Español
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Link href="/login">
          <Button size="sm" className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold px-6">
            {t.signIn}
          </Button>
        </Link>
      </div>
    </nav>
  )
}