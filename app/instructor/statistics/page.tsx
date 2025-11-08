"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  BarChart3,
  PieChart,
  Clock
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Mock data
const overallStats = {
  totalStudents: 245,
  activeStudents: 189,
  totalCourses: 5,
  completionRate: 78,
  averageScore: 82,
  averageWatchTime: "2h 30min",
}

const coursePerformance = [
  {
    name: "Fondamentaux de l'Élevage de Volaille",
    enrolled: 245,
    completed: 198,
    completionRate: 81,
    averageScore: 85,
  },
  {
    name: "Élevage de Porcs Moderne",
    enrolled: 156,
    completed: 128,
    completionRate: 82,
    averageScore: 88,
  },
  {
    name: "Techniques d'Élevage de Ruminants",
    enrolled: 98,
    completed: 73,
    completionRate: 75,
    averageScore: 78,
  },
]

export default function InstructorStatisticsPage() {
  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Statistiques</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Analysez les performances de vos formations
          </p>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Étudiants totaux
              </CardTitle>
              <Users className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {overallStats.totalStudents}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {overallStats.activeStudents} actifs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Formations
              </CardTitle>
              <BookOpen className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{overallStats.totalCourses}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Cours actifs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Taux de réussite
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{overallStats.completionRate}%</div>
              <Progress value={overallStats.completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Temps moyen
              </CardTitle>
              <Clock className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{overallStats.averageWatchTime}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Temps de visionnage
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Course Performance */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Performance par Formation
            </CardTitle>
            <CardDescription>
              Taux de réussite et nombre d'étudiants actifs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {coursePerformance.map((course, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-sm text-[#001A3B] line-clamp-1">
                      {course.name}
                    </h4>
                    <Badge variant="outline">{course.completionRate}%</Badge>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-[#001A3B]/60 mb-2">
                    <span>{course.enrolled} inscrits</span>
                    <span>•</span>
                    <span>{course.completed} complétés</span>
                    <span>•</span>
                    <span>Score moyen: {course.averageScore}%</span>
                  </div>
                  <Progress value={course.completionRate} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charts Placeholder */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#001A3B]">
                Taux de réussite
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-[#001A3B]/60">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Graphique de taux de réussite</p>
                <p className="text-sm mt-2">À implémenter avec Recharts ou Chart.js</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-bold text-[#001A3B]">
                Nombre d'étudiants actifs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8 text-[#001A3B]/60">
                <PieChart className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Graphique d'étudiants actifs</p>
                <p className="text-sm mt-2">À implémenter avec Recharts ou Chart.js</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </InstructorLayout>
  )
}

