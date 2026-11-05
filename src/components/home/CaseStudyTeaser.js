import Container from "../Container";
import FadeIn from "../FadeIn";
import Button from "../Button";
import { caseStudy } from "@/data/content";

export default function CaseStudyTeaser() {
  return (
    <section className="py-20">
      <Container>
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-primary-dark p-8 text-white sm:p-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent-dark">
              Featured case study · {caseStudy.tag}
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold sm:text-4xl">
              {caseStudy.title}
            </h2>
            <p className="mt-4 max-w-2xl text-white/80">{caseStudy.text}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {caseStudy.results.map((r) => (
                <div key={r.label}>
                  <p className="font-display text-4xl font-extrabold">{r.value}</p>
                  <p className="mt-1 text-sm text-white/70">{r.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Button href="/case-studies">See all case studies</Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}