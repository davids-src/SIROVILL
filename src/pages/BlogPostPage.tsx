import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { Seo } from "../components/Seo";
import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { Eyebrow } from "../components/Eyebrow";
import { getPostBySlug } from "../lib/blog";
import { SITE } from "../lib/site";

const ACCENT = SITE.accent;

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <>
      <Seo title={`${post.title} — SIROVILL Blog`} description={post.excerpt} />
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal className="max-w-3xl">
            <Link to="/blog" className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-150 hover:text-ink">
              <ArrowLeft size={16} className="transition-transform duration-150 group-hover:-translate-x-1" />
              Vissza a bloghoz
            </Link>
            <div className="mt-6">
              <span
                className="label inline-block rounded-sm border px-2.5 py-1"
                style={{ color: ACCENT, borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
              >
                {post.category}
              </span>
              <h1
                className="mt-5 text-3xl font-bold text-ink sm:text-4xl lg:text-5xl"
                style={{ letterSpacing: "-0.04em", lineHeight: 1.1 }}
              >
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted">
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} strokeWidth={1.5} />
                  {new Date(post.publishedAt).toLocaleDateString("hu-HU")}
                </span>
                <span className="flex items-center gap-1.5">
                  <User size={14} strokeWidth={1.5} />
                  {post.author}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Section>
        <article className="max-w-3xl">
          <Reveal>
            <div
              className="prose-blog space-y-6 text-base text-ink sm:text-lg"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </Reveal>

          <Reveal className="mt-12 rounded-lg border border-line bg-surface p-8">
            <Eyebrow accent={ACCENT}>ELŐJEGYZÉS NYITVA</Eyebrow>
            <h2 className="mt-4 text-xl font-semibold text-ink">
              A felmérés és az ajánlat díjmentes
            </h2>
            <p className="mt-2 text-sm text-muted">
              A kivitelezés 2026. november 1-től indul.
            </p>
            <Link
              to="/kapcsolat?forras=sirovill-blog"
              className="mt-5 inline-flex items-center gap-2 rounded bg-amber px-6 py-3 text-sm font-semibold text-bg transition-transform duration-150 ease-out hover:scale-[1.02]"
              style={{ background: ACCENT }}
            >
              Ingyenes felmérés
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </article>
      </Section>
    </>
  );
}
