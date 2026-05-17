"use client"

import React, { createContext, useContext, useState } from "react"

// Vi definerer de to sprog, applikationen understøtter
type Language = "ua" | "dk"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
}

// Opretter selve contexten
const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Provider-komponenten som omslutter appen og styrer staten
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ua") // Ukrainsk som standard

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Custom hook så det er ultranemt at hente sproget ude i komponenterne
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage skal bruges inden for en LanguageProvider")
  }
  return context
}