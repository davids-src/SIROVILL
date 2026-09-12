"use client";

import { Check, ArrowRight, Building2, ShieldCheck, BadgeCheck } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink, TextLink } from "@/components/Button";
import { Card, Chip } from "@/components/Card";
import { ServiceIcon } from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/services";
import { SITE, DIVIZIOK } from "@/lib/site";
import { EpitkezesiIdovonal } from "@/components/graphics/EpitkezesiIdovonal";
import { trackEvent } from "@/lib/analytics";

const ACCENT = SITE.accent;

const heroBullets = [
  "A felmérés ingyen van",
  "Az ár rögzített — annyi lesz, amennyit mondtunk",
  "A hálózatot és a kamerát is mi szereljük, ha kell",
];

const stats = [
  { ertek: "1 munkanap", cimke: "ENNYI ALATT VISSZAHÍVUNK" },
  { ertek: "Fejér m. · Budapest", cimke: "IDE JÁRUNK KI" },
  { ertek: "Rögzített ár", cimke: "NINCS UTÓLAGOS MEGLEPETÉS" },
];

const hogyanDolgozunkKartyak = [
  {
    szam: "01",
    cim: "Felmérés",
    szoveg: "Kimegyünk, megnézzük, mi van, és megbeszéljük, mi kellene. Ingyen.",
  },
  {
    szam: "02",
    cim: "Árajánlat",
    szoveg: "Tételesen leírjuk, mi mennyibe kerül. Ez az ár marad.",
  },
  {
    szam: "03",
    cim: "Ütemezés",
    szoveg: "Megbeszéljük, mikor jövünk — úgy, hogy a többi mesterrel ne akadjunk össze.",
  },
  {
    szam: "04",
    cim: "Kivitelezés",
    szoveg: "Megcsináljuk, és átadáskor végigmegyünk rajta, mi hova került.",
  },
];

const gyikKerdesek = [
  {
    kerdes: "Mennyi idő alatt tudnak kezdeni?",
    valasz:
      "Attól függ, mekkora a munka és mi van épp folyamatban. A felmérés után konkrét dátumot mondunk, és azt tartjuk.",
  },
  {
    kerdes: "Meddig érvényes az árajánlat?",
    valasz:
      "A kivitelezésig. Ha menet közben változtat valamin, azt előre megbeszéljük.",
  },
  {
    kerdes: "Miért nem vállalnak felülvizsgálatot?",
    valasz:
      "Mert az külön jogosultsághoz kötött, és mi arra nem vagyunk feljogosítva. Ha kell jegyzőkönyv, a partnerünk elvégzi — csak szóljon előre.",
  },
  {
    kerdes: "Kell fizetnem a felmérésért?",
    valasz: "Nem. Se a kiszállás, se az árajánlat nem kerül semmibe.",
  },
  {
    kerdes: "Vállalnak munkát magánszemélyeknek is?",
    valasz: "Igen. Családi háztól a csarnokig.",
  },
];

