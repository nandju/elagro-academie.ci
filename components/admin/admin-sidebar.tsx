"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Upload, 
  HelpCircle, 
  Award, 
  BarChart3, 
  Settings,
  ChevronLeft,
  ChevronRight,
  X,
  Shield
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface NavItem {
  title: string
  href: string
  icon: React.ElementType
}

const navItems: NavItem[] = [
  { title: "Tableau de bord", href: "/admin/dashboard", icon: LayoutDashboard },
  { title: "Utilisateurs", href: "/admin/users", icon: Users },
  { title: "Formations", href: "/admin/courses", icon: BookOpen },
  { title: "Uploads", href: "/admin/uploads", icon: Upload },
  { title: "Quiz", href: "/admin/quiz", icon: HelpCircle },
  { title: "Certificats", href: "/admin/certificates", icon: Award },
  { title: "Statistiques", href: "/admin/statistics", icon: BarChart3 },
  { title: "Paramètres", href: "/admin/settings", icon: Settings },
]

interface AdminSidebarProps {
  isMobileOpen?: boolean
  onMobileClose?: () => void
}

export function AdminSidebar({ isMobileOpen = false, onMobileClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
      if (window.innerWidth >= 1024) {
        setIsCollapsed(false)
      }
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const handleLinkClick = () => {
    if (isMobile && onMobileClose) {
      onMobileClose()
    }
  }

  return (
    <>
      {/* Mobile Overlay */}
      {isMobile && isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onMobileClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "bg-sidebar border-r border-sidebar-border transition-all duration-300 flex flex-col h-screen fixed lg:sticky top-0 z-50",
          // Desktop
          isCollapsed ? "w-20" : "w-64",
          // Mobile
          isMobile && (isMobileOpen ? "translate-x-0" : "-translate-x-full"),
          "lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          <div className="flex items-center justify-between">
            {(!isCollapsed || isMobile) && (
              <Link href="/admin/dashboard" className="flex justify-center items-center" onClick={handleLinkClick}>
                <div className="w-20 h-8 relative">
                  <Image 
                    src="/assets/images/logo.png" 
                    alt="ELAGRO ACADEMY" 
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            )}
            <div className="flex items-center gap-2">
              {isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onMobileClose}
                  className="lg:hidden"
                >
                  <X className="w-5 h-5" />
                </Button>
              )}
              {!isMobile && (
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsCollapsed(!isCollapsed)}
                  className="ml-auto"
                >
                  {isCollapsed ? (
                    <ChevronRight className="w-4 h-4" />
                  ) : (
                    <ChevronLeft className="w-4 h-4" />
                  )}
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Admin Badge */}
        {(!isCollapsed || isMobile) && (
          <div className="px-4 py-2 border-b border-sidebar-border">
            <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#001A3B]/10">
              <Shield className="w-4 h-4 text-[#001A3B]" />
              <span className="text-sm font-semibold text-[#001A3B]">Administrateur</span>
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || 
              (item.href !== "/admin/dashboard" && pathname?.startsWith(item.href))
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                  isActive
                    ? "bg-[#001A3B] text-white"
                    : "text-[#001A3B]/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                title={isCollapsed && !isMobile ? item.title : undefined}
              >
                <Icon className="w-5 h-5 flex-shrink-0" />
                {(!isCollapsed || isMobile) && (
                  <span className="font-medium">{item.title}</span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </>
  )
}

