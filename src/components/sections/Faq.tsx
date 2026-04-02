import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function Faq() {
  const faqs = [
    {
      q: "Posso revender meu título para terceiros durante a carência?",
      a: "Sim. O mercado secundário é livre — você pode negociar seu título diretamente com outros investidores por qualquer valor e taxa acordados entre as partes. A Securitizadora não intermedeia nem precisa aprovar a transação."
    },
    {
      q: "Qual é o meu retorno no resgate antecipado (dentro da carência)?",
      a: "Dentro do período de carência de 2 anos (720 dias), a Securitizadora pode tentar uma recompra via 'melhor esforço' no mercado secundário ou diretamente, com aplicação de deságio de 20% sobre o valor de face. Não há garantia de execução."
    },
    {
      q: "Como funciona o resgate após o período de carência?",
      a: "Após os 2 anos de carência, o resgate ocorre sem deságio. Para solicitar o resgate, o investidor deve comunicar com aviso prévio mínimo de 120 dias antes do vencimento. O prazo de liquidação é de até 60 dias após a solicitação."
    },
    {
      q: "Qual é o retorno no vencimento?",
      a: "No vencimento, você recebe o retorno mensal de 1% a.m. (rentabilidade fixa) acumulado durante todo o período. Caso o resultado total da carteira seja positivo, você ainda recebe uma participação de 20% sobre o lucro excedente ao 1% a.m. acumulado, sem limite máximo."
    },
    {
      q: "Quem é responsável pelo pagamento e qual é o papel da Securitizadora?",
      a: "O devedor é a empresa emissora dos recebíveis. A Securitizadora é um veículo de emissão e não é a devedora direta da dívida. A Securitizadora atua em regime de 'melhor esforço' para garantia de recompra dos títulos e não oferece garantia absoluta de retorno."
    },
    {
      q: "O investimento via Token Descentralizado tem isensão de IR?",
      a: "Sim. Investimentos realizados via Token Descentralizado possuem isenção de IRPF para movimentações de até R$ 35.000,00 por mês (nos termos da legislação vigente). Esta isenção se aplica ao fluxo nacional (depósito via TED em Reais com emissão de tokens a preço zero). Operações do exterior não se beneficiam desta isenção."
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
