import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Københavns Kommune - Ukraine Indsats",
  description: "Bliv en del af et fællesskab",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      {/* Vi bruger dine CSS-variabler fra globals.css direkte via klasserne i body */}
      <body className="min-h-screen flex flex-col font-kbhtekst">
        <NavBar />
        
        {/* Main sektionen sørger for at indholdet fylder pladsen ud */}
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}