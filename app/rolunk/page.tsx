import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export const metadata: Metadata = {
  title: "Rólunk — SIROVILL villanyszerelés",
  description: "A SIROVILL a SIROTECH Informatikai és Biztonságtechnikai Kft. divíziója — villanyszerelési szolgáltatással bővítjük azt, amit eddig is csináltunk.",
  openGraph: { title: "Rólunk — SIROVILL", url: "https://sirovill.hu/rolunk" },
  alternates: { canonical: "https://sirovill.hu/rolunk" },
};

const team = [
  { nev: "Skoda Dávid", szerep: "SIRONIC, SIRO-VÉD — Biztonságtechnika, Hálózat és IT" },
  { nev: "Tóth Tamás", szerep: "SIROSOFT — Szoftver és webfejlesztés" },
  { nev: "Villanyszerelő kollégánk", szerep: "SIROVILL — Épületvillamosság" },
];

const bizalmi = [
  { cimke: "Cégjegyzékszám", ertek: SITE.cegjegyzekszam },
  { cimke: "Adószám", ertek: SITE.adoszam },
  { cimke: "Felelősségbiztosítás", ertek: "Rendelkezünk" },
];

export default function RolunkPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>SIROTECH GROUP</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold text-ink sm:text-5xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              A SIROVILL
            </h1>
            <p className="mt-5 text-base text-muted sm:text-lg">
              A SIROVILL a SIROTECH Informatikai és Biztonságtechnikai Kft. divíziója — villanyszerelési szolgáltatással bővítjük azt, amit eddig is csináltunk.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        <Reveal className="max-w-3xl">
          <p className="text-base text-ink sm:text-lg">
            2021 óta dolgozunk informatikai és biztonságtechnikai területen. Eddig is mi kábeleztünk a hálózat- és kamerarendszer-telepítéseknél — saját villanyszerelő kollégával kiegészülve egy csapat tudja végigvinni a teljes kivitelezést az erősáramtól a hálózatig.
          </p>
        </Reveal>
      </Section>

      <Section className="border-t border-line/50">
        <Reveal>
          <Eyebrow accent={ACCENT}>CSAPAT</Eyebrow>
          <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Aki a munkát végzi
          </h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.nev} delay={i * 0.08}>
              <div className="rounded-lg border border-line bg-surface p-6">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-full border-2 font-display text-xl font-semibold"
                  style={{
                    borderColor: ACCENT,
                    color: ACCENT,
                    background: `${ACCENT}12`,
                  }}
                >
                  {m.nev.split(" ").map((n) => n[0]).join("")}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{m.nev}</h3>
                <p className="mt-1 text-sm text-muted">{m.szerep}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="border-t border-line/50">
        <Reveal>
          <Eyebrow accent={ACCENT}>HÁTTÉR</Eyebrow>
          <h2 className="mt-6 text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
            Engedélyes, felelősségbiztosítással dolgozó vállalkozás
          </h2>
        </Reveal>
        <Reveal className="mt-10">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {bizalmi.map((b) => (
              <div key={b.cimke} className="bg-surface p-6">
                <div className="flex items-center gap-2">
                  <Check size={18} strokeWidth={1.5} style={{ color: ACCENT }} />
                  <span className="label text-muted">{b.cimke}</span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-ink">{b.ertek}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="mt-10">
          <ButtonLink to="/kapcsolat?forras=sirovill-rolunk" variant="accent">
            Kapcsolatfelvétel
          </ButtonLink>
        </Reveal>
      </Section>
    </>
  );
}
