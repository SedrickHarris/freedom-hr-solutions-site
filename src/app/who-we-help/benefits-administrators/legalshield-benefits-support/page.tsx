// src/app/who-we-help/benefits-administrators/legalshield-benefits-support/page.tsx
// Audience-plus-partner intersection page: Benefits Administrators x LegalShield
// Route: /who-we-help/benefits-administrators/legalshield-benefits-support/
// Partner anchor: legalshield-benefits-support
// Audience anchor: benefits-administrators
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03; zero-volume rule applied.
// LegalShield-specific benefits-admin terms return near-zero volume per expected
// B2B HR niche and branded product pattern.
// Page justified on topical completeness, internal linking authority closing the
// LegalShield partner page loop, and AEO FAQ capture for role-specific admin queries.

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
  title: "LegalShield Benefits Administration Support for Benefits Administrators | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps benefits administrators set up, communicate, and administer LegalShield employee benefits. Support for open enrollment, payroll deduction setup, and ongoing benefits workflow. Nationwide.",
  path: "/who-we-help/benefits-administrators/legalshield-benefits-support/",
});

// Pain points: benefits-admin-specific LegalShield administration challenges
const painPoints = [
  {
    title: "Payroll deduction setup is inconsistent or error-prone",
    description:
      "LegalShield deductions need to be configured correctly in your payroll system from the start. When setup is inconsistent, deduction errors compound over time and require manual reconciliation that takes more effort than preventing the problem in the first place.",
  },
  {
    title: "Employees do not understand what LegalShield covers or how to use it",
    description:
      "Voluntary benefits only deliver value when employees understand them. Benefits administrators often bear the burden of fielding individual questions when employee communication about LegalShield is unclear or incomplete.",
  },
  {
    title: "Open enrollment adds LegalShield coordination to an already compressed window",
    description:
      "Configuring LegalShield enrollment options, preparing communications, and managing the workflow during open enrollment adds coordination load at the busiest point in the benefits calendar.",
  },
  {
    title: "Mid-year changes and deduction adjustments are hard to track",
    description:
      "Enrollment changes, terminations, and mid-year adjustments to LegalShield benefits require deduction updates that need to be tracked accurately. Without a reliable process, these adjustments can fall through the cracks.",
  },
];

// Scenarios
const scenarios = [
  "LegalShield is being added to your benefits package and setup coordination is falling on your team.",
  "Payroll deductions for LegalShield are producing errors or creating reconciliation issues.",
  "Open enrollment is approaching and LegalShield communication and enrollment workflows are not ready.",
  "Employees are asking questions about their LegalShield benefit and your team does not have bandwidth to answer individually.",
  "Mid-year enrollment changes are creating deduction adjustment issues that need to be resolved.",
  "You want to review how LegalShield fits into your broader voluntary benefits administration process.",
];

// How we help
const howWeHelp = [
  {
    title: "Benefits setup coordination",
    description:
      "We help coordinate the initial setup of LegalShield as an employee benefit, including how it fits into your existing benefits package, systems, and payroll deduction workflow.",
  },
  {
    title: "Payroll deduction review and support",
    description:
      "We review how LegalShield deductions are configured in your payroll system and help identify setup issues before they create recurring reconciliation problems.",
  },
  {
    title: "Open enrollment support",
    description:
      "We support open enrollment by helping configure LegalShield benefit options, preparing employee communication workflows, and coordinating the enrollment process alongside your other benefits.",
  },
  {
    title: "Ongoing administration and communication support",
    description:
      "We provide support for mid-year enrollment changes, deduction adjustments, and employee communication throughout the plan year so LegalShield administration does not fall behind.",
  },
];

// FAQs: 6 AEO-targeted questions
const faqs = [
  {
    question: "Is Freedom HR Solutions an official LegalShield partner?",
    answer:
      "We help businesses support and administer benefits workflows involving LegalShield, including setup coordination, payroll deduction configuration, and open enrollment support. We do not claim official partnership, certification, or endorsement from LegalShield. For LegalShield plan questions and product information, contact LegalShield directly.",
  },
  {
    question: "How does Freedom HR Solutions help benefits administrators with LegalShield setup?",
    answer:
      "We help coordinate the initial setup process, review how LegalShield fits into your existing benefits package, and support configuration of payroll deductions and enrollment workflows. We work alongside your existing HR and payroll systems to reduce friction in the setup process.",
  },
  {
    question: "Can Freedom HR Solutions help with LegalShield during open enrollment?",
    answer:
      "Yes. We support open enrollment by helping configure available benefit options, preparing employee communication workflows, and managing the enrollment process so employees can enroll accurately. Open enrollment windows are compressed, and having LegalShield coordination handled alongside your other benefits reduces the risk of errors and delays.",
  },
  {
    question: "What happens if LegalShield payroll deductions are set up incorrectly?",
    answer:
      "Incorrect payroll deduction setup can cause reconciliation issues, employee confusion, and deduction errors that need to be corrected retroactively. We help review how LegalShield deductions are configured in your payroll system and identify setup issues before they create recurring problems.",
  },
  {
    question: "Can Freedom HR Solutions help communicate LegalShield benefits to employees?",
    answer:
      "Yes. We help structure employee communication so staff understand what LegalShield covers, how to enroll, and how to activate the benefit. Clear communication reduces individual employee questions and improves benefit utilization without adding more to your team's workload.",
  },
  {
    question: "Can Freedom HR Solutions provide ongoing LegalShield administration support throughout the year?",
    answer:
      "Yes. Beyond open enrollment, we provide ongoing support for enrollment changes, deduction adjustments, and employee questions related to LegalShield throughout the plan year. Voluntary benefits often generate administration needs outside of the enrollment window, and we help your team manage those without falling behind on other benefits work.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "LegalShield benefits administration support for benefits administrators",
  description:
    "Freedom HR Solutions helps benefits administrators set up, communicate, and administer LegalShield employee benefits. Support for open enrollment, payroll deduction setup, and ongoing benefits workflow. Nationwide.",
  path: "/who-we-help/benefits-administrators/legalshield-benefits-support/",
});

