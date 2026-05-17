"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext" // Importer din sprog-context

export default function Hero() {
  const router = useRouter()
  const { language } = useLanguage() // Hent det aktive sprog

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
        
        {/* DEN BLÅ BOKS: Opdateret med standard Tailwind-højde, der fjerner hoppet */}
          <div className="absolute -bottom-60 md:-bottom-64 left-0 z-30 w-full md:max-w-2xl bg-primary-blue p-6 md:p-12 shadow-1xl flex flex-col justify-between md:h-115">
          
          <div className="mb-8">
            {/* OVERSKRIFT: ALTID BILINGVAL (UX-strategi: Hurtig scanning for alle) */}
            <h1 className="text-3xl md:text-5xl mb-2 font-kbh text-navy">
              Стань частиною спільноти <br /> <span className="text-2xl md:text-4xl">Bliv en del af et fællesskab</span> 
            </h1>
            
            {/* BRØDTEKST: Skifter dynamisk for at undgå kognitivt overload */}
            <p className="text-base md:text-xl font-kbhtekst text-navy">
              {language === "ua" 
                ? "Копенгаген має насичене спортивне та культурне життя. Наші консультанти допоможуть вам сконтактувати з організацією, яка вас цікавить, та підтримають у процесі реєстрації. Оберіть те, що вам до душі, і ми допоможемо з усім іншим."
                : "København har et rigt sports- og kulturliv. Vores konsulenter hjælper dig med at kontakte den forening, der interesserer dig, og støtter dig gennem hele registreringsprocessen. Vælg det, du brænder for, så hjælper vi med resten."
              }
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            {/* KNAPTEKST: Skifter dynamisk */}
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