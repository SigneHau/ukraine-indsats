"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const stories = [
  {
    quote: "Завдяки вашій допомозі та цим активностям мій син більше спілкується з данськими (і не тільки) дітьми, вчиться працювати в команді та ще краще розуміє данську культуру. Він став впевненішим у собі та навіть щасливішим.",
    
  },
  {
    quote: "Ваша допомога багато значить для нас. Завдяки вам мій син зміг знайти себе у баскетболі та плаванні. Ви полегшили мені цей пошук, на який я б витратила дуже багато часу самостійно через брак часу та нерозуміння того, як все працює.",
   
  },
  {
    quote: "Моєму сину дуже сподобався початок дозвілля. Це подарувало йому відчуття радості та можливість досліджувати свої інтереси по-новому. Цей досвід не лише приніс йому щастя, а й підвищив впевненість та соціальну взаємодію.",
    
  },
]

export default function SuccessStories() {
  return (
    <section className="w-full py-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 md:px-16 relative">
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {stories.map((item, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="bg-primary-blue p-10 h-full flex flex-col justify-between min-height: 420px relative">
                  
                  <div className="relative h-full flex flex-col justify-center">
                    <span className="text-8xl text-navy opacity-20 font-serif absolute -top-4 -left-4 select-none">
                      “
                    </span>
                    
                    <p className="text-navy text-base leading-relaxed relative z-12 py-6">
                      {item.quote}
                    </p>
                    
                    <span className="text-8xl text-navy opacity-20 font-serif absolute -bottom-15 right-0 select-none">
                      ”
                    </span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Pile på siderne uden blå ring */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full left-0 flex justify-between px-2 pointer-events-none">
            <CarouselPrevious 
              className="static translate-y-0 border-none bg-transparent text-navy hover:text-secondary-purple h-12 w-4 pointer-events-auto" 
            />
            <CarouselNext 
              className="static translate-y-0 border-none bg-transparent text-navy hover:text-secondary-purple h-12 w-4 pointer-events-auto" 
            />
          </div>
        </Carousel>
        
      </div>
    </section>
  )
}