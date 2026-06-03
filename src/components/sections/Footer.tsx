import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="bg-navy-950 py-14 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Entre em contato */}
        <div className="flex flex-col items-center text-center border-b border-navy-900 pb-10 mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-amber-400/80 mb-3">
            Entre em contato
          </span>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-5">
            Fale com a AB Paragon
          </h3>
          <a
            href="mailto:AlfaBP.Sec@proton.me"
            className="inline-flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-6 py-4 text-white font-medium transition-colors"
          >
            <Mail className="w-5 h-5 text-amber-400" />
            AlfaBP.Sec@proton.me
          </a>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xl font-bold tracking-tighter text-white block mb-1">
              AB Paragon
            </span>
            <span className="text-sm font-medium text-navy-400">
              Alfa Sec · Colina
            </span>
          </div>

          <p className="text-xs text-navy-500 max-w-xl">
            Este material é meramente informativo e não constitui oferta pública de valores mobiliários. Leia atentamente o regulamento e os fatores de risco antes de investir.
          </p>

          <div className="text-xs text-navy-600 font-medium">
            &copy; {new Date().getFullYear()} AB Paragon — Alfa Brasil Paragon Securitizadora. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
}
