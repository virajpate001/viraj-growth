"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import {
  Check,
  Flag,
  AlertTriangle,
  Share2,
  RotateCcw,
  ArrowRight,
  Download,
} from "lucide-react";
import Container from "../Container";
import Button from "../Button";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import ScoreRing from "./ScoreRing";
import ReportGate, { UNLOCK_KEY } from "./ReportGate";
import { categories } from "@/data/questions";
import { STORAGE_KEY } from "@/lib/analyzerState";
import { getLevel, levelStyles } from "@/lib/levels";
import { formatINR } from "@/lib/utils";

const CategoryRadar = dynamic(() => import("./CategoryRadar"), {
  ssr: false,
  loading: () => <div className="h-72" />,
});

const SHORT = {
  website: "Website",
  traffic: "Traffic",
  conversion: "Conversion",
  retention: "Retention",
  tech: "Tech",
};

const phases = [
  { key: "d30", title: "Days 1 to 30", sub: "Fix the basics" },
  { key: "d60", title: "Days 31 to 60", sub: "Build momentum" },
  { key: "d90", title: "Days 61 to 90", sub: "Scale what works" },
];

export default function Report({ result, code, unlockedByLink = false }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);
  const [unlocked, setUnlocked] = useState(unlockedByLink);

  // Remember that this visitor already unlocked the plan
  useEffect(() => {
    try {
      if (localStorage.getItem(UNLOCK_KEY) === "1") setUnlocked(true);
    } catch {}
  }, []);

  const unlock = () => {
    setUnlocked(true);
    try {
      localStorage.setItem(UNLOCK_KEY, "1");
    } catch {}
  };

  const {
    overall, label, scores, strongest, priorities,
    insights, quickWins, roadmap, revenue, solution,
  } = result;

  // The contact page reads these to pre-fill the form
  const contactHref = `/contact?from=report&score=${overall}&r=${encodeURIComponent(code)}`;

  const chartData = Object.keys(scores).map((k) => ({
    label: SHORT[k],
    score: scores[k],
  }));

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const retake = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {}
    router.push("/analyzer");
  };

  return (
    <div className="pb-24">
      {/* Print-only header (shows in the PDF) */}
      <div className="hidden px-8 pt-4 text-sm text-muted print:block">
        Business Growth Report · Prepared by Viraj Pate · yourdomain.com
      </div>

      {/* 1. Score hero */}
      <section className="bg-gradient-to-b from-surface to-white py-12 sm:py-16">
        <Container className="max-w-4xl">
          <div className="flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
            <ScoreRing score={overall} />
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
                Your Business Growth Report
              </p>
              <h1 className="text-3xl font-extrabold sm:text-4xl">{label}</h1>
              <p className="mt-3 text-muted">
                Your strongest area is <strong className="text-ink">{strongest}</strong>.
                Your top priority is{" "}
                <strong className="text-ink">{priorities[0].label}</strong>.
              </p>
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row md:items-start print:hidden">
                <Button href={contactHref}>Discuss this report with Viraj</Button>
                <button
                  type="button"
                  onClick={copyLink}
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
                >
                  <Share2 size={16} />
                  {copied ? "Link copied!" : "Copy report link"}
                </button>
                {unlocked && (
                  <button
                    type="button"
                    onClick={() => window.print()}
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted hover:text-ink"
                  >
                    <Download size={16} /> Download PDF
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Score breakdown */}
      <section className="py-12">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="Breakdown" title="Your score by category" />
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-5">
              {Object.keys(scores).map((k) => {
                const style = levelStyles[getLevel(scores[k])];
                return (
                  <div key={k}>
                    <div className="mb-1 flex justify-between text-sm">
                      <span className="font-medium">{categories[k]}</span>
                      <span className="text-muted">{scores[k]}/100</span>
                    </div>
                    <div className="h-2.5 overflow-hidden rounded-full bg-line">
                      <div
                        className={`h-full rounded-full ${style.bar}`}
                        style={{ width: `${scores[k]}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <CategoryRadar data={chartData} />
          </div>
        </Container>
      </section>

      {/* 3. Top 3 priorities */}
      <section className="bg-surface py-16">
        <Container>
          <SectionHeading
            eyebrow="Priorities"
            title="Your top 3 priorities"
            text="Ranked by how much each one is likely to move your business."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {priorities.map((p, i) => {
              const style = levelStyles[p.level];
              return (
                <FadeIn key={p.category} delay={i * 0.1}>
                  <article className="h-full rounded-2xl border border-line bg-white p-6">
                    <div className="flex items-center justify-between">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-dark font-display font-bold text-white">
                        {i + 1}
                      </span>
                      <span className={`rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}>
                        {style.label}
                      </span>
                    </div>
                    <h3 className="mt-4 text-lg font-bold">{p.label}</h3>
                    <p className="text-sm text-muted">Score {p.score}/100</p>
                    {p.flagged && (
                      <p className="mt-2 inline-flex items-center gap-1 text-xs font-medium text-primary">
                        <Flag size={14} /> You flagged this as a challenge
                      </p>
                    )}
                    <p className="mt-4 text-sm">{p.diagnosis}</p>
                    <p className="mt-3 text-sm text-muted">
                      <span className="font-semibold text-ink">Why it matters: </span>
                      {p.why}
                    </p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Sections 4 to 7 are behind the soft email gate */}
      <ReportGate unlocked={unlocked} onUnlock={unlock} code={code}>
        {/* 4. Smart insights (only if any rule matched) */}
        {insights.length > 0 && (
          <section className="py-16">
            <Container className="max-w-4xl">
              <SectionHeading eyebrow="Insights" title="What stood out in your answers" />
              <div className="space-y-4">
                {insights.map((ins) => (
                  <FadeIn key={ins.id}>
                    <div className="flex gap-4 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                      <AlertTriangle className="mt-0.5 shrink-0 text-amber-600" size={22} />
                      <div>
                        <h3 className="font-bold">{ins.title}</h3>
                        <p className="mt-1 text-sm text-muted">{ins.text}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* 5. Quick wins */}
        <section className={`py-16 ${insights.length > 0 ? "bg-surface" : ""}`}>
          <Container className="max-w-4xl">
            <SectionHeading
              eyebrow="Quick wins"
              title="Things you can do this week"
              text="No developer needed for most of these."
            />
            <ul className="space-y-3">
              {quickWins.map((w, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 rounded-xl border border-line bg-white p-4"
                >
                  <Check size={20} className="mt-0.5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm">{w.text}</p>
                    <p className="mt-1 text-xs text-muted">{w.category}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Container>
        </section>

        {/* 6. Revenue opportunity */}
        {revenue && (
          <section className="py-16">
            <Container className="max-w-4xl">
              <FadeIn>
                <div className="rounded-3xl bg-primary-dark p-8 text-white sm:p-12">
                  <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
                    Revenue opportunity
                  </p>
                  <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                    A modest improvement could add about{" "}
                    <span className="text-accent-dark">{formatINR(revenue.annualGain)}</span> a year
                  </h2>
                  <p className="mt-4 text-white/80">
                    If your conversion rate moved from {revenue.conv}% to {revenue.newConv}%,
                    with the same {revenue.visitors.toLocaleString("en-IN")} monthly visitors
                    and a {formatINR(revenue.aov)} average order, that is roughly{" "}
                    {formatINR(revenue.monthlyGain)} more every month.
                  </p>
                  <p className="mt-4 text-xs text-white/60">
                    This is a rough estimate based on the middle of the ranges you chose
                    {revenue.assumed ? " and average figures where you answered “I don’t know”" : ""}.
                    Real results depend on your store.
                  </p>
                </div>
              </FadeIn>
            </Container>
          </section>
        )}

        {/* 7. 30/60/90 roadmap */}
        <section className="bg-surface py-16">
          <Container>
            <SectionHeading eyebrow="Roadmap" title="Your 30/60/90-day plan" />
            <div className="grid gap-6 md:grid-cols-3">
              {phases.map((ph, i) => (
                <FadeIn key={ph.key} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-line bg-white p-6">
                    <p className="font-display text-sm font-bold text-accent-dark">{ph.title}</p>
                    <h3 className="mt-1 text-lg font-bold">{ph.sub}</h3>
                    <ul className="mt-4 space-y-4">
                      {roadmap[ph.key].map((item, n) => (
                        <li key={n} className="text-sm">
                          <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                            {item.category}
                          </span>
                          <p className="text-muted">{item.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </FadeIn>
              ))}
            </div>
          </Container>
        </section>
      </ReportGate>

      {/* 8. Recommended solution (always visible) */}
      <section className="py-16">
        <Container className="max-w-4xl">
          <FadeIn>
            <div className="rounded-3xl border-2 border-accent bg-white p-8 sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
                Recommended next step
              </p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{solution.title}</h2>
              <p className="mt-3 text-muted">{solution.text}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row print:hidden">
                <Button href={contactHref}>Discuss this report with Viraj</Button>
                <Button href={solution.href} variant="outline">
                  {solution.cta} <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </FadeIn>
          <div className="mt-8 text-center print:hidden">
            <button
              type="button"
              onClick={retake}
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink"
            >
              <RotateCcw size={14} /> Retake the analysis
            </button>
          </div>
        </Container>
      </section>

      {/* Sticky CTA bar (hidden when printing) */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 backdrop-blur print:hidden">
        <Container className="flex items-center justify-between gap-4 py-3">
          <p className="text-sm">
            Your score: <strong className="font-display">{overall}/100</strong>
          </p>
          <Button href={contactHref} className="!px-5 !py-2">
            Discuss with Viraj
          </Button>
        </Container>
      </div>
    </div>
  );
}