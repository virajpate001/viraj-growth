// src/app/client-reviews/page.js
import Link from "next/link";
import { Star } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";
import JsonLd from "@/components/JsonLd";
import { pageMeta, breadcrumbSchema } from "@/lib/seo";
import { site, siteUrl } from "@/lib/site";
import {
  AGGREGATE,
  REVIEWS,
  PROJECT_TYPE_STATS,
  CRITICAL_FEEDBACK,
} from "@/lib/clientReviews";

export const metadata = pageMeta({
  title: "Ecommerce Developer Client Reviews & Testimonials",
  description:
    "Verified ecommerce developer reviews and testimonials: what clients say about the build process, communication, and results across our ecommerce projects.",
  path: "/client-reviews",
});

function Stars({ rating = 5, size = 16 }) {
  return (
    <span className="inline-flex items-center gap-0.5 text-accent" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={size} fill={i < rating ? "currentColor" : "none"} strokeWidth={1.5} />
      ))}
    </span>
  );
}

export default function ClientReviewsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Ecommerce Developer Client Reviews & Testimonials",
    description:
      "Verified ecommerce developer reviews and testimonials: what clients say about the build process, communication, and results across our ecommerce projects.",
    url: `${siteUrl}/client-reviews`,
    datePublished: "2026-11-06",
    dateModified: "2026-11-06",
    publisher: { "@type": "Organization", name: site.name, url: siteUrl },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(AGGREGATE.ratingValue),
      reviewCount: String(AGGREGATE.reviewCount),
      bestRating: String(AGGREGATE.bestRating),
      worstRating: String(AGGREGATE.worstRating),
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: siteUrl,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: String(AGGREGATE.ratingValue),
      reviewCount: String(AGGREGATE.reviewCount),
    },
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      author: { "@type": "Person", name: r.name },
      reviewRating: { "@type": "Rating", ratingValue: String(r.rating), bestRating: "5" },
      datePublished: r.date,
      reviewBody: r.body,
    })),
  };

  return (
    <>
      <JsonLd data={webPageSchema} />
      <JsonLd data={organizationSchema} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Client Reviews", path: "/client-reviews" },
        ])}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg2 py-20 sm:py-28">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]"
        />
        <Container className="relative">
          <h1 data-reveal className="max-w-3xl text-[clamp(2.5rem,6vw,4.5rem)]">
            Ecommerce developer client <span className="text-accent">reviews</span>.
          </h1>

          {/* Aggregate rating — surfaced prominently for Google's aggregateRating schema */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Stars rating={5} size={22} />
            <p className="text-lg">
              <strong className="text-ink">4.9 out of 5</strong>
              <span className="text-muted"> based on 37 verified client reviews</span>
            </p>
          </div>

          <p data-reveal className="mt-6 max-w-xl text-lg text-muted">
            Reviews from clients who agreed to be named, with links to the case study or project details for each. Every review is from a real completed project.
          </p>
        </Container>
      </section>

      <Container className="py-20">
        {/* How reviews work */}
        <section id="how-reviews-work">
          <h2 className="text-3xl sm:text-4xl">How Our Review Process Works</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Reviews are worth more when the reader understands how they were collected. Here is exactly how ours work.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Who we ask</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Every client who completes a project with us is asked for a review. The ask is made after the warranty period ends — usually 30 to 90 days after launch — so the client has had time to use the store in production. We do not cherry-pick which clients to ask; the goal is the full picture.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">What we ask</h3>
          <p className="mt-3 max-w-2xl text-muted">
            We ask three questions: what went well, what did not go well, and whether they would recommend us. We do not edit the answers. If a client wants to include a criticism, we publish the criticism.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Who is named</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Reviews are published with the client's permission. Some clients prefer to be anonymous, and their reviews appear in the aggregate count but not in the named list. The named reviews are all clients who have explicitly agreed to be quoted publicly.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">How reviews are verified</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Every named review is linked to a specific project — either a case study, a live store URL, or both. If a review claims a specific outcome, the case study or live store shows the outcome. Reviews that cannot be verified are not published.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">What we do not do</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li>We do not solicit only positive reviews.</li>
            <li>We do not edit client quotes to make them more flattering.</li>
            <li>We do not pay for reviews.</li>
            <li>We do not delete negative reviews, as long as the feedback is honest and specific.</li>
          </ul>
        </section>

        {/* All reviews */}
        <section id="all-reviews" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">All Reviews</h2>
          <p className="mt-4 max-w-2xl text-muted">
            The reviews below are ordered by date, most recent first. Each one includes the client name, the project type, and a link to the case study or project page.
          </p>

          <div className="mt-10 space-y-6">
            {REVIEWS.map((r) => (
              <article
                key={`${r.name}-${r.date}`}
                className="rounded-2xl border border-line bg-card p-7 sm:p-8"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="text-xl text-ink">
                    {r.name} — {r.projectType} ({r.projectDetail})
                  </h3>
                  <Stars rating={r.rating} size={16} />
                </div>
                <p className="mt-2 text-xs text-subtle">
                  <strong className="text-ink">Rating:</strong> {r.rating} out of 5 · <strong className="text-ink">Date:</strong> {r.dateDisplay}
                </p>
                <blockquote className="mt-5 border-l-2 border-accent pl-5 font-display text-lg leading-snug text-ink/90 sm:text-xl">
                  &ldquo;{r.body}&rdquo;
                </blockquote>
                <p className="mt-5 text-sm text-muted">
                  {r.projectLink ? (
                    <>
                      Project:{" "}
                      <Link
                        href={r.projectLink.href}
                        className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                      >
                        {r.projectLink.label}
                      </Link>
                    </>
                  ) : (
                    <>{r.projectNote}</>
                  )}
                </p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-muted">
            The six reviews above are the ones with published permission. The other 31 reviews (from clients who preferred to be anonymous) are reflected in the aggregate rating but not published individually. If you would like to speak with a reference directly during the hiring process, we can arrange it — see the <a href="#cta" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">get in touch</a> section.
          </p>
        </section>

        {/* By project type */}
        <section id="by-project-type" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">Reviews by Project Type</h2>
          <p className="mt-4 max-w-2xl text-muted">
            If you want to see reviews from clients whose projects resemble yours, the table below organizes the review archive by project type.
          </p>
          <div
            role="region"
            aria-label="Reviews by project type, scroll sideways on small screens"
            tabIndex={0}
            className="mt-8 overflow-x-auto rounded-xl border border-line"
          >
            <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
              <thead className="bg-elevated">
                <tr>
                  <th scope="col" className="px-4 py-3 font-heading text-xs font-bold text-ink">Project type</th>
                  <th scope="col" className="px-4 py-3 font-heading text-xs font-bold text-ink">Reviews</th>
                  <th scope="col" className="px-4 py-3 font-heading text-xs font-bold text-ink">Average rating</th>
                </tr>
              </thead>
              <tbody>
                {PROJECT_TYPE_STATS.map((s) => (
                  <tr key={s.type} className="border-t border-line transition-colors hover:bg-accent/5">
                    <td className="px-4 py-3.5 align-top font-semibold text-ink">{s.type}</td>
                    <td className="px-4 py-3.5 align-top text-muted">{s.count}</td>
                    <td className="px-4 py-3.5 align-top text-muted">{s.avg.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 max-w-2xl text-muted">
            The project types above correspond to the platforms and scopes described in{" "}
            <Link href="/shopify-vs-woocommerce-vs-custom" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              Shopify vs WooCommerce vs custom builds
            </Link>{" "}
            and to the role distinctions in{" "}
            <Link href="/developer-vs-web-designer-vs-full-stack" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              developer vs web designer vs full-stack
            </Link>.
          </p>
        </section>

        {/* Themes */}
        <section id="themes" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">Themes Across Reviews</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Across 37 reviews, three themes appear consistently in the positive feedback. If you are evaluating us, these are the things we are reliably good at — and the things you should expect from a project with us.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Communication</h3>
          <p className="mt-3 max-w-2xl text-muted">
            The single most common theme. Clients mention that they knew where the project stood at every stage, that questions were answered the same day, and that the developer was proactive about raising issues. This is what most clients cite when asked what they would tell a friend considering us.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Delivery reliability</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Clients mention that the project was delivered on schedule and without surprises after launch. This is not accidental — it comes from the milestone-based process described in{" "}
            <Link href="/ecommerce-development-process-milestones" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              the ecommerce development process
            </Link>, including the buffer we build into every schedule.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Post-launch support</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Clients who stay with us for maintenance mention that the ongoing support is proactive, not just reactive fixes after something breaks. The maintenance agreement is set up before launch, not after, which is why the stores we build tend to stay stable through their first two seasonal peaks.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">What clients mention less often</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Design is mentioned less often in positive reviews than communication or delivery, which is consistent with how we position our services — we implement design, we do not lead with it. If design is the primary thing you are evaluating, see{" "}
            <Link href="/developer-vs-web-designer-vs-full-stack" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              developer vs web designer vs full-stack
            </Link>{" "}
            for whether we are the right fit.
          </p>
        </section>

        {/* Critical feedback */}
        <section id="critical" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">Critical Feedback We've Received</h2>
          <p className="mt-4 max-w-2xl text-muted">
            Every service business has received critical feedback, and pretending otherwise makes the positive reviews less credible. Here is the critical feedback we have received, and what we have done about it.
          </p>

          <div className="mt-10 space-y-6">
            {CRITICAL_FEEDBACK.map((c) => (
              <article key={c.quote} className="rounded-2xl border border-line bg-card p-7">
                <h3 className="text-xl text-ink">{c.quote}</h3>
                <p className="mt-3 text-muted">{c.response}</p>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-2xl text-muted">
            This section is deliberately shorter than the positive reviews, because there is genuinely less critical feedback. But we have not deleted it, and we do not plan to. If you are evaluating us, reading this section tells you more about how we work than the positive reviews do.
          </p>
        </section>

        {/* Third-party */}
        <section id="third-party" className="mt-20">
          <h2 className="text-3xl sm:text-4xl">Third-Party Review Platforms</h2>
          <p className="mt-4 max-w-2xl text-muted">
            The reviews above are collected directly by us, which means they should be read with that in mind. Third-party review platforms have different trade-offs — they are harder to manipulate, but they tend to reflect only the clients who are motivated to leave a review (positive or negative). Both sources together give a more complete picture.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">Where we are reviewed</h3>
          <p className="mt-3 max-w-2xl text-muted">
            We are listed on Clutch, Google Business Profile, and (for specific projects) Shopify's partner directory. We ask clients to leave reviews on these platforms when they are willing, because third-party verification is more credible than self-hosted reviews.
          </p>

          <h3 className="mt-10 text-xl sm:text-2xl">What to look for in third-party reviews</h3>
          <ul className="mt-3 space-y-2 text-muted">
            <li><strong className="text-ink">Verified reviews.</strong> Most platforms require the reviewer to confirm the engagement. Unverified reviews are worth less.</li>
            <li><strong className="text-ink">Recent reviews.</strong> A pattern from the last 12 months is more predictive than a pattern from 2018.</li>
            <li><strong className="text-ink">Specific reviews.</strong> A review that names a specific project and outcome is worth more than a generic "great experience."</li>
            <li><strong className="text-ink">Critical reviews.</strong> How a business responds to critical reviews is often more informative than the critical review itself.</li>
          </ul>

          <h3 className="mt-10 text-xl sm:text-2xl">Why we do not use incentivized reviews</h3>
          <p className="mt-3 max-w-2xl text-muted">
            Some businesses offer a discount or gift card in exchange for a review. We do not. Incentivized reviews tend to be less honest and less useful to buyers, and the platforms that allow them tend to have lower review quality. If you want to verify our reviews, the best approach is to ask for a reference call — see the{" "}
            <a href="#cta" className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">get in touch</a>{" "}
            section.
          </p>
        </section>

        {/* CTA */}
        <section id="cta" className="mt-20 flex flex-col gap-6 border-t border-line pt-10 lg:flex-row lg:items-center lg:justify-between">
          <p className="max-w-md text-lg text-muted">
            If the reviews above match the kind of project you have in mind, the next step is a short call to discuss scope and timeline.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button href="/contact" arrow>
              Book a call or request a reference
            </Button>
            <Button href="/ecommerce-build-case-study" variant="outline">
              Read the case study
            </Button>
          </div>
        </section>
      </Container>
    </>
  );
}