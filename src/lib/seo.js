import { site, siteUrl } from "./site";

// Use this in every page. It sets title, description, canonical and Open Graph.
export function pageMeta({ title, description, path, type = "website", openGraph = {} }) {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_IN",
      ...openGraph,
    },
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${siteUrl}${it.path}`,
    })),
  };
}