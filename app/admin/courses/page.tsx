"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  BookOpen, 
  Search, 
  Filter, 
  MoreVertical,
  Plus,
  Edit,
  Trash2,
  Eye,
  Users,
  Award,
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
import Link from "next/link"

// Mock data
const courses = [
  {
    id: "1",
    title: "Fondamentaux de l'Élevage de Volaille",
    category: "Élevage",
    instructor: "Marie Diallo",
    students: 245,
    status: "published",
    createdAt: "2024-01-15",
    rating: 4.8,
    price: "Gratuit",
  },
  {
    id: "2",
    title: "Gestion des Cultures Agricoles",
    category: "Agriculture",
    instructor: "Amadou Sarr",
    students: 189,
    status: "published",
    createdAt: "2024-02-20",
    rating: 4.6,
    price: "100€",
  },
  {
    id: "3",
    title: "Élevage de Porcs Moderne",
    category: "Élevage",
    instructor: "Marie Diallo",
    students: 156,
    status: "draft",
    createdAt: "2024-03-10",
    rating: 4.9,
    price: "150€",
  },
  {
    id: "4",
    title: "Techniques d'Élevage de Ruminants",
    category: "Élevage",
    instructor: "Amadou Sarr",
    students: 98,
    status: "published",
    createdAt: "2024-01-25",
    rating: 4.7,
    price: "120€",
  },
]

const categoryColors = {
  "Élevage": "bg-[#9A000D]",
  "Agriculture": "bg-[#269940]",
}

export default function AdminCoursesPage() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Gestion des Formations</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Gérez toutes les formations de la plateforme
            </p>
          </div>
          <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
            <Plus className="w-4 h-4 mr-2" />
            Créer une formation
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
                  placeholder="Rechercher une formation..."
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

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Card key={course.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge
                    className={`${categoryColors[course.category as keyof typeof categoryColors] || "bg-gray-500"} text-white`}
                  >
                    {course.category}
                  </Badge>
                  <Badge
                    variant={course.status === "published" ? "default" : "outline"}
                    className={
                      course.status === "published"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }
                  >
                    {course.status === "published" ? (
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                    ) : (
                      <XCircle className="w-3 h-3 mr-1" />
                    )}
                    {course.status === "published" ? "Publié" : "Brouillon"}
                  </Badge>
                </div>
                <CardTitle className="text-lg font-bold text-[#001A3B] line-clamp-2">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-[#001A3B]/70">
                    <span>Formateur:</span>
                    <span className="font-medium">{course.instructor}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-[#001A3B]/70">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students} étudiants</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>{course.rating}/5</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-sm">
                      {course.price}
                    </Badge>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="w-4 h-4 mr-2" />
                          Voir
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="w-4 h-4 mr-2" />
                          Modifier
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="w-4 h-4 mr-2" />
                          Supprimer
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </AdminLayout>
  )
}

