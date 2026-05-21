"use client";

import React, { useEffect } from "react";
// 1. FORKLARING: Vi sletter den almindelige "import Hero from ..." herfra.
import ActivityManager from "@/components/ActivityManager";
import Newsletter from "@/components/Newsletter";
import VideoSektion from "@/components/VideoSektion";
import SuccessStories from "@/components/SuccessStories";
import LeisureGuides from "@/components/LeisureGuides";
import Registration from "@/components/Registration";
import dynamic from "next/dynamic";

/**
 * =========================================================================
 * GRUPPENOTER / FORKLARING TIL DE ANDRE:
 * Why dynamic import with { ssr: false }?
 * * Vores <Hero /> komponent indeholder elementer eller logik (f.eks. animationer, 
 * vindues-størrelser (window.innerWidth) eller sprog-context), som KUN kan køre 
 * direkte i browseren (Client-Side).
 * * Hvis Next.js forsøger at præ-rendre (Server-Side Render) Hero-komponenten på 
 * serveren, inden siden lander i browseren, vil den crashe eller lave "hydration-fejl", 
 * fordi serveren ikke kender til browserens vindue eller client-state.
 * * Ved at bruge 'dynamic' med 'ssr: false' fortæller vi Next.js: 
 * "Vent med at hente og bygge Hero-komponenten, indtil siden er landet i browseren."
 * =========================================================================
 */
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });

export default function Home() {
  useEffect(() => {
    // Dette nulstiller scroll og fjerner eventuelle "pointer-events-none" 
    // der kan være blevet hængende fra en animation.
    document.body.style.pointerEvents = "auto";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-col w-full">
        
        {/* Hero sektionen ligger øverst og loades nu sikkert via Client-Side kun */}
        <Hero />

        {/* ActivityManager Sektion:
          - max-w-7xl: Samme bredde som i Hero (1280px).
          - mx-auto: Centrerer den.
          - px-4: Sikrer luft til kanten på mobil (matcher Hero's left-4).
          - mt-66 md:mt-45: Justeret afstand så den ikke rammer den hvide boks.
        */}
        <section className="w-full max-w-7xl mx-auto px-4 mt-66 md:mt-45"> 
          <ActivityManager />
        </section>

        {/* Sektion med newsletter */}
        <section className="w-full mb-2 md:mb-8"> 
          <Newsletter />
        </section>

        {/* Sektion med video */}
        <section className="w-full mb-2 md:mb-8">
          <VideoSektion/> 
        </section>

        {/* Sektion med succes historierne */}
        <section className="w-full mb-4 md:mb-8">
          <SuccessStories/> 
        </section>

        {/* Sektion med fritidsguiderne */}
        <section className="w-full mb-4 md:mb-8">
          <LeisureGuides/>
        </section>

        {/* Sektion med registrering/tilmelding */}
        <section className="w-full mb-20 md:mb-20">
          <Registration/>
        </section>
        
      </main>
    </div>
  );
}