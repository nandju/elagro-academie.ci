"use client"

import { useState, useMemo, useEffect } from "react"
import Link from "next/link"
import { Search, Filter, ChevronDown, Clock, Users, Star, BookOpen, TrendingUp, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"
import supabase from "@/lib/supabase"

// Course types
type Field = "livestock" | "agriculture" | "all"
type Difficulty = "beginner" | "intermediate" | "advanced" | "all"
type Pricing = "free" | "paid" | "all"
type Duration = "short" | "medium" | "long" | "all"
type SortOption = "newest" | "most-followed" | "highest-rated"

interface Course {
  id: number
  title: string
  description: string
  field: "livestock" | "agriculture"
  difficulty: "beginner" | "intermediate" | "advanced"
  isFree: boolean
  duration: string // e.g., "2 weeks", "6 months"
  durationCategory: "short" | "medium" | "long"
  rating: number
  followers: number
  materialsCount: number
  createdAt: string // ISO date string
  image?: string
  tags: string[]
}

// Mock data
// const courses: Course[] = [
//   {
//     id: 1,
//     title: "Fondamentaux de l'Élevage de Volaille",
//     description: "Apprenez les bases de l'élevage de poulets sains, la gestion des pondeuses et des poulets de chair, et l'optimisation de la production.",
//     field: "livestock",
//     difficulty: "beginner",
//     isFree: true,
//     duration: "6 semaines",
//     durationCategory: "medium",
//     rating: 4.8,
//     followers: 1250,
//     materialsCount: 12,
//     createdAt: "2024-01-15",
//     tags: ["Volaille", "Débutant", "Santé Animale"],
//   },
//   {
//     id: 2,
//     title: "Techniques Avancées de Rotation des Cultures",
//     description: "Maîtrisez les stratégies de rotation des cultures durables pour améliorer la santé du sol et augmenter les rendements.",
//     field: "agriculture",
//     difficulty: "advanced",
//     isFree: false,
//     duration: "8 semaines",
//     durationCategory: "medium",
//     rating: 4.9,
//     followers: 890,
//     materialsCount: 15,
//     createdAt: "2024-02-01",
//     tags: ["Cultures", "Avancé", "Durabilité"],
//   },
//   {
//     id: 3,
//     title: "Élevage Porcin et Nutrition",
//     description: "Guide complet sur l'élevage porcin, la gestion des aliments et les protocoles de santé.",
//     field: "livestock",
//     difficulty: "intermediate",
//     isFree: false,
//     duration: "4 semaines",
//     durationCategory: "short",
//     rating: 4.7,
//     followers: 2100,
//     materialsCount: 10,
//     createdAt: "2024-01-20",
//     tags: ["Porcs", "Nutrition", "Élevage"],
//   },
//   {
//     id: 4,
//     title: "Pratiques d'Agriculture Biologique",
//     description: "Apprenez les méthodes d'agriculture biologique, les processus de certification et les stratégies de marché.",
//     field: "agriculture",
//     difficulty: "intermediate",
//     isFree: true,
//     duration: "10 semaines",
//     durationCategory: "long",
//     rating: 4.6,
//     followers: 1650,
//     materialsCount: 18,
//     createdAt: "2024-02-10",
//     tags: ["Bio", "Certification", "Durabilité"],
//   },
//   {
//     id: 5,
//     title: "Gestion de la Santé des Ruminants",
//     description: "Techniques avancées pour gérer la santé et la productivité des bovins, ovins et caprins.",
//     field: "livestock",
//     difficulty: "advanced",
//     isFree: false,
//     duration: "12 semaines",
//     durationCategory: "long",
//     rating: 4.9,
//     followers: 980,
//     materialsCount: 20,
//     createdAt: "2024-01-05",
//     tags: ["Bovins", "Santé", "Avancé"],
//   },
//   {
//     id: 6,
//     title: "Gestion du Sol et Fertilité",
//     description: "Connaissances essentielles pour maintenir un sol sain et optimiser la production agricole.",
//     field: "agriculture",
//     difficulty: "beginner",
//     isFree: true,
//     duration: "5 semaines",
//     durationCategory: "short",
//     rating: 4.5,
//     followers: 1450,
//     materialsCount: 8,
//     createdAt: "2024-02-15",
//     tags: ["Sol", "Débutant", "Fertilité"],
//   },
//   {
//     id: 7,
//     title: "Systèmes d'Aquaculture",
//     description: "Concevez et gérez des systèmes d'élevage de poissons efficaces pour une production durable.",
//     field: "livestock",
//     difficulty: "intermediate",
//     isFree: false,
//     duration: "7 semaines",
//     durationCategory: "medium",
//     rating: 4.7,
//     followers: 1120,
//     materialsCount: 14,
//     createdAt: "2024-01-25",
//     tags: ["Poisson", "Aquaculture", "Systèmes"],
//   },
//   {
//     id: 8,
//     title: "Gestion Intégrée des Ravageurs",
//     description: "Stratégies durables de lutte contre les ravageurs pour les cultures agricoles sans utilisation excessive de produits chimiques.",
//     field: "agriculture",
//     difficulty: "intermediate",
//     isFree: true,
//     duration: "6 semaines",
//     durationCategory: "medium",
//     rating: 4.6,
//     followers: 1320,
//     materialsCount: 11,
//     createdAt: "2024-02-05",
//     tags: ["Lutte Antiravageurs", "GIR", "Durabilité"],
//   },
//   {
//     id: 9,
//     title: "Essentiels de l'Élevage de Lapins",
//     description: "Guide complet pour démarrer et gérer une exploitation rentable d'élevage de lapins.",
//     field: "livestock",
//     difficulty: "beginner",
//     isFree: true,
//     duration: "4 semaines",
//     durationCategory: "short",
//     rating: 4.4,
//     followers: 890,
//     materialsCount: 9,
//     createdAt: "2024-02-20",
//     tags: ["Lapins", "Débutant", "Élevage"],
//   },
//   {
//     id: 10,
//     title: "Systèmes d'Irrigation et Gestion de l'Eau",
//     description: "Apprenez les techniques d'irrigation efficaces et les méthodes de conservation de l'eau pour l'agriculture.",
//     field: "agriculture",
//     difficulty: "advanced",
//     isFree: false,
//     duration: "9 semaines",
//     durationCategory: "long",
//     rating: 4.8,
//     followers: 1050,
//     materialsCount: 16,
//     createdAt: "2024-01-10",
//     tags: ["Irrigation", "Eau", "Avancé"],
//   },
//   {
//     id: 11,
//     title: "Production d'Aliments pour Animaux",
//     description: "Maîtrisez l'art de produire des aliments pour animaux de haute qualité à partir de résidus de cultures et de céréales.",
//     field: "agriculture",
//     difficulty: "intermediate",
//     isFree: false,
//     duration: "6 semaines",
//     durationCategory: "medium",
//     rating: 4.7,
//     followers: 1180,
//     materialsCount: 13,
//     createdAt: "2024-01-30",
//     tags: ["Aliments", "Production", "Nutrition"],
//   },
//   {
//     id: 12,
//     title: "Stratégies de Commercialisation du Bétail",
//     description: "Apprenez à commercialiser et vendre efficacement les produits d'élevage sur les marchés locaux et internationaux.",
//     field: "livestock",
//     difficulty: "intermediate",
//     isFree: true,
//     duration: "5 semaines",
//     durationCategory: "short",
//     rating: 4.5,
//     followers: 950,
//     materialsCount: 7,
//     createdAt: "2024-02-12",
//     tags: ["Commercialisation", "Commerce", "Élevage"],
//   },
// ]

export default function CoursesCatalog() {
  const [searchQuery, setSearchQuery] = useState("")
  const [fieldFilter, setFieldFilter] = useState<Field>("all")
  const [difficultyFilter, setDifficultyFilter] = useState<Difficulty>("all")
  const [pricingFilter, setPricingFilter] = useState<Pricing>("all")
  const [durationFilter, setDurationFilter] = useState<Duration>("all")
  const [sortBy, setSortBy] = useState<SortOption>("newest")

  const [courses, setCourses] = useState<any[]>([]);
  const [coursesCategory, setCoursesCategory] = useState<any[]>([]);

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    let filtered = courses.filter((course) => {
      // Search filter
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) 
        // ||
        // course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

      // Field filter
      const matchesField = fieldFilter === "all" || course.field === fieldFilter

      // Difficulty filter
      const matchesDifficulty = difficultyFilter === "all" || course.level === difficultyFilter

      // Pricing filter
      const matchesPricing =
        pricingFilter === "all" ||
        (pricingFilter === "free" && course.isFree) ||
        (pricingFilter === "paid" && !course.isFree)

      // Duration filter
      const matchesDuration = durationFilter === "all" || course.durationCategory === durationFilter

      return matchesSearch && matchesField && matchesDifficulty && matchesPricing && matchesDuration
    })

    // Sort courses
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        case "most-followed":
          return b.followers - a.followers
        case "highest-rated":
          return b.rating - a.rating
        default:
          return 0
      }
    })

    return filtered
  }, [searchQuery, fieldFilter, difficultyFilter, pricingFilter, durationFilter, sortBy,courses])

  const activeFiltersCount =
    (fieldFilter !== "all" ? 1 : 0) +
    (difficultyFilter !== "all" ? 1 : 0) +
    (pricingFilter !== "all" ? 1 : 0) +
    (durationFilter !== "all" ? 1 : 0)


    const fetchAllCourses = async () => {
      const {data,error} =await supabase.from('courses').select('*');
      if(error){
        console.error("Error fetching courses:", error);
      }else{
        
        setCourses(data);
        
        setCoursesCategory(prev => [...new Set(data?.map((course) => course.category))]);
        console.log("Courses data:", data);
        console.log("Courses categories:", [...new Set(data?.map((course) => course.category))]);
      }
    };

  useEffect(() => {
    fetchAllCourses();
  }, []);

  return (
    <div className="min-h-screen bg-background py-8 md:py-12 lg:py-16">
      <div className="container px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#001A3B] mb-3">
            Catalogue de Formation
          </h1>
          <p className="text-base md:text-lg text-[#001A3B]/70">
            Découvrez tous nos cours de formation en élevage et agriculture
          </p>
        </div>

        {/* Filters and Search Bar */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#001A3B]/50 w-5 h-5" />
            <Input
              type="text"
              placeholder="Rechercher des cours..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 h-11 border-[#E0AB6C]/30 focus:border-[#E0AB6C] focus:ring-[#E0AB6C]/20"
            />
          </div>

          {/* Filter Row */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Field Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-9 border-[#E0AB6C]/30 text-[#001A3B] hover:bg-[#E0AB6C]/10",
                    fieldFilter !== "all" && "bg-[#E0AB6C]/10 border-[#E0AB6C]"
                  )}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Domaine
                  {fieldFilter !== "all" && (
                    <Badge variant="secondary" className="ml-2 bg-[#E0AB6C] text-[#001A3B]">
                      1
                    </Badge>
                  )}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[180px]">
                <DropdownMenuLabel>Domaine</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={fieldFilter} onValueChange={(value) => setFieldFilter(value as Field)}>
                  <DropdownMenuRadioItem value="all">Tous les domaines</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="livestock">Élevage</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="agriculture">Agriculture</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Difficulty Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-9 border-[#E0AB6C]/30 text-[#001A3B] hover:bg-[#E0AB6C]/10",
                    difficultyFilter !== "all" && "bg-[#E0AB6C]/10 border-[#E0AB6C]"
                  )}
                >
                  Difficulté
                  {difficultyFilter !== "all" && (
                    <Badge variant="secondary" className="ml-2 bg-[#E0AB6C] text-[#001A3B]">
                      1
                    </Badge>
                  )}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[180px]">
                <DropdownMenuLabel>Difficulté</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={difficultyFilter}
                  onValueChange={(value) => setDifficultyFilter(value as Difficulty)}
                >
                  <DropdownMenuRadioItem value="all">Tous les niveaux</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="beginner">Débutant</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="intermediate">Intermédiaire</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="advanced">Avancé</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Pricing Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-9 border-[#E0AB6C]/30 text-[#001A3B] hover:bg-[#E0AB6C]/10",
                    pricingFilter !== "all" && "bg-[#E0AB6C]/10 border-[#E0AB6C]"
                  )}
                >
                  Tarification
                  {pricingFilter !== "all" && (
                    <Badge variant="secondary" className="ml-2 bg-[#E0AB6C] text-[#001A3B]">
                      1
                    </Badge>
                  )}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[180px]">
                <DropdownMenuLabel>Tarification</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={pricingFilter}
                  onValueChange={(value) => setPricingFilter(value as Pricing)}
                >
                  <DropdownMenuRadioItem value="all">Tous</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="free">Gratuit</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="paid">Payant</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Duration Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "h-9 border-[#E0AB6C]/30 text-[#001A3B] hover:bg-[#E0AB6C]/10",
                    durationFilter !== "all" && "bg-[#E0AB6C]/10 border-[#E0AB6C]"
                  )}
                >
                  Durée
                  {durationFilter !== "all" && (
                    <Badge variant="secondary" className="ml-2 bg-[#E0AB6C] text-[#001A3B]">
                      1
                    </Badge>
                  )}
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="min-w-[180px]">
                <DropdownMenuLabel>Durée</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup
                  value={durationFilter}
                  onValueChange={(value) => setDurationFilter(value as Duration)}
                >
                  <DropdownMenuRadioItem value="all">Toutes les durées</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="short">Court (1-4 semaines)</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="medium">Moyen (5-8 semaines)</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="long">Long (9+ semaines)</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="h-9 border-[#E0AB6C]/30 text-[#001A3B] hover:bg-[#E0AB6C]/10 ml-auto"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Trier par
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="min-w-[180px]">
                <DropdownMenuLabel>Trier par</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
                  <DropdownMenuRadioItem value="newest">Plus récent</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="most-followed">Plus suivi</DropdownMenuRadioItem>
                  <DropdownMenuRadioItem value="highest-rated">Mieux noté</DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Active Filters Summary */}
          {activeFiltersCount > 0 && (
            <div className="flex items-center gap-2 text-sm text-[#001A3B]/70">
              <span>{filteredCourses.length} cours{filteredCourses.length !== 1 ? "" : ""} trouvé{filteredCourses.length !== 1 ? "s" : ""}</span>
              <span>•</span>
              <span>{activeFiltersCount} filtre{activeFiltersCount !== 1 ? "s" : ""} actif{activeFiltersCount !== 1 ? "s" : ""}</span>
            </div>
          )}
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 text-[#001A3B]/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[#001A3B] mb-2">Aucun cours trouvé</h3>
            <p className="text-[#001A3B]/70">Essayez d'ajuster vos filtres ou votre recherche</p>
          </div>
        )}
      </div>
    </div>
  )
}

