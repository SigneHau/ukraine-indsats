import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import "../../globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Sprog-provideren pakkes udenom det hele
    <LanguageProvider>
      {/* Disse tags skal være her, da (blank) er en isoleret rod-mappe */}
      <html lang="da" className="h-full bg-white">
        <body className="min-h-screen bg-white font-kbhtekst overflow-y-auto">
          
          {/* LOGO SEKTION */}
          <div className="p-6 md:p-10 relative z-20">
            <Link href="/">
              <Image
                src="/image/kk-logo.svg"
                alt="KK-Logo"
                width={300}
                height={180}
                className="h-16 md:h-24 w-auto object-contain cursor-pointer"
                priority
              />
            </Link>
          </div>

          {/* Formularindhold */}
          <main className="relative z-10 w-full">
            {children}
          </main>
          
        </body>
      </html>
    </LanguageProvider>
  );
}