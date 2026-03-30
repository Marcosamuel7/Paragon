import { motion } from "framer-motion";
import { AlertTriangle, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-navy-950">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/hero-bg.png`}
          alt="Abstract financial background"
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/90 to-navy-950"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warning Banner */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-2.5 rounded-lg text-amber-400 text-sm font-medium backdrop-blur-sm shadow-xl max-w-3xl text-center">
            <AlertTriangle className="w-5 h-5 shrink-0" />
            <p>
              <span className="font-bold">Atenção:</span> Este é um investimento de risco moderado a alto. Invista apenas capital que não comprometa sua liquidez.
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mt-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]"
          >
            Invista com Alocação Eficiente e <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-white">Gestão Ativa.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg md:text-xl text-navy-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Uma alternativa para diversificar seu portfólio, mesclando a segurança de ativos líquidos com o prêmio de ativos ilíquidos.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#tese" 
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-navy-950 rounded-xl shadow-xl hover:bg-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              Conheça a Estrutura
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-navy-300/50"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Role para descobrir</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-navy-300/50 to-transparent"></div>
      </motion.div>
    </section>
  );
}
