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
    let io;
    let mo;
    let raf = null;
    const seen = new WeakSet();
    const queue = [];

    try {
      // Hero intro and parallax (safe to revert on cleanup)
      ctx = gsap.context(() => {
        const lines = gsap.utils.toArray("[data-line]");
        if (lines.length) {
          gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .fromTo(
              lines,
              { yPercent: 110, opacity: 1 },
              { yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12 },
              0.1
            )
            .fromTo(
              "[data-hero]",
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.9, stagger: 0.1 },
              0.5
            );
        }

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

      // Fade-up and mask reveals. Works for elements that appear later too.
      const flush = () => {
        raf = null;
        const batch = queue.splice(0);
        const fades = batch.filter((el) => !el.hasAttribute("data-mask"));
        const masks = batch.filter((el) => el.hasAttribute("data-mask"));

        if (fades.length) {
          gsap.to(fades, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.12,
          });
        }
        masks.forEach((el) =>
          gsap.fromTo(
            el,
            { clipPath: "inset(100% 0% 0% 0%)" },
            { clipPath: "inset(0% 0% 0% 0%)", duration: 1.3, ease: "power4.out" }
          )
        );
      };

      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              io.unobserve(e.target);
              queue.push(e.target);
            }
          });
          if (queue.length && raf === null) raf = requestAnimationFrame(flush);
        },
        { rootMargin: "0px 0px -8% 0px" }
      );

      const watch = () => {
        document.querySelectorAll("[data-reveal], [data-mask]").forEach((el) => {
          if (!seen.has(el)) {
            seen.add(el);
            io.observe(el);
          }
        });
      };

      watch();
      mo = new MutationObserver(watch);
      mo.observe(document.body, { childList: true, subtree: true });
    } catch {
      // If anything fails, never leave content hidden
      root.classList.remove("motion");
    }

    return () => {
      io?.disconnect();
      mo?.disconnect();
      if (raf !== null) cancelAnimationFrame(raf);
      ctx?.revert();
    };
  }, [pathname]);

  return null;
}