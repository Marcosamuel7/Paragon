import { motion } from "framer-motion";
import { Coins, ArrowDownToLine, Globe, ShieldCheck, Info, Zap } from "lucide-react";

export function Tokenization() {
  return (
    <section id="tokenizacao" className="py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-violet-50 border border-violet-200 text-violet-700 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-5"
          >
            <Zap className="w-3.5 h-3.5" />
            Módulo de Tokenização
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold text-navy-950 mb-4"
          >
            Investimento via Token Descentralizado
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Uma camada tecnológica que amplia o acesso ao investimento com benefícios fiscais
            exclusivos e liquidez garantida pela Securitizadora.
          </motion.p>
        </div>

        {/* Tax Exemption Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-violet-600 to-indigo-700 rounded-3xl p-8 md:p-10 mb-10 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 bg-white/15 rounded-2xl flex items-center justify-center shrink-0 border border-white/20">
              <Coins className="w-8 h-8 text-white" />
            </div>
            <div>
              <div className="text-violet-200 text-xs font-bold uppercase tracking-widest mb-1">Isenção Fiscal — IRPF</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Isenção de IR para movimentações até{" "}
                <span className="text-violet-200">R$ 35.000,00 / mês</span>
              </h3>
              <p className="text-violet-100 leading-relaxed max-w-2xl">
                Investimentos realizados via Token Descentralizado beneficiam-se de isenção de IRPF para 
                movimentações mensais de até R$ 35.000,00, nos termos da legislação de criptoativos vigente 
                (instrução normativa aplicável). Consulte seu assessor tributário para casos individuais.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Acquisition Flows */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          
          {/* National Flow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center">
                <ArrowDownToLine className="w-6 h-6 text-navy-700" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-navy-400 mb-0.5">Fluxo Nacional</div>
                <h3 className="text-lg font-bold text-navy-900">Depósito via TED (Reais)</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { step: "1", label: "Depósito em Reais (BRL) via TED", note: "Para conta indicada pela plataforma" },
                { step: "2", label: "Confirmação do depósito", note: "Verificação e validação pela Securitizadora" },
                { step: "3", label: "Emissão de Tokens a preço zero", note: "Tokens emitidos sem custo adicional de conversão" },
                { step: "4", label: "Isenção aplicável", note: "Movimentações até R$ 35k/mês isentas de IRPF" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-navy-800 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2 bg-emerald-50 border border-emerald-100 rounded-xl p-3">
              <Info className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
              <p className="text-xs text-emerald-800">
                <strong>Isenção disponível</strong> para este fluxo (até R$ 35.000,00/mês).
              </p>
            </div>
          </motion.div>

          {/* International Flow */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                <Globe className="w-6 h-6 text-indigo-700" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-0.5">Fluxo Internacional</div>
                <h3 className="text-lg font-bold text-navy-900">Troca Direta de Tokens</h3>
              </div>
            </div>
            
            <div className="space-y-3">
              {[
                { step: "1", label: "Envio de tokens cripto compatíveis", note: "Via carteira digital do investidor" },
                { step: "2", label: "Conversão e validação", note: "Pela plataforma e Securitizadora" },
                { step: "3", label: "Emissão de títulos equivalentes", note: "Proporcional ao valor de mercado enviado" },
              ].map((item) => (
                <div key={item.step} className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-indigo-700 text-white text-xs font-bold rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    {item.step}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-navy-900">{item.label}</p>
                    <p className="text-xs text-slate-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex items-start gap-2 bg-amber-50 border border-amber-100 rounded-xl p-3">
              <Info className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
              <p className="text-xs text-amber-800">
                <strong>Isenção não aplicável</strong> para operações originadas do exterior. Consulte sua
                obrigação tributária no país de residência.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Buyback Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-navy-950 rounded-3xl p-8 md:p-10 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="w-16 h-16 bg-emerald-500/10 rounded-2xl flex items-center justify-center shrink-0 border border-emerald-500/20">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <div>
              <div className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Garantia de Recompra</div>
              <h3 className="text-xl font-bold text-white mb-3">
                Recompra pelo Valor de Contrato — Independente da Oscilação de Mercado
              </h3>
              <p className="text-navy-200 leading-relaxed">
                A Securitizadora garante a recompra dos tokens pelo <strong className="text-white">valor de contrato</strong>, 
                independentemente da oscilação do preço em tela (mercado aberto). O investidor não está exposto à 
                volatilidade do preço de mercado dos tokens — o valor de referência para resgate é sempre o 
                estabelecido em contrato.
              </p>
              <div className="mt-4 flex items-start gap-2 bg-amber-500/10 border border-amber-500/20 rounded-xl p-3">
                <Info className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <p className="text-xs text-amber-200">
                  Esta garantia está sujeita às regras de carência e melhor esforço da Securitizadora. 
                  Consulte o contrato de emissão para detalhes completos.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
