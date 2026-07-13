import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { LocationCard } from "@/components/cards/LocationCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { locations } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";
import { locationPath } from "@/lib/routes";
import { ctas } from "@/data/shared";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "HR Consulting Locations | Las Vegas, Nevada & Nationwide | Freedom HR Solutions",
  description:
    "Freedom HR Solutions serves businesses in Las Vegas, Henderson, North Las Vegas, Nevada, and nationwide with HR, payroll, benefits, compliance, and ACA reporting consulting.",
  path: "/locations/",
});

const regionLabel: Record<string, string> = {
  local: "Las Vegas Valley",
  state: "Statewide",
  national: "Nationwide",
};

const locationFaqs = [
  {
    question: "Where is Freedom HR Solutions located?",
    answer:
      "Freedom HR Solutions is headquartered in Las Vegas, Nevada. We support businesses in the Las Vegas Valley, throughout Nevada, and nationwide through remote consulting and HR technology services.",
  },
  {
    question: "Does Freedom HR Solutions serve businesses outside Las Vegas?",
    answer:
      "Yes. While we are based in Las Vegas, we support businesses across Nevada and nationwide. Most services can be delivered remotely, including HR compliance reviews, payroll system support, ACA reporting consulting, and HRIS implementation.",
  },
  {
    question: "Can Freedom HR Solutions help Henderson and North Las Vegas businesses?",
    answer:
      "Yes. Henderson and North Las Vegas are part of our local service area. Businesses in the Las Vegas Valley can access our full range of HR, payroll, benefits, and compliance consulting services.",
  },
  {
    question: "Does Freedom HR Solutions work with multi-state employers?",
    answer:
      "Yes. We help multi-state employers manage HR compliance, payroll, benefits administration, and ACA reporting obligations across multiple states. Remote consulting and system support allow us to serve employers wherever their workforce is located.",
  },
  {
    question: "What HR services are available in Nevada?",
    answer:
      "Nevada businesses can access HR compliance support, ACA reporting consulting, payroll and benefits HR management, HRIS implementation, system setup, employee handbook creation, and ongoing HR technology support.",
  },
  {
    question: "How does Freedom HR Solutions deliver services to clients outside Nevada?",
    answer:
      "Nationwide clients are supported through remote consulting, virtual HR technology implementation, and system support. We help out-of-state businesses with HR compliance reviews, payroll and benefits system configuration, ACA reporting, and employee handbook management without requiring on-site presence.",
  },
];

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HR Consulting Locations | Freedom HR Solutions",
  description:
    "Freedom HR Solutions serves businesses in Las Vegas, Henderson, North Las Vegas, Nevada, and nationwide with HR, payroll, benefits, compliance, and ACA reporting consulting.",
  url: `${site.url}/locations/`,
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function LocationsHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Locations", path: "/locations/" },
        ]}
      />

      <Hero
        eyebrow="Locations served"
        title="HR, Payroll, and Compliance Consulting in Las Vegas, Nevada, and Nationwide"
        description="Freedom HR Solutions is headquartered in Las Vegas, Nevada. We support businesses across the Las Vegas Valley, statewide, and nationwide through remote consulting and HR technology support."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      {/* Direct answer block for LLM and AEO citation */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Freedom HR Solutions is headquartered in Las Vegas, Nevada and supports businesses
          locally, statewide, and across the country. Local employers in Las Vegas, Henderson, and
          North Las Vegas can work with us in person or remotely. Nevada and nationwide clients are
          supported through remote consulting, system implementation, and HR technology services.
        </p>
      </Section>

      {/* Location card grid */}
      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title="Local roots, nationwide reach"
          description="Our Las Vegas headquarters anchors our local presence while remote delivery lets us support employers across Nevada and the country."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard
              key={location.slug}
              title={location.title}
              summary={location.summary}
              href={locationPath(location.slug)}
              regionLabel={regionLabel[location.region]}
              withImagePlaceholder
              image={location.image}
            />
          ))}
        </div>
      </Section>

      {/* Geographic coverage section */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Coverage"
          title="How we deliver services across every market we serve"
        />
        <div className="mt-10 space-y-8">
          <div>
            <h3 className="font-display text-xl font-bold text-ink">Las Vegas Valley (Local)</h3>
            <p className="mt-3 leading-relaxed text-body">
              We are based in Las Vegas and support businesses in the Las Vegas Valley directly,
              including Henderson and North Las Vegas. Employers can access{" "}
              <Link
                href="/services/compliance-support/"
                className="text-brand-700 underline hover:text-brand-800"
              >
                HR compliance reviews
              </Link>
              , payroll and benefits support, ACA reporting consulting, HRIS implementation, and
              employee handbook services.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-ink">Nevada (Statewide)</h3>
            <p className="mt-3 leading-relaxed text-body">
              Businesses across Nevada can access our full service offering remotely. We help Nevada
              employers with statewide HR compliance, payroll system support,{" "}
              <Link
                href="/services/aca-reporting-consultant/"
                className="text-brand-700 underline hover:text-brand-800"
              >
                ACA reporting consulting
              </Link>
              , and HR technology implementation regardless of city.
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-ink">Nationwide (Remote)</h3>
            <p className="mt-3 leading-relaxed text-body">
              Companies outside Nevada work with us through remote consulting and system support. We
              regularly support{" "}
              <Link
                href="/who-we-help/multi-state-employers/"
                className="text-brand-700 underline hover:text-brand-800"
              >
                multi-state employers
              </Link>{" "}
              managing HR compliance, payroll, benefits, and ACA reporting obligations across
              multiple jurisdictions.
            </p>
          </div>
        </div>
      </Section>

      <FaqSection faqs={locationFaqs} />

      <CtaBand />

      <SchemaScript schema={collectionPageSchema} />
    </>
  );
}
