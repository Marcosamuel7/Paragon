import { motion } from "framer-motion";
import { Building2, Target, TrendingUp, Handshake } from "lucide-react";

export function About() {
  const items = [
    {
      icon: <Building2 className="w-8 h-8 text-indigo-600" />,
      title: "O que é a Alfa Sec?",
      desc: "Um escritório de financiamento à cadeia de produção e investimento em renda fixa."
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-600" />,
      title: "Nosso Objetivo",
      desc: "Estruturar investimento direto na Economia Real de forma eficiente."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-amber-600" />,
      title: "Para o Investidor",
      desc: "Entregar um retorno maior, diversificado, líquido e com baixa volatilidade, em uma estrutura leve e eficiente."
    },
    {
      icon: <Handshake className="w-8 h-8 text-blue-600" />,
      title: "Para o Tomador",
      desc: "Disponibilizar um crédito em formato único e próximo. Mais acessível que as taxas de mercado."
    }
  ];

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-slate-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-950 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
