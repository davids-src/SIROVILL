import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";
import { getPublishedPosts } from "@/lib/blog";

const BASE = "https://sirovill.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/szolgaltatasok`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/rolunk`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/kapcsolat`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/adatvedelem`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${BASE}/aszf`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/szolgaltatasok/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Csak a már megjelent blogcikkek — jövőbeli publishedAt kizárva
  const publishedPosts = getPublishedPosts();
  const blogPages: MetadataRoute.Sitemap = publishedPosts.map((post) => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticPages, ...servicePages, ...blogPages];
}
