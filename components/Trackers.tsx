"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

export function ServiceViewTracker({ slug, name }: { slug: string; name: string }) {
  useEffect(() => {
    trackEvent("service_view", {
      service_slug: slug,
      service_name: name,
    });
  }, [slug, name]);

  return null;
}

export function BlogReadTracker({ slug, category }: { slug: string; category: string }) {
  useEffect(() => {
    trackEvent("blog_read", {
      post_slug: slug,
      post_category: category,
    });
  }, [slug, category]);

  return null;
}
