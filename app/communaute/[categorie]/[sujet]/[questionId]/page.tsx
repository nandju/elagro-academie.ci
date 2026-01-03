"use client"

import { useState } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, ThumbsUp, MessageSquare, CheckCircle2, Star } from "lucide-react"

// Types
interface Answer {
  id: string
  content: string
  author: {
    name: string
    role: "student" | "instructor" | "expert"
    avatar?: string
  }
  createdAt: string
  likeCount: number
  isAccepted: boolean
  isExpertAnswer: boolean
}

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
  answers: Answer[]
}

// Données mockées
const mockQuestionData: Record<string, Question> = {
  "1": {
    id: "1",
    title: "Mes poulets ont 3 semaines et mangent moins, est-ce normal ?",
    content: "J'ai remarqué que mes poulets de 3 semaines mangent moins que d'habitude. Ils sont actifs mais la consommation de nourriture a baissé. Quelqu'un a-t-il déjà vécu cela ? Dois-je m'inquiéter ?",
    author: {
      name: "Jean Koffi",
      role: "student"
    },
    createdAt: "Il y a 2 heures",
    answerCount: 5,
    likeCount: 12,
    isResolved: true,
    answers: [
      {
        id: "a1",
        content: "C'est une situation normale à cet âge. Les poussins de 3 semaines commencent à réguler leur consommation. Assurez-vous qu'ils ont toujours accès à de l'eau propre et à une nourriture de qualité. Si leur comportement est normal (activité, plumage), il n'y a pas d'inquiétude à avoir.",
        author: {
          name: "Dr. Amara Koné",
          role: "expert",
          avatar: "/assets/images/instructors/instructor-1.jpg"
        },
        createdAt: "Il y a 1 heure",
        likeCount: 8,
        isAccepted: true,
        isExpertAnswer: true
      },
      {
        id: "a2",
        content: "J'ai observé la même chose avec mes poulets. C'est effectivement normal vers 3 semaines. Vérifiez aussi la température de l'élevage, une température trop élevée peut réduire l'appétit.",
        author: {
          name: "Marie Diallo",
          role: "student"
        },
        createdAt: "Il y a 1 heure",
        likeCount: 5,
        isAccepted: false,
        isExpertAnswer: false
      },
      {
        id: "a3",
        content: "Assurez-vous que la nourriture n'est pas périmée ou moisie. Changez-la régulièrement et surveillez les signes de maladie.",
        author: {
          name: "Paul Kouassi",
          role: "student"
        },
        createdAt: "Il y a 45 minutes",
        likeCount: 3,
        isAccepted: false,
        isExpertAnswer: false
      }
    ]
  }
}

const sujetInfo: Record<string, Record<string, { name: string; icon: string }>> = {
  agriculture: {
    riz: { name: "Riz", icon: "🌾" },
    mais: { name: "Maïs", icon: "🌽" },
    manioc: { name: "Manioc", icon: "🥔" },
    maraichage: { name: "Maraîchage", icon: "🥬" },
    fertilisation: { name: "Fertilisation", icon: "🌿" },
    irrigation: { name: "Irrigation", icon: "💧" },
    "maladies-cultures": { name: "Maladies des cultures", icon: "🔬" },
  },
  elevage: {
    poulet: { name: "Poulet", icon: "🐔" },
    pondeuses: { name: "Pondeuses", icon: "🥚" },
    boeuf: { name: "Bœuf", icon: "🐄" },
    porc: { name: "Porc", icon: "🐷" },
    "mouton-chevre": { name: "Mouton / Chèvre", icon: "🐑" },
    "alimentation-animale": { name: "Alimentation animale", icon: "🌾" },
    maladies: { name: "Maladies", icon: "💉" },
    "hygiene-batiments": { name: "Hygiène & bâtiments", icon: "🏠" },
  }
}

