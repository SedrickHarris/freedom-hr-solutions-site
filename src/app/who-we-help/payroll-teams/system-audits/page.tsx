// src/app/who-we-help/payroll-teams/system-audits/page.tsx
// Audience-plus-service child page: Payroll Teams x System Audits & Improvements
// Route: /who-we-help/payroll-teams/system-audits/
// Service mapping: system-audits-improvements
// Audience mapping: payroll-teams
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03, zero-volume rule applied

import type { Metadata } from "next";
import Link from "next/link";
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
  title: "Payroll System Audit Support for Payroll Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps payroll teams audit payroll system configuration, surface recurring error sources, review deduction and tax setup, and build a prioritized improvement plan.",
  path: "/who-we-help/payroll-teams/system-audits/",
});

// Page data

// What a payroll system audit covers: four focus areas (FeatureGrid, 2 columns, card variant)
const auditAreas = [
  {
    title: "Payroll configuration review",
    description:
      "Pay rules, earnings codes, deduction settings, and tax configuration are reviewed against how your organization actually operates. Mismatched settings are the most common source of recurring payroll errors.",
  },
  {
    title: "Deduction and withholding setup",
    description:
      "Benefit deductions, garnishments, and withholding setup are reviewed for accuracy. Pre-tax and post-tax classification errors and missing deduction logic are identified and documented.",
  },
  {
    title: "Payroll data quality review",
    description:
      "Employee records, historical pay data, and system-generated reports are reviewed for inconsistencies. Data quality problems create downstream reporting and reconciliation errors that compound over time.",
  },
  {
    title: "Workflow and integration gaps",
    description:
      "Handoffs between payroll, HR, and benefits systems are mapped to identify where data breaks down, where manual workarounds have replaced system automation, and where duplicate entry creates risk.",
  },
];

// Situations that call for an audit (scenario list)
const scenarios = [
  "Recurring payroll errors keep coming back after your team corrects them.",
  "The person who originally configured the system is no longer with the company.",
  "The organization expanded to new states and the system was never re-reviewed.",
  "A new platform went live but the setup has never been formally validated.",
  "Deduction or withholding amounts do not match what employees or payroll registers show.",
  "Pre-year-end review to catch configuration problems before W-2 processing begins.",
];

// FAQs (6), AEO intent, payroll team audience
const faqs = [
  {
    question: "What does a payroll system audit include?",
    answer:
      "A payroll system audit reviews your payroll platform configuration, pay rules, deduction setup, withholding logic, data quality, and system integrations. The result is a prioritized list of configuration gaps and recommended corrections ranked by impact on accuracy and compliance readiness.",
  },
  {
    question: "How is a payroll system audit different from a financial or compliance audit?",
    answer:
      "A payroll system audit focuses on how your payroll platform is configured and whether that configuration matches your actual pay rules, benefit deductions, and tax obligations. It is a system and workflow review, not a financial statement audit or a regulatory examination. The goal is to find configuration gaps before they create errors or compliance exposure.",
  },
  {
    question: "What are the most common payroll system configuration errors?",
    answer:
      "The most common errors include deduction amounts that do not match benefit elections, earnings codes mapped to incorrect tax treatments, withholding logic that was set up for one state and never updated for multi-state employees, and benefit deduction timing that does not align with payroll cycles. Most recurring payroll errors trace back to one of these setup gaps.",
  },
  {
    question: "When should a payroll team request a system audit?",
    answer:
      "The best time to request a payroll system audit is when errors keep recurring after correction, when the organization has grown or changed without a formal system re-review, when a new platform has gone live and the configuration has not been validated, or before year-end processing begins. Auditing before problems compound is significantly easier than correcting after the fact.",
  },
  {
    question: "Can Freedom HR Solutions help fix the issues found during the audit?",
    answer:
      "Yes. After delivering the audit findings and prioritized improvement plan, Freedom HR Solutions can work directly with your payroll team to correct configuration gaps, update deduction logic, and validate the changes before the next payroll cycle. Implementation support is available as a follow-on engagement.",
  },
  {
    question: "How long does a payroll system audit take?",
    answer:
      "The timeline depends on the complexity of your payroll configuration, how many states you operate in, and how many platforms are involved. A focused audit of a single payroll platform typically takes one to two weeks. More complex environments with multiple integrations or multi-state payroll take longer. Freedom HR Solutions will confirm scope and timeline during the initial review.",
  },
];

