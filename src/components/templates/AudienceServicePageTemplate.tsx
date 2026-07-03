import type { AudienceServicePage } from "@/types";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { serviceRefs } from "@/lib/links";
import { getAudience } from "@/data/audiences";
import { professionalServiceSchema } from "@/lib/schema";
import { audiencePath, audienceServicePath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export function AudienceServicePageTemplate({ page }: { page: AudienceServicePage }) {
  const path = audienceServicePath(page.audienceSlug, page.serviceSlug);
  const audience = getAudience(page.audienceSlug);

  // Sibling pages: resolve slugs to hrefs that will exist once built.
  // Links are rendered only when the sibling exists in audienceServicePages.
  // For now we output them as static hrefs; the pipeline will add data entries.
  const siblingLinks = page.siblingServiceSlugs.map((slug) => ({
    title: slug
      .split("-")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" "),
    href: audienceServicePath(page.audienceSlug, slug),
    description: `More support for small businesses: ${slug.replace(/-/g, " ")}.`,
  }));

  // Service and hub refs — resolved via existing links.ts helpers
  const serviceItems = serviceRefs(
    [
      page.primaryServiceDataSlug,
      "employee-handbook-creation-management",
      "hr-mri-risk-assessment",
    ].filter(Boolean),
  );

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: audience?.navLabel ?? "Small Businesses", path: audiencePath(page.audienceSlug) },
          { name: "HR Compliance", path },
        ]}
      />

      <Hero
        eyebrow={page.eyebrow}
        title={page.h1}
        description={page.summary}
        primaryCta={page.primaryCta ?? ctas.assessment}
        secondaryCta={page.secondaryCta ?? ctas.consultation}
      />

      <TrustBar />

      {/* Intro + Direct Answer Block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">{page.intro}</p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            {page.directAnswer.question}
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">{page.directAnswer.answer}</p>
        </div>
      </Section>

      {/* Pain Points */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Why small businesses face HR compliance risk" />
        <div className="mt-10">
          <FeatureGrid items={page.painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* Scenarios */}
      {page.scenarios.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Sound familiar?" title="Situations we help with" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {page.scenarios.map((scenario) => (
              <li
                key={scenario}
                className="flex items-start gap-3 rounded-card border border-border bg-white p-4"
              >
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700"
                  aria-hidden
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-body">{scenario}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      {/* Primary service and hub links */}
      <RelatedPages
        eyebrow="Where to start"
        title="Compliance services for small businesses"
        description="The services small businesses use most often when addressing HR compliance gaps."
        items={serviceItems}
        tone="muted"
      />

      {/* Sibling audience + service pages */}
      {siblingLinks.length > 0 && (
        <RelatedPages
          eyebrow="Also for small businesses"
          title="More support in this area"
          items={siblingLinks}
        />
      )}

      <FaqSection faqs={page.faqs} />

      <CtaBand
        primaryCta={page.primaryCta ?? ctas.assessment}
        secondaryCta={page.secondaryCta ?? ctas.consultation}
      />

      <SchemaScript
        schema={professionalServiceSchema({
          name: page.title,
          description: page.meta.description,
          path,
        })}
      />
    </>
  );
}