// Page
export default function BenefitsAdministratorsLegalShieldPage() {
  return (
    <>
      {/* Breadcrumb: 4-level */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Benefits Administrators", path: "/who-we-help/benefits-administrators/" },
          {
            name: "LegalShield Benefits Support",
            path: "/who-we-help/benefits-administrators/legalshield-benefits-support/",
          },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For your role"
        title="LegalShield Benefits Administration Support for Benefits Administrators"
        description="Setup coordination, payroll deduction review, open enrollment support, and ongoing administration help so LegalShield runs accurately as part of your benefits program."
        primaryCta={{
          label: "Request Benefits Administration Support",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Intro + direct answer block */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Benefits administrators managing voluntary benefits programs know that adding a product
          like LegalShield creates an administration layer that has to work correctly across
          systems. Payroll deductions need to be configured accurately. Employees need clear
          communication so they understand what they are enrolling in. Open enrollment workflows
          have to be coordinated. And throughout the plan year, changes, adjustments, and employee
          questions need to be handled without disrupting the rest of your benefits workload.
          Freedom HR Solutions helps benefits administrators manage that administrative layer so
          LegalShield runs as a smooth part of your broader benefits program. We support benefits
          teams in Las Vegas, across Nevada, and nationwide.
        </p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            What does LegalShield benefits administration support for benefits administrators include?
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">
            Freedom HR Solutions helps benefits administrators coordinate the setup of LegalShield
            as an employee benefit, review payroll deduction configuration, support open enrollment
            workflows, and manage ongoing administration throughout the plan year. We work alongside
            your existing HR and payroll systems to help the benefit run accurately. We are not an
            official LegalShield partner and do not represent LegalShield directly.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenges"
          title="Where LegalShield administration creates problems for benefits administrators"
        />
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
        <SectionHeading
          eyebrow="How we help"
          title="LegalShield administration support for benefits teams"
        />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* Recommended services */}
      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services"
        description="The services benefits administrators use most often for voluntary benefits administration support."
        items={[
          {
            title: "Benefits Administration Support",
            href: "/services/benefits-administration-support/",
            description:
              "Support for benefits enrollment workflows, eligibility data, and administration processes throughout the plan year.",
          },
          {
            title: "Open Enrollment Setup",
            href: "/services/open-enrollment-setup/",
            description:
              "Help configuring enrollment periods, voluntary benefits options, and employee communication before the enrollment window opens.",
          },
          {
            title: "Payroll, Benefits, and HR Management",
            href: "/services/payroll-benefits-hr-management/",
            description:
              "Support configuring and managing payroll deductions and benefits workflows so they run accurately and consistently.",
          },
          {
            title: "Technical Issue Resolution",
            href: "/services/technical-issue-resolution/",
            description:
              "Diagnose and resolve benefits and payroll system issues, including deduction setup errors and reconciliation problems.",
          },
          {
            title: "Ongoing Technical Support",
            href: "/services/ongoing-technical-support/",
            description:
              "Year-round support for benefits administration workflows, enrollment changes, and system issues as they come up.",
          },
        ]}
        tone="muted"
      />

      {/* Partner page crosslink */}
      <RelatedPages
        eyebrow="Learn more"
        title="LegalShield partner support"
        items={[
          {
            title: "LegalShield Benefits Support",
            href: "/partners/legalshield-benefits-support/",
            description:
              "Learn more about how Freedom HR Solutions supports businesses administering LegalShield employee benefits.",
          },
          {
            title: "Benefits Administrators",
            href: "/who-we-help/benefits-administrators/",
            description:
              "Open enrollment support, eligibility management, ACA reporting, and benefits workflow consulting.",
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
          label: "Request Benefits Administration Support",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema */}
      <SchemaScript schema={schema} />
    </>
  );
}
