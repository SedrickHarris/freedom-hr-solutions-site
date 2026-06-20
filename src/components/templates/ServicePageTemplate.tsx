import type { Service } from "@/types";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Badge } from "@/components/ui/Badge";
import { getServiceHub } from "@/data/serviceHubs";
import { serviceRefs, audienceRefs, serviceHubRef } from "@/lib/links";
import { serviceSchema } from "@/lib/schema";
import { servicePath } from "@/lib/routes";

export function ServicePageTemplate({ service }: { service: Service }) {
  const hub = getServiceHub(service.hubSlug);
  const path = servicePath(service.slug);
  const hubRef = serviceHubRef(service.hubSlug);
  const related = serviceRefs(service.relatedServiceSlugs);
  const relatedWithHub = hubRef ? [hubRef, ...related] : related;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          ...(hub ? [{ name: hub.title, path: servicePath(hub.slug) }] : []),
          { name: service.title, path },
        ]}
      />

      <Hero
        eyebrow={hub ? hub.title : "Services"}
        title={service.h1}
        description={service.summary}
        trustLine={service.trustLine}
        primaryCta={service.primaryCta}
        secondaryCta={service.secondaryCta}
      />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">{service.intro}</p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="The problem" title="Common problems we help with" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.problems.map((problem) => (
            <li key={problem} className="flex items-start gap-3 rounded-card border border-border bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700" aria-hidden>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8v5M12 16h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
                </svg>
              </span>
              <span className="text-body">{problem}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading eyebrow="What you get" title="What this service includes" />
        <div className="mt-10">
          <FeatureGrid items={service.includes} columns={2} variant="card" />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who it helps" title="Who this service is for" />
            <div className="mt-6 flex flex-wrap gap-2">
              {service.whoItHelps.map((who) => (
                <Badge key={who} tone="brand">
                  {who}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Challenges solved" title="Issues this addresses" as="h2" />
            <ul className="mt-6 space-y-3">
              {service.challenges.map((challenge) => (
                <li key={challenge} className="flex items-center gap-3 text-body">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-trust-50" aria-hidden>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#1f4ed6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our process" title="How we work" description="A clear, practical process from first conversation through ongoing support." />
        <div className="mt-10">
          <ProcessSteps steps={service.process} />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Outcomes" title="The benefits" />
        <div className="mt-10">
          <FeatureGrid items={service.benefits} columns={2} variant="check" />
        </div>
      </Section>

      <RelatedPages
        eyebrow="Keep exploring"
        title="Related services"
        items={relatedWithHub}
      />

      <RelatedPages
        eyebrow="Who we help"
        title="Relevant for these teams"
        items={audienceRefs(service.relatedAudienceSlugs)}
        tone="muted"
      />

      <FaqSection faqs={service.faqs} />

      <CtaBand />

      <SchemaScript
        schema={serviceSchema({ name: service.title, description: service.meta.description, path })}
      />
    </>
  );
}
