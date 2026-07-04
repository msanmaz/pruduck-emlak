const steps = [
  {
    number: "01",
    title: "Fotoğrafları Gönderin",
    description:
      "Elinizdeki ilan fotoğraflarını WhatsApp veya e-posta ile bize iletmeniz yeterli.",
  },
  {
    number: "02",
    title: "Biz Düzenleriz",
    description:
      "Görselleri profesyonel olarak düzenliyor, ardından akıcı bir ev gezintisi videosu hazırlıyoruz.",
  },
  {
    number: "03",
    title: "Videonuz Hazır",
    description:
      "24 saat içinde video dosyası ve düzenlenmiş fotoğraflar size ayrıca iletilir.",
  },
];

export default function Process() {
  return (
    <section id="surec" className="py-24 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Nasıl Çalışır?
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-text tracking-tight">
            Üç adımda
            <br />
            <span className="italic">hazır.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`relative py-10 ${
                i < steps.length - 1
                  ? "md:pr-12 lg:pr-16 border-b md:border-b-0 md:border-r border-border"
                  : ""
              } ${i > 0 ? "md:pl-12 lg:pl-16" : ""}`}
            >
              {/* Connecting arrow */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 right-0 translate-x-1/2 text-accent text-sm">
                  →
                </div>
              )}

              <p className="font-display font-black text-6xl text-border leading-none mb-6 select-none">
                {step.number}
              </p>
              <h3 className="font-body font-medium text-lg text-text mb-3">
                {step.title}
              </h3>
              <p className="font-body text-sm text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-10 border-t border-border">
          <p className="font-body text-sm text-muted italic">
            Ortalama teslimat süresi: <span className="text-text not-italic">24 saat</span>
          </p>
        </div>
      </div>
    </section>
  );
}
