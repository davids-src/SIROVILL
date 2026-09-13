import type { Metadata } from "next";
import { Check, ArrowRight, ShieldCheck, Phone, Mail, FileText } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { Card, Chip } from "@/components/Card";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export const metadata: Metadata = {
  title: "Villanyszerelő alvállalkozó | B2B partner",
  description: "Épületvillamossági szakági alvállalkozás generálkivitelezőknek, belsőépítészeknek és biztonságtechnikai cégeknek. Nyomvonal, csövezés, elosztó, világítás — Fejér megyében, Budapesten, Közép-Dunántúlon.",
  alternates: { canonical: "https://sirovill.hu/partneri-egyuttmukodes" },
  keywords: "villanyszerelő alvállalkozó, épületvillamossági alvállalkozó, villamos szakági alvállalkozó, alvállalkozó generálkivitelezőnek, erősáramú kivitelezés alvállalkozásban, villanyszerelő kapacitás, nyomvonal kivitelezés alvállalkozó, csövezés gyengeáramhoz, elosztószekrény szerelés alvállalkozó, világításkorszerűsítés alvállalkozó, ipari villanyszerelés alvállalkozó, gépbekötés alvállalkozó, villanyszerelő alvállalkozó Fejér megye, villamos alvállalkozó Budapest, szakági partner Közép-Dunántúl, erős- és gyengeáramú kivitelezés egy kézben, irodafelújítás villamos kivitelezés, white label villanyszerelés",
  openGraph: {
    title: "Villamos szakági partner — SIROVILL",
    description: "Épületvillamossági kivitelezés alvállalkozóként generálkivitelezőknek és szakági cégeknek.",
    type: "website",
    url: "https://sirovill.hu/partneri-egyuttmukodes",
  },
};

const stats = [
  { ertek: "Erős- és gyengeáram", cimke: "EGY KÉZBEN" },
  { ertek: "Fejér m. · Budapest", cimke: "KÖZÉP-DUNÁNTÚL" },
  { ertek: "1 munkanap", cimke: "VÁLASZIDŐ MEGKERESÉSRE" },
];

const celcsoportok = [
  { cim: "Generálkivitelezők", szoveg: "Villamos szakágként kapcsolódunk be. Ha a gyengeáram is nálunk van, akkor a csövezés és a behúzás között nincs kivel vitatkozni a nyomvonalon — mindkettőt mi csináljuk." },
  { cim: "Biztonságtechnikai cégek", szoveg: "Ha kell valaki, aki a csövezést, a nyomvonalat és a tápellátást megcsinálja. Tudjuk, milyen igényei vannak egy kamerarendszernek, mert a gyengeáramot is mi szereljük." },
  { cim: "Belsőépítészek, irodafelújítók", szoveg: "Komplett villamos kivitelezés egy átalakításnál — világítás, dugaljak, elosztó, az új alaprajzhoz igazítva." },
  { cim: "Ingatlanfejlesztők, üzemeltetők", szoveg: "Szakági partner több ütemben futó projektekhez, vagy meglévő épületek villamos korszerűsítéséhez." },
];

const szakagiTartalom = [
  {
    cim: "Nyomvonal és alépítmény",
    elemek: ["Falhoronyvésés, gégecsövezés, kötődobozok elhelyezése", "Erős- és gyengeáramú nyomvonal összehangolt kialakítása", "Kábeltálca, védőcső, ipari nyomvonal", "Üres védőcsövek a későbbi bővítéshez"]
  },
  {
    cim: "Épületvillamosság",
    elemek: ["Dugaljak, kapcsolók, világítási körök kialakítása", "Áramkör-bővítés, új körök húzása", "Elosztó szerelése, kalapsínes kiépítés", "Kismegszakítók, áram-védőkapcsolók telepítése"]
  },
  {
    cim: "Világítás",
    elemek: ["Világításkorszerűsítés LED-re", "Munkaterületi és csarnokvilágítás", "Mozgásérzékelős és ütemezett kapcsolás", "Vészvilágítás, menekülési útirányjelzés"]
  },
  {
    cim: "Ipari és gépbekötés",
    elemek: ["Gépek villamos bekötése gyártói dokumentáció szerint", "Ipari csatlakozók, külön körök nagyfogyasztóknak", "Ipari elosztószekrény szerelése"]
  }
];

