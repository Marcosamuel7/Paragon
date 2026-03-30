export function Footer() {
  return (
    <footer className="bg-navy-950 py-12 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <div>
          <span className="text-xl font-bold tracking-tighter text-white block mb-1">
            AB Paragon
          </span>
          <span className="text-sm font-medium text-navy-400">
            by Alfa Sec
          </span>
        </div>

        <p className="text-xs text-navy-500 max-w-xl">
          Este material é meramente informativo e não constitui oferta pública de valores mobiliários. Leia atentamente o regulamento e os fatores de risco antes de investir.
        </p>

        <div className="text-xs text-navy-600 font-medium">
          &copy; {new Date().getFullYear()} Alfa Sec. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
