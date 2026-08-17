import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { Analytics } from "@/components/Analytics";
import { SITE } from "@/lib/site";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sirovill.hu"),
  title: {
    default: "SIROVILL — Villanyszerelés | Fejér megye, Budapest",
    template: "%s | SIROVILL",
  },
  description:
    "Épületvillamossági kivitelezés, felújítás, hibaelhárítás és kábelezés cégeknek és magánszemélyeknek. Fejér megye, Budapest, Közép-Dunántúl. Ingyenes felmérés.",
  openGraph: {
    type: "website",
    locale: "hu_HU",
    url: "https://sirovill.hu",
    siteName: "SIROVILL",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SIROVILL — Villanyszerelés, SIROTECH Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://sirovill.hu/#organization",
      name: SITE.cegnev,
      url: "https://sirotech.hu",
      subOrganization: {
        "@type": "LocalBusiness",
        "@id": "https://sirovill.hu/#localbusiness",
        name: "SIROVILL",
        parentOrganization: { "@id": "https://sirovill.hu/#organization" },
        url: SITE.baseUrl,
        telephone: SITE.telefon,
        email: SITE.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lövölde utca 24",
          addressLocality: "Székesfehérvár",
          postalCode: "8000",
          addressCountry: "HU",
        },
        areaServed: "Fejér megye, Budapest, Közép-Dunántúl",
        knowsAbout:
          "Épületvillamossági kivitelezés, felújítás, hibaelhárítás, kábelezés, okosotthon",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="hu"
      className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
