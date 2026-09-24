"use client";

import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export function FelujitasAlaprajzDiagram() {
  return (
    <div className="rounded-xl border border-line bg-panel p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line/60 pb-4 gap-2">
        <div>
          <span className="label text-muted">FELÚJÍTÁSI ÁRAMKÖR TERVEZÉS</span>
          <h4 className="mt-1 text-base font-semibold text-ink sm:text-lg">
            Meglévő megtartott & új dedikált áramkörök
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm bg-[#8888A0]" />
            <span className="text-muted">Meglévő áramkör</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-sm" style={{ background: ACCENT }} />
            <span className="text-ink font-semibold">Új dedikált áramkör</span>
          </div>
        </div>
      </div>

      <div className="relative mt-6 flex justify-center">
        <svg
          viewBox="0 0 800 340"
          className="w-full h-auto max-h-[340px] rounded-lg bg-bg/90"
          aria-label="Felújítás alaprajz diagram"
        >
          {/* Outer floor plan wall */}
          <rect x="20" y="20" width="760" height="300" rx="6" fill="#111116" stroke="#2A2A35" strokeWidth="3" />

          {/* Room divisions */}
          <line x1="260" y1="20" x2="260" y2="320" stroke="#2A2A35" strokeWidth="2" />
          <line x1="520" y1="20" x2="520" y2="320" stroke="#2A2A35" strokeWidth="2" />
          <line x1="260" y1="170" x2="780" y2="170" stroke="#2A2A35" strokeWidth="2" />

          {/* Room Labels */}
          <text x="40" y="45" fill="#8888A0" fontSize="11" fontWeight="700" letterSpacing="1">
            ELŐSZOBA & FŐELOSZTÓ
          </text>
          <text x="280" y="45" fill="#8888A0" fontSize="11" fontWeight="700" letterSpacing="1">
            KONYHA & ÉTKEZŐ
          </text>
          <text x="540" y="45" fill="#8888A0" fontSize="11" fontWeight="700" letterSpacing="1">
            NAPPALI & MUNKATÉR
          </text>
          <text x="280" y="195" fill="#8888A0" fontSize="11" fontWeight="700" letterSpacing="1">
            FÜRDŐSZOBÁSKÖR
          </text>
          <text x="540" y="195" fill="#8888A0" fontSize="11" fontWeight="700" letterSpacing="1">
            HÁLÓSZOBA
          </text>

          {/* Main Distribution Panel (Főelosztó) */}
          <g transform="translate(40, 70)">
            <rect x="0" y="0" width="180" height="210" rx="6" fill="#1A1A22" stroke={ACCENT} strokeWidth="2" />
            <text x="15" y="25" fill="#F0F0F5" fontSize="12" fontWeight="700">
              KORSZERŰSÍTETT ELOSZTÓ
            </text>
            <line x1="15" y1="35" x2="165" y2="35" stroke="#2A2A35" />

            {/* FI Relay */}
            <rect x="15" y="45" width="150" height="28" rx="3" fill={`${ACCENT}25`} stroke={ACCENT} />
            <text x="25" y="64" fill={ACCENT} fontSize="11" fontWeight="700">
              FI-Relé 30mA (Érintésvédelem)
            </text>

            {/* Circuit Breakers list */}
            <g transform="translate(15, 82)">
              <rect x="0" y="0" width="150" height="20" fill="#2A2A35" rx="2" />
              <text x="8" y="14" fill="#F0F0F5" fontSize="10">K1: Meglévő világítás (6A)</text>

              <rect x="0" y="24" width="150" height="20" fill={ACCENT} rx="2" />
              <text x="8" y="38" fill="#0A0A0C" fontSize="10" fontWeight="700">K2: Indukciós főzőlap (16A)</text>

              <rect x="0" y="48" width="150" height="20" fill={ACCENT} rx="2" />
              <text x="8" y="62" fill="#0A0A0C" fontSize="10" fontWeight="700">K3: Klíma dedikált kör (10A)</text>

              <rect x="0" y="72" width="150" height="20" fill={ACCENT} rx="2" />
              <text x="8" y="86" fill="#0A0A0C" fontSize="10" fontWeight="700">K4: Mosógép/Sütő (16A)</text>
            </g>
          </g>

          {/* Wiring paths to rooms */}
          {/* K2 Főzőlap line */}
          <path d="M 220 135 L 300 135 L 300 90 L 380 90" stroke={ACCENT} strokeWidth="2.5" fill="none" />
          <circle cx="380" cy="90" r="7" fill={ACCENT} />
          <text x="395" y="94" fill="#F0F0F5" fontSize="11" fontWeight="600">Új Főzőlap kiállás</text>

          {/* K3 Klíma line */}
          <path d="M 220 160 L 560 160 L 560 90 L 640 90" stroke={ACCENT} strokeWidth="2.5" fill="none" />
          <circle cx="640" cy="90" r="7" fill={ACCENT} />
          <text x="655" y="94" fill="#F0F0F5" fontSize="11" fontWeight="600">Új Klíma áramkör</text>

          {/* K4 Mosógép line */}
          <path d="M 220 185 L 300 185 L 300 240 L 380 240" stroke={ACCENT} strokeWidth="2.5" fill="none" />
          <circle cx="380" cy="240" r="7" fill={ACCENT} />
          <text x="395" y="244" fill="#F0F0F5" fontSize="11" fontWeight="600">Új Mosógép kör</text>

          {/* Existing kept lines */}
          <path d="M 220 110 L 600 110 L 600 240 L 650 240" stroke="#8888A0" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
          <circle cx="650" cy="240" r="5" fill="#8888A0" />
          <text x="662" y="244" fill="#8888A0" fontSize="11">Meglévő dugaljak</text>
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted">
        A felújítás során a biztonságos meglévő áramköröket megőrizzük, míg az új nagyfogyasztók (főzőlap, klíma, mosógép) saját védelemmel ellátott dedikált áramköröket kapnak.
      </p>
    </div>
  );
}
