"use client"
import { useState } from "react"
import { Menu, ShoppingCart, Search, X, ChevronDown } from "lucide-react"
import Image from "next/image"


export default function HeaderLandingPage() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#001A3B]/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <div className="relative w-24 h-20">
              <Image 
                src="/assets/images/logo.png" 
                alt="Logo Elagro Academy" 
                width={100}
                height={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button className="flex items-center gap-1 text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C] transition-colors group">
              Catégories
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a href="#" className="text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C] transition-colors">
              Formations
            </a>
            <a href="#" className="text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C] transition-colors">
              Conseil
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center gap-2 bg-[#001A3B]/5 rounded-lg px-4 py-2.5 flex-1 max-w-md border border-[#001A3B]/10 focus-within:border-[#001A3B] focus-within:ring-2 focus-within:ring-[#001A3B]/20 transition-all">
            <Search className="w-4 h-4 text-[#001A3B]/60" />
            <input
              type="text"
              placeholder="Rechercher des cours..."
              className="bg-transparent outline-none text-sm flex-1 text-[#001A3B] placeholder:text-[#001A3B]/50"
            />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobile Search Toggle */}
            <button 
              onClick={() => setSearchOpen(!searchOpen)}
              className="lg:hidden p-2 text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Cart */}
            <button className="relative p-2 text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg transition-colors">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-[#E0AB6C] rounded-full"></span>
            </button>

            {/* Desktop Auth Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <button className="px-4 py-2 text-sm font-medium text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg transition-colors">
                Connexion
              </button>
              <button className="px-4 py-2 text-sm font-semibold bg-[#001A3B] hover:bg-[#001A3B]/90 text-white rounded-lg transition-colors shadow-sm">
                S'inscrire
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden p-2 text-[#001A3B] hover:text-[#E0AB6C] hover:bg-[#001A3B]/5 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {searchOpen && (
          <div className="lg:hidden py-3 border-t border-[#001A3B]/10 animate-in slide-in-from-top-2">
            <div className="flex items-center gap-2 bg-[#001A3B]/5 rounded-lg px-4 py-2.5 border border-[#001A3B]/10 focus-within:border-[#001A3B] focus-within:ring-2 focus-within:ring-[#001A3B]/20 transition-all">
              <Search className="w-4 h-4 text-[#001A3B]/60" />
              <input
                type="text"
                placeholder="Rechercher des cours..."
                className="bg-transparent outline-none text-sm flex-1 text-[#001A3B] placeholder:text-[#001A3B]/50"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden pb-4 space-y-1 border-t border-[#001A3B]/10 pt-4 animate-in slide-in-from-top-2">
            <button className="flex items-center justify-between w-full px-4 py-2.5 text-sm font-medium text-[#001A3B] hover:bg-[#001A3B]/5 hover:text-[#E0AB6C] rounded-lg transition-colors">
              Catégories
              <ChevronDown className="w-4 h-4" />
            </button>
            <a href="#" className="block w-full px-4 py-2.5 text-sm font-medium text-[#001A3B] hover:bg-[#001A3B]/5 hover:text-[#E0AB6C] rounded-lg transition-colors">
              Formations
            </a>
            <a href="#" className="block w-full px-4 py-2.5 text-sm font-medium text-[#001A3B] hover:bg-[#001A3B]/5 hover:text-[#E0AB6C] rounded-lg transition-colors">
              Conseil
            </a>
            
            {/* Mobile Auth Buttons */}
            <div className="sm:hidden flex flex-col gap-2 pt-4 border-t border-[#001A3B]/10 mt-4">
              <button className="w-full px-4 py-2.5 text-sm font-medium text-[#001A3B] hover:bg-[#001A3B]/5 border border-[#001A3B]/20 rounded-lg transition-colors">
                Connexion
              </button>
              <button className="w-full px-4 py-2.5 text-sm font-semibold bg-[#001A3B] hover:bg-[#001A3B]/90 text-white rounded-lg transition-colors">
                S'inscrire
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}