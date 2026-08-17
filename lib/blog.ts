import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "content/blog");

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date
  author: string;
  category: string;
  coverImage?: string;
  content: string; // Markdown body
}

export const BLOG_CATEGORIES = [
  "Épületvillamosság",
  "Felújítás",
  "Építkezés",
  "Okosotthon",
] as const;

function readAllFromDisk(): BlogPost[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  return files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? "",
      publishedAt: data.publishedAt ?? "2099-01-01",
      author: data.author ?? "SIROVILL",
      category: data.category ?? "Épületvillamosság",
      coverImage: data.coverImage,
      content,
    };
  });
}

export function getPublishedPosts(): BlogPost[] {
  const now = Date.now();
  return readAllFromDisk()
    .filter((p) => new Date(p.publishedAt).getTime() <= now)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export function getAllPublishedSlugs(): string[] {
  return getPublishedPosts().map((p) => p.slug);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return undefined;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const post: BlogPost = {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? "",
    publishedAt: data.publishedAt ?? "2099-01-01",
    author: data.author ?? "SIROVILL",
    category: data.category ?? "Épületvillamosság",
    coverImage: data.coverImage,
    content,
  };
  // Jövőbeli dátumú cikk nem érhető el
  if (new Date(post.publishedAt).getTime() > Date.now()) return undefined;
  return post;
}
