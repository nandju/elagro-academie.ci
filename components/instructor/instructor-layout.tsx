"use client"

import { useState } from "react"
import { InstructorSidebar } from "./instructor-sidebar"
import { DashboardHeader } from "@/components/dashboard/header"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function InstructorLayout({ children }: { children: React.ReactNode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      <InstructorSidebar 
        isMobileOpen={isMobileMenuOpen}
        onMobileClose={() => setIsMobileMenuOpen(false)}
      />
      <div className="flex-1 flex flex-col overflow-hidden lg:ml-0">
        {/* Mobile Menu Button */}
        <div className="lg:hidden fixed top-4 left-4 z-50">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsMobileMenuOpen(true)}
            className="bg-white shadow-lg"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        <DashboardHeader />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

