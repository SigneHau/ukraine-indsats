"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Step4Props {
  onNext: (data: any) => void;
  onBack: () => void;
  initialData?: any;
}

export default function Step4({ onNext, onBack, initialData }: Step4Props) {
  // Lokale states til adresse og kontaktinfo
 const [address, setAddress] = useState(initialData?.address || { street: "", zipCode: "", city: "" });
  const [phone, setPhone] = useState(initialData?.phone || "+45 ");
  const [email, setEmail] = useState(initialData?.email || "");

  const handleNext = () => {
    onNext({
      address,
      phone,
      email,
    });
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center">
      
      <div className="max-w-2xl w-full px-4">
        
        {/* Overskrift/Sektions-titel mangler på dit screenshot, men vi holder stilen */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-navy text-3xl md:text-4xl font-normal mb-4 leading-[1.1] uppercase tracking-tight font-kbh">
            Контактна інформація
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            (Kontaktoplysninger)
          </p>
        </div>

        {/* Formular sektion */}
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto text-left mb-16">
          
          {/* ADRESSE SEKTION */}
          <div className="space-y-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Адреса: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Adresse)</span>
            </label>
            
            {/* Vejnavn & Nummer */}
            <div className="space-y-1">
              <Input 
                placeholder="назва вулиці та номер будинку"
                value={address.street}
                onChange={(e) => setAddress({...address, street: e.target.value})}
                className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white placeholder:opacity-30 text-base"
              />
              <p className="text-[10px] italic opacity-50 font-kbhtekst">(Vejnavn & Husnummer)</p>
            </div>

            {/* Postnummer & By */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input 
                  placeholder="Поштовий індекс"
                  value={address.zipCode}
                  onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                  className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white placeholder:opacity-30 text-base"
                />
                <p className="text-[10px] italic opacity-50 font-kbhtekst">(Postnummer)</p>
              </div>
              <div className="space-y-1">
                <Input 
                  placeholder="Місто"
                  value={address.city}
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                  className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white placeholder:opacity-30 text-base"
                />
                <p className="text-[10px] italic opacity-50 font-kbhtekst">(By)</p>
              </div>
            </div>
          </div>

          {/* TELEFONNUMMER */}
          <div className="space-y-2 mt-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              Телефонний номер <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Telefonnummer)</span>
            </label>
            <Input 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-lg"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2 mt-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              електронна адреса <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(E-mailadresse)</span>
            </label>
            <Input 
              type="email"
              placeholder="hello@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white placeholder:opacity-30 text-lg"
            />
          </div>

        </div>

        {/* Navigation Container - Samme Flexbox-løsning som Step 3 */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto pt-10 border-t border-gray-100 px-2">
          
          {/* Tilbage-knap */}
          <button 
            type="button"
            onClick={onBack}
            className="flex items-center gap-2 md:gap-3 text-navy group hover:opacity-70 transition-all shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-navy">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left">
              <p className="leading-tight font-kbh font-black uppercase text-[14px] md:text-base tracking-widest text-navy">Назад</p>
              <p className="text-[10px] md:text-xs font-kbhtekst italic opacity-50 text-navy">(Tilbage)</p>
            </div>
          </button>

          {/* Næste-knap */}
          <Button 
            variant="purple" 
            size="md" 
            onClick={handleNext}
            className="h-14 px-10 rounded-none shadow-xl flex flex-col items-center justify-center leading-none border-none shrink-0"
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