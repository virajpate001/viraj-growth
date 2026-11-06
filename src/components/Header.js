"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();

    // Stop the page scrolling behind the open mobile menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-bg/80 backdrop-blur-xl print:hidden">
      <Container className="flex h-[72px] items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight"
        >
          Viraj Pate<span className="text-accent">.</span>
        </Link>

        <nav aria-label="Main" data-lenis-prevent className="hidden items-center gap-8 lg:flex">
          {links.map((l) => {
            const active = pathname.startsWith(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={active ? "page" : undefined}
                className={`relative font-heading text-sm font-semibold transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:bg-accent after:transition-transform after:duration-300 hover:text-accent hover:after:scale-x-100 ${
                  active
                    ? "text-accent after:scale-x-100"
                    : "text-muted after:scale-x-0"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <Button href="/analyzer" arrow className="!px-5 !py-2.5">
            Free analysis
          </Button>
        </nav>

        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-full h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-bg lg:hidden"
        >
          <Container className="flex flex-col gap-2 py-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`border-b border-line py-4 font-display text-3xl font-bold ${
                  pathname.startsWith(l.href) ? "text-accent" : ""
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button
              href="/analyzer"
              arrow
              onClick={() => setOpen(false)}
              className="mt-6"
            >
              Free growth analysis
            </Button>
          </Container>
        </nav>
      )}
    </header>
  );
}
