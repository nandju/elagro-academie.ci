"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  Award, 
  Search, 
  Filter, 
  Download,
  Eye,
  CheckCircle2,
  XCircle,
  FileText,
  User
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useEffect, useState } from "react"
import jsPDF from "jspdf"
import supabase from "@/lib/supabase"

// Mock data
// const certificates = [
//   {
//     id: "1",
//     studentName: "Jean Kouamé",
//     course: "Fondamentaux de l'Élevage de Volaille",
//     instructor: "Marie Diallo",
//     issueDate: "2024-03-15",
//     status: "issued",
//     score: 92,
//     certificateNumber: "CERT-2024-001",
//   },
//   {
//     id: "2",
//     studentName: "Pierre Traoré",
//     course: "Gestion des Cultures Agricoles",
//     instructor: "Amadou Sarr",
//     issueDate: "2024-03-14",
//     status: "issued",
//     score: 88,
//     certificateNumber: "CERT-2024-002",
//   },
//   {
//     id: "3",
//     studentName: "Sophie Koné",
//     course: "Élevage de Porcs Moderne",
//     instructor: "Marie Diallo",
//     issueDate: "2024-03-13",
//     status: "pending",
//     score: 75,
//     certificateNumber: "CERT-2024-003",
//   },
//   {
//     id: "4",
//     studentName: "Amadou Sarr",
//     course: "Techniques d'Élevage de Ruminants",
//     instructor: "Amadou Sarr",
//     issueDate: "2024-03-12",
//     status: "issued",
//     score: 95,
//     certificateNumber: "CERT-2024-004",
//   },
// ]
export default function AdminCertificatesPage() {
  // Fonction pour générer le PDF du certificat
const generateCertificatePDF = (certificate: any) => {
  const doc = new jsPDF("landscape", "pt", "A4");
  const pageWidth = doc.internal.pageSize.getWidth();
  const pageHeight = doc.internal.pageSize.getHeight();

  // IMAGES (placeholders en Base64)
  const logo =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."; //  logo
  const signature1 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."; // signature formateur
  const signature2 =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."; // signature directeur
  const seal =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA..."; // sceau officiel

  // --- BORDURES ---
  doc.setDrawColor(80, 80, 80);
  doc.setLineWidth(4);
  doc.rect(30, 30, pageWidth - 60, pageHeight - 60);

  doc.setDrawColor(150, 150, 150);
  doc.setLineWidth(1.5);
  doc.rect(50, 50, pageWidth - 100, pageHeight - 100);

  // // --- LOGO ---
  // doc.addImage(logo, "PNG", pageWidth / 2 - 40, 55, 80, 80);

  // --- TITRE ---
  doc.setFont("times", "bold");
  doc.setFontSize(34);
  doc.text("CERTIFICAT DE FIN DE FORMATION", pageWidth / 2, 170, {
    align: "center",
  });

  // --- SOUS TITRE ---
  doc.setFont("times", "italic");
  doc.setFontSize(20);
  doc.text("Ce certificat atteste que", pageWidth / 2, 215, {
    align: "center",
  });

  // --- NOM ---
  doc.setFont("times", "bold");
  doc.setFontSize(30);
  doc.text(certificate.studentName, pageWidth / 2, 260, {
    align: "center",
  });

  // --- FORMATION ---
  doc.setFont("times", "normal");
  doc.setFontSize(18);
  doc.text("A complété avec succès la formation :", pageWidth / 2, 305, {
    align: "center",
  });

  doc.setFont("times", "bold");
  doc.setFontSize(24);
  doc.text(certificate.course_name, pageWidth / 2, 340, {
    align: "center",
  });

  // --- INFOS SUPP ---
  doc.setFontSize(16);
  doc.setFont("times", "normal");
  doc.text(`Score : ${certificate.score}%`, pageWidth / 2, 380, {
    align: "center",
  });
  doc.text(`Formateur : ${certificate.instructor}`, pageWidth / 2, 405, {
    align: "center",
  });
  doc.text(
    `Délivré le : ${new Date(certificate.created_at).toLocaleDateString(
      "fr-FR"
    )}`,
    pageWidth / 2,
    430,
    { align: "center" }
  );

  // --- SIGNATURES ---
  // doc.addImage(signature1, "PNG", 150, pageHeight - 180, 120, 60);
  doc.text("Formateur", 210, pageHeight - 100, { align: "center" });

  // doc.addImage(signature2, "PNG", pageWidth - 270, pageHeight - 180, 120, 60);
  doc.text("Directeur", pageWidth - 210, pageHeight - 100, {
    align: "center",
  });

  // --- SCEAU ---
  // doc.addImage(seal, "PNG", pageWidth / 2 - 50, pageHeight - 200, 100, 100);

  // --- NUMÉRO ---
  doc.setFontSize(12);
  doc.text(
    `Certificat n° ${certificate.certificat_id}`,
    pageWidth - 30,
    pageHeight - 10,
    { align: "right" }
  );

  doc.save(`certificat-${certificate.certificat_id}.pdf`);
};

  const [certificates, setCertificates] = useState<any[]>([])

  const fetchCertificates = async () => {
    const { data, error } = await supabase
      .from("certificats")
      .select("*")
      .order("created_at", { ascending: false })

    if (error) {
      console.error("Error fetching certificates:", error)
    }
    else {
      setCertificates(data || [])
    }
  }

  const validateCertificate = async (id: string) => {
    const { data, error } = await supabase
      .from("certificats")
      .update({ status: "issued" })
      .eq("id", id)
    if (error) {
      console.error("Error validating certificate:", error)
      alert("Erreur lors de la validation du certificat.")
    } else {
      alert("Certificat validé avec succès.")
      fetchCertificates();
    }
  }




  useEffect(() => {
    fetchCertificates();
  }, [])
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">Gestion des Certificats</h1>
            <p className="text-[#001A3B]/70 mt-1">
              Validez et gérez tous les certificats de fin de formation
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Total certificats
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">{certificates.length}</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Délivrés
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">
                {certificates.filter((c) => c.status === "issued").length}
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
                {certificates.filter((c) => c.status === "pending").length}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Score moyen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                { certificates.length > 0 ? Math.round(certificates.reduce((acc, c) => acc + parseFloat(c.score), 0) / certificates.length) : 0}%
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
                  placeholder="Rechercher un certificat..."
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

        {/* Certificates List */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Liste des certificats
            </CardTitle>
            <CardDescription>
              Tous les certificats générés sur la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {certificates.map((certificate):any => (
                <div
                  key={certificate.id}
                  className="flex items-center gap-4 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                >
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] text-white">
                      {certificate.studentName.split(" ").map((n:any) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-[#001A3B]">{certificate.studentName}</h3>
                      <Badge
                        variant={certificate.status === "issued" ? "default" : "outline"}
                        className={
                          certificate.status === "issued"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-white"
                        }
                      >
                        {certificate.status === "issued" ? (
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                        ) : (
                          <XCircle className="w-3 h-3 mr-1" />
                        )}
                        {certificate.status === "issued" ? "Délivré" : "En attente"}
                      </Badge>
                    </div>
                    <p className="text-sm text-[#001A3B]/70 mb-2">{certificate.course}</p>
                    <div className="flex items-center gap-4 text-sm text-[#001A3B]/60">
                      <span>Formateur: {certificate.instructor}</span>
                      <span>•</span>
                      <span>Score: {certificate.score}%</span>
                      <span>•</span>
                      <span>Délivré le {new Date(certificate.created_at).toLocaleDateString("fr-FR")}</span>
                      <span>•</span>
                      <span className="font-mono text-xs">CERT-{certificate.certificat_id}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {certificate.status === "pending" && (
                      <Button size="sm" className="bg-green-500 hover:bg-green-600" onClick={() => validateCertificate(certificate.id)}>
                        <CheckCircle2 className="w-4 h-4 mr-2" />
                        Valider
                      </Button>
                    )}
                    {/* <Button variant="outline" size="sm" >
                      <Eye className="w-4 h-4 mr-2" />
                      Voir
                    </Button> */}
                    <Button variant="outline" size="sm" onClick={() => generateCertificatePDF(certificate)}>
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger PDF
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

