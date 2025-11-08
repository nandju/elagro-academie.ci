"use client"

import { DashboardLayout } from "@/components/dashboard/dashboard-layout"
import {
  Receipt,
  Download,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  XCircle,
  ArrowDown,
  ArrowUp,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"

// Mock data
const transactions = [
  {
    id: "TXN-001",
    date: "2024-02-15",
    type: "Achat",
    course: "Fondamentaux de l'Élevage de Volaille",
    amount: 0,
    status: "Complété",
    method: "Gratuit",
  },
  {
    id: "TXN-002",
    date: "2024-02-10",
    type: "Achat",
    course: "Gestion des Cultures Agricoles",
    amount: 100,
    status: "Complété",
    method: "Carte bancaire",
  },
  {
    id: "TXN-003",
    date: "2024-02-05",
    type: "Abonnement",
    course: "Plan Pro - Mensuel",
    amount: 29,
    status: "Actif",
    method: "Carte bancaire",
  },
  {
    id: "TXN-004",
    date: "2024-01-28",
    type: "Achat",
    course: "Élevage de Porcs Moderne",
    amount: 100,
    status: "Complété",
    method: "Carte bancaire",
  },
  {
    id: "TXN-005",
    date: "2024-01-20",
    type: "Abonnement",
    course: "Plan Pro - Mensuel",
    amount: 29,
    status: "Complété",
    method: "Carte bancaire",
  },
]

const statusColors = {
  Complété: "bg-green-500 text-white",
  Actif: "bg-blue-500 text-white",
  En_attente: "bg-yellow-500 text-white",
  Échoué: "bg-red-500 text-white",
}

export default function TransactionsPage() {
  return (
    <DashboardLayout>
      <div className="p-4 lg:p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#001A3B]">
              Transactions
            </h1>
            <p className="text-[#001A3B]/70 mt-1">
              Historique de toutes vos transactions
            </p>
          </div>
          <Button variant="outline" className="hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            Exporter
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Total Dépensé
              </CardTitle>
              <ArrowDown className="w-4 h-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">258€</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">Ce mois</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Transactions
              </CardTitle>
              <Receipt className="w-4 h-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">
                {transactions.length}
              </div>
              <p className="text-xs text-[#001A3B]/60 mt-1">Total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-[#001A3B]/70">
                Abonnements Actifs
              </CardTitle>
              <CheckCircle2 className="w-4 h-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[#001A3B]">1</div>
              <p className="text-xs text-[#001A3B]/60 mt-1">Plan Pro</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card>
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#001A3B]/40" />
                <Input
                  placeholder="Rechercher une transaction..."
                  className="pl-10"
                />
              </div>
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filtrer
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card>
          <CardHeader>
            <CardTitle className="text-xl font-bold text-[#001A3B]">
              Historique des Transactions
            </CardTitle>
            <CardDescription>
              Liste complète de toutes vos transactions
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#E0AB6C]/20">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Date
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Type
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Description
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Montant
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Méthode
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Statut
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-[#001A3B]">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr
                      key={transaction.id}
                      className="border-b border-[#E0AB6C]/10 hover:bg-[#001A3B]/5 transition-colors"
                    >
                      <td className="py-3 px-4 text-sm text-[#001A3B] font-mono">
                        {transaction.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-[#001A3B]">
                        {new Date(transaction.date).toLocaleDateString("fr-FR")}
                      </td>
                      <td className="py-3 px-4 text-sm text-[#001A3B]">
                        {transaction.type}
                      </td>
                      <td className="py-3 px-4 text-sm text-[#001A3B]">
                        {transaction.course}
                      </td>
                      <td className="py-3 px-4 text-sm font-semibold text-[#001A3B]">
                        {transaction.amount === 0 ? (
                          <span className="text-green-500">Gratuit</span>
                        ) : (
                          <span>{transaction.amount}€</span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-sm text-[#001A3B]/70">
                        {transaction.method}
                      </td>
                      <td className="py-3 px-4">
                        <Badge
                          className={
                            statusColors[
                              transaction.status as keyof typeof statusColors
                            ] || "bg-gray-500 text-white"
                          }
                        >
                          {transaction.status === "Complété" && (
                            <CheckCircle2 className="w-3 h-3 mr-1" />
                          )}
                          {transaction.status === "En_attente" && (
                            <Clock className="w-3 h-3 mr-1" />
                          )}
                          {transaction.status === "Échoué" && (
                            <XCircle className="w-3 h-3 mr-1" />
                          )}
                          {transaction.status}
                        </Badge>
                      </td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  )
}

