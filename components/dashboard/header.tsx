"use client"

import { useState } from "react"
import { Search, Bell, User, LogOut, Settings } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export function DashboardHeader() {
  const [notifications, setNotifications] = useState(3) // Mock notification count
  const user = {
    name: "Jean Kouamé",
    email: "jean.kouame@example.com",
    avatar: "/assets/images/instructors/instructor-1.jpg",
  }

  return (
    <header className="bg-white border-b border-[#E0AB6C]/20 sticky top-0 z-40">
      <div className="flex items-center justify-between px-4 lg:px-6 py-3 lg:py-4">
        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
            <Input
              type="search"
              placeholder="Rechercher un cours..."
              className="pl-10 bg-[#001A3B]/5 border-[#E0AB6C]/20 focus:border-[#E0AB6C] w-full"
            />
          </div>
        </div>

        {/* Mobile Search Button */}
        <Button variant="ghost" size="icon" className="md:hidden">
          <Search className="w-5 h-5 text-[#001A3B]" />
        </Button>

        {/* Right Side */}
        <div className="flex items-center gap-2 lg:gap-4 ml-2 lg:ml-6">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5 text-[#001A3B]" />
            {notifications > 0 && (
              <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-[#E0AB6C] text-[#001A3B] text-xs">
                {notifications}
              </Badge>
            )}
          </Button>

          {/* User Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 lg:gap-3 hover:bg-[#001A3B]/5">
                <Avatar className="w-8 h-8">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback className="bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] text-white">
                    {user.name.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="hidden lg:block font-medium text-[#001A3B]">
                  {user.name}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Mon profil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/profile" className="flex items-center">
                  <Settings className="w-4 h-4 mr-2" />
                  Paramètres
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem 
                className="text-destructive"
                onClick={async () => {
                  await fetch("/api/auth/logout", { method: "POST" })
                  window.location.href = "/login"
                }}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Déconnexion
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

