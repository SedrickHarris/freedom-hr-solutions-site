// src/app/who-we-help/benefits-administrators/benefits-administration-support/page.tsx
// Audience-plus-service child page: Benefits Administrators x Benefits Administration Support
// Route: /who-we-help/benefits-administrators/benefits-administration-support/
// Service mapping: benefits-administration-support
// Hub mapping: payroll-benefits-hr-systems
// Audience mapping: benefits-administrators
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03, zero-volume rule applied
// Pipeline note: large export near-total consumer and outsourcing-company noise
//   filtered. Proceeds on topical completeness and audience-specific
//   differentiation from the open-enrollment-setup sibling page.

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
  title: "Benefits Administration Support for Benefits Administrators | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps benefits administrators manage eligibility data, mid-year plan changes, carrier reconciliation, and year-round benefits workflows so plans stay accurate and employees get consistent support.",
  path: "/who-we-help/benefits-administrators/benefits-administration-support/",
});

// Page data

// What ongoing benefits administration involves
// Four focus areas (FeatureGrid, 2 columns, card variant)
const adminAreas = [
  {
    title: "Eligibility maintenance and updates",
    description:
      "Employee eligibility records change throughout the year as new hires join, employees separate, dependents are added or removed, and employment classifications change. Keeping eligibility data accurate across HR and payroll systems requires consistent attention between enrollment periods.",
  },
  {
    title: "Mid-year plan changes and life events",
    description:
      "Marriage, birth, adoption, loss of coverage, and other qualifying events trigger mid-year enrollment changes that need to be processed accurately and on time. A backlog of unprocessed life events creates discrepancies between system records and actual employee coverage.",
  },
  {
    title: "Carrier data reconciliation",
    description:
      "Carrier billing statements, enrollment confirmations, and eligibility files need to reconcile with your HR and payroll system records. When they do not match, coverage gaps and billing errors follow. Regular reconciliation catches discrepancies before they affect employees.",
  },
  {
    title: "Benefits system and workflow support",
    description:
      "Benefits platform settings, deduction logic, and enrollment workflows need ongoing maintenance as plans change, employees move between states, and new hires go through onboarding. System issues that go unaddressed accumulate and become harder to correct over time.",
  },
];

// Situations that create ongoing benefits administration work (scenario list)
const scenarios = [
  "Eligibility records do not match across HR and payroll systems and the discrepancy has been building.",
  "A backlog of mid-year life event changes has accumulated and elections have not been updated.",
  "Carrier billing does not reconcile with enrollment data and the source of the discrepancy is unclear.",
  "New hire benefits enrollment is falling behind and coverage start dates are at risk.",
  "Benefits data needs to be cleaned up and verified before the next ACA filing period.",
  "A benefits platform change or update created configuration gaps that have not been resolved.",
];

// FAQs (6), AEO intent, benefits administrator audience, year-round focus
const faqs = [
  {
    question: "What does year-round benefits administration support include?",
    answer:
      "Year-round benefits administration support covers eligibility maintenance, mid-year plan change processing, carrier data reconciliation, new hire enrollment support, and ongoing benefits system maintenance. Freedom HR Solutions helps benefits administrators keep benefits data accurate and carrier records aligned throughout the plan year, not just during the enrollment window.",
  },
  {
    question: "How does Freedom HR Solutions help with mid-year benefits changes?",
    answer:
      "We help process qualifying life events and mid-year plan changes so employee elections are updated accurately and on time. When a backlog of unprocessed changes has built up, we work through the queue systematically to bring records current and verify that carrier files reflect the correct enrollment data.",
  },
  {
    question: "What benefits eligibility tasks need ongoing attention between enrollment periods?",
    answer:
      "Between enrollment periods, benefits administrators need to process new hire enrollments, handle termination and COBRA notifications, update eligibility for qualifying life events, verify dependent status, and reconcile eligibility records across HR and payroll systems. These tasks continue throughout the year and create data quality problems when they fall behind.",
  },
  {
    question: "How does Freedom HR Solutions help reconcile carrier data?",
    answer:
      "We help compare carrier billing statements and enrollment confirmations against your HR system and payroll records to identify discrepancies. When records do not match, we help identify the source of the mismatch and support the correction process so billing and coverage data align before the next billing cycle.",
  },
  {
    question: "Can Freedom HR Solutions help when benefits data has gotten out of sync across systems?",
    answer:
      "Yes. When eligibility records, deduction amounts, and carrier files have drifted out of alignment, we review each data source, identify where the discrepancies originated, and help bring records back into sync. We work inside your existing systems and alongside your team to correct the data without disrupting active employee coverage.",
  },
  {
    question: "How is benefits administration support different from open enrollment setup support?",
    answer:
      "Open enrollment setup focuses on preparing plan year configuration, testing, and employee communication before the enrollment window opens. Benefits administration support covers the year-round work that continues after enrollment closes: eligibility maintenance, mid-year changes, carrier reconciliation, and ongoing benefits system accuracy. Both are part of keeping benefits operations running correctly, but they address different phases of the plan year.",
  },
];

