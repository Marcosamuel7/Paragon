import { motion } from "framer-motion";
import { AlertOctagon } from "lucide-react";

export function Risks() {
  const risks = [
    "A Securitizadora não é a devedora e não há garantia de retorno.",
    "Existe o risco substancial de perda total do capital investido.",
    "O investimento não possui liquidez garantida.",
    "O risco de crédito é mitigado pela estruturação, mas não eliminado."
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
          <div className="flex items-center gap-3 mb-6">
            <AlertOctagon className="w-8 h-8 text-amber-500" />
            <h2 className="text-2xl font-bold text-amber-500">Aviso de Riscos</h2>
          </div>
          
          <div className="space-y-4">
            {risks.map((risk, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 mt-2 shrink-0" />
                <p className="text-navy-100 leading-relaxed">
                  {risk}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
