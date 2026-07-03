// src/app/who-we-help/benefits-administrators/aca-reporting/page.tsx
// Audience-plus-service intersection page: Benefits Administrators x ACA Reporting
// Route: /who-we-help/benefits-administrators/aca-reporting/
// Service anchor: aca-reporting-consultant
// Audience anchor: benefits-administrators
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03; zero-volume rule applied.
// Benefits-admin-specific ACA terms return near-zero volume per expected B2B HR niche pattern.
// Page justified on topical completeness, internal linking authority,
// and AEO FAQ capture for role-specific queries.

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

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "ACA Reporting Support for Benefits Administrators | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps benefits administrators organize ACA reporting data, review eligibility tracking, and prepare 1094-C and 1095-C filing information. Remote support nationwide.",
  path: "/who-we-help/benefits-administrators/aca-reporting/",
});

// Pain points: benefits-admin-specific ACA challenges
const painPoints = [
  {
    title: "Hours data is inconsistent across systems",
    description:
      "Benefits administrators often rely on hours-tracking data from payroll systems that do not sync cleanly with benefits platforms. Inconsistencies in that data create avoidable errors when 1095-C forms are being prepared.",
  },
  {
    title: "Coverage offers are not tracked consistently through the year",
    description:
      "ACA reporting requires accurate records of what coverage was offered, to whom, and when. Benefits administrators who manage this manually or across multiple systems frequently find gaps when filing season arrives.",
  },
  {
    title: "Eligibility records do not match across HR and payroll platforms",
    description:
      "When HR and payroll systems disagree on eligibility, preparing accurate 1094-C and 1095-C data becomes difficult. Reconciling those records under deadline pressure creates risk that is easier to prevent than to correct after filing.",
  },
  {
    title: "Prior filings raised questions that were never fully resolved",
    description:
      "Benefits administrators who experienced filing errors, corrections, or IRS notices in prior years often carry forward the same data and process gaps. Without a structured review, the same problems are likely to repeat.",
  },
];

// Scenarios
const scenarios = [
  "ACA filing season is approaching and your hours-tracking data has not been reviewed for consistency.",
  "Coverage offer records are spread across multiple systems and do not reconcile cleanly.",
  "You are not confident your eligibility tracking will hold up if the filing data is questioned.",
  "A prior filing required corrections and you want a cleaner process before the next one.",
  "Your payroll and benefits platforms do not share data, and assembling filing information takes significant manual effort.",
  "You want to review your ACA data and process before deadlines arrive rather than after.",
];

// How we help
const howWeHelp = [
  {
    title: "ACA data and eligibility review",
    description:
      "We review your workforce, coverage, and eligibility data for consistency across systems so the information used to prepare 1094-C and 1095-C forms reflects what actually happened during the plan year.",
  },
  {
    title: "Hours-tracking process review",
    description:
      "We review how hours are tracked and whether that data aligns with what your benefits and payroll systems report. Inconsistencies caught early are easier to resolve than errors found after filing.",
  },
  {
    title: "1094-C and 1095-C filing preparation support",
    description:
      "We support the preparation of IRS 1094-C and 1095-C filing information, helping you organize coverage offer records, eligibility data, and workforce counts before submission. We do not file on your behalf.",
  },
  {
    title: "ACA notice response support",
    description:
      "If you have received an IRS notice related to ACA reporting, we help you review the underlying data, identify where gaps may have contributed, and prepare a more organized process going forward. We do not provide legal advice.",
  },
];

