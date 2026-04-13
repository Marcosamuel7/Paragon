import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, PieChart, Landmark, ArrowRightLeft, Wallet2 } from "lucide-react";

export function Thesis() {
  return (
    <section id="tese" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-navy-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section 1: Sugestões de Alocação */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Estratégia Personalizada por Perfil</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            O percentual de alocação fica a critério do cliente, mesclando ativos líquidos com a economia real.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-24">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Conservador</h3>
            <div className="text-4xl font-black text-navy-900 mb-2">90/10</div>
            <p className="text-sm font-medium text-slate-500">90% Investimentos Financeiros<br/>10% Investimento Direto</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-navy-950 border border-navy-800 p-8 rounded-3xl text-center relative shadow-xl transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Sugerido</div>
            <h3 className="text-xl font-bold text-navy-100 mb-2">Moderado</h3>
            <div className="text-5xl font-black text-white mb-2">80/20</div>
            <p className="text-sm font-medium text-navy-300">80% Investimentos Financeiros<br/>20% Investimento Direto</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-slate-50 border border-slate-200 p-8 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Agressivo</h3>
            <div className="text-4xl font-black text-amber-600 mb-2">50/50</div>
            <p className="text-sm font-medium text-slate-500">50% Investimentos Financeiros<br/>50% Investimento Direto</p>
          </motion.div>
        </div>

        {/* Section 2: Vantagens das Classes */}
        <div className="grid md:grid-cols-2 gap-8 mb-24 items-stretch">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-navy-50 rounded-3xl p-8 md:p-10 border border-navy-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5"><ShieldCheck className="w-48 h-48" /></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <Landmark className="w-6 h-6 text-navy-700" /> Investimentos Financeiros
              </h3>
              <ul className="space-y-4">
                {['Alta liquidez', 'Menor Risco', 'Baixa volatilidade', 'Emissor AAA', 'Mercado Institucional'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-navy-800">
                    <div className="w-2 h-2 rounded-full bg-navy-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-[#FFFAF0] rounded-3xl p-8 md:p-10 border border-amber-200 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-5"><TrendingUp className="w-40 h-40 text-amber-600" /></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <ArrowRightLeft className="w-6 h-6 text-amber-600" /> Investimento Direto
              </h3>
              <ul className="space-y-4">
                {['Alto Retorno', 'Acesso Direto', 'Formato mais eficiente, menos custos embutidos', 'Risco diversificado'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg font-medium text-navy-800">
                    <div className="w-2 h-2 rounded-full bg-amber-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Section 3: Pilares / Ecosystem */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-950">Ecossistema</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Colina */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white border text-center border-slate-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-navy-50 rounded-2xl flex items-center justify-center mx-auto mb-6"><Landmark className="w-8 h-8 text-navy-700" /></div>
            <h3 className="text-xl font-bold text-navy-900 mb-6">1. Colina</h3>
            <div className="space-y-4 text-left">
              <div>
                <span className="font-bold text-navy-800 block text-sm uppercase tracking-wider mb-1">Investimentos Financeiros</span>
                <p className="text-slate-600 text-sm">Renda Fixa, Títulos Públicos, Crédito Privado</p>
                <p className="text-slate-600 text-sm">Fundos Líquidos: Imobiliários, Renda Fixa</p>
                <p className="text-slate-600 text-sm">Internacional: Bonds e Renda Variável (ETFs)</p>
                <p className="text-slate-600 text-sm">Previdência</p>
              </div>
            </div>
          </motion.div>

          {/* Alfa Sec */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white border text-center border-amber-200 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mx-auto mb-6 relative"><ShieldCheck className="w-8 h-8 text-amber-600" /></div>
            <h3 className="text-xl font-bold text-navy-900 mb-6 relative">2. Alfa Sec</h3>
            
            <div className="space-y-6 text-left relative">
              <div>
                <span className="font-bold text-navy-800 block text-sm uppercase tracking-wider mb-1">2.1 Investimentos Financeiros</span>
                <p className="text-slate-600 text-sm">High Grade, Crédito Privado</p>
                <p className="text-slate-600 text-sm">Fundos Líquidos: Referenciados e Simples</p>
              </div>
              <div className="w-full h-px bg-slate-100" />
              <div>
                <span className="font-bold text-amber-700 block text-sm uppercase tracking-wider mb-1">2.2 Investimento Direto</span>
                <p className="text-slate-600 text-sm">High Yield, Cadeia de Fornecimento da Construção Civil</p>
                <p className="text-slate-600 text-sm">Antecipação de Recebíveis, Economia Real, Garantia Real</p>
              </div>
            </div>
          </motion.div>

          {/* AuM */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-navy-950 border border-navy-800 p-8 rounded-3xl text-center shadow-xl">
            <div className="w-16 h-16 bg-navy-800/50 rounded-2xl flex items-center justify-center mx-auto mb-6"><Wallet2 className="w-8 h-8 text-white" /></div>
            <h3 className="text-xl font-bold text-white mb-8">AuM Consolidado</h3>
            
            <div className="space-y-6">
              <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <span className="block text-navy-300 text-xs font-bold uppercase tracking-wider mb-1">Investimentos Financeiros</span>
                <span className="text-3xl font-black text-white">R$ 22M</span>
              </div>
              <div className="bg-amber-500/10 rounded-2xl p-4 border border-amber-500/20">
                <span className="block text-amber-200 md:text-xs font-bold uppercase tracking-wider mb-1">Investimento Direto</span>
                <span className="text-3xl font-black text-amber-400">R$ 1M</span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
