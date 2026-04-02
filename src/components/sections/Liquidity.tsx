import { motion } from "framer-motion";
import { Lock, ArrowRightLeft, AlertTriangle, ShieldCheck, Bell } from "lucide-react";

export function Liquidity() {
  const rules = [
    {
      icon: <Lock className="w-6 h-6 text-navy-600" />,
      title: "Período de Carência (2 Anos)",
      description: "Bloqueio total de resgate por 2 anos (720 dias). Durante este período, não é possível solicitar resgate direto à Securitizadora.",
      alert: false
    },
    {
      icon: <ArrowRightLeft className="w-6 h-6 text-navy-600" />,
      title: "Mercado Secundário",
      description: "Durante a carência, o investidor pode negociar seu título diretamente com terceiros por livre negociação de valor e taxa, sem intermediação da Securitizadora.",
      alert: false
    },
    {
      icon: <AlertTriangle className="w-6 h-6 text-amber-600" />,
      title: "Resgate Antecipado (Dentro da Carência)",
      description: "Via 'melhor esforço' no mercado secundário ou recompra pela empresa — sujeito a disponibilidade de caixa e com deságio de 20% sobre o valor de face do título.",
      alert: true
    },
    {
      icon: <Bell className="w-6 h-6 text-blue-600" />,
      title: "Aviso Prévio Mínimo",
      description: "Para solicitar resgate pós-carência, é necessário aviso prévio mínimo de 120 dias antes do vencimento do contrato.",
      alert: false
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: "Pós-Carência (Sem Deságio)",
      description: "Após a carência de 2 anos e respeitado o aviso prévio de 120 dias, o resgate ocorre sem deságio em até 60 dias via realocação ou recompra.",
      alert: false
    }
  ];

  return (
    <section id="liquidez" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy-950 mb-4">Regras de Liquidez e Resgate</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compreenda os prazos e condições para movimentação do seu capital. Carência mínima de 2 anos com aviso prévio de 120 dias.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                rule.alert 
                  ? "bg-amber-50/50 border-2 border-amber-200/60" 
                  : "bg-white border border-slate-200"
              }`}
            >
              {rule.alert && (
                <div className="absolute top-0 inset-x-0 h-1 bg-amber-500" />
              )}
              
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-5 ${
                rule.alert ? "bg-amber-100" : "bg-slate-100"
              }`}>
                {rule.icon}
              </div>
              
              <h3 className="text-lg font-bold text-navy-900 mb-3">{rule.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {rule.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
