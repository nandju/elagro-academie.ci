"use client";

import { InstructorLayout } from "@/components/instructor/instructor-layout";
import { BookOpen, Upload, Save, ArrowLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useEffect, useState } from "react";
import supabase from "@/lib/supabase";

export default function InstructorNewCoursePage() {
  // Variables d'état pour chaque champ
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [instructorId, setInstructorId] = useState(0);
  const [instructorName, setInstructorName] = useState("noobs");
  // Fonction de soumission du formulaire

  const handleSubmit = async (e: React.FormEvent) => {
    setIsSubmitting(true);
    e.preventDefault();
    // Ici tu peux envoyer les données à ton API ou à Supabase
    // Exemple d'objet à envoyer :
    const newCourse = {
      title,
      category,
      level,
      description,
      price,
      pdfFile,
      videoFile,
    };

    const timestamp = Date.now();

    const { data, error } = await supabase.storage
      .from("elagro_bucket")
      .upload(`public/pdf/${timestamp}`, pdfFile ? pdfFile : new File([], ""), {
        cacheControl: "3600",
        upsert: false,
      });
    const { data: videoData, error: videoError } = await supabase.storage
      .from("elagro_bucket")
      .upload(
        `public/videos/${timestamp}`,
        videoFile ? videoFile : new File([], ""),
        {
          cacheControl: "3600",
          upsert: false,
        }
      );

    if (error) {
      console.error("Erreur lors de l'upload du PDF:", error);
      setIsSubmitting(false);
      return;
    }
    if (videoError) {
      console.error("Erreur lors de l'upload de la vidéo:", videoError);
      setIsSubmitting(false);
      return;
    }
    const { data: courseData, error: courseError } = await supabase
      .from("courses")
      .insert({
        title: title,
        category: category,
        instructor_id: instructorId,
        instructor: instructorName,
        level: level,
        description: description,
        pdf_url: data?.path,
        video_url: videoData?.path,
        price: price,
        status: "published",
      });
    if (courseError) {
      console.error("Erreur lors de l'ajout du cours:", courseError);
      setIsSubmitting(false);
      return;
    } else {
      console.log("Cours ajouté avec succès:", courseData);
      alert("Cours ajouté avec succès!");
      window.location.href = "/instructor/courses";
      setIsSubmitting(false);
    }

    console.log("Nouveau cours:", newCourse);
    // Reset ou redirection si besoin
  };

  const getUserConnected = async () => {
    const basicsInfo = document.cookie
      .split("; ")
      .find((row) => row.startsWith("user-connected="));
    if (!basicsInfo) return;
    const value = basicsInfo.split("=")[1];
    if (value) {
      const decoded = decodeURIComponent(value);
      const data2 = JSON.parse(decoded);
      const connectedUser = data2;

      const { data: userData, error } = await supabase
        .from("users")
        .select("*")
        .eq("id", connectedUser.id)
        .single();
      if (userData) {
        setInstructorId(connectedUser.id);
        setInstructorName(connectedUser.name);
        console.log("Utilisateur connecté:", connectedUser);
      } else {
        setIsSubmitting(true);
        alert("Une erreur est survenue. Veuillez vous reconnecter.");
      }
    } else {
      console.log("Aucun utilisateur connecté");
    }
  };

  useEffect(() => {
    console.log("Component mounted");
    getUserConnected();
  }, []);

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
            <h1 className="text-3xl font-bold text-[#001A3B]">
              Créer un nouveau cours
            </h1>
            <p className="text-[#001A3B]/70 mt-1">
              Remplissez les informations pour créer votre formation
            </p>
          </div>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
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
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Fondamentaux de l'Élevage de Volaille"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="course-category">Catégorie *</Label>
                  <select
                    id="course-category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
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
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
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
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
                    onChange={(e) =>
                      setPdfFile(e.target.files ? e.target.files[0] : null)
                    }
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
                    onChange={(e) =>
                      setVideoFile(e.target.files ? e.target.files[0] : null)
                    }
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
            <Button
              disabled={isSubmitting}
              type="submit"
              className="bg-[#001A3B] hover:bg-[#001A3B]/90"
            >
              <Save className="w-4 h-4 mr-2" />
              {isSubmitting ? "Création en cours..." : "Créer le cours"}
            </Button>
          </div>
        </form>
      </div>
    </InstructorLayout>
  );
}
