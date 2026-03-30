import { motion } from "framer-motion";
import { Clock, Trophy } from "lucide-react";

export function Returns() {
  return (
    <section id="rentabilidade" className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Mecânica de Rentabilidade e Retorno</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estrutura transparente com pagamentos recorrentes e potencial de ganho exponencial no vencimento.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Target Return */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-14 h-14 bg-navy-50 rounded-xl flex items-center justify-center mb-6">
              <Clock className="w-7 h-7 text-navy-600" />
            </div>
            <h3 className="text-xl font-semibold text-navy-900 mb-2">Retorno Mensal Alvo</h3>
            <div className="my-6">
              <span className="text-6xl font-black text-navy-800 tracking-tighter">1%</span>
              <span className="text-2xl font-bold text-navy-400 ml-2">a.m.</span>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              Pagamento mensal recorrente calculado sobre o capital investido, proporcionando fluxo de caixa previsível.
            </p>
          </motion.div>

          {/* Card 2: Bonus */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.1)] border border-navy-800 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            {/* Decorative element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-6 backdrop-blur-sm border border-white/10 relative z-10">
              <Trophy className="w-7 h-7 text-amber-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2 relative z-10">Bônus de Vencimento</h3>
            
            <p className="text-navy-200 leading-relaxed mb-6 relative z-10">
              Caso o título seja carregado até o vencimento e o resultado da carteira seja positivo, o investidor recebe:
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm relative z-10">
              <div className="text-amber-400 font-medium mb-1 uppercase tracking-wider text-xs">Retorno Total</div>
              <div className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                1% a.m. <span className="text-navy-300 font-light mx-1">+</span> 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500"> 20% sobre o lucro excedente</span>
              </div>
              <div className="mt-3 text-sm text-navy-300 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                Potencial de ganho ilimitado
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
