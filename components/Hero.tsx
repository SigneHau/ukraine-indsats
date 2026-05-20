"use client"

import React, { useState, useEffect } from "react" // Henter React-funktioner til timer og huskespil
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/context/LanguageContext"

export default function Hero() {
  const router = useRouter()
  const { language } = useLanguage()

  // STATS: Holder styr på, hvilket billede (nummer) der vises lige nu
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Liste med alle dine færdige og komprimerede Hero-billeder
  const heroImages = [
    { src: "/img/Hero-trampolin.jpg", alt: "Trampolin" },
    { src: "/img/Hero-faellesskab.jpg", alt: "Fællesskab" },
    { src: "/img/Hero-svommehallen.jpg", alt: "Svømmehal" },
    { src: "/img/Hero-Cykel.jpg", alt: "Cykel" },
    { src: "/img/Hero-dans.jpg", alt: "Dans" },
    { 
      src: "/img/Hero-basket.jpg", 
      alt: "Basketball", 
      // Særligt trick: Låser billedet til venstre på mobil, så drengen ikke forsvinder
      className: "object-cover object-left md:object-center" 
    }
  ]


  // AUTOMATISK TIMER: Skifter billede hvert 5. sekund (5000 millisekunder)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      )
    }, 5000)

    // Stopper timeren igen, hvis brugeren forlader siden
    return () => clearInterval(timer)
  }, [heroImages.length])

  return (
    <section className="relative w-full h-96 md:h-175 overflow-visible z-20">
      
      {/* DET AUTOMATISKE BILLEDESKIFT */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          // Tænder for synligheden (opacity-100) hvis billedet matcher vores tæller
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            // Bruger sær-klassen til basket-billedet, hvis den findes – ellers bare standard object-cover
            className={image.className || "object-cover"}
            priority={index === 0} // Prioriterer det allerførste billede under opstart
          />
        </div>
      ))}

      <div className="relative mx-auto max-w-7xl h-full w-full">
        {/* DEN BLÅ TEKSTBOKS (Placeret oven på billederne – z-30 sikrer den ligger øverst) */}
        <div className="absolute -bottom-68 md:-bottom-26 left-0 z-30 w-full md:max-w-2xl bg-primary-blue p-6 md:p-12 shadow-1xl flex flex-col justify-start gap-3 md:gap-8 h-99 md:h-115">
          
          <div>
            {/* OVERSKRIFT */}
            <h1 className="text-3xl md:text-5xl mb-2 font-kbh text-navy">
              Стань частиною спільноти <br /> <span className="text-2xl md:text-4xl">Bliv en del af et fællesskab</span> 
            </h1>
            
            {/* BRØDTEKST */}
            <p className="text-base md:text-xl font-kbhtekst text-navy min-h-[120px] md:min-h-0">
              {language === "ua" 
                ? "Копенгаген має насичене спортивне та культурне життя. Наші консультанти допоможуть вам сконтактувати з організацією, яка вас цікавить, та підтримають у процесі реєстрації. Оберіть те, що вам до душі, і we допоможемо з усім іншим."
                : "København har et rigt sports- og kulturliv. Vores konsulenter hjælper dig med at kontakte den forening, der interesserer dig, og støtter dig gennem hele registreringsprocessen. Vælg det, du brænder for, så hjælper vi med resten."
              }
            </p>
          </div>

          {/* KNAP-SEKTION */}
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