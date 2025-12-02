"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import {
  Award,
  CheckCircle2,
  XCircle,
  Calendar,
  FileText,
  QrCode,
  ArrowLeft,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import supabase from "@/lib/supabase"

// Mock data - In a real app, this would be fetched from an API
// const certificates: Record<string, any> = {
//   "CERT-001": {
//     id: "CERT-001",
//     courseName: "Fondamentaux de l'Élevage de Volaille",
//     studentName: "Jean Kouamé",
//     issueDate: "2024-02-15",
//     score: 85,
//     verified: true,
//     category: "Élevage",
//   },
//   "CERT-002": {
//     id: "CERT-002",
//     courseName: "Gestion des Cultures Agricoles",
//     studentName: "Jean Kouamé",
//     issueDate: "2024-02-10",
//     score: 92,
//     verified: true,
//     category: "Agriculture",
//   },
// }

export default function VerifyCertificatePage() {
  const params = useParams()
  const certificateId = params.id as string
  const [certificate, setCertificate] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [certificates, setCertificates] = useState<any>()
  const getCertificats = async () => {
    const {data, error} = await supabase.from('certificats').select('*').eq('certificat_id', certificateId).single()
    if (error) {
      console.log('error', error)
    } else {
     
      setCertificates(data)
    }
  }

  useEffect(() => {
    // Simulate API call
    getCertificats()
    setTimeout(() => {
      // const cert = certificates[certificateId]
      // setCertificate(cert)
      setLoading(false)
    }, 500)
  }, [certificateId])

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#E0AB6C] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-[#001A3B]/70">Vérification en cours...</p>
        </div>
      </div>
    )
  }

  if (!certificates) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <Card className="max-w-md w-full">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-500" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl font-bold text-[#001A3B]">
              Certificat Non Trouvé
            </CardTitle>
            <CardDescription className="text-center">
              Le certificat avec l'ID {certificateId} n'existe pas ou n'est plus valide.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/certificates">
              <Button className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Retour aux certificats
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/certificates">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Retour
            </Button>
          </Link>
          <Badge className="bg-green-500 text-white text-lg px-4 py-2">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Certificat Vérifié
          </Badge>
        </div>

        {/* Verification Success */}
        <Card className="bg-green-50 border-green-200">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
              <div>
                <h2 className="text-xl font-bold text-green-900">
                  Certificat Authentique
                </h2>
                <p className="text-green-700">
                  Ce certificat a été vérifié et est valide.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificate Details */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>
            <CardTitle className="text-center text-2xl font-bold text-[#001A3B]">
              Certificat de Réussite
            </CardTitle>
            <CardDescription className="text-center">
              {certificates.course_name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-[#E0AB6C] rounded-lg p-8 bg-gradient-to-br from-white to-[#E0AB6C]/5">
              <div className="text-center space-y-4">
                <p className="text-[#001A3B]/70">Ceci certifie que</p>
                <h3 className="text-2xl font-bold text-[#001A3B]">
                  {certificates.studentName}
                </h3>
                <p className="text-[#001A3B]/70">
                  a terminé avec succès le cours
                </p>
                <h4 className="text-xl font-bold text-[#E0AB6C]">
                  {certificates.course_name}
                </h4>
                <div className="flex items-center justify-center gap-6 mt-6">
                  <div className="flex items-center gap-2 text-[#001A3B]/70">
                    <Calendar className="w-5 h-5" />
                    <span>
                      {new Date(certificates.created_at).toLocaleDateString("fr-FR")}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[#001A3B]/70">
                    <FileText className="w-5 h-5" />
                    <span>Score: {certificates.score || 0}%</span>
                  </div>
                </div>
                <div className="mt-8">
                  <Badge variant="outline" className="text-[#001A3B]">
                    {certificates.category}
                  </Badge>
                </div>
                <div className="mt-6 pt-6 border-t border-[#E0AB6C]/20">
                  <p className="text-xs text-[#001A3B]/60">
                    Certificat ID: {certificates.certificat_id}
                  </p>
                  <div className="flex justify-center mt-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                      <QrCode className="w-16 h-16 text-[#001A3B]/40" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verification Info */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-bold text-[#001A3B]">
              Informations de Vérification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-[#001A3B]/60 mb-1">
                  ID du Certificat
                </p>
                <p className="text-[#001A3B] font-mono">{certificates.certificat_id}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#001A3B]/60 mb-1">
                  Date d'émission
                </p>
                <p className="text-[#001A3B]">
                  {new Date(certificates.created_at).toLocaleDateString("fr-FR")}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#001A3B]/60 mb-1">
                  Statut
                </p>
                <Badge className="bg-green-500 text-white">
                  <CheckCircle2 className="w-3 h-3 mr-1" />
                  Vérifié
                </Badge>
              </div>
              <div>
                <p className="text-sm font-medium text-[#001A3B]/60 mb-1">
                  Score
                </p>
                <p className="text-[#001A3B] font-semibold">
                  {certificates.score}%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

