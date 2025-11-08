"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { 
  Settings, 
  Shield, 
  Users, 
  DollarSign,
  Lock,
  Bell,
  Globe,
  Save
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function AdminSettingsPage() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-[#001A3B]">Paramètres Globaux</h1>
          <p className="text-[#001A3B]/70 mt-1">
            Gérez les paramètres de la plateforme
          </p>
        </div>

        {/* Role Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#001A3B]" />
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Gestion des Rôles
              </CardTitle>
            </div>
            <CardDescription>
              Configurez les rôles et permissions des utilisateurs
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-role">Rôle Administrateur</Label>
              <div className="flex items-center gap-2">
                <Input id="admin-role" defaultValue="admin" readOnly />
                <Badge className="bg-[#001A3B] text-white">Accès complet</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructor-role">Rôle Formateur</Label>
              <div className="flex items-center gap-2">
                <Input id="instructor-role" defaultValue="instructor" readOnly />
                <Badge className="bg-[#E0AB6C] text-[#001A3B]">Gestion des cours</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-role">Rôle Étudiant</Label>
              <div className="flex items-center gap-2">
                <Input id="student-role" defaultValue="student" readOnly />
                <Badge variant="outline">Accès aux cours</Badge>
              </div>
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
              <Save className="w-4 h-4 mr-2" />
              Enregistrer les modifications
            </Button>
          </CardContent>
        </Card>

        {/* Global Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#001A3B]" />
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Paramètres Globaux
              </CardTitle>
            </div>
            <CardDescription>
              Configuration générale de la plateforme
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="platform-name">Nom de la plateforme</Label>
              <Input id="platform-name" defaultValue="ELAGRO ACADEMY" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-email">Email de support</Label>
              <Input id="support-email" type="email" defaultValue="support@elagroacademy.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-file-size">Taille maximale des fichiers (MB)</Label>
              <Input id="max-file-size" type="number" defaultValue="100" />
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
              <Save className="w-4 h-4 mr-2" />
              Enregistrer
            </Button>
          </CardContent>
        </Card>

        {/* Offers & Quotas */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-[#001A3B]" />
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Offres et Quotas
              </CardTitle>
            </div>
            <CardDescription>
              Gérez les offres et limitations de compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="free-downloads">Téléchargements gratuits (offre gratuite)</Label>
              <Input id="free-downloads" type="number" defaultValue="5" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pro-downloads">Téléchargements pro (offre pro)</Label>
              <Input id="pro-downloads" type="number" defaultValue="50" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enterprise-downloads">Téléchargements entreprise</Label>
              <Input id="enterprise-downloads" type="number" defaultValue="Illimité" />
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
              <Save className="w-4 h-4 mr-2" />
              Enregistrer
            </Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#001A3B]" />
              <CardTitle className="text-xl font-bold text-[#001A3B]">
                Paramètres de Sécurité
              </CardTitle>
            </div>
            <CardDescription>
              Configuration de la sécurité et des limitations de compte
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="session-timeout">Délai d'expiration de session (minutes)</Label>
              <Input id="session-timeout" type="number" defaultValue="30" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-login-attempts">Tentatives de connexion max</Label>
              <Input id="max-login-attempts" type="number" defaultValue="5" />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Authentification à deux facteurs</Label>
                <p className="text-sm text-[#001A3B]/60">Activer l'authentification 2FA</p>
              </div>
              <Button variant="outline">Activer</Button>
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90">
              <Save className="w-4 h-4 mr-2" />
              Enregistrer
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

