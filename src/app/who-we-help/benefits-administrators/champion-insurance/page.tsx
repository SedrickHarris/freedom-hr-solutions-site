// src/app/who-we-help/benefits-administrators/champion-insurance/page.tsx
// Audience-plus-partner intersection page: Benefits Administrators x Champion Insurance
// Route: /who-we-help/benefits-administrators/champion-insurance/
// Partner anchor: champion-insurance
// Audience anchor: benefits-administrators
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03.
// Volume-confirmed signals: medicare coordination with employer plan (score 4),
// medicare coordination of benefits with employer plan (score 3).
// Primary keyword: medicare coordination with employer plan.
// Page angle: benefits administrators fielding employee Medicare transition
// questions, Champion Insurance as the licensed referral resource.
// IMPORTANT: Freedom HR Solutions does not provide Medicare advice or
// enrollment support. This page explains the referral relationship only.

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
  title: "Medicare Transition Support for Benefits Administrators | Champion Insurance | Freedom HR Solutions",
  description:
    "When employees approach Medicare eligibility, benefits administrators face coordination questions that go beyond HR. Freedom HR Solutions works alongside Champion Insurance to connect employees with licensed Medicare guidance. Las Vegas and nationwide.",
  path: "/who-we-help/benefits-administrators/champion-insurance/",
});

// Pain points: what benefits administrators face when employees approach Medicare
const painPoints = [
  {
    title: "Employees ask Medicare questions HR is not licensed to answer",
    description:
      "When employees approach age 65, they ask about Medicare plan options, enrollment timelines, and how their coverage will change. These questions require licensed Medicare guidance that benefits administrators and HR teams are not positioned to provide.",
  },
  {
    title: "Medicare and employer group health plan coordination creates confusion",
    description:
      "Understanding whether Medicare is primary or secondary, when employees should take Medicare Part B, and how employer coverage interacts with Medicare depends on factors that vary by employer size and employee status. Benefits administrators who try to answer these questions without licensed support create risk for themselves and their employees.",
  },
  {
    title: "COBRA-to-Medicare transition timing is easy to get wrong",
    description:
      "Employees who miss Medicare enrollment windows while on COBRA can face coverage gaps and late enrollment penalties that are difficult to reverse. Benefits administrators need a reliable referral resource to direct employees to before these mistakes happen.",
  },
  {
    title: "Benefits administrators need a trusted referral resource, not more Medicare responsibility",
    description:
      "The right answer is not for HR to learn Medicare, it is to have a licensed Medicare resource to refer employees to. Without that referral in place, employee Medicare questions fall back on HR teams that are not equipped or licensed to handle them.",
  },
];

// Scenarios
const scenarios = [
  "An employee is turning 65 and asking whether to stay on the group health plan or move to Medicare.",
  "Your HR team is fielding Medicare coordination questions during open enrollment that fall outside your scope.",
  "An employee is leaving and needs guidance on transitioning from COBRA to Medicare without a coverage gap.",
  "You need a licensed Medicare resource to refer employees to without taking on Medicare advisory responsibility.",
  "Employees approaching retirement are asking about Medicare Advantage versus Original Medicare options.",
  "You want to have a referral process in place before Medicare questions surface during open enrollment.",
];

// How the partnership works
const partnershipCards = [
  {
    title: "What Champion Insurance provides",
    description:
      "Ron Filice at Champion Insurance Agency Inc, DBA Insurance Champion Services, Medicare Division, provides licensed independent Medicare guidance. He helps individuals approaching 65 compare plan options, understand enrollment timelines, and avoid costly mistakes during the transition to Medicare.",
  },
  {
    title: "What Freedom HR Solutions provides",
    description:
      "Freedom HR Solutions provides HR, payroll, benefits, and compliance support for employers. We handle open enrollment setup, benefits administration workflows, and ongoing HR system support. Individual Medicare guidance falls outside this scope.",
  },
  {
    title: "When a referral makes sense",
    description:
      "When employees are approaching Medicare eligibility, asking questions about how Medicare coordinates with employer coverage, or navigating a COBRA-to-Medicare transition, Freedom HR Solutions may refer them to Champion Insurance for individual licensed guidance.",
  },
  {
    title: "How both firms work together",
    description:
      "Freedom HR Solutions and Champion Insurance are independent firms that collaborate on behalf of shared clients. We do not share fees or commissions, and we do not require clients to engage Champion Insurance. The referral relationship exists to fill a gap that HR consulting alone cannot cover.",
  },
];

