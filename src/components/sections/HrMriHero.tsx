"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Cta } from "@/types";

const HR_MRI_HERO_IMAGES = [
  {
    src: "/images/heroes/freedom-hr-solutions-hr-mri-executive-diagnostic-session-hero.webp",
    alt: "HR MRI executive diagnostic session",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-hr-mri-risk-review-meeting-hero.webp",
    alt: "HR MRI risk review meeting",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-hr-mri-strategic-findings-discussion-hero.webp",
    alt: "HR MRI strategic findings discussion",
  },
];

/** milliseconds each image is fully visible */
const HOLD_MS = 6000;

/** milliseconds the crossfade transition takes */
const FADE_MS = 1500;

interface HrMriHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  trustLine?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export function HrMriHero({
  eyebrow,
  title,
  description,
  trustLine,
  primaryCta,
  secondaryCta,
}: HrMriHeroProps) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  const advance = useCallback(() => {
    const nextIndex = (current + 1) % HR_MRI_HERO_IMAGES.length;
    setNext(nextIndex);
    setFading(true);
    setTimeout(() => {
      setCurrent(nextIndex);
      setFading(false);
    }, FADE_MS);
  }, [current]);

  useEffect(() => {
    const timer = setInterval(advance, HOLD_MS + FADE_MS);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ minHeight: "560px" }}
    >
      {/* Background image layer -current (below) */}
      <div className="absolute inset-0">
        <Image
          src={HR_MRI_HERO_IMAGES[current].src}
          alt={HR_MRI_HERO_IMAGES[current].alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Background image layer -next (above, fades in) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: fading ? 1 : 0,
          transition: fading ? `opacity ${FADE_MS}ms ease-in-out` : "none",
        }}
      >
        <Image
          src={HR_MRI_HERO_IMAGES[next].src}
          alt={HR_MRI_HERO_IMAGES[next].alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay -keeps text readable over any image */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />

      {/* Grid texture overlay -subtle depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30"
        aria-hidden
      />

      {/* Ambient glow -top right */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      {/* Hero content */}
      <Container className="relative py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="flex justify-center">
              <Badge tone="onDark" className="mb-5">
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1
            className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]"
            style={{ color: "#ffffff" }}
          >
            {title}
          </h1>

          <p
            className="mt-5 text-lg leading-relaxed text-white/85"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            {description}
          </p>

          {trustLine && (
            <p className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-white/75">
              <CheckCircle2
                size={16}
                strokeWidth={2}
                className="shrink-0 text-white/60"
                aria-hidden
              />
              {trustLine}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              {primaryCta && (
                <Button href={primaryCta.href} variant="white" size="lg">
                  {primaryCta.label}
                </Button>
              )}
              {secondaryCta && (
                <Button
                  href={secondaryCta.href}
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/10 text-white hover:bg-white/20"
                >
                  {secondaryCta.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
