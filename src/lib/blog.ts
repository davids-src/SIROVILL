export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  author: string;
  category: string;
  coverImage?: string;
  content: string; // simple HTML/markdown-ish body
}

export const BLOG_CATEGORIES = [
  "Épületvillamosság",
  "Felújítás",
  "Építkezés",
  "Okosotthon",
] as const;

// Example post with a FUTURE-dated publishedAt — it will NOT appear until that date.
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "pelda-cikk",
    title: "Példa cikk — hamarosan",
    excerpt:
      "Ez egy példa cikk, amely jövőbeli dátummal jelenik meg. A tényleges tartalom a publikálás időpontjában válik láthatóvá.",
    publishedAt: "2026-12-01T08:00:00+01:00",
    author: "SIROVILL",
    category: "Épületvillamosság",
    content: `
      <p>Ez a cikk egy példa, amely a publikálási időpontig nem jelenik meg a weboldalon — sem a blog listán, sem a sitemap-ben. A tényleges cikkek majd a SIROVILL csapata által megírt tartalmak lesznek.</p>
      <h2>Miért időzített megjelenés?</h2>
      <p>A blog rendszer úgy van kialakítva, hogy a jövőbeli dátumú cikkek automatikusan rejtve maradjanak, amíg el nem érkezik a publikálás időpontja. Így előre lehet ütemezni a tartalmakat.</p>
    `,
  },
];

export function getPublishedPosts(): BlogPost[] {
  const now = Date.now();
  return BLOG_POSTS.filter((p) => new Date(p.publishedAt).getTime() <= now)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return getPublishedPosts().find((p) => p.slug === slug);
}