// FAQs: 6 AEO-targeted questions
const faqs = [
  {
    question: "What do benefits administrators need to know when employees approach Medicare eligibility?",
    answer:
      "When employees approach age 65, benefits administrators typically need to understand how Medicare interacts with the employer group health plan, whether the employee should take Medicare Part B or stay on employer coverage, and what COBRA-to-Medicare transition timelines look like. These questions require licensed Medicare guidance that HR teams are not positioned to provide. Freedom HR Solutions refers clients to Champion Insurance for this scope of support.",
  },
  {
    question: "What is Medicare coordination of benefits with an employer plan?",
    answer:
      "Medicare coordination of benefits refers to the rules that determine which coverage pays first when an employee is enrolled in both Medicare and an employer group health plan. Whether Medicare is primary or secondary depends on factors including employer size and the employee's work status. Benefits administrators fielding these questions should refer employees to a licensed Medicare agent rather than providing guidance themselves.",
  },
  {
    question: "What are Medicare secondary payer rules and why do they matter to employers?",
    answer:
      "Medicare secondary payer rules determine when Medicare pays second to another insurer, including employer group health plans. Employers with 20 or more employees generally must make group health plan coverage available to Medicare-eligible active employees on the same terms as other employees. Benefits administrators who need to communicate these rules clearly to employees should involve licensed Medicare guidance rather than relying on HR to interpret them.",
  },
  {
    question: "How does Freedom HR Solutions help when an employee is transitioning from COBRA to Medicare?",
    answer:
      "Freedom HR Solutions provides HR, payroll, and benefits administration support for employers. COBRA-to-Medicare transition guidance for individual employees is outside that scope. When this situation comes up, we refer clients to Champion Insurance, where Ron Filice provides licensed Medicare guidance to help employees navigate the transition without coverage gaps or late enrollment penalties.",
  },
  {
    question: "Who is Champion Insurance and what do they help with?",
    answer:
      "Champion Insurance Agency Inc, DBA Insurance Champion Services, Medicare Division, is led by Ron Filice, a licensed independent Medicare agent. Champion Insurance helps individuals approaching age 65 compare Medicare plan options, understand enrollment timelines, avoid coverage gaps and late enrollment penalties, and navigate the coordination between Medicare and employer coverage. Freedom HR Solutions and Champion Insurance are independent firms that collaborate on behalf of shared clients.",
  },
  {
    question: "Does Freedom HR Solutions provide Medicare advice or enrollment support?",
    answer:
      "No. Freedom HR Solutions provides HR, payroll, benefits, and compliance support for employers. Individual Medicare guidance, plan comparison, and enrollment support are within Champion Insurance's scope. When Freedom HR Solutions clients have employees who need Medicare guidance, we refer them to Champion Insurance. We do not provide Medicare advice, recommend specific plans, or act as a licensed insurance resource.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "Medicare transition support for benefits administrators",
  description:
    "When employees approach Medicare eligibility, benefits administrators face coordination questions that go beyond HR. Freedom HR Solutions works alongside Champion Insurance to connect employees with licensed Medicare guidance.",
  path: "/who-we-help/benefits-administrators/champion-insurance/",
});

