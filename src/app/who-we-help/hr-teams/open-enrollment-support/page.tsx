// src/app/who-we-help/hr-teams/open-enrollment-support/page.tsx
// Audience-plus-service intersection page: HR Teams x Open Enrollment Support
// Route: /who-we-help/hr-teams/open-enrollment-support/
// Service anchor: open-enrollment-setup
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

const PATH = "/who-we-help/hr-teams/open-enrollment-support/";

// --- Metadata ---

export const metadata: Metadata = buildMetadata({
  title: "Open Enrollment Support for HR Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps HR teams prepare for open enrollment with benefits plan configuration, system setup and testing, employee communication support, and post-enrollment reconciliation. Las Vegas and nationwide.",
  path: PATH,
});

// --- Page data ---

// Section 1: Pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Enrollment preparation competes with everything else",
    description:
      "Open enrollment does not arrive during a slow period. Configuration, testing, and communication work stacks on top of the daily workload with no relief.",
  },
  {
    title: "Benefits plan configuration errors caught too late",
    description:
      "Plan options, eligibility rules, and rates that are set up incorrectly are often not caught until employees start making elections, which creates corrections, confusion, and support requests.",
  },
  {
    title: "Employee communication that arrives too late or says too little",
    description:
      "When employees receive enrollment information close to the deadline or without clear explanations of plan changes, they make uninformed elections or flood HR with questions.",
  },
  {
    title: "No structured testing before the window opens",
    description:
      "Enrollment workflows that are not tested before employees access them produce errors that are harder to correct mid-window than before it opened.",
  },
  {
    title: "Post-enrollment reconciliation that drags into the new plan year",
    description:
      "After the window closes, elections need to match payroll deductions and carrier files. Without a reconciliation process, discrepancies carry into the new plan year undetected.",
  },
  {
    title: "One person carrying the entire enrollment project",
    description:
      "When open enrollment ownership falls to a single HR team member without support, the risk of errors and missed steps is higher and the workload is unsustainable.",
  },
];

// Section 2: How we help (FeatureGrid, 2 columns, card variant)
const howWeHelp = [
  {
    title: "Benefits Plan Configuration",
    description:
      "We set up plan options, eligibility rules, rates, and enrollment logic in your HR or benefits system before the window opens so employees see accurate options when they log in.",
  },
  {
    title: "System Testing and Quality Review",
    description:
      "We test enrollment settings end to end before the window opens so configuration errors are caught and corrected before they affect employee elections.",
  },
  {
    title: "Employee Communication Support",
    description:
      "We help structure enrollment communication so employees receive clear, timely information about their plan options, deadlines, and any changes from the prior year.",
  },
  {
    title: "Enrollment Window Management",
    description:
      "We work alongside your team during the enrollment window to handle configuration questions, troubleshoot issues, and keep the process on track.",
  },
  {
    title: "Post-Enrollment Reconciliation",
    description:
      "After the window closes, we reconcile elections against payroll deductions and carrier data so records are accurate before the new plan year begins.",
  },
  {
    title: "Year-Over-Year Enrollment Planning",
    description:
      "We help HR teams build a structured preparation timeline so enrollment preparation starts early enough to avoid the last-minute configuration rush each year.",
  },
];

// Section 3: Scenarios
const scenarios = [
  "Open enrollment is six weeks out and your team has not started configuration yet.",
  "Benefits plan rates or eligibility rules changed this year and the system has not been updated.",
  "Last year's enrollment produced employee complaints and carrier data mismatches that took weeks to resolve.",
  "Your team needs to test enrollment workflows before the window opens but does not have bandwidth to run through it thoroughly.",
  "Employee communication for enrollment was late last year and you want a structured plan this time.",
  "Post-enrollment reconciliation is overdue and payroll deductions do not match what employees elected.",
];

