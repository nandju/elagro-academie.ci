"use client"

import { AdminLayout } from "@/components/admin/admin-layout"
import { useEffect, useState } from "react"
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
import supabase from "@/lib/supabase"


export default function AdminSettingsPage() {
  // Variables d'état pour chaque section
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Section Rôles
  const [adminRole] = useState("admin");
  const [instructorRole] = useState("instructor");
  const [studentRole] = useState("student");

  // Section Paramètres globaux
  const [platformName, setPlatformName] = useState("");
  const [supportEmail, setSupportEmail] = useState("");
  const [maxFileSize, setMaxFileSize] = useState("");

  // Section Offres & Quotas
  const [freeDownloads, setFreeDownloads] = useState("");
  const [proDownloads, setProDownloads] = useState("");
  const [enterpriseDownloads, setEnterpriseDownloads] = useState("");

  // Section Sécurité
  const [sessionTimeout, setSessionTimeout] = useState("");
  const [maxLoginAttempts, setMaxLoginAttempts] = useState("");
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

const handleManageGlobalSettings =async () => {
  setIsSubmitting(true);
  const {data, error} = await supabase
 .from('global_setting')
 .select('id')
 if (data && data.length > 0) {
 const {data : updateData, error: updateError} = await supabase
 .from('global_setting')
 .update({
  nom: platformName,
  email_support: supportEmail,
  taille_max: parseInt(maxFileSize, 10),
  status: 'active'
  }).eq('id', data[0].id)
  if(updateError){
    console.log("Update Error:", updateError);
    alert("Erreur lors de la mise à jour des paramètres globaux.");
    setIsSubmitting(false);
  }else{
    alert("Paramètres globaux mis à jour avec succès.");
    setIsSubmitting(false);
  }
 
}else{
  const {data : insertData, error: insertError} = await supabase
  .from('global_setting')
  .insert({
    nom: platformName,
    email_support: supportEmail,
    taille_max: parseInt(maxFileSize, 10),
    status: 'active'
  })
  if(insertError){
    console.log("Insert Error:", insertError);
    alert("Erreur lors de l'insertion des paramètres globaux.");
    setIsSubmitting(false);
  }else{
    alert("Paramètres globaux insérés avec succès.");
    setIsSubmitting(false);
  }
}
}
  

const offresAndQuotas =async () => {
  setIsSubmitting(true);
  const {data, error} = await supabase
 .from('offre_quota')
 .select('id')
  if (data && data.length > 0) {
    const {data : updateData, error: updateError} = await supabase
    .from('offre_quota')
    .update({
    offer_type:{  telechargement_gratuit: parseInt(freeDownloads, 10),
      telechargement_pro: parseInt(proDownloads, 10),
      telechargement_entreprise: enterpriseDownloads,},
      status: 'active'
    }).eq('id', data[0].id)
    if(updateError){
      console.log("Update Error:", updateError);
      alert("Erreur lors de la mise à jour des offres et quotas.");
      setIsSubmitting(false);
    }else{
      alert("Offres et quotas mis à jour avec succès.");
      setIsSubmitting(false);
    }
  }else{
    const {data : insertData, error: insertError} = await supabase
    .from('offre_quota')
    .insert({
      offer_type:{  telechargement_gratuit: parseInt(freeDownloads, 10),
        telechargement_pro: parseInt(proDownloads, 10),
        telechargement_entreprise: enterpriseDownloads,},
        status: 'active'
    })
    if(insertError){
      console.log("Insert Error:", insertError);
      alert("Erreur lors de l'insertion des offres et quotas.");
      setIsSubmitting(false);
    }else{
      alert("Offres et quotas insérés avec succès.");
      setIsSubmitting(false);
    }
  }
}

const updateSecuritySettings = async () => {
  setIsSubmitting(true);
  const {data, error} = await supabase.from('session_manager').select('id')
  if (data && data.length > 0) {
    const {data : updateData, error: updateError} = await supabase
    .from('session_manager')
    .update({
      expiration: parseInt(sessionTimeout, 10),
      max_connexion: parseInt(maxLoginAttempts, 10),
      // two_factor_enabled: twoFactorEnabled,
      statut: 'active'
    }).eq('id', data[0].id)
    if(updateError){
      console.log("Update Error:", updateError);
      alert("Erreur lors de la mise à jour des paramètres de sécurité.");
      setIsSubmitting(false);
    }else{
      alert("Paramètres de sécurité mis à jour avec succès.");
      setIsSubmitting(false);
    }
    
}else{
  const {data : insertData, error: insertError} = await supabase
  .from('session_manager')
  .insert({
    expiration: parseInt(sessionTimeout, 10),
    max_connexion: parseInt(maxLoginAttempts, 10),
    // two_factor_enabled: twoFactorEnabled,
    statut: 'active'
  })
  if(insertError){
    console.log("Insert Error:", insertError);
    alert("Erreur lors de l'insertion des paramètres de sécurité.");
    setIsSubmitting(false);
  }else{
    alert("Paramètres de sécurité insérés avec succès.");
    setIsSubmitting(false);
  }
}
}

const fetchSettings = async () => {
  // Fetch global settings
  const {data: globalData, error: globalError} = await supabase.from('global_setting').select('*').eq('status', 'active').single();
  if(globalData){
    setPlatformName(globalData.nom);
    setSupportEmail(globalData.email_support);
    setMaxFileSize(globalData.taille_max.toString());
  }
  // Fetch offers and quotas
  const {data: offreData, error: offreError} = await supabase.from('offre_quota').select('*').eq('status', 'active').single();
  if(offreData){
    setFreeDownloads(offreData.offer_type.telechargement_gratuit.toString());
    setProDownloads(offreData.offer_type.telechargement_pro.toString());
    setEnterpriseDownloads(offreData.offer_type.telechargement_entreprise.toString());
  }
  // Fetch security settings
  const {data: securityData, error: securityError} = await supabase.from('session_manager').select('*').eq('statut', 'active').single();
  if(securityData){
    setSessionTimeout(securityData.expiration.toString());
    setMaxLoginAttempts(securityData.max_connexion.toString());
    // setTwoFactorEnabled(securityData.two_factor_enabled);
  }
}


useEffect(() => {
  fetchSettings();
}, []);

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
                <Input id="admin-role" value={adminRole} readOnly />
                <Badge className="bg-[#001A3B] text-white">Accès complet</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructor-role">Rôle Formateur</Label>
              <div className="flex items-center gap-2">
                <Input id="instructor-role" value={instructorRole} readOnly />
                <Badge className="bg-[#E0AB6C] text-[#001A3B]">Gestion des cours</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="student-role">Rôle Étudiant</Label>
              <div className="flex items-center gap-2">
                <Input id="student-role" value={studentRole} readOnly />
                <Badge variant="outline">Accès aux cours</Badge>
              </div>
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90" type="button" disabled={isSubmitting} onClick={() => alert('Gestion des rôles à implémenter')}> 
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
              <Input id="platform-name" value={platformName} onChange={e => setPlatformName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-email">Email de support</Label>
              <Input id="support-email" type="email" value={supportEmail} onChange={e => setSupportEmail(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-file-size">Taille maximale des fichiers (MB)</Label>
              <Input id="max-file-size" type="number" value={maxFileSize} onChange={e => setMaxFileSize(e.target.value)} />
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90" type="button" disabled={isSubmitting} onClick={handleManageGlobalSettings}>
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
              <Input id="free-downloads" type="number" value={freeDownloads} onChange={e => setFreeDownloads(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="pro-downloads">Téléchargements pro (offre pro)</Label>
              <Input id="pro-downloads" type="number" value={proDownloads} onChange={e => setProDownloads(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="enterprise-downloads">Téléchargements entreprise</Label>
              <Input id="enterprise-downloads" type="text" value={enterpriseDownloads} onChange={e => setEnterpriseDownloads(e.target.value)} />
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90" type="button" disabled={isSubmitting} onClick={offresAndQuotas}>
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
              <Input id="session-timeout" type="number" value={sessionTimeout} onChange={e => setSessionTimeout(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-login-attempts">Tentatives de connexion max</Label>
              <Input id="max-login-attempts" type="number" value={maxLoginAttempts} onChange={e => setMaxLoginAttempts(e.target.value)} />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label htmlFor="two-factor">Authentification à deux facteurs</Label>
                <p className="text-sm text-[#001A3B]/60">Activer l'authentification 2FA</p>
              </div>
              <Button variant="outline" onClick={() => setTwoFactorEnabled(v => !v)}>
                {twoFactorEnabled ? "Désactiver" : "Activer"}
              </Button>
            </div>
            <Button className="bg-[#001A3B] hover:bg-[#001A3B]/90" type="button" disabled={isSubmitting} onClick={updateSecuritySettings}>
              <Save className="w-4 h-4 mr-2" />
              Enregistrer
            </Button>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  )
}

