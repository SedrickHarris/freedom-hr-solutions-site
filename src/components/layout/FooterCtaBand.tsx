"use client";

import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { primaryCta, secondaryCta } from "@/data/site";

/**
 * Footer CTA band.
 *
 * Renders ONLY on pages that do not already have their own bottom CTA,
 * so a duplicate CTA never stacks. Every marketing/template page ships
 * CtaBand, and the request-assessment page already contains the assessment
 * form, so this is an allowlist of the few routes that need it:
 * contact, privacy policy, and the thank-you page.
 *
 * Keeping this as an allowlist (default hidden) means new pages, which almost
 * always include CtaBand, never accidentally double up.
 */
const SHOW_ON = new Set([
  "/contact",
  "/privacy-policy",
  "/thank-you",
]);

export function FooterCtaBand() {
  const pathname = usePathname();
  const normalized =
    pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;

  if (!SHOW_ON.has(normalized)) return null;

  return (
    <div className="border-b border-white/10">
      <Container className="flex flex-col items-start justify-between gap-6 py-10 lg:flex-row lg:items-center">
        <div>
          <h2 className="text-2xl font-bold text-white">
            Not sure where your HR risks are hiding?
          </h2>
          <p className="mt-2 max-w-xl text-white/70">
            Start with an HR MRI Assessment. It gives you a clear picture of your HR,
            payroll, benefits, and compliance health, even if you are not sure what you need yet.
          </p>
        </div>
        <div className="flex flex-shrink-0 flex-col gap-3 sm:flex-row">
          <Button href={primaryCta.href} variant="primary" size="md">
            {primaryCta.label}
          </Button>
          <Button href={secondaryCta.href} variant="white" size="md">
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </div>
  );
}
