"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/context/LanguageContext"; // Importer din sprog-context

interface Step5Props {
  onNext: (data: any) => void;
  onBack: () => void;
  initialData?: any;
}

export default function Step5({ onNext, onBack, initialData }: Step5Props) {
  const { language } = useLanguage(); // Hent det aktive sprog
  // Vi gemmer valg som: { "футбол": "Новачок", "теніс": "Середній" }
  const [selections, setSelections] = useState<Record<string, string>>(initialData?.selections || {});
  const [activeSport, setActiveSport] = useState<string | null>(null);
  const [otherSport, setOtherSport] = useState(initialData?.otherSport || "");

  const sports = [
    { ukr: "футбол", dan: "Fodbold" },
    { ukr: "Гандбол", dan: "Håndbold" },
    { ukr: "Баскетбол", dan: "Basketball" },
    { ukr: "Регбі", dan: "Rugby" },
    { ukr: "теніс", dan: "Tennis" },
    { ukr: "Бадмінтон", dan: "Badminton" },
    { ukr: "дзюдо", dan: "Judo" },
    { ukr: "тхеквондо", dan: "Tae kwon do" },
    { ukr: "бокс", dan: "Boksning" },
    { ukr: "Гімнастика", dan: "Gymnastik" },
    { ukr: "Танець", dan: "Dans" },
    { ukr: "Творчий", dan: "Kreativitet" },
  ];

  const levels = [
    { ukr: "Новачок", dan: "Ny" },
    { ukr: "Середній", dan: "Mellem" },
    { ukr: "Просунутий", dan: "Øvet" }
  ];

  const handleSportClick = (sport: string) => {
    if (selections[sport]) {
      const newSelections = { ...selections };
      delete newSelections[sport];
      setSelections(newSelections);
      setActiveSport(null);
    } else {
      setActiveSport(sport);
      setSelections(prev => ({ ...prev, [sport]: "Новачок" }));
    }
  };

  const setLevel = (level: string) => {
    if (activeSport) {
      setSelections(prev => ({ ...prev, [activeSport]: level }));
    }
  };

  const handleNext = () => {
    onNext({ selections, otherSport });
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* OVERSKRIFT (Bilingval) */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-navy text-2xl md:text-3xl font-bold mb-4 uppercase font-kbh">
            Яким видом спорту ти цікавишся?
          </h1>
          <p className="text-navy/70 text-lg italic font-kbhtekst">
            (Hvilken sport er du interesseret i?)
          </p>
        </div>

        {/* SPORTS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
          {sports.map((sport) => {
            const isSelected = !!selections[sport.ukr];
            const isActive = activeSport === sport.ukr;

            return (
              <button
                key={sport.ukr}
                type="button"
                onClick={() => handleSportClick(sport.ukr)}
                className={`py-3 px-2 rounded-full border-2 transition-all flex flex-col items-center justify-center cursor-pointer
                  ${isActive ? "ring-2 ring-navy border-secondary-purple" : "border-transparent"}
                  ${isSelected 
                    ? "bg-secondary-purple text-white shadow-md" 
                    : "bg-secondary-light text-navy hover:border-secondary-purple/30"}`}
              >
                <span className="font-bold text-[12px] md:text-sm uppercase font-kbh leading-tight">{sport.ukr}</span>
                <span className="text-[9px] italic font-kbhtekst opacity-70">({sport.dan})</span>
                {isSelected && (
                  <span className="text-[8px] mt-1 bg-navy/20 px-2 rounded-full font-bold">
                    {/* Viser det valgte niveau i bunden af sportsknappen baseret på aktivt sprog */}
                    {language === "ua" 
                      ? selections[sport.ukr] 
                      : (levels.find(l => l.ukr === selections[sport.ukr])?.dan || selections[sport.ukr])
                    }
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* NIVEAU-VÆLGER (Vises kun når en sport er valgt) */}
        {activeSport && (
          <div className="animate-in slide-in-from-top-2 duration-300 bg-primary-blue/30 p-6 rounded-xl mb-12 border-2 border-dashed border-secondary-purple/30">
            
            <p className="text-navy font-bold uppercase font-kbh mb-4 text-sm">
              {language === "ua" 
                ? `Рівень для ${activeSport} (Niveau):`
                : `Niveau for ${sports.find(s => s.ukr === activeSport)?.dan || activeSport}:`
              }
            </p>

            <div className="flex justify-center gap-2">
              {levels.map((l) => {
                // Her tjekkes der stabilt mod datalagets ukrainske værdi for at holde knappen aktiv/lilla
                const isLevelSelected = selections[activeSport] === l.ukr;

                return (
                  <button
                    key={l.ukr}
                    type="button"
                    onClick={() => setLevel(l.ukr)}
                    className={`flex-1 py-3 rounded-full border-2 text-[10px] md:text-xs font-bold uppercase transition-all cursor-pointer
                      ${isLevelSelected
                        ? "bg-secondary-purple text-white border-navy shadow-lg"
                        : "bg-white text-navy border-gray-200 hover:border-navy/30"}`}
                  >
                    {/* Visningslag: Hvis siden står på dansk, rykkes det danske ord op som primært */}
                    {language === "ua" ? l.ukr : l.dan}
                    <span className="block opacity-60 text-[8px]">
                      ({language === "ua" ? l.dan : l.ukr})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* ANDET SEKTION */}
        <div className="space-y-4 mb-16 text-left max-w-md mx-auto">
          <label className="block text-navy font-bold text-lg uppercase font-kbh">
            Інше: <span className="text-navy/60 font-normal italic font-kbhtekst text-sm ml-1">(Andet)</span>
          </label>
          <Input
            placeholder={language === "ua" ? "Напишіть тут..." : "Skriv her..."}
            value={otherSport}
            onChange={(e) => setOtherSport(e.target.value)}
            className="h-14 border-2 border-gray-200 rounded-none bg-white text-base"
          />
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto pt-8">
          <button type="button" onClick={onBack} className="flex items-center gap-2 text-navy group hover:opacity-70 transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left leading-tight">
              <p className="font-kbh font-black uppercase text-[14px] md:text-base tracking-widest">Назад</p>
              <p className="text-[10px] font-kbhtekst italic opacity-50">(Tilbage)</p>
            </div>
          </button>

          <Button variant="purple" size="kk" onClick={handleNext} className="h-14 px-10 shadow-xl flex flex-col items-center justify-center leading-none border-none shrink-0 cursor-pointer">
            <span className="text-[18px] md:text-[20px] font-bold tracking-wider font-kbh">Далі</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">(Næste)</span>
          </Button>
        </div>
      </div>
    </div>
  );
}