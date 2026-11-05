"use client";

import { m } from "framer-motion";

export default function FadeIn({ children, delay = 0, className = "" }) {
  return (
    <m.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </m.div>
  );
}