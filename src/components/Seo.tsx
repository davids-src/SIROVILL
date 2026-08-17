import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SITE } from "../lib/site";

interface SeoProps {
  title?: string;
  description?: string;
  jsonLd?: Record<string, unknown>;
}

export function Seo({ title, description, jsonLd }: SeoProps) {
  const location = useLocation();
  const fullTitle = title ?? "SIROVILL — Villanyszerelés | SIROTECH Group";
  const desc = description ?? SITE.domain;
  const url = `${SITE.baseUrl}${location.pathname}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={desc} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="hu_HU" />
      <meta property="og:url" content={url} />
      <meta name="twitter:card" content="summary_large_image" />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}

export function usePageView() {
  const location = useLocation();
  useEffect(() => {
    const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
    if (typeof gtag === "function") {
      gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location.pathname]);
}
