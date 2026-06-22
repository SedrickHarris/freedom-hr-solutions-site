import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AudienceCard } from "@/components/cards/AudienceCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { audiences } from "@/data/audiences";
import { buildMetadata } from "@/lib/seo";
import { audiencePath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "Who We Help | Freedom HR Solutions",
  description:
    "Freedom HR Solutions supports business owners, HR teams, payroll teams, benefits administrators, growing businesses, multi-state employers, and industry-specific organizations.",
  path: "/who-we-help/",
});

const groups = [
  { type: "role", eyebrow: "By role", title: "Role-based support" },
  { type: "company", eyebrow: "By company type", title: "Company-type support" },
  { type: "industry", eyebrow: "By industry", title: "Industry support" },
] as const;

const audienceFaqs = [
  { question: "How do I know which path fits my business?", answer: "Start with your role or business type. If you are unsure, an HR MRI Risk Assessment helps clarify what to prioritize." },
  { question: "Can Freedom HR Solutions help if we do not have an HR department?", answer: "Yes. Many of the businesses we support do not have internal HR. We help build the processes and documentation you need." },
  { question: "Do you work with businesses in our industry?", answer: "We support a range of industries including healthcare, construction, retail, manufacturing, education, and professional services." },
];

export default function WhoWeHelpHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Who We Help", path: "/who-we-help/" }]} />

      <Hero
        eyebrow="Who we help"
        title="HR, Payroll, Benefits, and Compliance Support for the Teams That Keep Businesses Running"
        description="We organize our help around the people and businesses who need it, by role, by company type, and by industry, so you can quickly see how we support your situation."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      {groups.map((group, index) => {
        const items = audiences.filter((audience) => audience.type === group.type);
        return (
          <Section key={group.type} tone={index % 2 === 1 ? "muted" : "default"}>
            <SectionHeading eyebrow={group.eyebrow} title={group.title} />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((audience) => (
                <AudienceCard
                  key={audience.slug}
                  title={audience.navLabel}
                  summary={audience.summary}
                  href={audiencePath(audience.slug)}
                />
              ))}
            </div>
          </Section>
        );
      })}

      <FaqSection faqs={audienceFaqs} />

      <CtaBand />
    </>
  );
}
