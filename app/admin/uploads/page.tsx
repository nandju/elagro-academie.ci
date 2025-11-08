"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  Upload, 
  Search, 
  Filter, 
  FileText,
  Video,
  Image as ImageIcon,
  Download,
  Trash2,
  CheckCircle2,
  XCircle,
  AlertCircle
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

// Mock data
const uploads = [
  {
    id: "1",
    name: "guide-elevage-volaille.pdf",
    type: "pdf",
    size: "2.5 MB",
    course: "Fondamentaux de l'Élevage de Volaille",
    chapter: "Chapitre 1",
    status: "verified",
    uploadedBy: "Marie Diallo",
    uploadedAt: "2024-03-15",
  },
  {
    id: "2",
    name: "introduction-culture.mp4",
    type: "video",
    size: "125 MB",
    course: "Gestion des Cultures Agricoles",
    chapter: "Introduction",
    status: "pending",
    uploadedBy: "Amadou Sarr",
    uploadedAt: "2024-03-16",
  },
  {
    id: "3",
    name: "schema-elevage.png",
    type: "image",
    size: "850 KB",
    course: "Élevage de Porcs Moderne",
    chapter: "Chapitre 2",
    status: "verified",
    uploadedBy: "Marie Diallo",
    uploadedAt: "2024-03-14",
  },
  {
    id: "4",
    name: "quiz-evaluation.pdf",
    type: "pdf",
    size: "1.2 MB",
    course: "Techniques d'Élevage de Ruminants",
    chapter: "Chapitre 3",
    status: "rejected",
    uploadedBy: "Amadou Sarr",
    uploadedAt: "2024-03-13",
  },
]

const fileTypeIcons = {
  pdf: FileText,
  video: Video,
  image: ImageIcon,
}

const statusColors = {
  verified: "bg-green-500",
  pending: "bg-yellow-500",
  rejected: "bg-red-500",
}

const statusLabels = {
  verified: "Vérifié",
  pending: "En attente",
  rejected: "Rejeté",
}

export default function AdminUploadsPage() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Gestion des Uploads</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Gérez et vérifiez tous les fichiers uploadés
            </p>
          </div>
          <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
            <Upload className="w-4 h-4 mr-2" />
            Upload un fichier
          </Button>
        </div>

        {/* Upload Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Total fichiers
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{uploads.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Vérifiés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {uploads.filter((u) => u.status === "verified").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                En attente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-500">
                {uploads.filter((u) => u.status === "pending").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Rejetés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-500">
                {uploads.filter((u) => u.status === "rejected").length}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
                <Input
                  type="search"
                  placeholder="Rechercher un fichier..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Uploads List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Liste des fichiers
            </CardTitle>
            <CardDescription>
              Tous les fichiers uploadés sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {uploads.map((upload) => {
                const FileIcon = fileTypeIcons[upload.type as keyof typeof fileTypeIcons]
                return (
                  <div
                    key={upload.id}
                    className="flex items-center gap-4 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                  >
                    <div className="p-3 rounded-lg bg-[#001A3B]/10">
                      <FileIcon className="w-6 h-6 text-[#001A3B]" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-[#001A3B]">{upload.name}</h3>
                        <Badge
                          className={`${statusColors[upload.status as keyof typeof statusColors]} text-white`}
                        >
                          {upload.status === "verified" && <CheckCircle2 className="w-3 h-3 mr-1" />}
                          {upload.status === "pending" && <AlertCircle className="w-3 h-3 mr-1" />}
                          {upload.status === "rejected" && <XCircle className="w-3 h-3 mr-1" />}
                          {statusLabels[upload.status as keyof typeof statusLabels]}
                        </Badge>
                      </div>
                      <p className="text-sm text-[#001A3B]/70 mb-2">
                        {upload.course} • {upload.chapter}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                        <span>{upload.size}</span>
                        <span>•</span>
                        <span>Par {upload.uploadedBy}</span>
                        <span>•</span>
                        <span>Le {new Date(upload.uploadedAt).toLocaleDateString("fr-FR")}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Télécharger
                      </Button>
                      {upload.status === "pending" && (
                        <>
                          <Button variant="default" size="sm" className="bg-green-500 hover:bg-green-600">
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Approuver
                          </Button>
                          <Button variant="destructive" size="sm">
                            <XCircle className="w-4 h-4 mr-2" />
                            Rejeter
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="icon">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

