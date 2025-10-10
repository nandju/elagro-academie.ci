"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"

export function Navbar() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  const translations = {
    fr: {
      signIn: "S'identifier",
    },
    en: {
      signIn: "Sign In",
    },
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 lg:px-20">
      <div className="flex items-center">
        <div className="h-12 w-48 rounded-md bg-gradient-to-r from-primary to-accent flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground tracking-tight">ELAGRO ACADEMY</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 border border-muted-foreground/30 bg-background/10 backdrop-blur-sm hover:bg-background/20 text-foreground"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{language === "fr" ? "Français" : "English"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background/95 backdrop-blur-sm">
            <DropdownMenuItem onClick={() => setLanguage("fr")} className="cursor-pointer">
              Français
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setLanguage("en")} className="cursor-pointer">
              English
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6">
          {translations[language].signIn}
        </Button>
      </div>
    </nav>
  )
}
