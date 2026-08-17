"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

export function EpitkezesiIdovonal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            trackEvent("graphic_view", { graphic_name: "epitkezesi_idovonal" });
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
        viewBox="0 0 700 240"
        className="w-full h-auto max-w-full"
        role="img"
        aria-label="Építkezési idővonal illusztráció"
      >
        <title>Építkezési idővonal</title>

        {/* Main timeline line */}
        <line x1="60" y1="100" x2="640" y2="100" stroke="#2A2A35" strokeWidth="2" strokeDasharray="4 4" />
        <line x1="60" y1="100" x2="350" y2="100" stroke="#F5B81C" strokeWidth="2" />

        {/* Station 1: Alapozás */}
        <g transform="translate(80, 100)">
          <circle r="6" fill="#111116" stroke="#8888A0" strokeWidth="2" />
          <text x="0" y="-20" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Alapozás
          </text>
        </g>

        {/* Station 2: Szerkezetkész */}
        <g transform="translate(210, 100)">
          <circle r="6" fill="#111116" stroke="#8888A0" strokeWidth="2" />
          <text x="0" y="-20" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Szerkezetkész
          </text>
        </g>

        {/* Station 3: Vakolás előtt (KIEMELT) */}
        <g transform="translate(350, 100)">
          <circle r="16" fill="#F5B81C" opacity="0.15" />
          <circle r="10" fill="#F5B81C" />
          <circle r="4" fill="#0A0A0C" />
          <text x="0" y="-24" textAnchor="middle" fill="#F5B81C" className="font-mono text-[12px] font-bold">
            Vakolás előtt
          </text>
          <text x="0" y="32" textAnchor="middle" fill="#F5B81C" className="font-mono text-[11px] font-semibold">
            ▲ Itt kell szólni ▲
          </text>
        </g>

        {/* Station 4: Vakolás után */}
        <g transform="translate(490, 100)">
          <circle r="6" fill="#111116" stroke="#8888A0" strokeWidth="2" />
          <text x="0" y="-20" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Vakolás után
          </text>
        </g>

        {/* Station 5: Beköltözés */}
        <g transform="translate(620, 100)">
          <circle r="6" fill="#111116" stroke="#8888A0" strokeWidth="2" />
          <text x="0" y="-20" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Beköltözés
          </text>
        </g>

        {/* Bottom annotations */}
        <g transform="translate(60, 175)">
          <rect x="0" y="0" width="270" height="38" rx="6" fill="#18181F" stroke="#F5B81C" strokeWidth="1" />
          <text x="135" y="23" textAnchor="middle" fill="#F5B81C" className="font-mono text-[11px] font-medium">
            Kábel a falban — pár ezer forint
          </text>
        </g>

        <g transform="translate(370, 175)">
          <rect x="0" y="0" width="270" height="38" rx="6" fill="#18181F" stroke="#2A2A35" strokeWidth="1" />
          <text x="135" y="23" textAnchor="middle" fill="#8888A0" className="font-mono text-[11px]">
            Vésés, javítás, festés
          </text>
        </g>
      </svg>
    </div>
  );
}
