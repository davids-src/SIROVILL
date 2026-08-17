import { motion } from "framer-motion";
import { Check, ArrowRight, Building2, ShieldCheck, Clock, BadgeCheck } from "lucide-react";
import { Seo } from "../components/Seo";
import { Section, SectionHeading } from "../components/Section";
import { Reveal, staggerParent, staggerChild } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { ButtonLink, TextLink } from "../components/Button";
import { Card, Chip } from "../components/Card";
import { ServiceIcon } from "../components/ServiceIcon";
import { SERVICES } from "../lib/services";
import { SITE, DIVIZIOK } from "../lib/site";

const ACCENT = SITE.accent;

const heroBullets = [
  "Ingyenes, kötelezettségmentes felmérés",
  "Rögzített áras ajánlat, ami a kezdésig nem változik",
  "Ugyanaz a csapat, amelyik a hálózatot és a kamerarendszert is telepíti",
];

const stats = [
  { ertek: "November 1.", cimke: "KIVITELEZÉS KEZDETE" },
  { ertek: "1 munkanap", cimke: "VÁLASZIDŐ MEGKERESÉSRE" },
  { ertek: "4 0713 04 07", cimke: "VILLANYSZERELŐI SZAKKÉPESÍTÉS" },
];

const miertMostOkok = [
  { cim: "Most még válogathat az időpontok között", szoveg: "November előrehaladtával egyre kevesebb szabad hely marad." },
  { cim: "A felmérés most díjmentes", szoveg: "Kimegyünk, felmérjük, megtervezzük — kötelezettség nélkül." },
  { cim: "Az ár rögzített", szoveg: "Amit a felmérés után ajánlunk, az nem változik novemberig." },
];

const gyikKerdesek = [
  {
    kerdes: "Miért csak november 1-től indul a kivitelezés?",
    valasz:
      "Mert egyetlen villanyszerelő kollégánk kapacitása véges, és felelősen csak annyi munkát vállalunk el, amennyit ténylegesen el is tudunk végezni. A felmérés és az ajánlat viszont már most díjmentes.",
  },
  {
    kerdes: "Miért nem vállalnak felülvizsgálatot?",
    valasz:
      "Mert az külön jogosultsághoz kötött tevékenység, amivel jelenleg nem rendelkezünk. Ha a munkához jegyzőkönyv szükséges, azt partnerünkkel biztosítjuk.",
  },
  {
    kerdes: "Kell fizetnem a felmérésért?",
    valasz: "Nem. A helyszíni felmérés és a rögzített áras ajánlat is díjmentes.",
  },
  {
    kerdes: "Mennyi ideig érvényes az ajánlott ár?",
    valasz: "A felmérés után adott ajánlat a novemberi kezdésig rögzített marad.",
  },
  {
    kerdes: "Vállalnak munkát magánszemélyeknek is?",
    valasz: "Igen, cégeknek és magánszemélyeknek egyaránt dolgozunk.",
  },
];

const bizalmi = [
  { cimke: "Szakképesítés", ertek: SITE.szakkepesites },
  { cimke: "Cégjegyzékszám", ertek: SITE.cegjegyzekszam },
  { cimke: "Felelősségbiztosítás", ertek: "Rendelkezünk" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SIROVILL",
  parentOrganization: { "@type": "Organization", name: SITE.cegnev },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Lövölde utca 24",
    addressLocality: "Székesfehérvár",
    postalCode: "8000",
    addressCountry: "HU",
  },
  telephone: SITE.telefon,
  email: SITE.email,
  areaServed: SITE.szolgaltatasiTerulet,
  url: SITE.baseUrl,
  knowsAbout: "Épületvillamossági kivitelezés, felújítás, hibaelhárítás, kábelezés, okosotthon",
};

