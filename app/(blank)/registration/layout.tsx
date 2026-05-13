// app/(blank)/registration/layout.tsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Rettet: Nu importeres Link fra Next.js
import "../../globals.css";

export default function RegistrationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className="min-h-screen bg-white relative overflow-hidden font-kbhtekst">
        
        {/* LOGO SEKTION */}
        <div className="p-6 md:p-10">
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

        {/* INDHOLDET AF DIN REGISTRATION PAGE */}
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}