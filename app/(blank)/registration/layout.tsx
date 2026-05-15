// app/(blank)/registration/layout.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; 
import "../../globals.css";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      {/* FJERNEDE: overflow-hidden. TILFØJEDE: bg-white og scroll-behavior */}
      <body className="min-h-screen bg-white font-kbhtekst overflow-y-auto">
        
        {/* LOGO SEKTION */}
        <div className="p-6 md:p-10 relative z-20">
          <Link href="/">
            <Image
              src="/img/kk-logo.svg"
              alt="KK-Logo"
              width={300}
              height={180}
              className="h-16 md:h-24 w-auto object-contain cursor-pointer"
              priority
            />
          </Link>
        </div>

        {/* ÆNDRET: Vi sikrer at main kan fylde mere end skærmen 
            og vi fjerner de stramme begrænsninger 
        */}
        <main className="relative z-10 w-full">
          {children}
        </main>
      </body>
    </html>
  );
}