"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Button from "./Button";

const links = [
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/analyzer", label: "Growth Analyzer" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 backdrop-blur print:hidden">
      <Container className="flex h-16 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-bold text-white"
        >
          <span aria-hidden="true" className="h-5 w-5 bg-accent" />
          Viraj Pate
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-display text-lg font-medium text-white/75 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <Button href="/analyzer" className="!py-1.5">
            Free growth analysis
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className="text-white lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {/* Mobile nav */}
      {open && (
        <nav aria-label="Mobile" className="border-t border-white/10 bg-ink lg:hidden">
          <Container className="flex flex-col gap-4 py-6">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl font-semibold text-white"
              >
                {l.label}
              </Link>
            ))}
            <Button href="/analyzer" onClick={() => setOpen(false)} className="mt-2">
              Free growth analysis
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}