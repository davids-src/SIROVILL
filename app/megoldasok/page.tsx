import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HousePlus, Hammer, Building2, Zap, TrendingUp, Wrench, ChevronRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { ButtonLink, TextLink } from "@/components/Button";
import { SOLUTIONS, type SolutionItem } from "@/lib/solutions";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export const metadata: Metadata = {
  title: "Villamos megoldások a feladat típusához | SIROVILL",
  description:
    "Új építés, felújítás, üzleti kivitelezés, meglévő hálózat bővítése vagy hibaelhárítás. Válassza ki a projektje típusát!",
  alternates: {
    canonical: "https://sirovill.hu/megoldasok",
  },
  openGraph: {
    title: "Villamos megoldások a feladat típusához | SIROVILL",
    description:
      "Új építés, felújítás, üzleti kivitelezés, bővítés vagy javítás — válassza azt, ahol most tart.",
    url: "https://sirovill.hu/megoldasok",
  },
};

const iconMap = {
  HousePlus: HousePlus,
  Hammer: Hammer,
  Building2: Building2,
  Zap: Zap,
  TrendingUp: TrendingUp,
  Wrench: Wrench,
};

export default function MegoldasokHubPage() {
  const solutionsList = Object.values(SOLUTIONS);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://sirovill.hu/megoldasok/#webpage",
        url: "https://sirovill.hu/megoldasok",
        name: "Villamos megoldások a feladat típusához",
        description:
          "Új építés, felújítás, üzleti kivitelezés, bővítés vagy javítás — válassza azt, ahol most tart.",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://sirovill.hu/megoldasok/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Főoldal",
            item: "https://sirovill.hu",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Megoldások",
            item: "https://sirovill.hu/megoldasok",
          },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb Navigation UI */}
      <div className="border-b border-line/40 bg-surface/30">
        <div className="mx-auto max-w-site px-6 py-3">
          <nav className="flex items-center gap-2 text-xs text-muted" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-ink transition-colors">
              Főoldal
            </Link>
            <ChevronRight size={12} />
            <span className="text-ink font-medium">Megoldások</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal>
            <Eyebrow accent={ACCENT}>PROJEKT ALAPÚ VILLAMOSSÁG</Eyebrow>
            <h1 className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl" style={{ letterSpacing: "-0.03em" }}>
              Villamos megoldások a feladat típusához
            </h1>
            <p className="mt-4 max-w-3xl text-base text-muted sm:text-lg">
              Új építés, felújítás, üzleti kivitelezés, bővítés vagy javítás — válassza azt, ahol most tart.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Solutions Cards Grid */}
      <Section className="border-t border-line/50">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {solutionsList.map((sol, i) => {
            const Icon = iconMap[sol.icon] || Zap;
            return (
              <Reveal key={sol.slug} delay={i * 0.06}>
                <Card accent={ACCENT} glow className="flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="inline-flex rounded-lg p-3 bg-bg/80 border border-line">
                      <Icon size={26} strokeWidth={1.5} style={{ color: ACCENT }} />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-ink">{sol.cardTitle}</h2>
                    <p className="mt-3 text-sm text-muted leading-relaxed">{sol.cardText}</p>
                  </div>
                  <div className="mt-6 border-t border-line/50 pt-4">
                    <TextLink to={`/megoldasok/${sol.slug}`} className="text-amber">
                      Részletes megoldás
                    </TextLink>
                  </div>
                </Card>
              </Reveal>
            );
          })}

          {/* Additional Troubleshooting Card targeting existing Services */}
          <Reveal delay={0.35}>
            <Card accent={ACCENT} glow className="flex flex-col justify-between h-full p-6 bg-surface/80">
              <div>
                <div className="inline-flex rounded-lg p-3 bg-bg/80 border border-line">
                  <Wrench size={26} strokeWidth={1.5} style={{ color: ACCENT }} />
                </div>
                <h2 className="mt-5 text-xl font-semibold text-ink">Hibaelhárítás & Javítás</h2>
                <p className="mt-3 text-sm text-muted leading-relaxed">
                  Zárlatkeresés, kioldó biztosíték, melegedő kötés vagy azonnali hibakeresés lakossági és üzleti környezetben.
                </p>
              </div>
              <div className="mt-6 border-t border-line/50 pt-4">
                <TextLink to="/szolgaltatasok/villanyszerelesi-hibaelharitas" className="text-amber">
                  Hibaelhárítási szolgáltatás
                </TextLink>
              </div>
            </Card>
          </Reveal>
        </div>
      </Section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden border-t border-line/50 py-20">
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Nem biztos benne, melyik kategóriába tartozik?</h2>
            <p className="mt-3 text-sm text-muted sm:text-base max-w-xl mx-auto">
              Segítünk a pontos felmérésben. Kimegyünk a helyszínre, átbeszéljük a lehetőségeket, és ingyenes árajánlatot adunk.
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink to="/kapcsolat?forras=megoldasok-hub" variant="accent">
                Kérem a díjmentes felmérést
                <ArrowRight size={16} />
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
