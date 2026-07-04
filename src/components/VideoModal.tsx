"use client";

import { useEffect, useRef } from "react";
import type { PortfolioItem } from "@/lib/portfolio";

interface Props {
  item: PortfolioItem | null;
  onClose: () => void;
}

export default function VideoModal({ item, onClose }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [item]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-bg/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-sm w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={item.poster}
        >
          <source src={item.video} type="video/mp4" />
        </video>

        <div className="mt-4">
          <p className="font-body text-xs font-medium tracking-widest uppercase text-accent">
            {item.type}
          </p>
          <p className="font-display font-bold text-2xl text-text mt-1">
            {item.title}
          </p>
        </div>

        <button
          onClick={onClose}
          className="absolute -top-10 right-0 font-body text-muted hover:text-text transition-colors text-sm"
        >
          Kapat ✕
        </button>
      </div>
    </div>
  );
}
