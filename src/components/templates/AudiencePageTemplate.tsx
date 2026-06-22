import type { Audience } from "@/types";
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
import { serviceRefs, audienceRefs } from "@/lib/links";
import { professionalServiceSchema } from "@/lib/schema";
import { audiencePath } from "@/lib/routes";
import { ctas } from "@/data/shared";

const eyebrowByType = {
  role: "For your role",
  company: "For your business",
  industry: "For your industry",
} as const;

export function AudiencePageTemplate({ audience }: { audience: Audience }) {
  const path = audiencePath(audience.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: audience.navLabel, path },
        ]}
      />

      <Hero
        eyebrow={eyebrowByType[audience.type]}
        title={audience.title}
        description={audience.summary}
        primaryCta={audience.primaryCta ?? ctas.assessment}
        secondaryCta={audience.secondaryCta ?? ctas.consultation}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">{audience.intro}</p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Common challenges we hear" />
        <div className="mt-10">
          <FeatureGrid items={audience.painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {audience.scenarios.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Sound familiar?" title="Situations we help with" />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {audience.scenarios.map((scenario) => (
              <li key={scenario} className="flex items-start gap-3 rounded-card border border-border bg-white p-4">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-body">{scenario}</span>
              </li>
            ))}
          </ul>
        </Section>
      )}

      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services"
        description="The services most relevant to your situation."
        items={serviceRefs(audience.recommendedServiceSlugs)}
        tone="muted"
      />

      <RelatedPages
        eyebrow="Who we help"
        title="Related audiences"
        items={audienceRefs(audience.relatedAudienceSlugs)}
      />

      <FaqSection faqs={audience.faqs} />

      <CtaBand
        primaryCta={audience.primaryCta ?? ctas.assessment}
        secondaryCta={audience.secondaryCta ?? ctas.consultation}
      />

      <SchemaScript
        schema={professionalServiceSchema({
          name: `${audience.navLabel} HR support`,
          description: audience.meta.description,
          path,
        })}
      />
    </>
  );
}
