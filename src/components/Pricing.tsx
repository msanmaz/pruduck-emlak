const includes = [
  "Fotoğraf düzenleme (tüm odalar)",
  "Profesyonel ev gezintisi videosu",
  "Video dosyası ayrıca teslim edilir",
  "24 saat içinde teslimat",
  "Sınırsız revizyon talebi",
];

export default function Pricing() {
  return (
    <section id="fiyat" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-4">
              Fiyatlandırma
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-text tracking-tight leading-tight mb-6">
              Tek fiyat,
              <br />
              <span className="italic">sıfır sürpriz.</span>
            </h2>
            <p className="font-body text-muted leading-relaxed max-w-md">
              Fotoğraf düzenleme ve ev gezintisi videosu tek pakette. Gizli
              ücret yok, abonelik yok.
            </p>
          </div>

          <div className="border border-border bg-surface p-10">
            <p className="font-body text-xs font-medium tracking-widest uppercase text-muted mb-2">
              Tek Daire İçin
            </p>
            <div className="flex items-baseline gap-2 mb-8">
              <span className="font-display font-black italic text-6xl lg:text-7xl text-accent">
                1.500
              </span>
              <span className="font-display font-bold text-2xl text-text">TL</span>
            </div>

            <ul className="space-y-3 mb-10">
              {includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="font-body text-sm text-text">{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-body text-xs text-muted mb-6">KDV hariçtir.</p>

            <a
              href="#iletisim"
              className="block w-full text-center font-body font-medium bg-accent text-bg rounded-full py-4 hover:bg-accent/90 transition-colors"
            >
              Hemen Başlayalım →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
