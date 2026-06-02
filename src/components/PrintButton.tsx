import { Printer } from "lucide-react";

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      aria-label="Imprimir apresentação em PDF"
      className="no-print fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-navy-950 text-white text-sm font-semibold shadow-xl shadow-navy-950/25 hover:bg-navy-800 hover:-translate-y-0.5 transition-all duration-200"
    >
      <Printer className="w-4 h-4" />
      <span className="hidden sm:inline">Imprimir / PDF</span>
    </button>
  );
}
