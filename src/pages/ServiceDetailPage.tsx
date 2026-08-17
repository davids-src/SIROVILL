import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { ButtonLink } from "../components/Button";
import { SERVICE_DETAILS } from "../lib/serviceDetails";
import { SITE } from "../lib/site";

const ACCENT = SITE.accent;

export function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? SERVICE_DETAILS[slug] : undefined;

  if (!detail) {
    return <Navigate to="/szolgaltatasok" replace />;
  }

  return (
    <>
      <Seo title={`${detail.h1} — SIROVILL`} description={detail.lead} />
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-muted">
              <Link to="/szolgaltatasok" className="hover:text-ink transition-colors duration-150">
                Szolgáltatások
              </Link>
              <ChevronRight size={14} />
              <span className="text-ink">{detail.h1}</span>
            </nav>
            <div className="mt-6 max-w-3xl">
              <Eyebrow accent={ACCENT}>SZOLGÁLTATÁS</Eyebrow>
              <h1
                className="mt-6 text-4xl font-bold text-ink sm:text-5xl"
                style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
              >
                {detail.h1}
              </h1>
              <p className="mt-5 text-base text-muted sm:text-lg">{detail.lead}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-2xl font-semibold text-ink" style={{ letterSpacing: "-0.02em" }}>
              Mit végzünk?
            </h2>
            <motion.ul
              className="mt-8 space-y-4"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {detail.bulletek.map((b) => (
                <motion.li
                  key={b}
                  className="flex items-start gap-3 text-base text-ink"
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
                  }}
                >
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded"
                    style={{ background: `${ACCENT}20`, color: ACCENT }}
                  >
                    <Check size={14} strokeWidth={2.5} />
                  </span>
                  <span>{b}</span>
                </motion.li>
              ))}
            </motion.ul>

            {detail.kereszthivatkozas && (
              <div className="mt-10 rounded-lg border border-line bg-surface p-6">
                <p className="text-sm text-muted sm:text-base">{detail.kereszthivatkozas}</p>
              </div>
            )}
          </Reveal>

          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="sticky top-24 rounded-lg border border-line bg-surface p-8">
              <Eyebrow accent={ACCENT}>ELŐJEGYZÉS NYITVA</Eyebrow>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                A felmérés és az ajánlat díjmentes
              </h3>
              <p className="mt-3 text-sm text-muted">
                A kivitelezés 2026. november 1-től indul. A rögzített áras
                ajánlat a kezdésig nem változik.
              </p>
              <div className="mt-6 space-y-3">
                <ButtonLink to="/kapcsolat?forras=sirovill-service" variant="accent" className="w-full">
                  Ingyenes felmérés kérése
                  <ArrowRight size={16} />
                </ButtonLink>
                <Link
                  to="/szolgaltatasok"
                  className="inline-flex w-full items-center justify-center gap-2 rounded border border-line px-6 py-3 text-sm font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
                >
                  <ArrowLeft size={16} />
                  Vissza a szolgáltatásokhoz
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
