"use client";

import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export function IrodaAlaprajzDiagram() {
  return (
    <div className="rounded-xl border border-line bg-panel p-6 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-line/60 pb-4 gap-2">
        <div>
          <span className="label text-muted">ÜZLETI ÉS IRODAI INFRASTRUKTÚRA</span>
          <h4 className="mt-1 text-base font-semibold text-ink sm:text-lg">
            Munkaállomások, világítás és rack szekrény kiállások
          </h4>
        </div>
        <div className="flex items-center gap-3 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full" style={{ background: ACCENT }} />
            <span className="text-ink font-semibold">230V Munkaállomás</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-3 w-3 rounded-full bg-[#1A6BE8]" />
            <span className="text-muted">Rack / LAN végpont</span>
          </div>
        </div>
      </div>

      <div className="relative mt-6 flex justify-center">
        <svg
          viewBox="0 0 800 340"
          className="w-full h-auto max-h-[340px] rounded-lg bg-bg/90"
          aria-label="Iroda villamos és gyengeáram alaprajz diagram"
        >
          {/* Outer Office Boundary */}
          <rect x="20" y="20" width="760" height="300" rx="6" fill="#111116" stroke="#2A2A35" strokeWidth="3" />

          {/* Office Zones */}
          {/* Server / Rack Room */}
          <rect x="30" y="30" width="180" height="130" rx="4" fill="#1A1A22" stroke="#2A2A35" />
          <text x="45" y="55" fill="#8888A0" fontSize="11" fontWeight="700">RACK & SZERSZOBA</text>
          
          {/* Rack cabinet icon */}
          <rect x="45" y="70" width="60" height="75" rx="3" fill="#111116" stroke="#1A6BE8" strokeWidth="2" />
          <line x1="55" y1="85" x2="95" y2="85" stroke="#1A6BE8" strokeWidth="2" />
          <line x1="55" y1="95" x2="95" y2="95" stroke="#1A6BE8" strokeWidth="2" />
          <line x1="55" y1="105" x2="95" y2="105" stroke="#1A6BE8" strokeWidth="2" />
          <circle cx="90" cy="125" r="3" fill="#1AE87B" />
          <text x="115" y="90" fill="#1A6BE8" fontSize="10" fontWeight="700">Central</text>
          <text x="115" y="105" fill="#1A6BE8" fontSize="10" fontWeight="700">Rack 19&quot;</text>
          <text x="115" y="125" fill="#8888A0" fontSize="9">LAN / IT</text>

          {/* Teakonyha */}
          <rect x="30" y="175" width="180" height="135" rx="4" fill="#1A1A22" stroke="#2A2A35" />
          <text x="45" y="200" fill="#8888A0" fontSize="11" fontWeight="700">TEAKONYHA & KLÍMA</text>
          <circle cx="65" cy="240" r="8" fill={ACCENT} />
          <text x="80" y="244" fill="#F0F0F5" fontSize="11">Mikró / Kávéfőző kör</text>

          {/* Open Office area */}
          <rect x="230" y="30" width="530" height="280" rx="4" fill="#15151C" stroke="#2A2A35" />
          <text x="250" y="55" fill="#8888A0" fontSize="11" fontWeight="700">NYÍLT IRODATÉR (WORKSTATION DESKS)</text>

          {/* Desk Island 1 */}
          <g transform="translate(260, 80)">
            <rect x="0" y="0" width="210" height="90" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="22" fill="#8888A0" fontSize="10">Munkaállomás sziget A</text>
            
            <circle cx="40" cy="55" r="7" fill={ACCENT} />
            <circle cx="60" cy="55" r="7" fill="#1A6BE8" />
            <text x="75" y="59" fill="#F0F0F5" fontSize="11" fontWeight="600">4x 230V + 2x Cat6</text>
          </g>

          {/* Desk Island 2 */}
          <g transform="translate(520, 80)">
            <rect x="0" y="0" width="210" height="90" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="22" fill="#8888A0" fontSize="10">Munkaállomás sziget B</text>

            <circle cx="40" cy="55" r="7" fill={ACCENT} />
            <circle cx="60" cy="55" r="7" fill="#1A6BE8" />
            <text x="75" y="59" fill="#F0F0F5" fontSize="11" fontWeight="600">4x 230V + 2x Cat6</text>
          </g>

          {/* LED Lighting grid representation */}
          <g transform="translate(260, 200)">
            <rect x="0" y="0" width="470" height="90" rx="4" fill="#1A1A22" stroke="#2A2A35" />
            <text x="15" y="22" fill="#8888A0" fontSize="10">Zónás LED Panel Világítás & Jelenlétérzékelők</text>
            
            <rect x="30" y="40" width="80" height="15" rx="2" fill={`${ACCENT}40`} stroke={ACCENT} />
            <rect x="150" y="40" width="80" height="15" rx="2" fill={`${ACCENT}40`} stroke={ACCENT} />
            <rect x="270" y="40" width="80" height="15" rx="2" fill={`${ACCENT}40`} stroke={ACCENT} />
            <text x="30" y="75" fill={ACCENT} fontSize="10">60x60 LED panelek (UGR&lt;19 szabványos irodai fény)</text>
          </g>
        </svg>
      </div>

      <p className="mt-4 text-xs text-muted">
        Összehangolt padlócsatornák és szerelvénycsatornák kiépítése, így a munkaasztalok átrendezésekor az áram és a LAN végpontok azonnal hozzáférhetők maradnak.
      </p>
    </div>
  );
}
