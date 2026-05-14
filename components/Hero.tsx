"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";


export default function Hero() {

  const router = useRouter();

  return (
    /* SEKTION: 
       - h-96 (384px) på mobil for at undgå det meget aflange look.
       - md:h-175 (700px) på web for at bevare storheden.
       - overflow-visible sikrer at den blå boks kan stikke ud.
    */
    <section className="relative w-full h-96 md:h-175 overflow-visible z-20">
      
      <Image
        src="/img/intro-img.png"
        alt="Ukraine indsats intro"
        fill
        className="object-cover"
        priority
      />

      <div className="relative mx-auto max-w-7xl h-full w-full">
        
        {/* DEN BLÅ BOKS:
            - Justeret -bottom på mobil så den passer til den kortere sektion.
        */}
        <div className="absolute -bottom-72 md:-bottom-64 left-0 z-30 w-full md:max-w-2xl bg-primary-blue p-6 md:p-12 shadow-1xl">
          
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl mb-2 font-kbh text-black">
              Стань частиною спільноти <br /> <span className="text-2xl md:text-4xl">Bliv en del af et fællesskab</span> 
            </h1>
            <p className="text-base md:text-xl font-kbhtekst text-navy">
              Копенгаген має насичене спортивне та культурне життя. Наші консультанти допоможуть вам сконтактувати з організацією, яка вас цікавить, та підтримають у процесі реєстрації. Оберіть те, що вам до душі, і ми допоможемо з усім іншим.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-6 md:mt-10">
            <Button 
              variant="purple" 
              size="xl" 
              onClick={() => router.push('/registration')}
              className="mx-auto md:ml-auto"
              >
              Контакт
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}