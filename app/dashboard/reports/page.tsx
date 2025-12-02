"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  BookOpen,
  Clock,
  Award,
  Download,
  Calendar,
  Filter,
  CheckCircle2,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"

// Mock data
const stats = {
  totalCourses: 0,
  completedCourses: 0,
  inProgress: 0,
  averageScore: 0,
  totalHours: 0,
  certificates: 0,
}

const monthlyProgress = [
  { month: "Jan", completed: 8, started: 3 },
  { month: "Fév", completed: 12, started: 5 },
  { month: "Mar", completed: 10, started: 4 },
  { month: "Avr", completed: 7, started: 2 },
]

const categoryStats: any[] = [
  // { name: "Élevage", completed: 20, total: 25, percentage: 80 },
  // { name: "Agriculture", completed: 12, total: 15, percentage: 80 },
  // { name: "Commerce", completed: 5, total: 2, percentage: 100 },
]

export default function ReportsPage() {
  const [stats, setStats] = useState({
    totalCourses: 0,
    completedCourses: 0,
    inProgress: 0,
    averageScore: 0,
    totalHours: 0,
    certificates: 0,
  })
  const [monthlyProgress, setMonthlyProgress] = useState([
    { month: "Jan", completed: 0, started: 0 },
    { month: "Fév", completed: 0, started: 0 },
  ])
  const [categoryStats, setCategoryStats] = useState<any[]>([])


  const getAllData = async () => {
      const basicsInfo = await cookieStore.get("user-connected")
    if(!basicsInfo) return
    const value:any = basicsInfo.value
    const decoded = decodeURIComponent(value);
    const datas = JSON.parse(decoded);
    const {data, error} = await supabase
      .from('enrolled')
      .select('*')
      .eq('learner_id', datas.id)
    if(error) {
      console.log("Error fetching enrolled courses:", error)
      return
    }
    // Process data to update stats, monthlyProgress, and categoryStats
    // For demonstration, using static values
    const  {data: certificatData, error: certificatsError} = await supabase.from('certificats').select('*').eq('learner_id', datas.id)
    if(certificatsError) {
      console.log("Error fetching certificats:", certificatsError)
      return
    }
    setStats({
      totalCourses: data.length,
      completedCourses: data.filter((c: any) => c.statut === 'completed').length,
      inProgress: data.filter((c: any) => c.statut === 'available').length,
      averageScore: certificatData.length ? Math.round(certificatData.reduce((acc: number, c: any) => acc + (c.score || 0), 0) / certificatData.length) : 0,
      totalHours: 0,
      certificates: certificatData.length,
    })
    // Similarly update monthlyProgress and categoryStats based on fetched data
  }


  useEffect(() => {
    getAllData()
  }, [])
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#001A3B]">
              Rapports
            </h1>
            <p className="text-[#001A3B]/70 mt-1">
              Analysez votre progression et vos performances
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Cours Terminés
              </CardTitle>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.completedCourses}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Sur {stats.totalCourses} cours
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Score Moyen
              </CardTitle>
              <TrendingUp className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.averageScore}%
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Excellent travail
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Heures Passées
              </CardTitle>
              <Clock className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.totalHours}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Temps de formation
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Certificats
              </CardTitle>
              <Award className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.certificates}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Certificats obtenus
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Progress */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Progression Mensuelle
              </CardTitle>
              <CardDescription>
                Vue d'ensemble de votre activité mensuelle
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {monthlyProgress.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#001A3B]">
                        {item.month} 2024
                      </span>
                      <div className="flex items-center gap-4 text-xs text-[#001A3B]/60">
                        <span>{item.completed} terminés</span>
                        <span>{item.started} commencés</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1">
                        <Progress
                          value={(item.completed / (item.completed + item.started)) * 100}
                          className="h-2"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Stats */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Statistiques par Catégorie
              </CardTitle>
              <CardDescription>
                Votre progression par domaine d'expertise
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryStats.map((category, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#001A3B]">
                        {category.name}
                      </span>
                      <span className="text-sm font-bold text-[#001A3B]">
                        {category.completed}/{category.total}
                      </span>
                    </div>
                    <Progress value={category.percentage} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Report */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Rapport Détaillé
                </CardTitle>
                <CardDescription>
                  Analyse complète de vos performances
                </CardDescription>
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-[#001A3B]/5">
                  <div className="text-sm text-[#001A3B]/60 mb-1">
                    Taux de Complétion
                  </div>
                  <div className="text-2xl font-bold text-[#001A3B]">
                    {Math.round((stats.completedCourses / stats.totalCourses) * 100)}%
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#001A3B]/5">
                  <div className="text-sm text-[#001A3B]/60 mb-1">
                    Cours en Cours
                  </div>
                  <div className="text-2xl font-bold text-[#001A3B]">
                    {stats.inProgress}
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-[#001A3B]/5">
                  <div className="text-sm text-[#001A3B]/60 mb-1">
                    Temps Moyen par Cours
                  </div>
                  <div className="text-2xl font-bold text-[#001A3B]">
                    {stats?.totalHours ? Math.round(stats.totalHours / stats.completedCourses) : 0}h
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

