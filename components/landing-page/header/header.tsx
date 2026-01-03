"use client"

import { useState } from "react"
import { Menu, ShoppingCart, Search, X, ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HeaderLandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#001A3B]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <div className="relative w-24 h-20">
              <Image
                src="/assets/images/logo.png"
                alt="Logo Elagro Academy"
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">

              {/* Catégories Dropdown */}
              <div className="relative group">
                <button
                  className="flex items-center gap-1 text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C] transition-colors"
                >
                  Catégories
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Dropdown */}
                <div className="absolute left-0 mt-3 w-44 bg-white border border-[#001A3B]/10 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link
                    href="/agriculture"
                    className="block px-4 py-2.5 text-sm hover:bg-[#001A3B]/5"
                  >
                    🌱 Agriculture
                  </Link>
                  <Link
                    href="/elevage"
                    className="block px-4 py-2.5 text-sm hover:bg-[#001A3B]/5"
                  >
                    🐓 Élevage
                  </Link>
                </div>
              </div>

              <Link
                href="/courses"
                className="text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C]"
              >
                Formations
              </Link>

              <Link
                href="/communaute"
                className="text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C]"
              >
                Communauté
              </Link>
            </nav>


          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center gap-2 bg-[#001A3B]/5 rounded-lg px-4 py-2.5 flex-1 max-w-md border border-[#001A3B]/10">
            <Search className="w-4 h-4 text-[#001A3B]/60" />
            <input
              type="text"
              placeholder="Rechercher des cours..."
              className="bg-transparent outline-none text-sm flex-1 text-[#001A3B]"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Mobile Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Courses Link */}
            <Link
              href="/courses"
              className="relative p-2 text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg"
            >
              <ShoppingCart className="w-5 h-5" />
            </Link>

            {/* Auth Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              <Link
                href="/login"
                className="px-4 py-2 text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg"
              >
                Connexion
              </Link>

              <Link
                href="/register"
                className="px-4 py-2 text-sm font-semibold bg-[#001A3B] hover:bg-[#001A3B]/90 text-white rounded-lg shadow-sm"
              >
                S'inscrire
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-t border-[#001A3B]/10">
            <div className="flex items-center gap-2 bg-[#001A3B]/5 rounded-lg px-4 py-2.5">
              <Search className="w-4 h-4 text-[#001A3B]/60" />
              <input
                type="text"
                placeholder="Rechercher des cours..."
                className="bg-transparent outline-none text-sm flex-1"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-[#001A3B]/10 pt-4">

            <div className="px-4 text-sm font-semibold text-[#001A3B]/70">
              Catégories
            </div>

            <Link
              href="/agriculture"
              className="block px-6 py-2.5 text-sm hover:bg-[#001A3B]/5 rounded-lg"
            >
              🌱 Agriculture
            </Link>

            <Link
              href="/elevage"
              className="block px-6 py-2.5 text-sm hover:bg-[#001A3B]/5 rounded-lg"
            >
              🐓 Élevage
            </Link>

            <Link
              href="/courses"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-[#001A3B]/5 rounded-lg"
            >
              Formations
            </Link>

            <Link
              href="/communaute"
              className="block px-4 py-2.5 text-sm font-medium hover:bg-[#001A3B]/5 rounded-lg"
            >
              Communauté
            </Link>

            <div className="flex flex-col gap-2 pt-4 border-t border-[#001A3B]/10">
              <Link href="/login" className="w-full px-4 py-2.5 text-sm border rounded-lg text-center">
                Connexion
              </Link>

              <Link href="/register" className="w-full px-4 py-2.5 text-sm font-semibold bg-[#001A3B] text-white rounded-lg text-center">
                S'inscrire
              </Link>
            </div>
          </div>
        )}

      </div>
    </header>
  )
}
