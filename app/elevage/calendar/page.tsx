"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MapPin, Clock, Users, AlertCircle } from "lucide-react"

export default function CalendarElevagePage() {
  type Category = "Santé" | "Aviculture" | "Bovins" | "Apiculture" | "Nutrition"

  type Formation = {
    id: number
    date: string
    title: string
    time: string
    location: string
    category: Category
    capacity: number
    registered: number
    description: string
    image: string
  }

  const [currentDate, setCurrentDate] = useState<Date>(new Date(2024, 0, 1))
  const [viewMode, setViewMode] = useState<string>("month")
  const [selectedEvent, setSelectedEvent] = useState<Formation | null>(null)

  // Formation events data
  const formations: Formation[] = [
    {
      id: 1,
      date: "2024-01-10",
      title: "Formation en Santé Animale",
      time: "10:00 - 11:30",
      location: "Abidjan",
      category: "Santé",
      capacity: 25,
      registered: 18,
      description: "Prévention et traitement des maladies courantes en élevage",
      image: "🏥"
    },
    {
      id: 2,
      date: "2024-01-14",
      title: "Atelier Aviculture Moderne",
      time: "09:00 - 12:00",
      location: "Bouaké",
      category: "Aviculture",
      capacity: 30,
      registered: 24,
      description: "Techniques modernes d'élevage de volailles",
      image: "🐔"
    },
    {
      id: 3,
      date: "2024-01-20",
      title: "Gestion des Troupeaux Laitiers",
      time: "10:00 - 11:00",
      location: "Yamoussoukro",
      category: "Bovins",
      capacity: 20,
      registered: 15,
      description: "Optimisation de la production laitière",
      image: "🐄"
    },
    {
      id: 4,
      date: "2024-02-05",
      title: "Formation en Apiculture",
      time: "08:30 - 11:00",
      location: "En ligne",
      category: "Apiculture",
      capacity: 50,
      registered: 38,
      description: "Production de miel de qualité et gestion des ruches",
      image: "🐝"
    },
    {
      id: 5,
      date: "2024-02-15",
      title: "Biosécurité en Élevage",
      time: "14:00 - 16:00",
      location: "Abidjan",
      category: "Santé",
      capacity: 25,
      registered: 20,
      description: "Protocoles de biosécurité et hygiène des porcheries",
      image: "💉"
    },
    {
      id: 6,
      date: "2024-02-28",
      title: "Alimentation Animale Optimisée",
      time: "10:00 - 12:00",
      location: "Bouaké",
      category: "Nutrition",
      capacity: 30,
      registered: 25,
      description: "Formulation d'aliments économiques et nutritifs",
      image: "🌾"
    }
  ]

  // Get days in month
  const getDaysInMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  // Get first day of month
  const getFirstDayOfMonth = (date: Date): number => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  // Format date
  const formatDate = (year: number, month: number, day: number): string => {
    return new Date(year, month, day).toISOString().split('T')[0]
  }

  // Get event for day
  const getEventForDay = (day: number): Formation | undefined => {
    const dateStr = formatDate(currentDate.getFullYear(), currentDate.getMonth(), day)
    return formations.find(f => f.date === dateStr)
  }

  // Next/Previous month
  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))
  }

  const daysInMonth = getDaysInMonth(currentDate)
  const firstDay = getFirstDayOfMonth(currentDate)
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const monthName = currentDate.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' })

  // Get upcoming formations
  const upcomingFormations = formations
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 4)

  const categoryColors: Record<Category, string> = {
    "Santé": "#E0AB6C",
    "Aviculture": "#001A3B",
    "Bovins": "#E0AB6C",
    "Apiculture": "#001A3B",
    "Nutrition": "#E0AB6C"
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-50">
    {/* Header Section */}
    <section
    className="
        relative
        text-white
        py-12
        bg-[url('https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1600&q=80')]
        md:bg-[url('https://images.unsplash.com/photo-1589927986089-35812388d1f4?auto=format&fit=crop&w=1600&q=80')]
        bg-cover
        bg-center
        bg-no-repeat
    "
    >
    {/* Overlay */}
    <div className="absolute inset-0 bg-[#001A3B]/70 backdrop-blur-[1px]" />

    <div className="relative container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Calendrier des Formations
        </h1>
        <p className="text-xl text-gray-200">
        Retrouvez toutes les formations en élevage programmées pour l'année
        </p>
    </div>
    </section>


      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Upcoming Events Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-2xl font-bold text-[#001A3B] mb-2">Formations à Venir</h2>
                <p className="text-gray-600 text-sm mb-6">Ne manquez pas ces opportunités</p>

                <div className="space-y-4">
                  {upcomingFormations.map((formation) => (
                    <div
                      key={formation.id}
                      onClick={() => setSelectedEvent(formation)}
                      className="p-4 border-l-4 rounded-lg hover:shadow-md transition-all cursor-pointer bg-gradient-to-r from-[#E0AB6C]/10 to-transparent"
                      style={{ borderColor: categoryColors[formation.category] }}
                    >
                      <div className="flex items-start justify-between mb-2">
                        <span className="text-2xl">{formation.image}</span>
                        <span className="text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: categoryColors[formation.category] }}>
                          {formation.category}
                        </span>
                      </div>
                      <h4 className="font-bold text-[#001A3B] text-sm mb-2">{formation.title}</h4>
                      <div className="space-y-1 text-xs text-gray-600">
                        <div className="flex items-center gap-2">
                          <Clock className="w-3 h-3 text-[#E0AB6C]" />
                          {formation.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3 h-3 text-[#E0AB6C]" />
                          {formation.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-3 h-3 text-[#E0AB6C]" />
                          {formation.registered}/{formation.capacity} inscrits
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <Button className="w-full mt-6 bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold">
                  Voir toutes les formations
                </Button>
              </div>
            </div>

            {/* Calendar Section */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                {/* Header Controls */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-2xl font-bold text-[#001A3B]">{monthName}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      onClick={prevMonth}
                      variant="outline"
                      size="sm"
                      className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>

                    <div className="flex gap-2">
                      {["Jour", "Semaine", "Mois"].map((mode) => (
                        <Button
                          key={mode}
                          onClick={() => setViewMode(mode.toLowerCase())}
                          className={
                            viewMode === mode.toLowerCase()
                              ? "bg-[#E0AB6C] text-[#001A3B] font-semibold"
                              : "border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10"
                          }
                          variant={viewMode === mode.toLowerCase() ? "default" : "outline"}
                          size="sm"
                        >
                          {mode}
                        </Button>
                      ))}
                    </div>

                    <Button
                      onClick={nextMonth}
                      variant="outline"
                      size="sm"
                      className="border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {/* Day headers */}
                  {["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"].map((day) => (
                    <div key={day} className="text-center font-bold text-[#001A3B] py-3 bg-[#E0AB6C]/10 rounded-lg">
                      {day}
                    </div>
                  ))}

                  {/* Empty days */}
                  {emptyDays.map((_, i) => (
                    <div key={`empty-${i}`} className="aspect-square" />
                  ))}

                  {/* Days with events */}
                  {days.map((day) => {
                    const event = getEventForDay(day)
                    return (
                      <div
                        key={day}
                        className={`aspect-square p-2 rounded-lg border-2 relative group cursor-pointer transition-all ${
                          event
                            ? "border-[#E0AB6C] bg-[#E0AB6C]/10 hover:shadow-lg"
                            : "border-gray-200 hover:border-[#E0AB6C]"
                        }`}
                        onClick={() => event && setSelectedEvent(event)}
                      >
                        <span className={`text-sm font-bold ${event ? "text-[#001A3B]" : "text-gray-600"}`}>
                          {day}
                        </span>
                        {event && (
                          <div className="mt-1">
                            <span className="text-lg">{event.image}</span>
                            <div className="text-xs text-[#001A3B] font-semibold mt-1 line-clamp-1">
                              {event.title}
                            </div>
                            <div className="text-xs text-gray-600">
                              {event.time.split(" - ")[0]}
                            </div>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Selected Event Details */}
              {selectedEvent && (
                <div className="mt-8 bg-white rounded-lg shadow-lg p-8 border-l-4 border-[#E0AB6C]">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{selectedEvent.image}</span>
                      <div>
                        <h3 className="text-2xl font-bold text-[#001A3B]">{selectedEvent.title}</h3>
                        <p className="text-gray-600">{selectedEvent.description}</p>
                      </div>
                    </div>
                    <span className="px-4 py-2 rounded-full font-bold text-white" style={{ backgroundColor: categoryColors[selectedEvent.category] }}>
                      {selectedEvent.category}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="bg-[#E0AB6C]/10 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Date & Heure</div>
                      <div className="font-bold text-[#001A3B]">
                        {new Date(selectedEvent.date).toLocaleDateString('fr-FR')}
                        <br />
                        {selectedEvent.time}
                      </div>
                    </div>
                    <div className="bg-[#E0AB6C]/10 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Localisation</div>
                      <div className="font-bold text-[#001A3B] flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[#E0AB6C]" />
                        {selectedEvent.location}
                      </div>
                    </div>
                    <div className="bg-[#E0AB6C]/10 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Places Disponibles</div>
                      <div className="font-bold text-[#001A3B]">
                        {selectedEvent.capacity - selectedEvent.registered}
                        <span className="text-xs text-gray-600"> / {selectedEvent.capacity}</span>
                      </div>
                    </div>
                    <div className="bg-[#E0AB6C]/10 rounded-lg p-4">
                      <div className="text-sm text-gray-600 mb-1">Inscrits</div>
                      <div className="font-bold text-[#001A3B]">
                        {selectedEvent.registered}
                        <span className="text-xs text-gray-600"> participants</span>
                      </div>
                    </div>
                  </div>

                  {/* Capacity Warning */}
                  {selectedEvent.capacity - selectedEvent.registered < 5 && (
                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6 rounded">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5 text-yellow-600" />
                        <p className="text-sm text-yellow-700 font-medium">
                          Seulement {selectedEvent.capacity - selectedEvent.registered} place(s) restante(s) !
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button className="flex-1 bg-[#E0AB6C] hover:bg-[#d19b5c] text-[#001A3B] font-semibold">
                      S'inscrire maintenant
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 border-[#E0AB6C] text-[#E0AB6C] hover:bg-[#E0AB6C]/10"
                    >
                      Plus d'infos
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-[#001A3B] text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Statistiques des Formations</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E0AB6C] mb-2">{formations.length}</div>
              <p className="text-gray-300">Formations programmées</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E0AB6C] mb-2">{formations.reduce((acc, f) => acc + f.capacity, 0)}</div>
              <p className="text-gray-300">Places disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E0AB6C] mb-2">{formations.reduce((acc, f) => acc + f.registered, 0)}</div>
              <p className="text-gray-300">Participants inscrits</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#E0AB6C] mb-2">3</div>
              <p className="text-gray-300">Régions couvertes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
        <section
        className="
            relative
            py-12
            bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80')]
            md:bg-[url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=900&q=80')]
            bg-cover
            bg-center
            bg-no-repeat
        "
        >
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-[#E0AB6C]/85" /> */}
        <div className="absolute inset-0 bg-[#E0AB6C]/70" />

        <div className="relative container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-[#001A3B] mb-4">
            Vous ne trouvez pas votre formation idéale ?
            </h2>

            <p className="text-lg text-[#001A3B]/90 mb-8 max-w-2xl mx-auto">
            Contactez-nous pour explorer les formations personnalisées adaptées à vos besoins spécifiques
            </p>

            <Button className="bg-[#001A3B] hover:bg-[#003d7a] text-[#E0AB6C] font-semibold px-8 py-6">
            Demander une formation sur mesure
            </Button>
        </div>
        </section>

    </main>
  )
}