// Page component
export default function BenefitsAdministratorsAdminSupportPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Benefits Administrators > Benefits Administration Support */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Benefits Administrators", path: "/who-we-help/benefits-administrators/" },
          { name: "Benefits Administration Support", path: "/who-we-help/benefits-administrators/benefits-administration-support/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For benefits administrators"
        title="Benefits Administration Support for Benefits Administrators"
        description="Benefits administration does not stop when open enrollment closes. Eligibility changes, mid-year life events, carrier data discrepancies, and system maintenance continue through the plan year and create ongoing work that compounds when it falls behind. Freedom HR Solutions supports benefits administrators with the year-round tasks that keep benefits data accurate, carrier records aligned, and employee coverage running consistently."
        primaryCta={{ label: "Request Benefits Administration Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Why year-round benefits administration work matters */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Why it matters"
          title="Why benefits data accuracy requires attention throughout the plan year"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            Open enrollment is the most visible part of benefits administration,
            but most of the work happens outside the enrollment window. New hires
            need to be enrolled on time. Life events trigger mid-year changes that
            need to be processed accurately. Carrier records need to be reconciled
            against what the system shows. Benefits platform settings drift as
            plans change and employees move between states.
          </p>
          <p>
            When these tasks fall behind, the problems compound. Eligibility
            discrepancies accumulate. Carrier billing stops matching enrollment
            records. Employees discover coverage issues at the point of service.
            Freedom HR Solutions helps benefits administrators stay current on the
            ongoing work of{" "}
            <Link
              href="/services/benefits-administration-support/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              benefits administration
            </Link>{" "}
            so the plan year runs accurately from start to finish.
          </p>
        </div>
      </Section>

      {/* What ongoing benefits administration involves */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we support"
          title="What ongoing benefits administration involves"
          as="h2"
        />
        <div className="mt-10">
          <FeatureGrid items={adminAreas} columns={2} variant="card" />
        </div>
      </Section>

      {/* Situations that create ongoing benefits administration work */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations that bring benefits administrators to us"
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
            Year-round benefits administration support works alongside other
            benefits administrator services. Before the enrollment window opens,{" "}
            <Link
              href="/who-we-help/benefits-administrators/open-enrollment-setup/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              open enrollment setup support
            </Link>{" "}
            covers plan configuration, system testing, and employee communication
            preparation. When ACA filing season approaches,{" "}
            <Link
              href="/services/aca-reporting-consultant/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              ACA reporting support
            </Link>{" "}
            helps organize hours-tracking data and prepare 1094 and 1095 form
            information. If you are not sure where to start, the{" "}
            <Link
              href="/request-assessment/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              HR MRI Risk Assessment
            </Link>{" "}
            provides a structured review of your benefits and HR operations.
          </p>
        </div>
      </Section>

      {/* Related services RelatedPages block */}
      <RelatedPages
        eyebrow="Services"
        title="Related services for benefits administrators"
        items={[
          {
            title: "Benefits Administration Support",
            href: "/services/benefits-administration-support/",
            description:
              "Support configuring benefits, managing eligibility, and running smoother enrollment workflows throughout the plan year.",
          },
          {
            title: "Open Enrollment Setup",
            href: "/services/open-enrollment-setup/",
            description:
              "Plan configuration, system testing, and employee communication support so the enrollment window opens ready and closes accurately.",
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
              "Resolve benefits system errors, carrier file failures, and eligibility configuration problems that need a root-cause fix.",
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
          label: "Request Benefits Administration Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema for this intersection page */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "Benefits administration support for benefits administrators",
          description:
            "Freedom HR Solutions helps benefits administrators manage eligibility data, mid-year plan changes, carrier reconciliation, and year-round benefits workflows so plans stay accurate and employees get consistent support.",
          path: "/who-we-help/benefits-administrators/benefits-administration-support/",
        })}
      />
    </>
  );
}
