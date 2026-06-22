import type { Location } from "@/types";
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
import { Badge } from "@/components/ui/Badge";
import { serviceRefs, audienceRefs, locationRefs } from "@/lib/links";
import { professionalServiceSchema } from "@/lib/schema";
import { locationPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

function locationEyebrow(location: Location): string {
  if (location.slug === "las-vegas-nv") return "Las Vegas Headquarters";
  if (location.region === "local") return "Service area";
  if (location.region === "state") return "Statewide support";
  return "Nationwide support";
}

export function LocationPageTemplate({ location }: { location: Location }) {
  const path = locationPath(location.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/" },
          { name: location.title, path },
        ]}
      />

      <Hero
        eyebrow={locationEyebrow(location)}
        title={location.title}
        description={location.summary}
        primaryCta={location.primaryCta ?? ctas.assessment}
        secondaryCta={location.secondaryCta ?? ctas.consultation}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg font-medium leading-relaxed text-ink">{location.positioning}</p>
        <p className="mt-4 text-lg leading-relaxed text-body">{location.intro}</p>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="What we see" title="Challenges in this market" />
        <div className="mt-10">
          <FeatureGrid items={location.localChallenges} columns={2} variant="card" />
        </div>
      </Section>

      <RelatedPages
        eyebrow="Services"
        title="Services available"
        description="Core services for employers in this market."
        items={serviceRefs(location.serviceSlugs)}
      />

      {location.industries.length > 0 && (
        <Section tone="muted">
          <SectionHeading eyebrow="Industries" title="Industries we support here" />
          <div className="mt-6 flex flex-wrap gap-2">
            {location.industries.map((industry) => (
              <Badge key={industry} tone="muted">
                {industry}
              </Badge>
            ))}
          </div>
        </Section>
      )}

      {location.relatedAudienceSlugs && location.relatedAudienceSlugs.length > 0 && (
        <RelatedPages
          eyebrow="Who we help"
          title="Teams we support"
          items={audienceRefs(location.relatedAudienceSlugs)}
        />
      )}

      <RelatedPages
        eyebrow="Nearby"
        title="Related locations"
        items={locationRefs(location.nearbySlugs)}
        tone="muted"
      />

      <FaqSection faqs={location.faqs} />

      <CtaBand
        primaryCta={location.primaryCta ?? ctas.assessment}
        secondaryCta={location.secondaryCta ?? ctas.consultation}
      />

      <SchemaScript
        schema={professionalServiceSchema({
          name: `${location.title}`,
          description: location.meta.description,
          path,
        })}
      />
    </>
  );
}
