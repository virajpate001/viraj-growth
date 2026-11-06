"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

// Highlights the section you are currently reading
function useActive(items) {
  const [active, setActive] = useState(items[0]?.id);

  useEffect(() => {
    let raf = null;
    const update = () => {
      raf = null;
      let current = items[0]?.id;
      for (const it of items) {
        const el = document.getElementById(it.id);
        if (el && el.getBoundingClientRect().top <= 90) current = it.id;
      }
      const atBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 4;
      if (atBottom) current = items[items.length - 1]?.id;
      setActive(current);
    };
    const onScroll = () => {
      if (raf === null) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf !== null) cancelAnimationFrame(raf);
    };
  }, [items]);

  return active;
}

function List({ items, active, onPick }) {
  return (
    <ol className="space-y-0.5 border-l border-line">
      {items.map((it) => {
        const on = it.id === active;
        return (
          <li key={it.id}>
            <a
              href={`#${it.id}`}
              onClick={onPick}
              aria-current={on ? "location" : undefined}
              className={`-ml-px block border-l py-1.5 pl-4 text-sm leading-snug transition-colors duration-300 ${
                on ? "border-accent font-semibold text-accent" : "border-transparent text-muted hover:text-ink"
              }`}
            >
              {it.title}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

export default function TableOfContents({ items, variant = "sidebar" }) {
  const active = useActive(items);
  const [open, setOpen] = useState(false);

  if (variant === "mobile") {
    return (
      <div className="rounded-2xl border border-line bg-card lg:hidden print:hidden">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="flex w-full items-center justify-between px-5 py-4 font-heading text-sm font-bold"
        >
          On this page
          <ChevronDown size={18} className={`text-accent transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
        </button>
        {open && (
          <nav aria-label="Table of contents" className="px-5 pb-5">
            <List items={items} active={active} onPick={() => setOpen(false)} />
          </nav>
        )}
      </div>
    );
  }

  return (
    <nav aria-label="Table of contents" className="hidden lg:block print:hidden">
      <p className="mb-4 font-heading text-sm font-bold">On this page</p>
      <List items={items} active={active} />
    </nav>
  );
}
