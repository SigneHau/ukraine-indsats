"use client"

import React, { useState } from "react";
import { ActivityDetailCard } from "./ActivityDetailCard";
import { Search, X, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const activitiesData = [
  { 
    id: 1, 
    title: 'Плавання | Svømning', 
    image: 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?w=800&q=80 object-center', 
    ua: 'Заняття у басейні, спрямовані на osвоєння різних стилів плавання (кроль, брас, на спині). Наголос на безпеку у воді, правильне дихання та зміцнення м’язів.',
    dk: 'Træning i svømmehal, der dækker stilarter som crawl, brystsvømning og rygcrawl. Der fokuseres på vandtilvænning, vejrtrækning, svømmeteknik og vandsikkerhed.'
  },
  { 
    id: 2, 
    title: 'Футбол | Fodbold', 
    image: '/image/fodboldkamp1.jpg object-center', 
    ua: 'Класичний командний спорт, орієнтований на гру в команді, тактику, ведення м’яча та удари по воротах. Наголос на взаємодопомогу та задоволення від gre.',
    dk: 'Klassisk holdsport med fokus på boldkontrol, spilforståelse, koordination og skudtræning. Der lægges vægt på holdsammenhold og glæden ved at spille sammen.'
  },
  { 
    id: 3, 
    title: 'Танці | Dans', 
    image: '/image/hero-dans.jpg object-right', 
    ua: 'Знайомство з різними танцювальними стилями, такими як хіп-хоп, шоу-данс, сучасний танець чи зумба. Заняття розвивають почуття ритму та пластику.',
    dk: 'Udforskning af forskellige dansestilarter, som f.eks. hiphop, showdance, moderne dans eller zumba. Der arbejdes med koreografi, rytmeforståelse og musikalsk udtryk.'
  },
  { 
    id: 4, 
    title: 'Гімнастика | Gymnastik', 
    image: '/image/gym.jpg object-center', 
    ua: 'Ознайомтеся з різними видами гімнастики, включаючи ритмічну гімнастику, стрибки на батуті та акробатику. Заняття спрямовані на розвиток координації, гнучкості та базової фізичної підготовки.',
    dk: 'Oplev de many grene inden for gymnastik, lige fra rytmisk gymnastik og springgymnastik to redskabsaktiviteter. Fokus er på kropsbevidsthed, motorik og bevægelsesglæde.'
  },
  { 
    id: 5, 
    title: 'Мистецтво та креативність | Kunst og kreativitet', 
    image: '/image/krea.jpg object-left', 
    ua: 'Простір для творчого самовираження. Сюди входить малювання фарбами, ліплення з глини, колажі, робота з текстилем та створення різноманітних поробок.',
    dk: 'Kreativt værksted med plads til fordybelse. Aktiviteterne omfatter alt fra tegning og maling til keramik, papirkunst, tekstilarbejde og spændende genbrugsprojekter.'
  },
  { 
    id: 6, 
    title: 'Музика | Musik', 
    image: '/image/musik1.jpg object-left', 
    ua: 'Світ музики та звуків, де ви можете навчитися грати на різних інструментах, співати або грати в групі. Заняття розвивають музичний слух, почуття ритму та дають можливість для творчого самовираження.',
    dk: 'Musikkens verden, hvor du kan lære at spille på forskellige instrumenter, synge eller spille i et band. Aktiviteterne styrker dit gehør, din rytmeforståelse og giver rig mulighed for kreativ udfoldelse og samvær.'
  },
  { 
    id: 7, 
    title: 'Бокс | Boksning', 
    image: '/image/boksning.png object-center', 
    ua: 'Класичний бокс, де вивчаються базові стійки, захисні рухи, удари по груші та робота в парах у захисному спорядженні. Тут також є можливість спробувати тайський боксом (муай-тай) або кікбоксинг для розвитку сили та витривалості.',
    dk: 'Traditionel klassisk boksning, hvor der trænes teknik, slagkombinationer og fodarbejde under kontrollerede forhold. Du finder også tilbud inden for thaiboksning og kickboksning, som giver sved på panden.'
  },
  { 
    id: 8, 
    title: 'Бойові мистецтва | Kampsport', 
    image: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800&q=80 object-top', 
    ua: 'Знайомство зі світом бойових мистецтв, де ви можете займатися карате або тхеквондо. Тренування включають вивчення ударів руками та ногами, блоків, техніки захисту та самооборони, а також розвивають дисципліну й упевненість у собі.',
    dk: 'Udforsk kampsportens verden, hvor du kan gå til discipliner som karate eller taekwondo. Træningen fokuserer på præcise slag, høje spark, parader og effektive selvforsvarsteknikker, samtidig med at der opbygges mental styrke, respekt og disciplin.'
  },
  { 
    id: 9, 
    title: 'Баскетбол | Basket', 
    image: '/image/basket.jpg object-right', 
    ua: 'Інтенсивна гра з м’ячем, що включає ведення, паси та кидки в кільце. Чудово розвиває витривалість, спритність та вміння взаємодіяти в команді.',
    dk: 'Intensiv holdsport baseret på driblinger, afleveringer og skud mod kurv. Aktivitet styrker konditionen, koordinationen og det taktiske samarbejde på banen.'
  },
  { 
    id: 10, 
    title: 'Велоспорт | Cykling', 
    image: '/image/hero-cykel.jpg object-center', 
    ua: 'Заняття велоспортом, де ви можете спробувати себе в катанні на гірських велосипедах (маунтінбайк) або тренуватися в класичному велоклубі. Чудова можливість покращити витривалість та техніку їзди.',
    dk: 'Cykling for alle, hvor du kan gå til mountainbike (MTB) eller træne landevejscykling i en rigtig cykelklub. En fantastisk aktivitet, der styrker din kondition, balance og køreteknik.'
  },
  { 
    id: 11, 
    title: 'Гандбол | Håndbold', 
    image: '/image/håndbold.jpg object-right', 
    ua: 'Динамічний командний спорт, де розвиваються швидкість, влучність та strategiчне мислення. Чудова можливість стане частиною сильної клубної спільноти.',
    dk: 'En tempofyldt holdsport, hvor der er fokus på boldfortrolighed, præcision, hurtighed og holdsamarbejde. En god måde at blive en del af et stærkt foreningsfællesskab.'
  },
  { 
    id: 12, 
    title: 'Кіберспорт | Esport', 
    image: '/image/eSport.jpg object-center', 
    ua: 'Змагання з відеоігор, які розвивають стратегічне мислення, швидкість реакції, координацію рук та очей, а також вміння працювати в команді та комунікувати.',
    dk: 'Konkurrencepræget gaming, der styrker strategisk tænkning, reaktionshastighed, hånd-øje-koordination samt evnen til teamwork og taktisk kommunikation.'
  },
  { 
    id: 13, 
    title: 'Фexecute | Fægtning', 
    image: '/image/faegtning.jpg object-right', 
    ua: 'Елегантний та динамічний спорт, що розвиває блискавичну реакцію, координацію та стратегічне мислення. Тренування включають роботу зі зброєю (рапіра, шпага або шабля) та вивчення техніки швидких випадів і захисту.',
    dk: 'En elegant og dynamisk sport, der udvikler lynhurtige reflekser, koordination og strategisk tænkning. Træningen omfatter arbejde med våben (fleuret, kårde eller sabel) samt teknikker til hurtige udfald og parader.'
  },
  { 
    id: 14, 
    title: 'Бадмінтон | Badminton', 
    image: '/image/badminton-2.jpg object-center', 
    ua: 'Швидкий ракетковий спорт, де потрібно відбивати волан через сітку. Тренування спрямовані на покращення реакції, швидкості ніг та точності ударів.',
    dk: 'Ketchersport med fokus på hurtige reflekser, præcision og benarbejde, hvor der spilles med fjerbold over net. Kan spilles som både single og double.'
  },
  { 
    id: 15, 
    title: 'Фітнес | Fitness', 
    image: '/image/fitness.jpg object-center', 
    ua: 'Різноманітні загальнозміцнюючі тренування, що включають кругові заняття, вправи з власною вагою, кросфіт та легку атлетику для зміцнення здоров’я.',
    dk: 'Alsidig fysisk træning, der dækker elementer som cirkeltræning, kropsvægtsøvelser, funktionel træning og styrke. Fokus er på sundhed, styrke og generel form.'
  },
];

export function ActivityOverview() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { language } = useLanguage();

  const filteredActivities = activitiesData.filter((activity) =>
    activity.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-0 md:px-0 bg-white">
      
      <div className="relative w-full max-w-4xl mx-auto h-40 md:h-50 overflow-hidden -mt-20 md:mt-0 mb-12 bg-primary-blue font-kbh text-navy">
        <div className="absolute inset-0 flex flex-col justify-center p-6 md:p-10 z-10">
          <span className="text-xs font-bold opacity-80 font-kbh mb-1">
            Københavns Kommune
          </span>
          <h1 className="text-3xl md:text-4xl font-kbh leading-none mb-2">
            {language === "ua" ? "Меню активності" : "Aktivitetsmenu"}
          </h1>
          <p className="text-sm md:text-base font-kbhtekst max-w-2xl leading-tight opacity-90">
            {language === "ua"
              ? "Приєднайтесь до наших цікавих занять! Усі проекти створені для зміцнення спільноти та активного відпочинку."
              : "Vær med til vores spændende aktiviteter! Alle projekter er skabt for at styrke fællesskabet og sikre en aktiv fritid."
            }
          </p>
        </div>
      </div>

      <div className="w-full max-w-xl mx-auto mb-12 md:mb-12 px-4 md:px-0">
        <div className="flex flex-col md:flex-row items-stretch w-full gap-3">
          
          <div className="relative flex-1 flex items-center border border-slate-300 bg-bg-secondary-light shadow-sm">
            <input
              type="text"
              placeholder={language === "ua" ? "Шукати активність..." : "Søg efter aktivitet..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent text-black placeholder-black/40 pl-12 pr-10 py-3.5 font-kbhtekst text-base focus:outline-none"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-black/50" />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")} 
                className="absolute right-3 top-1/2 -translate-y-1/2 text-black/50 hover:text-black cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          <button 
            type="button"
            className="bg-secondary-purple hover:bg-navy text-white px-8 h-[52px] font-kbh font-bold text-sm uppercase tracking-wider transition-colors shrink-0 cursor-pointer flex items-center justify-center border-none shadow-sm"
          >
            {language === "ua" ? "Пошук" : "Søg"}
          </button>

        </div>
      </div>

      {/* GRID MED CARDS */}
      {filteredActivities.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-x-8 md:gap-y-20 w-full px-4 md:px-0">
          {filteredActivities.map((activity) => {
            const displayDescription = language === "ua" ? activity.ua : activity.dk;
            
            // SPLITTER URL OG RETNINGS-KLASSEN FRA HINANDEN HÈR
            const [url, objectPositionClass] = activity.image.split(" ");

            return (
              <div key={activity.id} className="w-full">
                <ActivityDetailCard 
                  title={activity.title} 
                  image={`${url} ${objectPositionClass || 'object-center'}`}
                  description={displayDescription}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="py-20 text-center font-kbhtekst text-black/60 border-2 border-dashed border-gray-200 w-full px-4">
          <p className="font-bold text-lg mb-1">
            {language === "ua" ? "Нічого не знайдено" : "Ingen resultater fundet"}
          </p>
          <p className="text-sm">
            {language === "ua" 
              ? "Не знайдено жодної активності, що відповідає вашому запиту."
              : "Der blev ikke fundet nogen aktiviteter, der matcher din søgning."
            }
          </p>
        </div>
      )}

      <div className="flex justify-start w-full mt-12 py-6 px-4 md:px-0">
        <button 
          onClick={() => router.push('/')} 
          className="flex items-center gap-2 text-black text-lg font-bold hover:text-secondary-purple transition-all group cursor-pointer"
        >
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          {language === "ua" ? "Назад" : "Tilbage"}
        </button>
      </div>

    </div>
  );
}