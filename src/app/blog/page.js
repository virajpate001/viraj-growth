import Link from "next/link";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import { posts } from "@/data/posts";
import { formatDate } from "@/lib/utils";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "E-commerce Growth Blog",
  description:
    "Practical guides on Shopify, WooCommerce, conversion rate, speed and SEO for online store owners.",
  path: "/blog",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.date.localeCompare(a.date));
  return (
    <>
      <section className="bg-surface py-16 text-center">
        <Container>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Blog</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Practical advice to help your online store grow.
          </p>
        </Container>
      </section>

      <Container className="max-w-3xl space-y-6 py-16">
        {sorted.map((p, i) => (
          <FadeIn key={p.slug} delay={i * 0.08}>
            <Link
              href={`/blog/${p.slug}`}
              className="block rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                {p.category} · {formatDate(p.date)} · {p.readingTime}
              </p>
              <h2 className="mt-2 text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted">{p.description}</p>
            </Link>
          </FadeIn>
        ))}
      </Container>
    </>
  );
}