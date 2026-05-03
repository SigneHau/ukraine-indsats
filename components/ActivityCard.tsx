// components/ActivityCard.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react";


interface ActivityProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

export function ActivityCard({ title, description, image, link }: ActivityProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full border-2 border-slate-100 hover:border-ua-blue transition-colors">
      <div className="relative h-48 w-full">
        <img src={image} alt={title} className="object-cover w-full h-full" />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-kbh text-navy font-bold">{title}</CardTitle>
      </CardHeader>
    <CardContent className="flex flex-col flex-grow">
  {/* P-tag med tekst */}
  <p className="text-sm font-kbhtekst text-navy mb-6">
    {description}
  </p>

  {/* Læs mere med GUL PIL */}
  <div className="flex items-center text-sm font-semibold font-kbhtekst text-navy mt-auto">
    <a href="#" className="hover:underline  text-ua-yellow flex items-center">
      Tilmeld
      <ArrowRight className="ml-2 h-4 w-4 text-ua-yellow" /> {/* HER er den gule pil */}
    </a>
  </div>
    </CardContent>
    </Card>
  )
}