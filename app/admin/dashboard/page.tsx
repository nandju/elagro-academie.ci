"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  Users, 
  BookOpen, 
  TrendingUp, 
  DollarSign,
  Award,
  Clock,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

// Mock data
const stats = {
  totalUsers: 1250,
  activeUsers: 892,
  totalCourses: 45,
  activeCourses: 38,
  totalRevenue: 125000,
  monthlyRevenue: 15000,
  certificatesIssued: 320,
  completionRate: 78,
}

const recentActivity = [
  {
    id: 1,
    type: "user",
    action: "Nouvel utilisateur inscrit",
    user: "Jean Kouamé",
    time: "Il y a 5 minutes",
  },
  {
    id: 2,
    type: "course",
    action: "Nouveau cours créé",
    user: "Formation Élevage de Porcs",
    time: "Il y a 1 heure",
  },
  {
    id: 3,
    type: "certificate",
    action: "Certificat généré",
    user: "Marie Diallo",
    time: "Il y a 2 heures",
  },
  {
    id: 4,
    type: "quiz",
    action: "Quiz complété",
    user: "Pierre Traoré",
    time: "Il y a 3 heures",
  },
]

const topCourses = [
  {
    id: "1",
    title: "Fondamentaux de l'Élevage de Volaille",
    students: 245,
    revenue: 24500,
    rating: 4.8,
    category: "Élevage",
  },
  {
    id: "2",
    title: "Gestion des Cultures Agricoles",
    students: 189,
    revenue: 18900,
    rating: 4.6,
    category: "Agriculture",
  },
  {
    id: "3",
    title: "Élevage de Porcs Moderne",
    students: 156,
    revenue: 15600,
    rating: 4.9,
    category: "Élevage",
  },
]

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Tableau de bord Administrateur</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Vue d'ensemble de la plateforme ELAGRO ACADEMY
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Utilisateurs totaux
              </CardTitle>
              <Users className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{stats.totalUsers.toLocaleString()}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {stats.activeUsers} actifs
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
              <div className="text-2xl font-bold text-[#001A3B]">{stats.totalCourses}</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {stats.activeCourses} actives
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Revenus totaux
              </CardTitle>
              <DollarSign className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{stats.totalRevenue.toLocaleString()}€</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {stats.monthlyRevenue.toLocaleString()}€ ce mois
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
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {stats.certificatesIssued} certificats délivrés
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Top Courses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-[#001A3B]">
                    Formations les plus populaires
                  </CardTitle>
                  <Link href="/admin/courses">
                    <Button variant="ghost" size="sm" className="text-[#E0AB6C]">
                      Voir tout
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold text-[#001A3B] mb-1">
                          {course.title}
                        </h3>
                        <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                          <span>{course.students} étudiants</span>
                          <span>•</span>
                          <span>{course.revenue.toLocaleString()}€</span>
                          <span>•</span>
                          <Badge variant="outline" className="text-xs">
                            {course.category}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">
                          <span className="text-sm font-medium text-[#001A3B]">
                            {course.rating}
                          </span>
                          <span className="text-xs text-[#001A3B]/60">/5</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Activité récente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-3 p-3 rounded-lg border border-[#E0AB6C]/20 bg-white"
                    >
                      <div className="mt-0.5">
                        {activity.type === "user" && <Users className="w-4 h-4 text-blue-500" />}
                        {activity.type === "course" && <BookOpen className="w-4 h-4 text-green-500" />}
                        {activity.type === "certificate" && <Award className="w-4 h-4 text-orange-500" />}
                        {activity.type === "quiz" && <CheckCircle2 className="w-4 h-4 text-purple-500" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#001A3B]">
                          {activity.action}
                        </p>
                        <p className="text-xs text-[#001A3B]/70 mt-1">
                          {activity.user}
                        </p>
                        <p className="text-xs text-[#001A3B]/50 mt-1">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/admin/users">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <Users className="w-4 h-4 mr-2" />
                  Gérer les utilisateurs
                </Button>
              </Link>
              <Link href="/admin/courses">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Gérer les formations
                </Button>
              </Link>
              <Link href="/admin/certificates">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <Award className="w-4 h-4 mr-2" />
                  Gérer les certificats
                </Button>
              </Link>
              <Link href="/admin/statistics">
                <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Voir les statistiques
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

