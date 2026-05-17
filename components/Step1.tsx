"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { useLanguage } from "@/context/LanguageContext"; // Importer din sprog-context

interface Step1Props {
  onNext: () => void;
}

export default function Step1({ onNext }: Step1Props) {
  const { language } = useLanguage(); // Hent det aktive sprog

  return (
    /* Vi bruger min-h-screen og pb-20 for at sikre, at man kan scrolle og der er luft i bunden */
    <div className="flex flex-col items-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-32">
      
      {/* Indholdskasse der centrerer alt på midten */}
      <div className="max-w-2xl w-full relative">
        
        {/* Overskrift sektion - font-normal (ikke bold) */}
        <div className="mb-8 md:mb-14">
          <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 leading-[1.1] uppercase tracking-tight">
            Встановити  контакт
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            Skab kontakt
          </p>
        </div>

        {/* Brødtekst - Venstrestillet. Skifter dynamisk baseret på sprogvalg */}
        <div className="text-left text-navy leading-relaxed space-y-6 mb-16 md:mb-20 font-kbhtekst text-base md:text-xl">
          <p>
            {language === "ua" 
              ? "Фрітідсгуїдерне (Fritidsguiderne) — це ініціатива, яка допомагає дітям і молоді віком 3–30 років, які ще не вирішили, як організувати своє дозвілля, стати частиною спільноти та обрати заняття до душі. Цю форму можна заповнити, якщо ви хочете отримати допомогу у пошуку відповідної позашкільної активності. Fritidsguiderne допомагають із реєстрацією та подачею заявки на отримання фінансової підтримки (гранту), якщо це необхідно."
              : "Fritidsguiderne er et initiativ, der hjælper børn og unge i alderen 3-30 år, som endnu ikke har fundet ud af, hvordan de vil organisere deres fritid, med at blive en del af et fællesskab og vælge en aktivitet, de holder af. Denne blanket kan udfyldes, hvis du ønsker hjælp til at finde en passende fritidsaktivitet. Fritidsguiderne hjælper med tilmelding og ansøgning om økonomisk støtte (kontingentstøtte), hvis der er behov for det."
            }
          </p>
        </div>

        {/* Hovedknap (Begynd) - Centreret */}
        <div className="flex flex-col items-center w-full mb-24">
          <Button
            variant="purple" 
            size="kk" 
            onClick={onNext}
            className="h-14 w-50 shadow-xl flex flex-col items-center justify-center leading-none border-none cursor-pointer"
          >
            <span className="text-[20px] tracking-wider font-kbh">
              Далі
            </span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">
              (Næste)
            </span>
          </Button>
        </div>

        {/* Tilbage-knap: Placeret til VENSTRE i bunden af containeren */}
        <button 
          onClick={() => window.location.href = "/"}
          className="absolute -bottom-16 left-0 flex items-center gap-3 text-navy group hover:opacity-70 transition-all pb-20 cursor-pointer"
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
      </div>
    </div>
  );
}