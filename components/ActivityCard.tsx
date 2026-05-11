// components/ActivityCard.tsx
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface ActivityProps {
  title: string;
  image: string;
}

export function ActivityCard({ title, image }: ActivityProps) {
  return (
    /* 1. Tilføj 'rounded-none' her for at fjerne kanten på selve kortet */
    <Card className="overflow-hidden bg-white rounded-none border-0 border-none shadow-sm">
      {/* Billede i bredformat (h-48) */}
      <div className="relative h-64 w-full overflow-hidden shrink-0">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover transition-transform duration-500 hover:scale-105"
          sizes="(max-w-768px) 100vw, 33vw"
        />
      </div>

     <CardContent className="p-4 bg-white text-center flex items-center justify-center grow">
        <h3 className="text-lg font-kbh text-navy font-bold leading-tight line-clamp-2">
          {title}
        </h3>
      </CardContent>
    </Card>
  );
}