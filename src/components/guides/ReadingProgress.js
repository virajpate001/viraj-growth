"use client";

import { useEffect, useRef } from "react";

// A thin yellow bar at the top of the screen showing how far through the article you are
export default function ReadingProgress({ targetId = "guide-body" }) {
  const bar = useRef(null);

  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el || !bar.current) return;
    let raf = null;

    const update = () => {
      raf = null;
      const rect = el.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight * 0.6, 1);
      const p = Math.min(1, Math.max(0, -rect.top / total));
      bar.current.style.transform = `scaleX(${p})`;
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
  }, [targetId]);

  return (
    <div aria-hidden="true" className="fixed inset-x-0 top-0 z-[60] h-[3px] print:hidden">
      <div ref={bar} className="h-full bg-accent" style={{ transform: "scaleX(0)", transformOrigin: "left" }} />
    </div>
  );
}
