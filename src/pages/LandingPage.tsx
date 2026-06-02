import { Navbar } from "@/components/Navbar";
import { PrintButton } from "@/components/PrintButton";
import { Hero } from "@/components/sections/Hero";
import { Thesis } from "@/components/sections/Thesis";
import { AboutParagon } from "@/components/sections/AboutParagon";
import { Returns } from "@/components/sections/Returns";
import { Liquidity } from "@/components/sections/Liquidity";
import { TaxTable } from "@/components/sections/TaxTable";
import { Footer } from "@/components/sections/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Thesis />
        <AboutParagon />
        <Returns />
        <Liquidity />
        <TaxTable />
      </main>
      <Footer />
      <PrintButton />
    </div>
  );
}
