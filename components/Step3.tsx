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
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState({ day: "", month: "", year: "" });

  const handleNext = () => {
    onNext({
      name,
      gender,
      birthday
    });
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center">
      
      <div className="max-w-2xl w-full px-4">
        
        {/* Overskrift sektion */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 leading-[1.1] uppercase tracking-tight font-kbh text-balance">
            Особиста інформація
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            (Personlig information)
          </p>
        </div>

        {/* Formular sektion */}
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto text-left mb-16">
          
          {/* Navn Input */}
          <div className="space-y-2">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Ім'я: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Navn)</span>
            </label>
            <Input 
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 md:h-16 border-2 border-gray-200 rounded-none focus-visible:ring-secondary-purple bg-white text-lg"
            />
          </div>

          {/* Køn Valg */}
          <div className="space-y-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Секс: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Køn)</span>
            </label>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              {[
                { ukr: "Чоловік", dan: "Mand" },
                { ukr: "Жінка", dan: "Kvinde" },
                { ukr: "Інше", dan: "Andet" }
              ].map((option) => (
                <button
                  key={option.ukr}
                  type="button" // Vigtigt: Forhindrer submit-hændelser
                  onClick={() => setGender(option.ukr)}
                  className={`h-14 md:h-16 rounded-full border-2 transition-all flex flex-col items-center justify-center
                    ${gender === option.ukr 
                      ? 'bg-secondary-purple text-white border-secondary-purple shadow-md' 
                      : 'bg-secondary-light text-navy border-transparent hover:border-secondary-purple/30'}`}
                >
                  <span className="font-bold text-[13px] md:text-base uppercase font-kbh leading-none">{option.ukr}</span>
                  <span className="text-[9px] md:text-[10px] italic font-kbhtekst opacity-70">({option.dan})</span>
                </button>
              ))}
            </div>
          </div>

          {/* Fødselsdag */}
          <div className="space-y-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Дата народження <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Fødselsdag)</span>
            </label>
            <div className="grid grid-cols-3 gap-2 md:gap-3">
              <div className="flex flex-col gap-1">
                <Input 
                  placeholder="День" 
                  value={birthday.day}
                  onChange={(e) => setBirthday({...birthday, day: e.target.value})}
                  className="h-12 md:h-14 text-center rounded-none border-2 border-gray-200 bg-white placeholder:opacity-30" 
                />
                <span className="text-[10px] text-center italic opacity-50 font-kbhtekst">(Dag)</span>
              </div>
              <div className="flex flex-col gap-1">
                <Input 
                  placeholder="Місяць" 
                  value={birthday.month}
                  onChange={(e) => setBirthday({...birthday, month: e.target.value})}
                  className="h-12 md:h-14 text-center rounded-none border-2 border-gray-200 bg-white placeholder:opacity-30" 
                />
                <span className="text-[10px] text-center italic opacity-50 font-kbhtekst">(Måned)</span>
              </div>
              <div className="flex flex-col gap-1">
                <Input 
                  placeholder="Рік" 
                  value={birthday.year}
                  onChange={(e) => setBirthday({...birthday, year: e.target.value})}
                  className="h-12 md:h-14 text-center rounded-none border-2 border-gray-200 bg-white placeholder:opacity-30" 
                />
                <span className="text-[10px] text-center italic opacity-50 font-kbhtekst">(År)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Container */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto pt-10 border-t border-gray-100 px-2">
          
          {/* Tilbage-knap */}
          <button 
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 md:gap-3 text-navy group hover:opacity-70 transition-all shrink-0"
          >
            {/* SVG med Tailwind klasser til størrelse i stedet for attributter */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-navy">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left">
              <p className="leading-tight font-kbh font-black uppercase text-[14px] md:text-base tracking-widest">Назад</p>
              <p className="text-[10px] md:text-xs font-kbhtekst italic opacity-50">(Tilbage)</p>
            </div>
          </button>

          {/* Næste-knap */}
          <Button 
            variant="purple" 
            size="md" 
            onClick={handleNext}
            className="h-14 px-8 rounded-none shadow-xl flex flex-col items-center justify-center leading-none border-none shrink-0"
          >
            <span className="text-[18px] md:text-[20px] font-bold tracking-wider font-kbh">
              Далі
            </span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">
              (Næste)
            </span>
          </Button>
        </div>
        
      </div>
    </div>
  );
}