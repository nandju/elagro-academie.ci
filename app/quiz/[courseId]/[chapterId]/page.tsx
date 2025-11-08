"use client"

import { useState, useEffect } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  CheckCircle2,
  XCircle,
  ArrowLeft,
  ArrowRight,
  Clock,
  Award,
  BookOpen,
  AlertCircle,
  Trophy,
  RotateCcw,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { useParams } from "next/navigation"

interface Question {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
}

interface Quiz {
  id: number
  title: string
  questions: Question[]
  passingScore: number
  timeLimit?: number // in minutes
}

// Mock quiz data
const quizData: Quiz = {
  id: 1,
  title: "Quiz du Chapitre 1 - Fondamentaux de l'Élevage de Volaille",
  passingScore: 70,
  timeLimit: 30,
  questions: [
    {
      id: 1,
      question: "Quelle est la température optimale pour l'élevage de volaille?",
      options: [
        "15-20°C",
        "20-25°C",
        "25-30°C",
        "30-35°C",
      ],
      correctAnswer: 1,
      explanation: "La température optimale pour l'élevage de volaille se situe entre 20-25°C pour maintenir la santé et la productivité des oiseaux.",
    },
    {
      id: 2,
      question: "Combien de fois par jour faut-il nourrir les poulets?",
      options: [
        "1 fois",
        "2 fois",
        "3 fois",
        "4 fois ou plus",
      ],
      correctAnswer: 1,
      explanation: "Il est recommandé de nourrir les poulets 2 fois par jour, le matin et le soir, pour une croissance optimale.",
    },
    {
      id: 3,
      question: "Quelle est la durée moyenne d'incubation des œufs de poule?",
      options: [
        "18 jours",
        "21 jours",
        "24 jours",
        "28 jours",
      ],
      correctAnswer: 1,
      explanation: "Les œufs de poule nécessitent environ 21 jours d'incubation pour éclore.",
    },
    {
      id: 4,
      question: "Quel est le principal nutriment nécessaire pour la croissance des volailles?",
      options: [
        "Glucides",
        "Protéines",
        "Lipides",
        "Vitamines",
      ],
      correctAnswer: 1,
      explanation: "Les protéines sont essentielles pour la croissance et le développement musculaire des volailles.",
    },
    {
      id: 5,
      question: "Quelle maladie est la plus courante chez les volailles?",
      options: [
        "Grippe aviaire",
        "Maladie de Newcastle",
        "Coccidiose",
        "Toutes les réponses ci-dessus",
      ],
      correctAnswer: 3,
      explanation: "La coccidiose est l'une des maladies les plus courantes affectant les volailles, surtout dans les élevages intensifs.",
    },
  ],
}

