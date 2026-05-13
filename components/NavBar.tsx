"use client"

import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { Menu, Search, X } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export default function NavBar () {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-offwhite border-b border-gray-200 font-kbhtekst">
      {/* 
         Vi ændrer md:h-20 til md:min-h-24 og tilføjer py-4. 
         Det giver logoet plads til at vokse uden at ramme kanten.
      */}
      <nav className="max-w-7xl mx-auto min-h-20 md:min-h-24 px-6 flex items-center justify-between py-1 md:py-2">

        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/img/kk-logo.svg"
              alt="KK-Logo"
              width={300} // Øget for at give plads til højere opløsning
              height={180}
              
              /* 
                h-14: Størrelsen på mobil.
                md:h-24: En flot stor størrelse på web (96px).
                w-auto object-contain: Sikrer at den aldrig strækker eller beskærer.
              */
              className="h-16 md:h-42 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-10 tracking-wider text-lg font-medium">
          <Link href="https://www.kk.dk/" className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Borger</Link>
          <Link href="https://www.kk.dk/erhverv" className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Erhverv</Link>
          <Link href="https://www.kk.dk/brug-byen" className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Brug byen</Link>
          <Link href="https://www.kk.dk/politik" className="relative after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Politik</Link>
          <Link href="https://www.kk.dk/om-kommunen" className="relative after:absolute after:-bottom-1after:left-0 after:h-px after:w-0 after:bg-black after:transition-all after:duration-300 hover:after:w-full">Om kommunen</Link>
        </div>

        <div className="md:hidden flex items-center">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger aria-label="Åbn menu" className="p-2">
              <Menu size={28} />
            </SheetTrigger>

            <SheetContent side="right" className="w-full bg-offwhite text-navy p-0 border-none font-kbhtekst">
              <div className="flex bg-white items-center justify-between px-6 h-20 border-b">
                <div className="text-1xl tracking-widest ">MENU</div>
                <div className="flex items-center gap-4">
                  <button aria-label="Søg"><Search size={24} /></button>
                  <button aria-label="Luk menu" onClick={() => setOpen(false)}><X size={24} /></button>
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-10 px-6 text-lg">
                <Link onClick={() => setOpen(false)} href="https://www.kk.dk/">Borger</Link>
                <Link onClick={() => setOpen(false)} href="https://www.kk.dk/erhverv">Erhverv</Link>
                <Link onClick={() => setOpen(false)} href="https://www.kk.dk/brug-byen">Brug byen</Link>
                <Link onClick={() => setOpen(false)} href="https://www.kk.dk/politik">Politik</Link>
                <Link onClick={() => setOpen(false)} href="https://www.kk.dk/om-kommunen">Om kommunen</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

      </nav>
    </header>
  )
}