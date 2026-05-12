"use client"
import React, { useEffect, useState } from "react";
import { ActivityCard } from "./ActivityCard";
import {
  Carousel,
  
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const categories = [
  { id: 'ballgames', nameUk: "Ігри з м'ячем", nameDk: 'Boldspil' },
  { id: 'movement', nameUk: 'Тіло і рух', nameDk: 'Krop og bevægelse' },
  { id: 'combat', nameUk: 'Бойові види', nameDk: 'Kampsport' },
  { id: 'water', nameUk: 'Водні види', nameDk: 'Vandsport' },
  { id: 'creative', nameUk: 'Креативність', nameDk: 'Kreativt' },
  { id: 'social', nameUk: 'Соціальне', nameDk: 'Socialt' }
];

/** * HER LIGGER ALLE AKTIVITETERNE
 * Titlen er nu opdateret med både ukrainsk og dansk navn (f.eks. 'Футбол | Fodbold').
 */
const activitiesData = [
  // BOLDSPIL
  { id: 1, category: 'ballgames', title: 'Футбол | Fodbold', image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80', link: '#' },
  { id: 2, category: 'ballgames', title: 'Баскетбол | Basketball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', link: '#' },
  { id: 3, category: 'ballgames', title: 'Гандбол | Håndbold', image: 'https://images.unsplash.com/photo-1628779238951-be2c9f2a59f4?w=800&q=80', link: '#' },
  { id: 4, category: 'ballgames', title: 'Волейбол | Volleyball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', link: '#' },
  
  // KROP OG BEVÆGELSE
  { id: 5, category: 'movement', title: 'Танці | Dans', image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80', link: '#' },
  { id: 6, category: 'movement', title: 'Гімнастика | Gymnastik', image: 'https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=800&q=80', link: '#' },
  { id: 7, category: 'movement', title: 'Фітнес | Fitness', image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80', link: '#' },
  { id: 8, category: 'movement', title: 'Йога | Yoga', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', link: '#' },
  
  // KAMPSPORT
  { id: 9, category: 'combat', title: 'Бокс | Boksning', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80', link: '#' },
  { id: 10, category: 'combat', title: 'Карате | Karate', image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?w=800&q=80', link: '#' },
  { id: 11, category: 'combat', title: 'Дзюдо | Judo', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80', link: '#' },
  
  // VANDSPORT
  { id: 12, category: 'water', title: 'Плавання | Svømning', image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80', link: '#' },
  { id: 13, category: 'water', title: 'Водне поло | Vandpolo', image: 'https://images.unsplash.com/photo-1533443141273-d421f77ef731?w=800&q=80', link: '#' },
  
  // KREATIVT
  { id: 14, category: 'creative', title: 'Живопис | Maleri', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80', link: '#' },
  { id: 15, category: 'creative', title: 'Кераміка | Keramik', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80', link: '#' },
  { id: 16, category: 'creative', title: 'Музика | Musik', image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80', link: '#' },
  
  // SOCIALT
  { id: 17, category: 'social', title: 'Кулінарія | Madlavning', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', link: '#' },
  { id: 18, category: 'social', title: 'Настільні ігри | Brætspil', image: 'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=800&q=80', link: '#' },
  { id: 19, category: 'social', title: 'Мовне кафе | Sprogcafe', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?w=800&q=80', link: '#' },
];

export default function ActivityManager() {
  const [activeCategory, setActiveCategory] = useState('ballgames');
  const [carouselControl, setCarouselControl] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);

  const filteredActivities = activitiesData.filter(act => act.category === activeCategory);

  // Lytter på hvornår karrusellen skifter kort via vores controller
  useEffect(() => {
    if (!carouselControl) return;

    // Vi lytter kun på "select" hændelsen. 
    // Embla (karrusellen) starter automatisk på 0, så vi behøver ikke sætte den synkront.
    carouselControl.on("select", () => {
      setCurrentSlide(carouselControl.selectedScrollSnap());
    });

    // Husk at rydde op efter dig, så du ikke har flere lyttere kørende
    return () => {
      carouselControl.off("select", () => {
        setCurrentSlide(carouselControl.selectedScrollSnap());
      });
    };
  }, [carouselControl]);
  return (
    <div className="w-full max-w-7xl mx-auto px-3 py-12">
      
      {/* 1. Overskrift */}
      <div className="text-left mb-10">
        <h2 className="text-navy text-2xl md:text-4xl mb-1 font-kbh text-balance">
          Різноманітні можливості в Копенгагені | Mange forskellige tilbud i København
        </h2>
      </div>

      {/* 2. Filtre */}
      <div className="w-full mb-5">
        <div className="flex gap-4 overflow-x-auto flex-nowrap pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:justify-between md:flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex-none px-6 py-3 transition-all border-2 font-kbhtekst text-center flex flex-col
                ${activeCategory === cat.id ? 'bg-primary-blue border-uk-blue text-black shadow-md' : 'bg-white border-slate-200 text-navy'}`}
            >
              <span className="text-lg font-bold whitespace-nowrap">{cat.nameUk}</span>
              <span className="text-[9px] uppercase opacity-70 font-medium whitespace-nowrap">{cat.nameDk}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 3. Visning af aktiviteter */}
      <div className="w-full">
        {filteredActivities.length > 0 ? (
          <>
            {/* MOBIL: Karrusel */}
            <div className="md:hidden w-full overflow-hidden"> 
              <Carousel 
                setApi={setCarouselControl}
                className="w-full" 
                opts={{ align: "start", loop: false }}
              >
                {/* Vi bruger 'gap' i stedet for padding for at styre mellemrummet præcist */}
                <CarouselContent className="ml-0 flex gap-4">
                  {filteredActivities.map((activity) => (
                    /* basis-full sikrer at du kun ser ét slide ad gangen */
                    <CarouselItem key={activity.id} className="basis-full pl-0 min-w-0">
                      <ActivityCard title={activity.title} image={activity.image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* BUND SEKTION */}
              <div className="mt-6 flex flex-col gap-4">
                {/* Prikkerne - Centreret */}
                <div className="flex justify-center gap-2">
                  {filteredActivities.map((_, index) => (
                    <div 
                      key={index}
                      className={`h-2.5 w-2.5 rounded-full transition-colors ${
                        index === currentSlide ? "bg-secondary-purple" : "bg-secondary-light"
                      }`}
                    />
                  ))}
                </div>

                {/* Linket - Højrestillet - OBS: senere tilføjer jeg linket til denne */}
                <div className="flex justify-end px-2 py-4">
                  <button className="text-black text-lg font-bold flex items-center gap-1 hover:opacity-70 transition">
                    Показати всі
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* DESKTOP: Grid */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredActivities.map((activity) => (
                <ActivityCard 
                  key={activity.id} 
                  title={activity.title} 
                  image={activity.image} 
                />
              ))}
            </div>
          </>
        ) : (
          <div className="py-20 text-center border-2 border-dashed rounded-xl border-slate-100 text-slate-400 font-bold">
            На даний момент заходів не заплановано
          </div>
        )}
      </div>
    </div>
  );
}