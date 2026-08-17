import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Calendar, User, ArrowLeft, ChevronRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { Eyebrow } from "@/components/Eyebrow";
import { Section } from "@/components/Section";
import { ButtonLink } from "@/components/Button";
import { getPostBySlug, getAllPublishedSlugs } from "@/lib/blog";
import { SITE } from "@/lib/site";
import { BlogReadTracker } from "@/components/Trackers";

const ACCENT = SITE.accent;

export async function generateStaticParams() {
  const slugs = getAllPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Cikk nem található" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sirovill.hu/blog/${post.slug}`,
      type: "article",
    },
    alternates: { canonical: `https://sirovill.hu/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <>
      <BlogReadTracker slug={slug} category={post.category} />
      <section className="relative overflow-hidden border-b border-line/50 pt-36 pb-20 sm:pt-44">
        <div className="hero-grid absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-site px-6">
          <Reveal>
            <nav className="flex items-center gap-1.5 text-sm text-muted">
              <Link href="/blog" className="hover:text-ink transition-colors duration-150">Blog</Link>
              <ChevronRight size={14} />
              <span className="text-ink">{post.title}</span>
            </nav>
            <div className="mt-6 max-w-3xl">
              <span
                className="label inline-block rounded-sm border px-2.5 py-1"
                style={{ color: ACCENT, borderColor: `${ACCENT}40`, background: `${ACCENT}12` }}
              >
                {post.category}
              </span>
              <h1 className="mt-5 text-4xl font-bold text-ink sm:text-5xl" style={{ letterSpacing: "-0.04em", lineHeight: 1.05 }}>
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-4 text-sm text-muted">
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
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div
              className="prose-blog"
              dangerouslySetInnerHTML={{ __html: markdownToHtml(post.content) }}
            />
          </Reveal>
          <Reveal className="lg:col-span-5" delay={0.1}>
            <div className="sticky top-24 rounded-lg border border-line bg-surface p-8">
              <Eyebrow accent={ACCENT}>INGYENES FELMÉRÉS</Eyebrow>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                Kérdése van? Hívjon, vagy kérjen felmérést.
              </h3>
              <p className="mt-3 text-sm text-muted">
                A felmérés díjmentes, és nem kötelezi semmire.
              </p>
              <div className="mt-6 space-y-3">
                <ButtonLink
                  to={`/kapcsolat?forras=blog-${slug}`}
                  variant="accent"
                  className="w-full"
                >
                  Ingyenes felmérés kérése
                </ButtonLink>
                <Link
                  href="/blog"
                  className="inline-flex w-full items-center justify-center gap-2 rounded border border-line px-6 py-3 text-sm font-semibold text-muted transition-colors duration-150 hover:border-silver hover:text-ink"
                >
                  <ArrowLeft size={16} />
                  Vissza a bloghoz
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}

function markdownToHtml(markdown: string): string {
  return markdown
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*<\/li>)/, "<ul>$1</ul>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hup])(.+)$/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "");
}
