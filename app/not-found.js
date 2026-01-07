import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 px-6 py-8 lg:py-0">
      <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto w-full space-y-6">
        {/* Illustration */}
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[420px] md:h-[420px] drop-shadow-lg">
          <Image
            src="/assets/images/illustrations/page-introuvable/404-erreur.png"
            alt="Page non trouvée"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Texte principal */}
        <div className="space-y-4 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800">
            Oups ! Cette page est introuvable 😕
          </h1>

          <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto leading-relaxed">
            Il semble que la page que vous recherchez n'existe pas ou ait été déplacée.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            Pas d'inquiétude, vous pouvez retourner à l'accueil pour continuer votre navigation.
          </p>
        </div>

        {/* Bouton de retour */}
        <div className="pt-2">
          <Link href="/">
            <Button
              className="px-6 py-3 text-base font-semibold bg-[#001A3B] hover:bg-[#001A3B]/90 text-white rounded-lg transition-colors shadow-sm"
              size="lg"
            >
              Retour à l'accueil
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
