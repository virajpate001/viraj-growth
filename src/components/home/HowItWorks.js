import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32">
      <Container className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How it works"
            title="From confused to clear in three steps"
            text="Not sure what your business needs to grow? Start here."
          />
          <Button href="/analyzer" arrow>Start the analyzer</Button>
        </div>

        <ol>
          {steps.map((s, i) => (
            <li key={s.title} data-reveal className="flex gap-6 border-t border-line py-10 sm:gap-10">
              <span className="font-display text-6xl font-bold text-outline sm:text-7xl">{i + 1}</span>
              <div>
                <h3 className="text-2xl sm:text-3xl">{s.title}</h3>
                <p className="mt-3 max-w-md text-muted">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}