export function HomePage() {
  return (
    <>
      <Seo jsonLd={jsonLd} />
      <Hero />
      <MiertMostSection />
      <MitVallalunkSection />
      <AmitNemVallalunkSection />
      <EgyKezbolSection />
      <BizalmiSection />
      <GyikSection />
      <ZaroCtaSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 sm:pt-44">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="ambient-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Eyebrow accent={ACCENT}>SIROTECH GROUP — ÚJ SZOLGÁLTATÁS</Eyebrow>
              <h1
                className="mt-6 text-4xl font-bold text-ink sm:text-5xl lg:text-6xl"
                style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
              >
                Villanyszerelés — novemberi kezdéssel
              </h1>
              <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
                Épületvillamossági kivitelezés, felújítás, hibaelhárítás és
                kábelezés — cégeknek és magánszemélyeknek. A felmérés és a
                rögzített áras ajánlat már most díjmentes. A kivitelezés 2026.
                november 1-től indul.
              </p>
            </motion.div>

            <motion.ul
              className="mt-9 space-y-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              {heroBullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-sm text-ink sm:text-base">
                  <Check size={20} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                  <span>{b}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div
              className="mt-10 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <ButtonLink to="/kapcsolat?forras=sirovill-hero" variant="accent">
                Kérem az ingyenes felmérést
                <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink to="/szolgaltatasok" variant="outline">
                Szolgáltatásaink
              </ButtonLink>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <Card accent={ACCENT} glow className="p-6">
                <div className="flex items-center gap-3">
                  <BadgeCheck size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
                  <span className="label text-muted">ELŐJEGYZÉS NYITVA</span>
                </div>
                <p className="mt-4 text-sm text-ink">
                  A felmérés és a rögzített áras ajánlat már most díjmentes. A
                  kivitelezés november 1-től indul.
                </p>
                <div className="mt-5 border-t border-line/50 pt-5">
                  <TextLink to="/kapcsolat?forras=sirovill-hero-card">
                    Időpont foglalása
                  </TextLink>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>

        <motion.dl
          className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3"
          initial="hidden"
          animate="show"
          variants={staggerParent}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.cimke}
              className="bg-surface p-6"
              variants={staggerChild}
              custom={i}
            >
              <dt className="label text-muted">{s.cimke}</dt>
              <dd className="mt-3 font-display text-2xl font-semibold text-ink">
                {s.ertek}
              </dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}

