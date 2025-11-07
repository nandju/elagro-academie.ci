import CourseDetails from "@/components/courses/course-details";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // In a real app, fetch course data here
  return {
    title: "Détails du Cours | ELAGRO ACADEMY",
    description: "Découvrez les détails complets du cours, les modules, les vidéos et les ressources disponibles.",
  };
}

export default async function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <CourseDetails courseId={id} />;
}

