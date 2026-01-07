"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Plus, MessageSquare, Clock, TrendingUp, CheckCircle2, AlertCircle, Search, Filter } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Types
type FilterType = "recentes" | "populaires" | "sans-reponse" | "resolues"

interface Question {
  id: string
  title: string
  content: string
  author: {
    name: string
    role: "student" | "instructor" | "expert"
    avatar?: string
  }
  createdAt: string
  answerCount: number
  likeCount: number
  isResolved: boolean
  hasAcceptedAnswer: boolean
}

// Données mockées
const mockQuestions: Question[] = [
  {
    id: "1",
    title: "Mes poulets ont 3 semaines et mangent moins, est-ce normal ?",
    content: "J'ai remarqué que mes poulets de 3 semaines mangent moins que d'habitude. Ils sont actifs mais la consommation de nourriture a baissé. Quelqu'un a-t-il déjà vécu cela ?",
    author: {
      name: "Jean Koffi",
      role: "student"
    },
    createdAt: "Il y a 2 heures",
    answerCount: 5,
    likeCount: 12,
    isResolved: true,
    hasAcceptedAnswer: true
  },
  {
    id: "2",
    title: "Quelle est la meilleure alimentation pour les poules pondeuses ?",
    content: "Je commence l'élevage de poules pondeuses et je me demande quelle alimentation est optimale pour maximiser la production d'œufs.",
    author: {
      name: "Marie Diallo",
      role: "student"
    },
    createdAt: "Il y a 5 heures",
    answerCount: 8,
    likeCount: 24,
    isResolved: false,
    hasAcceptedAnswer: false
  },
  {
    id: "3",
    title: "Comment prévenir les maladies respiratoires chez les volailles ?",
    content: "J'ai perdu plusieurs poulets à cause de maladies respiratoires. Quelles sont les meilleures pratiques de prévention ?",
    author: {
      name: "Dr. Amara Koné",
      role: "expert",
      avatar: "/assets/images/instructors/instructor-1.jpg"
    },
    createdAt: "Il y a 1 jour",
    answerCount: 3,
    likeCount: 18,
    isResolved: false,
    hasAcceptedAnswer: false
  },
  {
    id: "4",
    title: "Quand faut-il vacciner les poussins ?",
    content: "Je viens d'acheter des poussins d'un jour. À quel moment dois-je commencer les vaccinations ?",
    author: {
      name: "Paul Kouassi",
      role: "student"
    },
    createdAt: "Il y a 2 jours",
    answerCount: 0,
    likeCount: 5,
    isResolved: false,
    hasAcceptedAnswer: false
  }
]

const sujetInfo: Record<string, Record<string, { name: string; icon: string; description: string }>> = {
  agriculture: {
    riz: { name: "Riz", icon: "🌾", description: "Questions sur la culture du riz" },
    mais: { name: "Maïs", icon: "🌽", description: "Techniques de culture du maïs" },
    manioc: { name: "Manioc", icon: "🥔", description: "Culture et transformation du manioc" },
    maraichage: { name: "Maraîchage", icon: "🥬", description: "Légumes et cultures maraîchères" },
    fertilisation: { name: "Fertilisation", icon: "🌿", description: "Engrais et fertilisation des sols" },
    irrigation: { name: "Irrigation", icon: "💧", description: "Techniques d'irrigation et gestion de l'eau" },
    "maladies-cultures": { name: "Maladies des cultures", icon: "🔬", description: "Identification et traitement des maladies" },
  },
  elevage: {
    poulet: { name: "Poulet", icon: "🐔", description: "Élevage de poulets de chair et poules pondeuses" },
    pondeuses: { name: "Pondeuses", icon: "🥚", description: "Gestion des poules pondeuses et production d'œufs" },
    boeuf: { name: "Bœuf", icon: "🐄", description: "Élevage bovin et production de viande" },
    porc: { name: "Porc", icon: "🐷", description: "Élevage porcin et gestion des porcheries" },
    "mouton-chevre": { name: "Mouton / Chèvre", icon: "🐑", description: "Élevage ovin et caprin" },
    "alimentation-animale": { name: "Alimentation animale", icon: "🌾", description: "Nutrition et alimentation des animaux" },
    maladies: { name: "Maladies", icon: "💉", description: "Santé animale et prévention des maladies" },
    "hygiene-batiments": { name: "Hygiène & bâtiments", icon: "🏠", description: "Hygiène, sanitaires et infrastructures d'élevage" },
  }
}

