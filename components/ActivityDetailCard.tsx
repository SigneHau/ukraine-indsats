"use client"

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
  const [ukTitle, dkTitle] = title.split(" | ");

  return (
    <Card className="rounded-none border-0 border-none shadow-md bg-white w-full flex flex-col md:flex-row overflow-hidden h-full min-h-45 md:min-h-60 p-0 gap-0">
      
      {/* BILLEDE */}
      <div className="relative w-full md:w-[38%] h-52 md:h-auto shrink-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-w-768px) 100vw, 25vw"
          priority
        />
      </div>

      {/* INDHOLD */}
      <CardContent className="bg-white p-5 md:p-6 flex flex-col justify-between grow text-left w-full border-0">
        <div className="w-full">
          {/* Titler: Præcis som du havde lavet dem, hvor dansk beholder sin egen bold/normal-case stil */}
          <h3 className="font-kbh text-navy font-black uppercase tracking-tight leading-none text-base md:text-lg mb-2">
            {ukTitle}
            {dkTitle && (
              <span className="font-kbhtekst font-bold normal-case tracking-normal ml-1.5">
                | {dkTitle}
              </span>
            )}
          </h3>

          {/* Ukrainsk beskrivelse */}
          <p className="font-kbhtekst text-navy/80 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>
        </div>

        {/* Knap */}
        <Button 
          variant="purple" 
          size="md" 
          onClick={() => router.push('/registration')}
          className="w-full md:w-auto md:px-6 py-4 rounded-none font-kbh font-bold uppercase tracking-wide text-[11px] mt-auto"
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