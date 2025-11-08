"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  HelpCircle,
  Search,
  MessageCircle,
  Mail,
  Phone,
  Book,
  ChevronDown,
  ChevronUp,
  Send,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

// Mock data
const faqCategories = [
  { id: "general", name: "Général", count: 8 },
  { id: "courses", name: "Cours", count: 12 },
  { id: "certificates", name: "Certificats", count: 5 },
  { id: "payments", name: "Paiements", count: 6 },
  { id: "technical", name: "Technique", count: 10 },
]

const faqs = [
  {
    id: 1,
    category: "general",
    question: "Comment créer un compte ?",
    answer:
      "Pour créer un compte, cliquez sur le bouton 'S'inscrire' en haut à droite de la page d'accueil. Remplissez le formulaire avec vos informations et validez votre email.",
  },
  {
    id: 2,
    category: "courses",
    question: "Comment accéder à mes cours ?",
    answer:
      "Une fois inscrit à un cours, vous pouvez y accéder depuis la section 'Mes Cours' dans votre tableau de bord. Cliquez sur 'Commencer' pour accéder au contenu.",
  },
  {
    id: 3,
    category: "certificates",
    question: "Comment obtenir un certificat ?",
    answer:
      "Pour obtenir un certificat, vous devez compléter tous les modules du cours et réussir le quiz final avec un score d'au moins 70%. Le certificat sera alors généré automatiquement.",
  },
  {
    id: 4,
    category: "payments",
    question: "Quels modes de paiement sont acceptés ?",
    answer:
      "Nous acceptons les cartes bancaires (Visa, Mastercard), les virements bancaires et les portefeuilles électroniques. Tous les paiements sont sécurisés.",
  },
  {
    id: 5,
    category: "technical",
    question: "Les vidéos ne se chargent pas, que faire ?",
    answer:
      "Vérifiez votre connexion internet, videz le cache de votre navigateur, et essayez un autre navigateur. Si le problème persiste, contactez notre support technique.",
  },
]

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    description: "Réponse sous 24h",
    contact: "support@elagroacademy.com",
    action: "Envoyer un email",
  },
  {
    icon: Phone,
    title: "Téléphone",
    description: "Lun-Ven, 9h-18h",
    contact: "+225 07 12 34 56 78",
    action: "Appeler",
  },
  {
    icon: MessageCircle,
    title: "Chat en direct",
    description: "Disponible maintenant",
    contact: "Chat disponible",
    action: "Démarrer le chat",
  },
]

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold text-[#001A3B]">
            Centre d'Aide
          </h1>
          <p className="text-[#001A3B]/70 mt-1">
            Trouvez des réponses à vos questions ou contactez notre support
          </p>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#001A3B]/40" />
              <Input
                placeholder="Rechercher dans l'aide..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? "bg-[#001A3B] text-white" : ""}
          >
            Tous
          </Button>
          {faqCategories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-[#001A3B] text-white"
                  : ""
              }
            >
              {category.name} ({category.count})
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* FAQ Section */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Questions Fréquentes
                </CardTitle>
                <CardDescription>
                  {filteredFaqs.length} résultat{filteredFaqs.length > 1 ? "s" : ""} trouvé{filteredFaqs.length > 1 ? "s" : ""}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {filteredFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="border border-[#E0AB6C]/20 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() =>
                          setExpandedFaq(expandedFaq === faq.id ? null : faq.id)
                        }
                        className="w-full p-4 flex items-center justify-between hover:bg-[#001A3B]/5 transition-colors text-left"
                      >
                        <div className="flex items-center gap-3">
                          <HelpCircle className="w-5 h-5 text-[#E0AB6C] flex-shrink-0" />
                          <span className="font-semibold text-[#001A3B]">
                            {faq.question}
                          </span>
                        </div>
                        {expandedFaq === faq.id ? (
                          <ChevronUp className="w-5 h-5 text-[#001A3B]/40 flex-shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#001A3B]/40 flex-shrink-0" />
                        )}
                      </button>
                      {expandedFaq === faq.id && (
                        <div className="p-4 pt-0 bg-[#001A3B]/5">
                          <p className="text-sm text-[#001A3B]/70 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Section */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Contactez-nous
                </CardTitle>
                <CardDescription>
                  Besoin d'aide supplémentaire ?
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon
                  return (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#E0AB6C]/10 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-[#E0AB6C]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-[#001A3B] mb-1">
                            {method.title}
                          </h4>
                          <p className="text-sm text-[#001A3B]/60 mb-2">
                            {method.description}
                          </p>
                          <p className="text-sm font-medium text-[#001A3B] mb-2">
                            {method.contact}
                          </p>
                          <Button
                            variant="outline"
                            size="sm"
                            className="w-full"
                          >
                            {method.action}
                          </Button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Liens Rapides
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Book className="w-4 h-4 mr-2" />
                    Guide de démarrage
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Book className="w-4 h-4 mr-2" />
                    Documentation
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <Book className="w-4 h-4 mr-2" />
                    Tutoriels vidéo
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

