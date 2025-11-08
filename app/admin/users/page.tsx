"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  Users, 
  Search, 
  Filter, 
  MoreVertical,
  UserPlus,
  Shield,
  GraduationCap,
  User as UserIcon,
  Ban,
  CheckCircle2,
  XCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data
const users = [
  {
    id: "1",
    name: "Jean Kouamé",
    email: "jean.kouame@example.com",
    role: "admin",
    status: "active",
    joinDate: "2024-01-15",
    coursesCompleted: 12,
    progress: 85,
    avatar: "/assets/images/instructors/instructor-1.jpg",
  },
  {
    id: "2",
    name: "Marie Diallo",
    email: "marie.diallo@example.com",
    role: "instructor",
    status: "active",
    joinDate: "2024-02-20",
    coursesCompleted: 8,
    progress: 92,
    avatar: "/assets/images/instructors/instructor-2.jpg",
  },
  {
    id: "3",
    name: "Pierre Traoré",
    email: "pierre.traore@example.com",
    role: "student",
    status: "active",
    joinDate: "2024-03-10",
    coursesCompleted: 5,
    progress: 65,
    avatar: "/assets/images/instructors/instructor-3.jpg",
  },
  {
    id: "4",
    name: "Sophie Koné",
    email: "sophie.kone@example.com",
    role: "student",
    status: "suspended",
    joinDate: "2024-01-25",
    coursesCompleted: 2,
    progress: 30,
    avatar: "/assets/images/instructors/instructor-4.jpg",
  },
  {
    id: "5",
    name: "Amadou Sarr",
    email: "amadou.sarr@example.com",
    role: "instructor",
    status: "active",
    joinDate: "2024-02-05",
    coursesCompleted: 15,
    progress: 95,
    avatar: "/assets/images/instructors/instructor-5.jpg",
  },
]

const roleIcons = {
  admin: Shield,
  instructor: GraduationCap,
  student: UserIcon,
}

const roleLabels = {
  admin: "Administrateur",
  instructor: "Formateur",
  student: "Étudiant",
}

export default function AdminUsersPage() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Gestion des Utilisateurs</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Gérez tous les utilisateurs de la plateforme
            </p>
          </div>
          <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
            <UserPlus className="w-4 h-4 mr-2" />
            Ajouter un utilisateur
          </Button>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
                <Input
                  type="search"
                  placeholder="Rechercher un utilisateur..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Users Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Liste des utilisateurs ({users.length})
            </CardTitle>
            <CardDescription>
              Tous les utilisateurs inscrits sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {users.map((user) => {
                const RoleIcon = roleIcons[user.role as keyof typeof roleIcons]
                return (
                  <div
                    key={user.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                  >
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback className="bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] text-white">
                        {user.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#001A3B]">{user.name}</h3>
                        <Badge
                          variant={user.status === "active" ? "default" : "destructive"}
                          className={
                            user.status === "active"
                              ? "bg-green-500 text-white"
                              : "bg-red-500 text-white"
                          }
                        >
                          {user.status === "active" ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : (
                            <XCircle className="w-3 h-3 mr-1" />
                          )}
                          {user.status === "active" ? "Actif" : "Suspendu"}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#001A3B]/70 mb-2">{user.email}</p>
                      <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                        <div className="flex items-center gap-1">
                          <RoleIcon className="w-4 h-4" />
                          <span>{roleLabels[user.role as keyof typeof roleLabels]}</span>
                        </div>
                        <span>•</span>
                        <span>Inscrit le {new Date(user.joinDate).toLocaleDateString("fr-FR")}</span>
                        <span>•</span>
                        <span>{user.coursesCompleted} cours complétés</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            Voir les détails
                          </DropdownMenuItem>
                          {user.role === "student" && (
                            <DropdownMenuItem>
                              Promouvoir formateur
                            </DropdownMenuItem>
                          )}
                          {user.status === "active" ? (
                            <DropdownMenuItem className="text-destructive">
                              <Ban className="w-4 h-4 mr-2" />
                              Suspendre
                            </DropdownMenuItem>
                          ) : (
                            <DropdownMenuItem>
                              Réactiver
                            </DropdownMenuItem>
                          )}
                          <DropdownMenuItem className="text-destructive">
                            Supprimer
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

