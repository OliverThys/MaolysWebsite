import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { BASE_PATH } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maolys - Développement Informatique & IA sur Mesure",
    template: "%s | Maolys",
  },
  description:
    "Développement informatique sur mesure : applications web, desktop, solutions IA et automatisation. Startup belge avec expertise full-stack pour transformer vos processus métier.",
  keywords: [
    "développement IA Belgique",
    "solutions intelligence artificielle sur mesure",
    "automatisation processus métier IA",
    "développeur full-stack Mons",
    "consultant IA Wallonie",
    "application métier intelligente",
    "développement web Belgique",
    "IA conversationnelle",
  ],
  authors: [{ name: "Maolys" }],
  creator: "Maolys",
  publisher: "Maolys",
  metadataBase: new URL("https://maolys.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_BE",
    url: "https://maolys.com",
    siteName: "Maolys",
    title: "Maolys - Développement Informatique & IA sur Mesure",
    description:
      "Développement informatique et solutions IA sur mesure. Applications web, desktop et automatisation pour transformer vos processus métier.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Maolys - Intelligence Artificielle & Développement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Maolys - Intelligence Artificielle & Développement",
    description:
      "Transformez vos processus métier avec l'intelligence artificielle.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${BASE_PATH}/logo.png`} />
        <link rel="apple-touch-icon" href={`${BASE_PATH}/logo.png`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Maolys",
              url: "https://maolys.com",
              logo: "https://maolys.com/logo.png",
              description:
                "Startup technologique spécialisée dans le développement informatique (applications web, desktop, full-stack) et l'intelligence artificielle",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mons",
                addressRegion: "Wallonie",
                addressCountry: "BE",
              },
              sameAs: [
                "https://github.com/maolys",
                "https://linkedin.com/company/maolys",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

