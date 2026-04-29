import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Tokenization } from "@/components/sections/Tokenization";
import { Risks } from "@/components/sections/Risks";
import { Footer } from "@/components/sections/Footer";

export default function TokenizationPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <Tokenization />
        <Risks />
      </main>
      <Footer />
    </div>
  );
}
