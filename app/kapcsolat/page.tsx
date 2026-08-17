import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export const metadata: Metadata = {
  title: "Kapcsolat — Ingyenes felmérés kérése",
  description:
    "Kérje ingyenes felmérését. 1 munkanapon belül jelentkezünk az időpont-egyeztetésre. A felmérés és az árajánlat díjmentes.",
  openGraph: {
    title: "Kapcsolat — SIROVILL",
    description: "Kérje ingyenes felmérését. A felmérés díjmentes és kötelezettségmentes.",
    url: "https://sirovill.hu/kapcsolat",
  },
  alternates: { canonical: "https://sirovill.hu/kapcsolat" },
};

// KapcsolatForm is a "use client" component
import { KapcsolatForm } from "@/components/KapcsolatForm";

export default function KapcsolatPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>KAPCSOLAT</Eyebrow>
            <h1
              className="mt-6 text-4xl font-bold text-ink sm:text-5xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Kérje ingyenes felmérését
            </h1>
            <p className="mt-5 text-base text-muted sm:text-lg">
              Töltse ki az űrlapot, és 1 munkanapon belül jelentkezünk. A felmérés és az árajánlat nem kerül semmibe.
            </p>
          </Reveal>
        </div>
      </section>


      <Section>
        <KapcsolatForm />
      </Section>
    </>
  );
}
