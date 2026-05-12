import Image from "next/image";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import ActivityManager from "@/components/ActivityManager";
import Newsletter from "@/components/Newsletter";
import VideoSektion from "@/components/VideoSektion";
import SuccessStories from "@/components/SuccessStories";

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
        <section className="w-full max-w-7xl mx-auto px-4 mt-74 md:mt-74"> 
          <ActivityManager />
        </section>

        {/*Sektion med newsletter */}
            <section className="w-full mb-2 md:mb-8"> 
              <Newsletter />
            </section>
                    {/*Sektion med video */}
            <section className="w-full mb-2 md:mb-8">
              <VideoSektion/> 
            </section>
                      {/*Sektion med succe historiene */}
            <section className="w-full mb-4 md:mb-8">
              <SuccessStories/> 
            </section>

      </main>
    </div>
  );
}