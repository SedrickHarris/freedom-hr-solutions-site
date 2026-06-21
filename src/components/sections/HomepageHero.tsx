"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import type { Cta } from "@/types";

const HERO_IMAGES = [
  {
    src: "/images/heroes/freedom-hr-solutions-growing-business-hr-support-editorial-hero.webp",
    alt: "HR support for growing businesses",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-hr-compliance-risk-management-editorial-hero.webp",
    alt: "HR compliance and risk management consulting",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-hr-mri-risk-assessment-editorial-hero.webp",
    alt: "HR MRI Risk Assessment",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-hr-payroll-benefits-compliance-command-center-hero.webp",
    alt: "Payroll, benefits, and HR compliance support",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-hr-technology-automation-editorial-hero.webp",
    alt: "HR technology and automation consulting",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-patriotic-hr-consulting-editorial-abstract-hero.webp",
    alt: "Freedom HR Solutions patriotic HR consulting",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-payroll-benefits-hr-system-editorial-hero.webp",
    alt: "Payroll and benefits HR systems",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-people-systems-hr-support-editorial-hero.webp",
    alt: "People and systems HR support",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-veteran-led-hr-consulting-editorial-hero.webp",
    alt: "Veteran-led HR consulting",
  },
  {
    src: "/images/heroes/freedom-hr-solutions-workforce-reporting-data-insights-editorial-hero.webp",
    alt: "Workforce reporting and data insights",
  },
];

/** milliseconds each image is fully visible */
const HOLD_MS = 6000;

/** milliseconds the crossfade transition takes */
const FADE_MS = 1500;

interface HomepageHeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  trustLine?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export function HomepageHero({
  eyebrow,
  title,
  description,
  trustLine,
  primaryCta,
  secondaryCta,
}: HomepageHeroProps) {
  const [current, setCurrent] = useState(0);
  const [next, setNext] = useState(1);
  const [fading, setFading] = useState(false);

  const advance = useCallback(() => {
    const nextIndex = (current + 1) % HERO_IMAGES.length;
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
      {/* Background image layer — current (below) */}
      <div className="absolute inset-0">
        <Image
          src={HERO_IMAGES[current].src}
          alt={HERO_IMAGES[current].alt}
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
      </div>

      {/* Background image layer — next (above, fades in) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: fading ? 1 : 0,
          transition: fading
            ? `opacity ${FADE_MS}ms ease-in-out`
            : "none",
        }}
      >
        <Image
          src={HERO_IMAGES[next].src}
          alt={HERO_IMAGES[next].alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Dark overlay — keeps text readable over any image */}
      <div
        className="absolute inset-0 bg-black/55"
        aria-hidden
      />

      {/* Grid texture overlay — subtle depth */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-30"
        aria-hidden
      />

      {/* Ambient glow — top right */}
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-white/5 blur-3xl"
        aria-hidden
      />

      {/* Hero content */}
      <Container className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          {eyebrow && (
            <div className="flex justify-center">
              <Badge tone="onDark" className="mb-5">
                {eyebrow}
              </Badge>
            </div>
          )}

          <h1
            className="font-display text-4xl font-extrabold text-white sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
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
