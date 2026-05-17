"use client"

import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from "@/context/LanguageContext"; // Importer din sprog-context

export default function LeisureGuides() {
  const { language } = useLanguage(); // Hent det aktive sprog
  
  return (
    <section className="w-full max-w-7xl mx-auto py-16 relative z-40">
      {/* Indrykning styres af px-8 på mobil og md:px-12 på desktop */}
      <div className="px-8 md:px-12">
        
        {/* Overskrift (Bilingval - UX-dogme for hurtig scanning) */}
        <h2 className="text-navy text-2xl md:text-center md:text-3xl mb-6 font-kbh">
          Fritidsguiderne допоможуть вам <br /> <span className="text-1xl md:text-2xl"> Fritidsguiderne er her for at hjælpe</span>
        </h2>

        {/* Besked: Skifter dynamisk baseret på sproget */}
        <p className="text-navy text-base font-kbhtekst leading-relaxed mb-8">
          {language === "ua" 
            ? "Якщо ви хочете спробувати інший вид спорту, якого немає в списку, або вам потрібна допомога з реєстрацією, звертайтеся до наших гідів (Fritidsguiderne). Ми допоможемо вам знайти саме те, що вам цікаво, та підтримаємо на першому етапі."
            : "Hvis du gerne vil prøve en anden sportsgren, som ikke er på listen, eller hvis du har brug for hjælp til registrering, kan du kontakte vores fritidsguider (Fritidsguiderne). Vi hjælper dig med at finde præcis det, du er interesseret i, og støtter dig i den første fase."
          }
        </p>

        {/* Link til ekstern side (Fritidsguiderne) - Teksten skifter dynamisk */}
        <div className="flex justify-end w-full mt-8 py-6">
          <a 
            href="https://fritidsguiderne.kk.dk/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-black text-lg font-bold hover:text-secondary-purple transition-all group cursor-pointer"
          >
            {language === "ua" ? "Гіди з дозвілля" : "Læs mere om Fritidsguiderne"}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}