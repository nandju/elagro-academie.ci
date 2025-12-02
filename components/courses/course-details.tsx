"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, Clock, Users, Star, BookOpen, Play, FileText, Award, ChevronRight, Download, CheckCircle2, Search, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import Image from "next/image"
import supabase from "@/lib/supabase"

interface Instructor {
  name: string
  title: string
  bio: string
  avatar?: string
}

interface Lecture {
  id: number
  title: string
  duration: string
  videoUrl?: string
}

interface Module {
  id: number
  title: string
  description: string
  lectures: Lecture[]
  pdfUrl?: string
  pdfTitle?: string
}

interface Quiz {
  id: number
  title: string
  questionCount: number
  passingScore: number
}

interface Review {
  id: number
  author: string
  rating: number
  comment: string
  date: string
}

interface CourseDetailsData {
  id: number
  title: string
  description: string
  field: "livestock" | "agriculture"
  difficulty: "beginner" | "intermediate" | "advanced"
  isFree: boolean
  duration: string
  rating: number
  followers: number
  materialsCount: number
  objective: string
  instructor: Instructor
  modules: Module[]
  quiz: Quiz
  reviews: Review[]
  image?: string
  tags: string[]
}

// Mock data - In a real app, this would be fetched based on courseId
const getCourseDetails = (courseId: string): CourseDetailsData | null => {
  const courses: Record<string, CourseDetailsData> = {
    "1": {
      id: 1,
      title: "Fondamentaux de l'Élevage de Volaille",
      description: "Apprenez les bases de l'élevage de poulets sains, la gestion des pondeuses et des poulets de chair, et l'optimisation de la production.",
      field: "livestock",
      difficulty: "beginner",
      isFree: true,
      duration: "6 semaines",
      rating: 4.8,
      followers: 1250,
      materialsCount: 12,
      objective: "À la fin de ce cours, vous serez capable de gérer efficacement un élevage de volaille, d'identifier et de prévenir les maladies courantes, et d'optimiser la productivité de votre exploitation.",
      instructor: {
        name: "Dr. Marie Kouassi",
        title: "Expert en Aviculture",
        bio: "Docteur en médecine vétérinaire avec plus de 15 ans d'expérience dans l'élevage de volaille. Spécialisée dans la santé animale et la gestion de production.",
        avatar: "/assets/images/instructors/instructor-1.jpg",
      },
      modules: [
        {
          id: 1,
          title: "Module 1: Introduction à l'Élevage de Volaille",
          description: "Découvrez les bases de l'élevage de volaille et les différents systèmes de production.",
          lectures: [
            { id: 1, title: "Introduction à l'aviculture", duration: "45 min" },
            { id: 2, title: "Types de volailles et races", duration: "60 min" },
            { id: 3, title: "Systèmes de production", duration: "50 min" },
          ],
          pdfUrl: "/pdfs/module-1-volaille.pdf",
          pdfTitle: "Guide Complet - Module 1",
        },
        {
          id: 2,
          title: "Module 2: Santé et Bien-être des Volailles",
          description: "Apprenez à maintenir la santé de vos volailles et à prévenir les maladies.",
          lectures: [
            { id: 4, title: "Maladies courantes des volailles", duration: "70 min" },
            { id: 5, title: "Programme de vaccination", duration: "55 min" },
            { id: 6, title: "Soins et bien-être animal", duration: "60 min" },
          ],
          pdfUrl: "/pdfs/module-2-sante.pdf",
          pdfTitle: "Guide Complet - Module 2",
        },
        {
          id: 3,
          title: "Module 3: Nutrition et Alimentation",
          description: "Maîtrisez les principes de nutrition pour une production optimale.",
          lectures: [
            { id: 7, title: "Besoins nutritionnels", duration: "65 min" },
            { id: 8, title: "Formulation des aliments", duration: "75 min" },
            { id: 9, title: "Gestion de l'alimentation", duration: "50 min" },
          ],
          pdfUrl: "/pdfs/module-3-nutrition.pdf",
          pdfTitle: "Guide Complet - Module 3",
        },
      ],
      quiz: {
        id: 1,
        title: "Quiz Final - Élevage de Volaille",
        questionCount: 20,
        passingScore: 80,
      },
      reviews: [
        {
          id: 1,
          author: "Jean Kouamé",
          rating: 5,
          comment: "Excellent cours ! Les modules sont bien structurés et les vidéos sont très claires. J'ai pu améliorer significativement ma production.",
          date: "2024-02-15",
        },
        {
          id: 2,
          author: "Aminata Diallo",
          rating: 4,
          comment: "Très bon contenu, surtout le module sur la santé animale. Le seul bémol est que certains PDFs pourraient être plus détaillés.",
          date: "2024-02-10",
        },
        {
          id: 3,
          author: "Pierre N'Guessan",
          rating: 5,
          comment: "Parfait pour les débutants. L'instructrice explique très bien et les ressources sont complètes. Je recommande vivement !",
          date: "2024-02-05",
        },
      ],
      tags: ["Volaille", "Débutant", "Santé Animale"],
    },
  }

  return courses[courseId] || null
}


