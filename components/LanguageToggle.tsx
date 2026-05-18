"use client"

import { useLanguage } from "@/context/LanguageContext"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2 text-sm font-bold text-navy select-none">
      {/* Ukrainsk vælger */}
      <button
        onClick={() => setLanguage("ua")}
        className={`transition-colors cursor-pointer ${
          language === "ua" 
            ? "text-secondary-purple font-black underline underline-offset-4" 
            : "opacity-50 hover:opacity-100"
        }`}
      >
        UK
      </button>
      
      {/* Skillelinje */}
      <span className="opacity-30">|</span>
      
      {/* Dansk vælger */}
      <button
        onClick={() => setLanguage("dk")}
        className={`transition-colors cursor-pointer ${
          language === "dk" 
            ? "text-secondary-purple font-black underline underline-offset-4" 
            : "opacity-50 hover:opacity-100"
        }`}
      >
        DK
      </button>
    </div>
  )
}