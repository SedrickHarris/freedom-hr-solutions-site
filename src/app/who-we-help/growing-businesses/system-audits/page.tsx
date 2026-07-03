// src/app/who-we-help/growing-businesses/system-audits/page.tsx
// Audience-plus-service child page: Growing Businesses x System Audits & Improvements
// Route: /who-we-help/growing-businesses/system-audits/
// Service mapping: system-audits-improvements
// Audience mapping: growing-businesses
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03, zero-volume rule applied

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
  title: "HR System Audits for Growing Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions audits HR, payroll, and benefits systems for growing businesses, finding configuration gaps, recurring errors, and improvement opportunities before they scale into bigger problems.",
  path: "/who-we-help/growing-businesses/system-audits/",
});

// --- Page data ---

// What we look for: four audit focus areas
const auditAreas = [
  {
    title: "Configuration that no longer fits",
    description:
      "System settings, plan rules, and payroll logic that were configured for a smaller team and were never updated as the business grew. Mismatched configuration is the most common source of recurring errors.",
  },
  {
    title: "Recurring errors without a clear cause",
    description:
      "Payroll and benefits errors that keep coming back after being corrected are almost always configuration or data-pattern problems. We trace them to the source so they can be fixed rather than patched again.",
  },
  {
    title: "Reporting that does not match reality",
    description:
      "Reports that do not reconcile with what finance or leadership sees elsewhere signal a data quality or system configuration gap. We review reporting outputs and the settings that drive them.",
  },
  {
    title: "Integration and workflow gaps",
    description:
      "Broken handoffs between HR, payroll, and benefits systems create duplicate entry, data loss, and downstream errors. We map where data moves and where it breaks down.",
  },
];

// Situations that call for an audit: scenario list
const scenarios = [
  "Headcount has increased significantly and the system was never re-reviewed after the growth.",
  "Payroll errors keep coming back even after your team has corrected them.",
  "Reports do not reconcile with what finance or leadership sees in other systems.",
  "No one on the team can confidently describe how the current system is configured.",
  "The company recently crossed a headcount or compliance threshold and wants to confirm the system reflects the new requirements.",
  "A new system was implemented but was never fully configured or adopted after go-live.",
];

// FAQs: 6 questions eligible for FAQ schema, emitted via FaqSection
const faqs = [
  {
    question: "When should a growing business audit its HR or payroll system?",
    answer:
      "After a significant headcount increase, after a new system implementation, when recurring errors keep appearing, or when no one on the team can confidently describe how the system is configured. Earlier reviews prevent larger problems from compounding across a bigger workforce.",
  },
  {
    question: "What does an HR system audit for a growing business include?",
    answer:
      "A review of configuration settings, payroll rules, benefits eligibility logic, data quality, reporting outputs, and workflow handoffs between systems, with findings organized by impact so your team knows what to fix first.",
  },
  {
    question: "Why do payroll errors keep coming back after being corrected?",
    answer:
      "Recurring errors usually trace back to a configuration setting, payroll rule, or data entry pattern that was not addressed when the error was first patched. An audit identifies the root source so the issue can be corrected rather than patched repeatedly.",
  },
  {
    question: "What is HR configuration drift?",
    answer:
      "Configuration drift is the gap that develops between how an HR or payroll system is set up and how the business currently operates. It happens gradually as headcount changes, plans change, and staff turns over, and the system settings are not updated to match.",
  },
  {
    question: "Can Freedom HR Solutions audit systems for businesses that are still growing rapidly?",
    answer:
      "Yes. An audit during a period of rapid growth often prevents larger problems later. It is easier to correct configuration gaps before they compound across a larger workforce.",
  },
  {
    question: "What happens after the audit is complete?",
    answer:
      "You receive a prioritized improvement plan with findings ranked by impact. Freedom HR Solutions can help implement the recommended changes or work alongside your team as you address them.",
  },
];

