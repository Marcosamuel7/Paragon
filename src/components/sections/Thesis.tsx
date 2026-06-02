import { motion } from "framer-motion";
import { TrendingUp, Landmark, ArrowRightLeft, Check } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

export function Thesis() {
  return (
    <section id="tese" className="relative pt-14 pb-16 lg:pt-16 lg:pb-20 bg-slate-50/60">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <div className="print-keep max-w-2xl mb-14 lg:mb-16">
          <motion.span
            {...fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            Nossa Estrutura
          </motion.span>
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4"
          >
            Ecossistema AB Paragon
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-slate-600 mt-5 leading-relaxed"
          >
            A AB Paragon atua por meio de dois braços complementares, combinando a
            segurança de ativos líquidos com o prêmio dos ativos da economia real.
          </motion.p>
        </div>

        {/* Two arms */}
        <div className="grid lg:grid-cols-2 gap-6 mb-24">
          {/* Alfa Sec — Investimento Direto */}
          <motion.div
            {...fadeUp}
            className="group relative rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 lg:p-10 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(245,158,11,0.25)] overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-amber-400 via-amber-500 to-orange-500" />
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-amber-200/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                  <ArrowRightLeft className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-none">Alfa Sec</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-amber-600">Investimentos Diretos</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black tracking-tight bg-gradient-to-br from-amber-500 to-orange-600 bg-clip-text text-transparent tabular-nums">R$ 1M</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-semibold">AuM</div>
              </div>
            </div>

            <ul className="relative space-y-3.5">
              {[
                "High Yield e cadeia de fornecimento da construção civil",
                "Antecipação de recebíveis na economia real",
                "Operações com garantia real",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-600" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Colina — Investimento Financeiro */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="group relative rounded-3xl border border-slate-200/80 bg-white/80 backdrop-blur-sm p-8 lg:p-10 shadow-[0_4px_24px_-8px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-12px_rgba(79,70,229,0.25)] overflow-hidden"
          >
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-400 via-indigo-500 to-blue-500" />
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-indigo-200/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative flex items-start justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform duration-300">
                  <Landmark className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 leading-none">Colina</h3>
                  <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600">Investimentos Financeiros</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-black tracking-tight bg-gradient-to-br from-indigo-500 to-blue-600 bg-clip-text text-transparent tabular-nums">R$ 22M</div>
                <div className="text-[10px] text-slate-400 uppercase tracking-[0.15em] font-semibold">AuM</div>
              </div>
            </div>

            <ul className="relative space-y-3.5">
              {[
                "Renda Fixa, Títulos Públicos e Crédito Privado High Grade",
                "Fundos líquidos: referenciados, imobiliários e de renda fixa",
                "Internacional: Bonds e Renda Variável (ETFs)",
              ].map((t, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-indigo-600" strokeWidth={3} />
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Vantagens */}
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-indigo-100 bg-gradient-to-br from-indigo-50/80 to-white p-8"
          >
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                <Landmark className="w-4 h-4" />
              </span>
              Vantagens — Investimentos Financeiros
            </h3>
            <ul className="space-y-3">
              {["Alta liquidez", "Menor risco", "Baixa volatilidade", "Emissor AAA", "Mercado institucional"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-4 h-4 text-indigo-500 shrink-0" strokeWidth={2.5} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="rounded-3xl border border-amber-100 bg-gradient-to-br from-amber-50/80 to-white p-8"
          >
            <h3 className="text-base font-bold text-slate-900 mb-6 flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600">
                <TrendingUp className="w-4 h-4" />
              </span>
              Vantagens — Economia Real
            </h3>
            <ul className="space-y-3">
              {["Alto retorno", "Acesso direto à cadeia", "Formato mais eficiente e leve", "Risco descorrelacionado"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-4 h-4 text-amber-500 shrink-0" strokeWidth={2.5} /> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