export default function QuestionDetailPage() {
  const params = useParams()
  const router = useRouter()
  const categorie = params.categorie as string
  const sujet = params.sujet as string
  const questionId = params.questionId as string

  const [newAnswer, setNewAnswer] = useState("")
  const [likedAnswers, setLikedAnswers] = useState<Set<string>>(new Set())

  const question = mockQuestionData[questionId] || mockQuestionData["1"]
  const sujetData = sujetInfo[categorie]?.[sujet] || { name: sujet, icon: "💬" }
  const categoryInfo = categorie === "agriculture" 
    ? { title: "Agriculture", color: "from-green-500 to-green-600" } 
    : { title: "Élevage", color: "from-orange-500 to-orange-600" }

  // Trier les réponses : expert/accepted en premier
  const sortedAnswers = [...question.answers].sort((a, b) => {
    if (a.isAccepted) return -1
    if (b.isAccepted) return 1
    if (a.isExpertAnswer && !b.isExpertAnswer) return -1
    if (!a.isExpertAnswer && b.isExpertAnswer) return 1
    return b.likeCount - a.likeCount
  })

  const handleLikeAnswer = (answerId: string) => {
    setLikedAnswers(prev => {
      const newSet = new Set(prev)
      if (newSet.has(answerId)) {
        newSet.delete(answerId)
      } else {
        newSet.add(answerId)
      }
      return newSet
    })
  }

  const handleSubmitAnswer = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implémenter la soumission de la réponse
    console.log("Nouvelle réponse:", newAnswer)
    setNewAnswer("")
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
      <section className={`bg-gradient-to-r ${categoryInfo.color} text-white py-8`}>
        <div className="container mx-auto px-4">
          <Link 
            href={`/communaute/${categorie}/${sujet}`}
            className="inline-flex items-center text-white/90 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour aux questions
          </Link>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-3xl">{sujetData.icon}</span>
            <span className="text-sm text-white/80">{sujetData.name}</span>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Question Card */}
          <Card className="border-2 border-[#E0AB6C]">
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <CardTitle className="text-2xl text-[#001A3B]">
                      {question.title}
                    </CardTitle>
                    {question.isResolved && (
                      <Badge className="bg-green-500 text-white">
                        <CheckCircle2 className="h-3 w-3 mr-1" />
                        Résolue
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-4">
                    <Avatar className="h-10 w-10">
                      {question.author.avatar && (
                        <AvatarImage src={question.author.avatar} alt={question.author.name} />
                      )}
                      <AvatarFallback>
                        {question.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">{question.author.name}</span>
                        {getRoleBadge(question.author.role)}
                      </div>
                      <span className="text-sm text-gray-500">{question.createdAt}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                {question.content}
              </p>
              <div className="flex items-center gap-4 mt-6 pt-6 border-t">
                <div className="flex items-center gap-2 text-gray-600">
                  <MessageSquare className="h-5 w-5" />
                  <span>{question.answerCount} réponses</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <ThumbsUp className="h-5 w-5" />
                  <span>{question.likeCount} likes</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Answers Section */}
          <div>
            <h2 className="text-2xl font-bold text-[#001A3B] mb-6">
              {question.answerCount} {question.answerCount > 1 ? "réponses" : "réponse"}
            </h2>

            <div className="space-y-6">
              {sortedAnswers.map((answer) => (
                <Card 
                  key={answer.id}
                  className={`border-2 ${
                    answer.isAccepted 
                      ? "border-green-500 bg-green-50/50" 
                      : answer.isExpertAnswer 
                      ? "border-blue-300 bg-blue-50/30"
                      : "border-gray-200"
                  }`}
                >
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <Avatar className="h-10 w-10">
                        {answer.author.avatar && (
                          <AvatarImage src={answer.author.avatar} alt={answer.author.name} />
                        )}
                        <AvatarFallback>
                          {answer.author.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-gray-800">{answer.author.name}</span>
                          {getRoleBadge(answer.author.role)}
                          {answer.isAccepted && (
                            <Badge className="bg-green-500 text-white">
                              <CheckCircle2 className="h-3 w-3 mr-1" />
                              Solution acceptée
                            </Badge>
                          )}
                          {answer.isExpertAnswer && !answer.isAccepted && (
                            <Badge className="bg-blue-500 text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Réponse experte
                            </Badge>
                          )}
                        </div>
                        <p className="text-gray-600 text-sm mb-3">{answer.createdAt}</p>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                          {answer.content}
                        </p>
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleLikeAnswer(answer.id)}
                            className={`gap-2 ${
                              likedAnswers.has(answer.id) 
                                ? "text-blue-600 hover:text-blue-700" 
                                : "text-gray-600"
                            }`}
                          >
                            <ThumbsUp className={`h-4 w-4 ${likedAnswers.has(answer.id) ? "fill-current" : ""}`} />
                            <span>{answer.likeCount + (likedAnswers.has(answer.id) ? 1 : 0)}</span>
                          </Button>
                          {!question.isResolved && question.author.role === "student" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-600 hover:bg-green-50"
                            >
                              <CheckCircle2 className="h-4 w-4 mr-2" />
                              Marquer comme solution
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Answer Form */}
          <Card>
            <CardHeader>
              <CardTitle>Votre réponse</CardTitle>
              <CardDescription>
                Partagez votre expérience et aidez la communauté
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmitAnswer} className="space-y-4">
                <div>
                  <Label htmlFor="answer-content">Votre réponse</Label>
                  <textarea
                    id="answer-content"
                    className="flex min-h-[150px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Écrivez votre réponse en détail..."
                    value={newAnswer}
                    onChange={(e) => setNewAnswer(e.target.value)}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="bg-[#001A3B] hover:bg-[#001A3B]/90 text-white"
                >
                  Publier la réponse
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

