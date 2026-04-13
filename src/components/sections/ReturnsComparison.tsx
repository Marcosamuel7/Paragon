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

// Gerando dados do gráfico longo apartir de Dez/24 até Dez/32
const comparisonData = (() => {
  let cdi = 100000;
  let appFin = 100000;
  let invDir = 100000;
  
  const labels = [
    "Dez/24", "Jun/25", "Dez/25", "Jun/26", "Dez/26", 
    "Jun/27", "Dez/27", "Jun/28", "Dez/28", "Jun/29", 
    "Dez/29", "Jun/30", "Dez/30", "Jun/31", "Dez/31", 
    "Jun/32", "Dez/32"
  ];
  
  return labels.map(label => {
    const point = {
      label,
      cdi: Math.round(cdi),
      appFin: Math.round(appFin),
      invDir: Math.round(invDir),
      portfolio: Math.round(appFin * 0.8 + invDir * 0.2)
    };
    
    // Taxas nominais aproximadas por semestre:
    cdi *= 1.0615; // Equivalente a ~12.7% CDI ao ano
    appFin *= 1.0676; // 110% do CDI
    invDir *= 1.1143; // 186% do CDI
    
    return point;
  });
})();

const finalData = comparisonData[comparisonData.length - 1]; // Para os cards

const diData = [
  { label: "Atual", rate: 14.58 },
  { label: "6M (126 DU)", rate: 13.98 },
  { label: "1A (252 DU)", rate: 13.78 },
  { label: "2A (504 DU)", rate: 13.70 },
  { label: "3A (756 DU)", rate: 13.77 },
];

const formatCurrencyInfo = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 }).format(value);
};

const formatYAxisCurrency = (value: number) => {
  if (value === 0) return "0";
  return `${(value / 1000).toFixed(0)}k`;
};

const formatPercent = (value: number) => {
  return `${value.toFixed(1)}%`;
};

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

const CustomAreaTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-lg z-50 relative">
        <p className="text-slate-500 font-medium mb-2 text-xs">{label}</p>
        <p className="font-bold text-navy-800 text-lg">
          {payload[0].value.toFixed(2)}%
        </p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }: any) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
      {payload.map((entry: any, index: number) => (
        <div key={`item-${index}`} className="flex items-center gap-2 text-sm">
          <svg width="12" height="12" viewBox="0 0 12 12">
            {entry.value === "100% CDI" ? (
              <circle cx="6" cy="6" r="5" fill="none" stroke={entry.color} strokeWidth="2" strokeDasharray="2 2" />
            ) : (
              <circle cx="6" cy="6" r="5" fill={entry.color} />
            )}
          </svg>
          <span className="font-medium" style={{ color: entry.color }}>{entry.value}</span>
        </div>
      ))}
    </div>
  );
};


export function ReturnsComparison() {
  return (
    <div className="w-full mt-24 space-y-12">
      
      {/* Gráfico 1: Comparativo de Rentabilidade */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy-950">Comparativo Global: Modelo 80/20</h3>
          <p className="text-slate-500 mt-2 text-sm max-w-2xl mx-auto">
            Investimento inicial de R$ 100.000. 
            <br/><span className="text-amber-600 font-medium">Disclaimer:</span> Até este mês o CDI utilizado é o CDI histórico observado. A partir deste mês, os resultados são projetados com base na curva de CDI futuro. Tudo bruto de IR.
          </p>
        </div>

        <div className="h-[350px] sm:h-[450px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={comparisonData}
              margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
            >
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
                label={{ position: 'top', value: 'Vencimento Debênture (Conciliação)', fill: '#475569', fontSize: 11 }} 
              />

              <Line 
                name="Investimento Direto (186% CDI)"
                type="monotone" 
                dataKey="invDir" 
                stroke="#d97706" 
                strokeWidth={2}
                dot={{ r: 3, fill: "#d97706" }}
              />
              <Line 
                name="100% CDI"
                type="monotone" 
                dataKey="cdi" 
                stroke="#64748b" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ r: 3, fill: "#64748b" }}
              />
              <Line 
                name="Aplicação Financeira"
                type="monotone" 
                dataKey="appFin" 
                stroke="#3b82f6" 
                strokeWidth={2}
                dot={{ r: 3, fill: "#3b82f6" }}
              />
              <Line 
                name="Linha Alfa (80/20)"
                type="monotone" 
                dataKey="portfolio" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ r: 4, fill: "#10b981" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cards Info Embaixo do Gráfico 1 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-emerald-50 text-left border border-emerald-100 rounded-xl p-5 shadow-sm">
             <div className="text-xs text-emerald-700 font-bold mb-1 uppercase tracking-wider">Linha Alfa (80/20)</div>
             <div className="text-xl font-black text-emerald-700 mb-1">{formatCurrencyInfo(finalData.portfolio)}</div>
             <div className="text-sm font-medium text-emerald-700/80">Projetado final</div>
          </div>
          <div className="bg-amber-50 text-left border border-amber-100 rounded-xl p-5">
             <div className="text-xs text-amber-700 font-bold mb-1 uppercase tracking-wider">Investimento Direto</div>
             <div className="text-xl font-black text-amber-700 mb-1">{formatCurrencyInfo(finalData.invDir)}</div>
             <div className="text-sm font-medium text-amber-700/80">Projetado final</div>
          </div>
          <div className="bg-blue-50 text-left border border-blue-100 rounded-xl p-5">
             <div className="text-xs text-blue-700 font-bold mb-1 uppercase tracking-wider">Aplicação Fin.</div>
             <div className="text-xl font-black text-blue-700 mb-1">{formatCurrencyInfo(finalData.appFin)}</div>
             <div className="text-sm font-medium text-blue-700/80">Projetado final</div>
          </div>
          <div className="bg-slate-50/50 text-left border border-slate-200 rounded-xl p-5">
             <div className="text-xs text-slate-500 font-bold mb-1 uppercase tracking-wider">100% CDI</div>
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
        className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
      >
        <div className="text-center mb-8">
          <h3 className="text-xl md:text-2xl font-bold text-navy-950">Curva de DI Futuro</h3>
          <p className="text-slate-500 mt-2 text-sm">
            Taxas de juros futuros por vencimento — referência atualizada
          </p>
        </div>

        <div className="h-[250px] sm:h-[300px] w-full mt-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={diData}
              margin={{ top: 20, right: 30, left: -20, bottom: 0 }}
            >
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

        {/* Cards Info Embaixo do Gráfico 2 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          <div className="bg-slate-50/50 rounded-xl p-4 text-center">
             <div className="text-xs text-slate-500 font-medium mb-1">6M (126 DU)</div>
             <div className="text-xl font-bold text-navy-900">13.98%</div>
          </div>
          <div className="bg-slate-50/50 rounded-xl p-4 text-center">
             <div className="text-xs text-slate-500 font-medium mb-1">1A (252 DU)</div>
             <div className="text-xl font-bold text-navy-900">13.78%</div>
          </div>
          <div className="bg-slate-50/50 rounded-xl p-4 text-center">
             <div className="text-xs text-slate-500 font-medium mb-1">2A (504 DU)</div>
             <div className="text-xl font-bold text-navy-900">13.70%</div>
          </div>
          <div className="bg-slate-50/50 rounded-xl p-4 text-center">
             <div className="text-xs text-slate-500 font-medium mb-1">3A (756 DU)</div>
             <div className="text-xl font-bold text-navy-900">13.77%</div>
          </div>
        </div>
      </motion.div>
      
    </div>
  );
}
