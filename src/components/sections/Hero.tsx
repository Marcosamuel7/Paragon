import { motion } from "framer-motion";
import { ArrowRight, Building2, Target, TrendingUp, Handshake } from "lucide-react";

const aboutItems = [
  {
    icon: <Building2 className="w-8 h-8 text-indigo-400" />,
    title: "O que é a Alfa Sec?",
    desc: "Um escritório de financiamento à cadeia de produção e investimento em renda fixa."
  },
  {
    icon: <Target className="w-8 h-8 text-emerald-400" />,
    title: "Nosso Objetivo",
    desc: "Estruturar investimento direto na Economia Real de forma eficiente."
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-amber-400" />,
    title: "Para o Investidor",
    desc: "Entregar um retorno maior, diversificado, líquido e com baixa volatilidade, em uma estrutura leve e eficiente."
  },
  {
    icon: <Handshake className="w-8 h-8 text-blue-400" />,
    title: "Para o Tomador",
    desc: "Disponibilizar um crédito em formato único e próximo. Mais acessível que as taxas de mercado."
  }
];

export function Hero() {
  return (
    <section className="relative pt-24 pb-20 lg:pt-40 lg:pb-0 overflow-hidden bg-navy-950">
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
        


        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto mt-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-sm font-bold uppercase tracking-widest text-amber-400/80 mb-3"
          >
            Um escritório de estruturação e gestão de investimentos.
          </motion.p>
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
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("tese");
                if (el) {
                  const y = el.getBoundingClientRect().top + window.pageYOffset - 64;
                  window.scrollTo({ top: y, behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-navy-950 rounded-xl shadow-xl hover:bg-slate-100 hover:scale-105 hover:shadow-2xl transition-all duration-300 group"
            >
              Conheça a Estrutura
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        {/* About Cards — inline na primeira dobra */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20 pb-16">
          {aboutItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group backdrop-blur-sm"
            >
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-navy-300 leading-relaxed text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      

    </section>
  );
}
