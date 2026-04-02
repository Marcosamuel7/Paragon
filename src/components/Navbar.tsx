import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tese", href: "#tese" },
    { name: "Rentabilidade", href: "#rentabilidade" },
    { name: "Liquidez", href: "#liquidez" },
    { name: "Tributação", href: "#tributacao" },
    { name: "Tokenização", href: "#tokenizacao" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm py-3" 
          : "bg-white border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-baseline space-x-2">
          <span className="text-2xl font-bold tracking-tighter text-navy-950">
            AB Paragon
          </span>
          <span className="text-sm font-medium text-muted-foreground hidden sm:inline-block">
            by Alfa Sec
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-navy-700 hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </a>
          ))}
          <a
            href="#tese"
            className="px-5 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-semibold shadow-md shadow-primary/20 hover:bg-navy-800 hover:-translate-y-0.5 transition-all duration-200"
          >
            Conheça a Estrutura
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-navy-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileMenuOpen ? "auto" : 0, opacity: mobileMenuOpen ? 1 : 0 }}
        className="md:hidden overflow-hidden bg-white border-b border-border"
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium text-navy-800 hover:bg-slate-50 hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </div>
      </motion.div>
    </header>
  );
}
