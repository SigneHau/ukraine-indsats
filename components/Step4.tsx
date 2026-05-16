"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Step4Props {
  onNext: (data: any) => void;
  onBack: () => void;
  initialData?: any;
  userType: string; // "self" | "guardian" | "pro"
}

export default function Step4({ onNext, onBack, initialData, userType }: Step4Props) {
  const [address, setAddress] = useState(initialData?.address || { street: "", zipCode: "", city: "" });
  const [phone, setPhone] = useState(initialData?.phone || "+45 ");
  const [email, setEmail] = useState(initialData?.email || "");
  
  // Specifikke felter til Fagfolk (Spor C)
  const [institution, setInstitution] = useState(initialData?.institution || "");
  const [proName, setProName] = useState(initialData?.proName || "");

  const handleNext = () => {
    onNext({
      address,
      phone,
      email,
      ...(userType === "pro" && { institution, proName }) // Gemmer kun pro-felter hvis relevant
    });
  };

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* DYNAMISK OVERSKRIFT BASERET PÅ VALG */}
        <div className="mb-10 md:mb-14">
          {userType === "self" && (
            <>
              <h1 className="text-navy text-3xl font-normal mb-4 uppercase font-kbh">Контактна інформація</h1>
              <p className="text-navy/70 text-xl italic font-kbhtekst">(Din kontaktinformation)</p>
            </>
          )}
          {userType === "guardian" && (
            <>
              <h1 className="text-navy text-3xl font-normal mb-4 uppercase font-kbh">Інформація про батьків / опікунів</h1>
              <p className="text-navy/70 text-xl italic font-kbhtekst">(Forældre / Værge information)</p>
            </>
          )}
          {userType === "pro" && (
            <>
              <h1 className="text-navy text-3xl font-normal mb-4 uppercase font-kbh">Інформація про професіонала</h1>
              <p className="text-navy/70 text-xl italic font-kbhtekst">(Fagperson information)</p>
            </>
          )}
        </div>

        {/* FORMULAR FIELDS */}
        <div className="flex flex-col gap-8 w-full max-w-md mx-auto text-left mb-16">
          
          {/* SPOR C: Ekstra felter hvis man er Fagperson */}
          {userType === "pro" && (
            <>
              <div className="space-y-2">
                <label className="block text-navy font-bold text-lg uppercase font-kbh">
                  Ваше ім'я та посада: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Dit navn & titel)</span>
                </label>
                <Input 
                  type="text"
                  value={proName}
                  onChange={(e) => setProName(e.target.value)}
                  className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-navy font-bold text-lg uppercase font-kbh">
                  Місце роботи / установа: <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">(Arbejdsplads / Institution)</span>
                </label>
                <Input 
                  type="text"
                  placeholder="f.eks. Skole eller Klub"
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-base"
                />
              </div>
            </>
          )}

          {/* ADRESSE (Bruges i alle 3 spor, men labels ændrer sig mentalt for hvem der bor der) */}
          <div className="space-y-4">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              {userType === "guardian" ? "Адреса батьків:" : "Адреса:"} 
              <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">
                ({userType === "guardian" ? "Forældres adresse" : "Adresse"})
              </span>
            </label>
            
            <div className="space-y-1">
              <Input 
                placeholder="назва вулиці та nummer"
                value={address.street}
                onChange={(e) => setAddress({...address, street: e.target.value})}
                className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-base"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <Input 
                  placeholder="Поштовий індекс"
                  value={address.zipCode}
                  onChange={(e) => setAddress({...address, zipCode: e.target.value})}
                  className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-base"
                />
              </div>
              <div className="space-y-1">
                <Input 
                  placeholder="Місто"
                  value={address.city}
                  onChange={(e) => setAddress({...address, city: e.target.value})}
                  className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-base"
                />
              </div>
            </div>
          </div>

          {/* TELEFONNUMMER */}
          <div className="space-y-2">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              {userType === "guardian" ? "Телефон батьків:" : userType === "pro" ? "Робочий телефон:" : "Телефонний номер:"}
              <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">
                ({userType === "guardian" ? "Forældres tlf." : userType === "pro" ? "Arbejds tlf." : "Telefonnummer"})
              </span>
            </label>
            <Input 
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-lg"
            />
          </div>

          {/* EMAIL */}
          <div className="space-y-2">
            <label className="block text-navy font-bold text-lg uppercase font-kbh">
              {userType === "guardian" ? "Електронна пошта батьків:" : userType === "pro" ? "Робоча електронна пошта:" : "електронна адреса:"}
              <span className="text-navy/60 font-normal normal-case italic font-kbhtekst text-sm ml-1">
                ({userType === "guardian" ? "Forældres e-mail" : userType === "pro" ? "Arbejds e-mail" : "E-mailadresse"})
              </span>
            </label>
            <Input 
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 md:h-14 border-2 border-gray-200 rounded-none bg-white text-lg"
            />
          </div>

        </div>

        {/* NAVIGATION (Uændret, stabil flexbox) */}
        <div className="flex items-center justify-between w-full max-w-md mx-auto pt-10  px-2">
          <button type="button" onClick={onBack} className="flex items-center gap-2 text-navy group hover:opacity-70 transition-all">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 md:w-6 md:h-6 text-navy">
              <path d="M9 14l-4-4 4-4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" />
            </svg>
            <div className="text-left">
              <p className="leading-tight font-kbh font-black uppercase text-[14px] md:text-base tracking-widest text-navy">Назад</p>
              <p className="text-[10px] md:text-xs font-kbhtekst italic opacity-50 text-navy">(Tilbage)</p>
            </div>
          </button>

          <Button variant="purple" size="kk" onClick={handleNext} className="h-14 px-10 shadow-xl flex flex-col items-center justify-center border-none">
            <span className="text-[18px] md:text-[20px] font-bold tracking-wider font-kbh">Далі</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic lowercase">(Næste)</span>
          </Button>
        </div>
        
      </div>
    </div>
  );
}