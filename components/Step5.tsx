"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Plus, X } from "lucide-react"; // Ikoner til at tilføje og slette

interface Step5Props {
  onBack: () => void;
  onNext: (stepData: any) => void;
  initialData: any;
}

export default function Step5({ onBack, onNext, initialData }: Step5Props) {
  const { language } = useLanguage();
  
  // STATS: For de faste valg
  const [selectedMainSport, setSelectedMainSport] = useState<string>("");
  const [selectedSubSport, setSelectedSubSport] = useState<string>("");
  const [selectedLevel, setSelectedLevel] = useState<string>("");

  // STATS: Listen over valgte sportsgrene (bygget som et objekt til Step6)
  const [chosenSports, setChosenSports] = useState<Record<string, string>>(
    initialData.selections || {}
  );

  // STATS: For "Andet" feltet (fritekst)
  const [customSportInput, setCustomSportInput] = useState<string>("");
  const [customSportsList, setCustomSportsList] = useState<string[]>(
    initialData.customSports || []
  );

  // Tekster (Dansk / Ukrainsk)
  const t = {
    titleUa: "Оберіть один або кілька видів занять та рівень",
    titleDk: "Vælg en eller flere aktiviteter og niveau",
    chooseSportUa: "Оберіть вид спорту:",
    chooseSportDk: "Vælg sportsgren:",
    chooseSubUa: "Оберіть напрямок:",
    chooseSubDk: "Vælg specifik gren:",
    chooseLevelUa: "Оберіть свій рівень:",
    chooseLevelDk: "Vælg dit niveau:",
    addUa: "Додати",
    addDk: "Tilføj",
    otherUa: "Інше (напишіть самі):",
    otherDk: "Інше (активність та рівень):",
    yourChoicesUa: "Ваш вибір:",
    yourChoicesDk: "Dine valg:",
    nextUa: "Далі",
    nextDk: "Næste",
    backUa: "Назад",
    backDk: "Tilbage"
  };

  // Den udvidede liste med kampsport og gymnastik underkategorier
  const sportsDataExtended = [
    { ukr: "футбол", dan: "Fodbold" },
    { ukr: "Гандбол", dan: "Håndbold" },
    { ukr: "Баскетбол", dan: "Basketball" },
    { ukr: "Регбі", dan: "Rugby" },
    { ukr: "теніс", dan: "Tennis" },
    { ukr: "Бадмінтон", dan: "Badminton" },
    { 
      ukr: "Бойові мистецтва", 
      dan: "Kampsport",
      subtypes: [
        { ukr: "дзюдо", dan: "Judo" },
        { ukr: "тхеквондо", dan: "Tae kwon do" },
        { ukr: "бокс", dan: "Boksning" }
      ]
    },
    { 
      ukr: "Гімнастика", 
      dan: "Gymnastik",
      subtypes: [
        { ukr: "Стрибки", dan: "Spring" },
        { ukr: "Ритміка", dan: "Rytme" }
      ]
    },
    { ukr: "Танець", dan: "Dans" },
    { ukr: "Творчий", dan: "Kreativitet" },
  ];

  const levelsData = [
    { ukr: "Новачок", dan: "Begynder" },
    { ukr: "Середній", dan: "Mellem" },
    { ukr: "Просунутий", dan: "Øvet" }
  ];

  const currentMainSportObj = sportsDataExtended.find(s => s.dan === selectedMainSport || s.ukr === selectedMainSport);
  const hasSubtypes = currentMainSportObj && "subtypes" in currentMainSportObj;

  // FUNKTION: Tilføj en fast sport + niveau til listen
  const addSportToList = () => {
    if (!selectedMainSport || !selectedLevel) return;
    if (hasSubtypes && !selectedSubSport) return;

    // Sammensæt navnet hvis der er en underkategori (f.eks. "Gymnastik - Spring")
    const finalSportName = hasSubtypes ? `${selectedMainSport} - ${selectedSubSport}` : selectedMainSport;

    setChosenSports(prev => ({
      ...prev,
      [finalSportName]: selectedLevel
    }));

    // Nulstil felterne så man kan vælge en ny
    setSelectedMainSport("");
    setSelectedSubSport("");
    setSelectedLevel("");
  };

  // FUNKTION: Fjern en sport fra listen igen
  const removeSportFromList = (keyToRemove: string) => {
    const updated = { ...chosenSports };
    delete updated[keyToRemove];
    setChosenSports(updated);
  };

  // FUNKTION: Tilføj noget fra "Andet" feltet
  const addCustomSport = () => {
    if (!customSportInput.trim()) return;
    setCustomSportsList(prev => [...prev, customSportInput.trim()]);
    setCustomSportInput("");
  };

  // FUNKTION: Fjern noget fra "Andet" listen
  const removeCustomSport = (indexToRemove: number) => {
    setCustomSportsList(prev => prev.filter((_, i) => i !== indexToRemove));
  };

  // FUNKTION: Gå videre og gem alt i initialData (så Step6 kan læse det)
  const handleNextSubmit = () => {
    onNext({
      ...initialData,
      selections: chosenSports,      // Gemmer de faste valg med niveauer
      customSports: customSportsList  // Gemmer "Andet" listen
    });
  };

  // Knappen er aktiv, hvis der er valgt mindst én ting i alt
  const hasAtLeastOneSelection = Object.keys(chosenSports).length > 0 || customSportsList.length > 0;

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-md w-full space-y-6">
        
        {/* OVERSKRIFT */}
        <div>
          <h1 className="text-navy text-2xl md:text-3xl font-bold mb-2 uppercase font-kbh">{t.titleUa}</h1>
          <p className="text-navy/70 text-lg italic font-kbhtekst">({t.titleDk})</p>
        </div>

        {/* BOKS 1: DE FASTE SPORTSGRENE */}
        <div className="bg-white p-6 border-2 border-gray-100 shadow-sm text-left space-y-4">
          
          <div>
            <label className="block text-navy font-bold text-sm uppercase font-kbh mb-1">
              {language === "ua" ? t.chooseSportUa : t.chooseSportDk}
            </label>
            <select 
              value={selectedMainSport} 
              onChange={(e) => { setSelectedMainSport(e.target.value); setSelectedSubSport(""); }}
              className="w-full p-3 border-2 border-gray-200 bg-white text-navy font-kbhtekst"
            >
              <option value="">-- {language === "ua" ? "Оберіть" : "Vælg"} --</option>
              {sportsDataExtended.map((sport, index) => (
                <option key={index} value={language === "ua" ? sport.ukr : sport.dan}>
                  {language === "ua" ? sport.ukr : sport.dan}
                </option>
              ))}
            </select>
          </div>

          {hasSubtypes && currentMainSportObj && (
            <div className="bg-secondary-light/30 p-4 border border-purple-100">
              <label className="block text-secondary-purple font-bold text-sm uppercase font-kbh mb-1">
                {language === "ua" ? t.chooseSubUa : t.chooseSubDk}
              </label>
              <select 
                value={selectedSubSport} 
                onChange={(e) => setSelectedSubSport(e.target.value)}
                className="w-full p-3 border-2 border-gray-200  bg-white text-navy font-kbhtekst"
              >
                <option value="">-- {language === "ua" ? "Оберіть" : "Vælg"} --</option>
                {currentMainSportObj.subtypes?.map((sub, index) => (
                  <option key={index} value={language === "ua" ? sub.ukr : sub.dan}>
                    {language === "ua" ? sub.ukr : sub.dan}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-navy font-bold text-sm uppercase font-kbh mb-1">
              {language === "ua" ? t.chooseLevelUa : t.chooseLevelDk}
            </label>
            <select 
              value={selectedLevel} 
              onChange={(e) => setSelectedLevel(e.target.value)}
              className="w-full p-3 border-2 border-gray-200  bg-white text-navy font-kbhtekst"
            >
              <option value="">-- {language === "ua" ? "Оберіть" : "Vælg"} --</option>
              {levelsData.map((level, index) => (
                <option key={index} value={language === "ua" ? level.ukr : level.dan}>
                  {language === "ua" ? level.ukr : level.dan}
                </option>
              ))}
            </select>
          </div>

          <Button 
            type="button"
            variant="purple"
            disabled={!selectedMainSport || !selectedLevel || (hasSubtypes && !selectedSubSport)}
            onClick={addSportToList}
            className="w-full h-11 rounded-sm flex items-center justify-center gap-2 cursor-pointer"
          >
            <Plus size={18} /> {language === "ua" ? t.addUa : t.addDk}
          </Button>
        </div>

        {/* BOKS 2: MELD DET SELV IND (ANDET) */}
        <div className="bg-white p-6 border-2 border-gray-100 shadow-sm text-left space-y-3">
          <label className="block text-navy font-bold text-sm uppercase font-kbh mb-1">
            {language === "ua" ? t.otherUa : t.otherDk}
          </label>
          <div className="flex gap-2">
            <input 
              type="text"
              value={customSportInput}
              onChange={(e) => setCustomSportInput(e.target.value)}
              className="flex-1 border-2 border-gray-200  text-navy font-kbhtekst"
              placeholder=" ........"
            />
            <Button type="button" variant="purple" onClick={addCustomSport} className="rounded-sm h-13 px-4 cursor-pointer">
              <Plus size={18} />
            </Button>
          </div>
        </div>

        {/* VISNING: KURVEN / LISTEN OVER VALGTE TING */}
        {(Object.keys(chosenSports).length > 0 || customSportsList.length > 0) && (
          <div className="bg-primary-blue/25 p-4 border-2 border-line  border-gray-200 text-left space-y-3">
            <p className="text-navy font-bold text-xs uppercase font-kbh">{language === "ua" ? t.yourChoicesUa : t.yourChoicesDk}</p>
            <div className="flex flex-wrap gap-2">
              
              {/* Vis de faste tilføjede ting */}
              {Object.entries(chosenSports).map(([sport, level]) => (
                <div key={sport} className="bg-secondary-light border border-gray-200 px-3 py-1 text-sm rounded-full text-navy flex items-center gap-2">
                  <span className="font-bold uppercase text-xs font-kbh">{sport}</span>
                  <span className="text-[11px] opacity-60 italic">({level})</span>
                  <button type="button" onClick={() => removeSportFromList(sport)} className="hover:text-red-500 cursor-pointer">
                    <X size={14} />
                  </button>
                </div>
              ))}

              {/* Vis "Andet" tingene */}
              {customSportsList.map((custom, index) => (
                <div key={index} className="bg-secondary-light border border-dashed border-secondary-purple/40 px-3 py-1 text-sm rounded-full text-navy flex items-center gap-2">
                  <span className="font-bold uppercase text-xs font-kbh">{language === "ua" ? "Інше:" : "Andet:"}</span> {custom}
                  <button type="button" onClick={() => removeCustomSport(index)} className="hover:text-red-500 cursor-pointer">
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NAVIGATION */}
        <div className="flex items-center justify-between w-full mx-auto pt-4">
          <button type="button" onClick={onBack} className="flex items-center gap-2 text-navy group hover:opacity-70 transition-all cursor-pointer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left leading-tight">
              <p className="font-kbh font-black uppercase text-base tracking-widest text-navy">{t.backUa}</p>
              <p className="text-xs font-kbhtekst italic opacity-50 text-navy">({t.backDk})</p>
            </div>
          </button>

          <Button 
            variant="purple" 
            size="kk" 
            disabled={!hasAtLeastOneSelection}
            onClick={handleNextSubmit} 
            className="h-14 w-38 md:w-50 px-10 shadow-xl flex flex-col items-center justify-center border-none cursor-pointer"
          >
            <span className="text-[14px] md:text-[20px] font-bold tracking-wider font-kbh">{t.nextUa}</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic lowercase">({t.nextDk})</span>
          </Button>
        </div>

      </div>
    </div>
  );
}