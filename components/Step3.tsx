"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Step3Props {
  onNext: (data: any) => void;
  onBack: () => void;
}

export default function Step3({ onNext, onBack }: Step3Props) {
  const [gender, setGender] = useState<string | null>(null);

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-32 text-center">
      
      <div className="max-w-2xl w-full relative">
        
        {/* Overskrift sektion */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 leading-[1.1] uppercase tracking-tight font-kbh">
            Особиста інформація
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            (Personlig information)
          </p>
        </div>

        {/* Formular sektion */}
        <div className="flex flex-col gap-10 w-full max-w-md mx-auto text-left mb-24">
          
          {/* Navn Input */}
          <div className="space-y-2">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Ім'я: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Navn)</span>
            </label>
            <Input 
              type="text"
              className="h-12 md:h-16 border-2 border-gray-200 rounded-none focus-visible:ring-secondary-purple bg-white text-lg"
            />
          </div>

          {/* Køn Valg */}
          <div className="space-y-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Секс: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Køn)</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { ukr: "Чоловік", dan: "Mand" },
                { ukr: "Жінка", dan: "Kvinde" },
                { ukr: "Інше", dan: "Andet" }
              ].map((option) => (
                <button
                  key={option.ukr}
                  type="button"
                  onClick={() => setGender(option.ukr)}
                  className={`h-16 rounded-full border-2 transition-all flex flex-col items-center justify-center
                    ${gender === option.ukr 
                      ? 'bg-secondary-purple text-white border-secondary-purple shadow-lg' 
                      : 'bg-secondary-light text-navy border-transparent hover:border-secondary-purple/30'}`}
                >
                  <span className="font-bold text-base uppercase font-kbh">{option.ukr}</span>
                  <span className="text-[10px] italic font-kbhtekst opacity-70">({option.dan})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fødselsdag */}
          <div className="space-y-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Дата народження <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Fødselsdag)</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col gap-1">
                <Input placeholder="День" className="h-14 text-center rounded-none border-2 border-gray-200 bg-white placeholder:opacity-30" />
                <span className="text-[10px] text-center italic opacity-50 font-kbhtekst">(Dag)</span>
              </div>
              <div className="flex flex-col gap-1">
                <Input placeholder="Місяць" className="h-14 text-center rounded-none border-2 border-gray-200 bg-white placeholder:opacity-30" />
                <span className="text-[10px] text-center italic opacity-50 font-kbhtekst">(Måned)</span>
              </div>
              <div className="flex flex-col gap-1">
                <Input placeholder="Рік" className="h-14 text-center rounded-none border-2 border-gray-200 bg-white placeholder:opacity-30" />
                <span className="text-[10px] text-center italic opacity-50 font-kbhtekst">(År)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Container */}
<div className="relative w-full max-w-md mx-auto mt-50">
  
  {/* Tilbage-knap (Venstre side) */}
  <button 
    onClick={onBack}
    className="absolute left-0 bottom-0 flex items-center gap-3 text-navy group hover:opacity-70 transition-all"
  >
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2.5" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-navy"
    >
      <path d="M9 14l-4-4 4-4" />
      <path d="M5 10h11a4 4 0 1 1 0 8h-1" />
    </svg>

    <div className="text-left">
      <p className="leading-tight font-kbh font-black uppercase text-base tracking-widest text-navy">Назад</p>
      <p className="text-xs font-kbhtekst italic opacity-50 text-navy">(Tilbage)</p>
    </div>
  </button>

  {/* Næste-knap (Højre side) */}
  <div className="absolute right-0 bottom-0">
    <Button 
      variant="purple" 
      size="xl" 
      onClick={onNext}
      className="h-14 rounded-none shadow-xl flex flex-col items-center justify-center leading-none border-none"
    >
      <span className="text-[20px] font-bold tracking-wider font-kbh">
        Далі
      </span>
      <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">
        (Næste)
      </span>
    </Button>
  </div>
  
</div>
        
      </div>
    </div>
  );
}