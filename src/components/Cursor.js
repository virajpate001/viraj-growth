"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const ring = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = ring.current;
    if (!fine || reduce || !el) return;

    gsap.set(el, { xPercent: -50, yPercent: -50 });
    const x = gsap.quickTo(el, "x", { duration: 0.35, ease: "power3" });
    const y = gsap.quickTo(el, "y", { duration: 0.35, ease: "power3" });

    const move = (e) => {
      x(e.clientX);
      y(e.clientY);
      el.dataset.visible = "true";
      el.dataset.hover = e.target.closest?.("a, button, [data-cursor]") ? "true" : "false";
    };
    const leave = () => (el.dataset.visible = "false");

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={ring}
      aria-hidden="true"
      data-visible="false"
      data-hover="false"
      className="pointer-events-none fixed left-0 top-0 z-[200] hidden h-9 w-9 rounded-full border border-accent/70 opacity-0 transition-[width,height,background-color,opacity] duration-300 data-[hover=true]:h-16 data-[hover=true]:w-16 data-[hover=true]:bg-accent/10 data-[visible=true]:opacity-100 print:hidden md:block"
    />
  );
}