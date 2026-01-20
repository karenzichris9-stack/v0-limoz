"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "./translations"

type Language = "en" | "fr"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem("language") as Language
    if (saved && (saved === "en" || saved === "fr")) {
      setLanguageState(saved)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (mounted) {
      localStorage.setItem("language", lang)
      // Update HTML lang attribute for SEO
      document.documentElement.lang = lang
    }
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k]
      } else {
        return key
      }
    }

    return typeof value === "string" ? value : key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}
