"use client"

import { useState } from "react"
import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lock,
  Shield,
  CreditCard,
  History,
  LogOut,
  Download,
  CheckCircle2,
  X,
  Smartphone,
  Monitor,
  Tablet,
  Globe,
  Eye,
  EyeOff,
  Edit,
  Save,
  XCircle,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showCurrentPassword, setShowCurrentPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false)

  const user = {
    name: "Jean Kouamé",
    email: "jean.kouame@example.com",
    phone: "+225 07 12 34 56 78",
    address: "Abidjan, Côte d'Ivoire",
    avatar: "/assets/images/instructors/instructor-1.jpg",
    joinDate: "2024-01-15",
    domain: "Élevage",
    plan: "Pro",
    downloadQuota: {
      used: 45,
      limit: 100,
      unit: "GB",
    },
  }

  const activeDevices = [
    { id: 1, name: "Chrome sur Windows", type: "desktop", lastActive: "Il y a 2 heures", current: true },
    { id: 2, name: "Safari sur iPhone", type: "mobile", lastActive: "Il y a 1 jour", current: false },
    { id: 3, name: "Chrome sur Android", type: "mobile", lastActive: "Il y a 3 jours", current: false },
  ]

  const courseHistory = [
    { id: 1, name: "Fondamentaux de l'Élevage de Volaille", completedDate: "2024-02-15", status: "Terminé", certificate: true },
    { id: 2, name: "Gestion des Cultures Agricoles", completedDate: "2024-02-10", status: "Terminé", certificate: true },
    { id: 3, name: "Maîtrise des Systèmes d'Élevage", completedDate: "2024-01-28", status: "Terminé", certificate: false },
  ]

  const plans = [
    { name: "Gratuit", price: "0€", features: ["5 cours/mois", "10GB de stockage", "Certificats basiques"] },
    { name: "Pro", price: "29€/mois", features: ["Cours illimités", "100GB de stockage", "Certificats avancés", "Support prioritaire"], current: true },
    { name: "Premium", price: "49€/mois", features: ["Cours illimités", "Stockage illimité", "Certificats premium", "Support 24/7", "Formations personnalisées"] },
  ]

  const getDeviceIcon = (type: string) => {
    switch (type) {
      case "mobile":
        return <Smartphone className="w-5 h-5" />
      case "tablet":
        return <Tablet className="w-5 h-5" />
      default:
        return <Monitor className="w-5 h-5" />
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6 space-y-6 max-w-6xl mx-auto">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Mon Profil</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Gérez vos informations personnelles et vos paramètres de sécurité
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-bold text-[#001A3B]">
                      Informations Personnelles
                    </CardTitle>
                    <CardDescription>
                      Gérez vos informations de profil
                    </CardDescription>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsEditing(!isEditing)}
                  >
                    {isEditing ? (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Enregistrer
                      </>
                    ) : (
                      <>
                        <Edit className="w-4 h-4 mr-2" />
                        Modifier
                      </>
                    )}
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-gradient-to-br from-[#001A3B] to-[#E0AB6C] text-white text-2xl">
                      {user.name.split(" ").map((n) => n[0]).join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-[#001A3B]">
                      {user.name}
                    </h3>
                    <p className="text-sm text-[#001A3B]/60">{user.email}</p>
                    {isEditing && (
                      <Button variant="outline" size="sm" className="mt-2">
                        Changer la photo
                      </Button>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                      Nom complet
                    </label>
                    {isEditing ? (
                      <Input defaultValue={user.name} />
                    ) : (
                      <div className="flex items-center gap-2 text-[#001A3B]">
                        <User className="w-4 h-4 text-[#001A3B]/40" />
                        <span>{user.name}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                      Email
                    </label>
                    {isEditing ? (
                      <Input type="email" defaultValue={user.email} />
                    ) : (
                      <div className="flex items-center gap-2 text-[#001A3B]">
                        <Mail className="w-4 h-4 text-[#001A3B]/40" />
                        <span>{user.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                      Téléphone
                    </label>
                    {isEditing ? (
                      <Input type="tel" defaultValue={user.phone} />
                    ) : (
                      <div className="flex items-center gap-2 text-[#001A3B]">
                        <Phone className="w-4 h-4 text-[#001A3B]/40" />
                        <span>{user.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                      Adresse
                    </label>
                    {isEditing ? (
                      <Input defaultValue={user.address} />
                    ) : (
                      <div className="flex items-center gap-2 text-[#001A3B]">
                        <MapPin className="w-4 h-4 text-[#001A3B]/40" />
                        <span>{user.address}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                      Date d'inscription
                    </label>
                    <div className="flex items-center gap-2 text-[#001A3B]">
                      <Calendar className="w-4 h-4 text-[#001A3B]/40" />
                      <span>
                        {new Date(user.joinDate).toLocaleDateString("fr-FR")}
                      </span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                      Domaine d'intérêt
                    </label>
                    <Badge className="bg-[#E0AB6C] text-[#001A3B]">
                      {user.domain}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Password & Security */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Mot de passe et Sécurité
                </CardTitle>
                <CardDescription>
                  Gérez votre mot de passe et vos paramètres de sécurité
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                    Mot de passe actuel
                  </label>
                  <div className="relative">
                    <Input
                      type={showCurrentPassword ? "text" : "password"}
                      placeholder="Entrez votre mot de passe actuel"
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    >
                      {showCurrentPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-[#001A3B] mb-2 block">
                    Nouveau mot de passe
                  </label>
                  <div className="relative">
                    <Input
                      type={showNewPassword ? "text" : "password"}
                      placeholder="Entrez votre nouveau mot de passe"
                      className="pr-10"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-0 top-0 h-full"
                      onClick={() => setShowNewPassword(!showNewPassword)}
                    >
                      {showNewPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
                  Mettre à jour le mot de passe
                </Button>

                <div className="border-t pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-[#001A3B] mb-1">
                        Authentification à deux facteurs (2FA)
                      </h4>
                      <p className="text-sm text-[#001A3B]/60">
                        Ajoutez une couche de sécurité supplémentaire à votre compte
                      </p>
                    </div>
                    <Button
                      variant={twoFactorEnabled ? "default" : "outline"}
                      onClick={() => setTwoFactorEnabled(!twoFactorEnabled)}
                    >
                      {twoFactorEnabled ? "Désactiver" : "Activer"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Devices */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Appareils Actifs
                </CardTitle>
                <CardDescription>
                  Gérez les appareils connectés à votre compte
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeDevices.map((device) => (
                    <div
                      key={device.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-[#E0AB6C]/20"
                    >
                      <div className="flex items-center gap-3">
                        {getDeviceIcon(device.type)}
                        <div>
                          <h4 className="font-semibold text-[#001A3B]">
                            {device.name}
                          </h4>
                          <p className="text-sm text-[#001A3B]/60">
                            {device.lastActive}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {device.current && (
                          <Badge className="bg-green-500 text-white">
                            Actuel
                          </Badge>
                        )}
                        {!device.current && (
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:text-destructive"
                          >
                            <XCircle className="w-4 h-4 mr-2" />
                            Déconnecter
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <Alert className="mt-4">
                  <Shield className="w-4 h-4" />
                  <AlertDescription>
                    Déconnecter les autres appareils empêche le partage de compte
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            {/* Course History */}
            <Card>
              <CardHeader>
                <CardTitle className="text-xl font-bold text-[#001A3B]">
                  Historique de Formations
                </CardTitle>
                <CardDescription>
                  Consultez l'historique de vos formations complétées
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {courseHistory.map((course) => (
                    <div
                      key={course.id}
                      className="flex items-center justify-between p-4 rounded-lg border border-[#E0AB6C]/20"
                    >
                      <div>
                        <h4 className="font-semibold text-[#001A3B]">
                          {course.name}
                        </h4>
                        <p className="text-sm text-[#001A3B]/60">
                          Terminé le{" "}
                          {new Date(course.completedDate).toLocaleDateString("fr-FR")}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-green-500 text-white">
                          {course.status}
                        </Badge>
                        {course.certificate && (
                          <Badge className="bg-[#E0AB6C] text-[#001A3B]">
                            Certificat
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Plan Management */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Gestion du Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-[#001A3B]">
                      Plan actuel
                    </span>
                    <Badge className="bg-[#E0AB6C] text-[#001A3B]">
                      {user.plan}
                    </Badge>
                  </div>
                  <p className="text-sm text-[#001A3B]/60">
                    Vous bénéficiez de tous les avantages du plan {user.plan}
                  </p>
                </div>

                <div className="space-y-2">
                  {plans.map((plan) => (
                    <div
                      key={plan.name}
                      className={`p-3 rounded-lg border ${
                        plan.current
                          ? "border-[#E0AB6C] bg-[#E0AB6C]/10"
                          : "border-[#E0AB6C]/20"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-[#001A3B]">
                          {plan.name}
                        </h4>
                        <span className="text-sm font-medium text-[#001A3B]">
                          {plan.price}
                        </span>
                      </div>
                      <ul className="space-y-1 text-xs text-[#001A3B]/70">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3 text-[#E0AB6C]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      {!plan.current && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full mt-2"
                        >
                          Changer de plan
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Download Quota */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-bold text-[#001A3B]">
                  Quota de Téléchargements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-[#001A3B]">
                      Utilisé
                    </span>
                    <span className="text-sm font-bold text-[#001A3B]">
                      {user.downloadQuota.used} / {user.downloadQuota.limit}{" "}
                      {user.downloadQuota.unit}
                    </span>
                  </div>
                  <Progress
                    value={(user.downloadQuota.used / user.downloadQuota.limit) * 100}
                  />
                  <p className="text-xs text-[#001A3B]/60">
                    {user.downloadQuota.limit - user.downloadQuota.used}{" "}
                    {user.downloadQuota.unit} restants
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Danger Zone */}
            <Card className="border-destructive">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-destructive">
                  Zone de Danger
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={async () => {
                    await fetch("/api/auth/logout", { method: "POST" })
                    window.location.href = "/login"
                  }}
                >
                  <LogOut className="w-4 h-4 mr-2" />
                  Déconnexion
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

