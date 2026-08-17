import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, ArrowRight, ArrowLeft, ChevronRight, Info } from "lucide-react";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { ButtonLink } from "@/components/Button";
import { SERVICE_DETAILS } from "@/lib/serviceDetails";
import { SERVICES } from "@/lib/services";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) return { title: "Szolgáltatás nem található" };
  return {
    title: detail.title,
    description: detail.description,
    openGraph: {
      title: detail.title,
      description: detail.description,
      url: `https://sirovill.hu/szolgaltatasok/${slug}`,
    },
    alternates: { canonical: `https://sirovill.hu/szolgaltatasok/${slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const detail = SERVICE_DETAILS[slug];
  if (!detail) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-muted" aria-label="Breadcrumb">
              <Link href="/szolgaltatasok" className="hover:text-ink transition-colors duration-150">Szolgáltatások</Link>
              <ChevronRight size={14} />
              <span className="text-ink">{detail.h1}</span>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow accent={ACCENT}>SZOLGÁLTATÁS</Eyebrow>
              <h1 className="mt-6 text-4xl font-bold text-ink sm:text-5xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                {detail.h1}
              </h1>
              <p className="mt-5 text-base text-muted sm:text-lg">{detail.lead}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Main content */}
          <div className="lg:col-span-7 space-y-14">

            {/* Mikor van erre szükség */}
            <Reveal>
              <Eyebrow accent={ACCENT} className="mb-6">MIKOR VAN ERRE SZÜKSÉG?</Eyebrow>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {detail.mikor.map((item) => (
                  <div key={item.cim} className="rounded-lg border border-line bg-surface p-5">
                    <h3 className="font-semibold text-ink">{item.cim}</h3>
                    <p className="mt-2 text-sm text-muted">{item.szoveg}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Mit csinálunk */}
            <Reveal>
              <Eyebrow accent={ACCENT} className="mb-6">MIT CSINÁLUNK</Eyebrow>
              <ul className="space-y-4">
                {detail.mitCsinalunk.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-ink">
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded"
                      style={{ background: `${ACCENT}20`, color: ACCENT }}
                    >
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Amire figyelünk */}
            <Reveal>
              <Eyebrow accent={ACCENT} className="mb-6">AMIRE FIGYELÜNK</Eyebrow>
              <div
                className="rounded-lg border p-6"
                style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}
              >
                {detail.amireFigyelunk.split("\n\n").map((para, i) => (
                  <p key={i} className={`text-sm text-ink sm:text-base ${i > 0 ? "mt-4" : ""}`}>{para}</p>
                ))}
              </div>
            </Reveal>

            {/* Mit ne várjon */}
            {detail.mitNeVarjon && (
              <Reveal>
                <Eyebrow accent="#8888A0" className="mb-6">MIT NE VÁRJON TŐLÜNK</Eyebrow>
                <div className="rounded-lg border border-line bg-surface p-6">
                  <p className="text-sm text-muted sm:text-base">{detail.mitNeVarjon}</p>
                </div>
              </Reveal>
            )}

            {/* Extra panel (pl. hibaelhárítás) */}
            {detail.extraPanel && (
              <Reveal>
                <div
                  className="rounded-lg border p-6"
                  style={{ borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
                >
                  <div className="flex items-start gap-3">
                    <Info size={20} strokeWidth={1.5} style={{ color: ACCENT }} className="mt-0.5 shrink-0" />
                    <div>
                      <p className="label mb-2" style={{ color: ACCENT }}>{detail.extraPanel.cim.toUpperCase()}</p>
                      <p className="text-sm text-ink sm:text-base">{detail.extraPanel.szoveg}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )}

            {/* Egy kézből panel */}
            {detail.egyKezbolPanel && (
              <Reveal>
                <Eyebrow accent={ACCENT} className="mb-6">{detail.egyKezbolPanel.cim.toUpperCase()}</Eyebrow>
                <div className="rounded-lg border border-line bg-surface p-6">
                  <p className="text-sm text-muted sm:text-base">{detail.egyKezbolPanel.szoveg}</p>
                  {detail.egyKezbolPanel.linkek && (
                    <div className="mt-5 flex flex-wrap gap-3">
                      {detail.egyKezbolPanel.linkek.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded border border-line px-4 py-2 text-sm font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
                        >
                          {l.label}
                          <ArrowRight size={14} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar CTA */}
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="sticky top-24 space-y-4">
              {/* Záró CTA blokk */}
              <div
                className="rounded-lg border p-8"
                style={{ borderColor: `${ACCENT}30`, background: `${ACCENT}08` }}
              >
                <Eyebrow accent={ACCENT}>INGYENES FELMÉRÉS</Eyebrow>
                <h3 className="mt-5 text-xl font-semibold text-ink">
                  Kérje ingyenes felmérését
                </h3>
                <p className="mt-3 text-sm text-muted">
                  Kimegyünk, felmérjük, és rögzített áras ajánlatot adunk. A felmérés díjmentes és kötelezettségmentes. A kivitelezés 2026. november 1-től indul.
                </p>
                <div className="mt-6 space-y-3">
                  <ButtonLink
                    to={`/kapcsolat?forras=szolgaltatas-${slug}`}
                    variant="accent"
                    className="w-full"
                  >
                    Kérem az ingyenes felmérést
                    <ArrowRight size={16} />
                  </ButtonLink>
                  <Link
                    href="/szolgaltatasok"
                    className="inline-flex w-full items-center justify-center gap-2 rounded border border-line px-6 py-3 text-sm font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
                  >
                    <ArrowLeft size={16} />
                    Vissza a szolgáltatásokhoz
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
