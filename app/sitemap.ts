import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { SOLUTIONS } from "@/lib/solutions";
import { getPublishedPosts } from "@/lib/blog";

const BASE = "https://sirovill.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: new Date("2026-09-23"), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/megoldasok`, lastModified: new Date("2026-09-23"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/szolgaltatasok`, lastModified: new Date("2026-09-23"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/partneri-egyuttmukodes`, lastModified: new Date("2026-09-23"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rolunk`, lastModified: new Date("2026-09-23"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kapcsolat`, lastModified: new Date("2026-09-23"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, lastModified: new Date("2026-09-23"), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/adatvedelem`, lastModified: new Date("2026-09-23"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/aszf`, lastModified: new Date("2026-09-23"), changeFrequency: "yearly", priority: 0.3 },
  ];

  const solutionPages: MetadataRoute.Sitemap = Object.values(SOLUTIONS).map((sol) => ({
    url: `${BASE}/megoldasok/${sol.slug}`,
    lastModified: new Date("2026-09-23"),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/szolgaltatasok/${s.slug}`,
    lastModified: new Date("2026-09-23"),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Csak a már megjelent blogcikkek — jövőbeli publishedAt kizárva
  const publishedPosts = getPublishedPosts();
  const blogPages: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  return [...staticPages, ...solutionPages, ...servicePages, ...blogPages];
}
