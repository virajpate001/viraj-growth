"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/analyzer", label: "Growth Analyzer" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="font-display text-lg font-bold text-primary">
          Viraj Pate
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Button href="/analyzer" className="!py-2">
            Free Growth Analysis
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      {/* Mobile nav */}
      {open && (
        <nav className="border-t border-line bg-white md:hidden">
          <Container className="flex flex-col gap-4 py-5">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium"
              >
                {l.label}
              </Link>
            ))}
            <Button href="/analyzer" onClick={() => setOpen(false)}>
              Free Growth Analysis
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}