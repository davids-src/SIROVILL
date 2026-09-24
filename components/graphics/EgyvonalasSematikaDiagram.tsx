"use client";

import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export function EgyvonalasSematikaDiagram() {
  return (
    <div className="rounded-xl border border-line bg-panel p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line/60 pb-4 gap-2">
        <div>
          <span className="label text-muted">IPARI & KERESKEDELMI ARCHITEKTÚRA</span>
          <h4 className="mt-1 text-base font-semibold text-ink sm:text-lg">
            Egyvonalas elosztási sematika zónák szerint
          </h4>
        </div>
        <span className="text-xs text-amber font-mono font-semibold">Projektalapú kivitelezés</span>
      </div>

      <div className="relative mt-6 flex justify-center">
        <svg
          viewBox="0 0 800 320"
          className="w-full h-auto max-h-[320px] rounded-lg bg-bg/90"
          aria-label="Egyvonalas elosztó sematika diagram"
        >
          {/* Main Grid Feed */}
          <g transform="translate(40, 130)">
            <rect x="0" y="0" width="130" height="70" rx="4" fill="#1A1A22" stroke="#8888A0" strokeWidth="2" />
            <text x="15" y="25" fill="#8888A0" fontSize="10" fontWeight="700">MÉRŐHELY / BETÁP</text>
            <text x="15" y="45" fill="#F0F0F5" fontSize="12" fontWeight="700">Főmegszakító</text>
            <text x="15" y="60" fill="#8888A0" fontSize="9">400V 3F Érkezés</text>
          </g>

          {/* Main Distribution Line */}
          <line x1="170" y1="165" x2="240" y2="165" stroke={ACCENT} strokeWidth="3" />
          <polygon points="235,160 245,165 235,170" fill={ACCENT} />

          {/* Main Switchboard (Főelosztó FŐ-EL) */}
          <g transform="translate(245, 80)">
            <rect x="0" y="0" width="160" height="170" rx="6" fill="#1A1A22" stroke={ACCENT} strokeWidth="2" />
            <text x="15" y="25" fill={ACCENT} fontSize="12" fontWeight="800">FŐELOSZTÓ (FŐ-EL)</text>
            <line x1="15" y1="35" x2="145" y2="35" stroke="#2A2A35" />

            <rect x="15" y="45" width="130" height="25" rx="3" fill={`${ACCENT}20`} />
            <text x="25" y="62" fill="#F0F0F5" fontSize="11" fontWeight="600">Szelektív Védelmek</text>

            <rect x="15" y="80" width="130" height="25" rx="3" fill="#2A2A35" />
            <text x="25" y="97" fill="#F0F0F5" fontSize="10">Fázisjavítás / Leválasztó</text>

            <rect x="15" y="115" width="130" height="35" rx="3" fill="#111116" stroke="#2A2A35" />
            <text x="25" y="136" fill="#8888A0" fontSize="10">Kábeltálca kimenetek</text>
          </g>

          {/* Branch Lines to Sub-panels */}
          <path d="M 405 110 L 480 110 L 480 60 L 520 60" stroke={ACCENT} strokeWidth="2" fill="none" />
          <path d="M 405 165 L 520 165" stroke={ACCENT} strokeWidth="2" fill="none" />
          <path d="M 405 220 L 480 220 L 480 270 L 520 270" stroke={ACCENT} strokeWidth="2" fill="none" />

          {/* Zone 1: Alelosztó - Műhely / Gépsor */}
          <g transform="translate(520, 30)">
            <rect x="0" y="0" width="240" height="65" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="22" fill={ACCENT} fontSize="11" fontWeight="700">1. Alelosztó: Műhely & Gépbetápok</text>
            <text x="15" y="42" fill="#8888A0" fontSize="10">Motorvédők, CNC / Gyártógép csatlakozók</text>
          </g>

          {/* Zone 2: Alelosztó - Világítás & Klíma */}
          <g transform="translate(520, 135)">
            <rect x="0" y="0" width="240" height="65" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="22" fill={ACCENT} fontSize="11" fontWeight="700">2. Alelosztó: Csarnok világítás & HVAC</text>
            <text x="15" y="42" fill="#8888A0" fontSize="10">Magaslégtéri LED csarnokvilágítók, elszívás</text>
          </g>

          {/* Zone 3: Alelosztó - Iroda & Szociális Blokkrész */}
          <g transform="translate(520, 240)">
            <rect x="0" y="0" width="240" height="65" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="22" fill={ACCENT} fontSize="11" fontWeight="700">3. Alelosztó: Iroda & Kiszolgáló zóna</text>
            <text x="15" y="42" fill="#8888A0" fontSize="10">Dugaljak, informatikai szünetmentes áramkörök</text>
          </g>
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted">
        Áttekinthető hierarchikus elosztóstruktúra műhelyek és telephelyek részére, megbízható leválasztási és karbantartási pontokkal.
      </p>
    </div>
  );
}
