"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  BookOpen, 
  Plus,
  Edit,
  Trash2,
  Eye,
  ArrowLeft,
  Video,
  FileText,
  CheckCircle2,
  XCircle,
  GripVertical
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useParams } from "next/navigation"

// Mock data
const course = {
  id: "1",
  title: "Fondamentaux de l'Élevage de Volaille",
  category: "Élevage",
}

const chapters = [
  {
    id: "1",
    title: "Bienvenue dans le cours",
    description: "Introduction générale à la formation",
    type: "video",
    duration: "20 min",
    published: true,
    order: 1,
  },
  {
    id: "2",
    title: "Guide du cours",
    description: "Document PDF avec les informations importantes",
    type: "pdf",
    duration: "15 min",
    published: true,
    order: 2,
  },
  {
    id: "3",
    title: "Les bases de l'élevage",
    description: "Vidéo sur les fondamentaux",
    type: "video",
    duration: "1h 20min",
    published: false,
    order: 3,
  },
]

export default function InstructorChaptersPage() {
  const params = useParams()
  const courseId = params.id

  return (
    <InstructorLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center gap-4">
          <Link href="/instructor/courses">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-[#001A3B]">Gestion des Chapitres</h1>
            <p className="text-[#001A3B]/70 mt-1">
              {course.title}
            </p>
          </div>
          <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
            <Plus className="w-4 h-4 mr-2" />
            Ajouter un chapitre
          </Button>
        </div>

        {/* Chapters List */}
        <div className="space-y-4">
          {chapters.map((chapter) => (
            <Card key={chapter.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="p-2 rounded-lg bg-[#001A3B]/10 cursor-move">
                      <GripVertical className="w-5 h-5 text-[#001A3B]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <CardTitle className="text-lg font-bold text-[#001A3B]">
                          {chapter.title}
                        </CardTitle>
                        <Badge
                          variant={chapter.published ? "default" : "outline"}
                          className={
                            chapter.published
                              ? "bg-green-500 text-white"
                              : "bg-yellow-500 text-white"
                          }
                        >
                          {chapter.published ? (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          ) : (
                            <XCircle className="w-3 h-3 mr-1" />
                          )}
                          {chapter.published ? "Publié" : "Brouillon"}
                        </Badge>
                        {chapter.type === "video" ? (
                          <Video className="w-4 h-4 text-[#001A3B]/60" />
                        ) : (
                          <FileText className="w-4 h-4 text-[#001A3B]/60" />
                        )}
                      </div>
                      <CardDescription className="mb-2">
                        {chapter.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                        <span>Durée: {chapter.duration}</span>
                        <span>•</span>
                        <span>Ordre: {chapter.order}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4 mr-2" />
                      Voir
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Modifier
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Fichier PDF (optionnel)</Label>
                      <Input type="file" accept=".pdf" />
                    </div>
                    <div className="space-y-2">
                      <Label>Vidéo (optionnel)</Label>
                      <Input type="file" accept="video/*" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Ressources complémentaires</Label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                      placeholder="Liens vers des ressources externes, documents, etc."
                    />
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

