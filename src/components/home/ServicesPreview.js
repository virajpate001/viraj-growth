import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Container from "../Container";
import SectionHeading from "../SectionHeading";
import { services } from "@/data/content";

export default function ServicesPreview() {
  return (
    <section className="bg-bg2 py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Everything your online store needs to sell more"
          text="From building to optimizing, one expert from start to finish."
        />
        <ul className="border-t border-line">
          {services.map((s) => (
            <li key={s.slug} data-reveal>
              <Link
                href={`/services#${s.slug}`}
                className="group flex items-center gap-5 border-b border-line py-7 transition-colors duration-300 hover:bg-accent/5 sm:gap-8 sm:px-4"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <s.icon size={22} />
                </span>
                <h3 className="flex-1 text-2xl transition-colors duration-300 group-hover:text-accent sm:text-3xl">
                  {s.title}
                </h3>
                <p className="hidden max-w-sm text-sm text-muted md:block">{s.short}</p>
                <ArrowUpRight
                  size={26}
                  className="shrink-0 text-subtle transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent"
                />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}