// --- Page component ---
export default function GrowingBusinessesSystemAuditsPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Growing Businesses > System Audits */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Growing Businesses", path: "/who-we-help/growing-businesses/" },
          { name: "System Audits", path: "/who-we-help/growing-businesses/system-audits/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For growing businesses"
        title="HR System Audits for Growing Businesses"
        description="Growing businesses often inherit HR system configurations that were set up for a smaller team and never revisited. As headcount climbs, those settings create recurring payroll errors, reporting gaps, and workflow bottlenecks that are hard to diagnose without a structured review. Freedom HR Solutions audits your HR, payroll, and benefits system configuration, data quality, and workflows to surface what is misconfigured, what is missing, and what to fix first."
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Why growing businesses need a system audit */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Why it matters"
          title="Why growing businesses need a system audit"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            Growing businesses are the most likely to have{" "}
            <Link href="/services/system-audits-improvements/" className="text-brand-700 underline hover:text-brand-800">
              HR system configuration drift
            </Link>
            . Systems were set up during an early implementation, often under time pressure,
            and then never formally reviewed as the business added headcount, changed benefit
            plans, or expanded to new states.
          </p>
          <p>
            The problems that result, recurring errors, mismatched reports, and workarounds
            that became standard practice, are not caused by the software. They are caused
            by settings that no longer reflect how the business operates. A structured audit
            surfaces those gaps before they scale into larger problems.
          </p>
          <p>
            Freedom HR Solutions works with growing businesses in Las Vegas, across Nevada,
            and nationwide to review HR, payroll, and benefits system configurations and
            deliver a prioritized improvement plan.
          </p>
        </div>
      </Section>

      {/* What we look for */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What we review"
          title="What we look for in a growing business system audit"
          as="h2"
        />
        <div className="mt-10">
          <FeatureGrid items={auditAreas} columns={2} variant="card" />
        </div>
      </Section>

      {/* What the audit produces */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="What you receive"
          title="What the audit produces"
          as="h2"
        />
        <div className="mt-6 space-y-4 text-body leading-relaxed">
          <p>
            The output is a prioritized improvement plan, not a list of everything that
            could be improved, but a ranked set of findings organized by impact so your team
            knows what to address first. Findings cover configuration gaps, data quality
            issues, reporting inconsistencies, and workflow breakdowns.
          </p>
          <p>
            Freedom HR Solutions can help implement the recommended changes after the audit,
            or work alongside your team as you address them. For businesses that need
            follow-through on specific system areas, see our{" "}
            <Link href="/services/technical-issue-resolution/" className="text-brand-700 underline hover:text-brand-800">
              technical issue resolution
            </Link>{" "}
            and{" "}
            <Link href="/services/reporting-data-insights/" className="text-brand-700 underline hover:text-brand-800">
              reporting and data insights
            </Link>{" "}
            services.
          </p>
        </div>
      </Section>

      {/* Situations that call for a system audit */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations that call for a system audit"
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

      {/* Related services inline link block */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Related services"
          title="Other support for growing businesses"
          as="h2"
        />
        <div className="mt-6 space-y-3 text-body leading-relaxed">
          <p>
            System audits are one part of supporting HR operations at scale. Growing
            businesses often need additional help with{" "}
            <Link href="/who-we-help/growing-businesses/hr-system-implementation/" className="text-brand-700 underline hover:text-brand-800">
              HR system implementation
            </Link>
            ,{" "}
            <Link href="/who-we-help/growing-businesses/payroll-benefits-hr-management/" className="text-brand-700 underline hover:text-brand-800">
              payroll and benefits management
            </Link>
            , and{" "}
            <Link href="/who-we-help/growing-businesses/" className="text-brand-700 underline hover:text-brand-800">
              overall HR support as they scale
            </Link>
            . If you are not sure where to start, the{" "}
            <Link href="/request-assessment/" className="text-brand-700 underline hover:text-brand-800">
              HR MRI Risk Assessment
            </Link>{" "}
            is a structured review of your current HR operations and is a good first step.
          </p>
        </div>
      </Section>

      {/* FAQs: FAQ schema emitted here via FaqSection. No second FAQ schema node elsewhere. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* Schema: ProfessionalService via SchemaScript. Breadcrumb and FAQ schema emitted by their components. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "HR System Audits for Growing Businesses",
          description:
            "Freedom HR Solutions audits HR, payroll, and benefits system configurations, data quality, workflows, and reporting for growing businesses to find gaps and deliver a prioritized improvement plan.",
          path: "/who-we-help/growing-businesses/system-audits/",
        })}
      />
    </>
  );
}
