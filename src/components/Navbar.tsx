import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  const isHome = location === "/";
  // Navbar transparente sobre o Hero escuro (somente na home, no topo, menu fechado)
  const onDark = isHome && !isScrolled && !mobileMenuOpen;

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (location !== "/") {
      setLocation("/");
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const y = el.getBoundingClientRect().top + window.pageYOffset - 60;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const el = document.getElementById(hash);
      if (el) {
        const y = el.getBoundingClientRect().top + window.pageYOffset - 60;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Tese", href: "tese", isHash: true },
    { name: "AB Paragon", href: "ab-paragon", isHash: true },
    { name: "Rentabilidade", href: "rentabilidade", isHash: true },
    { name: "Tributação", href: "tributacao", isHash: true },
    { name: "Tokenização", href: "/tokenizacao", isRoute: true },
    { name: "FAQ - Dúvidas", href: "/sobre", isRoute: true },
    { name: "Contato", href: "contato", isHash: true },
  ];

  const linkClass = cn(
    "text-sm font-medium transition-colors relative group cursor-pointer",
    onDark ? "text-white/80 hover:text-white" : "text-navy-700 hover:text-primary"
  );
  const underlineClass = cn(
    "absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full",
    onDark ? "bg-white" : "bg-primary"
  );

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-border shadow-sm py-3"
          : onDark
            ? "bg-transparent border-transparent py-5"
            : "bg-white border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-baseline space-x-2">
          <span className={cn("text-2xl font-bold tracking-tighter transition-colors", onDark ? "text-white" : "text-navy-950")}>
            AB Paragon
          </span>
          <span className={cn("text-sm font-medium hidden sm:inline-block transition-colors", onDark ? "text-slate-300" : "text-muted-foreground")}>
            Securitizadora
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                className={linkClass}
              >
                {link.name}
                <span className={underlineClass} />
              </Link>
            ) : (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleHashClick(e, link.href)}
                className={linkClass}
              >
                {link.name}
                <span className={underlineClass} />
              </a>
            )
          ))}
          <a
            href="#tese"
            onClick={(e) => handleHashClick(e, "tese")}
            className={cn(
              "px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-pointer",
              onDark
                ? "bg-white text-slate-900 shadow-black/20 hover:bg-slate-100"
                : "bg-primary text-primary-foreground shadow-primary/20 hover:bg-navy-800"
            )}
          >
            Conheça a Estrutura
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className={cn("md:hidden p-2 transition-colors", onDark ? "text-white" : "text-navy-900")}
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
            link.isRoute ? (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-3 rounded-md text-base font-medium text-navy-800 hover:bg-slate-50 hover:text-primary"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={`#${link.href}`}
                onClick={(e) => handleHashClick(e, link.href)}
                className="block px-3 py-3 rounded-md text-base font-medium text-navy-800 hover:bg-slate-50 hover:text-primary cursor-pointer"
              >
                {link.name}
              </a>
            )
          ))}
        </div>
      </motion.div>
    </header>
  );
}