// Page component
export default function PayrollTeamsSystemAuditsPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Payroll Teams > System Audits */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Payroll Teams", path: "/who-we-help/payroll-teams/" },
          { name: "System Audits", path: "/who-we-help/payroll-teams/system-audits/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For payroll teams"
        title="Payroll System Audit Support for Payroll Teams"
        description="Recurring payroll errors rarely come from the software. They come from configuration that was set up once and never revisited. Freedom HR Solutions works with payroll teams to conduct a structured review of payroll system setup, deduction logic, tax configuration, and workflow gaps, then delivers a prioritized list of what to fix and in what order."
        primaryCta={{ label: "Request Payroll System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Why payroll teams need a system audit */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Why it matters"
          title="Why payroll system configuration drift creates recurring errors"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            Payroll configuration is set up once during implementation and rarely revisited.
            As the organization grows, adds benefit plans, expands to new states, or
            changes pay structures, the system settings often do not keep pace. The result
            is a growing gap between how the system is configured and how the organization
            actually operates.
          </p>
          <p>
            That gap shows up as{" "}
            <Link
              href="/services/system-audits-improvements/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              recurring payroll errors
            </Link>{" "}
            that come back after correction, deduction amounts that do not reconcile,
            withholding that does not match employee expectations, and reporting that
            cannot be trusted. Freedom HR Solutions helps payroll teams trace these
            problems to their source rather than patching the same errors each cycle.
          </p>
        </div>
      </Section>

      {/* What a payroll system audit covers */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we review"
          title="What a payroll system audit covers"
          as="h2"
        />
        <div className="mt-10">
          <FeatureGrid items={auditAreas} columns={2} variant="card" />
        </div>
      </Section>

      {/* Situations that call for a payroll system audit */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations that call for a payroll system audit"
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
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Related support"
          title="Other support for payroll teams"
          as="h2"
        />
        <div className="mt-6 space-y-3 text-body leading-relaxed">
          <p>
            System audits are one part of supporting payroll operations. Payroll teams
            often need additional help with{" "}
            <Link
              href="/who-we-help/payroll-teams/payroll-system-support/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              payroll system support
            </Link>
            ,{" "}
            <Link
              href="/who-we-help/payroll-teams/technical-issue-resolution/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              technical issue resolution
            </Link>
            , and{" "}
            <Link
              href="/services/reporting-data-insights/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              payroll reporting and data insights
            </Link>
            . If you are not sure where to start, the{" "}
            <Link
              href="/request-assessment/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              HR MRI Risk Assessment
            </Link>{" "}
            provides a structured review of your payroll and HR operations and is a
            good first step.
          </p>
        </div>
      </Section>

      {/* Related services RelatedPages block */}
      <RelatedPages
        eyebrow="Services"
        title="Related services for payroll teams"
        items={[
          {
            title: "System Audits and Improvements",
            href: "/services/system-audits-improvements/",
            description:
              "A structured review of your payroll and HR system configuration to find what is misconfigured, missing, or underused.",
          },
          {
            title: "Technical Issue Resolution",
            href: "/services/technical-issue-resolution/",
            description:
              "Resolve payroll system errors, configuration problems, and integration failures that your team cannot trace to a root cause.",
          },
          {
            title: "Reporting and Data Insights",
            href: "/services/reporting-data-insights/",
            description:
              "Build payroll reports and data outputs that run reliably without manual reconciliation each pay period.",
          },
          {
            title: "Ongoing Technical Support",
            href: "/services/ongoing-technical-support/",
            description:
              "Continued access to payroll system support after an audit so corrections hold and new issues get resolved quickly.",
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
            title: "Payroll Teams",
            href: "/who-we-help/payroll-teams/",
            description:
              "Resolve payroll system issues, improve accuracy, and support multi-state payroll workflows.",
          },
          {
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issues.",
          },
          {
            title: "Growing Businesses",
            href: "/who-we-help/growing-businesses/",
            description:
              "HR systems, payroll, benefits, and compliance support that scales as your headcount grows.",
          },
        ]}
      />

      {/* FAQs: FaqSection emits FAQ schema. No second FAQ schema node on this page. */}
      <FaqSection faqs={faqs} />

      {/* CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request Payroll System Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema for this intersection page */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "Payroll system audit support for payroll teams",
          description:
            "Freedom HR Solutions helps payroll teams audit payroll system configuration, surface recurring error sources, review deduction and tax setup, and build a prioritized improvement plan.",
          path: "/who-we-help/payroll-teams/system-audits/",
        })}
      />
    </>
  );
}
