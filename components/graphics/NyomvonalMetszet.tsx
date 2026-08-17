"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function NyomvonalMetszet() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent("graphic_view", { graphic_name: "nyomvonal_metszet" });
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full rounded-lg border border-[#2A2A35] bg-[#111116] p-6">
      <svg
        viewBox="0 0 600 240"
        className="w-full h-auto max-w-full"
        role="img"
        aria-label="Kábelnyomvonalak elválasztásának keresztmetszete"
      >
        <title>Erős- és Gyengeáram Kábelnyomvonal Metszet</title>

        {/* Helytelen (Rossz) megoldás */}
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="250" height="190" rx="6" fill="#18181F" stroke="#2A2A35" strokeWidth="1" />
          <text x="125" y="25" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Helytelen (Zavarérzékeny)
          </text>

          {/* Fal Horony */}
          <rect x="50" y="45" width="150" height="90" rx="4" fill="#111116" stroke="#2A2A35" strokeWidth="1" />
          
          {/* Cables mixed together */}
          <circle cx="100" cy="90" r="14" fill="#F5B81C" opacity="0.3" stroke="#F5B81C" strokeWidth="2" />
          <text x="100" y="93" textAnchor="middle" fill="#F5B81C" className="font-mono text-[9px]">230V</text>

          <circle cx="125" cy="90" r="10" fill="#8888A0" opacity="0.3" stroke="#8888A0" strokeWidth="2" />
          <text x="125" y="93" textAnchor="middle" fill="#8888A0" className="font-mono text-[8px]">UTP</text>

          <circle cx="145" cy="90" r="8" fill="#8888A0" opacity="0.3" stroke="#8888A0" strokeWidth="2" />
          <text x="145" y="93" textAnchor="middle" fill="#8888A0" className="font-mono text-[8px]">FTP</text>

          {/* Red X icon */}
          <circle cx="125" cy="155" r="12" fill="#E8271A" opacity="0.2" stroke="#E8271A" strokeWidth="1.5" />
          <path d="M 120 150 L 130 160 M 130 150 L 120 160" stroke="#E8271A" strokeWidth="2" />
          <text x="125" y="180" textAnchor="middle" fill="#8888A0" className="font-mono text-[10px]">
            Egy csőben / Zavar lép fel
          </text>
        </g>

        {/* Helyes megoldás */}
        <g transform="translate(320, 20)">
          <rect x="0" y="0" width="250" height="190" rx="6" fill="#18181F" stroke="#F5B81C" strokeWidth="1" opacity="0.8" />
          <text x="125" y="25" textAnchor="middle" fill="#F5B81C" className="font-mono text-[11px] font-bold">
            Helyes (Elválasztott)
          </text>

          {/* Separated Conduit 1: Erősáram */}
          <g transform="translate(40, 45)">
            <rect x="0" y="0" width="70" height="90" rx="4" fill="#111116" stroke="#F5B81C" strokeWidth="1.5" />
            <circle cx="35" cy="45" r="14" fill="#F5B81C" opacity="0.2" stroke="#F5B81C" strokeWidth="2" />
            <text x="35" y="48" textAnchor="middle" fill="#F5B81C" className="font-mono text-[9px] font-bold">230V</text>
            <text x="35" y="105" textAnchor="middle" fill="#F5B81C" className="font-mono text-[9px]">Erősáram</text>
          </g>

          {/* Min distance indicator */}
          <line x1="115" y1="90" x2="135" y2="90" stroke="#F5B81C" strokeWidth="1" strokeDasharray="2 2" />
          <text x="125" y="82" textAnchor="middle" fill="#F5B81C" className="font-mono text-[8px]">min. 10cm</text>

          {/* Separated Conduit 2: Gyengeáram */}
          <g transform="translate(140, 45)">
            <rect x="0" y="0" width="70" height="90" rx="4" fill="#111116" stroke="#8888A0" strokeWidth="1.5" />
            <circle cx="28" cy="45" r="9" fill="#8888A0" opacity="0.2" stroke="#8888A0" strokeWidth="1.5" />
            <text x="28" y="48" textAnchor="middle" fill="#8888A0" className="font-mono text-[8px]">UTP</text>
            <circle cx="48" cy="45" r="7" fill="#8888A0" opacity="0.2" stroke="#8888A0" strokeWidth="1.5" />
            <text x="48" y="48" textAnchor="middle" fill="#8888A0" className="font-mono text-[7px]">FTP</text>
            <text x="35" y="105" textAnchor="middle" fill="#8888A0" className="font-mono text-[9px]">Gyengeáram</text>
          </g>

          {/* Checkmark icon */}
          <circle cx="125" cy="155" r="12" fill="#1AE87B" opacity="0.2" stroke="#1AE87B" strokeWidth="1.5" />
          <path d="M 120 155 L 124 159 L 131 151" stroke="#1AE87B" strokeWidth="2" fill="none" />
          <text x="125" y="180" textAnchor="middle" fill="#F0F0F5" className="font-mono text-[10px] font-semibold">
            Stabil adatátvitel
          </text>
        </g>
      </svg>
    </div>
  );
}
