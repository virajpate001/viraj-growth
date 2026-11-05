import Container from "../Container";
import SectionHeading from "../SectionHeading";
import Button from "../Button";
import { steps } from "@/data/content";

export default function HowItWorks() {
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="From confused to clear in three steps"
          text="Not sure what your business needs to grow? Start here."
        />
        <ol className="grid gap-10 md:grid-cols-3 md:gap-0">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className={`md:px-8 ${i === 0 ? "md:pl-0" : "md:border-l md:border-line"}`}
            >
              <span className="flex h-12 w-12 items-center justify-center bg-ink font-display text-3xl font-bold text-accent">
                {i + 1}
              </span>
              <h3 className="mt-5 text-3xl">{s.title}</h3>
              <p className="mt-2 text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12">
          <Button href="/analyzer">Start the analyzer</Button>
        </div>
      </Container>
    </section>
  );
}