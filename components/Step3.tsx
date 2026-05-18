"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext"; // Importer din sprog-context

interface Step3Props {
  onNext: (data: any) => void;
  onBack: () => void;
  initialData?: any;
  userType: string; // Modtager "self" | "guardian" | "pro" fra manageren
}

export default function Step3({ onNext, onBack, initialData, userType }: Step3Props) {
  const { language } = useLanguage(); // Hent det aktive sprog
  const [gender, setGender] = useState<string | null>(initialData?.gender || null);
  const [name, setName] = useState(initialData?.name || "");
  const [birthday, setBirthday] = useState(initialData?.birthday || { day: "", month: "", year: "" });

  const handleNext = () => {
    onNext({ gender, name, birthday });
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* DYNAMISK OVERSKRIFT BASERET PÅ VALG (Bilingval) */}
        <div className="mb-10 md:mb-14">
          {userType === "self" && (
            <>
              <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 uppercase tracking-tight font-kbh">
                Про себе
              </h1>
              <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
                (Om dig selv)
              </p>
            </>
          )}
          {(userType === "guardian" || userType === "pro") && (
            <>
              <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 uppercase tracking-tight font-kbh">
                Про дитину / підлітка
              </h1>
              <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
                (Om barnet / den unge)
              </p>
            </>
          )}
        </div>

        {/* FORMULAR SEKTION */}
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto text-left mb-16">
          
          {/* NAVN */}
          <div className="space-y-2">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              {userType === "self" ? "Ваше ім'я:" : "Ім'я дитини:"}{" "}
              <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">
                ({userType === "self" ? "Dit navn" : "Barnets navn"})
              </span>
            </label>
            <Input 
              placeholder=""
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-base"
            />
          </div>

          {/* KØN SEKTION MED DYNAMISK TEKST */}
          <div className="space-y-3">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Стать: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Køn)</span>
            </label>
            <div className="grid grid-cols-2 gap-4">
        
              {/* Mand / Dreng */}
              <button
                type="button"
                onClick={() => setGender(userType === "self" ? "Чоловік" : "Хлопчик")}
                className={`h-12 md:h-14 border-2 transition-all font-kbh font-bold uppercase text-sm rounded-none cursor-pointer
                  ${gender === "Чоловік" || gender === "Хлопчик"
                  ? "bg-secondary-purple border-secondary-purple text-white shadow-md" 
                  : "border-gray-200 bg-white text-navy hover:border-gray-300"}`}
              >
                {userType === "self" ? "Чоловік" : "Хлопчик"}
                <span className="block text-[9px] font-normal font-kbhtekst italic lowercase opacity-70">
                  ({userType === "self" ? "Mand" : "Dreng"})
                </span>
              </button>

              {/* Kvinde / Pige */}
              <button
                type="button"
                onClick={() => setGender(userType === "self" ? "Жінка" : "Дівчинка")}
                className={`h-12 md:h-14 border-2 transition-all font-kbh font-bold uppercase text-sm rounded-none cursor-pointer
                  ${gender === "Жінка" || gender === "Дівчинка"
                  ? "bg-secondary-purple border-secondary-purple text-white shadow-md" 
                  : "border-gray-200 bg-white text-navy hover:border-gray-300"}`}
              >
                {userType === "self" ? "Жінка" : "Дівчинка"}
                <span className="block text-[9px] font-normal font-kbhtekst italic lowercase opacity-70">
                  ({userType === "self" ? "Kvinde" : "Pige"})
                </span>
              </button>
            </div>
          </div>

          {/* FØDSELSDAG */}
          <div className="space-y-2">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              день народження: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Fødselsdag)</span>
            </label>
            <div className="grid grid-cols-3 gap-3">
              {/* RETTET: Placeholder skifter nu flydende efter det valgte sprog */}
              <Input 
                placeholder={language === "ua" ? "ДД" : "DD"} 
                maxLength={2}
                value={birthday.day}
                onChange={(e) => setBirthday({...birthday, day: e.target.value})}
                className="h-12 border-2 border-gray-200 rounded-none text-center text-lg placeholder:opacity-30"
              />
              <Input 
                placeholder={language === "ua" ? "ММ" : "MM"} 
                maxLength={2}
                value={birthday.month}
                onChange={(e) => setBirthday({...birthday, month: e.target.value})}
                className="h-12 border-2 border-gray-200 rounded-none text-center text-lg placeholder:opacity-30"
              />
              <Input 
                placeholder={language === "ua" ? "РРРР" : "ÅÅÅÅ"} 
                maxLength={4}
                value={birthday.year}
                onChange={(e) => setBirthday({...birthday, year: e.target.value})}
                className="h-12 border-2 border-gray-200 rounded-none text-center text-lg placeholder:opacity-30"
              />
            </div>
            <p className="text-[10px] italic opacity-50 font-kbhtekst mt-1">(f.eks. 24 / 08 / 2012)</p>
          </div>

        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto pt-10">
          <button type="button" onClick={onBack} className="flex items-center gap-2 text-navy group hover:opacity-70 transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-navy">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left">
              <p className="leading-tight font-kbh font-black uppercase text-[14px] md:text-base tracking-widest text-navy">Назад</p>
              <p className="text-[10px] md:text-xs font-kbhtekst italic opacity-50 text-navy">(Tilbage)</p>
            </div>
          </button>

          <Button variant="purple" size="kk" onClick={handleNext} className="h-14 shadow-xl flex flex-col items-center justify-center cursor-pointer">
            <span className="text-[18px] md:text-[20px] font-bold tracking-wider font-kbh">Далі</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic lowercase">(Næste)</span>
          </Button>
        </div>
        
      </div>
    </div>
  );
}