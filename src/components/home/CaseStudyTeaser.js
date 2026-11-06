import Container from "../Container";
import Button from "../Button";
import ImageFrame from "../ImageFrame";
import { caseStudy } from "@/data/content";

export default function CaseStudyTeaser() {
  return (
    <section className="bg-bg2 py-24 sm:py-32">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <ImageFrame
           src="/images/vp2.webp"
          alt={`Screenshot of the ${caseStudy.tag} store`}
          label="project"
          ratio="aspect-[4/3]"
        />
        <div data-reveal>
          <p className="font-heading text-xs font-bold uppercase tracking-[0.18em] text-accent">
            Featured case study
          </p>
          <h2 className="mt-5 text-4xl sm:text-4xl">{caseStudy.title}</h2>
          <p className="mt-5 max-w-lg text-muted">{caseStudy.text}</p>

          <dl className="mt-10 grid grid-cols-3 border-t border-line">
            {caseStudy.results.map((r, i) => (
              <div key={r.label} className={`pt-6 ${i > 0 ? "border-l border-line pl-5" : ""}`}>
                <dd className="font-display text-3xl font-bold text-accent sm:text-4xl">{r.value}</dd>
                <dt className="mt-1 text-xs text-muted">{r.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-10">
            <Button href="/case-studies/fashion-store-conversion" arrow>
              Read this case study
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}