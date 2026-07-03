// src/app/who-we-help/multi-state-employers/payroll-compliance/page.tsx
// Audience-plus-service child page: Multi-State Employers x Payroll Compliance
// Route: /who-we-help/multi-state-employers/payroll-compliance/
// Service mapping: payroll-benefits-hr-management / multi-state-payroll-support
// Audience mapping: multi-state-employers
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03
// Pipeline notes: confirmed-volume signals: payroll management consultant (usable),
// payroll implementation consultant salary (job-seeker noise, discarded),
// multi state unemployment (government UI benefits noise, discarded).
// Zero-volume rule applied to remaining clusters.

import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

// --- Metadata ---
export const metadata: Metadata = buildMetadata({
  title: "Multi-State Payroll Compliance Support | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps multi-state employers manage payroll compliance across locations, configuring systems for each state, organizing workflows, correcting errors, and keeping payroll consistent as you expand. Las Vegas and nationwide.",
  path: "/who-we-help/multi-state-employers/payroll-compliance/",
});

// --- Page data ---

// Four areas where multi-state payroll compliance breaks down
const breakdownAreas = [
  {
    title: "State payroll registrations and setup",
    description:
      "Each state where you have employees requires separate employer registration for withholding tax and unemployment insurance before the first payroll runs. Missing or delayed registrations create compliance gaps and back-payment obligations. We help employers understand what is required in each state before the first hire, not after the first payroll.",
  },
  {
    title: "Configuration inconsistencies across locations",
    description:
      "Payroll systems configured differently across states accumulate errors over time. Deduction rules, pay codes, and reporting settings that work correctly in one location may not carry over accurately when a new state is added. We review configurations across locations to find and correct inconsistencies before they compound.",
  },
  {
    title: "Payroll errors that follow expansion",
    description:
      "Errors that begin when a new state is added often trace back to an initial configuration decision made under time pressure. Rather than patching the same error each period, we help identify the underlying configuration issue so it can be corrected at the source.",
  },
  {
    title: "Reporting that does not reconcile across states",
    description:
      "When payroll data lives in different configurations across states, consolidated reporting becomes unreliable. Totals do not match, allocations are off, and leadership cannot get a clean company-wide view. We help align configurations and data so reporting is more consistent across locations.",
  },
];

// Scenarios specific to multi-state payroll complexity
const scenarios = [
  "You hired employees in two new states this year and are not confident the payroll registrations and configurations were set up correctly.",
  "Payroll errors keep appearing at month-end and they seem to be isolated to employees in specific states.",
  "Your payroll team runs each state separately and the processes are inconsistent across locations.",
  "Leadership wants a consolidated payroll report across all states but the numbers never reconcile cleanly.",
  "You are preparing to expand into a new state and want to get the payroll setup right before the first hire.",
  "Your payroll system was configured for one state and has been patched for each additional state rather than set up correctly from the start.",
];

// FAQs: 6 questions eligible for FAQ schema, emitted via FaqSection
const faqs = [
  {
    question: "Why does payroll compliance get more complex with each new state?",
    answer:
      "Each state has its own employer registration requirements, withholding tax rules, unemployment insurance obligations, and sometimes local tax requirements. Adding a new state means adding a new layer of configuration, registration, and compliance tracking. When those steps are handled inconsistently, errors accumulate over time.",
  },
  {
    question: "What payroll registrations are required when hiring in a new state?",
    answer:
      "At minimum, most states require employers to register for state income tax withholding and state unemployment insurance before running payroll for employees in that state. Some states and localities have additional requirements. Freedom HR Solutions helps employers understand what is needed in each new state before the first hire. We provide guidance and process support, not legal or tax advice.",
  },
  {
    question: "How do multi-state employers keep payroll consistent across locations?",
    answer:
      "Consistency comes from standardized configuration, the same pay codes, deduction structures, and workflow logic applied correctly in each state rather than set up differently each time a new state is added. We help employers review and align configurations across locations so payroll runs more consistently company-wide.",
  },
  {
    question: "What causes payroll errors in multi-state companies?",
    answer:
      "Most recurring payroll errors in multi-state companies trace back to configuration decisions made under time pressure when a new state was added, a withholding rule set up incorrectly, a deduction not mapped properly, or a pay code applied inconsistently across locations. Reviewing the underlying configuration is usually more effective than correcting each error individually.",
  },
  {
    question: "Can Freedom HR Solutions help set up payroll in a new state before the first hire?",
    answer:
      "Yes. We help employers understand the registration and configuration steps required in a new state so the first payroll cycle runs correctly rather than requiring corrections after the fact.",
  },
  {
    question: "Can Freedom HR Solutions help with payroll for remote employees in multiple states?",
    answer:
      "Yes. Remote employees in different states create the same registration and configuration requirements as employees in a physical office in those states. We help employers set up payroll correctly for each state where remote employees are located.",
  },
];

