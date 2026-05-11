"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    /* 
       SEKTION: 
       - h-150 (600px) på mobil.
       - md:h-175 (700px) på web.
       - overflow-visible er kritisk for at boksen kan stikke ud i bunden.
    */
    <section className="relative w-full h-150 md:h-175 overflow-visible z-20">
      
      <Image
        src="/img/intro-uk.png"
        alt="Ukraine indsats intro"
        fill
        className="object-cover"
        priority
      />

      <div className="relative mx-auto max-w-7xl h-full w-full">
        
        {/* 
    DEN HVIDE BOKS:
    - md:max-w-175: Svarer til 700px (Tailwind standard skala i v4).
    - -bottom-20 / md:-bottom-24: Bevarer dit ønskede overlap.
*/}
<div className="absolute -bottom-80 md:-bottom-64  md:left-0 z-30 w-fullmax-width: 100%; md:max-w-200 bg-primary-blue p-6 md:p-12 shadow-2xl  ">
  
  {/* Ukrainsk sektion med dansk overskift */}
  <div className="mb-8">
    <h1 className="text-3xl md:text-5xl mb-2 font-kbh font-bold text-black">
      Стань частиною спільноти | Bliv en del af et fællesskab
    </h1>
    <p className="text-sm md:text-xl font-kbhtekst text-navy">
      Копенгаген має насичене спортивне та культурне життя. Наші консультанти допоможуть вам сконтактувати з організацією, яка вас цікавить, та підтримають у процесі реєстрації. Оберіть те, що вам до душі, і ми допоможемо з усім іншим.
    </p>
  </div>



  {/* Bund-sektion med knap (bevares fra tidligere) */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
    
    
    <Button className="bg-secondary-purple hover:bg-secondary-light hover:text-black text-white rounded-none px-10 py-6 text-2xl transition-colors w-fit font-kbhtekst mx-auto md:mx-0 border-none">
    Контакт
    </Button>
  </div>
</div>
      </div>
    </section>
  )
}