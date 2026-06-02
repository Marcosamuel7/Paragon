import { motion } from "framer-motion";
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  ReferenceLine
} from "recharts";

// ─── Dados históricos Carteira Alfa Sec (mensais) ───────────────────────────
// Rentabilidade nominal bruta de IR por semestre (base 100.000)
// Alfa: 85% investimento direto (186% CDI) + 15% investimento financeiro (110% CDI)
// Consolidado: 40% Carteira Alfa Sec + 60% investimento financeiro (110% CDI)

const comparisonData = (() => {
  let cdi = 100000;
  let alfaFin = 100000;    // 15% alocação financeira da Alfa
  let alfaDir = 100000;    // 85% alocação direta da Alfa
  let plataforma = 100000; // 100% financeiro via Plataforma (110% CDI)

  const labels = [
    "Dez/24", "Jun/25", "Dez/25", "Jun/26", "Dez/26",
    "Jun/27", "Dez/27", "Jun/28", "Dez/28", "Jun/29",
    "Dez/29", "Jun/30", "Dez/30", "Jun/31", "Dez/31",
    "Jun/32", "Dez/32"
  ];

  // Taxas semestrais:
  // CDI: ~12.7% a.a. → 1.0615 por semestre
  // 110% CDI (plataforma / fin): 1.0676 por semestre
  // 186% CDI (investimento direto): 1.1143 por semestre

  return labels.map(label => {
    const alfaValue = alfaFin * 0.15 + alfaDir * 0.85;
    const consolidadoValue = alfaValue * 0.40 + plataforma * 0.60;

    const point = {
      label,
      cdi: Math.round(cdi),
      alfa: Math.round(alfaValue),
      consolidado: Math.round(consolidadoValue),
    };

    cdi        *= 1.0615;
    alfaFin    *= 1.0676;
    alfaDir    *= 1.1143;
    plataforma *= 1.0676;

    return point;
  });
})();

const finalData = comparisonData[comparisonData.length - 1];

// ─── Curva DI ─────────────────────────────────────────────────────────────────
const diData = [
  { label: "Atual", rate: 14.58 },
  { label: "6M (126 DU)", rate: 13.98 },
  { label: "1A (252 DU)", rate: 13.78 },
  { label: "2A (504 DU)", rate: 13.70 },
  { label: "3A (756 DU)", rate: 13.77 },
];

// ─── Histórico mensal real de rentabilidade (% a.m.) ─────────────────────────
// Fonte: planilha de acompanhamento AB Paragon. Acumulado = soma dos retornos mensais.
const monthlyHistory = [
  { mes: "Dez/24", cdi: 0.93, colina: 1.62, alfaSec: 2.23, consolidado: 1.864 },
  { mes: "Jan/25", cdi: 1.01, colina: -1.32, alfaSec: 2.23, consolidado: 0.1 },
  { mes: "Fev/25", cdi: 0.99, colina: 5.22, alfaSec: 2.23, consolidado: 4.024 },
  { mes: "Mar/25", cdi: 0.96, colina: 2.18, alfaSec: 2.23, consolidado: 2.2 },
  { mes: "Abr/25", cdi: 1.06, colina: 2.83, alfaSec: 2.23, consolidado: 2.59 },
  { mes: "Mai/25", cdi: 1.14, colina: 0.72, alfaSec: 2.23, consolidado: 1.324 },
  { mes: "Jun/25", cdi: 1.1, colina: -0.29, alfaSec: 2.23, consolidado: 0.718 },
  { mes: "Jul/25", cdi: 1.28, colina: 1.67, alfaSec: 2.23, consolidado: 1.894 },
  { mes: "Ago/25", cdi: 1.16, colina: 1.21, alfaSec: 2.23, consolidado: 1.618 },
  { mes: "Set/25", cdi: 1.22, colina: 1.91, alfaSec: 2.23, consolidado: 2.038 },
  { mes: "Out/25", cdi: 1.28, colina: -0.23, alfaSec: 2.23, consolidado: 0.754 },
  { mes: "Nov/25", cdi: 1.05, colina: 3.02, alfaSec: 2.23, consolidado: 2.704 },
  { mes: "Dez/25", cdi: 1.22, colina: 1.56, alfaSec: 2.23, consolidado: 1.828 },
  { mes: "Jan/26", cdi: 1.16, colina: 1.91, alfaSec: 2.23, consolidado: 2.038 },
  { mes: "Fev/26", cdi: 1.0, colina: 0.84, alfaSec: 2.23, consolidado: 1.396 },
  { mes: "Mar/26", cdi: 1.21, colina: -1.46, alfaSec: 2.23, consolidado: 0.016 },
];

