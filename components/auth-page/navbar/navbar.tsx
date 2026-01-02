"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function NavbarAuth() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")

  const translations = {
    fr: {
      signIn: "Se connecter",
    },
    en: {
      signIn: "Sign In",
    },
  }

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


    </nav>
  )
}