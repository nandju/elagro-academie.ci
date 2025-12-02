"use client";

import { useEffect, useState } from "react";
import { DashboardLayout } from "@/components/dashboard/dashboard-layout";
import {
  Award,
  Download,
  Eye,
  CheckCircle2,
  Calendar,
  Share2,
  QrCode,
  FileText,
  Search,
  Filter,
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
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import supabase from "@/lib/supabase";
import jsPDF from "jspdf";

// Mock data
// const certificates = [
//   {
//     id: "CERT-001",
//     courseName: "Fondamentaux de l'Élevage de Volaille",
//     issueDate: "2024-02-15",
//     completionDate: "2024-02-14",
//     score: 85,
//     verified: true,
//     qrCode: "/qr-codes/cert-001.png",
//     pdfUrl: "/certificates/cert-001.pdf",
//     category: "Élevage",
//   },
//   {
//     id: "CERT-002",
//     courseName: "Gestion des Cultures Agricoles",
//     issueDate: "2024-02-10",
//     completionDate: "2024-02-09",
//     score: 92,
//     verified: true,
//     qrCode: "/qr-codes/cert-002.png",
//     pdfUrl: "/certificates/cert-002.pdf",
//     category: "Agriculture",
//   },
//   {
//     id: "CERT-003",
//     courseName: "Maîtrise des Systèmes d'Élevage",
//     issueDate: "2024-01-28",
//     completionDate: "2024-01-27",
//     score: 78,
//     verified: true,
//     qrCode: "/qr-codes/cert-003.png",
//     pdfUrl: "/certificates/cert-003.pdf",
//     category: "Élevage",
//   },
// ]

export default function CertificatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(
    null
  );
  const [certificates, setCertificates] = useState<any[]>([]);
  const [filteredCertificates, setFilteredCertificates] = useState<any[]>([]);

  const fetchCertificates = async () => {
    const basicsInfo = document.cookie
  .split('; ')
  .find(row => row.startsWith('user-connected='));
if (!basicsInfo) return;
const value = basicsInfo.split('=')[1];
    const decoded = decodeURIComponent(value);
    const datas = JSON.parse(decoded);
    const {data, error} = await supabase.from('certificats').select('*').eq('learner_id', datas.id);
    if (data && data.length > 0) {
      setCertificates(data);
      setFilteredCertificates(data);
    }

  };

  

  const handleDownload = (certificateId: string) => {
    const certificate = certificates.find((c) => c.certificat_id === certificateId);
    if (certificate) {
      // // In a real app, this would trigger a download
      // console.log("Downloading certificate:", certificate.pdfUrl);
      // // You would typically use a download API endpoint here
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
    }
  };

  const handleVerify = (certificateId: string) => {
    // Open verification page
    window.open(`/certificate/${certificateId}/verify`, "_blank");
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#001A3B]">
              Mes Certificats
            </h1>
            <p className="text-[#001A3B]/70 mt-1">
              Consultez et téléchargez vos certificats de réussite
            </p>
          </div>
          <Badge className="bg-[#E0AB6C] text-[#001A3B] text-lg px-4 py-2">
            {certificates.length} Certificat{certificates.length > 1 ? "s" : ""}
          </Badge>
        </div>

        {/* Search and Filter */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
                <Input
                  placeholder="Rechercher un certificat..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
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

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg font-bold text-[#001A3B]">
                        {certificate.course_name}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        ID: {certificate.certificat_id}
                      </CardDescription>
                    </div>
                  </div>
                  {certificate?.status == "issued"  && (
                    <Badge className="bg-green-500 text-white">
                      <CheckCircle2 className="w-3 h-3 mr-1" />
                      Vérifié
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#001A3B]/60">Date d'obtention:</span>
                    <span className="font-medium text-[#001A3B]">
                      {new Date(certificate.created_at).toLocaleDateString(
                        "fr-FR"
                      )}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#001A3B]/60">Score:</span>
                    <span className="font-medium text-[#001A3B]">
                      {certificate.score ||0}%
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[#001A3B]/60">Catégorie:</span>
                    <Badge variant="outline" className="text-[#001A3B]">
                      {certificate.category}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-4 border-t border-[#E0AB6C]/20">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setSelectedCertificate(certificate.id)}
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        Voir
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-[#001A3B]">
                          Certificat de Réussite
                        </DialogTitle>
                        <DialogDescription>
                          {certificate.course_name}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        {/* Certificate Preview */}
                        <div className="border-2 border-[#E0AB6C] rounded-lg p-8 bg-gradient-to-br from-white to-[#E0AB6C]/5">
                          <div className="text-center space-y-4">
                            <div className="flex justify-center">
                              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] flex items-center justify-center">
                                <Award className="w-10 h-10 text-white" />
                              </div>
                            </div>
                            <h2 className="text-2xl font-bold text-[#001A3B]">
                              Certificat de Réussite
                            </h2>
                            <p className="text-[#001A3B]/70">
                              Ceci certifie que
                            </p>
                            <h3 className="text-xl font-semibold text-[#001A3B]">
                              {certificate.studentName}
                            </h3>
                            <p className="text-[#001A3B]/70">
                              a terminé avec succès le cours
                            </p>
                            <h4 className="text-lg font-bold text-[#E0AB6C]">
                              {certificate.course_name}
                            </h4>
                            <div className="flex items-center justify-center gap-4 text-sm text-[#001A3B]/70">
                              <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <span>
                                  {new Date(
                                    certificate.created_at
                                  ).toLocaleDateString("fr-FR")}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <FileText className="w-4 h-4" />
                                <span>Score: {certificate.score || 0}%</span>
                              </div>
                            </div>
                            <div className="flex justify-center mt-4">
                              <div className="w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center">
                                <QrCode className="w-16 h-16 text-[#001A3B]/40" />
                              </div>
                            </div>
                            <p className="text-xs text-[#001A3B]/60">
                              Certificat ID: {certificate.certificat_id}
                            </p>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-2">
                          <Button
                            className="flex-1 bg-[#001A3B] hover:bg-[#001A3B]/90"
                            onClick={() => handleDownload(certificate.certificatid)}
                          >
                            <Download className="w-4 h-4 mr-2" />
                            Télécharger PDF
                          </Button>
                          <Button
                            variant="outline"
                            className="flex-1"
                            onClick={() => handleVerify(certificate.certificat_id)}
                          >
                            <QrCode className="w-4 h-4 mr-2" />
                            Vérifier
                          </Button>
                          <Button variant="outline" size="icon">
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleDownload(certificate.certificat_id)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    PDF
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    onClick={() => handleVerify(certificate.certificat_id)}
                  >
                    <QrCode className="w-4 h-4 mr-2" />
                    Vérifier
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredCertificates.length === 0 && (
          <Card>
            <CardContent className="py-12 text-center">
              <Award className="w-16 h-16 text-[#001A3B]/30 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#001A3B] mb-2">
                Aucun certificat trouvé
              </h3>
              <p className="text-[#001A3B]/70">
                {searchQuery
                  ? "Essayez une autre recherche"
                  : "Complétez des cours pour obtenir des certificats"}
              </p>
            </CardContent>
          </Card>
        )}

        {/* Verification Info */}
        <Card className="bg-[#E0AB6C]/10 border-[#E0AB6C]">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-[#001A3B] flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#E0AB6C]" />
              Vérification Publique
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[#001A3B]/70 mb-4">
              Tous les certificats sont vérifiables publiquement via leur QR
              code ou en utilisant l'URL de vérification. Partagez votre
              certificat en toute confiance.
            </p>
            <Button variant="outline" className="bg-white">
              En savoir plus sur la vérification
            </Button>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
