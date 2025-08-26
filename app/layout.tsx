import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://koncoweb.id"),
  title: { default: "KoncoWeb", template: "%s · KoncoWeb" },
  description:
    "Konsultan & pelatihan AI. Bangun aplikasi dan web lebih cepat dengan AI. Pelatihan trending: AI untuk developer & corporate.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "KoncoWeb",
    description:
      "Konsultan & Pelatihan AI. Pembuatan aplikasi & web dengan AI. Solusi untuk startup, corporate, dan instansi.",
    url: "https://koncoweb.id",
    siteName: "KoncoWeb",
    images: [{ url: "/images/og.png", width: 1200, height: 630, alt: "KoncoWeb" }],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KoncoWeb",
    description: "Konsultan & Pelatihan AI",
    images: ["/images/og.png"],
  },
  keywords: [
    "pelatihan AI",
    "kursus AI",
    "membuat aplikasi pakai AI",
    "konsultan AI",
    "implementasi AI",
    "AI untuk corporate",
    "AI untuk instansi pemerintah",
    "pembuatan aplikasi",
    "jasa pembuatan web",
    "Next.js",
    "Svelte",
    "serverless",
  ],
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KoncoWeb",
    url: "https://koncoweb.id",
    sameAs: [
      "https://x.com/koncoweb",
      "https://www.linkedin.com/company/koncoweb",
    ],
    logo: "https://koncoweb.id/images/icon.png",
  };
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
