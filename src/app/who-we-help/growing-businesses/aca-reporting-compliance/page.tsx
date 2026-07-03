import type { Metadata } from "next";
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
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "ACA Reporting Compliance for Growing Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps growing businesses determine ALE status, understand ACA filing requirements, and prepare for IRS 1094 and 1095 reporting as their headcount grows. Las Vegas and nationwide.",
  path: "/who-we-help/growing-businesses/aca-reporting-compliance/",
});

// CHANGE: Pain point cards - ACA/ALE threshold awareness specific to growing businesses
const painPoints = [
  {
    title: "Not sure if ACA reporting applies yet",
    description:
      "Growing businesses often do not know whether they have crossed the Applicable Large Employer threshold. The calculation involves full-time equivalent hours, not just headcount, which makes the answer less obvious than it seems.",
  },
  {
    title: "Workforce data not organized for filing",
    description:
      "ACA reporting requires employee count, coverage offer, and eligibility data to be organized and consistent. Growing businesses frequently have this information spread across payroll, benefits, and HR systems that do not align.",
  },
  {
    title: "No process for tracking ACA eligibility",
    description:
      "As headcount grows, tracking which employees have crossed eligibility thresholds and what coverage was offered becomes harder. Without a structured tracking process, filing information is harder to assemble accurately.",
  },
  {
    title: "Receiving an ACA notice without a clear response plan",
    description:
      "Growing businesses that crossed the ALE threshold without realizing it may receive an IRS notice. Without a clear understanding of what triggered it and what to do next, these notices create significant uncertainty.",
  },
];

// CHANGE: Scenarios - ALE threshold and ACA readiness situations for growing businesses
const scenarios = [
  "Your headcount has grown significantly and you are not sure whether ACA reporting requirements now apply to your business.",
  "You know you are approaching or have crossed fifty employees but have not reviewed your full-time equivalent calculation.",
  "Benefits enrollment just closed and you are not confident the eligibility and coverage data is organized for reporting.",
  "Your payroll and benefits systems do not share data cleanly, and assembling ACA filing information takes significant manual effort.",
  "You received an IRS notice related to ACA and are not sure how to respond.",
  "You want to understand your ACA obligations before the next filing deadline rather than after.",
];

// CHANGE: How we help - four cards specific to ACA/growing business intersection
const howWeHelp = [
  {
    title: "ALE status review",
    description:
      "We help you review your workforce numbers, including full-time equivalent calculations, so you understand whether ACA reporting requirements apply to your business and what to expect going forward.",
  },
  {
    title: "Workforce and coverage data organization",
    description:
      "We help organize the employee count, coverage offer, and eligibility data you need for ACA reporting so the information is consistent across systems before filing preparation begins.",
  },
  {
    title: "ACA filing preparation support",
    description:
      "We support the preparation of IRS Forms 1094 and 1095 filing information, helping you organize what is needed and reduce avoidable errors before submission.",
  },
  {
    title: "ACA notice response support",
    description:
      "If you have received an IRS ACA notice, we help you understand what triggered it, organize supporting information, and prepare a practical response. We do not provide legal advice or guarantee outcomes.",
  },
];

// CHANGE: FAQs - 6 AEO-ready questions targeting ACA/growing business intent
const faqs = [
  {
    question: "When does ACA reporting apply to a growing business?",
    answer:
      "ACA reporting requirements generally apply to Applicable Large Employers, which are employers that averaged 50 or more full-time and full-time equivalent employees in the prior calendar year. As a business grows, it is worth reviewing the calculation annually rather than assuming the threshold has not been crossed. We help growing businesses review their numbers so they know where they stand before the next filing cycle.",
  },
  {
    question: "What is an Applicable Large Employer?",
    answer:
      "An Applicable Large Employer is generally an employer that averaged 50 or more full-time and full-time equivalent employees across the prior calendar year. Full-time equivalent employees are calculated by combining part-time hours. Because the calculation includes FTE employees and not just full-time headcount, businesses with a mix of full-time and part-time workers may qualify without realizing it.",
  },
  {
    question: "How is the ALE threshold calculated?",
    answer:
      "The ALE threshold is generally 50 full-time and full-time equivalent employees averaged across all twelve months of the prior year. Full-time equivalent employees are calculated by dividing total part-time hours worked in a month by 120. We help growing businesses work through this calculation so they have a clear answer rather than an estimate.",
  },
  {
    question: "What ACA reporting forms do employers file?",
    answer:
      "Applicable Large Employers generally file IRS Forms 1094-C and 1095-C. Form 1095-C is provided to each full-time employee and reports individual coverage offer and enrollment details. Form 1094-C is the transmittal filed with the IRS summarizing the employer's coverage information. Accurate forms depend on organized workforce, coverage, and eligibility data. We help employers assemble that information before preparation begins.",
  },
  {
    question: "What should a growing business do when it receives an IRS ACA notice?",
    answer:
      "The first step is to understand what the notice is about and what triggered it. IRS ACA notices are typically related to coverage offers, eligibility, or affordability information from a prior filing year. We help employers review the notice, organize supporting information, and prepare a practical response. We do not provide legal advice or guarantee outcomes, and we recommend involving legal counsel for complex notice situations.",
  },
  {
    question: "Can ACA reporting requirements change as a business grows?",
    answer:
      "Yes. ALE status is determined each year based on the prior year's average workforce count. A business that was not an ALE one year may become one the next if headcount grew. This means growing businesses should review their ALE status annually rather than assuming it has not changed. We help employers track this year to year so reporting obligations do not come as a surprise.",
  },
];

