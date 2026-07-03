// src/app/who-we-help/payroll-teams/payroll-system-support/page.tsx
// Audience-plus-service child page: Payroll Teams x Payroll System Support
// Route: /who-we-help/payroll-teams/payroll-system-support/
// Service mapping: payroll-benefits-hr-management
// Audience mapping: payroll-teams
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03 (4 batches read in full)
// Pipeline notes: confirmed volume on ADP Run, isolved, BambooHR platform support cluster;
// local signal confirmed on payroll consultant near me;
// zero-volume rule applied to payroll-team-specific framing terms;
// noise discarded: forensic, SALT, certified payroll (Davis-Bacon), associate (job seeker),
// named vendor support pages (Paychex, Ease, Ceridian), named enterprise intranet queries

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
import { serviceRefs } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "Payroll System Support for Payroll Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions provides payroll system support for payroll teams managing configuration issues, recurring errors, and workflow problems across ADP, isolved, BambooHR, and other payroll platforms. Las Vegas and nationwide.",
  path: "/who-we-help/payroll-teams/payroll-system-support/",
});

// Page data

// Section 2: pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Recurring errors without a clear root cause",
    description:
      "The same payroll errors come back after correction because the underlying configuration or data problem was never identified and fixed at the source.",
  },
  {
    title: "System changes that break existing workflows",
    description:
      "A platform update, a new pay code, or a benefits change introduces problems in payroll processing that were not anticipated and take time to trace.",
  },
  {
    title: "No internal escalation path",
    description:
      "When a payroll system issue goes beyond what the team can troubleshoot, there is nowhere to escalate except the vendor queue, which does not cover configuration and workflow problems.",
  },
  {
    title: "Configuration that no longer matches the business",
    description:
      "Payroll settings configured at implementation have not kept pace with changes to pay structures, deductions, benefits, or headcount, and the gaps are producing errors.",
  },
];

// Section 3: what payroll system support covers (FeatureGrid, 2 columns, card variant)
const supportCovers = [
  {
    title: "Payroll configuration review and correction",
    description:
      "Review payroll system settings, pay rules, deduction codes, and tax configurations across ADP, isolved, BambooHR, and other platforms to find gaps and correct them before they continue producing errors.",
  },
  {
    title: "Recurring error diagnosis and resolution",
    description:
      "Trace payroll errors to their root cause in the system configuration or data and apply a correction that addresses the source, not just the symptom.",
  },
  {
    title: "Workflow and process improvement",
    description:
      "Review payroll processing workflows to find manual steps, handoff gaps, and bottlenecks that slow each cycle and create avoidable errors.",
  },
  {
    title: "Platform-agnostic support",
    description:
      "Support delivered across the payroll platforms your team already uses, including ADP, ADP Run, isolved, BambooHR, HiBob, and others. You do not need to change platforms to work with us.",
  },
];

// Section 4: scenarios
const scenarios = [
  "A payroll error keeps coming back each cycle and your team has corrected it twice without it staying fixed.",
  "A recent system update changed how a pay code or deduction calculates and payroll is now off.",
  "You are running payroll across multiple states and configuration inconsistencies are creating discrepancies.",
  "Your team spends more time manually reviewing and correcting payroll output than it should, and no one has time to find the source.",
];

// FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node anywhere on this page.
const faqs = [
  {
    question: "What does payroll system support include?",
    answer:
      "Payroll system support includes reviewing payroll configurations to find gaps, diagnosing recurring errors at their root cause, improving payroll processing workflows, and providing a reliable resource for system questions. Support focuses on the payroll system and the processes around it, not just the vendor's standard technical queue.",
  },
  {
    question: "Can Freedom HR Solutions support ADP, isolved, or BambooHR for our payroll team?",
    answer:
      "Yes. We provide payroll system support across ADP, ADP Run, isolved, BambooHR, HiBob, and other platforms your team currently uses. You do not need to change platforms to work with us, and we are not affiliated with or endorsed by any of these platforms.",
  },
  {
    question: "How is payroll system support different from contacting the payroll software vendor?",
    answer:
      "Payroll software vendors handle bugs and product issues within their platform. Payroll system support covers configuration problems, pay code setup, deduction logic, workflow gaps, and data accuracy issues that are specific to how your organization uses the system. Vendors typically do not troubleshoot these on your behalf.",
  },
  {
    question: "Can Freedom HR Solutions help fix a payroll error that keeps recurring?",
    answer:
      "Yes. Recurring payroll errors are almost always a configuration or data pattern problem at the system level. We trace the error to its source, correct the underlying setting or data issue, and validate the fix so the error does not return in the next cycle.",
  },
  {
    question: "Can payroll system support help with multi-state payroll issues?",
    answer:
      "Yes. Multi-state payroll creates configuration complexity across tax registrations, deduction rules, and pay code settings. We help review and correct configurations across states so payroll processes consistently regardless of where employees are located. For more detail, see our page on multi-state payroll support for payroll teams.",
  },
  {
    question: "Does Freedom HR Solutions provide payroll system support in Las Vegas?",
    answer:
      "Yes. Freedom HR Solutions is headquartered in Las Vegas, Nevada and supports payroll teams both locally and nationwide. Remote support is available for teams outside the Las Vegas area.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "Payroll System Support for Payroll Teams",
  description:
    "Freedom HR Solutions provides payroll system support for payroll teams managing configuration issues, recurring errors, and workflow problems across ADP, isolved, BambooHR, and other payroll platforms. Las Vegas and nationwide.",
  path: "/who-we-help/payroll-teams/payroll-system-support/",
});

export default function PayrollTeamsPayrollSystemSupportPage() {
  return (
    <>
      {/* CHANGE: Breadcrumbs for Payroll Teams > Payroll System Support child page */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Payroll Teams", path: "/who-we-help/payroll-teams/" },
          { name: "Payroll System Support", path: "/who-we-help/payroll-teams/payroll-system-support/" },
        ]}
      />

      {/* CHANGE: Hero - Payroll Teams x Payroll System Support intersection */}
      <Hero
        eyebrow="For your role"
        title="Payroll System Support for Payroll Teams"
        description="A reliable external resource for payroll teams managing configuration issues, recurring errors, and workflow problems across ADP, isolved, BambooHR, and other payroll platforms."
        primaryCta={{ label: "Request Payroll System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* CHANGE: Intro paragraph - direct answer block for AEO, platform names prominent for confirmed-volume terms */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Freedom HR Solutions provides payroll system support for internal payroll teams managing
          configuration issues, recurring errors, and workflow problems across HR, payroll, and
          benefits platforms. We work with teams using{" "}
          <Link
            href="/partners/adp-consulting-support/"
            className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            ADP
          </Link>
          ,{" "}
          <Link
            href="/partners/isolved-consulting-support/"
            className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            isolved
          </Link>
          ,{" "}
          <Link
            href="/partners/bamboohr-consulting-support/"
            className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            BambooHR
          </Link>
          , HiBob, and other platforms your team already uses. Support covers payroll configuration
          review and correction, root-cause error diagnosis, workflow improvement, and ongoing
          platform support through our{" "}
          <Link
            href="/services/payroll-benefits-hr-management/"
            className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            payroll, benefits, and HR management
          </Link>{" "}
          service.
        </p>
      </Section>

      {/* CHANGE: Pain points section - four challenges payroll teams face */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="What payroll teams run into" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: What support covers - four capability areas with platform names */}
      <Section>
        <SectionHeading eyebrow="What we provide" title="What payroll system support covers" />
        <div className="mt-10">
          <FeatureGrid items={supportCovers} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Scenarios section */}
      <Section tone="muted">
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

      {/* CHANGE: Related services - payroll and HR management cluster */}
      <RelatedPages
        eyebrow="Where to start"
        title="Related services"
        description="The services most relevant to your situation."
        items={serviceRefs([
          "payroll-benefits-hr-management",
          "technical-issue-resolution",
          "system-audits-improvements",
          "reporting-data-insights",
        ])}
        tone="muted"
      />

      {/* CHANGE: Related audiences - payroll teams cluster */}
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

      {/* CHANGE: 6 FAQs, payroll system support AEO intent including platform and local signals.
          FaqSection emits FAQ schema. Do not add a second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CHANGE: Page-specific CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request Payroll System Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* CHANGE: ProfessionalService schema for this intersection page */}
      <SchemaScript schema={schema} />
    </>
  );
}
