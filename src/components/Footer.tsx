export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-black text-lg text-text tracking-tight">
          produck<span className="text-accent">+</span>
        </span>
        <p className="font-body text-xs text-muted">
          © 2025 Produck. Tüm hakları saklıdır.
        </p>
        <a
          href="https://instagram.com/produckcreativeai"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-muted hover:text-accent transition-colors"
        >
          @produckcreativeai
        </a>
      </div>
    </footer>
  );
}
