import { motion } from "framer-motion";
import { Info } from "lucide-react";

export function TaxTable() {
  const rows = [
    { period: "Até 180 dias", rate: "22,5%", highlight: false },
    { period: "De 181 a 360 dias", rate: "20,0%", highlight: false },
    { period: "De 361 a 720 dias", rate: "17,5%", highlight: false },
    { period: "Acima de 720 dias", rate: "15,0%", highlight: true },
  ];

  return (
    <section id="tributacao" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-navy-950 mb-4">Tributação — Imposto de Renda</h2>
          <p className="text-lg text-muted-foreground">
            Tabela regressiva de renda fixa, retida na fonte. Válida para Pessoa Física e Jurídica.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-100/50">
                  <th className="py-5 px-8 font-semibold text-navy-900 border-b border-slate-200">Prazo de Investimento</th>
                  <th className="py-5 px-8 font-semibold text-navy-900 border-b border-slate-200 text-right">Alíquota IR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {rows.map((row, idx) => (
                  <tr 
                    key={idx} 
                    className={`transition-colors hover:bg-slate-50/50 ${
                      row.highlight ? "bg-emerald-50/30" : ""
                    }`}
                  >
                    <td className={`py-5 px-8 ${row.highlight ? "font-medium text-emerald-900" : "text-slate-600"}`}>
                      {row.period}
                      {row.highlight && (
                        <span className="ml-3 inline-block bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                          Alíquota Mínima — Recomendado
                        </span>
                      )}
                    </td>
                    <td className={`py-5 px-8 text-right font-semibold text-xl ${
                      row.highlight ? "text-emerald-700" : "text-navy-700"
                    }`}>
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-5 border-t border-slate-200">
            <div className="flex items-start gap-3">
              <Info className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
              <p className="text-sm text-slate-600">
                <strong className="text-emerald-700">Alíquota mínima de 15%</strong> para investimentos mantidos por mais de 720 dias. 
                A tabela regressiva de renda fixa incentiva o investidor de longo prazo a carregar o título até o vencimento, maximizando o resultado líquido.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
