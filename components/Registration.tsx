"use client"
import React from 'react';
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Registration() {
  
    const router = useRouter();
    const steps = [
    {
      number: 1,
      title: "Ви реєструєтеся",
      text: "Розкажіть нам про свої інтереси та заходи, які ви хотіли б спробувати."
    },
    {
      number: 2,
      title: "Ми підбираємо клуб",
      text: "Копенгагенська комуна підбере для вас клуб, який відповідає вашим інтересам."
    },
    {
      number: 3,
      title: "Ви починаєте",
      text: "Клуб зв'яжеться з вами та запросить на перше заняття."
    }
    
  ];

  return (
    <section className="bg-primary-blue py-16 relative z-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Overskrift */}
        <div className="text-center mb-16">
          <h2 className="text-navy text-3xl font-bold md:text-4xl mb-2 font-kbh">
            Як це працює 
          </h2>
          <p className="text-navy text-lg opacity-80">Sådan hjælper vi dig</p>
        </div>
        

        {/* Steps Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 mb-16 relative">
          {steps.map((step, index) => (
            <div key={index} className="flex md:flex-col items-start md:items-center text-left md:text-center group relative">
              
              {/* Cirkel og Linje Container */}
              <div className="flex flex-col items-center mr-6 md:mr-0 md:mb-4 shrink-0 relative">
                
                {/* 
                   DEN STIPLEDE LINJE 
                   Placeret efter cirklen (top-20) for at undgå overlap inde i selve cirklen.
                */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-1/2 top-20 bottom-0 w-0 border-l-2 border-dashed border-secondary-purple md:hidden -translate-x-1/2 z-0" />
                )}
                
                {/* Cirkler: Bevaret w-20 h-20 jf. dine rettelser */}
                <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center shadow-sm z-10">
                  <span className="text-secondary-purple font-bold text-3xl font-kbh">
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Tekst indhold - Bevaret pb-8 for det mindre gab på mobil */}
              <div className={index !== steps.length - 1 ? "pb-8 md:pb-0" : ""}>
                <h3 className="text-navy font-bold text-xl mb-2 font-kbh">
                  {step.title}
                </h3>
                <p className="text-navy/80 text-base font-kbhtekst leading-relaxed max-w-sm">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Knap - Centreret og uden pil */}
        <div className="flex justify-center w-full mt-8">
          <Button 
              variant="purple" 
              size="xl" 
              onClick={() => router.push('/registration')}
              className="mx-auto md:ml-auto"
              >
              Контакт
            </Button>
        </div>

      </div>
    </section>
  );
}