// FAQs: 6 AEO-targeted questions
const faqs = [
  {
    question: "What ACA reporting responsibilities do benefits administrators typically handle?",
    answer:
      "Benefits administrators often manage hours-tracking data, coverage offer records, eligibility reconciliation, and coordination with payroll and carriers to prepare the information needed for 1094-C and 1095-C filing. The specific scope depends on how your HR, payroll, and benefits systems are structured and how responsibilities are divided internally.",
  },
  {
    question: "How does Freedom HR Solutions help benefits administrators with ACA reporting?",
    answer:
      "We review your workforce and coverage data for consistency, check eligibility tracking records, and help you organize the information needed to prepare accurate 1094-C and 1095-C filing forms. We provide data review and process support, not legal advice or guaranteed filing outcomes.",
  },
  {
    question: "What is the difference between Form 1094-C and Form 1095-C?",
    answer:
      "Form 1094-C is the transmittal submitted to the IRS that summarizes employer-level health coverage information. Form 1095-C is provided to each full-time employee and reports individual coverage offers and enrollment details for the plan year. Accurate preparation of both forms depends on organized, consistent underlying workforce and coverage data.",
  },
  {
    question: "What happens if ACA reporting data is inconsistent between HR and payroll systems?",
    answer:
      "Inconsistent data across systems can produce errors on 1094-C and 1095-C forms, which may result in IRS notices or the need for corrected filings. Reviewing and reconciling data before filing is the most reliable way to catch discrepancies early. We help identify and address those inconsistencies as part of our ACA reporting review process.",
  },
  {
    question: "Can Freedom HR Solutions help if we received an ACA-related notice from the IRS?",
    answer:
      "We can help you review your reporting data and processes in connection with an IRS ACA notice. We do not provide legal representation, but we can help you understand where data gaps may have contributed to the notice and work toward a more organized process going forward. We recommend involving legal counsel for complex notice situations.",
  },
  {
    question: "When should a benefits administrator start reviewing ACA data for the upcoming filing cycle?",
    answer:
      "Reviewing ACA data well before filing deadlines gives you the most time to correct inconsistencies before they compound. A mid-year review of hours-tracking and coverage offer records is the most reliable approach. Waiting until filing season is approaching reduces your options significantly if problems are found.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "ACA reporting support for benefits administrators",
  description:
    "Freedom HR Solutions helps benefits administrators organize ACA reporting data, review eligibility tracking, and prepare 1094-C and 1095-C filing information. Remote support nationwide.",
  path: "/who-we-help/benefits-administrators/aca-reporting/",
});

// Page
export default function BenefitsAdministratorsAcaReportingPage() {
  return (
    <>
      {/* Breadcrumb: 4-level */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Benefits Administrators", path: "/who-we-help/benefits-administrators/" },
          {
            name: "ACA Reporting",
            path: "/who-we-help/benefits-administrators/aca-reporting/",
          },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For your role"
        title="ACA Reporting Support for Benefits Administrators"
        description="Organized data, reviewed eligibility records, and prepared filing information so ACA season is less disruptive to your regular benefits work."
        primaryCta={{
          label: "Request ACA Reporting Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Intro + direct answer block */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Benefits administrators are responsible for one of the most data-intensive compliance
          tasks in HR. ACA reporting requires consistent hours tracking, accurate coverage offer
          records, and clean eligibility data across payroll and benefits systems. When that data is
          scattered or inconsistent, filing season creates avoidable risk. Freedom HR Solutions works
          with benefits administrators to organize workforce and coverage data, review eligibility
          tracking, and prepare filing information so 1094-C and 1095-C forms reflect what actually
          happened during the plan year. We support benefits teams in Las Vegas, across Nevada, and
          nationwide.
        </p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            What does ACA reporting support for benefits administrators include?
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">
            Freedom HR Solutions helps benefits administrators review hours-tracking data, organize
            coverage and eligibility records, and prepare the information needed for 1094-C and
            1095-C filing. We work alongside your existing team and tools to reduce errors before
            they reach the IRS. We provide process and data support, not legal advice.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Where ACA reporting creates problems for benefits administrators" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* Scenarios */}
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

      {/* How we help */}
      <Section tone="muted">
        <SectionHeading eyebrow="How we help" title="ACA reporting support for benefits teams" />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* Recommended services */}
      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services"
        description="The services benefits administrators use most often for ACA reporting support."
        items={[
          {
            title: "ACA Reporting Consultant",
            href: "/services/aca-reporting-consultant/",
            description:
              "Support reviewing ACA reporting responsibilities, organizing workforce data, and preparing IRS 1094 and 1095 filing information.",
          },
          {
            title: "ACA Compliance Review",
            href: "/services/aca-compliance-review/",
            description:
              "A review of your ACA reporting process, workforce data, and eligibility tracking to catch issues before filing.",
          },
          {
            title: "Applicable Large Employer Review",
            href: "/services/applicable-large-employer-review/",
            description:
              "A focused review of your full-time and full-time equivalent employee count to determine whether ACA reporting requirements apply.",
          },
          {
            title: "Reporting and Data Insights",
            href: "/services/reporting-data-insights/",
            description:
              "Help organizing workforce and coverage data so the information you need for ACA reporting is consistent and accessible.",
          },
          {
            title: "Compliance Support",
            href: "/services/compliance-support/",
            description:
              "Broader HR compliance support to identify gaps and strengthen your documentation and policy foundation.",
          },
        ]}
        tone="muted"
      />

      {/* Related audiences */}
      <RelatedPages
        eyebrow="Who we help"
        title="Related audiences"
        items={[
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
          {
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issue resolution.",
          },
        ]}
      />

      {/* FAQs: FaqSection emits FAQ schema. No second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{
          label: "Request ACA Reporting Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema */}
      <SchemaScript schema={schema} />
    </>
  );
}
