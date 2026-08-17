import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export const metadata: Metadata = {
  title: "Általános szerződési feltételek",
  description: "A SIROVILL általános szerződési feltételei a villanyszerelési szolgáltatásokra.",
  openGraph: { title: "ÁSZF — SIROVILL", url: "https://sirovill.hu/aszf" },
  alternates: { canonical: "https://sirovill.hu/aszf" },
};

export default function AszfPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>JOGI</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold text-ink sm:text-5xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Általános szerződési feltételek
            </h1>
          </Reveal>
        </div>
      </section>
      <Section>
        <Reveal className="max-w-3xl">
          <div className="prose-legal">
            <h2>1. A szolgáltató adatai</h2>
            <p><strong className="text-ink">Cégnév:</strong> {SITE.cegnev}</p>
            <p><strong className="text-ink">Cím:</strong> {SITE.cim}</p>
            <p><strong className="text-ink">E-mail:</strong> <a href={`mailto:${SITE.email}`}>{SITE.email}</a></p>
            <p><strong className="text-ink">Telefon:</strong> <a href={SITE.telefonHref}>{SITE.telefon}</a></p>
            <p><strong className="text-ink">Adószám:</strong> {SITE.adoszam}</p>
            <p><strong className="text-ink">Cégjegyzékszám:</strong> {SITE.cegjegyzekszam}</p>
            <p><strong className="text-ink">Nyilvántartó:</strong> {SITE.nyilvantarto}</p>
            <h2>2. A szolgáltatás köre</h2>
            <p>A SIROVILL a {SITE.cegnev} villanyszerelési divíziója. A szolgáltató épületvillamossági kivitelezést, felújítást, korszerűsítést, hibaelhárítást, kábelezést és okosotthon-vezérlést végez.</p>
            <p>Szolgáltatási terület: {SITE.szolgaltatasiTerulet}.</p>
            <h2>3. A kivitelezés időzítése</h2>
            <p>A kivitelezés időpontját a díjmentes helyszíni felmérést követően egyeztetjük a megrendelővel.</p>
            <h2>4. Felmérés és ajánlatadás</h2>
            <p>A szolgáltató díjmentes helyszíni felmérést kínál, és rögzített áras ajánlatot ad. Az ajánlatban szereplő ár a kivitelezés megkezdéséig rögzített marad.</p>
            <h2>5. Nem vállalt tevékenységek</h2>
            <ul>
              <li>Érintésvédelmi felülvizsgálat</li>
              <li>Szabványossági felülvizsgálat</li>
              <li>Villámvédelmi felülvizsgálat</li>
              <li>Bármilyen felülvizsgálati jegyzőkönyv kiállítása</li>
              <li>Mérőhely-kialakítás</li>
              <li>Fogyasztásmérő bekötése</li>
              <li>EPH-mérés</li>
              <li>Tűzvédelmi minősítés</li>
            </ul>
            <p>Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt partnerünkkel biztosítjuk.</p>
            <h2>6. Árazás és fizetés</h2>
            <p>A kivitelezés ára a felmérés utáni rögzített áras ajánlatban kerül meghatározásra. Az ajánlat a kivitelezés megkezdéséig nem változik.</p>
            <h2>7. Felelősség</h2>
            <p>A szolgáltató a vállalt munkáért a vonatkozó jogszabályok szerint felel. A szolgáltató felelősségbiztosítással rendelkezik.</p>
            <h2>8. Adatkezelés</h2>
            <p>A megrendelő személyes adatainak kezelése az <a href="/adatvedelem">adatkezelési tájékoztató</a> szerint történik.</p>
            <h2>9. Hatály</h2>
            <p>Jelen általános szerződési feltételek 2026. augusztus 17-től hatályosak.</p>
            <p className="mt-8 text-xs text-muted">Utolsó frissítés: 2026. augusztus 17.</p>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