const diviziok = [
  { nev: "SIROVILL", terulet: "Erősáram, villanyszerelés", leiras: "Nyomvonal, csövezés, épületvillamosság", szin: ACCENT },
  { nev: "SIRO-VÉD", terulet: "Gyengeáram, biztonságtechnika", leiras: "Kamera, riasztó, tűzjelző, beléptetés", szin: "#1A6BE8", link: "https://siroved.hu" },
  { nev: "SIRONIC", terulet: "Informatika, hálózat", leiras: "Strukturált kábelezés, rack, aktív eszközök", szin: "#E8271A", link: "https://sironic.eu" },
];

const mukodes = [
  { cim: "Az Önök ütemezéséhez igazodunk", szoveg: "A kooperációkon részt veszünk, és a munkát a projekt ütemtervéhez igazítjuk — úgy, hogy a többi szakággal ne akadjunk össze." },
  { cim: "Időben szólunk, ha gond van", szoveg: "Ha bármi veszélyezteti a határidőt vagy a műszaki tartalmat, azt azonnal jelezzük." },
  { cim: "Felkészültünk a kapacitásbővítésre", szoveg: "Ha egy projekt több embert kíván, mint amennyit a saját csapatunk ad, bevont szakemberekkel bővítünk. A vállalt határidő ettől nem csúszik." },
  { cim: "Dokumentált átadás", szoveg: "Nyomvonalrajz, eszközlista, átadási jegyzőkönyv — olyan formában, amit Önök továbbadhatnak a megrendelőnek." },
  { cim: "Ha az Önök arculatában kell dolgoznunk", szoveg: "Van, aki azt kéri, hogy a helyszínen az ő nevében és arculatában jelenjünk meg — saját logós munkaruhában, az ő csapataként. Ezt is vállaljuk, ha erre van szükség." },
];

const hatter = [
  { cimke: "Építőipari nyilvántartási szám", ertek: "17C03049" },
  { cimke: "Felelősségbiztosítás", ertek: "Rendelkezünk" },
  { cimke: "Cégjegyzékszám", ertek: "07-09-037603" },
  { cimke: "Székhely", ertek: "8000 Székesfehérvár, Lövölde utca 24. 4/15." },
];

const referenciak: any[] = [];

const gyik = [
  { kerdes: "Milyen területen vállalnak alvállalkozói munkát?", valasz: "Fejér megyében, Budapesten és a Közép-Dunántúlon vállalunk helyszíni kivitelezést. Nagyobb projekt esetén ettől távolabb is egyeztethető." },
  { kerdes: "Mi történik, ha a projekt több embert igényel, mint amennyi a csapatuk?", valasz: "Felkészültünk a kapacitásbővítésre. Ha egy feladat több szerelőt kíván, bevont szakemberekkel bővítünk — a vállalt határidő ettől nem csúszik." },
  { kerdes: "A gyengeáramot is vállalják, vagy csak az erősáramot?", valasz: "Mindkettőt. A gyengeáramú kivitelezést — kamera, riasztó, tűzjelző, hálózat — a SIRO-VÉD és a SIRONIC divíziónk végzi, ugyanazon a cégen belül. Így a nyomvonalon nincs két külön szakág." },
  { kerdes: "Végeznek érintésvédelmi felülvizsgálatot?", valasz: "Nem. Felülvizsgálatot nem végzünk és jegyzőkönyvet nem állítunk ki — ez külön jogosultsághoz kötött. Ha a projekthez ez szükséges, partnerünkkel biztosítjuk." },
  { kerdes: "Dolgoznak a megrendelő arculatában?", valasz: "Igen, ha erre van szükség — az Önök logós munkaruhájában, az Önök csapataként jelenünk meg a helyszínen." },
  { kerdes: "Megkeresik később a mi megrendelőnket?", valasz: "Nem. Az Önök megrendelője az Önöké marad." }
];

export default function PartneriEgyuttmukodesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: gyik.map(q => ({
          "@type": "Question",
          name: q.kerdes,
          acceptedAnswer: { "@type": "Answer", text: q.valasz }
        }))
      },
      {
        "@type": "Service",
        serviceType: "Villamos szakági alvállalkozói kivitelezés",
        provider: {
          "@type": "Organization",
          name: "SIROTECH Kft."
        },
        areaServed: [
          { "@type": "State", name: "Fejér megye" },
          { "@type": "City", name: "Budapest" },
          { "@type": "Region", name: "Közép-Dunántúl" }
        ],
        audience: {
          "@type": "BusinessAudience",
          name: "generálkivitelezők, belsőépítészek, biztonságtechnikai cégek, ingatlanfejlesztők"
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden pt-36 pb-28 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-4xl">
            <Eyebrow accent={ACCENT}>B2B EGYÜTTMŰKÖDÉS</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold text-ink sm:text-5xl lg:text-6xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Villamos szakági partner generálkivitelezőknek, belsőépítészeknek és biztonságtechnikai cégeknek
            </h1>
            <p className="mt-5 text-base text-muted sm:text-lg max-w-3xl">
              Épületvillamossági kivitelezést vállalunk alvállalkozóként — önálló szakágként egy projektben, vagy kapacitáskiegészítésként, amikor az Önök csapata tele van. A gyengeáramot is mi húzzuk be, ha kell.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="mt-10 flex flex-wrap gap-3">
            <ButtonLink to="#kapcsolat" variant="accent">
              Beszéljünk egy projektről
              <ArrowRight size={16} />
            </ButtonLink>
            <ButtonLink to="#amit-vallalunk" variant="outline">
              Mit vállalunk
            </ButtonLink>
          </Reveal>
          
          <Reveal delay={0.3} className="mt-14">
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

      {/* Célcsoportok */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="KIKKEL DOLGOZUNK"
          h2="Nem mindenki ugyanazért keres minket"
          lead="Más kell egy generálkivitelezőnek, mint egy irodafelújítónak vagy egy biztonságtechnikai cégnek. Az alábbi négy helyzetben dolgozunk a leggyakrabban."
          accent={ACCENT}
        />
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {celcsoportok.map((c, i) => (
            <Reveal key={c.cim} delay={i * 0.1}>
              <Card accent={ACCENT} glow className="h-full">
                <h3 className="text-lg font-semibold text-ink">{c.cim}</h3>
                <p className="mt-2 text-sm text-muted">{c.szoveg}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Amit vállalunk */}
      <Section id="amit-vallalunk" className="border-t border-line/50">
        <SectionHeading
          eyebrow="SZAKÁGI TARTALOM"
          h2="Amit vállalunk"
          lead="A nyomvonaltól a szerelvényezésig, vagy annak bármelyik szakasza külön."
          accent={ACCENT}
        />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {szakagiTartalom.map((cs, i) => (
            <Reveal key={cs.cim} delay={i * 0.1} className="rounded-lg border border-line bg-surface p-6 sm:p-8 h-full">
              <h3 className="text-xl font-semibold text-ink">{cs.cim}</h3>
              <ul className="mt-6 space-y-4">
                {cs.elemek.map((elem) => (
                  <li key={elem} className="flex items-start gap-3 text-sm text-muted sm:text-base">
                    <Check size={20} strokeWidth={2} className="mt-0.5 shrink-0" style={{ color: ACCENT }} />
                    <span>{elem}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* A csövezésen nem lesz vita */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="AMIBEN MÁSOK VAGYUNK"
          h2="A csövezésen nem lesz vita"
          lead="A gyengeáramú kivitelezés klasszikus problémája, hogy ki hibázott a csövezésnél: az erősáramos vagy a biztonságtechnikus. Hogy a cső rossz-e, vagy a behúzó szalag. Hogy elfér-e két koax egy 13,5-ös csőben. Ezek a viták órákat visznek el a kooperációkon."
          accent={ACCENT}
        />
        <Reveal className="mt-10 max-w-3xl">
          <div className="rounded-lg border border-line p-8" style={{ background: `${ACCENT}08` }}>
            <p className="font-display text-xl font-semibold text-ink sm:text-2xl" style={{ letterSpacing: "-0.02em" }}>
              Nálunk ez fel sem merül: ugyanaz a cég csövez, és ugyanaz húzza be a kamerakábelt is.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {diviziok.map((d, i) => (
            <Reveal key={d.nev} delay={i * 0.1}>
              <Card accent={d.szin} glow className="h-full">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: d.szin, boxShadow: `0 0 8px ${d.szin}` }} />
                  <span className="label" style={{ color: d.szin }}>{d.nev}</span>
                </div>
                <h3 className="mt-4 font-semibold text-ink">{d.terulet}</h3>
                <p className="mt-2 text-sm text-muted">{d.leiras}</p>
                {d.link && (
                  <a href={d.link} target="_blank" rel="noopener noreferrer" className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-150" style={{ color: d.szin }}>
                    Megnyitás
                    <ArrowRight size={16} className="transition-transform duration-150 group-hover:translate-x-1" />
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-10">
          <p className="text-base text-ink font-medium">Egy szerződés, egy ütemezés, egy kapcsolattartó — akkor is, ha a projektben mindhárom szakág szerepel.</p>
        </Reveal>
      </Section>

      {/* Működés */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="MŰKÖDÉS" h2="Ahogyan együtt dolgozunk" accent={ACCENT} />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mukodes.map((m, i) => (
            <Reveal key={m.cim} delay={i * 0.1}>
              <div className="rounded-lg border border-line bg-surface p-6 h-full">
                <h3 className="text-lg font-semibold text-ink">{m.cim}</h3>
                <p className="mt-3 text-sm text-muted">{m.szoveg}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Mit nem vállalunk */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="ÁTLÁTHATÓSÁG" h2="Amit nem vállalunk" accent={ACCENT} />
        <Reveal className="mt-10 max-w-3xl">
          <p className="text-base text-muted sm:text-lg">
            Érintésvédelmi és szabványossági felülvizsgálatot nem végzünk, jegyzőkönyvet nem állítunk ki. Mérőhely-kialakítással és fogyasztásmérő bekötésével sem foglalkozunk.
          </p>
          <div className="mt-8 rounded-lg border p-6" style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}>
            <div className="flex items-start gap-3">
              <ShieldCheck size={22} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
              <p className="text-sm text-ink sm:text-base">
                Ha a projekthez felülvizsgálati jegyzőkönyv kell, azt partnerünkkel biztosítjuk — szóljon előre, és megszervezzük.
              </p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Háttér */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="HÁTTÉR" h2="Háttér és biztosítás" lead="Alvállalkozóként az Önök felelőssége is, hogy kit visznek a helyszínre. Ezért ezeket előre kiírjuk." accent={ACCENT} />
        <Reveal className="mt-14">
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {hatter.map((b) => (
              <div key={b.cimke} className="bg-surface p-6">
                <div className="flex items-center gap-2">
                  <FileText size={18} strokeWidth={1.5} className="text-muted" />
                  <span className="label text-muted">{b.cimke}</span>
                </div>
                <p className="mt-3 font-display text-lg font-semibold text-ink">{b.ertek}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Referencia - Feltételes megjelenítés */}
      {referenciak.length > 0 && (
        <Section className="border-t border-line/50">
          <SectionHeading eyebrow="EGYÜTTMŰKÖDÉSEINK" h2="Akikkel már dolgozunk" accent={ACCENT} />
          {/* Itt jöhetnének a referenciák a jövőben */}
        </Section>
      )}

      {/* GYIK */}
      <Section className="border-t border-line/50">
        <SectionHeading eyebrow="GYIK" h2="Gyakori kérdések" accent={ACCENT} />
        <div className="mt-14 max-w-3xl space-y-3">
          {gyik.map((q, i) => (
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
      <section id="kapcsolat" className="relative overflow-hidden border-t border-line/50 py-28">
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <p className="mb-10 text-sm text-muted max-w-2xl mx-auto italic">
              És ami talán a legfontosabb: az Önök megrendelője az Önöké marad. Nem keressük meg, nem ajánlkozunk náluk.
            </p>
            <Chip accent={ACCENT}>KAPCSOLAT</Chip>
            <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-semibold text-ink sm:text-4xl" style={{ letterSpacing: "-0.02em" }}>
              Beszéljünk
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
              Akkor is, ha most nincs aktuális feladat. Egy bejáratott alvállalkozói kapcsolat általában akkor ér a legtöbbet, amikor már megvan, mielőtt szükség lenne rá.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
              <div className="text-center sm:text-left">
                <p className="font-semibold text-ink text-lg">Skoda Dávid</p>
                <p className="text-sm text-muted">ügyvezető, SIROTECH Kft.</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a 
                  href="tel:+36702735532"
                  className="inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02]"
                  style={{ background: ACCENT }}
                >
                  <Phone size={16} />
                  +36 70 273 5532
                </a>
                
                <a 
                  href="mailto:skoda.david@sironic.hu"
                  className="inline-flex items-center justify-center gap-2 rounded border border-line bg-surface px-6 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-silver/40"
                >
                  <Mail size={16} />
                  skoda.david@sironic.hu
                </a>
              </div>
            </div>
            
            <p className="mt-14 text-sm text-muted">
              A SIROVILL a SIROTECH Informatikai és Biztonságtechnikai Kft. villanyszerelési divíziója.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
