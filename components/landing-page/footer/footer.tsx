import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export default function FooterLandingPage() {
  return (
    <footer className="bg-foreground text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">À propos</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Carrières
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Événements
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Liens</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Bibliothèque
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Galerie
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Forums
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Plan du site
                </a>
              </li>
            </ul>
          </div>

          {/* Additional */}
          <div>
            <h3 className="font-semibold mb-4">Plus</h3>
            <ul className="space-y-2 text-sm text-blue-100">
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Partenaires
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#E0AB6C] transition-colors">
                  Carrière
                </a>
              </li>
            </ul>
          </div>

          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-20 h-20">
                <Image 
                  src="/assets/images/logo_blanc&noir.png" 
                  alt="Logo Elagro Academy" 
                  width={100} 
                  height={100} 
                  className="object-contain" 
                />
              </div>
            </div>
            <p className="text-xs text-blue-100 mb-4">© 2025 Elagro Academy. Tous droits réservés</p>
            <div className="flex gap-3">
              <Facebook className="w-4 h-4 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
              <Twitter className="w-4 h-4 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
              <Linkedin className="w-4 h-4 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-[#E0AB6C] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-blue-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <a href="#" className="hover:text-[#E0AB6C] transition-colors">
              Conditions d'utilisation
            </a>
            <a href="#" className="hover:text-[#E0AB6C] transition-colors">
              Politique de confidentialité
            </a>
          </div>
          <p className="mt-4 md:mt-0">© 2025 Elagro Academy. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}