const bizalmi = [
  { cimke: "Cégjegyzékszám", ertek: SITE.cegjegyzekszam },
  { cimke: "Adószám", ertek: SITE.adoszam },
  { cimke: "Felelősségbiztosítás", ertek: "Rendelkezünk" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <Eyebrow accent={ACCENT}>VILLANYSZERELÉS</Eyebrow>
                <h1
                  className="mt-6 text-4xl font-bold text-ink sm:text-5xl lg:text-6xl"
                  style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
                >
                  Villanyszerelés, meglepetések nélkül
                </h1>
                <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
                  Konnektortól az elosztóig, hibakereséstől a teljes felújításig. Kimegyünk, megnézzük, és megmondjuk, mennyibe kerül. A felmérés ingyen van.
                </p>
              </Reveal>
              <Reveal delay={0.15} className="mt-9">
                <ul className="space-y-3">
                  {heroBullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                      <Check size={20} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={0.25} className="mt-10 flex flex-wrap gap-3">
                <ButtonLink
                  to="/kapcsolat?forras=hero"
                  variant="accent"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta_label: "Kérem az ingyenes felmérést",
                      cta_location: "hero",
                    })
                  }
                >
                  Kérem az ingyenes felmérést
                  <ArrowRight size={16} />
                </ButtonLink>
                <ButtonLink
                  to="/szolgaltatasok"
                  variant="outline"
                  onClick={() =>
                    trackEvent("cta_click", {
                      cta_label: "Szolgáltatásaink",
                      cta_location: "hero",
                    })
                  }
                >
                  Szolgáltatásaink
                </ButtonLink>
              </Reveal>
            </div>
            <div className="lg:col-span-5">
              <Reveal delay={0.3}>
                <Card accent={ACCENT} glow className="p-6">
                  <div className="flex items-center gap-3">
                    <BadgeCheck size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                    <span className="label text-muted">DÍJMENTES FELMÉRÉS</span>
                  </div>
                  <p className="mt-4 text-sm text-ink">
                    Konnektortól az elosztóig, hibakereséstől a teljes felújításig. Kimegyünk, megnézzük, és megmondjuk, mennyibe kerül. A felmérés ingyen van.
                  </p>
                  <div className="mt-5 border-t border-line/50 pt-5">
                    <TextLink
                      to="/kapcsolat?forras=hero-card"
                      onClick={() =>
                        trackEvent("cta_click", {
                          cta_label: "Időpont egyeztetése",
                          cta_location: "hero",
                        })
                      }
                    >
                      Időpont egyeztetése
                    </TextLink>
                  </div>
                </Card>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.35} className="mt-14">
            <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
              {stats.map((s) => (
                <div key={s.cimke} className="bg-surface p-6">
                  <dt className="label text-muted">{s.cimke}</dt>
                  <dd className="mt-3 font-display text-xl font-semibold text-ink sm:text-2xl">{s.ertek}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* Hogyan dolgozunk */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="HOGYAN DOLGOZUNK"
          h2="Így megy ez nálunk"
          lead="Négy lépés, semmi bonyolult."
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {hogyanDolgozunkKartyak.map((o, i) => (
            <Reveal key={o.cim} delay={i * 0.08}>
              <Card accent={ACCENT} glow className="h-full">
                <span className="font-display text-3xl font-bold" style={{ color: `${ACCENT}80` }}>
                  {o.szam}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-ink">{o.cim}</h3>
                <p className="mt-2 text-sm text-muted">{o.szoveg}</p>
              </Card>
            </Reveal>
          ))}
        </div>
        <div className="mt-12">
          <EpitkezesiIdovonal />
        </div>
      </Section>

      {/* Szolgáltatások */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="SZOLGÁLTATÁSOK"
          h2="Amit csinálunk"
          lead="Hét terület, amiben otthon vagyunk. Ami nem fér bele, arra megmondjuk, kihez érdemes fordulni."
          accent={ACCENT}
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.06}>
              <Card accent={ACCENT} glow className="h-full">
                <ServiceIcon name={s.ikon} size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                <h3 className="mt-4 text-lg font-semibold text-ink">{s.cim}</h3>
                <p className="mt-2 text-sm text-muted">{s.szoveg}</p>
                <div className="mt-5 border-t border-line/50 pt-4">
                  <TextLink
                    to={`/szolgaltatasok/${s.slug}`}
                    className="text-amber"
                    onClick={() =>
                      trackEvent("cta_click", {
                        cta_label: "Részletek",
                        cta_location: "szolgaltatas_kartya",
                        service_slug: s.slug,
                      })
                    }
                  >
                    Részletek
                  </TextLink>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <ButtonLink
            to="/szolgaltatasok"
            variant="outline"
            onClick={() =>
              trackEvent("cta_click", {
                cta_label: "Részletes szolgáltatáslista",
                cta_location: "szolgaltatas_kartya",
              })
            }
          >
            Részletes szolgáltatáslista
            <ArrowRight size={16} />
          </ButtonLink>
        </Reveal>
      </Section>

      {/* Amit nem vállalunk */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="ÁTLÁTHATÓSÁG" h2="Amit nem csinálunk" accent={ACCENT} />
        <Reveal className="mt-14 max-w-3xl">
          <p className="text-base text-muted sm:text-lg">
            Érintésvédelmi és szabványossági felülvizsgálatot nem végzünk, jegyzőkönyvet nem állítunk ki. Mérőhellyel és fogyasztásmérővel sem foglalkozunk — ahhoz szolgáltatói regisztráció kell.
          </p>
          <div className="mt-8 rounded-lg border p-6" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}>
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
              <p className="text-sm text-ink sm:text-base">
                Ha jegyzőkönyv kell a munkához, szóljon — a partnerünk elvégzi.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Egy kézből */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="SIROTECH GROUP"
          h2="Egy fal, három szakma"
          lead="Egy irodafelújításon ma három szakember dolgozik ugyanabba a falba: villanyszerelő, hálózatépítő, biztonságtechnikus. Ugyanaz a nyomvonal, három külön időpont — és a koordináció az ügyfélé."
          accent={ACCENT}
        />
        <Reveal className="mt-14 max-w-3xl">
          <div className="rounded-lg border border-line bg-surface p-8">
            <p className="font-display text-xl font-semibold text-ink sm:text-2xl" style={{ letterSpacing: "-0.02em" }}>
              Nálunk ez egy csapat, egy ütemezés. Ha valami nem stimmel, nincs kinek mutogatni.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {DIVIZIOK.filter((d) => d.nev !== "SIROTECH").map((d, i) => (
            <Reveal key={d.nev} delay={i * 0.08}>
              <Card accent={d.szin} glow>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: d.szin, boxShadow: `0 0 8px ${d.szin}` }} />
                  <span className="label" style={{ color: d.szin }}>{d.nev}</span>
                </div>
                <p className="mt-4 text-sm text-ink">{d.szoveg}</p>
                <a
                  href={d.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("outbound_click", { target_site: d.href.replace("https://", ""), location: "cegcsoport_szekcio" })}
                  className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150"
                  style={{ color: d.szin }}
                >
                  Megnyitás
                  <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" />
                </a>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Bizalmi */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="HÁTTÉR" h2="Engedélyes, felelősségbiztosítással dolgozó vállalkozás" accent={ACCENT} />
        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3">
            {bizalmi.map((b) => (
              <div key={b.cimke} className="bg-surface p-6">
                <div className="flex items-center gap-2">
                  <Building2 size={18} strokeWidth={1.5} className="text-muted" />
                  <span className="label text-muted">{b.cimke}</span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-ink">{b.ertek}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* GYIK */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="GYIK" h2="Gyakori kérdések" accent={ACCENT} />
        <div className="mt-14 max-w-3xl space-y-3">
          {gyikKerdesek.map((q, i) => (
            <Reveal key={q.kerdes} delay={i * 0.05}>
              <details className="group rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-silver/40">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                  <span className="text-base font-semibold text-ink sm:text-lg">{q.kerdes}</span>
                  <span className="shrink-0 text-2xl leading-none transition-transform duration-150 group-open:rotate-45" style={{ color: ACCENT }} aria-hidden="true">+</span>
                </summary>
                <p className="mt-4 text-sm text-muted sm:text-base">{q.valasz}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Záró CTA */}
      <section className="relative overflow-hidden border-t border-line/50 py-28">
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <Chip accent={ACCENT}>DÍJMENTES FELMÉRÉS</Chip>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              Nézzük meg együtt
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              Kimegyünk, megnézzük, megmondjuk az árát. Utána Ön dönt.
            </p>
            <div className="mt-9 flex justify-center">
              <ButtonLink
                to="/kapcsolat?forras=zaro-cta"
                variant="accent"
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_label: "Kérem az ingyenes felmérést",
                    cta_location: "zaro_cta",
                  })
                }
              >
                Kérem az ingyenes felmérést
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
