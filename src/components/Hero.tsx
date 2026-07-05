"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/videos/tour-01.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B1D] via-[#1A1B1D]/60 to-[#1A1B1D]/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-20 w-full">
        <div className="max-w-3xl">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-6">
            Emlak Medya Hizmetleri
          </p>
          <h1 className="font-display font-black text-[clamp(1.75rem,7vw,5.5rem)] text-[#F2EAD8] leading-[0.95] tracking-tight mb-8">
            İlan Fotoğrafınızı
            <br />
            <span className="italic text-accent">Ev Gezintisi</span>
            <br />
            Videosuna
            <br />
            Dönüştürüyoruz.
          </h1>
          <p className="font-body text-[#B8AFA4] text-lg mb-10 max-w-lg leading-relaxed">
            Ortalama kalitedeki ilan görsellerinizi düzenliyor, daha kaliteli
            hale getiriyor ve videolu sunuma çeviriyoruz.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#calismarimiz"
              className="font-body font-medium bg-accent text-[#F2F3F4] rounded-full px-7 py-3 hover:bg-accent/90 transition-colors"
            >
              Örnek Videolar
            </a>
            <a
              href="#fiyat"
              className="font-body text-sm text-[#B8AFA4] hover:text-[#F2EAD8] transition-colors flex items-center gap-2"
            >
              1.500 TL <span className="text-accent">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
