// src/components/guides/AuthorBox.js

import Link from "next/link";

export default function AuthorBox() {
  return (
    <aside className="flex gap-5 rounded-2xl border border-line bg-card p-6 sm:p-8">
      <span
        aria-hidden="true"
        className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-accent/10 font-display text-xl font-bold text-accent"
      >
        V
      </span>
      <div>
        <p className="text-xs text-subtle">Written by</p>
        <p className="font-heading text-lg font-bold">Viraj Pate</p>
        <p className="mt-2 max-w-lg text-sm text-muted">
          Freelance Shopify and WooCommerce developer with 6+ years of experience and 20+ e-commerce stores built.
          I help startups and growing brands turn their website into a sales channel.
        </p>
        <Link href="/about" className="mt-3 inline-block text-sm font-semibold text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
          More about me
        </Link>
      </div>
    </aside>
  );
}