// Acumulado por soma simples dos retornos mensais (running)
const tableData = (() => {
  let cdiAcc = 0, colinaAcc = 0, alfaAcc = 0, consAcc = 0;
  return monthlyHistory.map((r) => {
    cdiAcc += r.cdi;
    colinaAcc += r.colina;
    alfaAcc += r.alfaSec;
    consAcc += r.consolidado;
    return { ...r, cdiAcum: cdiAcc, colinaAcum: colinaAcc, alfaAcum: alfaAcc, consAcum: consAcc };
  });
})();

const totals = tableData[tableData.length - 1];

const fmtPct = (v: number) => `${v < 0 ? "" : "+"}${v.toFixed(2).replace(".", ",")}%`;

// ─── Formatadores ─────────────────────────────────────────────────────────────
const formatCurrencyInfo = (value: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);

const formatYAxisCurrency = (value: number) => {
  if (value === 0) return "0";
  return `${(value / 1000).toFixed(0)}k`;
};

const formatPercent = (value: number) => `${value.toFixed(1)}%`;

// ─── Tooltip Gráfico 1 ────────────────────────────────────────────────────────
const CustomLineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-xl rounded-xl z-50 relative">
        <p className="text-slate-500 font-medium mb-3 text-sm">{label}</p>
        <div className="flex flex-col gap-2">
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex gap-4 justify-between items-center text-sm">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
                <span className="text-slate-600 font-medium">{entry.name}</span>
              </span>
              <span className="font-bold whitespace-nowrap" style={{ color: entry.color }}>
                {formatCurrencyInfo(entry.value)}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

// ─── Tooltip Gráfico 2 ────────────────────────────────────────────────────────
const CustomAreaTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-lg z-50 relative">
        <p className="text-slate-500 font-medium mb-2 text-xs">{label}</p>
        <p className="font-bold text-navy-800 text-lg">{payload[0].value.toFixed(2)}%</p>
      </div>
    );
  }
  return null;
};

// ─── Legenda customizada ──────────────────────────────────────────────────────
const CustomLegend = ({ payload }: any) => {
  const descriptions: Record<string, string> = {
    "Carteira Alfa Sec": "Maior peso em investimento direto na economia real",
    "Consolidado": "60% Colina (financeiro) + 40% Alfa Sec (direto)",
    "CDI (100%)": "Referência — taxa básica de juros",
  };

  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mt-6 px-4">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex flex-col items-start gap-1 max-w-xs">
          <div className="flex items-center gap-2 text-sm">
            <svg width="24" height="12" viewBox="0 0 24 12">
              {entry.value === "Carteira Alfa Sec" ? (
                <line x1="0" y1="6" x2="24" y2="6" stroke={entry.color} strokeWidth="3" />
              ) : (
                <line x1="0" y1="6" x2="24" y2="6" stroke={entry.color} strokeWidth="1.5" strokeDasharray="5 4" strokeOpacity="0.7" />
              )}
            </svg>
            <span className="font-semibold" style={{ color: entry.color }}>{entry.value}</span>
          </div>
          <p className="text-xs text-slate-400 ml-8">{descriptions[entry.value]}</p>
        </div>
      ))}
    </div>
  );
};

