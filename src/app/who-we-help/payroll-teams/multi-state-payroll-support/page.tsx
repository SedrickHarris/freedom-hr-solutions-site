// src/app/who-we-help/payroll-teams/multi-state-payroll-support/page.tsx
// Audience-plus-service child page: Payroll Teams x Multi-State Payroll Support
// Route: /who-we-help/payroll-teams/multi-state-payroll-support/
// Service mapping: multi-state-payroll-support
// Audience mapping: payroll-teams
// AI Depth: Level 3 Standard
// Built standalone (bespoke) to match the payroll-teams cluster pattern.

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
import { serviceRefs } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

const PATH = "/who-we-help/payroll-teams/multi-state-payroll-support/";

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "Multi-State Payroll Support for Payroll Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps payroll teams manage multi-state payroll accurately, including state tax withholding setup, SUI configuration, and compliance across jurisdictions. Serving businesses in Las Vegas, Nevada, and nationwide.",
  path: PATH,
});

// Page data

// Section: pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "State-specific setup gaps",
    description:
      "Each new state requires withholding registration, SUI account setup, and correct pay code configuration. When any of those steps is incomplete, payroll errors follow in every cycle until the gap is corrected.",
  },
  {
    title: "Errors that vary by state",
    description:
      "Multi-state payroll errors are harder to diagnose because the same issue may only surface for employees in specific jurisdictions. Tracing the root cause requires knowing what each state requires and where the system configuration diverges from it.",
  },
  {
    title: "New states added without full configuration",
    description:
      "When the business expands into a new state quickly, payroll setup sometimes gets done partially. The team runs payroll and discovers the gaps when errors appear.",
  },
  {
    title: "Remote workforce payroll complexity",
    description:
      "Employees working remotely from different states create withholding obligations that have to be tracked and configured correctly for each individual's work location.",
  },
];

// Section: scenarios
const scenarios = [
  "Your business just added employees in a new state and you need to confirm the payroll configuration is correct before the first pay cycle.",
  "Payroll errors are appearing for employees in specific states and you cannot pinpoint which configuration setting is wrong.",
  "SUI accounts have not been set up correctly for all states where you have employees.",
  "State income tax withholding is calculating incorrectly for employees in one or more jurisdictions.",
  "Your team is managing remote employees in multiple states and is not confident the per-state setup is complete.",
  "A state tax agency notice has come in and your team needs help tracing it back to the payroll configuration.",
];

// FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node anywhere on this page.
const faqs = [
  {
    question: "What does multi-state payroll support for payroll teams include?",
    answer:
      "It includes reviewing and correcting multi-state payroll configuration inside your existing system, setting up state income tax withholding and SUI accounts for new states, diagnosing errors that appear for employees in specific jurisdictions, and building a process that stays accurate as the employee footprint changes. Freedom HR Solutions works inside the payroll systems your team already uses.",
  },
  {
    question: "What is SUI and why does it matter for multi-state payroll?",
    answer:
      "SUI stands for State Unemployment Insurance. Employers are required to register for and pay SUI in each state where they have employees, and each state sets its own rate and filing schedule. When SUI accounts are not set up correctly in the payroll system for every state, filings and payments may be inaccurate. Getting SUI configured correctly for each jurisdiction is one of the most common setup steps when adding employees in a new state.",
  },
  {
    question: "Why do payroll errors appear when employees are added in a new state?",
    answer:
      "Payroll errors in new states usually trace back to incomplete configuration. State income tax withholding may not be set up, the SUI rate may not be entered correctly, or the pay codes and tax settings for that jurisdiction may not have been configured before the first pay cycle ran. Reviewing the setup for each new state before the first payroll processes is the most reliable way to catch these gaps.",
  },
  {
    question: "How does remote work create multi-state payroll complexity?",
    answer:
      "When an employee works remotely from a state different from where the business is registered, the employer typically has obligations in that employee's work state, including state income tax withholding and possibly SUI registration. Each employee's work location determines which state rules apply to their payroll, which means the payroll system has to be configured correctly for every state where remote employees are located.",
  },
  {
    question: "Can Freedom HR Solutions help if we are already running payroll in multiple states but think the configuration has gaps?",
    answer:
      "Yes. We help payroll teams review existing multi-state configuration to identify where setup is incomplete or incorrect, correct the underlying issues, and validate that payroll is calculating correctly for employees in each jurisdiction before the next cycle runs.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "Multi-State Payroll Support for Payroll Teams",
  description:
    "Freedom HR Solutions helps payroll teams manage multi-state payroll accurately, including state tax withholding setup, SUI configuration, and compliance across jurisdictions. Serving businesses in Las Vegas, Nevada, and nationwide.",
  path: PATH,
});

export default function PayrollTeamsMultiStatePayrollSupportPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Payroll Teams > Multi-State Payroll Support */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Payroll Teams", path: "/who-we-help/payroll-teams/" },
          { name: "Multi-State Payroll Support", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For payroll teams"
        title="Multi-State Payroll Support for Payroll Teams"
        description="Running payroll in multiple states means different withholding rules, SUI rates, and filing requirements for every jurisdiction you operate in. We help payroll teams get the configuration right, reduce errors that come from state-specific setup gaps, and keep multi-state payroll running accurately cycle over cycle."
        primaryCta={{ label: "Request Multi-State Payroll Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Intro paragraph (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Every state your business operates in adds another layer of payroll complexity. State
          income tax withholding rules differ. State unemployment insurance rates and registration
          requirements differ. Local tax rules differ. When a payroll team is managing employees
          across two, five, or ten states, the configuration inside the payroll system has to be
          right for every one of them, or errors follow. Freedom HR Solutions helps payroll teams
          review and correct multi-state payroll configuration, set up withholding and SUI correctly
          for new states, identify where cross-state errors are coming from, and build a process that
          stays accurate as the employee footprint grows.
        </p>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Why multi-state payroll gets complicated" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* Scenarios */}
      <Section>
        <SectionHeading eyebrow="Sound familiar?" title="Situations we help payroll teams with" />
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

      {/* Related services */}
      <RelatedPages
        eyebrow="Where to start"
        title="Related services"
        description="The services most relevant to your situation."
        items={serviceRefs([
          "multi-state-payroll-support",
          "payroll-benefits-hr-management",
          "technical-issue-resolution",
          "system-audits-improvements",
          "reporting-data-insights",
        ])}
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
            title: "Multi-State Employers",
            href: "/who-we-help/multi-state-employers/",
            description:
              "Payroll compliance, system configuration, and HR support across multiple states.",
          },
          {
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issues.",
          },
        ]}
      />

      {/* FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request Multi-State Payroll Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema. BreadcrumbList via Breadcrumbs. FAQ schema via FaqSection. */}
      <SchemaScript schema={schema} />
    </>
  );
}
