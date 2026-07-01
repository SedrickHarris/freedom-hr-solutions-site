import type { Service } from "@/types";
import { Hero } from "@/components/sections/Hero";
import { HrMriHero } from "@/components/sections/HrMriHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { PlatformCallout } from "@/components/sections/PlatformCallout";
import { CtaBand } from "@/components/sections/CtaBand";
import { Reveal } from "@/components/motion/Reveal";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Badge } from "@/components/ui/Badge";
import { getServiceHub } from "@/data/serviceHubs";
import { serviceRefs, audienceRefs, serviceHubRef } from "@/lib/links";
import { serviceSchema } from "@/lib/schema";
import { servicePath } from "@/lib/routes";
import { ctas } from "@/data/shared";
import { AlertTriangle } from "lucide-react";
import { getFeatureIcon } from "@/lib/icons";

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

      {service.slug === "hr-mri-risk-assessment" ? (
        <HrMriHero
          eyebrow={hub ? hub.title : "Services"}
          title={service.h1}
          description={service.summary}
          trustLine={service.trustLine}
          primaryCta={service.primaryCta}
          secondaryCta={service.secondaryCta}
        />
      ) : (
        <Hero
          eyebrow={hub ? hub.title : "Services"}
          title={service.h1}
          description={service.summary}
          trustLine={service.trustLine}
          primaryCta={service.primaryCta}
          secondaryCta={service.secondaryCta}
        />
      )}

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">{service.intro}</p>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionHeading eyebrow="The problem" title="Common problems we help with" />
        </Reveal>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.problems.map((problem) => (
            <li key={problem} className="flex items-start gap-3 rounded-card border border-border bg-white p-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-50 text-red-600" aria-hidden>
                <AlertTriangle size={13} strokeWidth={2.2} />
              </span>
              <span className="text-body">{problem}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="What you get" title="What this service includes" />
        </Reveal>
        <div className="mt-10">
          <FeatureGrid items={service.includes} columns={2} variant="card" reveal />
        </div>
        {service.platformSlugs && service.platformSlugs.length > 0 && (
          <Reveal>
            <PlatformCallout slugs={service.platformSlugs} />
          </Reveal>
        )}
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeading eyebrow="Who it helps" title="Who this service is for" />
            <div className="mt-6 flex flex-wrap gap-2">
              {service.whoItHelps.map((who) => (
                <Badge key={who} tone="brand">
                  {who}
                </Badge>
              ))}
            </div>
          </Reveal>
          <Reveal index={1}>
            <SectionHeading eyebrow="Challenges solved" title="Issues this addresses" as="h2" />
            <ul className="mt-6 space-y-3">
              {service.challenges.map((challenge) => (
                <li key={challenge} className="flex items-center gap-3 text-body">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-trust-50 text-brand-600" aria-hidden>
                    {(() => {
                      const Icon = getFeatureIcon(challenge);
                      return <Icon size={13} strokeWidth={2.2} />;
                    })()}
                  </span>
                  {challenge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHeading eyebrow="Our process" title="How we work" description="A clear, practical process from first conversation through ongoing support." />
        </Reveal>
        <div className="mt-10">
          <ProcessSteps steps={service.process} reveal />
        </div>
      </Section>

      <Section tone="muted">
        <Reveal>
          <SectionHeading eyebrow="Outcomes" title="The benefits" />
        </Reveal>
        <div className="mt-10">
          <FeatureGrid items={service.benefits} columns={2} variant="check" reveal />
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

      {service.slug === "hr-mri-risk-assessment" ? (
        <CtaBand
          title="Ready to see where your HR stands?"
          description="Schedule a consultation and we will walk you through what the assessment covers and what to expect."
          primaryCta={ctas.consultation}
          secondaryCta={{ label: "Explore All Services", href: "/services/" }}
        />
      ) : (
        <CtaBand />
      )}

      <SchemaScript
        schema={serviceSchema({ name: service.title, description: service.meta.description, path })}
      />
    </>
  );
}
