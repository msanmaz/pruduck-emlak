"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-bg/80 border-b border-border"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <a
          href="/"
          className="font-display font-black text-xl text-text tracking-tight"
        >
          produck<span className="text-accent">+</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {[
            ["Çalışmalar", "#calismarimiz"],
            ["Nasıl Çalışır", "#surec"],
            ["Fiyat", "#fiyat"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="font-body text-sm text-muted hover:text-text transition-colors duration-200 tracking-wide"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#iletisim"
          className="font-body text-sm font-medium border border-accent text-accent hover:bg-accent hover:text-bg transition-all duration-200 rounded-full px-5 py-2"
        >
          İletişim →
        </a>
      </div>
    </header>
  );
}
