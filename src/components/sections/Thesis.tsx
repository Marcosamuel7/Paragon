import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp } from "lucide-react";

export function Thesis() {
  return (
    <section id="tese" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Tese de Investimento & Mitigação de Risco</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma carteira inteligentemente dividida para proteger seu capital enquanto busca prêmios superiores.
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-stretch">
          
          {/* 80% Block */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-7 bg-navy-50 rounded-3xl p-8 md:p-10 border border-navy-100 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck className="w-48 h-48" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-5xl font-extrabold text-navy-800 tracking-tighter">80%</span>
                <span className="px-4 py-1.5 bg-white text-navy-700 text-sm font-bold uppercase tracking-wider rounded-full shadow-sm border border-navy-100">
                  High Grade
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-navy-900 mb-3">Base de Alta Liquidez</h3>
              <p className="text-navy-600 text-lg leading-relaxed mb-8">
                Alocação em plataforma com 12 emissores distintos. Garantimos alta liquidez e baixo risco de crédito para proteger a maior parte do seu capital investido.
              </p>
              
              {/* Visual Bar */}
              <div className="w-full h-4 bg-white rounded-full overflow-hidden shadow-inner">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-navy-400 to-navy-700 rounded-full"
                />
              </div>
              <div className="flex justify-between mt-2 text-sm font-medium text-navy-500">
                <span>Proteção Estrutural</span>
                <span>80% da Carteira</span>
              </div>
            </div>
          </motion.div>

          {/* 20% Block */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-5 bg-[#FFFAF0] rounded-3xl p-8 md:p-10 border border-amber-200 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <TrendingUp className="w-40 h-40 text-amber-600" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-5xl font-extrabold text-amber-600 tracking-tighter">20%</span>
                  <span className="px-4 py-1.5 bg-white text-amber-700 text-sm font-bold uppercase tracking-wider rounded-full shadow-sm border border-amber-100">
                    High Yield
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-navy-900 mb-3">Vetor de Retorno</h3>
                <p className="text-navy-700/80 text-lg leading-relaxed mb-8">
                  Alocação estratégica em ativos ilíquidos para capturar um prêmio significativamente maior no carrego longo.
                </p>
              </div>
              
              {/* Visual Bar */}
              <div>
                <div className="w-full h-4 bg-white rounded-full overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "20%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                  />
                </div>
                <div className="flex justify-between mt-2 text-sm font-medium text-amber-700/60">
                  <span>Prêmio de Risco</span>
                  <span>20% da Carteira</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
