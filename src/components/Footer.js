import Link from "next/link";
import Container from "./Container";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/analyzer", label: "Growth Analyzer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/70 print:hidden">
      <Container className="flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <p className="flex items-center gap-2 font-display text-2xl font-bold text-white">
            <span aria-hidden="true" className="h-5 w-5 bg-accent" />
            Viraj Pate
          </p>
          <p className="mt-3 text-sm">
            Shopify and WooCommerce developer helping businesses grow online.
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="grid grid-cols-2 gap-x-10 gap-y-3 text-sm sm:grid-cols-3"
        >
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-accent">
              {l.label}
            </Link>
          ))}
        </nav>
      </Container>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Viraj Pate. All rights reserved.
      </div>
    </footer>
  );
}