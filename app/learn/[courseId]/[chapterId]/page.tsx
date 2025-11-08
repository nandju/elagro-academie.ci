"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  ChevronRight,
  CheckCircle2,
  FileText,
  Lock,
  Download,
  BookOpen,
  Clock,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Chapter {
  id: number
  title: string
  type: "video" | "pdf"
  duration?: string
  videoUrl?: string
  pdfUrl?: string
  completed: boolean
  locked: boolean
}

interface Module {
  id: number
  title: string
  chapters: Chapter[]
}

// Mock data
const courseData = {
  id: "1",
  title: "Fondamentaux de l'Élevage de Volaille",
  modules: [
    {
      id: 1,
      title: "Introduction",
      chapters: [
        {
          id: 1,
          title: "Bienvenue dans le cours",
          type: "video" as const,
          duration: "20 min",
          videoUrl: "/assets/videos/video.mp4",
          completed: true,
          locked: false,
        },
        {
          id: 2,
          title: "Guide du cours",
          type: "pdf" as const,
          pdfUrl: "/pdfs/guide.pdf",
          completed: false,
          locked: false,
        },
      ],
    },
    {
      id: 2,
      title: "Maîtriser les Outils",
      chapters: [
        {
          id: 3,
          title: "Les bases de l'élevage",
          type: "video" as const,
          duration: "1h 20min",
          videoUrl: "/assets/videos/video.mp4",
          completed: false,
          locked: false,
        },
        {
          id: 4,
          title: "Matériel nécessaire",
          type: "pdf" as const,
          pdfUrl: "/pdfs/materiel.pdf",
          completed: false,
          locked: false,
        },
      ],
    },
    {
      id: 3,
      title: "Maîtriser Adobe Illustrator",
      chapters: [
        {
          id: 5,
          title: "Introduction à Illustrator",
          type: "video" as const,
          duration: "2h 10min",
          videoUrl: "/assets/videos/video.mp4",
          completed: false,
          locked: true,
        },
      ],
    },
  ],
  progress: 4,
  totalChapters: 25,
}

