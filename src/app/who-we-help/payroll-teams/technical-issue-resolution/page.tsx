// src/app/who-we-help/payroll-teams/technical-issue-resolution/page.tsx
// Audience-plus-service child page: Payroll Teams x Technical Issue Resolution
// Route: /who-we-help/payroll-teams/technical-issue-resolution/
// Service mapping: technical-issue-resolution
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

const PATH = "/who-we-help/payroll-teams/technical-issue-resolution/";

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "Payroll System Troubleshooting and Technical Issue Resolution | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps payroll teams diagnose recurring errors, resolve configuration issues, and fix payroll system problems at the source. Serving businesses in Las Vegas, Nevada, and nationwide.",
  path: PATH,
});

// Page data

// Section: pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Errors that come back every cycle",
    description:
      "The same payroll mistakes repeat because the configuration issue was never corrected at the source. Each cycle means another round of manual fixes.",
  },
  {
    title: "Deductions that do not calculate correctly",
    description:
      "Pay calculation errors, benefit deductions that do not match elections, and garnishment setup issues create downstream corrections and employee concerns.",
  },
  {
    title: "Data sync failures between systems",
    description:
      "When HR and payroll systems do not communicate correctly, records drift apart and reconciliation becomes a recurring manual task.",
  },
  {
    title: "System updates that break workflows",
    description:
      "Vendor updates change settings without notice. What worked last month stops working, and no one knows which update caused it.",
  },
];

// Section: scenarios
const scenarios = [
  "A payroll deduction keeps calculating incorrectly and the same correction has to be made every cycle.",
  "A vendor update changed a setting and now a workflow that worked before has stopped working.",
  "Payroll and HR records do not match and manual reconciliation is eating time every pay period.",
  "A data sync between systems keeps failing and no one knows where the break is.",
  "Your team suspects a configuration error is the root cause but does not have time to dig in.",
  "An employee's pay has been incorrect for multiple cycles and the fix has not held.",
];

// FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node anywhere on this page.
const faqs = [
  {
    question: "What does payroll technical issue resolution include?",
    answer:
      "It includes diagnosing the root cause of recurring or urgent payroll errors, correcting the underlying configuration or data problem inside your existing system, validating that the fix works, and documenting the resolution so your team has a record. Freedom HR Solutions provides this support for HR, payroll, and benefits systems.",
  },
  {
    question: "Why do the same payroll errors keep coming back?",
    answer:
      "Recurring payroll errors almost always trace back to a configuration issue that was never corrected at the source. When only the output is fixed, not the setup that produced the error, the problem returns the next cycle. Root-cause diagnosis identifies where the configuration went wrong and corrects it directly.",
  },
  {
    question: "Can Freedom HR Solutions help if a payroll deduction is not calculating correctly?",
    answer:
      "Yes. We help identify why a deduction is calculating incorrectly, whether the cause is pay code setup, benefit plan configuration, or a data problem, correct it inside your system, and confirm the calculation is right before the engagement closes.",
  },
  {
    question: "Can Freedom HR Solutions help if a vendor update broke a payroll workflow?",
    answer:
      "Yes. Vendor updates sometimes change system settings without clear notice. We help identify which setting changed, what it affected, and how to restore or reconfigure the workflow so it operates correctly again.",
  },
  {
    question: "What is the difference between technical issue resolution and ongoing technical support?",
    answer:
      "Technical issue resolution is focused on diagnosing and correcting a specific urgent or recurring problem. Ongoing technical support is a continuing relationship that covers routine maintenance, monitoring, and improvements over time. Both are available, and many payroll teams use issue resolution to address an immediate problem and then transition to ongoing support.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "Payroll System Troubleshooting and Technical Issue Resolution for Payroll Teams",
  description:
    "Freedom HR Solutions helps payroll teams diagnose recurring errors, resolve configuration issues, and fix payroll system problems at the source. Serving businesses in Las Vegas, Nevada, and nationwide.",
  path: PATH,
});

export default function PayrollTeamsTechnicalIssueResolutionPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Payroll Teams > Technical Issue Resolution */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Payroll Teams", path: "/who-we-help/payroll-teams/" },
          { name: "Technical Issue Resolution", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For payroll teams"
        title="Payroll System Troubleshooting and Technical Issue Resolution for Payroll Teams"
        description="When the same payroll errors keep coming back, the problem is almost always in the configuration. We help payroll teams diagnose the root cause, correct it at the source, and document the fix so it stays resolved."
        primaryCta={{ label: "Request Technical Support Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Intro paragraph (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Payroll errors are not just frustrating, they compound. A deduction that calculates
          incorrectly this cycle will calculate incorrectly next cycle unless the underlying
          configuration is corrected. Freedom HR Solutions works alongside payroll teams to
          diagnose the root cause of recurring errors, resolve configuration issues inside your
          existing system, and validate that the fix holds before the engagement closes. Whether
          the problem is a calculation that never adds up, a data sync that keeps breaking, or a
          setting a vendor update changed without notice, we help your team get to the bottom of it
          and stay there.
        </p>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Why payroll errors keep coming back" />
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
          "technical-issue-resolution",
          "ongoing-technical-support",
          "system-audits-improvements",
          "payroll-benefits-hr-management",
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
        primaryCta={{ label: "Request Technical Support Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema. BreadcrumbList via Breadcrumbs. FAQ schema via FaqSection. */}
      <SchemaScript schema={schema} />
    </>
  );
}
