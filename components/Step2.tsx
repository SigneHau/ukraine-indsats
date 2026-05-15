"use client";

import { useState } from "react";

interface Step2Props {
  onNext: (data: any) => void;
  onBack: () => void;
  initialData?: any; 
}

export default function Step2({ onNext, onBack, initialData }: Step2Props) {
  // Vi sætter state til det tidligere valg, hvis det findes
  const [selectedType, setSelectedType] = useState<string | null>(initialData?.userType|| null);

  const handleSelect = (type: string) => {
    setSelectedType(type);
    // Vi sender dataen videre med det samme, ligesom du havde før
    onNext({ type });
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-32 text-center">
      
      <div className="max-w-2xl w-full relative">
        
        <div className="mb-10 md:mb-14">
          <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 leading-[1.1] uppercase tracking-tight font-kbh">
            Кого ви реєструєте?
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            Hvem tilmelder du for?
          </p>
        </div>

        <div className="flex flex-col gap-10 w-full mb-24 max-w-md mx-auto">
          
          {/* Mulighed 1: Mig selv */}
          <button
            onClick={() => handleSelect("self")}
            className={`h-12 md:h-16 px-8 rounded-none transition-all flex flex-col items-center justify-center py-8 shadow-xl border-none
              ${selectedType === "self" 
                ? "bg-secondary-light text-black ring-2 ring-secondary-purple" 
                : "bg-secondary-purple text-white hover:bg-secondary-light hover:text-black"}`}
          >
            <span className="text-[18px] md:text-[20px] font-bold uppercase tracking-wider font-kbh">Себе: 18–30 років</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1">(Mig selv: 18-30 årige)</span>
          </button>

          {/* Mulighed 2: Som værge */}
          <button
            onClick={() => handleSelect("guardian")}
            className={`h-12 md:h-16 px-8 rounded-none transition-all flex flex-col items-center justify-center py-8 shadow-xl border-none
              ${selectedType === "guardian" 
                ? "bg-secondary-light text-black ring-2 ring-secondary-purple" 
                : "bg-secondary-purple text-white hover:bg-secondary-light hover:text-black"}`}
          >
            <span className="text-[18px] md:text-[20px] font-bold uppercase tracking-wider font-kbh">Як опікун: до 18 років</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1">(Som værge: under 18 år)</span>
          </button>

          {/* Mulighed 3: Fagpersoner */}
          <button
            onClick={() => handleSelect("pro")}
            className={`h-12 md:h-14 px-8 rounded-none border-2 transition-all flex items-center justify-center gap-2 group shadow-md
              ${selectedType === "pro" 
                ? "border-secondary-purple bg-secondary-light text-navy" 
                : "border-navy bg-white text-navy hover:bg-gray-50"}`}
          >
            <span className="text-[18px] md:text-[20px] font-bold uppercase font-kbh">Fagpersoner</span>
            <svg 
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" 
              strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" 
              className={`group-hover:translate-x-1 transition-transform ${selectedType === "pro" ? "text-secondary-purple" : ""}`}
            >
              <path d="M5 12h14m-7-7l7 7-7 7" />
            </svg>
          </button>

        </div>

        {/* Tilbage-knap */}
        <button 
          onClick={onBack}
          className="absolute -bottom-16 left-0 flex items-center gap-3 text-navy group hover:opacity-70 transition-all pb-10"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-navy">
            <path d="M9 14l-4-4 4-4" />
            <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
          </svg>
          <div className="text-left">
            <p className="leading-tight font-kbh font-black uppercase text-base tracking-widest text-navy">Назад</p>
            <p className="text-xs font-kbhtekst italic opacity-50 text-navy">(Tilbage)</p>
          </div>
        </button>
        
      </div>
    </div>
  );
}