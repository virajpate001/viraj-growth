import { siteUrl } from "@/lib/site";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/posts";
import { services } from "@/data/content";
import { allGuides } from "@/lib/guides";

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/analyzer", priority: 0.9 },
    { path: "/case-studies", priority: 0.8 },
    { path: "/blog", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact", priority: 0.7 },
    { path: "/privacy", priority: 0.2 },
    { path: "/guides", priority: 0.8 },
    { path: "/ecommerce-developers-by-city", priority: 0.8 },
    { path: "/client-reviews", priority: 0.8 },
  ].map((p) => ({
    url: `${siteUrl}${p.path}`,
    lastModified: now,
    priority: p.priority,
  }));

  const studies = caseStudies.map((c) => ({
    url: `${siteUrl}/case-studies/${c.slug}`,
    lastModified: now,
    priority: 0.7,
  }));

  const articles = posts.map((p) => ({
    url: `${siteUrl}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    priority: 0.7,
  }));

    const servicePages = services.map((s) => ({
    url: `${siteUrl}/services/${s.slug}`,
    lastModified: now,
    priority: 0.8,
  }));

  const guidePages = allGuides().map((g) => ({
  url: `${siteUrl}/${g.slug}`,
  lastModified: new Date(g.updated),
  priority: 0.8,
}));

  return [...pages,...guidePages, ...servicePages, ...studies, ...articles ];

  
}