const getAvailableCourses = () => {
  return [
    { id: "1", title: "Fondamentaux de l'Élevage de Volaille" },
  ]
}

export default function CourseDetails({ courseId }: { courseId: string }) {

  // const course = getCourseDetails(courseId)
  const [course, setCourse] = useState<any>()
  const [teacherInfo, setTeacherInfo] = useState<any>()
  const [expandedModule, setExpandedModule] = useState<number | null>(null)
  const [isEnrolled, setIsEnrolled] = useState(false) // In a real app, check user enrollment


  const getCourse = async () =>{
    const {data, error} = await supabase.from('courses').select('*').eq('id', courseId).single()
    if(error){
      console.error("Erreur lors de la récupération du cours :", error);
    }else{
      setCourse(data)
      console.log(data)
      // Fetch instructor info
      const {data: instructorData, error: instructorError} = await supabase.from('users').select('*').eq('id', data.instructor_id).single()
      if(instructorError){
        console.error("Erreur lors de la récupération de l'instructeur :", instructorError);
        
      }else{
        setTeacherInfo(instructorData)
      }
    }
  }

  const checkIfEnrolled = async () => {
  const basicsInfo = document.cookie
  .split('; ')
  .find(row => row.startsWith('user-connected='));
if (!basicsInfo) return;
const value = basicsInfo.split('=')[1];
    const decoded = decodeURIComponent(value);
    const user = JSON.parse(decoded);
    const {data, error} = await supabase.from('enrolled').select('*').eq('course_id', courseId).eq('learner_id', user.id).single()
    if(error){
      console.error("Erreur lors de la vérification de l'inscription :", error);
    }else{
      if(data){
        setIsEnrolled(true)
      }
    }
  }

  useEffect(() => {
    getCourse()
    checkIfEnrolled()
    },[])


      const handleEnroll = async (courseId: string) => {
       const basicsInfo = document.cookie
  .split('; ')
  .find(row => row.startsWith('user-connected='));
if (!basicsInfo) return;
const value = basicsInfo.split('=')[1];
        const decoded = decodeURIComponent(value);
        const user = JSON.parse(decoded);
      const learner_mail = document.cookie
  .split('; ')
  .find(row => row.startsWith('user-email='));
if (!learner_mail) return;
const learner_mail_value = learner_mail.split('=')[1];

    console.log(user)
      

      const {data, error} = await supabase.from('enrolled')
      .insert(
        {
          course_id: courseId,
          course_name: course.title,
          learner_mail: learner_mail_value,
           learner_id: user.id,
           learner_name:user.name,
           teacher_name: course.instructor,
           teacher_id: course.instructor_id,
        }
      ) 
      if(error){
        console.error("Erreur lors de l'inscription au cours :", error);
        alert("Une erreur est survenue lors de l'inscription au cours.");
      }else{
        console.log("Inscription réussie :", data);
        alert("Inscription réussie !");
        const {data : updateData, error : updateError} = await supabase.from('courses').update({
          students: course.students + 1
        }).eq('id', courseId)
        if(updateError){
          console.error("Erreur lors de la mise à jour du nombre de followers :", updateError );
        }else{
          console.log("Nombre de followers mis à jour avec succès :", updateData);
          setCourse({...course, students: course.students + 1}) 
        }
        setIsEnrolled(true)
      }
    }
     

// Remplacez votre bloc if (!course) par ceci:
if (!course) {
  const availableCourses = getAvailableCourses()
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#001A3B]/5 via-white to-[#E0AB6C]/5 py-16 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">

        {/* Illustration simple */}
          <div className="flex justify-center">
            <Image
              src="/assets/images/illustrations/page-introuvable/404-erreur.png"
              alt="Cours introuvable"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>


        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#E0AB6C]/20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#001A3B] mb-3">
              Cours introuvable
            </h2>
            <p className="text-[#001A3B]/70 text-lg">
              Désolé, le cours que vous recherchez n'existe pas ou a été supprimé.
            </p>
          </div>

          {/* Available Courses Section */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-[#001A3B] mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#E0AB6C]" />
              Cours disponibles
            </h3>
            <div className="space-y-3">
              {availableCourses.map((course) => (
                <Link 
                  key={course.id} 
                  href={`/courses/${course.id}`}
                  className="block"
                >
                  <div className="p-4 rounded-lg bg-[#001A3B]/5 hover:bg-[#E0AB6C]/10 border border-[#E0AB6C]/20 hover:border-[#E0AB6C]/40 transition-all duration-200 group">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] flex items-center justify-center text-white font-bold">
                          {course.id}
                        </div>
                        <span className="text-[#001A3B] font-medium group-hover:text-[#E0AB6C] transition-colors">
                          {course.title}
                        </span>
                      </div>
                      <svg 
                        className="w-5 h-5 text-[#001A3B]/40 group-hover:text-[#E0AB6C] group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/courses" className="flex-1">
              <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90 text-white font-semibold py-6 text-base">
                <BookOpen className="w-5 h-5 mr-2" />
                Voir tous les cours
              </Button>
            </Link>
            <Link href="/" className="flex-1">
              <Button 
                variant="outline" 
                className="w-full border-[#E0AB6C] text-[#001A3B] hover:bg-[#E0AB6C]/10 font-semibold py-6 text-base"
              >
                <Home className="w-5 h-5 mr-2" />
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>

        {/* Help Text */}
        <p className="text-center text-sm text-[#001A3B]/60 mt-6">
          Besoin d'aide ? <Link href="/contact" className="text-[#E0AB6C] hover:underline font-medium">Contactez-nous</Link>
        </p>
      </div>
    </div>
  )
}

  const difficultyLabels: any = {
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
  }

  const fieldLabels: any = {
    livestock: "Élevage",
    agriculture: "Agriculture",
  }

  const difficultyColors: any = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-blue-100 text-blue-800 border-blue-200",
    advanced: "bg-purple-100 text-purple-800 border-purple-200",
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Back Button */}
      <div className="container px-4 md:px-8 lg:px-16 max-w-7xl mx-auto pt-6 md:pt-8">
        <Link href="/courses">
          <Button variant="ghost" className="text-[#001A3B] hover:text-[#E0AB6C] mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour au catalogue
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full bg-gradient-to-br from-[#001A3B]/20 to-[#E0AB6C]/20">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-32 h-32 text-[#001A3B]/20" />
        </div>
      </div>

      <div className="container px-4 md:px-8 lg:px-16 max-w-7xl mx-auto py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title and Description */}
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="outline" className="bg-[#E0AB6C]/20 text-[#001A3B] border-[#E0AB6C]/30">
                  {fieldLabels[course.category]}
                </Badge>
                <Badge variant="outline" className={cn("capitalize", difficultyColors[course.level])}>
                  {difficultyLabels[course.level]}
                </Badge>
                {course.isFree && (
                  <Badge className="bg-[#E0AB6C] text-[#001A3B] font-semibold">Gratuit</Badge>
                )}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-4">
                {course.title}
              </h1>
              <p className="text-lg text-[#001A3B]/70 leading-relaxed">{course.description}</p>
            </div>

            {/* Objective */}
            <div className="bg-white rounded-xl border border-[#E0AB6C]/30 p-6">
              <h2 className="text-xl font-bold text-[#001A3B] mb-3 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E0AB6C]" />
                Objectif du cours
              </h2>
              <p className="text-[#001A3B]/70 leading-relaxed">{course?.objective || "Aucun champ trouvé pour ça"}</p>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-xl border border-[#E0AB6C]/30 p-6">
              <h2 className="text-xl font-bold text-[#001A3B] mb-4">Instructeur</h2>
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] flex items-center justify-center text-white text-xl font-bold">
                  {course.instructor.split(" ").map((n:any) => n[0]).join("")}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#001A3B]">{teacherInfo ? teacherInfo?.last_name+" "+teacherInfo?.first_name : course.instructor}</h3>
                  <p className="text-sm text-[#E0AB6C] mb-2">{teacherInfo?.title || "Aucun champ trouvé pour ça"}</p>
                  <p className="text-sm text-[#001A3B]/70">{teacherInfo?.bio || "Aucun champ trouvé pour ça"}</p>
                </div>
              </div>
            </div>

            {/* Modules */}
            <div className="bg-white rounded-xl border border-[#E0AB6C]/30 p-6">
              <h2 className="text-xl font-bold text-[#001A3B] mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#E0AB6C]" />
                Modules ({course?.modules?.length || 0})
              </h2>
              <div className="space-y-3">
                {course?.modules && course?.modules.map((module :any) => (
                  <div
                    key={module.id}
                    className="border border-[#E0AB6C]/20 rounded-lg overflow-hidden hover:border-[#E0AB6C]/40 transition-colors"
                  >
                    <button
                      onClick={() => setExpandedModule(expandedModule === module.id ? null : module.id)}
                      className="w-full p-4 flex items-center justify-between bg-[#001A3B]/5 hover:bg-[#001A3B]/10 transition-colors"
                    >
                      <div className="flex items-center gap-3 flex-1 text-left">
                        <BookOpen className="w-5 h-5 text-[#E0AB6C] flex-shrink-0" />
                        <div>
                          <h3 className="font-semibold text-[#001A3B]">{module.title}</h3>
                          <p className="text-sm text-[#001A3B]/60 mt-1">{module.description}</p>
                        </div>
                      </div>
                      <ChevronRight
                        className={cn(
                          "w-5 h-5 text-[#001A3B]/50 transition-transform flex-shrink-0",
                          expandedModule === module.id && "transform rotate-90"
                        )}
                      />
                    </button>
                    {expandedModule === module.id && (
                      <div className="p-4 space-y-3 bg-white">
                        {/* Lectures */}
                        <div>
                          <h4 className="text-sm font-semibold text-[#001A3B] mb-2">Vidéos</h4>
                          <div className="space-y-2">
                            {module.lectures.map((lecture :any) => (
                              <div
                                key={lecture.id}
                                className="flex items-center justify-between p-3 rounded-lg bg-[#001A3B]/5 hover:bg-[#001A3B]/10 transition-colors"
                              >
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-[#E0AB6C] flex items-center justify-center">
                                    <Play className="w-4 h-4 text-[#001A3B]" fill="currentColor" />
                                  </div>
                                  <span className="text-sm text-[#001A3B]">{lecture.title}</span>
                                </div>
                                <div className="flex items-center gap-4">
                                  <span className="text-xs text-[#001A3B]/60 flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {lecture.duration}
                                  </span>
                                  {isEnrolled ? (
                                    <Button size="sm" variant="ghost" className="text-[#E0AB6C]">
                                      Regarder
                                    </Button>
                                  ) : (
                                    <span className="text-xs text-[#001A3B]/40">Verrouillé</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                        {/* PDF Download */}
                        {module.pdfUrl && (
                          <div className="pt-3 border-t border-[#E0AB6C]/20">
                            <a
                              href={module.pdfUrl}
                              download
                              className="flex items-center justify-between p-3 rounded-lg bg-[#E0AB6C]/10 hover:bg-[#E0AB6C]/20 transition-colors"
                            >
                              <div className="flex items-center gap-3">
                                <FileText className="w-5 h-5 text-[#001A3B]" />
                                <span className="text-sm text-[#001A3B] font-medium">
                                  {module.pdfTitle || "Télécharger le PDF"}
                                </span>
                              </div>
                              <Download className="w-4 h-4 text-[#001A3B]" />
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Final Quiz */}
            <div className="bg-white rounded-xl border border-[#E0AB6C]/30 p-6">
              <h2 className="text-xl font-bold text-[#001A3B] mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E0AB6C]" />
                Quiz Final
              </h2>
              <div className="flex items-center justify-between p-4 rounded-lg bg-[#001A3B]/5">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#E0AB6C]" />
                  <div>
                    <h3 className="font-semibold text-[#001A3B]">{course?.quiz?.title}</h3>
                    <p className="text-sm text-[#001A3B]/60">
                      {course?.quiz?.questionCount} questions • Score de passage: {course?.quiz?.passingScore}%
                    </p>
                  </div>
                </div>
                {isEnrolled ? (
                  <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90 text-white">
                    Passer le quiz
                  </Button>
                ) : (
                  <span className="text-sm text-[#001A3B]/40">Inscription requise</span>
                )}
              </div>
              <div className="mt-4 p-4 rounded-lg bg-[#E0AB6C]/10 border border-[#E0AB6C]/30">
                <div className="flex items-center gap-2 text-[#001A3B]">
                  <CheckCircle2 className="w-5 h-5 text-[#E0AB6C]" />
                  <span className="text-sm font-medium">
                    Certification disponible après réussite du quiz
                  </span>
                </div>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl border border-[#E0AB6C]/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-[#001A3B] flex items-center gap-2">
                  <Star className="w-5 h-5 text-[#E0AB6C]" />
                  Avis et Notes ({course?.reviews && course?.reviews.length})
                </h2>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 fill-[#E0AB6C] text-[#E0AB6C]" />
                  <span className="text-lg font-bold text-[#001A3B]">{course.rating}</span>
                </div>
              </div>
              <div className="space-y-4">
                {course?.reviews && course?.reviews.map((review: any) => (
                  <div key={review.id} className="border-b border-[#E0AB6C]/20 pb-4 last:border-0 last:pb-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="font-semibold text-[#001A3B]">{review.author}</h4>
                        <div className="flex items-center gap-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-4 h-4",
                                i < review.rating
                                  ? "fill-[#E0AB6C] text-[#E0AB6C]"
                                  : "fill-gray-200 text-gray-200"
                              )}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-[#001A3B]/60">
                        {new Date(review.date).toLocaleDateString("fr-FR")}
                      </span>
                    </div>
                    <p className="text-sm text-[#001A3B]/70 mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Course Info Card */}
              <div className="bg-white rounded-xl border border-[#E0AB6C]/30 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#001A3B]/60">Durée</span>
                    <div className="flex items-center gap-1 text-[#001A3B]">
                      <Clock className="w-4 h-4" />
                      <span className="font-medium">{course?.duration || "N/A"}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#001A3B]/60">Note</span>
                    <div className="flex items-center gap-1 text-[#001A3B]">
                      <Star className="w-4 h-4 fill-[#E0AB6C] text-[#E0AB6C]" />
                      <span className="font-medium">{course?.rating}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#001A3B]/60">Participants</span>
                    <div className="flex items-center gap-1 text-[#001A3B]">
                      <Users className="w-4 h-4" />
                      <span className="font-medium">{course?.students && course?.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-[#001A3B]/60">Matériaux</span>
                    <div className="flex items-center gap-1 text-[#001A3B]">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">{course?.materialsCount ||0}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-[#E0AB6C]/20">
                  {isEnrolled ? (
                    <Link href={`/learn/${courseId}/1`}>
                      <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90 text-white font-semibold">
                        Accéder à mes cours
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      className="w-full bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B] font-semibold"
                      onClick={() => handleEnroll(course.id)}
                    >
                      {course.isFree ? "Commencer la formation" : "S'inscrire au cours"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

