// src/lib/guides.js

import "server-only";
import fs from "node:fs";
import path from "node:path";

const DIR = path.join(process.cwd(), "src", "content", "guides");
const isDev = process.env.NODE_ENV !== "production";
let cache = null;

const SKIP_KEYS = new Set(["type", "id", "a", "slug", "kind", "topic"]);

function collect(o, out) {
  if (typeof o === "string") out.push(o);
  else if (Array.isArray(o)) o.forEach((v) => collect(v, out));
  else if (o && typeof o === "object") {
    for (const [k, v] of Object.entries(o)) if (!SKIP_KEYS.has(k)) collect(v, out);
  }
}

// Plain text of an inline array (used for schema and word counts)
export function plain(nodes) {
  const out = [];
  collect(nodes, out);
  return out.join(" ").replace(/\s+/g, " ").trim();
}

function loadAll() {
  if (cache && !isDev) return cache;
  cache = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")))
    .map((g) => {
      const words = plain([g.intro, g.sections]).split(" ").length;
      return { ...g, minutes: Math.max(1, Math.round(words / 220)) };
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
  return cache;
}

// Guides visitors can see. Drafts show only in development.
export function allGuides() {
  return loadAll().filter((g) => isDev || !g.draft);
}

export function getGuide(slug) {
  return allGuides().find((g) => g.slug === slug) || null;
} 

// Pages of the main site that guide text may link to.
// Anything not listed here and not a live guide is shown as plain text, so visitors never hit a 404.
const ALIASES = {
  "/": "/",
  "/contact": "/contact",
  "/ecommerce-development-services": "/services",
  "/ecommerce-build-case-study": "/case-studies",
  "/client-reviews": "/client-reviews",
  "/shopify-vs-woocommerce-vs-custom": "/blog/shopify-vs-woocommerce",
  // Add this line — the download file, not a guide
  "/downloads/ecommerce-developer-brief-template.docx": "/downloads/ecommerce-developer-brief-template.docx",
  
};

export function resolveHref(href) {
  if (!href) return null;
  if (/^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#")) return href;

  const [p, hash = ""] = href.split("#");
  const frag = hash ? `#${hash}` : "";
  const target = ALIASES[p] ?? `/${p.replace(/^\//, "")}`;

  const [targetPath, targetHash = ""] = target.split("#");
  const seg = targetPath.split("/")[1];
  const everySlug = new Set(loadAll().map((g) => g.slug));
  const liveSlug = new Set(allGuides().map((g) => g.slug));

  if (everySlug.has(seg)) {
    if (!liveSlug.has(seg)) return null; // draft or hidden
    return targetPath + (targetHash ? `#${targetHash}` : frag);
  }
  if (p in ALIASES) return target;
  return null; // page does not exist yet
}

// Guides this guide links to (most-linked first), topped up with the rest
export function relatedGuides(guide, limit = 3) {
  const counts = new Map();
  const walk = (o) => {
    if (Array.isArray(o)) o.forEach(walk);
    else if (o && typeof o === "object") {
      if (typeof o.a === "string") {
        const seg = (resolveHref(o.a) || "").split("#")[0].split("/")[1];
        if (seg && seg !== guide.slug) counts.set(seg, (counts.get(seg) || 0) + 1);
      }
      Object.values(o).forEach(walk);
    }
  };
  walk([guide.intro, guide.sections]);

  const live = allGuides().filter((g) => g.slug !== guide.slug);
  const linked = [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([slug]) => live.find((g) => g.slug === slug))
    .filter(Boolean);
  const rest = live.filter((g) => !linked.includes(g));
  return [...linked, ...rest].slice(0, limit);
}
