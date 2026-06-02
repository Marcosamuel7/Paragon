import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-slate-950 overflow-hidden no-print">
      {/* Subtle background glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/15 rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-28 pb-20 lg:pt-36 lg:pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 mb-8"
        >
          <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400 animate-pulse" />
          <span className="text-xs font-medium uppercase tracking-[0.2em] text-indigo-200/70">
            Estruturação e Gestão de Ativos
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]"
        >
          Invista com alocação<br className="hidden md:block" /> eficiente e{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-white">
            gestão ativa
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-lg md:text-xl text-slate-300 mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Uma alternativa para diversificar seu portfólio, mesclando a segurança de
          ativos líquidos com o prêmio de ativos ilíquidos da economia real.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-12"
        >
          <a
            href="#tese"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("tese");
              if (el) {
                const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
                window.scrollTo({ top: y, behavior: "smooth" });
              }
            }}
            className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold bg-white text-slate-900 rounded-full transition-transform hover:scale-105"
          >
            Conheça a Estrutura
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
