import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { getPublishedPosts, BLOG_CATEGORIES } from "@/lib/blog";
import { SITE } from "@/lib/site";

const ACCENT = SITE.accent;

export const metadata: Metadata = {
  title: "Blog — Épületvillamosság, felújítás, okosotthon",
  description: "Épületvillamosság, felújítás, építkezés és okosotthon témájú cikkek a SIROVILL szakértőitől.",
  openGraph: { title: "Blog — SIROVILL", url: "https://sirovill.hu/blog" },
  alternates: { canonical: "https://sirovill.hu/blog" },
};

export default function BlogListPage() {
  const posts = getPublishedPosts();

  return (
    <>
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Eyebrow accent={ACCENT}>BLOG</Eyebrow>
            <h1 className="mt-6 text-4xl font-bold text-ink sm:text-5xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Blog
            </h1>
            <p className="mt-5 text-base text-muted sm:text-lg">
              Épületvillamosság, felújítás, építkezés és okosotthon témájú cikkek a SIROVILL szakértőitől.
            </p>
          </Reveal>
        </div>
      </section>

      <Section>
        {posts.length === 0 ? (
          <Reveal className="max-w-2xl">
            <div className="rounded-lg border border-line bg-surface p-12 text-center">
              <p className="text-base text-muted sm:text-lg">
                Hamarosan érkeznek az első cikkek. A felmérés és az ajánlat viszont már most díjmentes.
              </p>
              <Link
                href="/kapcsolat"
                className="mt-6 inline-flex items-center gap-2 rounded px-6 py-3 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02]"
                style={{ background: ACCENT }}
              >
                Ingyenes felmérés
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block h-full rounded-lg border border-line bg-surface p-8 transition-colors duration-150 hover:border-silver/40"
                >
                  <span
                    className="label inline-block rounded-sm border px-2.5 py-1"
                    style={{ color: ACCENT, borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
                  >
                    {post.category}
                  </span>
                  <h2 className="mt-4 text-lg font-semibold text-ink">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 border-t border-line/50 pt-4 text-xs text-muted">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} strokeWidth={1.5} />
                      {new Date(post.publishedAt).toLocaleDateString("hu-HU")}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} strokeWidth={1.5} />
                      {post.author}
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        )}

        <Reveal className="mt-12">
          <div className="flex flex-wrap gap-2">
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-sm border border-line px-3 py-1.5 text-xs font-semibold text-muted"
              >
                {cat}
              </span>
            ))}
          </div>
        </Reveal>
      </Section>
    </>
  );
}
