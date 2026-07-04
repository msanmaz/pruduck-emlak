"use client";

import { useState } from "react";
import { portfolioItems } from "@/lib/portfolio";
import type { PortfolioItem } from "@/lib/portfolio";
import VideoCard from "./VideoCard";
import VideoModal from "./VideoModal";

export default function PortfolioGrid() {
  const [activeItem, setActiveItem] = useState<PortfolioItem | null>(null);

  return (
    <section id="calismarimiz" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-4">
              Çalışmalarımız
            </p>
            <h2 className="font-display font-black text-4xl md:text-5xl text-text tracking-tight leading-tight">
              Ürettiğimiz
              <br />
              <span className="italic">Ev Gezintileri.</span>
            </h2>
          </div>
          <p className="hidden md:block font-body text-sm text-muted max-w-xs text-right leading-relaxed">
            Her video, alıcının evi zaten görmüş gibi hissettirmek için
            tasarlanmıştır.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioItems.map((item) => (
            <VideoCard key={item.id} item={item} onOpen={setActiveItem} />
          ))}
        </div>
      </div>

      <VideoModal item={activeItem} onClose={() => setActiveItem(null)} />
    </section>
  );
}
