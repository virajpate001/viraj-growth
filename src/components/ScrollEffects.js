"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function ScrollEffects() {
  const pathname = usePathname();

  // Smooth scrolling (runs once)
  useEffect(() => {
    if (reduced()) return;
    const lenis = new Lenis({ lerp: 0.1, anchors: true });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  // Animations (re-run on every page change)
  useEffect(() => {
    if (reduced()) return;
    const root = document.documentElement;
    let ctx;
    try {
      ctx = gsap.context(() => {
        // 1. Hero intro: headline lines slide up, then the rest fades in
        const lines = gsap.utils.toArray("[data-line]");
        if (lines.length) {
          gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .fromTo(lines, { yPercent: 110 }, { yPercent: 0, duration: 1.1, stagger: 0.12 }, 0.1)
            .fromTo("[data-hero]", { opacity: 0, y: 24 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 }, 0.5);
        }

        // 2. Fade-up with stagger (siblings that enter together are staggered)
        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          interval: 0.1,
          onEnter: (els) =>
            gsap.to(els, { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", stagger: 0.12 }),
        });

        // 3. Image mask reveals
        gsap.utils.toArray("[data-mask]").forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.3,
              ease: "power4.out",
              scrollTrigger: { trigger: el, start: "top 88%", once: true },
            }
          );
        });

        // 4. Parallax (the image layer moves slower than the page)
        gsap.utils.toArray("[data-parallax]").forEach((el) => {
          const amount = parseFloat(el.dataset.parallax) || 8;
          gsap.fromTo(
            el,
            { yPercent: -amount },
            {
              yPercent: amount,
              ease: "none",
              scrollTrigger: {
                trigger: el.parentElement,
                start: "top bottom",
                end: "bottom top",
                scrub: true,
              },
            }
          );
        });
      });
    } catch {
      // If anything fails, never leave content hidden
      root.classList.remove("motion");
    }
    return () => ctx?.revert();
  }, [pathname]);

  return null;
}