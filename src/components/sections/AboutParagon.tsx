import { motion } from "framer-motion";
import { Building2, Target, TrendingUp, Handshake } from "lucide-react";

const items = [
  {
    icon: Building2,
    title: "O que é a AB Paragon?",
    desc: "A Alfa Brasil Paragon Securitizadora estrutura o investimento direto na economia real e em renda fixa, alocando capital de forma eficiente entre ativos líquidos e ilíquidos.",
  },
  {
    icon: Target,
    title: "Nosso Objetivo",
    desc: "Capturar um retorno maior que o disponível em plataformas de bancos e corretoras, com gestão ativa, diversificação e risco mitigado.",
  },
  {
    icon: TrendingUp,
    title: "Para o Investidor",
    desc: "Retorno-alvo elevado, descorrelacionado do índice, em uma estrutura leve, eficiente e com a menor carga tributária possível.",
  },
  {
    icon: Handshake,
    title: "Para o Tomador",
    desc: "Crédito em formato único e próximo, mais acessível que as taxas de mercado, com melhor garantia e melhor devedor.",
  },
];

export function AboutParagon() {
  return (
    <section id="ab-paragon" className="py-16 lg:py-20 bg-slate-50 border-y border-slate-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="print-keep max-w-3xl mb-10 lg:mb-12">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600"
          >
            Quem somos
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mt-4"
          >
            O que é a AB Paragon?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 mt-5 leading-relaxed"
          >
            Uma alocação eficiente de capital, diversificada entre ativos líquidos e ilíquidos. A AB Paragon
            opera por dois braços: <strong className="font-semibold text-slate-900">Alfa Sec</strong>, dedicada
            aos investimentos diretos na economia real, e <strong className="font-semibold text-slate-900">Colina</strong>,
            responsável pelos investimentos financeiros.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-12">
          {items.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
              >
                <Icon className="w-6 h-6 text-indigo-600 mb-5" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
