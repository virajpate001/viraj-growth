import Link from "next/link";
import { notFound } from "next/navigation";
import { Quote, Search } from "lucide-react";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import Button from "@/components/Button";
import SectionHeading from "@/components/SectionHeading";
import BeforeAfter from "@/components/BeforeAfter";
import JsonLd from "@/components/JsonLd";
import { caseStudies } from "@/data/caseStudies";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import ImageFrame from "@/components/ImageFrame";

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) return {};
  return pageMeta({
    title: cs.title,
    description: cs.summary,
    path: `/case-studies/${cs.slug}`,
    openGraph: cs.image
      ? { images: [{ url: cs.image, alt: cs.imageAlt }] }
      : {},
  });
}

export default async function CaseStudyPage({ params }) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);
  if (!cs) notFound();

  const others = caseStudies.filter((c) => c.slug !== slug);

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Case studies", path: "/case-studies" },
          { name: cs.title, path: `/case-studies/${cs.slug}` },
        ])}
      />

      {/* Hero */}
      <section className="bg-surface py-16">
        <Container className="max-w-4xl">
          <Link
            href="/case-studies"
            className="text-sm text-muted hover:text-ink"
          >
            &larr; All case studies
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-primary">
            {cs.industry} · {cs.platform}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {cs.title}
          </h1>
          <p className="mt-4 text-lg text-muted">{cs.summary}</p>

          <dl className="mt-8 grid gap-4 rounded-2xl border border-line bg-white p-5 text-sm sm:grid-cols-3">
            <div>
              <dt className="text-xs text-muted">Client</dt>
              <dd className="font-semibold">{cs.client}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Timeline</dt>
              <dd className="font-semibold">{cs.duration}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Services</dt>
              <dd className="font-semibold">{cs.services.join(", ")}</dd>
            </div>
          </dl>
        </Container>
      </section>

      {/* Hero image (only when you have added one) */}
      {cs.image && (
        <section className="pt-12">
          <Container className="max-w-5xl">
            <ImageFrame
              src={cs.image}
              alt={cs.imageAlt}
              ratio="aspect-[16/9]"
              priority
              parallax={6}
              sizes="(min-width: 1024px) 64rem, 100vw"
            />
          </Container>
        </section>
      )}

      {/* Results */}
      <section className="py-12">
        <Container className="max-w-4xl">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            {cs.results.map((r) => (
              <div
                key={r.label}
                className="rounded-2xl bg-primary-dark p-6 text-white"
              >
                <p className="font-display text-4xl font-extrabold text-accent-dark">
                  {r.value}
                </p>
                <p className="mt-1 text-sm text-white/80">{r.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Challenge */}
      <section className="py-10">
        <Container className="max-w-3xl">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
              The challenge
            </p>
            <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
              What was going wrong
            </h2>
            <div className="mt-4 space-y-4 text-muted">
              {cs.challenge.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Solution */}
      <section className="bg-surface py-16">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="The solution" title="What I did" />
          <div className="grid gap-5 sm:grid-cols-2">
            {cs.solution.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <p className="font-display text-2xl font-extrabold text-accent-dark">
                    0{i + 1}
                  </p>
                  <h3 className="mt-1 text-lg font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Before / after */}
      <section className="py-16">
        <Container className="max-w-3xl">
          <SectionHeading eyebrow="The result" title="Before and after" />
          <BeforeAfter metrics={cs.metrics} />
        </Container>
      </section>

      {/* Testimonial */}
      <section className="pb-16">
        <Container className="max-w-3xl">
          <figure className="rounded-2xl border border-line bg-white p-8">
            <Quote className="text-accent-dark" size={28} />
            <blockquote className="mt-3 text-lg">
              {cs.testimonial.quote}
            </blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold">{cs.testimonial.name}</span>
              <span className="text-muted"> · {cs.testimonial.role}</span>
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* What I'd check on your store */}
      <section className="bg-surface py-16">
        <Container className="max-w-3xl">
          <div className="rounded-3xl border-2 border-accent bg-white p-8 sm:p-10">
            <Search className="text-accent-dark" size={28} />
            <h2 className="mt-3 text-2xl font-bold">
              What I&apos;d check on your store
            </h2>
            <p className="mt-2 text-sm text-muted">
              These three checks found the biggest gains in this project.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
              {cs.fixes.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-muted">
              Want the full picture for your own business? The free analyzer
              scores 5 key areas and builds your 90-day plan.
            </p>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href="/analyzer">Get my free Growth Report</Button>
              <Button href="/contact" variant="outline">
                Talk to Viraj
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* More case studies (internal links) */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <h2 className="mb-6 text-xl font-bold">More case studies</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {others.map((o) => (
              <Link
                key={o.slug}
                href={`/case-studies/${o.slug}`}
                className="rounded-2xl border border-line bg-white p-5 transition-shadow hover:shadow-lg"
              >
                <p className="text-xs font-semibold text-primary">
                  {o.industry}
                </p>
                <p className="mt-1 font-bold">{o.title}</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
