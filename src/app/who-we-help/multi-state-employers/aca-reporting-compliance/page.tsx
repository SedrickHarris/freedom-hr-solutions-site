// src/app/who-we-help/multi-state-employers/aca-reporting-compliance/page.tsx
// Audience-plus-service child page: Multi-State Employers x ACA Reporting & Compliance
// Route: /who-we-help/multi-state-employers/aca-reporting-compliance/
// Service mapping: aca-reporting-consultant
// Audience mapping: multi-state-employers
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03, zero-volume rule applied; multi-state ACA terms
// return near-zero volume per expected B2B HR pattern

import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

// --- Metadata ---
export const metadata: Metadata = buildMetadata({
  title: "ACA Reporting for Multi-State Employers | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps multi-state employers organize ACA reporting data across locations, track eligibility for distributed workforces, prepare 1095-C filings, and respond to IRS notices. Las Vegas and nationwide.",
  path: "/who-we-help/multi-state-employers/aca-reporting-compliance/",
});

// --- Page data ---

// Five areas where multi-state ACA reporting creates complexity
const complexityAreas = [
  {
    title: "ALE status across all locations",
    description:
      "ALE status is determined by combining full-time and full-time equivalent employee counts across every state where you have employees, not each state individually. Multi-state employers near the threshold need to confirm their combined total before assuming no reporting obligation applies.",
  },
  {
    title: "Eligibility tracking for distributed workforces",
    description:
      "Employees in different states may be tracked in separate payroll or HR systems. Gaps in eligibility tracking across those systems can affect the accuracy of 1095-C data and create filing problems.",
  },
  {
    title: "Coverage data across multiple systems",
    description:
      "Coverage offers, enrollment status, and hours-worked data may live in different platforms across locations. Pulling that data together into one accurate picture before filing takes deliberate process and review.",
  },
  {
    title: "1094-C and 1095-C preparation",
    description:
      "Preparing filing information for all employees across all states requires organized, reconciled data from every system where employee records are maintained. Gaps or inconsistencies in source data carry through to the filed forms.",
  },
  {
    title: "ACA penalty notice response",
    description:
      "IRS ACA penalty notices require a timely, organized response. For multi-state employers, understanding what the notice references, and pulling the right coverage and eligibility data to respond, is more complex when records are distributed.",
  },
];

// Scenarios specific to multi-state ACA complexity
const scenarios = [
  "Your employee count is spread across three or more states and you are not certain whether your combined total crosses the ALE threshold.",
  "ACA eligibility and coverage data lives in separate payroll or benefits systems across states and reconciling it before filing is difficult.",
  "You received a 1095-C with errors and need to understand whether the issue is a data problem, a system configuration problem, or a filing problem.",
  "You expanded into new states this year and are not sure how new hires affect your ALE status calculation or your 1095-C obligations.",
  "Your 1095-C forms were filed but a discrepancy between what you reported and what employees received raises questions.",
  "You received an IRS ACA penalty notice and need to understand what it is asking for before responding.",
];

// FAQs: 6 questions eligible for FAQ schema, emitted via FaqSection
const faqs = [
  {
    question: "Does ACA reporting apply to multi-state employers?",
    answer:
      "Yes. ACA reporting obligations apply regardless of how many states you operate in. The ALE threshold calculation requires combining full-time and full-time equivalent employee counts across all states where you have employees, not just the state where you are headquartered.",
  },
  {
    question: "How do multi-state employers calculate ALE status?",
    answer:
      "ALE status is based on whether the employer averaged 50 or more full-time and full-time equivalent employees across all locations in the prior calendar year. Employees in every state count toward the threshold, you cannot calculate ALE status for each state separately.",
  },
  {
    question: "How do multi-state employers organize ACA data across locations?",
    answer:
      "Data typically needs to be pulled from each payroll and benefits system where employee records, hours, and coverage information are stored. Freedom HR Solutions helps employers identify where the data lives, consolidate it for filing review, and check it for consistency before preparing 1095-C information.",
  },
  {
    question: "What is Form 1095-C and who needs to file it?",
    answer:
      "Form 1095-C is the IRS form Applicable Large Employers use to report health coverage offers, employee eligibility, and coverage information for each full-time employee. It is filed with the IRS alongside Form 1094-C and furnished to employees each year.",
  },
  {
    question: "Can Freedom HR Solutions help multi-state employers respond to an IRS ACA notice?",
    answer:
      "Yes. We help employers understand what an IRS ACA notice is asking for, review the underlying coverage and eligibility data, and organize a practical response. Freedom HR Solutions provides process support and guidance, not legal or tax advice.",
  },
  {
    question: "Does ACA reporting change when an employer expands into a new state?",
    answer:
      "Expanding into a new state adds employees to your total headcount, which can affect your ALE status calculation if you are near the threshold. New employees in new states also need to be included in eligibility tracking and 1095-C reporting. It is worth reviewing your ACA setup when adding a new state.",
  },
];

