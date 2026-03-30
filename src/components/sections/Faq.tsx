import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const faqs = [
    {
      q: "Posso revender meu título para terceiros?",
      a: "Sim. O mercado secundário é livre — você pode negociar seu título diretamente com outros investidores por qualquer valor e taxa acordados entre as partes, sem qualquer intermediação ou aprovação da Securitizadora."
    },
    {
      q: "Qual é o meu retorno no resgate antecipado?",
      a: "O resgate antecipado está sujeito à disponibilidade de caixa da empresa. Antes do período de carência (2 anos), aplica-se um deságio de 20% sobre o valor de face. Após a carência, não há deságio."
    },
    {
      q: "Qual é o retorno no vencimento?",
      a: "No vencimento, você recebe o retorno mensal de 1% a.m. acumulado durante todo o período. Caso o resultado total seja positivo, você ainda recebe uma participação de 20% sobre o lucro excedente, sem limite máximo."
    },
    {
      q: "Quem é responsável pelo pagamento?",
      a: "O devedor é a empresa emissora dos recebíveis. A Securitizadora (Alfa Sec) não é devedora e não oferece garantia de retorno. O risco de crédito recai sobre o devedor dos ativos subjacentes."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-navy-950 mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-muted-foreground">
            Tire suas dúvidas sobre a estrutura e o funcionamento do investimento.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "border rounded-2xl overflow-hidden transition-colors duration-300",
                  isOpen ? "bg-slate-50 border-primary/20" : "bg-white border-slate-200 hover:border-slate-300"
                )}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-inset"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-navy-900 pr-8">{faq.q}</span>
                  <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300",
                    isOpen ? "bg-primary/10 text-primary rotate-180" : "bg-slate-100 text-slate-500"
                  )}>
                    <ChevronDown size={18} />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
