// app/(main)/layout.tsx'
import "../globals.css";
import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Københavns Kommune - Ukraine Indsats",
  description: "Bliv en del af et fællesskab",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da" className="h-full antialiased">
      <body className="min-h-screen flex flex-col font-kbhtekst">
        {/* Her lever navigationen for alle sider i (main) mappen */}
        <NavBar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}