import Link from "next/link";
import Container from "./Container";
import Button from "./Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/analyzer", label: "Growth Analyzer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/guides", label: "Guides" }
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg2 print:hidden">
      <Container className="py-16">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-4xl sm:text-4xl">
            Let&apos;s build a store that <span className="text-accent">sells</span>.
          </h2>
          <Button href="/contact" arrow>
            Start a project
          </Button>
        </div>

        <div className="mt-16 flex flex-col gap-8 border-t border-line pt-8 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg font-bold">
            Viraj Pate<span className="text-accent">.</span>
          </p>
          <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-muted">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="transition-colors hover:text-accent">
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-8 text-xs text-subtle">
          © {new Date().getFullYear()} Viraj Pate. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}