function MiertMostSection() {
  return (
    <Section className="border-t border-line/50">
      <SectionHeading
        eyebrow="ELŐJEGYZÉS NYITVA"
        h2="Miért érdemes most jelentkezni?"
        lead="Egy szakember kapacitása véges. Aki novemberre szeretne kezdést, annak érdemes most lefoglalnia az időpontot — a rögzített ár a jelentkezéskor megállapított összeg marad, a kezdésig nem változik."
      />
      <motion.div
        className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerParent}
      >
        {miertMostOkok.map((o, i) => (
          <motion.div key={o.cim} variants={staggerChild} custom={i}>
            <Card accent={ACCENT} glow>
              <span className="font-display text-3xl font-bold" style={{ color: `${ACCENT}80` }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-ink">{o.cim}</h3>
              <p className="mt-2 text-sm text-muted">{o.szoveg}</p>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function MitVallalunkSection() {
  return (
    <Section className="border-t border-line/50">
      <SectionHeading
        eyebrow="SZOLGÁLTATÁSOK"
        h2="Amit vállalunk"
        lead="Kizárólag olyan munkát vállalunk, ami a villanyszerelői szakképesítésünk keretébe tartozik — ezt szándékosan mondjuk ki, mert fontosnak tartjuk, hogy pontosan tudja, mire számíthat."
        accent={ACCENT}
      />
      <motion.div
        className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerParent}
      >
        {SERVICES.map((s, i) => (
          <motion.div key={s.slug} variants={staggerChild} custom={i}>
            <Card accent={ACCENT} glow className="h-full">
              <ServiceIcon name={s.ikon} size={24} strokeWidth={1.5} style={{ color: ACCENT }} />
              <h3 className="mt-4 text-lg font-semibold text-ink">{s.cim}</h3>
              <p className="mt-2 text-sm text-muted">{s.szoveg}</p>
              <div className="mt-5 border-t border-line/50 pt-4">
                <TextLink to={`/szolgaltatasok/${s.slug}`} className="text-amber">
                  Részletek
                </TextLink>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
      <Reveal className="mt-10">
        <ButtonLink to="/szolgaltatasok" variant="outline">
          Részletes szolgáltatáslista
          <ArrowRight size={16} />
        </ButtonLink>
      </Reveal>
    </Section>
  );
}

function AmitNemVallalunkSection() {
  return (
    <Section className="border-t border-line/50">
      <SectionHeading
        eyebrow="ÁTLÁTHATÓSÁG"
        h2="Amit nem vállalunk"
        lead="Fontosnak tartjuk ezt is kimondani, mielőtt bárki feltételezésekbe bocsátkozna."
        accent={ACCENT}
      />
      <Reveal className="mt-14 max-w-3xl">
        <p className="text-base text-muted sm:text-lg">
          Nem végzünk érintésvédelmi vagy szabványossági felülvizsgálatot, és
          nem állítunk ki ilyen jegyzőkönyvet — ez külön jogosultsághoz kötött
          tevékenység. Nem foglalkozunk mérőhely-kialakítással és
          fogyasztásmérő bekötésével — ehhez áramszolgáltatói regisztráció
          szükséges.
        </p>
        <div
          className="mt-8 rounded-lg border p-6"
          style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
        >
          <div className="flex items-start gap-3">
            <ShieldCheck size={22} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
            <p className="text-sm text-ink sm:text-base">
              Ha a munkához felülvizsgálati jegyzőkönyv szükséges, azt
              partnerünkkel biztosítjuk. Szóljon előre, és megszervezzük.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function EgyKezbolSection() {
  return (
    <Section className="border-t border-line/50">
      <SectionHeading
        eyebrow="SIROTECH GROUP"
        h2="Miért logikus ez a bővülés?"
        lead="Egy irodafelújításnál vagy építkezésnél ma jellemzően három szakember kell: egy villanyszerelő, egy hálózatépítő és egy biztonságtechnikus. Mindhárman ugyanabba a falba dolgoznak, ugyanazon a nyomvonalon, gyakran egymás után — és a koordináció az ügyfél feladata marad."
        accent={ACCENT}
      />
      <Reveal className="mt-14 max-w-3xl">
        <div className="rounded-lg border border-line bg-surface p-8">
          <p className="font-display text-xl font-semibold text-ink sm:text-2xl" style={{ letterSpacing: "-0.02em" }}>
            Ha ugyanaz a csapat csinálja, egy egyeztetés van, egy ütemezés — és
            nincs kinek mutogatni, ha valami nem stimmel.
          </p>
        </div>
      </Reveal>
      <motion.div
        className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={staggerParent}
      >
        {DIVIZIOK.filter((d) => d.nev !== "SIROTECH").map((d, i) => (
          <motion.div key={d.nev} variants={staggerChild} custom={i}>
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
                className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150"
                style={{ color: d.szin }}
              >
                Megnyitás
                <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" />
              </a>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function BizalmiSection() {
  return (
    <Section className="border-t border-line/50">
      <SectionHeading
        eyebrow="HÁTTÉR"
        h2="Engedélyes, felelősségbiztosítással dolgozó vállalkozás"
        accent={ACCENT}
      />
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
  );
}

function GyikSection() {
  return (
    <Section className="border-t border-line/50">
      <SectionHeading eyebrow="GYIK" h2="Gyakori kérdések" accent={ACCENT} />
      <div className="mt-14 max-w-3xl space-y-3">
        {gyikKerdesek.map((q, i) => (
          <Reveal key={q.kerdes} delay={i * 0.05}>
            <details className="group rounded-lg border border-line bg-surface p-6 transition-colors duration-150 hover:border-silver/40">
              <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                <span className="text-base font-semibold text-ink sm:text-lg">{q.kerdes}</span>
                <span
                  className="shrink-0 text-2xl leading-none transition-transform duration-150 group-open:rotate-45"
                  style={{ color: ACCENT }}
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm text-muted sm:text-base">{q.valasz}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ZaroCtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-line/50 py-28">
      <div className="ambient-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-6 text-center">
        <Reveal>
          <Chip accent={ACCENT}>ELŐJEGYZÉS NYITVA</Chip>
          <h2
            className="mx-auto mt-6 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl"
            style={{ letterSpacing: "-0.02em" }}
          >
            Foglalja le a novemberi időpontját
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
            A felmérés és az ajánlat díjmentes. Az előjegyzés most nyitva.
          </p>
          <div className="mt-9 flex justify-center">
            <ButtonLink to="/kapcsolat?forras=sirovill-zaro" variant="accent">
              Kérem az ingyenes felmérést
              <ArrowRight size={16} />
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
