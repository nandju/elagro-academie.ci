"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  BookOpen, 
  Search, 
  Plus,
  Edit,
  Eye,
  MoreVertical,
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
    students: 245,
    status: "published",
    createdAt: "2024-01-15",
    rating: 4.8,
  },
  {
    id: "2",
    title: "Élevage de Porcs Moderne",
    category: "Élevage",
    students: 156,
    status: "published",
    createdAt: "2024-02-20",
    rating: 4.9,
  },
  {
    id: "3",
    title: "Techniques d'Élevage de Ruminants",
    category: "Élevage",
    students: 98,
    status: "draft",
    createdAt: "2024-03-10",
    rating: 4.7,
  },
]

const categoryColors = {
  "Élevage": "bg-[#9A000D]",
  "Agriculture": "bg-[#269940]",
}

export default function InstructorCoursesPage() {
  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Mes Formations</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Gérez toutes vos formations
            </p>
          </div>
          <Link href="/instructor/courses/new">
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
              <Plus className="w-4 h-4 mr-2" />
              Créer un cours
            </Button>
          </Link>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
              <Input
                type="search"
                placeholder="Rechercher une formation..."
                className="pl-10"
              />
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
                    <span>{course.students} étudiants inscrits</span>
                    <span>Note: {course.rating}/5</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <Link href={`/instructor/courses/${course.id}/chapters`}>
                      <Button variant="outline" size="sm">
                        <Edit className="w-4 h-4 mr-2" />
                        Gérer
                      </Button>
                    </Link>
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
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </InstructorLayout>
  )
}

