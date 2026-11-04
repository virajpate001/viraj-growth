import Container from "../Container";
import FadeIn from "../FadeIn";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From confused to clear in 3 steps"
          text="Not sure what your business needs to grow? Start here."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <FadeIn key={s.title} delay={i * 0.1}>
              <div className="h-full rounded-2xl border border-line bg-white p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <s.icon size={24} />
                </div>
                <p className="text-xs font-semibold text-muted">STEP {i + 1}</p>
                <h3 className="mt-1 text-xl font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted">{s.text}</p>
              </div>
            </FadeIn>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/analyzer">Start the Analyzer</Button>
        </div>
      </Container>
    </section>
  );
}