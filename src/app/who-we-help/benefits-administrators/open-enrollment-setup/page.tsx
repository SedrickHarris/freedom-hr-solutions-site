// src/app/who-we-help/benefits-administrators/open-enrollment-setup/page.tsx
// Audience-plus-service child page: Benefits Administrators x Open Enrollment Setup
// Route: /who-we-help/benefits-administrators/open-enrollment-setup/
// Service mapping: open-enrollment-setup
// Audience mapping: benefits-administrators
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03, zero-volume rule applied
// Pipeline note: consumer insurance noise dominated the largest export;
//   consumer and individual enrollment terms filtered. Employer-side signal from files 1-3.

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
  title: "Open Enrollment Setup Support for Benefits Administrators | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps benefits administrators configure plan years, verify eligibility data, prepare employee communication, and reconcile carrier records so open enrollment runs on time and without avoidable errors.",
  path: "/who-we-help/benefits-administrators/open-enrollment-setup/",
});

// Page data

// What benefits administrators need ready before open enrollment opens
// Four focus areas (FeatureGrid, 2 columns, card variant)
const enrollmentReadiness = [
  {
    title: "Plan year configuration",
    description:
      "Benefits plan options, eligibility rules, rates, and enrollment logic need to be set up in your HR or benefits system before the window opens. Configuration errors caught before employees start electing are far easier to correct than those discovered after.",
  },
  {
    title: "Eligibility data verification",
    description:
      "Employee eligibility records need to match across HR and payroll systems before files go to carriers. Discrepancies in dependent status, employment classification, or effective dates create downstream coverage and billing problems.",
  },
  {
    title: "Employee communication preparation",
    description:
      "Employees need clear, timely information about plan options, changes from the prior year, and enrollment deadlines. Communication that arrives late or is unclear drives last-minute questions that overwhelm a small team.",
  },
  {
    title: "System testing and QA",
    description:
      "Enrollment workflows, eligibility rules, and the employee-facing experience should be tested end to end before the window opens. Testing before launch is significantly less disruptive than correcting elections after the fact.",
  },
];

// Situations benefits administrators face (scenario list)
const scenarios = [
  "Open enrollment starts in three weeks and the new plan year is not fully configured in the system.",
  "Eligibility records do not match across HR and payroll platforms and need to be reconciled before files go to carriers.",
  "ACA hours-tracking data needs a careful review before the next filing period.",
  "Post-enrollment elections do not match payroll deductions and the discrepancy needs to be resolved before the first cycle.",
  "Employee questions are arriving faster than the team can respond and the deadline is approaching.",
  "A carrier file failed after enrollment closed and the data needs to be corrected and resubmitted.",
];

// FAQs (6), AEO intent, benefits administrator audience
const faqs = [
  {
    question: "What does open enrollment setup support for benefits administrators include?",
    answer:
      "Open enrollment setup support includes benefits plan configuration, eligibility rule setup, system testing, employee communication support, and post-enrollment reconciliation. Freedom HR Solutions works inside your existing HR or benefits system to prepare each stage of the enrollment process so the window opens on time and records are accurate after it closes.",
  },
  {
    question: "How early should benefits administrators start configuring the new plan year?",
    answer:
      "Most benefits administrators benefit from starting plan year configuration four to six weeks before the enrollment window opens. This provides enough time to complete configuration, run testing, identify and correct errors, and prepare employee communication without compressing everything into the final week before launch.",
  },
  {
    question: "What eligibility data needs to be verified before open enrollment opens?",
    answer:
      "Benefits administrators should verify that employee records match across HR and payroll systems, that dependent eligibility status is current and accurate, that employment classifications are correct, and that effective dates align with the new plan year. Carrier files built from inaccurate eligibility data create coverage and billing problems that are difficult to correct after enrollment closes.",
  },
  {
    question: "How does Freedom HR Solutions help with employee communication during open enrollment?",
    answer:
      "We help structure enrollment communication so employees receive clear, timely information about their plan options, changes from the prior year, and deadlines. Clear communication reduces last-minute questions and helps employees make informed decisions before the window closes. We work with your team to prepare communication materials rather than replacing your communication process.",
  },
  {
    question: "What should benefits administrators do after the open enrollment window closes?",
    answer:
      "After enrollment closes, elections should be reconciled against payroll deductions and carrier data to confirm records are accurate for the new plan year. Deduction amounts, dependent coverage elections, and carrier file submissions all need to match. Freedom HR Solutions helps with post-enrollment reconciliation so discrepancies are caught before they affect payroll or employee coverage.",
  },
  {
    question: "Can Freedom HR Solutions help reconcile carrier data after enrollment closes?",
    answer:
      "Yes. After the enrollment window closes, we help benefits administrators reconcile elections against payroll deductions and verify that carrier files reflect accurate enrollment data. When files fail or records do not match, we help identify the source of the discrepancy and support the correction process.",
  },
];

