"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  Users, 
  Search, 
  MessageSquare,
  Award,
  TrendingUp
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Mock data
const students = [
  {
    id: "1",
    name: "Jean Kouamé",
    email: "jean.kouame@example.com",
    course: "Fondamentaux de l'Élevage de Volaille",
    progress: 85,
    quizScore: 92,
    lastActivity: "Il y a 2 heures",
    enrolledDate: "2024-01-15",
    avatar: "/assets/images/instructors/instructor-1.jpg",
  },
  {
    id: "2",
    name: "Pierre Traoré",
    email: "pierre.traore@example.com",
    course: "Élevage de Porcs Moderne",
    progress: 92,
    quizScore: 88,
    lastActivity: "Il y a 5 heures",
    enrolledDate: "2024-02-20",
    avatar: "/assets/images/instructors/instructor-2.jpg",
  },
  {
    id: "3",
    name: "Sophie Koné",
    email: "sophie.kone@example.com",
    course: "Fondamentaux de l'Élevage de Volaille",
    progress: 65,
    quizScore: 75,
    lastActivity: "Il y a 1 jour",
    enrolledDate: "2024-03-10",
    avatar: "/assets/images/instructors/instructor-3.jpg",
  },
  {
    id: "4",
    name: "Amadou Sarr",
    email: "amadou.sarr@example.com",
    course: "Techniques d'Élevage de Ruminants",
    progress: 100,
    quizScore: 95,
    lastActivity: "Il y a 3 heures",
    enrolledDate: "2024-01-25",
    avatar: "/assets/images/instructors/instructor-4.jpg",
  },
]

export default function InstructorStudentsPage() {
  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Mes Étudiants</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Suivez la progression de vos étudiants
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Total étudiants
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{students.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Progression moyenne
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {Math.round(students.reduce((acc, s) => acc + s.progress, 0) / students.length)}%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Score moyen quiz
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {Math.round(students.reduce((acc, s) => acc + s.quizScore, 0) / students.length)}%
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Cours complétés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {students.filter((s) => s.progress === 100).length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
              <Input
                type="search"
                placeholder="Rechercher un étudiant..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Students List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Liste des étudiants
            </CardTitle>
            <CardDescription>
              Tous les étudiants inscrits à vos formations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                >
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={student.avatar} alt={student.name} />
                    <AvatarFallback className="bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] text-white">
                      {student.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#001A3B]">{student.name}</h3>
                      {student.progress === 100 && (
                        <Badge className="bg-green-500 text-white">
                          <Award className="w-3 h-3 mr-1" />
                          Complété
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-[#001A3B]/70 mb-2">{student.email}</p>
                    <p className="text-sm text-[#001A3B]/70 mb-2">{student.course}</p>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-xs text-[#001A3B]/60">
                        <span>Progression</span>
                        <span className="font-medium">{student.progress}%</span>
                      </div>
                      <Progress value={student.progress} className="h-2" />
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#001A3B]/60 mt-2">
                      <div className="flex items-center gap-1">
                        <Award className="w-4 h-4" />
                        <span>Quiz: {student.quizScore}%</span>
                      </div>
                      <span>•</span>
                      <span>Dernière activité: {student.lastActivity}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Message
                    </Button>
                    <Button variant="outline" size="sm">
                      <TrendingUp className="w-4 h-4 mr-2" />
                      Détails
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </InstructorLayout>
  )
}