export default function LearnPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const chapterId = parseInt(params.chapterId as string)

  const [currentChapter, setCurrentChapter] = useState<Chapter | null>(null)
  const [currentModule, setCurrentModule] = useState<Module | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [showConnectionWarning, setShowConnectionWarning] = useState(false)
  const [connectionCount, setConnectionCount] = useState(1)

  useEffect(() => {
    // Find current chapter and module
    for (const module of courseData.modules) {
      const chapter = module.chapters.find((ch) => ch.id === chapterId)
      if (chapter) {
        setCurrentChapter(chapter)
        setCurrentModule(module)
        break
      }
    }

    // Simulate connection quota check
    if (connectionCount > 2) {
      setShowConnectionWarning(true)
    }
  }, [chapterId, connectionCount])

  if (!currentChapter || !currentModule) {
    return (
      <DashboardLayout>
        <div className="p-6">
          <Alert variant="destructive">
            <AlertCircle className="w-4 h-4" />
            <AlertDescription>
              Chapitre introuvable ou verrouillé
            </AlertDescription>
          </Alert>
        </div>
      </DashboardLayout>
    )
  }

  const handleChapterComplete = () => {
    // Mark chapter as completed
    if (currentChapter) {
      currentChapter.completed = true
    }
  }

  const handleNextChapter = () => {
    // Find next chapter
    let found = false
    for (const module of courseData.modules) {
      for (let i = 0; i < module.chapters.length; i++) {
        if (module.chapters[i].id === chapterId && i < module.chapters.length - 1) {
          const nextChapter = module.chapters[i + 1]
          if (!nextChapter.locked) {
            window.location.href = `/learn/${courseId}/${nextChapter.id}`
            return
          }
        }
        if (module.chapters[i].id === chapterId) {
          found = true
        }
      }
      if (found) break
    }
  }

  const handlePrevChapter = () => {
    // Find previous chapter
    for (const module of courseData.modules) {
      for (let i = 0; i < module.chapters.length; i++) {
        if (module.chapters[i].id === chapterId && i > 0) {
          const prevChapter = module.chapters[i - 1]
          window.location.href = `/learn/${courseId}/${prevChapter.id}`
          return
        }
      }
    }
  }

  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row h-screen bg-background">
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Breadcrumbs */}
          <div className="px-4 lg:px-6 py-3 lg:py-4 border-b border-[#E0AB6C]/20 bg-white">
            <div className="flex items-center gap-2 text-xs lg:text-sm text-[#001A3B]/60 overflow-x-auto">
              <Link href="/courses" className="hover:text-[#001A3B] whitespace-nowrap">
                Mes Cours
              </Link>
              <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <Link href={`/courses/${courseId}`} className="hover:text-[#001A3B] truncate">
                {courseData.title}
              </Link>
              <ChevronRight className="w-3 h-3 lg:w-4 lg:h-4 flex-shrink-0" />
              <span className="text-[#001A3B] font-medium whitespace-nowrap">Cours</span>
            </div>
          </div>

          {/* Content Area */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6">
            <h1 className="text-xl lg:text-2xl font-bold text-[#001A3B] mb-4 lg:mb-6">
              {courseData.title}
            </h1>

            {/* Connection Warning */}
            {showConnectionWarning && (
              <Alert variant="destructive" className="mb-4">
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  Quota de connexions simultanées dépassé. Veuillez fermer une autre session.
                </AlertDescription>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowConnectionWarning(false)}
                  className="mt-2"
                >
                  <X className="w-4 h-4 mr-2" />
                  Fermer
                </Button>
              </Alert>
            )}

            {/* Video Player */}
            {currentChapter.type === "video" && (
              <div className="mb-6">
                <div className="relative w-full bg-black rounded-lg overflow-hidden aspect-video">
                  <video
                    className="w-full h-full"
                    controls
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                  >
                    <source src={currentChapter.videoUrl} type="video/mp4" />
                    Votre navigateur ne supporte pas la lecture de vidéos.
                  </video>
                </div>
                <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <span className="text-xs sm:text-sm text-[#001A3B]/60">
                      12:30 / 1:20:00
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handlePrevChapter}
                      className="flex-1 sm:flex-initial"
                    >
                      <ArrowLeft className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Précédent</span>
                    </Button>
                    <Button
                      className="bg-[#001A3B] hover:bg-[#001A3B]/90 flex-1 sm:flex-initial"
                      onClick={handleChapterComplete}
                      size="sm"
                    >
                      <CheckCircle2 className="w-4 h-4 sm:mr-2" />
                      <span className="hidden sm:inline">Marquer comme terminé</span>
                      <span className="sm:hidden">Terminé</span>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={handleNextChapter}
                      className="flex-1 sm:flex-initial"
                    >
                      <span className="hidden sm:inline">Suivant</span>
                      <ArrowRight className="w-4 h-4 sm:ml-2" />
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* PDF Viewer */}
            {currentChapter.type === "pdf" && (
              <div className="mb-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-[#001A3B]">
                      {currentChapter.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center mb-4">
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-[#001A3B]/40 mx-auto mb-4" />
                        <p className="text-[#001A3B]/60 mb-4">
                          Visionneuse PDF intégrée
                        </p>
                        <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
                          <Download className="w-4 h-4 mr-2" />
                          Télécharger le PDF
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handlePrevChapter}
                        className="flex-1 sm:flex-initial"
                      >
                        <ArrowLeft className="w-4 h-4 sm:mr-2" />
                        <span className="hidden sm:inline">Précédent</span>
                      </Button>
                      <Button
                        className="bg-[#001A3B] hover:bg-[#001A3B]/90 flex-1 sm:flex-initial"
                        onClick={handleChapterComplete}
                        size="sm"
                      >
                        <CheckCircle2 className="w-4 h-4 sm:mr-2" />
                        <span className="hidden sm:inline">Marquer comme terminé</span>
                        <span className="sm:hidden">Terminé</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={handleNextChapter}
                        className="flex-1 sm:flex-initial"
                      >
                        <span className="hidden sm:inline">Suivant</span>
                        <ArrowRight className="w-4 h-4 sm:ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Chapter Info */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  À propos de ce chapitre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#001A3B]/70">
                  Ce chapitre vous permet de comprendre les fondamentaux de
                  l'élevage de volaille. Vous apprendrez les bases nécessaires
                  pour démarrer votre propre élevage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Right Sidebar - Course Progress */}
        <div className="hidden lg:block w-80 border-l border-[#E0AB6C]/20 bg-white overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Progress Card */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Votre Progression d'Étude {courseData.progress}%
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={courseData.progress} className="mb-4" />
                <div className="flex items-center justify-between text-sm text-[#001A3B]/60 mb-2">
                  <span>25 Points</span>
                  <span>50 Points</span>
                  <span>75 Points</span>
                  <span>100 Points</span>
                </div>
                <p className="text-sm text-[#001A3B]/70 mt-4">
                  Excellent travail ! 🎉 Vous êtes sur la bonne voie pour
                  devenir un expert en {courseData.title}. Votre dévouement à
                  l'apprentissage est impressionnant. Continuez ainsi !
                </p>
              </CardContent>
            </Card>

            {/* Course Completion */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Progression du Cours
                </CardTitle>
                <p className="text-sm text-[#001A3B]/60">
                  {chapterId} / {courseData.totalChapters}
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {courseData.modules.map((module) => (
                    <div key={module.id} className="space-y-2">
                      <h4 className="font-semibold text-[#001A3B] text-sm">
                        {module.title}
                      </h4>
                      {module.chapters.map((chapter) => {
                        const isActive = chapter.id === chapterId
                        return (
                          <Link
                            key={chapter.id}
                            href={`/learn/${courseId}/${chapter.id}`}
                            className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                              isActive
                                ? "bg-[#001A3B] text-white"
                                : chapter.locked
                                ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                                : "bg-[#001A3B]/5 hover:bg-[#001A3B]/10"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {chapter.locked ? (
                                <Lock className="w-4 h-4" />
                              ) : chapter.completed ? (
                                <CheckCircle2 className="w-4 h-4 text-green-500" />
                              ) : isActive ? (
                                <Pause className="w-4 h-4" />
                              ) : (
                                <Play className="w-4 h-4" />
                              )}
                              <span className="text-sm font-medium">
                                {chapter.title}
                              </span>
                            </div>
                            {chapter.duration && (
                              <span className="text-xs">
                                {chapter.duration}
                              </span>
                            )}
                          </Link>
                        )
                      })}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quiz Section */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Quiz du Chapitre
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[#001A3B]/70 mb-4">
                  Testez vos connaissances avec le quiz de ce chapitre.
                </p>
                <Link href={`/quiz/${courseId}/${chapterId}`}>
                  <Button className="w-full bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B]">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Passer le quiz
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