// --- Page component ---
export default function MultiStateEmployersPayrollCompliancePage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Multi-State Employers > Payroll Compliance */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Multi-State Employers", path: "/who-we-help/multi-state-employers/" },
          { name: "Payroll Compliance", path: "/who-we-help/multi-state-employers/payroll-compliance/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For multi-state employers"
        title="Multi-State Payroll Compliance for Employers"
        description="Every new state adds payroll registration requirements, withholding rules, and configuration decisions that compound if they are not set up correctly the first time. Multi-state employers often discover payroll compliance gaps through recurring errors, reports that do not reconcile, or inconsistencies between locations that are hard to trace back to a source. Freedom HR Solutions helps multi-state employers configure payroll systems for each state, organize workflows across locations, identify the root cause of recurring errors, and build more consistent payroll processes as the workforce grows."
        primaryCta={{ label: "Request Payroll Compliance Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Why payroll compliance gets harder with every new state */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Why it compounds"
          title="Why payroll compliance gets harder with every new state"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            Single-state payroll has one set of rules. Each additional state adds its own
            withholding requirements, unemployment tax obligations, and registration deadlines.
            When those configurations are handled inconsistently, set up differently in each
            state, by different people, under time pressure when a new hire starts, errors
            compound and become harder to trace.
          </p>
          <p>
            Freedom HR Solutions works with{" "}
            <Link href="/who-we-help/multi-state-employers/" className="text-brand-700 underline hover:text-brand-800">
              multi-state employers
            </Link>{" "}
            to review payroll configurations across locations, identify the source of recurring
            errors, and build more consistent processes before the next state is added. We
            support the{" "}
            <Link href="/services/payroll-benefits-hr-management/" className="text-brand-700 underline hover:text-brand-800">
              payroll and benefits platforms
            </Link>{" "}
            you already use and are headquartered in Las Vegas with nationwide remote delivery.
          </p>
        </div>
      </Section>

      {/* Where multi-state payroll compliance breaks down */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Where it breaks down"
          title="Where multi-state payroll compliance breaks down"
          as="h2"
        />
        <div className="mt-10">
          <FeatureGrid items={breakdownAreas} columns={2} variant="card" />
        </div>
      </Section>

      {/* Situations we help with */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations we help with"
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
      <Section tone="muted" containerSize="narrow">
        <SectionHeading
          eyebrow="Related support"
          title="Other support for multi-state employers"
          as="h2"
        />
        <div className="mt-6 space-y-3 text-body leading-relaxed">
          <p>
            Payroll compliance is one of several areas that become more complex as you expand
            across state lines. Multi-state employers often need coordinated support across{" "}
            <Link href="/who-we-help/multi-state-employers/aca-reporting-compliance/" className="text-brand-700 underline hover:text-brand-800">
              ACA reporting
            </Link>
            ,{" "}
            <Link href="/who-we-help/multi-state-employers/employee-handbooks/" className="text-brand-700 underline hover:text-brand-800">
              multi-state employee handbooks
            </Link>
            , and{" "}
            <Link href="/who-we-help/multi-state-employers/workforce-compliance/" className="text-brand-700 underline hover:text-brand-800">
              workforce compliance
            </Link>
            . For a structured review of your current payroll, compliance, and HR setup across
            all locations, the{" "}
            <Link href="/request-assessment/" className="text-brand-700 underline hover:text-brand-800">
              HR MRI Risk Assessment
            </Link>{" "}
            is a good starting point.
          </p>
        </div>
      </Section>

      {/* FAQs: FAQ schema emitted here via FaqSection. No second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request Payroll Compliance Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* Schema: ProfessionalService via SchemaScript. Breadcrumb and FAQ schema emitted by their components. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "Multi-State Payroll Compliance Support",
          description:
            "Freedom HR Solutions helps multi-state employers manage payroll compliance across locations, configuring systems for each state, organizing workflows, identifying the root cause of recurring errors, and building consistent payroll processes as the workforce grows.",
          path: "/who-we-help/multi-state-employers/payroll-compliance/",
        })}
      />
    </>
  );
}
