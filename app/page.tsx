import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ActivityFilter from "@/components/ActivityFilter";

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
       {/* Vi bruger mt-32 eller mt-40 for at skubbe den rigtig langt ned */}
<section className="max-w-7xl mx-auto px-4 mt-84 mb-8 text-left">
  
  {/* Ukrainsk version */}
  <div className="mb-10">
    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 font-kbh leading-tight">
      Активності у місцях тимчасового проживання
    </h2>
    <p className="text-xl text-navy/90 font-kbhtekst max-w-3xl leading-relaxed">
      Спробуй різні активності безпосередньо у своєму місці тимчасового проживання — 
      представники місцевих організацій приїжджають до вас, щоб ти міг/могла 
      спробувати та зрозуміти, чи це підходить саме тобі.
    </p>
  </div>

  {/* Dansk version */}
  <div className="border-l-4 border-ua-yellow pl-8 py-2">
    <h3 className="text-2xl font-bold text-navy mb-3 font-kbh">
      Aktiviteter på indkvarteringsstedet
    </h3>
    <p className="text-lg text-navy/70 font-kbhtekst max-w-2xl leading-relaxed">
      Prøv forskellige aktiviteter direkte på dit indkvarteringssted – 
      lokale foreninger kommer ud til jer, så du kan prøve det af og 
      finde ud af, om det er noget for dig.
    </p>
  </div>
</section>


        <ActivityFilter/>
        
      </main>
    </div>
  );
}