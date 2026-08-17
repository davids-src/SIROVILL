import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-36 pb-28 sm:pt-44">
      <div className="hero-grid absolute inset-0" aria-hidden="true" />
      <div className="ambient-glow absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-site px-6 text-center">
        <p className="label" style={{ color: ACCENT }}>404</p>
        <h1
          className="mt-6 text-4xl font-bold text-ink sm:text-5xl"
          style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}
        >
          Az oldal nem található
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base text-muted sm:text-lg">
          A keresett oldal nem létezik, vagy áthelyezésre került.
        </p>
        <div className="mt-9 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded border border-line px-6 py-3 text-sm font-semibold text-ink transition-colors duration-150 hover:border-silver"
          >
            <ArrowLeft size={16} />
            Vissza a főoldalra
          </Link>
        </div>
      </div>
    </section>
  );
}
