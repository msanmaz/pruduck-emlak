"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="iletisim" className="py-24 lg:py-32 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-4">
              İletişim
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-text tracking-tight leading-tight mb-6">
              İlanınız İçin
              <br />
              <span className="italic">Hazır mısınız?</span>
            </h2>
            <p className="font-body text-muted leading-relaxed max-w-sm">
              Fotoğraflarınızı gönderin, 24 saat içinde videonuz hazır olsun.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-border flex items-center justify-center text-accent text-xs">
                ig
              </span>
              <a
                href="https://instagram.com/produckcreativeai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-muted hover:text-text transition-colors"
              >
                @produckcreativeai
              </a>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="h-full flex items-center">
                <div>
                  <p className="font-display font-black text-3xl text-accent mb-2">
                    Teşekkürler.
                  </p>
                  <p className="font-body text-muted">
                    Mesajınızı aldık, en kısa sürede döneceğiz.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="font-body text-xs font-medium tracking-widest uppercase text-muted block mb-2">
                    Ad Soyad
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Adınız ve soyadınız"
                    className="w-full bg-bg border border-border text-text font-body text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium tracking-widest uppercase text-muted block mb-2">
                    Telefon / WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0555 000 00 00"
                    className="w-full bg-bg border border-border text-text font-body text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted/50"
                  />
                </div>
                <div>
                  <label className="font-body text-xs font-medium tracking-widest uppercase text-muted block mb-2">
                    Notunuz <span className="text-muted/50 lowercase normal-case">(isteğe bağlı)</span>
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Daire hakkında kısa bilgi..."
                    className="w-full bg-bg border border-border text-text font-body text-sm px-4 py-3 outline-none focus:border-accent transition-colors placeholder:text-muted/50 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full font-body font-medium bg-accent text-bg rounded-full py-4 hover:bg-accent/90 transition-colors"
                >
                  Gönder →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