// Page
export default function BenefitsAdministratorsChampionInsurancePage() {
  return (
    <>
      {/* Breadcrumb: 4-level */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Benefits Administrators", path: "/who-we-help/benefits-administrators/" },
          {
            name: "Medicare Transition Support",
            path: "/who-we-help/benefits-administrators/champion-insurance/",
          },
        ]}
      />

      {/* Hero: primary CTA is Schedule Consultation, not Request Assessment.
          FHS does not provide Medicare services; this page explains a referral
          relationship. Using /contact/ as primary CTA is correct here. */}
      <Hero
        eyebrow="For your role"
        title="Medicare Transition Support for Benefits Administrators"
        description="When employees approach Medicare eligibility, the coordination questions that follow go beyond what HR and benefits administration covers. Freedom HR Solutions works alongside Champion Insurance to connect your employees with licensed Medicare guidance."
        primaryCta={{
          label: "Schedule Consultation",
          href: "/contact/",
        }}
        secondaryCta={{
          label: "Learn About Champion Insurance",
          href: "/partners/champion-insurance/",
        }}
      />

      <TrustBar />

      {/* Intro + direct answer block */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Benefits administrators regularly encounter a situation that falls outside the scope of HR
          consulting: employees approaching age 65 who need help understanding their Medicare
          options, how Medicare interacts with their current employer coverage, and when and how to
          transition. These questions require licensed Medicare guidance that HR and benefits
          administration teams are not positioned to provide. Freedom HR Solutions works alongside
          Champion Insurance to give clients a trusted referral resource for this specific need.
          Ron Filice leads Champion Insurance Agency Inc, DBA Insurance Champion Services, Medicare
          Division, and works as a licensed independent Medicare agent. We support benefits
          administrators in Las Vegas, across Nevada, and nationwide.
        </p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            How does Freedom HR Solutions help benefits administrators when employees approach Medicare eligibility?
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">
            Freedom HR Solutions works alongside Champion Insurance, a licensed independent Medicare
            agency, to provide a referral resource for employees approaching age 65. Benefits
            administrators who are fielding employee Medicare questions, navigating Medicare
            coordination with employer group health plans, or supporting COBRA-to-Medicare
            transitions can refer employees to Champion Insurance for individual Medicare guidance.
            Freedom HR Solutions handles HR and benefits administration support. Champion Insurance
            handles individual Medicare guidance. Both firms operate independently.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenges"
          title="What benefits administrators face when employees approach Medicare"
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

      {/* How the partnership works */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="How it works"
          title="The Champion Insurance referral relationship"
        />
        <div className="mt-10">
          <FeatureGrid items={partnershipCards} columns={2} variant="card" />
        </div>
      </Section>

      {/* Partner page + related services */}
      <RelatedPages
        eyebrow="Learn more"
        title="Champion Insurance and related services"
        description="Learn more about the Champion Insurance partnership and the HR and benefits services that support employee transitions."
        items={[
          {
            title: "Champion Insurance",
            href: "/partners/champion-insurance/",
            description:
              "Learn more about how Freedom HR Solutions works alongside Champion Insurance to support employees approaching Medicare eligibility.",
          },
          {
            title: "Open Enrollment Setup",
            href: "/services/open-enrollment-setup/",
            description:
              "Help configuring enrollment periods and employee communication before the open enrollment window opens.",
          },
          {
            title: "Benefits Administration Support",
            href: "/services/benefits-administration-support/",
            description:
              "Support for benefits enrollment workflows, eligibility data, and administration processes throughout the plan year.",
          },
          {
            title: "Payroll, Benefits, and HR Management",
            href: "/services/payroll-benefits-hr-management/",
            description:
              "Support configuring and managing payroll deductions and benefits workflows so they run accurately and consistently.",
          },
          {
            title: "Compliance Support",
            href: "/services/compliance-support/",
            description:
              "Broader HR compliance support to identify gaps and strengthen your documentation and policy foundation.",
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
              "Open enrollment support, eligibility management, ACA reporting, and benefits workflow consulting.",
          },
          {
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issue resolution.",
          },
          {
            title: "Small Businesses",
            href: "/who-we-help/small-businesses/",
            description:
              "HR compliance, payroll, benefits, and workforce support for businesses without a full internal HR team.",
          },
        ]}
      />

      {/* FAQs: FaqSection emits FAQ schema. No second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band: Schedule Consultation is primary; FHS does not provide Medicare services */}
      <CtaBand
        primaryCta={{
          label: "Schedule Consultation",
          href: "/contact/",
        }}
        secondaryCta={{
          label: "Learn About Champion Insurance",
          href: "/partners/champion-insurance/",
        }}
      />

      {/* ProfessionalService schema */}
      <SchemaScript schema={schema} />
    </>
  );
}
