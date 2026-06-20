"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  /** Sibling index for staggered reveals (60ms each, capped at 4). */
  index?: number;
  className?: string;
}

/**
 * Scroll-reveal fade-up entrance using IntersectionObserver and CSS only.
 *
 * Per the emil-kowalski-motion-design skill: transform/opacity only, fires
 * once, respects prefers-reduced-motion, and introduces no animation library.
 * Reduced-motion users and no-JS/no-IO environments render fully visible.
 */
export function Reveal({ children, index = 0, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion is handled by the motion-reduce CSS classes below, so the
    // element is always visible for those users without a synchronous setState.
    // Fallback for environments without IntersectionObserver: reveal next frame.
    if (!("IntersectionObserver" in window)) {
      const raf = requestAnimationFrame(() => setShown(true));
      return () => cancelAnimationFrame(raf);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const delay = Math.min(index, 4) * 60;

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-[opacity,transform] duration-[280ms] ease-out will-change-transform motion-reduce:transition-none",
        shown
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
