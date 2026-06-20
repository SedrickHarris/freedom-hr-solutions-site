import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import type { Cta } from "@/types";
import { primaryCta as defaultPrimary, secondaryCta as defaultSecondary } from "@/data/site";

interface CtaBandProps {
  title?: string;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export function CtaBand({
  title = "Ready to see where your HR stands?",
  description = "Request an HR MRI Assessment for a clear, practical view of your HR, payroll, benefits, and compliance health. Prefer to talk first? Schedule a consultation.",
  primaryCta = defaultPrimary,
  secondaryCta = defaultSecondary,
}: CtaBandProps) {
  return (
    <Section tone="brand" spacing="compact">
      <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">{title}</h2>
          <p className="mt-3 text-lg text-white/85">{description}</p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Button href={primaryCta.href} variant="white" size="lg">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant="outline"
            size="lg"
            className="border-white/30 bg-white/10 text-white hover:bg-white/20"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </div>
    </Section>
  );
}
