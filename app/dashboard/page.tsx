"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  BookOpen,
  CheckCircle2,
  Award,
  Clock,
  TrendingUp,
  Bell,
  AlertCircle,
  Star,
  Play,
  ArrowRight,
  Users,
  Calendar,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

// Mock data

// const popularCourses = [
//   {
//     id: "1",
//     title: "Fondamentaux de l'Élevage de Volaille",
//     category: "Élevage",
//     lessons: 16,
//     hours: 48,
//     price: "Gratuit",
//     image: "/assets/images/illustrations/page-accueil/volaille.png",
//     rating: 4.8,
//   },
//   {
//     id: "2",
//     title: "Gestion des Cultures Agricoles",
//     category: "Agriculture",
//     lessons: 30,
//     hours: 48,
//     price: "100€",
//     image: "/assets/images/illustrations/page-accueil/culture.png",
//     rating: 4.6,
//   },
//   {
//     id: "3",
//     title: "Élevage de Porcs Moderne",
//     category: "Élevage",
//     lessons: 30,
//     hours: 48,
//     price: "100€",
//     image: "/assets/images/illustrations/page-accueil/porc.png",
//     rating: 4.9,
//   },
// ]

// const myCourses = [
//   {
//     id: "1",
//     name: "Fondamentaux de l'Élevage de Volaille",
//     lessons: "12/15",
//     status: "En cours",
//     level: "Débutant",
//     category: "Élevage",
//     progress: 75,
//     icon: "🐔",
//   },
//   {
//     id: "2",
//     name: "Gestion des Cultures Agricoles",
//     lessons: "8/20",
//     status: "En cours",
//     level: "Intermédiaire",
//     category: "Agriculture",
//     progress: 40,
//     icon: "🌾",
//   },
//   {
//     id: "3",
//     name: "Maîtrise des Systèmes d'Élevage",
//     lessons: "15/15",
//     status: "Terminé",
//     level: "Avancé",
//     category: "Élevage",
//     progress: 100,
//     icon: "🎓",
//   },
// ]

// const notifications = [
//   {
//     id: 1,
//     title: "Nouveau quiz disponible",
//     message: "Le quiz du module 2 est maintenant disponible",
//     time: "Il y a 2 heures",
//     type: "quiz",
//     read: false,
//   },
//   {
//     id: 2,
//     title: "Nouvelle formation ajoutée",
//     message: "Découvrez la nouvelle formation sur l'agriculture biologique",
//     time: "Il y a 5 heures",
//     type: "course",
//     read: false,
//   },
//   {
//     id: 3,
//     title: "Certificat disponible",
//     message: "Votre certificat de réussite est prêt à être téléchargé",
//     time: "Hier",
//     type: "certificate",
//     read: true,
//   },
// ]

// const suggestions = [
//   {
//     id: "1",
//     title: "Élevage de Ruminants",
//     category: "Élevage",
//     reason: "Basé sur vos intérêts",
//   },
//   {
//     id: "2",
//     title: "Marché Bio et Commercialisation",
//     category: "Agriculture",
//     reason: "Recommandé pour vous",
//   },
//   {
//     id: "3",
//     title: "Élevage de Poissons",
//     category: "Élevage",
//     reason: "Populaire dans votre région",
//   },
// ]

// const courseTopicDistribution = [
//   { name: "Élevage", value: 40, color: "bg-[#9A000D]" },
//   { name: "Agriculture", value: 30, color: "bg-[#269940]" },
//   { name: "Commerce", value: 20, color: "bg-[#FFD463]" },
//   { name: "Données", value: 10, color: "bg-[#1079CE]" },
// ]

