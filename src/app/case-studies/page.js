import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import { caseStudies } from "@/data/caseStudies";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "E-commerce Case Studies: Real Results",
  description:
    "See how Shopify and WooCommerce stores improved conversion, speed and revenue. Challenge, solution and measurable results for each project.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-surface py-16 text-center">
        <Container>
          <h1 className="text-4xl font-extrabold sm:text-5xl">Case studies</h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Real problems, clear decisions and measurable results.
          </p>
        </Container>
      </section>

      <Container className="py-16">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((c, i) => (
            <FadeIn key={c.slug} delay={(i % 3) * 0.1}>
              <Link
                href={`/case-studies/${c.slug}`}
                className="flex h-full flex-col rounded-2xl border border-line bg-white p-6 transition-shadow hover:shadow-lg"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                  {c.industry} · {c.platform}
                </p>
                <h2 className="mt-3 text-xl font-bold">{c.title}</h2>
                <p className="mt-2 flex-1 text-sm text-muted">{c.summary}</p>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <p className="font-display text-3xl font-extrabold text-accent-dark">{c.results[0].value}</p>
                    <p className="text-xs text-muted">{c.results[0].label}</p>
                  </div>
                  <ArrowRight className="text-primary" size={20} />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-4 text-muted">Wondering what your store&apos;s biggest opportunity is?</p>
          <Button href="/analyzer">Take the Free Growth Analyzer</Button>
        </div>
      </Container>
    </>
  );
}