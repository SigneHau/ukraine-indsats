"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface ActivityProps {
  title: string;
  image: string;
}

export function ActivityCard({ title, image }: ActivityProps) {
  const router = useRouter();

  return (
    <Card 
      data-category="B2B"
      /* Nu med en markant mørkere og mere massiv skygge, der slår 100% igennem.
         Vi har også tilføjet en lidt tydeligere grå bundstreg (border-gray-200) for at indramme bunden perfekt. */
      className="overflow-hidden bg-white rounded-none border-0 border-none shadow-[0_15px_35px_rgba(0,0,0,0.35)] border-b-2 border-gray-200 !p-0 !gap-0"
    >
      {/* BILLED-CONTAINER */}
      <div className="relative h-64 w-full overflow-hidden shrink-0 m-0 p-0 block">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-w-768px) 100vw, 33vw"
          priority
        />
      </div>

      {/* INDHOLD */}
      <CardContent className="p-6 bg-white text-center flex flex-col items-center justify-center grow border-0 !pt-4">
        <h3 className="text-lg font-kbh text-navy font-bold leading-tight line-clamp-2 mb-4">
          {title}
        </h3>

        {/* Knap indsat centreret */}
        <Button 
          variant="purple" 
          size="md" 
          onClick={() => router.push('/registration')}
          className="mx-auto mt-auto"
        >
          Контакт
        </Button>
      </CardContent>
    </Card>
  );
}