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
  Legend
} from "recharts";

// Dados mock baseados no print providenciado
const comparisonData = [
  { label: "0 anos", alfaSec: 100000, cdi: 100000, portfolio: 100000 },
  { label: "0.5 anos", alfaSec: 106152, cdi: 106650, portfolio: 108150 },
  { label: "1 ano", alfaSec: 112682, cdi: 113700, portfolio: 117000 },
  { label: "1.5 anos", alfaSec: 119614, cdi: 121300, portfolio: 126500 },
  { label: "2 anos", alfaSec: 126973, cdi: 129400, portfolio: 136800 },
  { label: "2.5 anos", alfaSec: 134784, cdi: 138000, portfolio: 147800 },
  { label: "3 anos", alfaSec: 143078, cdi: 147276, portfolio: 158234 },
];

const diData = [
  { label: "Atual", rate: 14.58 },
  { label: "6M (126 DU)", rate: 13.98 },
  { label: "1A (252 DU)", rate: 13.78 },
  { label: "2A (504 DU)", rate: 13.70 },
  { label: "3A (756 DU)", rate: 13.77 },
];

// Helper functions for formatting
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

// Custom Tooltips para os gráficos
const CustomLineTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border border-slate-200 shadow-xl rounded-xl">
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
      <div className="bg-white p-3 border border-slate-200 shadow-xl rounded-lg">
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
          <h3 className="text-xl md:text-2xl font-bold text-navy-950">Comparativo: Alfa 1% a.m. vs Portfólio Alfa vs 100% CDI</h3>
          <p className="text-slate-500 mt-2 text-sm">
            Investimento inicial de R$ 100.000 • Vencimento em 3 anos<br/>
            <span className="font-medium text-navy-800">Diferença final: <span className="text-emerald-600">R$ 10.958 a favor da Alfa</span></span>
          </p>
        </div>

        <div className="h-[300px] sm:h-[400px] w-full mt-6">
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
                domain={[95000, 163000]}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip content={<CustomLineTooltip />} />
              <Legend content={<CustomLegend />} wrapperStyle={{ paddingTop: '20px' }} />
              
              <Line 
                name="Alfa Sec (1% a.m.)"
                type="monotone" 
                dataKey="alfaSec" 
                stroke="#0f172a" 
                strokeWidth={2}
                dot={{ r: 3, fill: "#0f172a" }}
                activeDot={{ r: 6 }}
              />
              <Line 
                name="100% CDI"
                type="monotone" 
                dataKey="cdi" 
                stroke="#eab308" 
                strokeWidth={2} 
                strokeDasharray="5 5"
                dot={{ r: 3, fill: "#eab308" }}
              />
              <Line 
                name="Portfólio Alfa (120% CDI)"
                type="monotone" 
                dataKey="portfolio" 
                stroke="#10b981" 
                strokeWidth={2}
                dot={{ r: 3, fill: "#10b981" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Cards Info Embaixo do Gráfico 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-left flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">Alfa Sec (36m)</span>
            <span className="text-2xl font-black text-navy-900 mb-1">R$ 143.078</span>
            <span className="text-sm font-medium text-slate-500">Retorno: 43.1%</span>
          </div>
          <div className="bg-emerald-50/50 border border-emerald-100 rounded-xl p-5 text-left flex flex-col justify-between shadow-sm">
            <span className="text-xs font-bold text-emerald-600/80 mb-1 uppercase tracking-wider">Portfólio Alfa (36m)</span>
            <span className="text-2xl font-black text-emerald-600 mb-1">R$ 158.234</span>
            <span className="text-sm font-medium text-emerald-600/80">Retorno: 58.2%</span>
          </div>
          <div className="bg-amber-50/30 border border-amber-100/50 rounded-xl p-5 text-left flex flex-col justify-between">
            <span className="text-xs font-bold text-slate-500 mb-1 uppercase tracking-wider">100% CDI (36m)</span>
            <span className="text-2xl font-black text-amber-500 mb-1">R$ 147.276</span>
            <span className="text-sm font-medium text-slate-500">Retorno: 47.3%</span>
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
            Taxas de juros futuros por vencimento — referência: 02/04/2026
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
