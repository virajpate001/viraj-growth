import { siteUrl } from "@/lib/site";
import { caseStudies } from "@/data/caseStudies";
import { posts } from "@/data/posts";

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

  return [...pages, ...studies, ...articles];
}