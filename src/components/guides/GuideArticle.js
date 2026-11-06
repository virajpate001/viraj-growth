import { Fragment } from "react";
import Link from "next/link";
import { CalendarDays, Clock, Hash, ArrowUpRight } from "lucide-react";
import Container from "../Container";
import WhatsAppButton from "../WhatsAppButton";
import Blocks from "./Blocks";
import Inline from "./Inline";
import FaqList from "./FaqList";
import ReadingProgress from "./ReadingProgress";
import TableOfContents from "./TableOfContents";
import ShareBar from "./ShareBar";
import AuthorBox from "./AuthorBox";
import { AnalyzerCta, TalkCta } from "./GuideCta";
import { relatedGuides } from "@/lib/guides";
import { whatsappUrl, guideMessage } from "@/lib/whatsapp";
import { formatDate } from "@/lib/utils";

function SectionHeading({ id, title }) {
  return (
    <h2 className="text-3xl sm:text-4xl">
      <a href={`#${id}`} className="group inline-flex items-baseline gap-3">
        {title}
        <Hash
          size={20}
          aria-hidden="true"
          className="shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100"
        />
      </a>
    </h2>
  );
}

export default function GuideArticle({ guide: g }) {
  const toc = g.sections.map(({ id, title }) => ({ id, title }));
  const related = relatedGuides(g, 3);
  const isDev = process.env.NODE_ENV !== "production";

  return (
    <>
      <ReadingProgress />

      {/* Hero */}
      <section className="relative overflow-hidden bg-bg2">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[130px]"
        />
        <Container className="relative py-14 sm:py-20">
          <div className="max-w-4xl">
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
              <Link href="/" className="transition-colors hover:text-accent">Home</Link>
              <span aria-hidden="true" className="mx-2 text-subtle">/</span>
              <Link href="/guides" className="transition-colors hover:text-accent">Guides</Link>
            </nav>

            <p className="mt-8 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
              {g.topic}
            </p>
            <h1 data-reveal className="mt-5 text-[clamp(2.25rem,5.5vw,4rem)]">
              {g.h1}
            </h1>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
              <span className="inline-flex items-center gap-2">
                <CalendarDays size={16} className="text-accent" aria-hidden="true" />
                Updated <time dateTime={g.updated}>{formatDate(g.updated)}</time>
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock size={16} className="text-accent" aria-hidden="true" />
                {g.minutes} min read
              </span>
            </div>
            <div className="mt-6">
              <ShareBar title={g.h1} />
            </div>
          </div>
        </Container>
      </section>

      {isDev && g.draft && (
        <p className="bg-accent px-5 py-2 text-center text-sm font-semibold text-bg">
          Draft page: visible only in development. Replace the sample content, then remove &quot;draft&quot; from its JSON file to publish.
        </p>
      )}

      {/* Body */}
      <Container className="grid gap-12 py-14 lg:grid-cols-[minmax(0,1fr)_16rem] xl:gap-24">
        <div id="guide-body" className="min-w-0 max-w-3xl">
          <TableOfContents items={toc} variant="mobile" />

          <div className="mt-8 space-y-6 lg:mt-0">
            {g.intro.map((b, i) =>
              i === 0 && b.type === "p" ? (
                <p key={i} className="text-xl leading-relaxed text-ink/90">
                  <Inline nodes={b.inline} />
                </p>
              ) : (
                <Blocks key={i} blocks={[b]} />
              )
            )}
          </div>

          {g.sections.map((s, idx) => (
            <Fragment key={s.id}>
              {s.cta ? (
                <section
                  data-guide-section
                  className="relative mt-16 overflow-hidden rounded-3xl border border-line bg-card p-8 sm:p-12"
                >
                  <span id={s.id} aria-hidden="true" className="absolute -top-28" />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -bottom-32 -right-16 h-72 w-72 rounded-full bg-accent/15 blur-[100px]"
                  />
                  <div className="relative">
                    <SectionHeading id={s.id} title={s.title} />
                    <div className="mt-5 space-y-4">
                      <Blocks blocks={s.blocks} />
                    </div>
                    <TalkCta title={g.h1} />
                  </div>
                </section>
              ) : (
                <section data-guide-section className="relative mt-14 border-t border-line pt-12">
                  <span id={s.id} aria-hidden="true" className="absolute -top-28" />
                  <SectionHeading id={s.id} title={s.title} />
                  {s.faqs ? (
                    <FaqList faqs={s.faqs} />
                  ) : (
                    <div className="mt-6 space-y-5">
                      <Blocks blocks={s.blocks} />
                    </div>
                  )}
                </section>
              )}

              {idx === 2 && g.sections.length > 5 && (
                <div className="mt-14">
                  <AnalyzerCta />
                </div>
              )}
            </Fragment>
          ))}

          <div className="mt-14 space-y-8">
            <ShareBar title={g.h1} />
            <AuthorBox />
          </div>
        </div>

        <aside className="hidden lg:block print:hidden">
          <div className="sticky top-28 space-y-8">
            <TableOfContents items={toc} />
            <div className="rounded-2xl border border-line bg-card p-5">
              <p className="font-heading text-sm font-bold">Have a question?</p>
              <p className="mt-2 text-sm text-muted">Ask me directly. I reply personally.</p>
              <WhatsAppButton
                href={whatsappUrl(guideMessage(g.h1))}
                source="guide_sidebar"
                className="mt-4 w-full !px-4 !py-2.5"
              >
                WhatsApp me
              </WhatsAppButton>
            </div>
          </div>
        </aside>
      </Container>

      {/* Related guides */}
      {related.length > 0 && (
        <section className="border-t border-line bg-bg2 py-20 print:hidden">
          <Container>
            <h2 className="text-3xl sm:text-4xl">Keep reading</h2>
            <ul className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/${r.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-line bg-card p-6 transition-colors duration-300 hover:border-accent/50"
                  >
                    <span className="text-xs text-accent">{r.topic}</span>
                    <span className="mt-3 text-xl font-bold transition-colors duration-300 group-hover:text-accent">
                      {r.h1}
                    </span>
                    <span className="mt-6 flex items-center justify-between border-t border-line pt-4 text-xs text-subtle">
                      {r.minutes} min read
                      <ArrowUpRight
                        size={18}
                        className="transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </>
  );
}
