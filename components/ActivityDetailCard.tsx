"use client"

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface ActivityDetailProps {
  title: string;
  image: string;
  description: string;
}

export function ActivityDetailCard({ title, image, description }: ActivityDetailProps) {
  const router = useRouter();
  
  // Bevarer din fuldstændig originale opsplitning af titlen
  const [ukTitle, dkTitle] = title.split(" | ");

  // SPLIT AF BILLEDE-URL OG TAILWIND-KLASSE
  const [imgSrc, positionClass] = image.split(" ");

  // Omdanner Tailwind-klassen til rå tekst, som Next.js Image kan forstå via style
  const cleanPosition = positionClass ? positionClass.replace("object-", "") : "center";

  return (
    <Card className="rounded-none border-0 border-none shadow-md bg-white w-full flex flex-col md:flex-row overflow-hidden h-full min-h-45 md:min-h-60 p-0 gap-0">
      
      {/* BILLEDE */}
      <div className="relative w-full md:w-[38%] h-52 md:h-auto shrink-0">
        <Image 
          src={imgSrc} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
          // RETTET: Er flyttet ind i style-proppen for at overholde Next.js 13+ standarden
          style={{ objectPosition: cleanPosition }} 
          sizes="(max-w-768px) 100vw, 25vw"
          priority
        />
      </div>

      {/* INDHOLD */}
      <CardContent className="bg-white p-5 md:p-6 flex flex-col justify-between grow text-left w-full border-0">
        <div className="w-full">
          {/* Layout: Vis altid ukrainsk først og dansk bagefter */}
          <h3 className="font-kbh text-navy font-black uppercase tracking-tight leading-none text-base md:text-lg mb-2">
            {ukTitle}
            {dkTitle && (
              <span className="font-kbhtekst text-navy font-bold normal-case tracking-normal ml-1.5">
                | {dkTitle}
              </span>
            )}
          </h3>

          {/* Beskrivelse – uden line-clamp så teksten kan folde sig ud på desktop */}
          <p className="font-kbhtekst text-navy/80 text-xs md:text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Knap */}
        <Button 
          variant="purple" 
          size="md" 
          onClick={() => router.push('/registration')}
          className="w-full md:w-auto md:px-6 py-4 rounded-none font-kbh font-bold uppercase tracking-wide text-[11px] mt-auto cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center leading-none">
            <span>Зареєструватися</span>
            <span className="text-[8px] font-kbhtekst font-normal lowercase opacity-80 mt-0.5">Tilmeld</span>
          </div>
        </Button>
      </CardContent>
    </Card>
  );
}