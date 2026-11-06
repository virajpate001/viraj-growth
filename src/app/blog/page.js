import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import ImageFrame from "@/components/ImageFrame";
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
      <section className="bg-bg2 py-20 sm:py-28">
        <Container>
          <h1 className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Practical advice to help your store{" "}
            <span className="text-accent">grow</span>.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted">
            Plain-language guides on platforms, conversion, speed and SEO.
          </p>
        </Container>
      </section>

      <Container className="py-20">
        <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sorted.map((p) => (
            <li key={p.slug}>
              <FadeIn className="h-full">
                <Link
                  href={`/blog/${p.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-card transition-colors duration-300 hover:border-accent/50"
                >
                  <ImageFrame
                    src={p.image}
                    alt={p.imageAlt}
                    label="Add a featured image"
                    ratio="aspect-[16/10]"
                    parallax={0}
                    reveal={false}
                    bare
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs">
                      <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
                        {p.category}
                      </span>
                      <span className="text-subtle">{p.readingTime}</span>
                    </div>
                    <h2 className="mt-4 text-xl transition-colors duration-300 group-hover:text-accent sm:text-2xl">
                      {p.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 flex-1 text-sm text-muted">
                      {p.description}
                    </p>
                    <div className="mt-6 flex items-center justify-between border-t border-line pt-4">
                      <time dateTime={p.date} className="text-xs text-subtle">
                        {formatDate(p.date)}
                      </time>
                      <span className="flex items-center gap-1 font-heading text-sm font-bold text-ink transition-colors duration-300 group-hover:text-accent">
                        Read article
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            </li>
          ))}
        </ul>
      </Container>
    </>
  );
}