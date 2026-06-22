import type { ServiceHub } from "@/types";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Badge } from "@/components/ui/Badge";
import { getServicesByHub } from "@/data/services";
import { audienceRefs } from "@/lib/links";
import { serviceSchema } from "@/lib/schema";
import { servicePath } from "@/lib/routes";
import { Users } from "lucide-react";

export function ServiceHubTemplate({ hub }: { hub: ServiceHub }) {
  // Exclude any child whose slug collides with the hub slug to avoid a self-link.
  const children = getServicesByHub(hub.slug).filter((service) => service.slug !== hub.slug);
  const path = servicePath(hub.slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: hub.title, path },
        ]}
      />

      <Hero
        eyebrow="Service Category"
        title={hub.h1}
        description={hub.summary}
        primaryCta={hub.primaryCta}
        secondaryCta={hub.secondaryCta}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">{hub.intro}</p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Common challenges"
          title="Problems this category solves"
          description="If any of these sound familiar, this is a good place to start."
        />
        <div className="mt-10">
          <FeatureGrid items={hub.problems} columns={2} variant="card" />
        </div>
      </Section>

      {children.length > 0 && (
        <Section>
          <SectionHeading
            eyebrow="Services"
            title={`Explore ${hub.title} services`}
            description="Each service links back to this hub and to related services and audiences."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {children.map((service) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                summary={service.summary}
                href={servicePath(service.slug)}
              />
            ))}
          </div>
        </Section>
      )}

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Who we help" title="Who this category is for" />
            <ul className="mt-6 space-y-3">
              {hub.whoItHelps.map((who) => (
                <li key={who} className="flex items-center gap-3 text-body">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-trust-50 text-brand-600" aria-hidden>
                    <Users size={13} strokeWidth={2.2} />
                  </span>
                  {who}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Search themes" title="What people search for" />
            <div className="mt-6 flex flex-wrap gap-2">
              {hub.searchThemes.map((theme) => (
                <Badge key={theme} tone="muted">
                  {theme}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our approach" title="How an engagement works" description="A clear, practical process from first conversation through ongoing support." />
        <div className="mt-10">
          <ProcessSteps steps={hub.process} />
        </div>
      </Section>

      <RelatedPages
        eyebrow="Who we help"
        title="Related audiences"
        items={audienceRefs(hub.relatedAudienceSlugs)}
        tone="muted"
      />

      <FaqSection faqs={hub.faqs} />

      <CtaBand />

      <SchemaScript
        schema={serviceSchema({ name: hub.title, description: hub.meta.description, path })}
      />
    </>
  );
}
