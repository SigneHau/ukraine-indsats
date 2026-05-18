"use client"

import * as React from "react"
import { useLanguage } from "@/context/LanguageContext"
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"

const stories = [
  {
    ua: "Завдяки вашій допомозі та цим активностям мій син більше спілкується з данськими (і не тільки) дітьми, вчиться працювати в команді та ще краще розуміє данську культуру. Він став впевненішим у собі та навіть щасливішим.",
    dk: "Takket være jeres hjælp og disse aktiviteter taler min søn mere med danske (og andre) børn, lærer at arbejde i teams og forstår den danske kultur endnu bedre. Han er blevet mere selvsikker og endda gladere."
  },
  {
    ua: "Ваша допомога багато значить для нас. Завдяки вам мій син зміг знайти себе у баскетболі та плаванні. Ви полегшили мені цей пошук, на який я б витратила дуже багато часу самостійно через брак часу та нерозуміння того, как все працює.",
    dk: "Jeres hjælp betyder meget for os. Takket være jer lykkedes det min søn at finde sig selv i basketball og svømning. I gjorde denne søgning lettere for mig, som jeg ellers ville have brugt rigtig meget tid på selv pga. tidsmangel og manglende forståelse for, hvordan det hele fungerer."
  },
  {
    ua: "Моєму сину дуже сподобався початок дозвілля. Це подарувало йому відчуття радості та можливість досліджувати свої інтереси по-новому. Цей досвід не лише приніс йому щастя, а й підвищив впевненість та соціальну взаємодію.",
    dk: "Min søn var vild med starten på sin nye fritidsaktivitet. Det gav ham en følelse af glæde og mulighed for at udforske sine interesser på en ny måde. Denne oplevelся bragte ham ikke kun lykke, men øgede også hans selvtillid og sociale interaktion."
  },
]

export default function SuccessStories() {
  const { language } = useLanguage()
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    /* overflow-hidden på mobil-sektionen sikrer, at det næste kort er 100% usynligt uden for rammen */
    <section className="w-full py-0 bg-white overflow-hidden md:overflow-visible">
      <div className="max-w-7xl mx-auto px-12 md:px-16 relative">
        
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full relative"
        >
          {/* Mobil har ml-0 og ingen ydre padding, så kortet strækker sig 100% ud på mobilskærmen */}
          <CarouselContent className="ml-0 md:-ml-4 py-8 -my-8 md:px-4">
            {stories.map((item, index) => {
              const activeQuote = language === "ua" ? item.ua : item.dk

              return (
                /* pl-0 på mobil gør, at kortet fylder hele den synlige skærmramme ud */
                <CarouselItem key={index} className="pl-0 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  
                  {/* DEN BLÅ KASSE - Helt firkantet, og med din skygge intakt */}
                  <div className=" bg-primary-blue p-10 h-full min-h-[380px] md:min-h-[320px] flex flex-col justify-between relative shadow-[8px_0_20px_rgba(0,0,0,0.8)]">
                    
                    <div className="relative h-full flex flex-col justify-center">
                      <span className="text-8xl text-navy opacity-20 font-serif absolute -top-4 -left-4 select-none">
                        “
                      </span>
                      
                      <p className="text-navy text-base leading-relaxed relative z-10 py-6">
                        {activeQuote}
                      </p>
                      
                      <span className="text-8xl text-navy opacity-20 font-serif absolute -bottom-15 right-0 select-none">
                        ”
                      </span>
                    </div>

                  </div>
                </CarouselItem>
              )
            })}
          </CarouselContent>

          {/* RENE SORTE PILE: Placeret længere ude (w-[calc(100%+48px)] og -left-[24px]) uden hvide cirkler */}
          <div className="absolute top-1/2 -translate-y-1/2 w-[calc(100%+48px)] -left-[24px] flex justify-between pointer-events-none md:hidden z-30">
            <button 
              onClick={() => api?.scrollPrev()}
              className="pointer-events-auto text-black hover:text-secondary-purple transition-colors cursor-pointer p-1"
              aria-label="Forrige"
            >
              <ChevronLeft className=" w-8 h-8 -ml-4" />
            </button>
            <button 
              onClick={() => api?.scrollNext()}
              className="pointer-events-auto text-black hover:text-secondary-purple transition-colors cursor-pointer p-1"
              aria-label="Næste"
            >
              <ChevronRight className="w-8 h-8 -mr-4" />
            </button>
          </div>
          
        </Carousel>
        
      </div>
    </section>
  )
}