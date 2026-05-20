"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext"; // Importer din sprog-context

interface Step7Props {
  onReset: () => void; // Funktion til at nulstille formularen eller sende brugeren tilbage til start
}

export default function Step7({ onReset }: Step7Props) {
  const { language } = useLanguage(); // Hent det aktive sprog

  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* Overskrift sektion (Bilingval) */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-navy text-3xl md:text-5xl font-bold mb-4 leading-tight uppercase font-kbh">
            Дякуємо за вашу заявку!
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            (Tak for din tilmelding!)
          </p>
        </div>

        {/* Informations tekst: Skifter flydende alt efter sprogvalg */}
        <div className="flex flex-col gap-6 w-full max-w-lg mx-auto text-center mb-16">
          <p className="text-navy text-base md:text-lg font-kbhtekst leading-relaxed">
            {language === "ua"
              ? "En fritidsguide (Fritidsguide) зв'яжеться з вами не пізніше ніж протягом 3 тижнів. Якщо вам потрібно зв'язатися з Fritidsguide, ви можете зателефонувати або написати:"
              : "En fritidsguide vil kontakte dig senest inden for 3 uger. Hvis du har brug for at kontakte Fritidsguiderne inden da, kan du ringe eller skrive til:"
            }
          </p>

          {/* Kontaktpersoner (Bilingvale navne, så danske hjælpere kan læse med) */}
          <div className="bg-primary-blue/10 p-8 space-y-6 text-navy font-kbhtekst">
            
            {/* Kontakt 1 */}
            <div className="space-y-1">
              <p className="font-bold text-lg leading-tight">Віктор Торвальд Хаурхольм</p>
              <p className="text-sm opacity-70 italic font-kbhtekst mb-1">(Victor Thorvald Haurholm)</p>
              <p className="text-base font-sans tracking-wide">29369943 / <a href="mailto:au4i@kk.dk" className="underline hover:text-secondary-purple">au4i@kk.dk</a></p>
            </div>

            {/* Kontakt 2 */}
            <div className="space-y-1">
              <p className="font-bold text-lg leading-tight">Лукас Еміль Лендат</p>
              <p className="text-sm opacity-70 italic font-kbhtekst mb-1">(Lucas Emil Lendath)</p>
              <p className="text-base font-sans tracking-wide">24427846 / <a href="mailto:bj7s@kk.dk" className="underline hover:text-secondary-purple">bj7s@kk.dk</a></p>
            </div>

          </div>
        </div>

        {/* Afslutningsknap (Bilingval) */}
        <div className="flex justify-center w-full max-w-md mx-auto">
          <Button 
            variant="purple" 
            size="kk" 
            onClick={onReset}
            className="h-16 w-50 px-16 shadow-xl flex flex-col items-center justify-center border-none cursor-pointer"
          >
            <span className="text-[18px] md:text-[20px] tracking-wider font-kbh">Завершити</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">(Afslut)</span>
          </Button>
        </div>
        
      </div>
    </div>
  );
}