// Section 4: FAQs (FAQ schema emitted via FaqSection; no second schema node)
const pageFaqs = [
  {
    question: "How does Freedom HR Solutions support HR teams during open enrollment?",
    answer:
      "We work alongside HR teams to handle benefits plan configuration, system testing, employee communication support, and post-enrollment reconciliation. We take on the time-consuming preparation and cleanup work so your team is not managing every stage of the process alone.",
  },
  {
    question: "How early should open enrollment preparation start?",
    answer:
      "Most HR teams benefit from starting preparation four to six weeks before the enrollment window opens. This allows enough time to configure plans, complete testing, prepare communication materials, and resolve any issues before employees start making elections.",
  },
  {
    question: "What should be tested before open enrollment opens?",
    answer:
      "Benefits plan settings, eligibility rules, enrollment workflows, and the employee-facing enrollment experience should all be tested before the window opens. Testing catches configuration errors before they affect employee elections and reduces the support burden during the enrollment period.",
  },
  {
    question: "What does post-enrollment reconciliation involve?",
    answer:
      "Post-enrollment reconciliation means verifying that the elections employees made during open enrollment match payroll deduction records and carrier data. Discrepancies between these three sources, the HR system, payroll, and the carrier file, need to be identified and corrected before the new plan year begins.",
  },
  {
    question: "Can Freedom HR Solutions help if our benefits plan rates or options changed this year?",
    answer:
      "Yes. When plan options, rates, or eligibility rules change year over year, the system configuration needs to be updated before the window opens. We help update and verify those settings so employees see accurate information when they enroll.",
  },
  {
    question: "Can Freedom HR Solutions support open enrollment for HR teams that also manage other HR responsibilities?",
    answer:
      "Yes. We specifically support HR teams that carry open enrollment responsibility alongside their regular workload. We handle the configuration, testing, and reconciliation work so your team can stay focused on daily operations without enrollment preparation falling through the gaps.",
  },
];

// --- Page component ---

export default function HrTeamsOpenEnrollmentSupportPage() {
  return (
    <>
      {/* Breadcrumbs: 4 levels */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "HR Teams", path: "/who-we-help/hr-teams/" },
          { name: "Open Enrollment Support", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For HR teams"
        title="Open Enrollment Support for HR Teams"
        description="Open enrollment arrives on the same date every year and it always competes with everything else on your team's plate. We handle the configuration, testing, and reconciliation work so your enrollment season runs on schedule and without avoidable errors."
        primaryCta={{ label: "Request Open Enrollment Support", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Direct answer block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Open enrollment is one of the most time-compressed periods in the HR calendar.
          Benefits plans need to be configured in the system, eligibility rules need to be
          verified, employees need clear communication before the window opens, and carrier
          data needs to reconcile after it closes. All of this lands on the HR team on top
          of every other responsibility that does not pause for enrollment season.
        </p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            How does Freedom HR Solutions support HR teams during open enrollment?
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">
            Freedom HR Solutions works alongside HR teams to prepare for open enrollment
            before the window opens and clean up the data after it closes. We handle benefits
            plan configuration, system testing, employee communication support, and
            post-enrollment reconciliation so your team is not managing every stage of the
            process alone.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenges"
          title="Why Open Enrollment Strains HR Teams"
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
          title="Open Enrollment Support for HR Teams"
        />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* Related services */}
      <RelatedPages
        eyebrow="Related services"
        title="Services That Support Open Enrollment"
        description="The services HR teams use most often alongside open enrollment preparation."
        items={serviceRefs([
          "open-enrollment-setup",
          "benefits-administration-support",
          "payroll-benefits-hr-management",
          "technical-issue-resolution",
          "ongoing-technical-support",
        ])}
        tone="muted"
      />

      {/* Related audiences */}
      <RelatedPages
        eyebrow="Also relevant for"
        title="Related Audiences"
        items={audienceRefs([
          "hr-teams",
          "benefits-administrators",
          "growing-businesses",
        ])}
      />

      {/* FAQs: FAQ schema emitted via FaqSection. Do not add a second schema node. */}
      <FaqSection faqs={pageFaqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request Open Enrollment Support", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema. BreadcrumbList emitted by Breadcrumbs. FAQ schema emitted by FaqSection. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "Open enrollment support for HR teams",
          description:
            "Freedom HR Solutions helps HR teams prepare for open enrollment with benefits plan configuration, system setup and testing, employee communication support, and post-enrollment reconciliation.",
          path: PATH,
        })}
      />
    </>
  );
}
