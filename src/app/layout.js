import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

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
  // Optional: Google Search Console HTML-tag verification token
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col antialiased">
        <JsonLd data={schema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}