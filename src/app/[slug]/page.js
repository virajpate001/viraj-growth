import { notFound } from "next/navigation";
import GuideArticle from "@/components/guides/GuideArticle";
import JsonLd from "@/components/JsonLd";
import { allGuides, getGuide, plain } from "@/lib/guides";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";

// Only guides in src/content/guides exist as pages. Anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return allGuides().map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) return {};

  const meta = pageMeta({
    title: { absolute: g.title }, // keeps your own title, without the " | Viraj Pate" suffix
    description: g.description,
    path: `/${g.slug}`,
    type: g.kind === "portfolio" ? "website" : "article",
    openGraph: {
      title: g.ogTitle,
      description: g.ogDescription,
      ...(g.kind === "article" ? { publishedTime: g.published, modifiedTime: g.updated } : {}),
    },
  });
  if (g.draft) meta.robots = { index: false, follow: false };
  return meta;
}

export default async function GuidePage({ params }) {
  const { slug } = await params;
  const g = getGuide(slug);
  if (!g) notFound();

  const url = `${siteUrl}/${g.slug}`;
  const person = { "@id": `${siteUrl}/#person` };

  const main =
    g.kind === "portfolio"
      ? {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: g.h1,
          description: g.description,
          url,
          datePublished: g.published,
          dateModified: g.updated,
          publisher: person,
        }
      : {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: g.h1,
          description: g.description,
          datePublished: g.published,
          dateModified: g.updated,
          mainEntityOfPage: url,
          author: { "@type": "Person", ...person, name: site.name },
          publisher: person,
        };

  const faqs = g.sections.find((s) => s.faqs)?.faqs || [];
  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
        })),
      }
    : null;

  return (
    <>
      <JsonLd data={main} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Guides", path: "/guides" },
          { name: g.h1, path: `/${g.slug}` },
        ])}
      />
      <GuideArticle guide={g} />
    </>
  );
}
