import { Star } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrow="Testimonials" title="What clients say" />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              data-reveal
              className="flex flex-col rounded-2xl border border-line bg-card p-8 transition-colors duration-300 hover:border-accent/40"
            >
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, n) => (
                  <Star key={n} size={16} fill="currentColor" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 text-ink/90">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-line pt-5">
                <p className="font-heading text-sm font-bold">{t.name}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}