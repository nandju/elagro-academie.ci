"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  HelpCircle, 
  Search, 
  Plus,
  Edit,
  Trash2,
  Eye,
  BookOpen,
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

// Mock data
const quizzes = [
  {
    id: "1",
    title: "Quiz - Fondamentaux de l'Élevage de Volaille",
    course: "Fondamentaux de l'Élevage de Volaille",
    chapter: "Chapitre 1",
    questions: 15,
    passingScore: 70,
    attempts: 245,
    averageScore: 82,
    status: "active",
  },
  {
    id: "2",
    title: "Quiz - Élevage de Porcs",
    course: "Élevage de Porcs Moderne",
    chapter: "Chapitre 2",
    questions: 12,
    passingScore: 65,
    attempts: 156,
    averageScore: 85,
    status: "active",
  },
  {
    id: "3",
    title: "Quiz - Techniques Ruminants",
    course: "Techniques d'Élevage de Ruminants",
    chapter: "Chapitre 3",
    questions: 20,
    passingScore: 75,
    attempts: 98,
    averageScore: 78,
    status: "draft",
  },
]

export default function InstructorQuizPage() {
  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Gestion des Quiz</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Créez et modifiez les quiz pour vos formations
            </p>
          </div>
          <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
            <Plus className="w-4 h-4 mr-2" />
            Créer un quiz
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
              <Input
                type="search"
                placeholder="Rechercher un quiz..."
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Quizzes List */}
        <div className="space-y-4">
          {quizzes.map((quiz) => (
            <Card key={quiz.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-lg font-bold text-[#001A3B]">
                        {quiz.title}
                      </CardTitle>
                      <Badge
                        variant={quiz.status === "active" ? "default" : "outline"}
                        className={
                          quiz.status === "active"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-white"
                        }
                      >
                        {quiz.status === "active" ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <XCircle className="w-3 h-3 mr-1" />
                        )}
                        {quiz.status === "active" ? "Actif" : "Brouillon"}
                      </Badge>
                    </div>
                    <CardDescription>
                      <div className="flex items-center gap-2 mt-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{quiz.course} • {quiz.chapter}</span>
                      </div>
                    </CardDescription>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="w-4 h-4 mr-2" />
                        Aperçu
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
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <p className="text-sm text-[#001A3B]/70 mb-1">Questions</p>
                    <p className="text-lg font-semibold text-[#001A3B]">{quiz.questions}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#001A3B]/70 mb-1">Score de passage</p>
                    <p className="text-lg font-semibold text-[#001A3B]">{quiz.passingScore}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#001A3B]/70 mb-1">Tentatives</p>
                    <p className="text-lg font-semibold text-[#001A3B]">{quiz.attempts}</p>
                  </div>
                  <div>
                    <p className="text-sm text-[#001A3B]/70 mb-1">Score moyen</p>
                    <p className="text-lg font-semibold text-[#001A3B]">{quiz.averageScore}%</p>
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

