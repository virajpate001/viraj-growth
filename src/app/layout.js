import { Sora, Manrope, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import MotionProvider from "@/components/MotionProvider";
import ConsentAnalytics from "@/components/ConsentAnalytics";
import ScrollEffects from "@/components/ScrollEffects";
import Cursor from "@/components/Cursor";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const viewport = { themeColor: "#090A0F" };

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.title, template: "%s | Viraj Pate" },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  verification: process.env.NEXT_PUBLIC_GSC_TOKEN
    ? { google: process.env.NEXT_PUBLIC_GSC_TOKEN }
    : undefined,
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: site.name,
      jobTitle: site.jobTitle,
      url: siteUrl,
      sameAs: site.sameAs,
      knowsAbout: ["Shopify", "WooCommerce", "Next.js", "E-commerce SEO", "Conversion rate optimization"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Viraj Pate: E-commerce Web Design & Development",
      url: siteUrl,
      description: site.description,
      founder: { "@id": `${siteUrl}/#person` },
      areaServed: [{ "@type": "Country", name: "India" }, "Worldwide"],
      serviceType: [
        "Shopify development",
        "WooCommerce development",
        "E-commerce website design",
        "Website speed optimization",
        "E-commerce SEO",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: site.name,
      publisher: { "@id": `${siteUrl}/#person` },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sora.variable} ${manrope.variable} ${inter.variable}`}
    >
      <head>
        {/* Enables animation start states only when motion is allowed */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')",
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-bg text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-bg"
        >
          Skip to content
        </a>
        <JsonLd data={schema} />
        <Header />
        <main id="main" className="flex-1">
          <MotionProvider>{children}</MotionProvider>
        </main>
        <Footer />
        <Analytics />
        <ConsentAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <ScrollEffects />
        <Cursor />
      </body>
    </html>
  );
}