import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { ctas } from "@/data/shared";
import { buildMetadata } from "@/lib/seo";
import { personSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Freedom HR Solutions | HR, Payroll, Benefits, and Compliance Support",
  description:
    "Learn about Freedom HR Solutions, founder Soleil Kline, and the company mission to support businesses with HR compliance, payroll, benefits, ACA reporting, and HR technology.",
  path: "/about/",
});

const values = [
  { title: "Service", description: "We lead with genuine help, and we measure our work by whether your business is better off." },
  { title: "Accountability", description: "We do what we say, follow through, and stay reachable when you need us." },
  { title: "Integrity", description: "We give honest, practical guidance, even when it is not what you hoped to hear." },
  { title: "Clarity", description: "We translate complex HR, payroll, and compliance topics into plain language." },
  { title: "Practical support", description: "We focus on what actually moves the needle for your team, not busywork." },
  { title: "Business-first problem solving", description: "We solve HR problems with your broader business goals in mind." },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />

      <Hero
        eyebrow="About us"
        title="About Freedom HR Solutions"
        description="Freedom HR Solutions is headquartered in Las Vegas, Nevada and supports businesses locally, statewide, and nationwide with HR compliance, payroll, benefits, ACA reporting, HR technology, and ongoing workforce support."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <SectionHeading eyebrow="Who we are" title="Practical HR support for growing businesses" />
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-body">
          <p>
            Freedom HR Solutions helps businesses make sense of the systems, processes, and compliance
            responsibilities that keep their workforce running. We work across HR compliance, payroll,
            benefits, ACA reporting, HR technology, system implementation, and ongoing support.
          </p>
          <p>
            We are based in Las Vegas, Nevada, and we support employers throughout the Las Vegas Valley,
            across Nevada, and nationwide through remote consulting and system support. Many of the
            businesses we help do not have a large internal HR team, and we are built to support them.
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Founder-led" title="Founder-led support from Soleil Kline" />
          </div>
          <div>
            <p className="text-lg leading-relaxed text-body">
              Soleil Kline brings experience across HR technology, payroll, benefits, compliance, HR
              operations, and HCM systems. Freedom HR Solutions was created to help businesses reduce
              administrative burden, improve system accuracy, strengthen compliance readiness, and make
              better workforce decisions.
            </p>
            <div className="mt-6">
              <Button href={site.founder.linkedin} variant="outline">
                Connect with Soleil on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="What we value" title="The principles behind our work" />
        <div className="mt-10">
          <FeatureGrid items={values} columns={3} variant="card" />
        </div>
      </Section>

      <Section tone="muted" containerSize="narrow">
        <SectionHeading eyebrow="Local and nationwide" title="Local roots, nationwide reach" />
        <p className="mt-5 text-lg leading-relaxed text-body">
          Our Las Vegas headquarters anchors our local relevance, and remote delivery lets us support
          employers across the country. Whether you are a single-location business in Nevada or a
          multi-state employer, we help you build HR, payroll, and benefits processes that scale.
        </p>
      </Section>

      <CtaBand />

      <SchemaScript schema={personSchema()} />
    </>
  );
}
