import type { Partner } from "@/types";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { isBenefitsPartner } from "@/data/partners";
import { serviceRefs } from "@/lib/links";
import { serviceSchema } from "@/lib/schema";
import { partnerPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export function PartnerPageTemplate({ partner }: { partner: Partner }) {
  const path = partnerPath(partner.slug);
  const benefits = isBenefitsPartner(partner.slug);
  const h1 = benefits
    ? `${partner.name} Benefits Support`
    : `${partner.name} Consulting and Support for HR, Payroll, and Benefits Workflows`;
  const primaryCta = benefits
    ? { label: "Request Benefits Workflow Review", href: "/request-assessment/" }
    : ctas.systemReview;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Partners", path: "/partners/" },
          { name: partner.name, path },
        ]}
      />

      <Hero
        eyebrow={partner.category}
        title={h1}
        description={partner.summary}
        primaryCta={primaryCta}
        secondaryCta={ctas.consultation}
      />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">{partner.overview}</p>
        <p className="mt-4 rounded-card border border-border bg-muted p-4 text-sm text-muted-text">
          Note: Freedom HR Solutions helps businesses implement, configure, optimize, and support
          workflows involving this platform. We do not claim official partnership, certification, or
          endorsement unless that status has been confirmed.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="How we help"
          title={`Support for workflows involving ${partner.name}`}
          description="Practical help across implementation, configuration, integration, optimization, and troubleshooting."
        />
        <div className="mt-10">
          <FeatureGrid items={partner.supportAreas} columns={3} variant="card" />
        </div>
      </Section>

      <RelatedPages
        eyebrow="Services"
        title="Related services"
        description="The services most often paired with platform support."
        items={serviceRefs(partner.relatedServiceSlugs)}
      />

      <FaqSection faqs={partner.faqs} />

      <CtaBand
        title={`Want help getting more from ${partner.name}?`}
        primaryCta={primaryCta}
        secondaryCta={ctas.consultation}
      />

      <SchemaScript
        schema={serviceSchema({
          name: `${partner.name} support`,
          description: partner.meta.description,
          path,
        })}
      />
    </>
  );
}
