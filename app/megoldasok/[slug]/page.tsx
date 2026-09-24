import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, ArrowRight, CheckCircle2, ShieldCheck, HelpCircle } from "lucide-react";
import { Section, SectionHeading } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Card } from "@/components/Card";
import { ButtonLink, TextLink } from "@/components/Button";
import { SOLUTIONS, type SolutionSlug } from "@/lib/solutions";
import { SERVICES } from "@/lib/services";
import { getPostBySlug } from "@/lib/blog";
import { SITE } from "@/lib/site";

import { EpitkezesiIdovonal } from "@/components/graphics/EpitkezesiIdovonal";
import { NyomvonalMetszet } from "@/components/graphics/NyomvonalMetszet";
import { FalMetszetDiagram } from "@/components/graphics/FalMetszetDiagram";
import { FelujitasAlaprajzDiagram } from "@/components/graphics/FelujitasAlaprajzDiagram";
import { IrodaAlaprajzDiagram } from "@/components/graphics/IrodaAlaprajzDiagram";
import { EgyvonalasSematikaDiagram } from "@/components/graphics/EgyvonalasSematikaDiagram";
import { KapacitasDiagram } from "@/components/graphics/KapacitasDiagram";

const ACCENT = SITE.accent;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(SOLUTIONS).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const sol = SOLUTIONS[slug as SolutionSlug];
  if (!sol) return {};

  return {
    title: `${sol.metaTitle}`,
    description: sol.metaDescription,
    alternates: {
      canonical: `https://sirovill.hu/megoldasok/${sol.slug}`,
    },
    openGraph: {
      title: sol.metaTitle,
      description: sol.metaDescription,
      url: `https://sirovill.hu/megoldasok/${sol.slug}`,
    },
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const sol = SOLUTIONS[slug as SolutionSlug];

  if (!sol) {
    notFound();
  }

  // Linked related items
  const relatedServices = SERVICES.filter((s) => sol.relatedServices.includes(s.slug));
  const relatedBlogs = sol.relatedBlogSlugs
    .map((bSlug) => getPostBySlug(bSlug))
    .filter((b): b is NonNullable<typeof b> => b !== undefined);

  // Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://sirovill.hu/megoldasok/${sol.slug}/#webpage`,
        url: `https://sirovill.hu/megoldasok/${sol.slug}`,
        name: sol.title,
        description: sol.metaDescription,
      },
      {
        "@type": "Service",
        "@id": `https://sirovill.hu/megoldasok/${sol.slug}/#service`,
        name: sol.cardTitle,
        description: sol.intro,
        provider: {
          "@type": "LocalBusiness",
          name: "SIROVILL",
          telephone: SITE.telefon,
          email: SITE.email,
        },
        areaServed: SITE.szolgaltatasiTerulet,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://sirovill.hu/megoldasok/${sol.slug}/#breadcrumb`,
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
          {
            "@type": "ListItem",
            position: 3,
            name: sol.cardTitle,
            item: `https://sirovill.hu/megoldasok/${sol.slug}`,
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
            <Link href="/megoldasok" className="hover:text-ink transition-colors">
              Megoldások
            </Link>
            <ChevronRight size={12} />
            <span className="text-ink font-medium">{sol.cardTitle}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-16">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal>
            <Eyebrow accent={ACCENT}>{sol.cardTitle.toUpperCase()}</Eyebrow>
            <h1
              className="mt-4 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              {sol.title}
            </h1>
            <p className="mt-5 max-w-3xl text-base text-muted sm:text-lg leading-relaxed">
              {sol.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink to={`/kapcsolat?forras=megoldas-${sol.slug}`} variant="accent">
                Ingyenes felmérés kérése
                <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink to="/szolgaltatasok" variant="outline">
                Szolgáltatások áttekintése
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Visual Technical Diagram Section */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="MŰSZAKI VIZUALIZÁCIÓ"
          h2="Nyomvonal és architektúra"
          lead="Tervezett műszaki megközelítésünk a feladat típusához."
        />
        <div className="mt-10">
          {sol.slug === "uj-epites" && (
            <div className="space-y-8">
              <FalMetszetDiagram />
              <EpitkezesiIdovonal />
              <NyomvonalMetszet />
            </div>
          )}
          {sol.slug === "felujitas" && <FelujitasAlaprajzDiagram />}
          {sol.slug === "uzlet-iroda" && <IrodaAlaprajzDiagram />}
          {sol.slug === "ipari-kereskedelmi-kivitelezes" && <EgyvonalasSematikaDiagram />}
          {sol.slug === "meglevo-halozat-bovitese" && <KapacitasDiagram />}
        </div>
      </Section>

      {/* Benefits */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="ELŐNYÖK"
          h2="Miért érdemes velünk tervezni?"
          accent={ACCENT}
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {sol.benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.08}>
              <Card accent={ACCENT} glow className="h-full p-6">
                <CheckCircle2 size={24} style={{ color: ACCENT }} />
                <h3 className="mt-4 text-lg font-semibold text-ink">{b.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">{b.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Process Steps */}
      <Section className="border-t border-line/50">
        <SectionHeading
          eyebrow="MEMENET ÉS LÉPÉSEK"
          h2="Hogyan zajlik a kivitelezés?"
          lead="Világos mérföldkövek az első megbeszéléstől a kulcsrakész átadásig."
        />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sol.processSteps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.08}>
              <Card accent={ACCENT} glow className="h-full p-6">
                <span className="font-display text-2xl font-bold text-amber">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-2 text-xs text-muted leading-relaxed">{step.desc}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <Section className="border-t border-line/50">
          <SectionHeading
            eyebrow="KAPCSOLÓDÓ SZOLGÁLTATÁSOK"
            h2="Érintett villanyszerelési területek"
          />
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {relatedServices.map((rs) => (
              <Card key={rs.slug} accent={ACCENT} glow className="p-5">
                <h3 className="text-base font-semibold text-ink">{rs.cim}</h3>
                <p className="mt-2 text-xs text-muted">{rs.szoveg}</p>
                <div className="mt-4 pt-3 border-t border-line/50">
                  <TextLink to={`/szolgaltatasok/${rs.slug}`} className="text-amber">
                    Szolgáltatás részletei
                  </TextLink>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* Related Blog Posts */}
      {relatedBlogs.length > 0 && (
        <Section className="border-t border-line/50">
          <SectionHeading
            eyebrow="TUDÁSTÁR & BLOG"
            h2="Kapcsolódó szakmai cikkek"
          />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {relatedBlogs.map((post) => (
              <Card key={post.slug} accent={ACCENT} glow className="p-6">
                <span className="text-xs text-amber font-mono">{post.category}</span>
                <h3 className="mt-2 text-lg font-semibold text-ink">{post.title}</h3>
                <p className="mt-2 text-sm text-muted line-clamp-2">{post.excerpt}</p>
                <div className="mt-4 pt-4 border-t border-line/50">
                  <TextLink to={`/blog/${post.slug}`} className="text-amber">
                    Cikk elolvasása
                  </TextLink>
                </div>
              </Card>
            ))}
          </div>
        </Section>
      )}

      {/* FAQ */}
      {sol.faq.length > 0 && (
        <Section className="border-t border-line/50">
          <SectionHeading eyebrow="GYIK" h2="Gyakori kérdések a megvalósításról" />
          <div className="mt-10 max-w-3xl space-y-3 mx-auto">
            {sol.faq.map((item) => (
              <details key={item.question} className="group rounded-lg border border-line bg-surface p-5">
                <summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-ink font-semibold">
                  <span>{item.question}</span>
                  <HelpCircle size={18} className="text-amber shrink-0" />
                </summary>
                <p className="mt-3 text-sm text-muted leading-relaxed">{item.answer}</p>
              </details>
            ))}
          </div>
        </Section>
      )}

      {/* Closing CTA */}
      <section className="relative overflow-hidden border-t border-line/50 py-20">
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <h2 className="text-2xl font-semibold text-ink sm:text-3xl">Belevágna a projektbe?</h2>
            <p className="mt-3 text-sm text-muted sm:text-base max-w-xl mx-auto">
              Kérjen ingyenes helyszíni felmérést és tételes árajánlatot kötöttségek nélkül!
            </p>
            <div className="mt-8 flex justify-center">
              <ButtonLink to={`/kapcsolat?forras=megoldas-${sol.slug}-cta`} variant="accent">
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
