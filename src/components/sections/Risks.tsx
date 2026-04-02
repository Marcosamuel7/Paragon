import { motion } from "framer-motion";
import { AlertOctagon, ShieldAlert } from "lucide-react";

export function Risks() {
  const risks = [
    "Este investimento possui <strong>risco moderado a alto</strong>. Não é indicado para investidores conservadores.",
    "<strong>Existe a possibilidade de perda total do capital investido</strong>. Invista apenas recursos que você está disposto a imobilizar.",
    "A Securitizadora é um veículo de emissão e <strong>não é a devedora direta</strong> da dívida. O risco de crédito recai sobre o devedor dos ativos subjacentes.",
    "O investimento não possui liquidez garantida. O resgate antecipado está sujeito a <strong>melhor esforço</strong> da Securitizadora, sem garantia de execução.",
    "O risco de crédito é mitigado pela estruturação, mas <strong>não é eliminado</strong>. Cenários adversos de mercado podem impactar os retornos.",
  ];

  return (
    <section className="py-20 bg-navy-950 border-t border-navy-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-navy-900/50 border border-amber-500/20 rounded-2xl p-8 md:p-10"
        >
          <div className="flex items-center justify-between gap-3 mb-6 flex-wrap">
            <div className="flex items-center gap-3">
              <AlertOctagon className="w-8 h-8 text-amber-500" />
              <h2 className="text-2xl font-bold text-amber-500">Aviso de Riscos</h2>
            </div>
            <span className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg">
              <ShieldAlert className="w-3.5 h-3.5" />
              Risco Moderado a Alto
            </span>
          </div>
          
          <div className="space-y-4">
            {risks.map((risk, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2.5 shrink-0" />
                <p 
                  className="text-navy-100 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: risk }}
                />
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-navy-700/50">
            <p className="text-navy-400 text-sm leading-relaxed">
              <strong className="text-navy-300">Atenção:</strong> A Securitizadora atua em regime de <em>melhor esforço</em> (“best effort”)
              e não oferece garantia de retorno ou recompra dos títulos emitidos. 
              Leia atentamente o contrato de emissão antes de investir.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
