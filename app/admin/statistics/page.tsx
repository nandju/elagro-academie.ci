"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  TrendingUp, 
  Users, 
  BookOpen, 
  Award,
  Download,
  FileText,
  BarChart3,
  PieChart
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// ...existing code...
import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"

const defaultOverallStats = {
  totalUsers: 1250,
  activeUsers: 892,
  totalCourses: 45,
  activeCourses: 38,
  totalCertificates: 320,
  completionRate: 78,
  averageScore: 82,
};

export default function AdminStatisticsPage() {
  const [overallStats, setOverallStats] = useState(defaultOverallStats);
  const [courseStats, setCourseStats] = useState<any[]>([]);
  const [categoryDistribution, setCategoryDistribution] = useState([
    { name: "Élevage", value: 0, color: "bg-[#9A000D]" },
    { name: "Agriculture", value: 0, color: "bg-[#269940]" },
    { name: "Commerce", value: 0, color: "bg-[#FFD463]" },
    { name: "Autres", value: 0, color: "bg-[#1079CE]" },
  ]);
// ...existing code...

const fetchStatistics = async () => {
  const { data, error } = await supabase.from('users').select('id, status');
  if (error) {
    console.error("Error fetching total users:", error);
    return;
  }else {
    setOverallStats((prev) => ({
      ...prev,
      totalUsers: data?.length || 0,
    }));
    setOverallStats((prev) => ({
      ...prev,
      activeUsers: data?.filter((user:any) => user.status == "actif").length || 0,
    }));
  }
  // Fetch other statistics similarly and update state
  const { data: coursesData, error: coursesError } = await supabase.from('courses').select('*');
  if (coursesError) {
    console.error("Error fetching courses:", coursesError);
    return;
  } else {

    ////update de la répartition par catégorie
    const categoryCounts: { [key: string]: number } = {};
    coursesData?.forEach((course:any) => {
      categoryCounts[course.category] = (categoryCounts[course.category] || 0) + 1;
    });
    const totalCourses = coursesData?.length || 1;
    const distribution = Object.keys(categoryCounts).map((category, index) => ({
      name: category.toUpperCase(),
      value: parseFloat(((categoryCounts[category] / totalCourses) * 100).toFixed(2)),
      color: categoryDistribution[index]?.color || "bg-gray-500",
    }));
    setCategoryDistribution(distribution);

    ////ajout au tableau de stats globales
    setOverallStats((prev) => ({
      ...prev,
      totalCourses: coursesData?.length || 0,
      activeCourses: coursesData?.filter((course:any) => course.status === "published").length || 0,
    }));
    const courseStatsData = coursesData?.map((course:any) => ({
      name: course.title,
      enrolled: course.students,}
    ));
    setCourseStats(courseStatsData || []);
  }
  setOverallStats((prev) => ({
    ...prev,
    completionRate:0,
    totalCertificates:0,
    averageScore:0,

  }));
}



useEffect(() => {
  fetchStatistics();
}, []);
  
  
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Statistiques Globales</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Analysez les performances de la plateforme
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exporter CSV
            </Button>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Exporter PDF
            </Button>
          </div>
        </div>

        {/* Overall Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Utilisateurs totaux
              </CardTitle>
              <Users className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {overallStats.totalUsers.toLocaleString()}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {overallStats.activeUsers} actifs
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
                {overallStats.activeCourses} actives
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
              <div className="text-2xl font-bold text-[#001A3B]">{overallStats.completionRate}%</div>
              <Progress value={overallStats.completionRate} className="mt-2" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Score moyen
              </CardTitle>
              <Award className="w-4 h-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{overallStats.averageScore}%</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                {overallStats.totalCertificates} certificats délivrés
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Course Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Performance par Formation
              </CardTitle>
              <CardDescription>
                Taux de complétion et scores moyens
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {courseStats.map((course, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-sm text-[#001A3B] line-clamp-1">
                        {course.name}
                      </h4>
                      <Badge variant="outline">{course.completionRate || 0}%</Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-[#001A3B]/60 mb-2">
                      <span>{course.enrolled || 0} inscrits</span>
                      <span>•</span>
                      <span>{course.completed || 0} complétés</span>
                      <span>•</span>
                      <span>Score moyen: {course.averageScore || 0}%</span>
                    </div>
                    <Progress value={course.completionRate || 0} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Category Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Répartition par Catégorie
              </CardTitle>
              <CardDescription>
                Distribution des formations par domaine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {categoryDistribution.map((category) => (
                  <div key={category.name}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-medium text-[#001A3B]">
                        {category.name}
                      </span>
                      <span className="text-sm text-[#001A3B]/60">
                        {category.value}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${category.color}`}
                        style={{ width: `${category.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Activity by User */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Activité par Utilisateur
            </CardTitle>
            <CardDescription>
              Nombre total de téléchargements autorisés/restants
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-[#001A3B]/60">
              <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Graphique d'activité des utilisateurs</p>
              <p className="text-sm mt-2">À implémenter avec Recharts ou Chart.js</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

