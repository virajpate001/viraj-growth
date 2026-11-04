import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold text-primary">
            Viraj Pate
          </p>
          <p className="mt-1 text-sm text-muted">
            Shopify & WooCommerce developer helping businesses grow online.
          </p>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted">
          <Link href="/services" className="hover:text-ink">Services</Link>
          <Link href="/case-studies" className="hover:text-ink">Case Studies</Link>
          <Link href="/analyzer" className="hover:text-ink">Growth Analyzer</Link>
          <Link href="/contact" className="hover:text-ink">Contact</Link>
        </nav>
      </Container>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} Viraj Pate. All rights reserved.
      </div>
    </footer>
  );
}