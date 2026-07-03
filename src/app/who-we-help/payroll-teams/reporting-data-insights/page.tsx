// src/app/who-we-help/payroll-teams/reporting-data-insights/page.tsx
// Audience-plus-service child page: Payroll Teams x Reporting and Data Insights
// Route: /who-we-help/payroll-teams/reporting-data-insights/
// Service mapping: reporting-data-insights
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

const PATH = "/who-we-help/payroll-teams/reporting-data-insights/";

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "Payroll Reporting and Data Insights for Payroll Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps payroll teams build accurate payroll reports, clean up underlying data, and give finance and leadership the visibility they need. Serving businesses in Las Vegas, Nevada, and nationwide.",
  path: PATH,
});

// Page data

// Section: pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Reports that take too long to build",
    description:
      "Every reporting cycle means pulling data from the system, cross-referencing spreadsheets, and manually formatting before anything goes to leadership. That process should not take as long as it does.",
  },
  {
    title: "Data that does not reconcile across systems",
    description:
      "When payroll data and HR records do not match, reports cannot be trusted. Reconciliation becomes a recurring manual task instead of a one-time cleanup.",
  },
  {
    title: "No clean cost-by-department visibility",
    description:
      "Finance asks for payroll costs by department, by location, or by employee type. Most payroll systems can produce it, but only if the data structure and cost allocations are set up correctly.",
  },
  {
    title: "Underlying data accuracy problems",
    description:
      "Reports are only as accurate as the data behind them. When employee records, pay codes, or cost center assignments have errors, every report that pulls from them is wrong.",
  },
];

// Section: scenarios
const scenarios = [
  "Finance requests a payroll cost-by-department report and your system does not produce it cleanly without manual work.",
  "Payroll and HR records do not reconcile and the discrepancy shows up in every report you run.",
  "Leadership wants headcount and payroll cost visibility but the data lives in more than one place.",
  "Your current reports require manual reconciliation before you can share them with anyone.",
  "You suspect the underlying data has accuracy problems but have not had time to trace where they start.",
  "A new reporting requirement has come in and you are not sure your current system can support it without configuration changes.",
];

// FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node anywhere on this page.
const faqs = [
  {
    question: "What payroll reports can Freedom HR Solutions help build?",
    answer:
      "We help build payroll cost reports, cost-by-department breakdowns, headcount and turnover reports, reconciliation reports, and custom outputs tailored to what finance and leadership need. We work inside your existing payroll and HR systems rather than requiring new software.",
  },
  {
    question: "Why does payroll data not reconcile across systems?",
    answer:
      "Reconciliation gaps usually trace back to how employee records, pay codes, and cost center assignments are structured across systems that do not share a single source of truth. When records are updated in one system but not synced correctly to another, reports from each system tell a different story. Cleaning up the underlying data and reviewing system configuration is usually the starting point.",
  },
  {
    question: "Can Freedom HR Solutions help if our payroll system cannot produce the reports we need?",
    answer:
      "Yes. We help review what your current payroll system can produce, identify where configuration or data structure changes would unlock better reporting, and build the reports your team needs using what is already available. If the system genuinely cannot support a requirement, we help you understand what would be needed to close that gap.",
  },
  {
    question: "What is payroll data cleanup and when does a team need it?",
    answer:
      "Payroll data cleanup is the process of identifying and correcting inaccurate or inconsistent records in your payroll system, including employee classifications, pay codes, cost center assignments, and historical data. A team typically needs it when reports are inconsistent, reconciliation is a recurring manual task, or a new reporting requirement surfaces errors that have accumulated over time.",
  },
  {
    question: "How is payroll reporting support for payroll teams different from HR reporting support?",
    answer:
      "Payroll teams need reporting that works from payroll system data, structured around pay cycles, cost centers, department allocations, and labor cost visibility. HR teams typically need reporting that spans workforce trends, headcount, and compliance status. Freedom HR Solutions supports both, and the right starting point depends on what your team needs to produce and for whom.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "Payroll Reporting and Data Insights for Payroll Teams",
  description:
    "Freedom HR Solutions helps payroll teams build accurate payroll reports, clean up underlying data, and give finance and leadership the visibility they need. Serving businesses in Las Vegas, Nevada, and nationwide.",
  path: PATH,
});

export default function PayrollTeamsReportingDataInsightsPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Payroll Teams > Reporting and Data Insights */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Payroll Teams", path: "/who-we-help/payroll-teams/" },
          { name: "Reporting and Data Insights", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For payroll teams"
        title="Payroll Reporting and Data Insights for Payroll Teams"
        description="Payroll teams sit on the data finance and leadership need, but getting it into clean, reliable reports takes more work than it should. We help payroll teams build better reports, clean up data accuracy issues, and reduce the manual effort that goes into reporting every cycle."
        primaryCta={{ label: "Request Payroll Reporting Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Intro paragraph (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Finance wants a cost-by-department breakdown. Leadership wants headcount by location.
          The payroll system has the data, but pulling it, reconciling it, and getting it into a
          format that does not require a follow-up conversation takes hours your team does not
          have. Freedom HR Solutions helps payroll teams build reporting that works inside the
          systems they already use. We help structure payroll cost reports, reconcile data across
          systems, clean up underlying accuracy problems, and create outputs that give finance and
          leadership clear visibility without the manual assembly.
        </p>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Why payroll reporting takes more work than it should" />
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
          "reporting-data-insights",
          "payroll-benefits-hr-management",
          "system-audits-improvements",
          "technical-issue-resolution",
          "ongoing-technical-support",
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
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issues.",
          },
          {
            title: "Multi-State Employers",
            href: "/who-we-help/multi-state-employers/",
            description:
              "Payroll compliance, system configuration, and HR support across multiple states.",
          },
        ]}
      />

      {/* FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request Payroll Reporting Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema. BreadcrumbList via Breadcrumbs. FAQ schema via FaqSection. */}
      <SchemaScript schema={schema} />
    </>
  );
}
