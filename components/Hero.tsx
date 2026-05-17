"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext" // Importer din sprog-context

export default function Hero() {
  const router = useRouter()
  const { language } = useLanguage() // Hent det aktive sprog
  const [mounted, setMounted] = useState(false)

  // Sørger for, at vi først viser det sprogstyrede indhold, når vi er helt landede i browseren.
  // Dette dræber Vercels SSR-hop fuldstændigt.
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    /* SEKTION: 
        - h-96 (384px) på mobil for at undgå det meget aflange look.
        - md:h-175 (700px) på web for at bevare storheden.
        - overflow-visible sikrer at den blå boks kan stikke ud.
    */
    <section className="relative w-full h-96 md:h-175 overflow-visible z-20">
      
      <Image
        src="/img/heroimg2.png"
        alt="Ukraine indsats intro"
        fill
        className="object-cover"
        priority
      />

      <div className="relative mx-auto max-w-7xl h-full w-full">
        
        {/* DEN BLÅ BOKS: 100% dit originale design og præcise placering over billedet */}
        <div className="absolute -bottom-60 md:-bottom-64 left-0 z-30 w-full md:max-w-2xl bg-primary-blue p-6 md:p-12 shadow-1xl flex flex-col justify-start gap-3 md:gap-8 h-99 md:h-115">

          <div>
            {/* OVERSKRIFT: ALTID BILINGVAL */}
            <h1 className="text-3xl md:text-5xl mb-2 font-kbh text-navy">
              Стань частиною спільноти <br /> <span className="text-2xl md:text-4xl">Bliv en del af et fællesskab</span> 
            </h1>
            
            {/* BRØDTEKST: Viser først sprog-teksten når klienten er klar (Undgår SSR-hop) */}
            <p className="text-base md:text-xl font-kbhtekst text-navy min-h-[120px] md:min-h-0">
              {mounted && (
                language === "ua" 
                  ? "Копенгаген має насичене спортивне та культурне життя. Наші консультанти допоможуть вам сконтактувати з організацією, яка вас цікавить, та підтримають у процесі реєстрації. Оберіть те, що вам до душі, і ми допоможемо з усім іншим."
                  : "København har et rigt sports- og kulturliv. Vores konsulenter hjælper dig med at kontakte den forening, der interesserer dig, og støtter dig gennem hele registreringsprocessen. Vælg det, du brænder for, så hjælper vi med resten."
              )}
            </p>
          </div>

          {/* KNAP-CONTAINER: Placeret i dit præcise layout, tættere på teksten */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-2">
            <Button 
              variant="purple" 
              size="xl" 
              onClick={() => router.push('/registration')}
              className="mx-auto md:ml-auto cursor-pointer"
            >
              {mounted && (language === "ua" ? "Контакт" : "Kontakt")}
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  )
}