export default function QuizPage() {
  const params = useParams()
  const courseId = params.courseId as string
  const chapterId = params.chapterId as string

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [timeRemaining, setTimeRemaining] = useState(quizData.timeLimit ? quizData.timeLimit * 60 : null)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    if (!started || !timeRemaining || quizCompleted) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev === null || prev <= 1) {
          handleSubmitQuiz()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [started, timeRemaining, quizCompleted])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const handleSubmitQuiz = () => {
    let correctCount = 0
    quizData.questions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctCount++
      }
    })
    const calculatedScore = Math.round((correctCount / quizData.questions.length) * 100)
    setScore(calculatedScore)
    setQuizCompleted(true)
    setShowResults(true)
  }

  const handleStartQuiz = () => {
    setStarted(true)
  }

  const handleRetakeQuiz = () => {
    setCurrentQuestionIndex(0)
    setAnswers({})
    setScore(null)
    setQuizCompleted(false)
    setShowResults(false)
    setStarted(false)
    setTimeRemaining(quizData.timeLimit ? quizData.timeLimit * 60 : null)
  }

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100
  const answeredQuestions = Object.keys(answers).length
  const passed = score !== null && score >= quizData.passingScore

  if (!started) {
    return (
      <DashboardLayout>
        <div className="p-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-[#001A3B]">
                {quizData.title}
              </CardTitle>
              <CardDescription>
                Testez vos connaissances sur ce chapitre
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="p-4 rounded-lg bg-[#001A3B]/5">
                  <div className="text-2xl font-bold text-[#001A3B]">
                    {quizData.questions.length}
                  </div>
                  <div className="text-sm text-[#001A3B]/60">Questions</div>
                </div>
                <div className="p-4 rounded-lg bg-[#001A3B]/5">
                  <div className="text-2xl font-bold text-[#001A3B]">
                    {quizData.passingScore}%
                  </div>
                  <div className="text-sm text-[#001A3B]/60">Score requis</div>
                </div>
                {quizData.timeLimit && (
                  <div className="p-4 rounded-lg bg-[#001A3B]/5">
                    <div className="text-2xl font-bold text-[#001A3B]">
                      {quizData.timeLimit}
                    </div>
                    <div className="text-sm text-[#001A3B]/60">Minutes</div>
                  </div>
                )}
                <div className="p-4 rounded-lg bg-[#001A3B]/5">
                  <div className="text-2xl font-bold text-[#001A3B]">1x</div>
                  <div className="text-sm text-[#001A3B]/60">Tentative</div>
                </div>
              </div>

              <Alert>
                <AlertCircle className="w-4 h-4" />
                <AlertDescription>
                  <strong>Instructions importantes:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Vous devez obtenir au moins {quizData.passingScore}% pour passer</li>
                    <li>Le quiz sera soumis automatiquement à la fin du temps imparti</li>
                    <li>Vous pouvez naviguer entre les questions</li>
                    <li>Les résultats seront disponibles immédiatement après la soumission</li>
                  </ul>
                </AlertDescription>
              </Alert>

              <div className="flex items-center gap-4">
                <Link href={`/learn/${courseId}/${chapterId}`}>
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au cours
                  </Button>
                </Link>
                <Button
                  className="flex-1 bg-[#001A3B] hover:bg-[#001A3B]/90"
                  onClick={handleStartQuiz}
                >
                  Commencer le quiz
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  if (showResults && score !== null) {
    return (
      <DashboardLayout>
        <div className="p-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-center mb-4">
                {passed ? (
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                    <Trophy className="w-10 h-10 text-green-500" />
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center">
                    <XCircle className="w-10 h-10 text-red-500" />
                  </div>
                )}
              </div>
              <CardTitle className="text-center text-2xl font-bold text-[#001A3B]">
                {passed ? "Félicitations !" : "Quiz Terminé"}
              </CardTitle>
              <CardDescription className="text-center">
                {passed
                  ? "Vous avez réussi le quiz avec succès!"
                  : `Vous avez besoin d'au moins ${quizData.passingScore}% pour passer.`}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Score Display */}
              <div className="text-center">
                <div className="text-6xl font-bold text-[#001A3B] mb-2">
                  {score}%
                </div>
                <p className="text-[#001A3B]/70">
                  {Object.values(answers).filter((answer, index) => {
                    const question = quizData.questions[index]
                    return answer === question.correctAnswer
                  }).length}{" "}
                  sur {quizData.questions.length} questions correctes
                </p>
              </div>

              {passed && (
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <AlertDescription className="text-green-900">
                    <strong>Excellent travail!</strong> Vous pouvez maintenant continuer au
                    chapitre suivant ou télécharger votre certificat de réussite.
                  </AlertDescription>
                </Alert>
              )}

              {!passed && (
                <Alert variant="destructive">
                  <AlertCircle className="w-4 h-4" />
                  <AlertDescription>
                    Vous n'avez pas atteint le score requis. Réessayez pour améliorer
                    votre score.
                  </AlertDescription>
                </Alert>
              )}

              {/* Question Review */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#001A3B]">
                  Révision des Questions
                </h3>
                {quizData.questions.map((question, index) => {
                  const userAnswer = answers[question.id]
                  const isCorrect = userAnswer === question.correctAnswer

                  return (
                    <Card
                      key={question.id}
                      className={
                        isCorrect
                          ? "border-green-200 bg-green-50"
                          : "border-red-200 bg-red-50"
                      }
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-base font-semibold text-[#001A3B]">
                            Question {index + 1}: {question.question}
                          </CardTitle>
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div>
                          <p className="text-sm font-medium text-[#001A3B] mb-2">
                            Vos options:
                          </p>
                          {question.options.map((option, optIndex) => {
                            const isUserAnswer = optIndex === userAnswer
                            const isCorrectAnswer = optIndex === question.correctAnswer

                            return (
                              <div
                                key={optIndex}
                                className={`p-2 rounded ${
                                  isCorrectAnswer
                                    ? "bg-green-100 border border-green-300"
                                    : isUserAnswer && !isCorrect
                                    ? "bg-red-100 border border-red-300"
                                    : "bg-white border border-gray-200"
                                }`}
                              >
                                <div className="flex items-center gap-2">
                                  {isCorrectAnswer && (
                                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                                  )}
                                  {isUserAnswer && !isCorrect && (
                                    <XCircle className="w-4 h-4 text-red-500" />
                                  )}
                                  <span
                                    className={
                                      isCorrectAnswer
                                        ? "font-semibold text-green-900"
                                        : isUserAnswer && !isCorrect
                                        ? "font-semibold text-red-900"
                                        : "text-[#001A3B]"
                                    }
                                  >
                                    {option}
                                  </span>
                                  {isCorrectAnswer && (
                                    <Badge className="ml-auto bg-green-500 text-white">
                                      Correct
                                    </Badge>
                                  )}
                                </div>
                              </div>
                            )
                          })}
                        </div>
                        {question.explanation && (
                          <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
                            <p className="text-sm text-blue-900">
                              <strong>Explication:</strong> {question.explanation}
                            </p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4 border-t">
                <Link href={`/learn/${courseId}/${chapterId}`}>
                  <Button variant="outline">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour au cours
                  </Button>
                </Link>
                {!passed && (
                  <Button
                    variant="outline"
                    onClick={handleRetakeQuiz}
                    className="flex-1"
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Réessayer
                  </Button>
                )}
                {passed && (
                  <Link href={`/certificates`} className="flex-1">
                    <Button className="w-full bg-[#E0AB6C] hover:bg-[#E0AB6C]/90 text-[#001A3B]">
                      <Award className="w-4 h-4 mr-2" />
                      Voir mon certificat
                    </Button>
                  </Link>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    )
  }

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <div>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  {quizData.title}
                </CardTitle>
                <CardDescription>
                  Question {currentQuestionIndex + 1} sur {quizData.questions.length}
                </CardDescription>
              </div>
              {timeRemaining !== null && (
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#001A3B]/10">
                  <Clock className="w-5 h-5 text-[#001A3B]" />
                  <span className="font-mono font-bold text-[#001A3B]">
                    {formatTime(timeRemaining)}
                  </span>
                </div>
              )}
            </div>
            <Progress value={progress} className="mb-4" />
            <div className="flex items-center justify-between text-sm text-[#001A3B]/60">
              <span>{answeredQuestions} réponses données</span>
              <span>{quizData.questions.length - answeredQuestions} restantes</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Question */}
            <div>
              <h3 className="text-lg font-semibold text-[#001A3B] mb-4">
                {currentQuestion.question}
              </h3>
              <RadioGroup
                value={answers[currentQuestion.id]?.toString()}
                onValueChange={(value) =>
                  handleAnswerSelect(currentQuestion.id, parseInt(value))
                }
              >
                {currentQuestion.options.map((option, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 p-4 rounded-lg border border-[#E0AB6C]/20 hover:bg-[#001A3B]/5 cursor-pointer"
                  >
                    <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                    <Label
                      htmlFor={`option-${index}`}
                      className="flex-1 cursor-pointer text-[#001A3B]"
                    >
                      {option}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentQuestionIndex === 0}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Précédent
              </Button>
              <div className="flex items-center gap-2">
                {quizData.questions.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentQuestionIndex(index)}
                    className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${
                      index === currentQuestionIndex
                        ? "bg-[#001A3B] text-white"
                        : answers[quizData.questions[index].id] !== undefined
                        ? "bg-green-500 text-white"
                        : "bg-gray-200 text-[#001A3B]"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              {currentQuestionIndex === quizData.questions.length - 1 ? (
                <Button
                  className="bg-[#001A3B] hover:bg-[#001A3B]/90"
                  onClick={handleSubmitQuiz}
                >
                  Soumettre
                  <CheckCircle2 className="w-4 h-4 ml-2" />
                </Button>
              ) : (
                <Button
                  variant="outline"
                  onClick={handleNext}
                  disabled={answers[currentQuestion.id] === undefined}
                >
                  Suivant
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

