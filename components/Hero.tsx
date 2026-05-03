"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"
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
        src="/intro-uk.png"
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
<div className="absolute -bottom-80 md:-bottom-64 left-4 md:left-0 z-30 w-full max-w-[92%] md:max-w-200 bg-white p-6 md:p-12 shadow-2xl border-2 border-ua-blue -rotate-1 md:-rotate-2">
  
  {/* Ukrainsk sektion */}
  <div className="mb-8">
    <h1 className="text-3xl md:text-5xl mb-2 font-kbh font-bold text-navy">
      Стань частиною спільноти
    </h1>
    <p className="text-sm md:text-xl font-kbhtekst text-navy">
      Ініціатива «Україна» допомагає молоді віком від 18 до 30 років долучитися до життя асоціацій через заходи та нетворкінг. Тут ми створюємо умови для нових дружніх стосунків та значущих спільнот, які зміцнюють як особистість, так і місто.
    </p>
  </div>

  {/* Dansk sektion - Nu helt identisk i styling */}
  <div>
    <h1 className="text-3xl md:text-5xl mb-2 font-kbh font-bold text-navy">
      Bliv en del af et fællesskab
    </h1>
    <p className="text-sm md:text-xl mb-0 font-kbhtekst text-navy">
      Ukraine-indsatsen hjælper unge 18-30 år ind i foreningslivet gennem aktiviteter og netværk. Her skaber vi rammerne for nye venskaber og meningsfulde fællesskaber, der styrker både individet og byen.
    </p>
  </div>

  {/* Bund-sektion med knap (bevares fra tidligere) */}
  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-10">
    <a href="#" className="flex items-center text-sm font-semibold hover:underline font-kbhtekst text-navy">
      Læs mere om fritidsguiderne <ArrowRight className="ml-2 h-4 w-4 text-ua-blue" />
    </a>
    
    <Button className="bg-ua-blue hover:bg-ua-yellow hover:text-navy text-white px-10 py-7 md:text-xl transition-colors w-full sm:w-auto font-kbhtekst">
      Tilmeld
    </Button>
  </div>
</div>
      </div>
    </section>
  )
}