// components/ui/toast.tsx
"use client"

import React, { useEffect } from "react"
import { CheckCircle2, AlertCircle, X } from "lucide-react"

export type ToastType = "success" | "error"

export type ToastProps = {
  type: ToastType
  message: string
  onClose: () => void
  id?: number | string
  duration?: number // ms
}

/**
 * Toast component réutilisable.
 * - auto-close après `duration` ms (par défaut 5000ms)
 * - accessible (role="status"), bouton de fermeture
 */
export default function Toast({
  type,
  message,
  onClose,
  id,
  duration = 5000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, duration)

    return () => clearTimeout(timer)
  }, [onClose, duration])

  const isSuccess = type === "success"

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-right-full duration-300"
      data-toast-id={id}
    >
      <div
        className={`flex items-start gap-3 rounded-lg shadow-2xl border backdrop-blur-sm p-4 pr-3 min-w-[320px] max-w-md ${
          isSuccess
            ? "bg-green-50/95 border-green-200 text-green-800"
            : "bg-red-50/95 border-red-200 text-red-800"
        }`}
      >
        <div className="flex-shrink-0 mt-0.5">
          {isSuccess ? (
            <CheckCircle2 className="h-5 w-5 text-green-600" />
          ) : (
            <AlertCircle className="h-5 w-5 text-red-600" />
          )}
        </div>

        <p className="flex-1 text-sm font-medium leading-relaxed">{message}</p>

        <button
          onClick={onClose}
          className={`flex-shrink-0 rounded-md p-1 transition-colors ${
            isSuccess ? "hover:bg-green-100 text-green-600" : "hover:bg-red-100 text-red-600"
          }`}
          aria-label="Fermer la notification"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
