import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { AboutParagon } from "@/components/sections/AboutParagon";
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
        <AboutParagon />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
