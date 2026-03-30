import { motion } from "framer-motion";

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
            Tabela regressiva, retida na fonte. Válida para Pessoa Física e Jurídica.
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
                    </td>
                    <td className={`py-5 px-8 text-right font-semibold ${row.highlight ? "text-emerald-700" : "text-navy-700"}`}>
                      {row.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="bg-slate-50 p-4 border-t border-slate-200 text-sm text-slate-500 text-center">
            A alíquota de 15% é o benefício máximo da tabela regressiva padrão.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
