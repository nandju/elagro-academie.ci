"use client"

import { InstructorLayout } from "@/components/instructor/instructor-layout"
import { 
  BookOpen, 
  Upload,
  Save,
  ArrowLeft
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function InstructorNewCoursePage() {
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
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Créer un nouveau cours</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Remplissez les informations pour créer votre formation
            </p>
          </div>
        </div>

        <form className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Informations de base
              </CardTitle>
              <CardDescription>
                Nom, catégorie, description et niveau du cours
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course-title">Titre du cours *</Label>
                <Input
                  id="course-title"
                  placeholder="Ex: Fondamentaux de l'Élevage de Volaille"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course-category">Catégorie *</Label>
                  <select
                    id="course-category"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
                    required
                  >
                    <option value="">Sélectionner une catégorie</option>
                    <option value="agriculture">Agriculture 🌾</option>
                    <option value="elevage">Élevage 🐄</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="course-level">Niveau *</Label>
                  <select
                    id="course-level"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors"
                    required
                  >
                    <option value="">Sélectionner un niveau</option>
                    <option value="beginner">Débutant</option>
                    <option value="intermediate">Intermédiaire</option>
                    <option value="advanced">Avancé</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="course-description">Description *</Label>
                <textarea
                  id="course-description"
                  className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                  placeholder="Décrivez votre formation en détail..."
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="course-price">Prix (€)</Label>
                <Input
                  id="course-price"
                  type="number"
                  placeholder="0 pour un cours gratuit"
                  min="0"
                />
              </div>
            </CardContent>
          </Card>

          {/* Media Upload */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Médias d'introduction
              </CardTitle>
              <CardDescription>
                Upload du PDF et vidéo d'introduction
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="course-pdf">PDF d'introduction</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="course-pdf"
                    type="file"
                    accept=".pdf"
                    className="flex-1"
                  />
                  <Button type="button" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                <p className="text-xs text-[#001A3B]/60">
                  Format accepté: PDF (max 10 MB)
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="course-video">Vidéo d'introduction</Label>
                <div className="flex items-center gap-4">
                  <Input
                    id="course-video"
                    type="file"
                    accept="video/*"
                    className="flex-1"
                  />
                  <Button type="button" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload
                  </Button>
                </div>
                <p className="text-xs text-[#001A3B]/60">
                  Format accepté: MP4, MOV (max 500 MB)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4">
            <Link href="/instructor/courses">
              <Button type="button" variant="outline">
                Annuler
              </Button>
            </Link>
            <Button type="submit" className="bg-[#001A3B] hover:bg-[#001A3B]/90">
              <Save className="w-4 h-4 mr-2" />
              Créer le cours
            </Button>
          </div>
        </form>
      </div>
    </InstructorLayout>
  )
}

