import React from 'react';
import { ArrowRight } from 'lucide-react';


export default function LeisureGuides() {
  
  return (
    <section className="w-full max-w-7xl mx-auto py-16 relative z-40">
      {/* Indrykning styres af px-6 på mobil og md:px-12 på desktop */}
      <div className=" px-8 md:px-12">
        
        {/* Overskrift */}
        <h2 className="text-navy text-2xl md:text-center md:text-3xl mb-6 font-kbh">
          Fritidsguiderne допоможуть вам <br /> <span className="text-1xl md:text-2xl"> Fritidsguiderne er her for at hjælpe</span>
        </h2>

        {/* Besked */}
        <p className="text-navy text-base font-kbhtekst leading-relaxed mb-8">
          Якщо ви хочете спробувати інший вид спорту, якого немає в списку, 
          або вам потрібна допомога з реєстрацією, звертайтеся до наших гідів (Fritidsguiderne). 
          Ми допоможемо вам знайти саме те, що вам цікаво, та підтримаємо на першому етапі.
        </p>

        {/* Link til ekstern side (Fritidsguiderne) */}
          <div className="flex justify-end w-full mt-8 py-6">
            <a 
              href="https://fritidsguiderne.kk.dk/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-black text-lg font-bold hover:text-secondary-purple transition-all group cursor-pointer"
            >
              Гіди з дозвілля
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
      </div>
    </section>
  );
}