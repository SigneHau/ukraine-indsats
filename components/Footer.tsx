"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-offwhite  border-navy/10 pb-16 font-kbhtekst">
      <div className="max-w-7xl mx-auto px-15">
        
        {/* Logo-overlap sektionen */}
        <div className="flex justify-start md:justify-end mb-4 md:mb-12">
          <div className="relative z-20 p-1 w-24 -mt-12 md:w-40 md:-mt-18 transition-all">
            <Image
              src="/image/kk-logo.svg"
              alt="Københavns Kommune logo"
              width={200}
              height={200}
              className="h-auto w-full object-contain"
              priority
            />
          </div>
        </div>

        {/* 
           GRID SYSTEM:
           Vi tvinger den til at være 3 kolonner på desktop (md:grid-cols-3)
           og sikrer os at den fylder hele bredden (w-full).
        */}
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-navy w-full">

            {/* Kolonne 1: Kontakt */}
            <div className="flex flex-col gap-5">
              <p className="font-semibold text-md">
                Kontakt Københavns Kommune
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center text-sm gap-3">
                  <Phone size={18} className="text-ua-blue" />
                  <Link href="tel:33663366" className="hover:underline font-kbhTekst text-sm text-navy">
                    33 66 33 66
                  </Link>
                </div>
                <div className="flex items-center gap-3">
                  <ArrowRight size={18} className="text-ua-blue" />
                  <Link href="https://www.kk.dk/" className="hover:underline text-navy">
                    Find andre kontakter her
                  </Link>
                </div>
                <p className="text-navy/70 text-sm mt-2 font-kbhtekst">
                  CVR-nummer 64942212
                </p>
              </div>
            </div>

            {/* Kolonne 2: Genveje */}
            <div className="flex flex-col gap-5">
              <p className="text-navy/50 tracking-widest text-xs font-bold uppercase">
                Genveje
              </p>
              <nav className="flex flex-col gap-3">
                {[
                  { label: "Hvis du vil klage", href: "https://www.kk.dk/" },
                  { label: "Databeskyttelse", href: "https://www.kk.dk/" },
                  { label: "Tilgængelighedserklæring", href: "https://www.kk.dk/" },
                  { label: "English", href: "https://www.kk.dk/" },
                  { label: "Cookieindstillinger", href: "https://www.kk.dk/" },
                ].map((link) => (
                  <div key={link.label} className="flex items-center gap-3 group">
                    <ArrowRight size={16} className="text-ua-blue transition-transform group-hover:translate-x-1" />
                    <Link href={link.href} className="hover:underline text-sm text-navy">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

            {/* Kolonne 3: Flere genveje */}
            <div className="flex flex-col gap-5"> 
              {/* Vi bruger en tom overskrift med 'hidden md:block' for at bevare afstanden på web */}
              <p className="text-transparent tracking-widest text-xs font-bold select-none hidden md:block">
                GENVEJE
              </p>
              <nav className="flex flex-col gap-3">
                {[
                  { label: "Digital Post", href: "https://www.kk.dk/" },
                  { label: "Job", href: "https://www.kk.dk/" },
                  { label: "Om hjemmesiden", href: "https://www.kk.dk/" },
                  { label: "Cookiepolitik", href: "https://www.kk.dk/" },
                ].map((link) => (
                  <div key={link.label} className="flex items-center gap-3 group">
                    <ArrowRight size={16} className="text-ua-blue transition-transform group-hover:translate-x-1" />
                    <Link href={link.href} className="hover:underline text-sm text-navy">
                      {link.label}
                    </Link>
                  </div>
                ))}
              </nav>
            </div>

          </div>
        </div>
    
    </footer>
  )
}