export default function DashboardPage() {
  const [stats, setStats] = useState({
    ongoing: 0,
    complete: 0,
    certificates: 0,
    hoursSpent: 0,
  });
  const [continueLearning, setContinueLearning] = useState<any[]>([]);
  const [courseTopicDistribution, setCourseTopicDistribution] = useState<any[]>(
    []
  );
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [myCourses, setMyCourses] = useState<any[]>([]);
  const [popularCourses, setPopularCourses] = useState<any[]>([]);

  const getAllData = async () => {
  const basicsInfo = document.cookie
  .split('; ')
  .find(row => row.startsWith('user-connected='));
if (!basicsInfo) return;
const value = basicsInfo.split('=')[1];
    const decoded = decodeURIComponent(value);
    const datas = JSON.parse(decoded);
    const { data, error } = await supabase
      .from("enrolled")
      .select("*")
      .eq("learner_id", datas.id);
    if (error) {
      console.error(
        "Erreur lors de la récupération des cours inscrits :",
        error
      );
    } else {
      console.log("Cours inscrits récupérés avec succès :", data);
      // Récupérer les détails des cours inscrits
      setStats((prev) => ({
        ...prev,
        ongoing:
          data?.filter((enrollment) => enrollment.statut === "available")
            .length || 0,
        complete:
          data?.filter((enrollment) => enrollment.statut === "complete")
            .length || 0,
        // certificates: data?.filter((enrollment) => enrollment.certificate_issued).length || 0,
        hoursSpent: 0,
      }));

      const courseIds = data?.map((enrollment) => enrollment.course_id) || [];
      const fetchCoursesDetails = async () => {
        const { data: coursesData, error: coursesError } = await supabase
          .from("courses")
          .select("*")
          .in("id", courseIds)
          .order("id", { ascending: false })
          .limit(5);
        if (coursesError) {
          console.error(
            "Erreur lors de la récupération des détails des cours :",
            coursesError
          );
        } else {
          console.log("Détails des cours récupérés avec succès :", coursesData);
          const myCoursesData = data?.map((enrollment) => {
            const courseDetail = coursesData?.find(
              (course) => parseInt(course.id) == parseInt(enrollment.course_id)
            );
            console.log("Détail du cours pour l'inscription :", courseDetail);
            return {
              id: courseDetail?.id,
              name: courseDetail?.title,
              lessons: `${
                enrollment.lessons_completed
                  ? `${enrollment.lessons_completed}/${
                      courseDetail?.total_lessons || 0
                    }`
                  : 0
              } `,
              status:
                enrollment.statut === "available" ? "En cours" : "Terminé",
              level: courseDetail?.level || "Débutant",
              category: courseDetail?.category,
              progress: courseDetail
                ? Math.round(
                    (enrollment.lessons_completed /
                      courseDetail.total_lessons) *
                      100
                  )
                : 0,
              icon: courseDetail?.icon || "📘",
            };
          });
          setMyCourses(myCoursesData || []);
        }
      };
      fetchCoursesDetails();

      const { data: certifData, error: certifError } = await supabase
        .from("certificats")
        .select("*")
        .eq("learner_id", datas.id);
      if (certifError) {
        console.error(
          "Erreur lors de la récupération des certificats :",
          certifError
        );
      } else {
        setStats((prev) => ({
          ...prev,
          certificates: certifData?.length || 0,
        }));
      }
      const { data: popularData, error: popularError } = await supabase
        .from("courses")
        .select("*")
        .order("students", { ascending: false })
        .limit(3);
      if (popularError) {
        console.error(
          "Erreur lors de la récupération des cours populaires :",
          popularError
        );
      } else {
        setPopularCourses(popularData || []);
      }
      const { data: suggestionsData, error: suggestionsError } = await supabase
        .from("courses")
        .select("*")
        .limit(3);
      if (suggestionsError) {
        console.error(
          "Erreur lors de la récupération des suggestions de cours :",
          suggestionsError
        );
      } else {
        setSuggestions(suggestionsData || []);
      }
    }
  };

  useEffect(() => {
    getAllData();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Tableau de bord</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Bienvenue sur votre espace de formation
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                En cours
              </CardTitle>
              <BookOpen className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.ongoing}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Formations actives
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Terminé
              </CardTitle>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.complete}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Formations complétées
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

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Heures passées
              </CardTitle>
              <Clock className="w-4 h-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {stats.hoursSpent}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">
                Temps de formation
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Popular Courses */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-[#001A3B]">
                    Cours Populaires
                  </CardTitle>
                  <Link href="/courses">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#E0AB6C]"
                    >
                      Voir tout <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {popularCourses.map((course) => (
                    <Link key={course.id} href={`/courses/${course.id}`}>
                      <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                        <div className="relative h-32 bg-gradient-to-br from-[#001A3B]/20 to-[#E0AB6C]/20 rounded-t-lg flex items-center justify-center">
                          <span className="text-4xl">🐔</span>
                          <Badge className="absolute bottom-2 right-2 bg-[#E0AB6C] text-[#001A3B]">
                            {course.price}
                          </Badge>
                        </div>
                        <CardContent className="p-4">
                          <h3 className="font-semibold text-[#001A3B] mb-2 line-clamp-2">
                            {course.title}
                          </h3>
                          <div className="flex items-center gap-2 text-sm text-[#001A3B]/60 mb-2">
                            <BookOpen className="w-4 h-4" />
                            <span>{course.lessons} Leçons</span>
                            <span>•</span>
                            <Clock className="w-4 h-4" />
                            <span>{course.hours} Heures</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-[#E0AB6C] text-[#E0AB6C]" />
                            <span className="text-sm font-medium text-[#001A3B]">
                              {course.rating}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* My Courses Table */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Mes Cours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myCourses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center gap-4 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <div className="text-3xl">{course.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-[#001A3B]">
                            {course.name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={
                                course.status === "Terminé"
                                  ? "default"
                                  : "outline"
                              }
                              className={
                                course.status === "Terminé"
                                  ? "bg-green-500 text-white"
                                  : "bg-blue-500 text-white"
                              }
                            >
                              {course.status}
                            </Badge>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                          <span>{course.lessons} Leçons</span>
                          <span>•</span>
                          <span>{course.level}</span>
                          <span>•</span>
                          <span>{course.category}</span>
                        </div>
                        <Progress
                          value={course.progress}
                          className="mt-2 h-2"
                        />
                      </div>
                      <Link href={`/learn/${course.id}/1`}>
                        <Button
                          size="sm"
                          className="bg-[#001A3B] hover:bg-[#001A3B]/90"
                        >
                          Continuer
                        </Button>
                      </Link>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Personalized Suggestions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Suggestions Personnalisées
                </CardTitle>
                <CardDescription>
                  Basé sur votre domaine d'intérêt (élevage/agriculture)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {suggestions.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      className="flex items-center justify-between p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <div>
                        <h3 className="font-semibold text-[#001A3B]">
                          {course.title}
                        </h3>
                        <p className="text-sm text-[#001A3B]/60">
                          {course.reason || "📘"} • {course.category}
                        </p>
                      </div>
                      <ArrowRight className="w-5 h-5 text-[#E0AB6C]" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B] flex items-center gap-2">
                  <Bell className="w-5 h-5" />
                  Notifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {notifications.map((notification) => (
                    <div
                      key={notification.id}
                      className={`p-3 rounded-lg border ${
                        notification.read
                          ? "bg-white border-[#E0AB6C]/20"
                          : "bg-[#E0AB6C]/10 border-[#E0AB6C]/30"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <AlertCircle className="w-4 h-4 text-[#E0AB6C] mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm text-[#001A3B]">
                            {notification.title}
                          </h4>
                          <p className="text-xs text-[#001A3B]/70 mt-1">
                            {notification.message}
                          </p>
                          <p className="text-xs text-[#001A3B]/50 mt-1">
                            {notification.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button
                  variant="ghost"
                  className="w-full mt-4 text-[#E0AB6C]"
                  size="sm"
                >
                  Voir toutes les notifications
                </Button>
              </CardContent>
            </Card>

            {/* Course Topic Distribution */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Répartition des Cours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#001A3B]">0</div>
                    <p className="text-sm text-[#001A3B]/60">Total des Cours</p>
                  </div>
                  <div className="space-y-3">
                    {courseTopicDistribution &&
                      courseTopicDistribution.map((topic) => (
                        <div key={topic.name}>
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-medium text-[#001A3B]">
                              {topic.name}
                            </span>
                            <span className="text-sm text-[#001A3B]/60">
                              {topic.value}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className={`h-2 rounded-full ${topic.color}`}
                              style={{ width: `${topic.value}%` }}
                            />
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Continue Learning */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Continuer l'Apprentissage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {continueLearning.map((course) => (
                    <Link
                      key={course.id}
                      href={`/learn/${course.id}/1`}
                      className="flex items-center gap-3 p-3 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <div className="text-2xl">{course.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-[#001A3B]">
                          {course.title}
                        </h4>
                        <p className="text-xs text-[#001A3B]/60 mt-1">
                          {course.lessons} Leçons
                        </p>
                        <div className="mt-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs text-[#001A3B]/60">
                              Progression
                            </span>
                            <span className="text-xs font-medium text-[#001A3B]">
                              {course.progress}%
                            </span>
                          </div>
                          <Progress value={course.progress} className="h-1.5" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
