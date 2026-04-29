import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { About } from "@/components/sections/About";
import { Faq } from "@/components/sections/Faq";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-20">
        <About />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
