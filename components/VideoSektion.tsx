"use client"

import { useLanguage } from "@/context/LanguageContext" // Importer din sprog-context

export default function VideoSektion() {
  const { language } = useLanguage() // Hent det aktive sprog

  return (
    <section className="w-full py-16 bg-white">
      {/* Containeren holder indholdet på plads og flugter med dine andre sektioner */}
      <div className="max-w-7xl mx-auto px-8 md:px-10 flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Tekst-sektion: Altid venstrestillet (text-left og items-start) */}
        <div className="w-full lg:w-2/5 text-left flex flex-col items-start">
          {/* OVERSKRIFT: ALTID BILINGVAL (UX-strategi: Hurtig scanning) */}
          <h2 className="text-navy text-2xl mb-2 md:text-3xl">
            Співпраця з організаціями Копенгагена <br /> <span className="text-1xl md:text-2xl"> Samarbejde med foreninger i København</span>
          </h2>
          
          {/* BRØDTEKST: Skifter alt efter valgt sprog for at beskytte mod kognitivt overload */}
          <p className="text-navy text-base opacity-80 leading-relaxed">
            {language === "ua" 
              ? "Ми співпрацюємо з місцевими організаціями та клубами по всьому місту, щоб ви могли легко долучитися до активного життя."
              : "Vi samarbejder med lokale foreninger og klubber over hele byen, så du nemt kan blive en del af det aktive foreningsliv."
            }
          </p>
        </div>

        {/* Video-sektion: Fylder 60% på desktop */}
        <div className="w-full lg:w-3/5 aspect-video bg-gray-100 shadow-2xl overflow-hidden rounded-sm">
          <iframe
            className="w-full h-full"
            src="/video/ukr-vid.mp4" 
            title={language === "ua" ? "Відео про співпрацю" : "Video om samarbejde"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        
      </div>
    </section>
  );
}