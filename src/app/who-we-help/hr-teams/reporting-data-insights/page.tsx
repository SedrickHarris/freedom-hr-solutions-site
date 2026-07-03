// src/app/who-we-help/hr-teams/reporting-data-insights/page.tsx
// Audience-plus-service intersection page: HR Teams x Reporting and Data Insights
// Route: /who-we-help/hr-teams/reporting-data-insights/
// Service anchor: reporting-data-insights
// AI Depth: Level 3 Standard

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
import { serviceRefs, audienceRefs } from "@/lib/links";
import { professionalServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/who-we-help/hr-teams/reporting-data-insights/";

// --- Metadata ---

export const metadata: Metadata = buildMetadata({
  title: "HR Reporting and Data Insights for HR Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps HR teams build workforce reports, HR dashboards, and data insights their leadership can act on. KPI tracking, headcount reporting, data cleanup, and custom report builds. Las Vegas and nationwide.",
  path: PATH,
});

// --- Page data ---

// Section 1: Pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Reports require manual data assembly every time",
    description:
      "Pulling headcount, turnover, or benefits data means exporting from multiple systems and reconciling in a spreadsheet. There is no report that just runs.",
  },
  {
    title: "Data inconsistency across HR and payroll systems",
    description:
      "Employee records in the HRIS do not match what is in payroll. Benefits enrollment data does not align with headcount. The numbers conflict before a report is even built.",
  },
  {
    title: "Leadership asks questions the current setup cannot answer",
    description:
      "When an executive asks for turnover by department or cost per hire by quarter, the HR team cannot produce the answer without hours of manual work.",
  },
  {
    title: "No defined HR KPIs or tracking structure",
    description:
      "Metrics that matter to leadership, headcount trends, time-to-fill, turnover rate, are tracked inconsistently or not at all because there is no structured reporting framework.",
  },
  {
    title: "Reports that leadership does not trust",
    description:
      "When data has been manually pulled and reconciled, discrepancies are common. Once leadership stops trusting the numbers, the reports stop getting used.",
  },
  {
    title: "No one owns the reporting function",
    description:
      "Reporting falls to whoever has time, which means it is inconsistent, late, and built differently each time someone different runs it.",
  },
];

// Section 2: How we help (FeatureGrid, 2 columns, card variant)
const howWeHelp = [
  {
    title: "Report Configuration and Custom Builds",
    description:
      "We configure reports inside your existing HRIS and payroll systems and build custom reports tailored to the workforce questions your leadership asks most.",
  },
  {
    title: "HR KPI Framework",
    description:
      "We help HR teams define the metrics that matter, headcount, turnover, time-to-fill, cost per hire, benefits participation, and build tracking structures so those metrics are consistent and reliable.",
  },
  {
    title: "Dashboard Builds for Leadership",
    description:
      "We build dashboards that give HR and business leaders ongoing visibility into workforce data without requiring manual assembly each time a question comes in.",
  },
  {
    title: "Data Cleanup and Accuracy",
    description:
      "We audit the underlying data in your systems, identify inconsistencies between HR and payroll records, and clean up the fields your reports depend on so the numbers are trustworthy before they reach leadership.",
  },
  {
    title: "Headcount and Turnover Reporting",
    description:
      "We build headcount and turnover reports that run on a defined schedule so your team is not manually assembling the same data each time a leadership meeting approaches.",
  },
  {
    title: "Benefits and Compliance Reporting",
    description:
      "We bring benefits enrollment, utilization, and coverage data into structured reports so HR has visibility into plan participation and can respond quickly when compliance questions arise.",
  },
];

// Section 3: Scenarios
const scenarios = [
  "Leadership asks for a workforce summary and your team spends a day pulling it together manually.",
  "Your HRIS can produce reports but no one on the team knows how to configure them correctly.",
  "Headcount data in HR does not match what payroll has, and no one can explain the gap.",
  "You need to track HR KPIs but there is no consistent framework for which ones to measure or how.",
  "Benefits utilization data exists somewhere in your system but no one can get it into a usable format.",
  "An audit or compliance review is coming and you need clean, organized workforce data.",
];

