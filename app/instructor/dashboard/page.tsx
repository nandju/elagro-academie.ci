"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  BookOpen, 
  Users, 
  TrendingUp, 
  Award,
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

// Mock data
const stats = {
  activeCourses: 5,
  totalStudents: 245,
  completionRate: 78,
  averageRating: 4.8,
}

const myCourses = [
  {
    id: "1",
    title: "Fondamentaux de l'Élevage de Volaille",
    students: 245,
    completionRate: 81,
    rating: 4.8,
    status: "published",
    category: "Élevage",
  },
  {
    id: "2",
    title: "Élevage de Porcs Moderne",
    students: 156,
    completionRate: 82,
    rating: 4.9,
    status: "published",
    category: "Élevage",
  },
  {
    id: "3",
    title: "Techniques d'Élevage de Ruminants",
    students: 98,
    completionRate: 75,
    rating: 4.7,
    status: "draft",
    category: "Élevage",
  },
]

const recentStudents = [
  {
    id: "1",
    name: "Jean Kouamé",
    course: "Fondamentaux de l'Élevage de Volaille",
    progress: 85,
    lastActivity: "Il y a 2 heures",
  },
  {
    id: "2",
    name: "Pierre Traoré",
    course: "Élevage de Porcs Moderne",
    progress: 92,
    lastActivity: "Il y a 5 heures",
  },
  {
    id: "3",
    name: "Sophie Koné",
    course: "Fondamentaux de l'Élevage de Volaille",
    progress: 65,
    lastActivity: "Il y a 1 jour",
  },
]

export default function InstructorDashboardPage() {
  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Tableau de bord Formateur</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Bienvenue dans votre espace de gestion des formations
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Cours actifs
              </CardTitle>
              <BookOpen className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{stats.activeCourses}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Formations publiées
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Étudiants inscrits
              </CardTitle>
              <Users className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{stats.totalStudents}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Total des inscriptions
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Taux de complétion
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{stats.completionRate}%</div>
              <Progress value={stats.completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Note moyenne
              </CardTitle>
              <Award className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{stats.averageRating}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Sur 5 étoiles
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* My Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-[#001A3B]">
                    Mes Formations
                  </CardTitle>
                  <Link href="/instructor/courses">
                    <Button variant="ghost" size="sm" className="text-[#E0AB6C]">
                      Voir tout <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center gap-4 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-[#001A3B]">{course.title}</h3>
                          <Badge
                            variant={course.status === "published" ? "default" : "outline"}
                            className={
                              course.status === "published"
                                ? "bg-green-500 text-white"
                                : "bg-yellow-500 text-white"
                            }
                          >
                            {course.status === "published" ? "Publié" : "Brouillon"}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#001A3B]/60 mb-2">
                          <span>{course.students} étudiants</span>
                          <span>•</span>
                          <span>Note: {course.rating}/5</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {course.category}
                          </Badge>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center justify-between text-xs text-[#001A3B]/60">
                            <span>Taux de complétion</span>
                            <span className="font-medium">{course.completionRate}%</span>
                          </div>
                          <Progress value={course.completionRate} className="h-2" />
                        </div>
                      </div>
                      <Link href={`/instructor/courses/${course.id}/chapters`}>
                        <Button size="sm" className="bg-[#001A3B] hover:bg-[#001A3B]/90">
                          Gérer
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Students */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Étudiants récents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentStudents.map((student) => (
                    <div
                      key={student.id}
                      className="p-3 rounded-lg border border-[#E0AB6C]/20"
                    >
                      <h4 className="font-semibold text-sm text-[#001A3B] mb-1">
                        {student.name}
                      </h4>
                      <p className="text-xs text-[#001A3B]/70 mb-2">{student.course}</p>
                      <div className="space-y-1">
                        <div className="flex items-center justify-between text-xs text-[#001A3B]/60">
                          <span>Progression</span>
                          <span className="font-medium">{student.progress}%</span>
                        </div>
                        <Progress value={student.progress} className="h-1.5" />
                      </div>
                      <p className="text-xs text-[#001A3B]/50 mt-2">{student.lastActivity}</p>
                    </div>
                  ))}
                </div>
                <Link href="/instructor/students">
                  <Button
                    variant="ghost"
                    className="w-full mt-4 text-[#E0AB6C]"
                    size="sm"
                  >
                    Voir tous les étudiants
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Actions rapides
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/instructor/courses/new">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Créer un nouveau cours
                </Button>
              </Link>
              <Link href="/instructor/students">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <Users className="w-4 h-4 mr-2" />
                  Voir mes étudiants
                </Button>
              </Link>
              <Link href="/instructor/statistics">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Voir les statistiques
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </InstructorLayout>
  )
}

