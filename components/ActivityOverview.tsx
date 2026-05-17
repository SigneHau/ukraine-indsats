"use client"

import React, { useState } from "react";
import { ActivityDetailCard } from "./ActivityDetailCard";
import { Search, X, ArrowRight } from "lucide-react"; // ArrowRight importeret her i stedet
import { useRouter } from "next/navigation";

const activitiesData = [
  // RÆKKE 1: 3 kort
  { 
    id: 1, 
    title: 'Футбол | Fodbold', 
    image: 'https://images.unsplash.com/photo-1518063319789-7217e6706b04?w=800&q=80',
    description: 'Приєднуйтесь до нашого футбольного турніру! Ми збираємося для дружніх матчів, де головне — це рух та спілкування. Понеділок та середа з 17:00 до 19:00.'
  },
  { 
    id: 2, 
    title: 'Баскетбол | Basketball', 
    image: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=80', 
    description: 'Вдосконалюйте свої кидки та грайте у драйвовий баскетбол. Чудова можливість знайти нових друзів. Щовівторка та щочетверга з 18:30 до 20:30.'
  },
  { 
    id: 3, 
    title: 'Теніс | Tennis', 
    image: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?w=800&q=80', 
    description: 'Одиночні та парні ігри для всіх рівнів підготовки. Тренери допоможуть розібратися з технікою. Щосуботи з 10:00 до 12:00.'
  },
  
  // RÆKKE 2: 2 indrykkede kort
  { 
    id: 10, 
    title: 'Карате | Karate', 
    image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?w=800&q=80', 
    description: 'Вивчайте дисципліну, баланс та базові техніки самооборони у безпечному та професійному середовищі для будь-якого віку. Пʼятниця з 16:30 до 18:00.'
  },
  { 
    id: 12, 
    title: 'Плавання | Svømning', 
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80', 
    description: 'Освіжаючі тренування у воді для зміцнення всього тіла. Ідеально для покращення витривалості та м’язового тонусу. Щовівторка та щосуботи з 08:00.'
  },
  
  // RÆKKE 3: 3 kort
  { 
    id: 5, 
    title: 'Танці | Dans', 
    image: 'https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?w=800&q=80', 
    description: 'Відчуйте ритм та розважайтеся у колі однодумців. Ми танцюємо під сучасну музику. Щосереди з 19:30 до 21:00.'
  },
  { 
    id: 14, 
    title: 'Живопис | Maleri', 
    image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80', 
    description: 'Проявіть свій творчий потенціал за допомогою фарб та полотна. Художня студія відкрита для всіх. Щочетверга з 16:00.'
  },
  { 
    id: 17, 
    title: 'Кулінарія | Madlavning', 
    image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80', 
    description: 'Готуйте смачні страви разом та діліться традиційними рецептами. Продуктами забезпечуємо. Щодва тижні по суботах з 14:00.'
  },
];

export function ActivityOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const filteredActivities = activitiesData.filter((activity) =>
    activity.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-0 bg-white">
      
      {/* INTRO BANNER */}
      <div className="relative w-full max-w-4xl mx-auto h-40 md:h-50 overflow-hidden mb-8 bg-primary-blue text-black">
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 z-10">
          <span className="text-xs uppercase tracking-wider font-bold opacity-80 font-kbh mb-1">
            Københavns Kommune
          </span>
          <h1 className="text-3xl md:text-4xl font-black font-kbh uppercase leading-none mb-2">
            Меню активності
          </h1>
          <p className="text-sm md:text-base font-kbhtekst max-w-2xl leading-tight opacity-90">
            Приєднайтесь до наших цікавих занять! Усі проекти створені для зміцнення спільноти та активного відпочинку.
          </p>
        </div>
      </div>

      {/* SØGEBAR */}
      <div className="w-full max-w-xl mx-auto mb-12 md:mb-16 px-4 md:px-0">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Шукати активність / Søg efter aktivitet..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-bg-secondary-light border border-slate-300 text-black placeholder-black/40 pl-12 pr-10 py-3.5 rounded-none font-kbhtekst text-base focus:outline-none focus:border-primary-blue transition-colors shadow-sm"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/50" />
          {searchQuery && (
            <button onClick={() => setSearchQuery("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black">
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* GRID MED CARDS */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-x-8 md:gap-y-16 w-full">
          {filteredActivities.map((activity, index) => {
            
            if (searchQuery !== "") {
              return (
                <div key={activity.id} className="md:col-span-3 w-full">
                  <ActivityDetailCard 
                    title={activity.title} 
                    image={activity.image}
                    description={activity.description}
                  />
                </div>
              );
            }

            // RÆKKE 1
            if (index < 3) {
              return (
                <div key={activity.id} className="md:col-span-2 w-full">
                  <ActivityDetailCard 
                    title={activity.title} 
                    image={activity.image}
                    description={activity.description}
                  />
                </div>
              );
            }
            
            // RÆKKE 2
            if (index >= 3 && index < 5) {
              return (
                <div 
                  key={activity.id} 
                  className={`md:col-span-3 w-full transition-all ${
                    index === 3 ? 'md:pl-12 md:pr-4' : 'md:pr-12 md:pl-4'
                  }`}
                >
                  <ActivityDetailCard 
                    title={activity.title} 
                    image={activity.image}
                    description={activity.description}
                  />
                </div>
              );
            }

            // RÆKKE 3
            return (
              <div key={activity.id} className="md:col-span-2 w-full">
                <ActivityDetailCard 
                  title={activity.title} 
                  image={activity.image}
                  description={activity.description}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center font-kbhtekst text-black/60 border-2 border-dashed border-gray-200 w-full">
          <p className="font-bold text-lg mb-1">Нічого не знайдено</p>
          <p className="text-sm">Der blev ikke fundet nogen aktiviteter, der matcher din søgning.</p>
        </div>
      )}

      {/* DIN TILBAGE-KNAP (Placeret her i bunden af selve siden i stedet for inde i kortet) */}
      <div className="flex justify-end w-full mt-12 py-6 ">
        <button 
          onClick={() => router.push('/')} 
          className="flex items-center gap-2 text-black text-lg font-bold hover:text-secondary-purple transition-all group"
        >
          Назад
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

    </div>
  );
}