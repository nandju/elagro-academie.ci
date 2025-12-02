"use client";

import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import { Bookmark, BookOpen, Clock, Star, Trash2, Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

// Mock data
const savedCourses = [
  {
    id: "1",
    title: "Fondamentaux de l'Élevage de Volaille",
    description: "Apprenez les bases de l'élevage de poulets sains",
    category: "Élevage",
    duration: "6 semaines",
    rating: 4.8,
    savedDate: "2024-02-10",
    image: "/assets/images/illustrations/page-accueil/volaille.png",
  },
  {
    id: "2",
    title: "Gestion des Cultures Agricoles",
    description: "Maîtrisez les techniques modernes de culture",
    category: "Agriculture",
    duration: "8 semaines",
    rating: 4.6,
    savedDate: "2024-02-05",
    image: "/assets/images/illustrations/page-accueil/culture.png",
  },
  {
    id: "3",
    title: "Élevage de Porcs Moderne",
    description: "Techniques avancées pour l'élevage porcin",
    category: "Élevage",
    duration: "4 semaines",
    rating: 4.9,
    savedDate: "2024-01-28",
    image: "/assets/images/illustrations/page-accueil/porc.png",
  },
];

export default function SavedCoursesPage() {
  const [savedCourses, setSavedCourses] = useState<any[]>([]);

  const removeCourse = async (id: string) => {
    const { data, error } = await supabase
      .from("enrolled")
      .update({ statut: "unavailable" })
      .eq("course_id", id);
  };

  const fetchCourses = async () => {
    const basicsInfo = await cookieStore.get("user-connected");
    if (!basicsInfo) return;
    const value: any = basicsInfo.value;
    const decoded = decodeURIComponent(value);
    const datas = JSON.parse(decoded);
    const { data, error } = await supabase
      .from("enrolled")
      .select("*")
      .neq("statut", "unavailable")
      .eq("learner_id", datas.id);
    if (error) {
      console.error("Error fetching saved courses:", error);
    } else {
      if (data && data.length > 0) {
        data.map(async (course: any) => {
          const { data: courseData, error: courseError } = await supabase
            .from("courses")
            .select("*")
            .eq("id", course.course_id)
            .single();
          if (courseError) {
            console.error("Error fetching course details:", courseError);
          } else {
            setSavedCourses((prev) =>
              prev.some((c) => c.id === courseData.id)
                ? prev
                : [...prev, courseData]
            );
          }
        });
      }
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#001A3B]">
            Cours Sauvegardés
          </h1>
          <p className="text-[#001A3B]/70 mt-1">
            Retrouvez tous vos cours sauvegardés pour plus tard
          </p>
        </div>

        {/* Saved Courses Grid */}
        {savedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {savedCourses.map((course) => (
              <Card
                key={course.id}
                className="hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40 bg-gradient-to-br from-[#001A3B]/20 to-[#E0AB6C]/20 rounded-t-lg flex items-center justify-center">
                  <span className="text-4xl">📚</span>
                  <div className="absolute top-2 right-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 bg-white/90 hover:bg-white"
                    >
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="outline" className="text-[#001A3B]">
                      {course.category}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#E0AB6C] text-[#E0AB6C]" />
                      <span className="text-sm font-medium text-[#001A3B]">
                        {course.rating}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-lg font-bold text-[#001A3B] line-clamp-2">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration || "N/A"}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Bookmark className="w-4 h-4" />
                      <span>
                        Sauvegardé le{" "}
                        {new Date(course.created_at).toLocaleDateString(
                          "fr-FR"
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 pt-2">
                    <Link href={`/courses/${course.id}`} className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-[#E0AB6C] text-[#001A3B] hover:bg-[#E0AB6C]/10"
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Voir le cours
                      </Button>
                    </Link>
                    <Link href={`/learn/${course.id}/1`} className="flex-1">
                      <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                        <Play className="w-4 h-4 mr-2" />
                        Commencer
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <Bookmark className="w-16 h-16 text-[#001A3B]/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#001A3B] mb-2">
                Aucun cours sauvegardé
              </h3>
              <p className="text-[#001A3B]/70 mb-4">
                Commencez à sauvegarder des cours pour les retrouver facilement
              </p>
              <Link href="/courses">
                <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
                  Explorer les cours
                </Button>
              </Link>
            </CardContent>
          </Card>
        )}
      </div>
    </DashboardLayout>
  );
}
