import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import { process, skills } from "@/data/content";

export const metadata = {
  title: "About",
  description:
    "Viraj Pate is a freelance web designer and developer with 6+ years of experience building high-converting Shopify and WooCommerce stores.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-surface py-16">
        <Container className="grid items-center gap-10 md:grid-cols-2">
          <FadeIn>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">About me</p>
            <h1 className="text-4xl font-extrabold sm:text-5xl">Hi, I'm Viraj Pate</h1>
            <p className="mt-5 text-muted">
              I'm a website designer and developer with over 6 years of experience
              building fast, user-friendly e-commerce stores. I've delivered 20+
              websites across different industries, always focused on one thing:
              helping businesses grow online.
            </p>
            <p className="mt-4 text-muted">
              Today I work as a freelancer with startups, entrepreneurs and
              established brands who want a powerful online presence and real results.
            </p>
            <div className="mt-8 flex gap-4">
              <Button href="/contact">Work with me</Button>
              <Button href="/analyzer" variant="outline">Try the Analyzer</Button>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* Replace with your photo later using next/image */}
            <div className="flex aspect-square max-w-md items-center justify-center rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 text-sm text-muted">
              Your photo here
            </div>
          </FadeIn>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <SectionHeading eyebrow="Expertise" title="Tools and platforms I work with" />
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((s) => (
              <span key={s} className="rounded-full border border-line bg-white px-4 py-2 text-sm font-medium">
                {s}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface py-20">
        <Container>
          <SectionHeading eyebrow="Process" title="How we'll work together" />
          <div className="grid gap-6 md:grid-cols-4">
            {process.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-line bg-white p-6">
                  <p className="font-display text-3xl font-extrabold text-accent">0{i + 1}</p>
                  <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted">{p.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}