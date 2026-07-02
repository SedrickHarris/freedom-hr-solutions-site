import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { AudienceCard } from "@/components/cards/AudienceCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { audiences } from "@/data/audiences";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { audiencePath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "Who We Help | HR, Payroll, Benefits, and Compliance Support | Freedom HR Solutions",
  description:
    "Freedom HR Solutions provides HR, payroll, benefits, and compliance support organized by role, company type, and industry. Find the right starting point for your business situation.",
  path: "/who-we-help/",
});

const groups: {
  type: "role" | "company" | "industry";
  eyebrow: string;
  title: string;
  description: ReactNode;
}[] = [
  {
    type: "role",
    eyebrow: "By role",
    title: "Role-based support",
    description: (
      <>
        These pages are for the people who carry HR responsibilities day to day, whether that is a{" "}
        <Link href="/who-we-help/business-owners/" className="text-brand-700 underline hover:text-brand-800">
          business owner
        </Link>{" "}
        juggling HR alongside everything else, an{" "}
        <Link href="/who-we-help/hr-teams/" className="text-brand-700 underline hover:text-brand-800">
          HR team
        </Link>{" "}
        managing systems and compliance, a payroll team keeping records accurate, or a benefits
        administrator running open enrollment.
      </>
    ),
  },
  {
    type: "company",
    eyebrow: "By company type",
    title: "Company-type support",
    description: (
      <>
        These pages are for businesses at different stages and structures, from{" "}
        <Link href="/who-we-help/small-businesses/" className="text-brand-700 underline hover:text-brand-800">
          small businesses
        </Link>{" "}
        building their HR foundation to growing companies scaling past informal processes,{" "}
        <Link href="/who-we-help/multi-state-employers/" className="text-brand-700 underline hover:text-brand-800">
          multi-state employers
        </Link>{" "}
        managing compliance across multiple jurisdictions, and companies that handle HR without a
        dedicated internal department.
      </>
    ),
  },
  {
    type: "industry",
    eyebrow: "By industry",
    title: "Industry support",
    description: (
      <>
        These pages are for businesses in specific industries where HR, payroll, and compliance
        requirements have their own particular shape:{" "}
        <Link href="/who-we-help/healthcare-companies/" className="text-brand-700 underline hover:text-brand-800">
          healthcare
        </Link>
        ,{" "}
        <Link href="/who-we-help/construction-companies/" className="text-brand-700 underline hover:text-brand-800">
          construction
        </Link>
        , retail, manufacturing, education, and professional services.
      </>
    ),
  },
];

const audienceFaqs = [
  {
    question: "Who does Freedom HR Solutions help?",
    answer:
      "We help business owners, HR teams, payroll teams, and benefits administrators in their day-to-day roles. We also support small businesses, growing companies, multi-state employers, and companies without a dedicated HR department. On the industry side, we work with businesses in healthcare, construction, retail, manufacturing, education, and professional services.",
  },
  {
    question: "How do I know which path fits my situation?",
    answer:
      "Start with your role or company type. If you manage HR as a business owner, start there. If you are part of an HR or payroll team, start with your role. If your industry shapes your HR challenges, the industry pages describe what we see most often. If you are unsure where to start, an HR MRI Risk Assessment gives you a clear picture of your priorities.",
  },
  {
    question: "Can Freedom HR Solutions help if we do not have an HR department?",
    answer:
      "Yes. Many of the businesses we support handle HR without a dedicated internal team. We help build the policies, documentation, system setup, and processes needed to run HR functions without a full-time HR hire.",
  },
  {
    question: "Do you work with businesses in specific industries?",
    answer:
      "Yes. We support businesses in healthcare, construction, retail, manufacturing, education, and professional services. Each industry has its own HR, payroll, and compliance patterns, and the industry pages on this site describe what we typically see and how we help.",
  },
  {
    question: "Does Freedom HR Solutions help businesses that are growing quickly?",
    answer:
      "Yes. Growing businesses frequently outpace their HR infrastructure. We help identify where the gaps are forming, tighten payroll and benefits processes, update documentation, and support system setup so HR scales with the business.",
  },
  {
    question: "Does Freedom HR Solutions support businesses outside Nevada?",
    answer:
      "Yes. We are headquartered in Las Vegas and support businesses in Nevada and nationwide through remote HR consulting, system support, compliance guidance, and ACA reporting support.",
  },
  {
    question: "Does Freedom HR Solutions help with HR technology and systems?",
    answer:
      "Yes. We help businesses select, implement, configure, and support HR, payroll, and benefits systems. HR technology support is relevant across all the audience types on this page, whether you are a business owner evaluating platforms, an HR team managing a system rollout, or a payroll team troubleshooting configuration issues.",
  },
  {
    question: "Does a business need to be a certain size to work with Freedom HR Solutions?",
    answer:
      "No. We work with businesses of many sizes, from small companies just building their HR foundation to larger employers managing multi-state compliance. The common thread is not size: it is that HR, payroll, benefits, or compliance work needs support that is not being met internally.",
  },
];

const whoWeHelpCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Who We Help",
  description:
    "Freedom HR Solutions provides HR, payroll, benefits, and compliance support organized by role, company type, and industry.",
  url: `${site.url}/who-we-help/`,
  provider: {
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
  },
};

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

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Freedom HR Solutions supports four role-based audiences, six company-type audiences, and
          six industry audiences. If you know your role or company type, start there. If you are not
          sure where you fit, the{" "}
          <Link href="/request-assessment/" className="text-brand-700 underline hover:text-brand-800">
            HR MRI Risk Assessment
          </Link>{" "}
          gives you a prioritized view of your HR, payroll, and compliance situation before you
          choose a starting point.
        </p>
      </Section>

      {groups.map((group, index) => {
        const items = audiences.filter((audience) => audience.type === group.type);
        return (
          <Section key={group.type} tone={index % 2 === 1 ? "muted" : "default"}>
            <SectionHeading eyebrow={group.eyebrow} title={group.title} />
            <p className="mt-4 text-base leading-relaxed text-body">{group.description}</p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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

      <Section containerSize="narrow">
        <p className="text-base leading-relaxed text-body">
          Not sure where to start? Our{" "}
          <Link href="/services/" className="text-brand-700 underline hover:text-brand-800">
            services page
          </Link>{" "}
          shows the full range of HR, payroll, benefits, and compliance services we offer. You can
          also explore our{" "}
          <Link href="/locations/" className="text-brand-700 underline hover:text-brand-800">
            Las Vegas and Nevada location pages
          </Link>{" "}
          or learn how we support{" "}
          <Link href="/locations/nationwide-hr-consulting/" className="text-brand-700 underline hover:text-brand-800">
            businesses nationwide
          </Link>
          .
        </p>
      </Section>

      <FaqSection faqs={audienceFaqs} />

      <CtaBand />

      <SchemaScript schema={whoWeHelpCollectionSchema} id="schema-collection" />
    </>
  );
}