// --- Page component ---
export default function MultiStateEmployersAcaReportingPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Multi-State Employers > ACA Reporting */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Multi-State Employers", path: "/who-we-help/multi-state-employers/" },
          { name: "ACA Reporting", path: "/who-we-help/multi-state-employers/aca-reporting-compliance/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For multi-state employers"
        title="ACA Reporting for Multi-State Employers"
        description="ACA reporting applies regardless of how many states you operate in. For multi-state employers, the added complexity is data: employee eligibility, coverage offers, and hours worked may be tracked in different systems across different locations. Freedom HR Solutions helps multi-state employers confirm ALE status, organize coverage and eligibility data from multiple systems, prepare 1095-C filings, and respond to IRS notices. We provide guidance and process support, not legal or tax advice."
        primaryCta={{ label: "Request ACA Reporting Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Why multi-state ACA reporting is more complex */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Why it is more complex"
          title="Why ACA reporting is more complex for multi-state employers"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            Multi-state employers face the same{" "}
            <Link href="/services/aca-reporting-consultant/" className="text-brand-700 underline hover:text-brand-800">
              ACA reporting obligations
            </Link>{" "}
            as single-location employers, but their data is harder to assemble. Employees in
            different states may be tracked in separate payroll systems. Coverage offers may
            vary by location. Hours-worked data for part-time and variable-hour employees may
            sit in different platforms.
          </p>
          <p>
            When it is time to file, pulling all of that into accurate 1094-C and 1095-C forms
            takes more effort and creates more opportunities for error. The ALE threshold
            calculation also requires combining full-time and full-time equivalent counts across
            every state, a step that is easy to miscalculate when payroll is not centralized.
          </p>
          <p>
            Freedom HR Solutions helps{" "}
            <Link href="/who-we-help/multi-state-employers/" className="text-brand-700 underline hover:text-brand-800">
              multi-state employers
            </Link>{" "}
            work through each step of the ACA reporting process, from confirming ALE status
            to organizing data across systems to preparing filing information and responding
            to notices. We are headquartered in Las Vegas and serve employers nationwide.
          </p>
        </div>
      </Section>

      {/* What we help with: five complexity areas */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Where we help"
          title="What we help multi-state employers with"
          as="h2"
        />
        <div className="mt-10">
          <FeatureGrid items={complexityAreas} columns={2} variant="card" />
        </div>
      </Section>

      {/* Situations we help with */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations we help with"
          as="h2"
        />
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

      {/* Related services inline link block */}
      <Section tone="muted" containerSize="narrow">
        <SectionHeading
          eyebrow="Related support"
          title="Other support for multi-state employers"
          as="h2"
        />
        <div className="mt-6 space-y-3 text-body leading-relaxed">
          <p>
            ACA reporting is one of several compliance areas that become more complex as you
            operate across state lines. Multi-state employers often need coordinated support
            across{" "}
            <Link href="/who-we-help/multi-state-employers/payroll-compliance/" className="text-brand-700 underline hover:text-brand-800">
              multi-state payroll compliance
            </Link>
            ,{" "}
            <Link href="/who-we-help/multi-state-employers/employee-handbooks/" className="text-brand-700 underline hover:text-brand-800">
              multi-state employee handbooks
            </Link>
            , and{" "}
            <Link href="/who-we-help/multi-state-employers/workforce-compliance/" className="text-brand-700 underline hover:text-brand-800">
              workforce compliance
            </Link>
            . For a structured review of your current HR and compliance setup across all
            locations, the{" "}
            <Link href="/request-assessment/" className="text-brand-700 underline hover:text-brand-800">
              HR MRI Risk Assessment
            </Link>{" "}
            is a good starting point.
          </p>
        </div>
      </Section>

      {/* FAQs: FAQ schema emitted here via FaqSection. No second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request ACA Reporting Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* Schema: ProfessionalService via SchemaScript. Breadcrumb and FAQ schema emitted by their components. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "ACA Reporting for Multi-State Employers",
          description:
            "Freedom HR Solutions helps multi-state employers confirm ALE status, organize coverage and eligibility data across locations, prepare 1095-C filings, and respond to IRS ACA notices.",
          path: "/who-we-help/multi-state-employers/aca-reporting-compliance/",
        })}
      />
    </>
  );
}
