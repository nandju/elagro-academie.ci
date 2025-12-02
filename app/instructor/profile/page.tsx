"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  User, 
  Save,
  Upload,
  Camera,
  BookOpen,
  Award,
  Mail,
  Phone,
  MapPin
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { useEffect, useState } from "react"
import supabase from "@/lib/supabase"

// Mock data
// const instructor = {
//   name: "Marie Diallo",
//   email: "marie.diallo@example.com",
//   phone: "+225 07 12 34 56 78",
//   location: "Abidjan, Côte d'Ivoire",
//   bio: "Experte en élevage avec plus de 10 ans d'expérience dans la formation et le conseil agricole.",
//   expertise: ["Élevage de Volaille", "Élevage de Porcs", "Gestion Agricole"],
//   avatar: "/assets/images/instructors/instructor-1.jpg",
//   coursesCount: 5,
//   studentsCount: 245,
//   rating: 4.8,
// }

// const courses = [
//   {
//     id: "1",
//     title: "Fondamentaux de l'Élevage de Volaille",
//     status: "published",
//   },
//   {
//     id: "2",
//     title: "Élevage de Porcs Moderne",
//     status: "published",
//   },
//   {
//     id: "3",
//     title: "Techniques d'Élevage de Ruminants",
//     status: "draft",
//   },
// ]

export default function InstructorProfilePage() {
  const [instructorData, setInstructorData] = useState<any>(null)
  const [courses, setCourses] = useState<any[]>([])


  const getInstructorData = async () => {
    const basicsInfo = document.cookie
  .split('; ')
  .find(row => row.startsWith('user-connected='));
if (!basicsInfo) return;
const value = basicsInfo.split('=')[1];
const decoded = decodeURIComponent(value);
    const data = JSON.parse(decoded);
    console.log(data)
   const {data: instructorData, error} =  await supabase.from("users").select("*").eq("id", data.id)
    if(error){
      console.error("Erreur lors de la récupération des données de l'instructeur :", error);
    } else {
      console.log("Données de l'instructeur récupérées avec succès :", instructorData);
      setInstructorData(instructorData[0])
    }

    const {data: coursesData, error: coursesError} = await supabase.from("courses").select("*").eq("instructor_id", data.id)
    if(coursesError){
      console.error("Erreur lors de la récupération des cours de l'instructeur :", coursesError);
    } else {
      console.log("Cours de l'instructeur récupérés avec succès :", coursesData);
      setCourses(coursesData || [])
    }

  }


  useEffect(() => {
    getInstructorData();
  }, [])

  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Mon Profil</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Gérez vos informations personnelles et votre profil formateur
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Informations Personnelles
                </CardTitle>
                <CardDescription>
                  Vos informations de contact et personnelles
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={ instructorData?.avatar} alt={instructorData?.last_name} />
                    <AvatarFallback className="bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] text-white text-xl">
                      {instructorData?.last_name.split(" ").map((n:any) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <Button variant="outline" size="sm">
                      <Camera className="w-4 h-4 mr-2" />
                      Changer la photo
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input id="name" defaultValue={ instructorData?.last_name} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" defaultValue={instructorData?.email} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" defaultValue={instructorData?.phone} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Localisation</Label>
                    <Input id="location" defaultValue={instructorData?.location} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio">Biographie</Label>
                  <textarea
                    id="bio"
                    className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                    defaultValue={instructorData?.bio}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Domaine d'expertise</Label>
                  <div className="flex flex-wrap gap-2">
                    {instructorData?.expertise.map((exp:any, index:any) => (
                      <Badge key={index} variant="outline" className="text-sm">
                        {exp}
                      </Badge>
                    ))}
                  </div>
                </div>
                <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
                  <Save className="w-4 h-4 mr-2" />
                  Enregistrer les modifications
                </Button>
              </CardContent>
            </Card>

            {/* My Courses */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Mes Formations
                </CardTitle>
                <CardDescription>
                  Gérez l'activation/désactivation de vos cours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courses.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between p-3 rounded-lg border border-[#E0AB6C]/20"
                    >
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-5 h-5 text-[#001A3B]" />
                        <div>
                          <h4 className="font-semibold text-sm text-[#001A3B]">
                            {course.title}
                          </h4>
                          <Badge
                            variant={course.status === "published" ? "default" : "outline"}
                            className={
                              course.status === "published"
                                ? "bg-green-500 text-white text-xs"
                                : "bg-yellow-500 text-white text-xs"
                            }
                          >
                            {course.status === "published" ? "Actif" : "Inactif"}
                          </Badge>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        {course.status === "published" ? "Désactiver" : "Activer"}
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Stats Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Statistiques
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#001A3B]/70">Formations</span>
                    <span className="text-lg font-bold text-[#001A3B]">
                      {instructorData?.coursesCount}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#001A3B]/70">Étudiants</span>
                    <span className="text-lg font-bold text-[#001A3B]">
                      {instructorData?.studentsCount}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-[#001A3B]/70">Note moyenne</span>
                    <span className="text-lg font-bold text-[#001A3B]">
                      {instructorData?.rating}/5
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Award
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(instructorData?.rating)
                            ? "fill-[#E0AB6C] text-[#E0AB6C]"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </InstructorLayout>
  )
}

