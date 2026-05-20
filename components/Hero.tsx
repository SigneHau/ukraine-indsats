"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"

export default function Hero() {
  // Navigation (bruges til at sende brugeren til en ny side)
  const router = useRouter()
  // Henter det valgte sprog (f.eks. "ua" eller "dk") fra din sprog-kontekst
  const { language } = useLanguage()

  return (
    <section className="relative w-full h-96 md:h-175 overflow-visible z-20">
      {/* BAGGRUNDS-BILLEDET (Hero-billedet der fylder hele sektionen) */}
      <Image
        src="/img/heroimg2.png"
        alt="Ukraine indsats intro"
        fill
        className="object-cover"
        priority
      />

      <div className="relative mx-auto max-w-7xl h-full w-full">
        {/* DEN BLÅ TEKSTBOKS (Placeret oven på billedet i bunden) */}
        <div className="absolute -bottom-60 md:-bottom-26 left-0 z-30 w-full md:max-w-2xl bg-primary-blue p-6 md:p-12 shadow-1xl flex flex-col justify-start gap-3 md:gap-8 h-99 md:h-115">
          
          <div>
            {/* OVERSKRIFT (Viser altid både den ukrainske og den danske tekst) */}
            <h1 className="text-3xl md:text-5xl mb-2 font-kbh text-navy">
              Стань частиною спільноти <br /> <span className="text-2xl md:text-4xl">Bliv en del af et fællesskab</span> 
            </h1>
            
            {/* BRØDTEKST (Skifter dynamisk mellem ukrainsk og dansk alt efter sprogvalg) */}
            <p className="text-base md:text-xl font-kbhtekst text-navy min-h-[120px] md:min-h-0">
              {language === "ua" 
                ? "Копенгаген має насичене спортивне та культурне життя. Наші консультанти допоможуть вам сконтактувати з організацією, яка вас цікавить, та підтримають у процесі реєстрації. Оберіть те, що вам до душі, і we допоможемо з усім іншим."
                : "København har et rigt sports- og kulturliv. Vores konsulenter hjælper dig med at kontakte den forening, der interesserer dig, og støtter dig gennem hele registreringsprocessen. Vælg det, du brænder for, så hjælper vi med resten."
              }
            </p>
          </div>

          {/* KNAP-SEKTION (Sender brugeren videre til din 7-trins formular under '/registration') */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full mt-2">
            <Button 
              variant="purple" 
              size="xl" 
              onClick={() => router.push('/registration')}
              className="mx-auto md:ml-auto cursor-pointer"
            >
              {language === "ua" ? "Контакт" : "Kontakt"}
            </Button>
          </div>

        </div>
      </div>
    </section>
  )
}