// ─── Componente principal ─────────────────────────────────────────────────────
export function ReturnsComparison() {
  return (
    <div className="w-full mt-24 space-y-12">
      
      {/* Gráfico 1: Comparativo Global */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy-950">Comparativo Global de Rentabilidade</h3>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl mx-auto">
            Investimento inicial de R$ 100.000. 
            <br/><span className="text-amber-600 font-medium">Disclaimer:</span> Até este mês, o CDI utilizado é o CDI histórico observado. A partir deste mês, os resultados são projetados com base na curva de CDI futuro. Tudo bruto de IR.
          </p>
        </div>

        <div className="h-[350px] sm:h-[450px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={comparisonData} margin={{ top: 20, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f1f5f9" />
              <XAxis
                dataKey="label"
                tick={{ fill: '#64748b', fontSize: 12 }}
                tickMargin={12}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              <YAxis
                tickFormatter={formatYAxisCurrency}
                tick={{ fill: '#64748b', fontSize: 12 }}
                tickMargin={8}
                domain={['auto', 'auto']}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomLineTooltip />} />
              <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: '20px' }} />

              <ReferenceLine
                x="Dez/29"
                stroke="#64748b"
                strokeDasharray="4 4"
                label={{ position: 'top', value: 'Vencimento Debênture', fill: '#475569', fontSize: 11 }}
              />

              {/* CDI — pontilhada discreta cinza */}
              <Line
                name="CDI (100%)"
                type="monotone"
                dataKey="cdi"
                stroke="#94a3b8"
                strokeWidth={1.5}
                strokeDasharray="5 5"
                strokeOpacity={0.7}
                dot={false}
              />
              {/* Consolidado — pontilhada discreta azul */}
              <Line
                name="Consolidado"
                type="monotone"
                dataKey="consolidado"
                stroke="#3b82f6"
                strokeWidth={1.5}
                strokeDasharray="6 4"
                strokeOpacity={0.7}
                dot={false}
              />
              {/* Carteira Alfa Sec — linha principal em destaque laranja */}
              <Line
                name="Carteira Alfa Sec"
                type="monotone"
                dataKey="alfa"
                stroke="#f97316"
                strokeWidth={3.5}
                dot={{ r: 4, fill: "#f97316" }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cards de resultado final */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
          <div className="bg-orange-50 text-left border border-orange-100 rounded-xl p-5 shadow-sm">
            <div className="text-xs text-orange-700 font-bold mb-1 uppercase tracking-wider">Carteira Alfa Sec</div>
            <div className="text-xl font-black text-orange-700 mb-1">{formatCurrencyInfo(finalData.alfa)}</div>
            <div className="text-sm font-medium text-orange-700/80">Projetado final</div>
          </div>
          <div className="bg-blue-50 text-left border border-blue-100 rounded-xl p-5">
            <div className="text-xs text-blue-700 font-bold mb-1 uppercase tracking-wider">Consolidado</div>
            <div className="text-xl font-black text-blue-700 mb-1">{formatCurrencyInfo(finalData.consolidado)}</div>
            <div className="text-sm font-medium text-blue-700/80">Projetado final</div>
          </div>
          <div className="bg-slate-50 text-left border border-slate-200 rounded-xl p-5">
            <div className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">CDI (100%)</div>
            <div className="text-xl font-black text-navy-900 mb-1">{formatCurrencyInfo(finalData.cdi)}</div>
            <div className="text-sm font-medium text-slate-500">Projetado final</div>
          </div>
        </div>
      </motion.div>

      {/* Gráfico 2: Curva DI Futuro */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy-950">Curva de DI Futuro</h3>
          <p className="text-slate-500 mt-2 text-sm">
            Taxas de juros futuros por vencimento — referência atualizada
          </p>
        </div>

        <div className="h-[250px] sm:h-[300px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={diData} margin={{ top: 20, right: 30, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0f172a" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#0f172a" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={true} horizontal={true} stroke="#f1f5f9" />
              <XAxis
                dataKey="label"
                tick={{ fill: '#64748b', fontSize: 11 }}
                tickMargin={12}
                axisLine={{ stroke: '#cbd5e1' }}
              />
              <YAxis
                tickFormatter={formatPercent}
                tick={{ fill: '#64748b', fontSize: 12 }}
                tickMargin={8}
                domain={[13.5, 15.0]}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomAreaTooltip />} />
              <Area
                type="monotone"
                dataKey="rate"
                stroke="#0f172a"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRate)"
                activeDot={{ r: 6, fill: "#0f172a" }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { label: "6M (126 DU)", value: "13.98%" },
            { label: "1A (252 DU)", value: "13.78%" },
            { label: "2A (504 DU)", value: "13.70%" },
            { label: "3A (756 DU)", value: "13.77%" },
          ].map((item, i) => (
            <div key={i} className="bg-slate-50/50 rounded-xl p-4 text-center">
              <div className="text-xs text-slate-500 font-medium mb-1">{item.label}</div>
              <div className="text-xl font-bold text-navy-900">{item.value}</div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tabela de Rentabilidade */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy-950">Histórico de Rentabilidade</h3>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl mx-auto">
            Retornos mensais reais e <span className="text-blue-600 font-semibold">retorno acumulado</span> (soma dos
            resultados mensais). Valores brutos de IR.
          </p>
        </div>

        <div className="overflow-x-auto -mx-2 px-2">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wider">
                <th className="py-3 px-3 font-semibold text-slate-500 whitespace-nowrap text-left">Período</th>
                <th className="py-3 px-3 font-semibold text-slate-400 text-right whitespace-nowrap">CDI</th>
                <th className="py-3 px-3 font-semibold text-blue-600 text-right whitespace-nowrap">CDI acum.</th>
                <th className="py-3 px-3 font-semibold text-indigo-500 text-right whitespace-nowrap">Colina</th>
                <th className="py-3 px-3 font-semibold text-blue-600 text-right whitespace-nowrap">Colina acum.</th>
                <th className="py-3 px-3 font-semibold text-amber-600 text-right whitespace-nowrap">Alfa Sec</th>
                <th className="py-3 px-3 font-semibold text-blue-600 text-right whitespace-nowrap">Alfa Sec acum.</th>
                <th className="py-3 px-3 font-semibold text-slate-700 text-right whitespace-nowrap">Consolidado</th>
                <th className="py-3 px-3 font-semibold text-blue-600 text-right whitespace-nowrap">Consol. acum.</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tableData.map((row, idx) => {
                const yearClose = row.mes === "Dez/25";
                const m = (v: number) =>
                  `${v.toFixed(2).replace(".", ",")}%`;
                return (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-slate-50/50 ${yearClose ? "bg-slate-50" : ""}`}
                  >
                    <td className="py-2.5 px-3 font-medium text-navy-800 whitespace-nowrap">{row.mes}</td>
                    <td className="py-2.5 px-3 text-slate-400 text-right tabular-nums whitespace-nowrap">{m(row.cdi)}</td>
                    <td className="py-2.5 px-3 text-blue-600 font-semibold text-right tabular-nums whitespace-nowrap">{fmtPct(row.cdiAcum)}</td>
                    <td className={`py-2.5 px-3 text-right tabular-nums whitespace-nowrap ${row.colina < 0 ? "text-rose-500" : "text-slate-600"}`}>{m(row.colina)}</td>
                    <td className="py-2.5 px-3 text-blue-600 font-semibold text-right tabular-nums whitespace-nowrap">{fmtPct(row.colinaAcum)}</td>
                    <td className="py-2.5 px-3 text-slate-600 text-right tabular-nums whitespace-nowrap">{m(row.alfaSec)}</td>
                    <td className="py-2.5 px-3 text-blue-600 font-semibold text-right tabular-nums whitespace-nowrap">{fmtPct(row.alfaAcum)}</td>
                    <td className={`py-2.5 px-3 font-medium text-right tabular-nums whitespace-nowrap ${row.consolidado < 0 ? "text-rose-500" : "text-slate-700"}`}>{m(row.consolidado)}</td>
                    <td className="py-2.5 px-3 text-blue-600 font-bold text-right tabular-nums whitespace-nowrap">{fmtPct(row.consAcum)}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr className="border-t-2 border-slate-200 bg-blue-50/40 font-bold">
                <td className="py-3.5 px-3 text-navy-900 whitespace-nowrap">Acumulado</td>
                <td className="py-3.5 px-3 text-right text-slate-400"></td>
                <td className="py-3.5 px-3 text-right text-blue-700 tabular-nums whitespace-nowrap">{fmtPct(totals.cdiAcum)}</td>
                <td className="py-3.5 px-3 text-right text-slate-400"></td>
                <td className="py-3.5 px-3 text-right text-blue-700 tabular-nums whitespace-nowrap">{fmtPct(totals.colinaAcum)}</td>
                <td className="py-3.5 px-3 text-right text-slate-400"></td>
                <td className="py-3.5 px-3 text-right text-blue-700 tabular-nums whitespace-nowrap">{fmtPct(totals.alfaAcum)}</td>
                <td className="py-3.5 px-3 text-right text-slate-400"></td>
                <td className="py-3.5 px-3 text-right text-blue-700 tabular-nums whitespace-nowrap">{fmtPct(totals.consAcum)}</td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="mt-6 flex items-start gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4">
          <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong className="text-slate-700">Colina</strong> (investimentos financeiros) e{" "}
            <strong className="text-slate-700">Alfa Sec</strong> (investimentos diretos) compõem a carteira{" "}
            <strong className="text-slate-700">Consolidada</strong> (60% Colina + 40% Alfa Sec). O retorno acumulado é
            a soma dos retornos mensais no período. Rentabilidade passada não é garantia de retorno futuro.
          </p>
        </div>
      </motion.div>

    </div>
  );
}
