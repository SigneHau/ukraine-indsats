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
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const categories = [
  { id: 'ballgames', nameUk: "Ігри з м'ячем", nameDk: 'Boldspil' },
  { id: 'movement', nameUk: 'Тіло і рух', nameDk: 'Krop og bevægelse' },
  { id: 'combat', nameUk: 'Бойові види', nameDk: 'Kampsport' },
  { id: 'water', nameUk: 'Водні види', nameDk: 'Vandsport' },
  { id: 'creative', nameUk: 'Креативність', nameDk: 'Kreativt' },
  { id: 'social', nameUk: 'Соціальне', nameDk: 'Socialt' }
];

const activitiesData = [
  // BOLDSPIL
  { id: 1, category: 'ballgames', title: 'Футбол | Fodbold', image: '/img/fodboldkamp1.jpg', link: '#' },
  { id: 2, category: 'ballgames', title: 'Баскетбол | Basketball', image: '/img/Basket.jpg', link: '#' },
  { id: 3, category: 'ballgames', title: 'Гандбол | Håndbold', image: '/img/Håndbold.jpg', link: '#' },
  { id: 4, category: 'ballgames', title: 'Волейбол | Volleyball', image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', link: '#' },
  
  // KROP OG BEVÆGELSE
  { id: 5, category: 'movement', title: 'Танці | Dans', image: '/img/Hero-dans.jpg', link: '#' },
  { id: 20, category: 'movement', title: 'Велоспорт | Cykling', image: '/img/Hero-Cykel.jpg', link: '#' },
  { id: 6, category: 'movement', title: 'Гімнастика | Gymnastik', image: '/img/Gym.jpg', link: '#' },
  { id: 7, category: 'movement', title: 'Фітнес | Fitness', image: '/img/Fitness.jpg', link: '#' },
  { id: 8, category: 'movement', title: 'Йога | Yoga', image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80', link: '#' },
  
  // KAMPSPORT
  { id: 9, category: 'combat', title: 'Бокс | Boksning', image: '/img/boksning.png', link: '#' },
  { id: 10, category: 'combat', title: 'Карате | Karate', image: '/img/boksning.jpg', link: '#' },
  { id: 11, category: 'combat', title: 'Дзюдо | Judo', image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80', link: '#' },
  
  // VANDSPORT
  { id: 12, category: 'water', title: 'Плавання | Svømning', image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80', link: '#' },
  
  // KREATIVT
  { id: 14, category: 'creative', title: 'Образотворче мистецтво | Billedekunst', image: '/img/krea.jpg', link: '#' },
  { id: 15, category: 'creative', title: 'Кераміка | Keramik', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&q=80', link: '#' },
  { id: 16, category: 'creative', title: 'Музика | Musik', image: '/img/Musik.jpg', link: '#' },
  
  // SOCIALT
  { id: 17, category: 'social', title: 'Кулінарія | Madlavning', image: '/img/mad.jpg', link: '#' },
  { id: 18, category: 'social', title: 'Настільні ігри | Spejder', image: 'https://images.unsplash.com/photo-1611371805429-8b5c1b2c34ba?w=800&q=80', link: '#' },
  { id: 19, category: 'social', title: 'Мовне кафе | Esport', image: '/img/eSport.jpg', link: '#' },
];

export default function ActivityManager() {
  const [activeCategory, setActiveCategory] = useState('ballgames');
  const [carouselControl, setCarouselControl] = useState<CarouselApi>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();
  const { language } = useLanguage();

  const filteredActivities = activitiesData.filter(act => act.category === activeCategory);

  useEffect(() => {
    if (!carouselControl) return;

    carouselControl.on("select", () => {
      setCurrentSlide(carouselControl.selectedScrollSnap());
    });

    return () => {
      carouselControl.off("select", () => {
        setCurrentSlide(carouselControl.selectedScrollSnap());
      });
    };
  }, [carouselControl]);

  return (
    <div className="w-full max-w-7xl mx-auto px-3 py-12 overflow-x-hidden">
      
      {/* 1. Overskrift */}
      <div className="text-left md:text-center mt-8 w-full">
        <h2 className="text-navy text-2xl md:text-3xl mb-10 font-kbh">
          Різноманітні можливості в Копенгагені
          <br />
          <span className=" text-1xl md:text-2xl"> Mange forskellige tilbud i København</span>
        </h2>
      </div>

      {/* 2. Filtre */}
      <div className="w-full mb-3 relative">
        {/* RETTET: Tilføjet scroll-smooth, touch-pan-x og tvungen overflow-x-scroll for maksimal mobilsikkerhed */}
        <div className="flex gap-4 overflow-x-scroll flex-nowrap pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden justify-start md:justify-between md:flex-wrap scroll-smooth touch-pan-x w-full">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              /* RETTET: Ændret flex-none til shrink-0 og lagt en min-w brik på, så de holdes på stribe uanset skærmstørrelse */
              className={`shrink-0 min-w-[140px] px-6 py-2 transition-all border-2 font-kbhtekst text-center flex flex-col cursor-pointer rounded-none
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
                opts={{ align: "start", loop: true }}
              >
                <CarouselContent className="ml-0 flex gap-4">
                  {filteredActivities.map((activity) => (
                    <CarouselItem key={activity.id} className="basis-full pl-0 min-w-0">
                      <ActivityCard title={activity.title} image={activity.image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* BUND SEKTION */}
              <div className="mt-6 flex flex-col gap-4">
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

            {/* Link til alle aktiviteter */}
            <div className="flex justify-end w-full mt-8 py-6">
              <button 
                onClick={() => router.push('/activities')} 
                className="flex items-center gap-2 text-black text-lg font-bold hover:text-secondary-purple transition-all group cursor-pointer"
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                {language === "ua" ? "Показати всі" : "Vis alle"}
              </button>
            </div>
          </>
        ) : (
          <div className="py-20 text-center border-2 border-dashed rounded-xl border-slate-100 text-slate-400 font-bold">
            {language === "ua" 
              ? "На даний момент заходів не заплановано" 
              : "Der er i øjeblikket ingen planlagte aktiviteter"
            }
          </div>
        )}
      </div>
    </div>
  );
}