// Section 4: FAQs (FAQ schema emitted via FaqSection; no second schema node)
const pageFaqs = [
  {
    question: "How does Freedom HR Solutions help HR teams with reporting?",
    answer:
      "We work inside your existing HRIS and payroll systems to configure reports, build custom outputs for leadership, clean up the underlying data, and create dashboards that give your team and your leadership ongoing workforce visibility without manual assembly.",
  },
  {
    question: "What HR reports should an HR team track regularly?",
    answer:
      "Core HR reports include headcount by department, turnover rate by period, time-to-fill by role, cost per hire, benefits enrollment and utilization, and payroll cost as a percentage of revenue. The right set depends on what your leadership asks for and what decisions those reports need to support.",
  },
  {
    question: "What is the difference between HR reporting and HR analytics?",
    answer:
      "HR reporting produces structured summaries of current or historical workforce data, such as headcount, turnover, or benefits enrollment counts. HR analytics involves identifying trends, patterns, and predictive signals in that data. Most HR teams need better reporting before analytics is meaningful. We start with getting the reports right.",
  },
  {
    question: "How do you improve HR data accuracy across systems?",
    answer:
      "We audit employee records across your HRIS and payroll platforms, identify where data conflicts or is missing, clean up the fields your reports depend on, and document the source-of-truth rules so data stays consistent as your workforce changes.",
  },
  {
    question: "Can Freedom HR Solutions build HR dashboards for leadership?",
    answer:
      "Yes. We build dashboards that surface the workforce metrics your leaders ask about most, configured inside the systems you already use. The goal is a view leadership can access without an HR team member manually assembling data before every meeting.",
  },
  {
    question: "Do we need new software to improve HR reporting?",
    answer:
      "Not necessarily. Many reporting improvements come from better configuration and data cleanup inside the systems you already have. We evaluate your current setup before recommending any new tools, and most engagements do not require a platform change.",
  },
];

// --- Page component ---

export default function HrTeamsReportingDataInsightsPage() {
  return (
    <>
      {/* Breadcrumbs: 4 levels */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "HR Teams", path: "/who-we-help/hr-teams/" },
          { name: "Reporting and Data Insights", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For HR teams"
        title="HR Reporting and Data Insights for HR Teams"
        description="HR teams spend hours pulling data that leadership still questions. We help you build the reports, dashboards, and data structures that give leaders clear visibility and your team time back."
        primaryCta={{ label: "Request Reporting Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Direct answer block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          HR teams are often the last to get useful data about their own workforce. Reporting
          that should take minutes takes hours because data lives in multiple systems, fields
          are inconsistent, and nothing pulls cleanly into a format leadership can read. When
          a question comes in about headcount, turnover, or benefits costs, someone on the HR
          team manually assembles the answer in a spreadsheet.
        </p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            How does Freedom HR Solutions help HR teams with reporting and data insights?
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">
            Freedom HR Solutions works inside your existing HR and payroll systems to build
            reports and dashboards HR teams can actually use. We help define the metrics that
            matter, clean up the underlying data, build custom reports for leadership, and
            improve the visibility your team has into headcount, turnover, benefits, and
            workforce trends, without requiring new software.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenges"
          title="Why HR Reporting Falls Short for HR Teams"
        />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* Scenarios */}
      <Section>
        <SectionHeading eyebrow="Sound familiar?" title="Situations We Help With" />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {scenarios.map((scenario) => (
            <li
              key={scenario}
              className="flex items-start gap-3 rounded-card border border-border bg-white p-4 shadow-sm"
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
        <SectionHeading
          eyebrow="How we help"
          title="HR Reporting and Data Insights Support for HR Teams"
        />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* Related services */}
      <RelatedPages
        eyebrow="Related services"
        title="Services That Support HR Reporting and Data Insights"
        description="The services HR teams use most often alongside reporting and data work."
        items={serviceRefs([
          "reporting-data-insights",
          "system-audits-improvements",
          "hr-technology-automation",
          "ongoing-technical-support",
          "payroll-benefits-hr-management",
        ])}
        tone="muted"
      />

      {/* Related audiences */}
      <RelatedPages
        eyebrow="Also relevant for"
        title="Related Audiences"
        items={audienceRefs([
          "hr-teams",
          "payroll-teams",
          "growing-businesses",
        ])}
      />

      {/* FAQs: FAQ schema emitted via FaqSection. Do not add a second schema node. */}
      <FaqSection faqs={pageFaqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request Reporting Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema. BreadcrumbList emitted by Breadcrumbs. FAQ schema emitted by FaqSection. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "HR reporting and data insights for HR teams",
          description:
            "Freedom HR Solutions helps HR teams build workforce reports, HR dashboards, and data insights their leadership can act on. KPI tracking, headcount reporting, data cleanup, and custom report builds.",
          path: PATH,
        })}
      />
    </>
  );
}
