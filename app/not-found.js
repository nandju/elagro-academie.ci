import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 text-center px-6">
      {/* Illustration */}
      <div className="relative w-[350px] h-[350px] md:w-[420px] md:h-[420px] mb-6 drop-shadow-lg">
        <Image
          src="/assets/images/illustrations/page-introuvable/404-erreur.png"
          alt="Page non trouvée"
          fill
          className="object-contain"
        />
      </div>

      {/* Texte principal */}
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-3">
        Oups ! Cette page est introuvable 😕
      </h1>

      <p className="text-gray-600 max-w-lg">
        Il semble que la page que vous recherchez n’existe pas ou ait été déplacée.<br />
        Pas d’inquiétude, vous pouvez retourner à l’accueil pour continuer votre navigation.
      </p>

      {/* Bouton de retour */}
      <Link href="/" passHref>
        <Button
          as="a"
          className="px-4 py-2 text-sm font-semibold bg-[#001A3B] hover:bg-[#001A3B]/90 text-white rounded-lg transition-colors shadow-sm"
          size="lg"
        >
          Retour à l’accueil
        </Button>
      </Link>

      {/* Décor bas de page */}
      {/*<div className="absolute bottom-8 text-sm text-gray-400">
        © {new Date().getFullYear()} Elagro Academy
      </div>*/}
    </div>
  );
}
