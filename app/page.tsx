import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ActivityManager from "@/components/ActivityManager";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-col w-full">
        
        {/* Hero sektionen ligger øverst */}
        <Hero />

      {/* 
            ActivityManager Sektion:
            - max-w-7xl: Samme bredde som i Hero (1280px).
            - mx-auto: Centrerer den.
            - px-4: Sikrer luft til kanten på mobil (matcher Hero's left-4).
            - mt-96 md:mt-80: Justeret afstand så den ikke rammer den hvide boks.
        */}
        <section className="w-full max-w-7xl mx-auto px-4 mt-84 md:mt-74 mb-24"> 
          <ActivityManager />
        </section>


        
        
      </main>
    </div>
  );
}