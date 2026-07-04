const stats = [
  {
    value: "%40",
    label: "Daha fazla tıklanma",
    description: "Video ilanlar standart fotoğraf ilanlarına göre çok daha fazla tıklanır.",
  },
  {
    value: "24 saat",
    label: "Teslimat süresi",
    description: "Fotoğraflarınızı bugün gönderin, videonuz yarın hazır olsun.",
  },
  {
    value: "3×",
    label: "Daha fazla mesaj",
    description: "Video tanıtımlar potansiyel alıcılardan daha güçlü ilk izlenim bırakır.",
  },
];

export default function Stats() {
  return (
    <section className="border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`py-16 px-0 md:px-10 ${
                i < stats.length - 1 ? "border-b md:border-b-0 md:border-r border-border" : ""
              } ${i === 0 ? "md:pl-0" : ""} ${i === stats.length - 1 ? "md:pr-0" : ""}`}
            >
              <p className="font-display font-black italic text-5xl lg:text-6xl text-accent mb-3">
                {stat.value}
              </p>
              <p className="font-body font-medium text-text text-base mb-2">
                {stat.label}
              </p>
              <p className="font-body text-sm text-muted leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
