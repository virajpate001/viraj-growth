"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Quote, Star } from "lucide-react";

const AUTOPLAY_MS = 7000;

export default function TestimonialCarousel({ items }) {
  const track = useRef(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  const goTo = useCallback((i) => {
    const el = track.current;
    if (!el) return;
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollTo({ left: i * el.clientWidth, behavior: smooth ? "smooth" : "auto" });
  }, []);

  const onScroll = () => {
    const el = track.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    activeRef.current = i;
    setActive(i);
  };

  // Autoplay (off for reduced motion, hover, focus, or when the visitor pauses it)
  useEffect(() => {
    if (!playing || paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => goTo((activeRef.current + 1) % count), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [playing, paused, count, goTo]);

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <Quote className="text-accent" size={40} aria-hidden="true" />

      <div
        ref={track}
        onScroll={onScroll}
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="Client testimonials"
        className="no-scrollbar mt-6 flex snap-x snap-mandatory overflow-x-auto"
      >
        {items.map((t, i) => (
          <figure
            key={i}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${count}`}
            className="w-full shrink-0 snap-center pr-4 sm:pr-12"
          >
            <div className="flex gap-1 text-accent" aria-hidden="true">
              {[...Array(5)].map((_, n) => (
                <Star key={n} size={16} fill="currentColor" />
              ))}
            </div>
            <blockquote className="mt-6 max-w-4xl font-display text-2xl leading-snug sm:text-3xl lg:text-4xl">
              “{t.quote}”
            </blockquote>
            <figcaption className="mt-8 flex items-center gap-4">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 font-heading font-bold text-accent"
              >
                {t.name.charAt(0)}
              </span>
              <span>
                <span className="block font-heading font-bold">{t.name}</span>
                <span className="text-sm text-muted">{t.role}</span>
              </span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
        <div className="flex items-center" role="group" aria-label="Choose a testimonial">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Show testimonial ${i + 1}`}
              aria-current={i === active ? "true" : undefined}
              className="p-2"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  i === active ? "w-8 bg-accent" : "w-2 bg-line hover:bg-subtle"
                }`}
              />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {count > 1 && (
            <button
              type="button"
              onClick={() => setPlaying((p) => !p)}
              aria-label={playing ? "Pause automatic sliding" : "Resume automatic sliding"}
              className="flex h-11 w-11 items-center justify-center rounded-full text-muted transition-colors hover:text-accent"
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
          )}
          <button
            type="button"
            onClick={() => goTo((active - 1 + count) % count)}
            aria-label="Previous testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => goTo((active + 1) % count)}
            aria-label="Next testimonial"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-accent hover:text-accent"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}