// Page component
export default function BenefitsAdministratorsOpenEnrollmentSetupPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Benefits Administrators > Open Enrollment Setup */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Benefits Administrators", path: "/who-we-help/benefits-administrators/" },
          { name: "Open Enrollment Setup", path: "/who-we-help/benefits-administrators/open-enrollment-setup/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For benefits administrators"
        title="Open Enrollment Setup Support for Benefits Administrators"
        description="Open enrollment is the most time-compressed period in a benefits administrator's year. Plan year configuration, eligibility verification, employee communication, and carrier reconciliation all have to happen in a short window with little margin for error. Freedom HR Solutions works alongside benefits administrators to prepare each stage of open enrollment so the window opens on time, configuration is tested before employees start making elections, and records reconcile accurately after it closes."
        primaryCta={{ label: "Request Open Enrollment Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Why benefits administrators need structured open enrollment preparation */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Why it matters"
          title="Why open enrollment preparation determines how the plan year starts"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            Benefits administrators often carry the full weight of open enrollment
            preparation while managing daily benefits operations at the same time.
            Configuration, testing, employee communication, and carrier deadlines
            compress into a period where there is no room for delays or errors. When
            any one stage falls behind, the rest of the window narrows.
          </p>
          <p>
            Freedom HR Solutions works alongside benefits administrators to take
            structured ownership of{" "}
            <Link
              href="/services/open-enrollment-setup/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              open enrollment setup and configuration
            </Link>{" "}
            so the process is ready before the window opens. We work inside your
            existing systems, coordinate with your team, and help identify issues
            before they affect employee elections or carrier records.
          </p>
        </div>
      </Section>

      {/* What benefits administrators need ready before open enrollment opens */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we prepare"
          title="What needs to be ready before the enrollment window opens"
          as="h2"
        />
        <div className="mt-10">
          <FeatureGrid items={enrollmentReadiness} columns={2} variant="card" />
        </div>
      </Section>

      {/* Situations we help with */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations benefits administrators bring to us"
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

      {/* Related support inline link block */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Related support"
          title="Other support for benefits administrators"
          as="h2"
        />
        <div className="mt-6 space-y-3 text-body leading-relaxed">
          <p>
            Open enrollment setup is one part of supporting benefits administration
            through the plan year. Benefits administrators often need additional help
            with{" "}
            <Link
              href="/services/payroll-benefits-hr-management/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              payroll and benefits management
            </Link>
            ,{" "}
            <Link
              href="/services/aca-reporting-consultant/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              ACA reporting preparation
            </Link>
            , and{" "}
            <Link
              href="/who-we-help/hr-teams/open-enrollment-support/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              open enrollment support for HR teams
            </Link>
            . If you are not sure where to start, the{" "}
            <Link
              href="/request-assessment/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              HR MRI Risk Assessment
            </Link>{" "}
            provides a structured review of your benefits and HR operations and is
            a good first step.
          </p>
        </div>
      </Section>

      {/* Related services RelatedPages block */}
      <RelatedPages
        eyebrow="Services"
        title="Related services for benefits administrators"
        items={[
          {
            title: "Open Enrollment Setup",
            href: "/services/open-enrollment-setup/",
            description:
              "Plan configuration, system testing, employee communication support, and post-enrollment reconciliation so open enrollment runs on time and without avoidable errors.",
          },
          {
            title: "Payroll, Benefits, and HR Management",
            href: "/services/payroll-benefits-hr-management/",
            description:
              "Support configuring and managing payroll and benefits systems so they work accurately and consistently throughout the plan year.",
          },
          {
            title: "ACA Reporting Consultant",
            href: "/services/aca-reporting-consultant/",
            description:
              "Support reviewing ACA reporting responsibilities, organizing workforce data, and preparing 1094 and 1095 filing information.",
          },
          {
            title: "Technical Issue Resolution",
            href: "/services/technical-issue-resolution/",
            description:
              "Resolve benefits system errors, carrier file failures, and enrollment configuration problems that need a root-cause fix.",
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
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issues.",
          },
          {
            title: "Multi-State Employers",
            href: "/who-we-help/multi-state-employers/",
            description:
              "HR compliance, ACA reporting, and payroll support across multiple states and jurisdictions.",
          },
        ]}
      />

      {/* FAQs: FaqSection emits FAQ schema. No second FAQ schema node on this page. */}
      <FaqSection faqs={faqs} />

      {/* CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request Open Enrollment Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema for this intersection page */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "Open enrollment setup support for benefits administrators",
          description:
            "Freedom HR Solutions helps benefits administrators configure plan years, verify eligibility data, prepare employee communication, and reconcile carrier records so open enrollment runs on time and without avoidable errors.",
          path: "/who-we-help/benefits-administrators/open-enrollment-setup/",
        })}
      />
    </>
  );
}
