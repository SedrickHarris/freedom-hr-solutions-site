import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { LocationCard } from "@/components/cards/LocationCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { locations } from "@/data/locations";
import { buildMetadata } from "@/lib/seo";
import { locationPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "Locations Served | Freedom HR Solutions",
  description:
    "Freedom HR Solutions is headquartered in Las Vegas, Nevada and supports businesses locally and nationwide with HR, payroll, benefits, compliance, ACA reporting, and HR technology services.",
  path: "/locations/",
});

const regionLabel: Record<string, string> = {
  local: "Las Vegas Valley",
  state: "Statewide",
  national: "Nationwide",
};

const locationFaqs = [
  { question: "Is Freedom HR Solutions headquartered in Las Vegas?", answer: "Yes. We are headquartered in Las Vegas, Nevada and support businesses locally, statewide, and nationwide." },
  { question: "Does Freedom HR Solutions only serve Las Vegas?", answer: "No. We are based in Las Vegas, but services can be delivered nationwide through remote consulting and system support." },
  { question: "Can you support multi-state employers?", answer: "Yes. We help multi-state employers keep payroll, benefits, and compliance processes consistent across locations." },
];

export default function LocationsHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Locations", path: "/locations/" }]} />

      <Hero
        eyebrow="Locations served"
        title="HR, Payroll, Benefits, and Compliance Support in Nevada and Nationwide"
        description="Freedom HR Solutions is headquartered in Las Vegas, Nevada. We support local businesses across the Las Vegas Valley, employers throughout Nevada, and companies nationwide through remote consulting and system support."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <Section>
        <SectionHeading
          eyebrow="Where we work"
          title="Local roots, nationwide reach"
          description="Our Las Vegas headquarters anchors our local relevance while remote delivery lets us serve employers across the country."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <LocationCard
              key={location.slug}
              title={location.title}
              summary={location.summary}
              href={locationPath(location.slug)}
              regionLabel={regionLabel[location.region]}
            />
          ))}
        </div>
      </Section>

      <FaqSection faqs={locationFaqs} />

      <CtaBand />
    </>
  );
}
