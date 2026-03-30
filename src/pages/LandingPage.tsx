import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Thesis } from "@/components/sections/Thesis";
import { Returns } from "@/components/sections/Returns";
import { Liquidity } from "@/components/sections/Liquidity";
import { TaxTable } from "@/components/sections/TaxTable";
import { Risks } from "@/components/sections/Risks";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Thesis />
        <Returns />
        <Liquidity />
        <TaxTable />
        <Risks />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
