"use client";

import React from "react";
import { Button } from "@/components/ui/button";

interface Step7Props {
  onReset: () => void; // Funktion til at nulstille formularen eller sende brugeren tilbage til start
}

export default function Step7({ onReset }: Step7Props) {
  return (
    <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500 w-full pb-20 text-center px-4">
      <div className="max-w-2xl w-full">
        
        {/* Overskrift sektion */}
        <div className="mb-10 md:mb-14">
          <h1 className="text-navy text-3xl md:text-5xl font-bold mb-4 leading-tight uppercase font-kbh">
            Дякуємо за вашу заявку!
          </h1>
          <p className="text-navy/70 text-xl md:text-2xl italic font-kbhtekst">
            (Tak for din tilmelding!)
          </p>
        </div>

        {/* Informations tekst */}
        <div className="flex flex-col gap-6 w-full max-w-lg mx-auto text-center mb-16">
          <p className="text-navy text-base md:text-lg font-kbhtekst leading-relaxed">
            Fritidsguide (Fritidsguide) зв'яжеться з вами не пізніше ніж протягом 3 тижнів. 
            Якщо вам потрібно зв'язатися з Fritidsguide, ви можете зателефонувати або написати:
          </p>

          {/* Kontaktpersoner */}
          <div className="bg-primary-blue/10 p-8 space-y-6 text-navy font-kbhtekst">
            <div className="space-y-1">
              <p className="font-bold text-lg">Віктор Торвальд Хаурхольм:</p>
              <p className="text-base">29369943 / <a href="mailto:au4i@kk.dk" className="underline hover:text-secondary-purple">au4i@kk.dk</a></p>
            </div>

            <div className="space-y-1">
              <p className="font-bold text-lg">Лукас Еміль Лендат:</p>
              <p className="text-base">24427846 / <a href="mailto:bj7s@kk.dk" className="underline hover:text-secondary-purple">bj7s@kk.dk</a></p>
            </div>
          </div>
        </div>

        {/* Afslutningsknap */}
        <div className="flex justify-center w-full max-w-md mx-auto">
          <Button 
            variant="purple" 
            size="kk" 
            onClick={onReset}
            className="h-16 w-50 px-16 shadow-xl flex flex-col items-center justify-center border-none"
          >
            <span className="text-[18px] md:text-[20px] tracking-wider font-kbh">Завершити</span>
            <span className="text-[10px] font-normal opacity-80 font-kbhtekst italic mt-1 lowercase">(Afslut)</span>
          </Button>
        </div>
        
      </div>
    </div>
  );
}