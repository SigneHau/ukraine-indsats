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
      text: "Розкажіть нам pro свої інтереси та заходи, які ви хотіли б спробувати."
    },
    {
      number: 2,
      title: "Ми підбираємо клуб",
      text: "Копенгагенська комуна підбере для вас клуб, який entspricht вашим інтересам."
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

        {/* Steps Container Wrapper */}
        <div className="relative">
          
          {/* VANDRETTE LINJER (KUN DESKTOP) 
              Dette lag ligger bagved cirklerne og spænder over hele bredden
          */}
          <div className="hidden md:flex absolute top-10 left-0 w-full justify-between items-center px-[15%] z-0">
            <div className="flex-1 h-[2px] border-t-2 border-dashed border-secondary-light mx-12" />
            <div className="flex-1 h-[2px] border-t-2 border-dashed border-secondary-light mx-12" />
          </div>

          {/* Grid med cirkler og tekst */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 mb-16 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex md:flex-col items-start md:items-center text-left md:text-center group relative">
                
                {/* Cirkel Container */}
                <div className="flex flex-col items-center mr-6 md:mr-0 md:mb-4 shrink-0 relative">
                  
                 {/* LODRET LINJE (MOBIL) */}
                    {index !== steps.length - 1 && (
                      <div 
                        className="absolute left-1/2 w-0 border-l-2 border-dashed border-secondary-light md:hidden -translate-x-1/2 z-0" 
                        style={{ 
                          top: "80px", // Starter præcis under cirklen (cirkel er h-20 = 80px)
                          bottom: "0px" // Strækker sig helt ned til bunden af tekst-containeren (hvor næste cirkel starter)
                        }}
                      />
                    )}

                  {/* Cirkel */}
                  <div className="w-20 h-20 bg-secondary-light rounded-full flex items-center justify-center shadow-sm z-10 relative">
                    <span className="text-secondary-purple font-bold text-3xl font-kbh">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Tekst indhold */}
                <div className={index !== steps.length - 1 ? "pb-20 md:pb-0" : ""}>
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
        </div>

        {/* CTA Knap */}
        <div className="flex justify-center w-full mt-8">
          <Button 
            variant="purple" 
            size="xl" 
            onClick={() => router.push('/registration')}
            className="mx-auto"
          >
            Контакт
          </Button>
        </div>

      </div>
    </section>
  );
}