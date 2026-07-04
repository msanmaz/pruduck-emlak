const items = [
  "FOTOĞRAF",
  "EDİTÖRYAL GÖRSEL",
  "EV GEZİNTİSİ VİDEOSU",
  "DAHA FAZLA TIKLAMA",
  "DAHA HIZLI SATIŞ",
];

export default function Ticker() {
  const repeated = [...items, ...items];

  return (
    <div className="border-y border-border bg-surface overflow-hidden py-4">
      <div className="flex whitespace-nowrap animate-marquee">
        {repeated.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-6">
            <span className="font-body text-xs font-medium tracking-widest text-muted uppercase">
              {item}
            </span>
            <span className="text-accent text-xs">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
