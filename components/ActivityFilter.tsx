"use client"
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ActivityCard } from "./ActivityCard"; 

const locationsData = [
  {
    id: "amager",
    labelUA: "Амагер Страндвей",
    labelDK: "Amager Strandvej",
    activities: [
      { id: 1, title: "Basket", description: "Beskrivelse her...", image: "/img/basket.png", link: "#" },
      { id: 2, title: "Boksning", description: "Beskrivelse her...", image: "/img/boksning.png", link: "#" },
      { id: 3, title: "Svømnimg", description: "Beskrivelse her...", image: "/img/svomning.png", link: "#" },
    ]
  },
  {
    id: "herberg",
    labelUA: "Гербергвей",
    labelDK: "Herbergvej",
    activities: [
      { id: 1, title: "Basket", description: "Beskrivelse her...", image: "/img/basket.png", link: "#" },
      { id: 2, title: "Boksning", description: "Beskrivelse her...", image: "/img/boksning.png", link: "#" },
    ]
  },
  {
    id: "ottilia",
    labelUA: "Оттіліахус",
    labelDK: "Ottiliahus",
    activities: [
      { id: 1, title: "Basket", description: "Beskrivelse her...", image: "/img/basket.png", link: "#" },
      { id: 2, title: "Boksning", description: "Beskrivelse her...", image: "/img/boksning.png", link: "#" }, 
      { id: 3, title: "Svømnimg", description: "Beskrivelse her...", image: "/img/svomning.png", link: "#" },
    ]
  },
  {
    id: "sjaelland",
    labelUA: "Шеллансгаде",
    labelDK: "Sjællandsgade",
    activities: [
      { id: 1, title: "Basket", description: "Beskrivelse her...", image: "/img/basket.png", link: "#" },
      { id: 2, title: "Boksning", description: "Beskrivelse her...", image: "/img/boksning.png", link: "#" },
    ]
  },
  {
    id: "speditoer",
    labelUA: "Спедітервей",
    labelDK: "Speditørvej",
    activities: [
      { id: 1, title: "Basket", description: "Beskrivelse her...", image: "/img/basket.png", link: "#" },
      { id: 2, title: "Boksning", description: "Beskrivelse her...", image: "/img/boksning.png", link: "#" }, 
      { id: 3, title: "Svømnimg", description: "Beskrivelse her...", image: "/img/svomning.png", link: "#" },
    ]
  },
];

export default function ActivityFilter() {
  return (
    <section className="w-full max-w-7xl mx-auto py-12 px-4">
      <Tabs defaultValue="amager" className="w-full">
        
        {/* Navigation / Filtre */}
<div className="w-full mb-12">
  <TabsList className="flex h-auto bg-transparent shadow-none w-full gap-4 p-0">
    {locationsData.map((loc) => (
      <TabsTrigger 
  key={loc.id} 
  value={loc.id}
  className="
    flex-1 flex flex-col items-start justify-center px-8 py-8 
    rounded-xl transition-all text-left shadow-none
    
    /* Basis-tilstand */
    bg-white! border-2 border-ua-blue! text-navy
    
    /* HOVER (kun når den IKKE er aktiv) */
    hover:bg-ua-blue! 
    
    /* AKTIV tilstand */
    data-[state=active]:bg-ua-blue!
    data-[state=active]:text-white!
    data-[state=active]:border-ua-blue/45!
    
    /* Sørg for at hover på en allerede aktiv knap ikke ændrer noget */
   
    data-[state=active]:hover:bg-ua-blue!
    data-[state=active]:hover:text-white!
  "
>
        <span className="text-lg md:text-xl font-bold leading-tight whitespace-nowrap">
          {loc.labelUA}
        </span>
        <span className="text-xs uppercase tracking-wider mt-1 opacity-80">
          {loc.labelDK}
        </span>
      </TabsTrigger>
    ))}
  </TabsList>
</div>

        {/* Indholdet for hver lokation */}
        {locationsData.map((loc) => (
          <TabsContent key={loc.id} value={loc.id} className="focus-visible:outline-none mt-0">
            {loc.activities.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                {loc.activities.map((activity) => (
                  <ActivityCard 
                    key={activity.id}
                    title={activity.title}
                    description={activity.description}
                    image={activity.image}
                    link={activity.link}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 border-2 border-dashed border-slate-200 rounded-xl">
                <p className="text-navy font-medium">
                  На даний момент заходів не заплановано <br />
                  <span className="text-sm opacity-60">(Ingen planlagte aktiviteter i øjeblikket)</span>
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}