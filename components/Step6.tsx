"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";

interface Step6Props {
  onBack: () => void;
  onSubmit: (finalData: any) => void;
  formData: any;
}

export default function Step6({ onBack, onSubmit, formData }: Step6Props) {
  const [consent, setConsent] = useState(false);
  const [newsletter, setNewsletter] = useState(false);

  // Formatering af fødselsdag
  const bday = formData.birthday;
  const formattedBirthday = bday ? `${bday.day}. ${bday.month} ${bday.year}` : "";

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* Overskrift sektion */}
        <div className="mb-10">
          <h1 className="text-navy text-2xl md:text-3xl font-bold mb-2 uppercase font-kbh">
            Чи є ця інформація правильною?
          </h1>
          <p className="text-navy/70 text-lg italic font-kbhtekst">
            (Er disse oplysninger korrekte?)
          </p>
        </div>

        {/* OPSAMLINGS BOKS */}
        <div className="bg-white border-2 border-gray-100 shadow-sm text-left mb-10">
          
          {/* Navn */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-end">
            <div>
              <p className="text-navy font-bold text-sm uppercase font-kbh leading-none">Ім'я:</p>
              <p className="text-xs opacity-50 italic mb-2 font-kbhtekst">(Navn)</p>
              <p className="text-navy text-xl">{formData.name || "—"}</p>
            </div>
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Pencil size={20} className="text-navy/40" />
            </button>
          </div>

          {/* Køn */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-end">
            <div>
              <p className="text-navy font-bold text-sm uppercase font-kbh leading-none">Секс:</p>
              <p className="text-xs opacity-50 italic mb-2 font-kbhtekst">(Køn)</p>
              <p className="text-navy text-xl">{formData.gender || "—"}</p>
            </div>
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Pencil size={20} className="text-navy/40" />
            </button>
          </div>

          {/* Fødselsdag */}
          <div className="p-4 border-b border-gray-100 flex justify-between items-end">
            <div>
              <p className="text-navy font-bold text-sm uppercase font-kbh leading-none">день народження:</p>
              <p className="text-xs opacity-50 italic mb-2 font-kbhtekst">(Fødselsdag)</p>
              <p className="text-navy text-xl">{formattedBirthday || "—"}</p>
            </div>
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Pencil size={20} className="text-navy/40" />
            </button>
          </div>

          {/* Adresse & Kontakt (Tilføjet for at være komplet) */}
          <div className="p-4 flex justify-between items-end">
            <div>
              <p className="text-navy font-bold text-sm uppercase font-kbh leading-none">Контакт:</p>
              <p className="text-xs opacity-50 italic mb-2 font-kbhtekst">(Kontakt)</p>
              <p className="text-navy text-sm">{formData.email}</p>
              <p className="text-navy text-sm">{formData.address?.street}, {formData.address?.zipCode} {formData.address?.city}</p>
            </div>
            <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Pencil size={20} className="text-navy/40" />
            </button>
          </div>
        </div>

        {/* TJEKBOKSE SEKTION */}
        <div className="space-y-6 mb-16 text-left max-w-md mx-auto">
          <h3 className="text-navy font-bold uppercase font-kbh text-lg border-b border-gray-200 pb-2">Заява</h3>
          
          {/* Samtykke */}
          <div className="flex items-start gap-4 group cursor-pointer" onClick={() => setConsent(!consent)}>
            <div className={`mt-1 shrink-0 w-6 h-6 border-2 flex items-center justify-center transition-colors ${consent ? 'bg-secondary-purple border-secondary-purple' : 'border-gray-300'}`}>
              {consent && <div className="w-2 h-4 border-r-2 border-b-2 border-white rotate-45 mb-1" />}
            </div>
            <p className="text-navy text-sm font-kbhtekst leading-snug">
              Цим я підтверджую, що мої дані використовуються за моєю згодою.
              <span className="block opacity-50 italic mt-1">(Jeg bekræfter hermed, at mine data bruges med mit samtykke.)</span>
            </p>
          </div>

          {/* Nyhedsbrev */}
          <div className="flex items-start gap-4 group cursor-pointer" onClick={() => setNewsletter(!newsletter)}>
            <div className={`mt-1 shrink-0 w-6 h-6 border-2 flex items-center justify-center transition-colors ${newsletter ? 'bg-secondary-purple border-secondary-purple' : 'border-gray-300'}`}>
              {newsletter && <div className="w-2 h-4 border-r-2 border-b-2 border-white rotate-45 mb-1" />}
            </div>
            <p className="text-navy text-sm font-kbhtekst leading-snug">
              Я хочу підписатися på інформаційний бюлетень.
              <span className="block opacity-50 italic mt-1">(Jeg ønsker at tilmelde mig nyhedsbrevet.)</span>
            </p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto">
          <button type="button" onClick={onBack} className="flex items-center gap-2 text-navy group hover:opacity-70 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left leading-tight">
              <p className="font-kbh font-black uppercase text-base tracking-widest text-navy">Назад</p>
              <p className="text-xs font-kbhtekst italic opacity-50 text-navy">(Tilbage)</p>
            </div>
          </button>

          <Button 
            variant="purple" 
            size="md" 
            disabled={!consent} // Knappen er låst indtil man har givet samtykke
            onClick={() => onSubmit({ ...formData, newsletter })} 
            className={`h-14 px-10 rounded-none shadow-xl flex flex-col items-center justify-center border-none ${!consent ? 'opacity-50 grayscale' : ''}`}
          >
            <span className="text-[18px] md:text-[20px] font-bold tracking-wider font-kbh uppercase">Подати заявку</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">(Ansøg)</span>
          </Button>
        </div>
      </div>
    </div>
  );
}