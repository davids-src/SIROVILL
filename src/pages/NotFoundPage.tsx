import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Eyebrow } from "../components/Eyebrow";
import { Reveal } from "../components/Reveal";
import { SITE } from "../lib/site";

export function NotFoundPage() {
  return (
    <>
      <Seo title="404 — oldal nem található | SIROVILL" />
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-16">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="ambient-glow absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6 text-center">
          <Reveal>
            <Eyebrow accent={SITE.accent}>404</Eyebrow>
            <h1
              className="mt-6 text-4xl font-bold text-ink sm:text-6xl"
              style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
            >
              Az oldal nem található
            </h1>
            <p className="mx-auto mt-5 max-w-md text-base text-muted sm:text-lg">
              A keresett oldal nem létezik vagy át lett helyezve. Térjen vissza
              a főoldalra, vagy nézze meg a szolgáltatásainkat.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 text-sm font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
              >
                <ArrowLeft size={16} />
                Vissza a főoldalra
              </Link>
              <Link
                to="/szolgaltatasok"
                className="inline-flex items-center gap-2 rounded bg-amber px-6 py-3 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02]"
                style={{ background: SITE.accent }}
              >
                Szolgáltatások
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
