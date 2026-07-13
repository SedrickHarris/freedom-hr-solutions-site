import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2 } from "lucide-react";
import type { Cta } from "@/types";
import { cn } from "@/lib/utils";

interface HeroProps {
  eyebrow?: string;
  title: string;
  description: string;
  /** Short trust or relevance line shown under the description. */
  trustLine?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Optional supporting visual (e.g. stat panel) shown on large screens. */
  aside?: React.ReactNode;
  /** "page" is the compact inner-page hero; "home" is the larger variant. */
  variant?: "page" | "home";
  /** Optional full-bleed background image. Falls back to brand gradient. */
  backgroundImage?: {
    src: string;
    alt: string;
  };
}

export function Hero({
  eyebrow,
  title,
  description,
  trustLine,
  primaryCta,
  secondaryCta,
  aside,
  variant = "page",
  backgroundImage,
}: HeroProps) {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={backgroundImage ? { minHeight: "480px" } : undefined}
    >
      {/* Background layer - image when supplied, brand gradient fallback */}
      {backgroundImage ? (
        <>
          <div className="absolute inset-0">
            <Image
              src={backgroundImage.src}
              alt={backgroundImage.alt}
              fill
              className="object-cover object-center"
              priority
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-black/60" aria-hidden />
        </>
      ) : (
        <div className="absolute inset-0 bg-brand-gradient" aria-hidden />
      )}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-grid",
          backgroundImage ? "opacity-30" : "opacity-60",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full blur-3xl",
          backgroundImage ? "bg-white/5" : "bg-white/10",
        )}
        aria-hidden
      />
      <Container
        className={cn(
          "relative grid items-center gap-10",
          aside ? "lg:grid-cols-[1.15fr_0.85fr]" : "",
          variant === "home" ? "py-20 sm:py-28" : "py-16 sm:py-20",
        )}
      >
        <div className={cn("mx-auto max-w-2xl", aside ? "text-left" : "text-center")}>
          {eyebrow && (
            <div className={cn(aside ? "" : "flex justify-center")}>
              <Badge tone="onDark" className="mb-5">
                {eyebrow}
              </Badge>
            </div>
          )}
          <h1
            className={cn(
              "font-display font-extrabold text-white",
              variant === "home"
                ? "text-4xl sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]"
                : "text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.1]",
            )}
          >
            {title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-white/85">{description}</p>
          {trustLine && (
            <p className={cn(
              "mt-3 flex items-center gap-2 text-sm font-medium text-white/75",
              aside ? "" : "justify-center"
            )}>
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
            <div className={cn(
              "mt-8 flex flex-col gap-3 sm:flex-row",
              aside ? "" : "items-center sm:justify-center"
            )}>
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
        {aside && <div className="relative">{aside}</div>}
      </Container>
    </section>
  );
}