export default function SujetPage() {
  const params = useParams()
  const router = useRouter()
  const categorie = params.categorie as string
  const sujet = params.sujet as string
  
  const [filter, setFilter] = useState<FilterType>("recentes")
  const [searchQuery, setSearchQuery] = useState("")
  const [isQuestionFormOpen, setIsQuestionFormOpen] = useState(false)
  const [newQuestion, setNewQuestion] = useState({ title: "", content: "" })

  const info = sujetInfo[categorie]?.[sujet] || { name: sujet, icon: "💬", description: "Discussions sur ce sujet" }
  const categoryInfo = categorie === "agriculture" ? { title: "Agriculture", color: "from-green-800 to-green-400" } : { title: "Élevage", color: "from-orange-800 to-orange-400" }

  // Filtrer les questions
  let filteredQuestions = [...mockQuestions]
  
  if (filter === "sans-reponse") {
    filteredQuestions = filteredQuestions.filter(q => q.answerCount === 0)
  } else if (filter === "resolues") {
    filteredQuestions = filteredQuestions.filter(q => q.isResolved)
  } else if (filter === "populaires") {
    filteredQuestions = filteredQuestions.sort((a, b) => b.likeCount - a.likeCount)
  } else {
    // récentes (par défaut)
    filteredQuestions = filteredQuestions
  }

  if (searchQuery) {
    filteredQuestions = filteredQuestions.filter(q => 
      q.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.content.toLowerCase().includes(searchQuery.toLowerCase())
    )
  }

  const handleSubmitQuestion = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter la soumission de la question
    console.log("Nouvelle question:", newQuestion)
    setIsQuestionFormOpen(false)
    setNewQuestion({ title: "", content: "" })
  }

  const getRoleBadge = (role: string) => {
    if (role === "expert") {
      return <Badge className="bg-blue-500 text-white">✔ Expert</Badge>
    }
    if (role === "instructor") {
      return <Badge className="bg-purple-500 text-white">🎓 Formateur</Badge>
    }
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Section */}
      <section className={`bg-gradient-to-r ${categoryInfo.color} text-white py-12`}>
        <div className="container mx-auto px-4">
          <Link 
            href={`/communaute/${categorie}`}
            className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à {categoryInfo.title}
          </Link>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-5xl">{info.icon}</span>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold">
                {info.name}
              </h1>
              <p className="text-xl text-white/90 mt-2">
                {info.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Actions Section */}
      <section className="py-6 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Rechercher une question..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={filter === "recentes" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("recentes")}
                className={filter === "recentes" ? "bg-[#001A3B]" : ""}
              >
                <Clock className="h-4 w-4 mr-2" />
                Récentes
              </Button>
              <Button
                variant={filter === "populaires" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("populaires")}
                className={filter === "populaires" ? "bg-[#001A3B]" : ""}
              >
                <TrendingUp className="h-4 w-4 mr-2" />
                Populaires
              </Button>
              <Button
                variant={filter === "sans-reponse" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("sans-reponse")}
                className={filter === "sans-reponse" ? "bg-[#001A3B]" : ""}
              >
                <AlertCircle className="h-4 w-4 mr-2" />
                Sans réponse
              </Button>
              <Button
                variant={filter === "resolues" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("resolues")}
                className={filter === "resolues" ? "bg-[#001A3B]" : ""}
              >
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Résolues
              </Button>
            </div>
            <Button 
              onClick={() => setIsQuestionFormOpen(!isQuestionFormOpen)}
              className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Poser une question
            </Button>
          </div>
        </div>
      </section>

      {/* Question Form */}
      {isQuestionFormOpen && (
        <section className="py-6 bg-[#001A3B]/5">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader>
                <CardTitle>Poser une nouvelle question</CardTitle>
                <CardDescription>
                  Partagez votre question avec la communauté
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmitQuestion} className="space-y-4">
                  <div>
                    <Label htmlFor="question-title">Titre de la question</Label>
                    <Input
                      id="question-title"
                      placeholder="Ex: Mes poulets ont 3 semaines et mangent moins, est-ce normal ?"
                      value={newQuestion.title}
                      onChange={(e) => setNewQuestion({ ...newQuestion, title: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="question-content">Détails de votre question</Label>
                    <textarea
                      id="question-content"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Décrivez votre situation en détail..."
                      value={newQuestion.content}
                      onChange={(e) => setNewQuestion({ ...newQuestion, content: e.target.value })}
                      required
                    />
                  </div>
                  <div className="flex gap-2">
                    <Button type="submit" className="bg-[#001A3B] hover:bg-[#001A3B]/90">
                      Publier la question
                    </Button>
                    <Button 
                      type="button" 
                      variant="outline"
                      onClick={() => {
                        setIsQuestionFormOpen(false)
                        setNewQuestion({ title: "", content: "" })
                      }}
                    >
                      Annuler
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      {/* Questions List */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          {filteredQuestions.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <MessageSquare className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  Aucune question trouvée
                </h3>
                <p className="text-gray-500 mb-6">
                  {searchQuery 
                    ? "Essayez de modifier vos critères de recherche"
                    : "Soyez le premier à poser une question sur ce sujet !"
                  }
                </p>
                {!searchQuery && (
                  <Button 
                    onClick={() => setIsQuestionFormOpen(true)}
                    className="bg-[#E0AB6C] hover:bg-[#E0AB6C]/90"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Poser la première question
                  </Button>
                )}
              </CardContent>
            </Card>
          ) : (
            <div className="space-y-4">
              {filteredQuestions.map((question) => (
                <Card 
                  key={question.id}
                  className="hover:shadow-lg transition-all duration-300 cursor-pointer border-2 hover:border-[#E0AB6C]"
                  onClick={() => router.push(`/communaute/${categorie}/${sujet}/${question.id}`)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CardTitle className="text-xl text-[#001A3B]">
                            {question.title}
                          </CardTitle>
                          {question.isResolved && (
                            <Badge className="bg-green-500 text-white">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Résolue
                            </Badge>
                          )}
                        </div>
                        <CardDescription className="text-base mt-2 line-clamp-2">
                          {question.content}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            {question.author.avatar && (
                              <AvatarImage src={question.author.avatar} alt={question.author.name} />
                            )}
                            <AvatarFallback>
                              {question.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-700">{question.author.name}</span>
                            {getRoleBadge(question.author.role)}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{question.createdAt}</span>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-gray-600">
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{question.answerCount}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>👍</span>
                          <span>{question.likeCount}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

