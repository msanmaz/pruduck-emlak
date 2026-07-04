"use client";

import { useState } from "react";
import Image from "next/image";

export default function BeforeAfter() {
  const [position, setPosition] = useState(50);

  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Fark Nedir?
          </p>
          <h2 className="font-display font-black text-4xl md:text-5xl text-text tracking-tight leading-tight">
            Ham Fotoğraftan
            <br />
            <span className="italic">Profesyonel Görsele.</span>
          </h2>
        </div>

        <div
          className="relative w-full max-w-2xl mx-auto overflow-hidden bg-surface select-none"
          style={{ aspectRatio: "1464/1544" }}
        >
          {/* AFTER — base layer, always full width */}
          <Image
            src="/images/after.jpeg"
            alt="Düzenlenmiş profesyonel görsel"
            fill
            className="object-cover object-top"
            sizes="(max-width: 672px) 100vw, 672px"
            priority
          />

          {/* BEFORE — on top, clips from the right as handle moves right */}
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)`, transition: "none" }}
          >
            <Image
              src="/images/before.jpeg"
              alt="Ham ilan fotoğrafı"
              fill
              className="object-cover object-top"
              sizes="(max-width: 672px) 100vw, 672px"
              priority
            />
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <span className="font-body text-xs font-medium tracking-widest uppercase bg-bg/80 text-muted px-3 py-1.5">
              Ham Fotoğraf
            </span>
          </div>
          <div className="absolute top-4 right-4 pointer-events-none">
            <span className="font-body text-xs font-medium tracking-widest uppercase bg-accent text-bg px-3 py-1.5">
              Düzenlenmiş
            </span>
          </div>

          {/* Vertical divider line + amber handle */}
          <div
            className="absolute top-0 bottom-0 w-px bg-accent pointer-events-none"
            style={{ left: `${position}%`, transition: "none" }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-accent shadow-xl flex items-center justify-center">
              <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
                <path d="M6 1L1 7L6 13" stroke="#0C0A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 1L17 7L12 13" stroke="#0C0A08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          {/* Range input — invisible, covers full image, owns all drag */}
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
            aria-label="Fotoğraf karşılaştırma kaydırıcısı"
          />
        </div>

        <p className="font-body text-xs text-muted mt-4 text-center tracking-wide max-w-2xl mx-auto">
          ← Sürükleyerek farkı görün →
        </p>
      </div>
    </section>
  );
}