function CourseCard({ course }: { course: any }) {
  const difficultyColors : any = {
    beginner: "bg-green-100 text-green-800 border-green-200",
    intermediate: "bg-blue-100 text-blue-800 border-blue-200",
    advanced: "bg-purple-100 text-purple-800 border-purple-200",
  }

  const difficultyLabels:any = {
    beginner: "Débutant",
    intermediate: "Intermédiaire",
    advanced: "Avancé",
  }

  const fieldColors:any = {
    livestock: "bg-[#E0AB6C]/20 text-[#001A3B] border-[#E0AB6C]/30",
    agriculture: "bg-green-50 text-green-900 border-green-200",
  }

  const fieldLabels: any = {
    livestock: "Élevage",
    agriculture: "Agriculture",
  }

  return (
    <Link href={`/courses/${course.id}`} className="group overflow-hidden rounded-xl border border-[#E0AB6C]/30 bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col">
      {/* Card Header with Materials Count */}
      <div className="relative h-40 w-full bg-gradient-to-br from-[#001A3B]/5 to-[#E0AB6C]/5 flex items-center justify-center">
        <BookOpen className="w-16 h-16 text-[#001A3B]/20" />
        <div className="absolute top-3 left-3">
          <Badge variant="secondary" className="bg-[#001A3B]/10 text-[#001A3B] border-[#E0AB6C]/30">
            {course.materialsCount || 0} Matériel{course.materialsCount !== 1 ? "aux" : ""}
          </Badge>
        </div>
        {parseInt(course.price) === 0   && (
          <div className="absolute top-3 right-3">
            <Badge className="bg-[#E0AB6C] text-[#001A3B] font-semibold">Gratuit</Badge>
          </div>
        )}
      </div>

      {/* Card Content */}
      <div className="p-4 flex-1 flex flex-col">
        {/* Field Badge */}
        <div className="mb-2">
          <Badge variant="outline" className={cn("text-xs", fieldColors[course.category])}>
            {fieldLabels[course.category]}
          </Badge>
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-[#001A3B] mb-2 line-clamp-2 group-hover:text-[#E0AB6C] transition-colors">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-[#001A3B]/70 mb-4 line-clamp-2 flex-1">{course.description}</p>

        {/* Tags */}
        {/* <div className="flex flex-wrap gap-1.5 mb-4">
          {course.tags.slice(0, 2).map((tag, idx) => (
            <Badge key={idx} variant="outline" className="text-xs border-[#E0AB6C]/30 text-[#001A3B]/70">
              {tag}
            </Badge>
          ))}
        </div> */}

        {/* Stats and Info */}
        <div className="space-y-2 mb-4">
          {/* Difficulty */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[#001A3B]/60">Difficulté:</span>
            <Badge variant="outline" className={cn("text-xs", difficultyColors[course.level])}>
              {difficultyLabels[course.level]}
            </Badge>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2 text-xs text-[#001A3B]/60">
            <Clock className="w-3.5 h-3.5" />
            <span>{course.duration || "N/A"}</span>
          </div>

          {/* Rating and Followers */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-[#001A3B]/60">
              <Star className="w-3.5 h-3.5 fill-[#E0AB6C] text-[#E0AB6C]" />
              <span className="font-medium">{course.rating}</span>
            </div>
            <div className="flex items-center gap-1 text-[#001A3B]/60">
              <Users className="w-3.5 h-3.5" />
              {/* <span>{course.followers.toLocaleString()}</span> */}
            </div>
          </div>
        </div>

        {/* Action Button */}
        <Button
          className="w-full bg-[#001A3B] hover:bg-[#001A3B]/90 text-white font-semibold mt-auto"
          size="sm"
          asChild
        >
          <span>{parseInt(course.price) === 0 ? "Commencer gratuitement" : "Voir le cours"}</span>
        </Button>
      </div>
    </Link>
  )
}

