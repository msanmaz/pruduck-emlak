"use client";

import type { PortfolioItem } from "@/lib/portfolio";

interface Props {
  item: PortfolioItem;
  onOpen: (item: PortfolioItem) => void;
}

export default function VideoCard({ item, onOpen }: Props) {
  return (
    <button
      className="relative aspect-[9/16] w-full overflow-hidden bg-surface group cursor-pointer text-left"
      onClick={() => onOpen(item)}
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src={item.video} type="video/mp4" />
      </video>

      {/* Always-dark gradient so text stays readable regardless of theme */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1B1D]/90 via-transparent to-transparent" />

      {/* Labels — pinned to light since always over dark video */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p className="font-body text-xs font-medium tracking-widest uppercase text-accent mb-1">
          {item.type}
        </p>
        <p className="font-display font-bold text-xl text-[#F2EAD8] leading-tight">
          {item.title}
        </p>
        <p className="font-body text-sm text-[#B8AFA4]">{item.location}</p>
      </div>
    </button>
  );
}
