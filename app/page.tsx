import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <main className="flex flex-col w-full">
        
        {/* Hero sektionen ligger øverst */}
        <Hero />

        {/* 
            NY SEKTION/BOKS:
            - py-24: Giver vertikal plads (padding top/bund), så der er luft til Hero og Footer.
            - max-w-7xl: Sætter bredden til 1280px.
            - mx-auto: Centrerer boksen.
            - px-6: Sikrer at teksten ikke rører kanten på mobil.
        */}
        <section className="py-24 max-w-7xl mx-auto w-full px-6">
          
          <div className="bg-white p-10 border border-gray-200 shadow-sm rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Indhold starter her</h2>
            <p className="mb-6">
              Denne boks flugter nu med dit logo og dine menupunkter, 
              fordi den bruger den samme 'max-w-7xl' container.
            </p>
            
          </div>

        </section>
        
      </main>
    </div>
  );
}