// CHANGE: Schema - ProfessionalService for this specific intersection page
const schema = professionalServiceSchema({
  name: "ACA reporting and compliance support for growing businesses",
  description:
    "Freedom HR Solutions helps growing businesses determine ALE status, understand ACA filing requirements, and prepare for IRS 1094 and 1095 reporting as their headcount grows. Las Vegas and nationwide.",
  path: "/who-we-help/growing-businesses/aca-reporting-compliance/",
});

export default function GrowingBusinessesAcaReportingPage() {
  return (
    <>
      {/* CHANGE: 4-level breadcrumb - Home > Who We Help > Growing Businesses > ACA Reporting and Compliance */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Growing Businesses", path: "/who-we-help/growing-businesses/" },
          {
            name: "ACA Reporting and Compliance",
            path: "/who-we-help/growing-businesses/aca-reporting-compliance/",
          },
        ]}
      />

      {/* CHANGE: Hero - ACA/growing business framing with page-specific CTAs */}
      <Hero
        eyebrow="For your business"
        title="ACA Reporting and Compliance Support for Growing Businesses"
        description="Understand whether ACA reporting applies to your business, determine your ALE status, and prepare accurate filings as your team grows."
        primaryCta={{
          label: "Request ACA Reporting Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* CHANGE: Direct answer block - ALE threshold awareness framing for growing businesses */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          As a business grows, its ACA reporting obligations can change. A company that did not
          qualify as an Applicable Large Employer at thirty employees may qualify once it crosses the
          fifty full-time and full-time equivalent threshold. Many growing businesses do not realize
          ACA reporting requirements apply until after a filing cycle has passed or a notice arrives.
          Freedom HR Solutions helps growing businesses understand where they stand, review their ALE
          status, organize workforce and coverage data, and prepare for the reporting obligations that
          come with reaching and exceeding the ALE threshold. We work with growing businesses in Las
          Vegas, across Nevada, and nationwide.
        </p>
      </Section>

      {/* CHANGE: Pain points section */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Common challenges we hear" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Scenarios section */}
      <Section>
        <SectionHeading eyebrow="Sound familiar?" title="Situations we help with" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {scenarios.map((scenario) => (
            <li
              key={scenario}
              className="flex items-start gap-3 rounded-card border border-border bg-white p-4"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700"
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 18l6-6-6-6"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="text-body">{scenario}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* CHANGE: How we help section */}
      <Section tone="muted">
        <SectionHeading eyebrow="How we help" title="ACA reporting support for growing teams" />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Recommended services - ACA reporting cluster */}
      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services"
        description="The services most relevant to your situation."
        items={[
          {
            title: "ACA Reporting Consultant",
            href: "/services/aca-reporting-consultant/",
            description:
              "Support reviewing ACA reporting responsibilities, organizing workforce data, and preparing IRS 1094 and 1095 filing information.",
          },
          {
            title: "Applicable Large Employer Review",
            href: "/services/applicable-large-employer-review/",
            description:
              "A focused review of your full-time and full-time equivalent employee count to determine whether ACA reporting requirements apply.",
          },
          {
            title: "ACA Compliance Review",
            href: "/services/aca-compliance-review/",
            description:
              "A review of your ACA reporting process, workforce data, and eligibility tracking to catch issues before filing.",
          },
          {
            title: "Compliance Support",
            href: "/services/compliance-support/",
            description:
              "Broader HR compliance support to identify gaps and strengthen your documentation and policy foundation.",
          },
          {
            title: "Reporting and Data Insights",
            href: "/services/reporting-data-insights/",
            description:
              "Help organizing workforce and coverage data so the information you need for ACA reporting is consistent and accessible.",
          },
        ]}
        tone="muted"
      />

      {/* CHANGE: Related audiences - growing businesses cluster */}
      <RelatedPages
        eyebrow="Who we help"
        title="Related audiences"
        items={[
          {
            title: "Growing Businesses",
            href: "/who-we-help/growing-businesses/",
            description:
              "HR systems, payroll, benefits, and compliance support that scales as your headcount grows.",
          },
          {
            title: "Benefits Administrators",
            href: "/who-we-help/benefits-administrators/",
            description:
              "Open enrollment support, eligibility management, and benefits workflow consulting.",
          },
          {
            title: "Multi-State Employers",
            href: "/who-we-help/multi-state-employers/",
            description:
              "HR compliance, ACA reporting, and payroll support across multiple states and jurisdictions.",
          },
        ]}
      />

      {/* CHANGE: 6 FAQs - ACA/ALE/growing business AEO intent. FaqSection emits FAQ schema. */}
      <FaqSection faqs={faqs} />

      {/* CHANGE: Page-specific CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request ACA Reporting Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* CHANGE: ProfessionalService schema for this intersection page */}
      <SchemaScript schema={schema} />
    </>
  );
}
