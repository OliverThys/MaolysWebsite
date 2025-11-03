import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maolys - Intelligence Artificielle & Développement sur Mesure",
    template: "%s | Maolys",
  },
  description:
    "Transformez vos processus métier avec l'intelligence artificielle. Solutions IA sur mesure, développement full-stack, et automatisation pour entreprises en Belgique.",
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
    title: "Maolys - Intelligence Artificielle & Développement sur Mesure",
    description:
      "Transformez vos processus métier avec l'intelligence artificielle. De l'idée à la production en quelques semaines.",
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
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
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
                "Entreprise spécialisée dans le développement informatique avec une forte expertise en intelligence artificielle",
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

