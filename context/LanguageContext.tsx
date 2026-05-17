"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "ua" | "dk"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // Vi starter med "ua", men tjekker browseren så snart komponenten vågner
  const [language, setLanguageState] = useState<Language>("ua")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("app-language") as Language
    if (savedLanguage === "ua" || savedLanguage === "dk") {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("app-language", lang) // Gemmer valget permanent i browseren
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage skal bruges inden for en LanguageProvider")
  }
  return context
}