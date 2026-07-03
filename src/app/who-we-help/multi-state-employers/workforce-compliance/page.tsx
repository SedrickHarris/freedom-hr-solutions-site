// src/app/who-we-help/multi-state-employers/workforce-compliance/page.tsx
// Audience-plus-service child page: Multi-State Employers x Workforce Compliance
// Route: /who-we-help/multi-state-employers/workforce-compliance/
// Service mapping: workforce-compliance-monitoring / compliance-support
// Audience mapping: multi-state-employers
// AI Depth: Level 3 Standard

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

// --- Metadata ---
export const metadata: Metadata = buildMetadata({
  title: "Workforce Compliance Support for Multi-State Employers | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps multi-state employers maintain consistent HR documentation, policy compliance, and workforce monitoring across every state where they operate. Las Vegas and nationwide.",
  path: "/who-we-help/multi-state-employers/workforce-compliance/",
});

// --- Page data ---

// Section 2: what we help with (FeatureGrid, 2 columns, card variant)
const complianceSupport = [
  {
    title: "Compliance Gap Review",
    description:
      "Reviewing your current HR documentation, policies, and acknowledgment records to identify gaps between what your compliance structure covers and what each state where you operate requires.",
  },
  {
    title: "Policy Consistency Across Locations",
    description:
      "Helping ensure HR policies are applied consistently across every state where you have employees, not just at headquarters.",
  },
  {
    title: "Documentation Standards",
    description:
      "Supporting the structure and maintenance of workforce documentation so records are organized, current, and consistent across locations.",
  },
  {
    title: "Acknowledgment Tracking",
    description:
      "Helping maintain records of policy acknowledgments across your distributed workforce so there is a clear record of what each employee received and confirmed.",
  },
  {
    title: "Ongoing Compliance Monitoring",
    description:
      "Supporting a structured review process so compliance documentation does not drift between major changes or annual reviews.",
  },
  {
    title: "New State Compliance Setup",
    description:
      "Helping extend your compliance structure to new states as you hire there so documentation and policy coverage keeps pace with your workforce distribution.",
  },
];

// Section 3: who this is for (scenario list)
const scenarios = [
  "Your HR documentation was built for your home state and has never been formally extended to the other states where you now have employees.",
  "Policy acknowledgment records are incomplete or inconsistent across locations and you are not confident every employee has received current documentation.",
  "Your compliance structure has not been reviewed since you last expanded into a new state.",
  "Different locations are applying HR policies differently and there is no process to ensure consistency.",
  "You are not sure whether your current documentation meets the requirements of each state where you operate.",
  "A compliance review or internal audit has surfaced gaps that no one has a clear plan to address.",
];

// FAQs: 5 questions eligible for FAQ schema, emitted via FaqSection
const faqs = [
  {
    question: "What is workforce compliance for a multi-state employer?",
    answer:
      "Workforce compliance for a multi-state employer refers to maintaining consistent HR documentation, policies, and acknowledgment records across every state where employees work. It includes keeping those records current as state requirements change, applying documentation standards consistently across locations, and monitoring for gaps that develop as the business grows. We help multi-state employers build and maintain that compliance structure over time.",
  },
  {
    question: "How does workforce compliance differ from payroll compliance for multi-state employers?",
    answer:
      "Payroll compliance covers the tax and pay rule accuracy layer: registrations, withholding, and pay rules by state. Workforce compliance covers the HR documentation layer: policies, acknowledgment records, employee documentation, and the monitoring processes that keep that structure consistent. Multi-state employers generally need both. We help with the workforce compliance side and can also support payroll compliance through a separate engagement.",
  },
  {
    question: "How often should a multi-state employer review workforce compliance?",
    answer:
      "At minimum, once a year. Reviews should also happen when you hire in a new state, change a significant policy, or experience workforce growth that changes how your documentation structure needs to work. Multi-state employers face more frequent compliance surface changes than single-state employers because state requirements can shift independently of federal rules.",
  },
  {
    question: "Can Freedom HR Solutions help identify compliance gaps for a multi-state employer?",
    answer:
      "Yes. We review your current HR documentation, policies, and acknowledgment records to identify where your compliance structure has gaps relative to the states where you operate. We provide guidance and process support, not legal advice.",
  },
  {
    question: "What does a compliance gap review cover for a multi-state employer?",
    answer:
      "A compliance gap review looks at your existing HR documentation, policy coverage, acknowledgment records, and compliance processes relative to the states where you have employees. We identify what is missing, what is inconsistent, and what needs to be updated so you have a clear picture of where your compliance structure stands and what to address first.",
  },
];

// --- Page component ---
export default function MultiStateEmployersWorkforceCompliancePage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Multi-State Employers > Workforce Compliance */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Multi-State Employers", path: "/who-we-help/multi-state-employers/" },
          { name: "Workforce Compliance", path: "/who-we-help/multi-state-employers/workforce-compliance/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For your business"
        title="Workforce Compliance Support for Multi-State Employers"
        description="Freedom HR Solutions helps multi-state employers maintain consistent workforce documentation, HR policies, and compliance monitoring so your compliance posture does not erode as you grow."
        primaryCta={{ label: "Request Compliance Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Direct answer block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Workforce compliance for a multi-state employer means maintaining consistent HR
          documentation, policies, and acknowledgment records across every state where employees
          work. It includes keeping policies current as state requirements change, monitoring
          whether documentation standards are being applied consistently across locations, and
          closing the gaps that develop over time as the business grows into new states. Freedom HR
          Solutions helps multi-state employers build and maintain the compliance structure that
          keeps their workforce documentation organized and consistent.
        </p>
      </Section>

      {/* Section 1: the problem */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenge"
          title="Compliance Gaps Grow With Every State You Add"
        />
        <p className="mt-6 leading-relaxed text-body">
          Each time a multi-state employer hires in a new state, the compliance surface area
          expands. Policy acknowledgments need to cover new employees. Documentation standards need
          to apply consistently across locations. State-specific requirements need to be reflected
          in HR records and processes. Without active monitoring, these gaps compound quietly until
          something surfaces them: an audit, a dispute, or a process review that reveals
          inconsistency across locations.
        </p>
      </Section>

      {/* Section 2: what we help with */}
      <Section>
        <SectionHeading
          eyebrow="How we help"
          title="Workforce Compliance Support Built for Multi-State Operations"
        />
        <div className="mt-10">
          <FeatureGrid items={complianceSupport} columns={2} variant="card" />
        </div>
      </Section>

      {/* Section 3: who this is for */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="You May Need Multi-State Workforce Compliance Support If"
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

      {/* Section 4: differentiation from payroll compliance */}
      <Section>
        <SectionHeading
          eyebrow="Understanding the difference"
          title="Workforce Compliance vs. Payroll Compliance"
        />
        <p className="mt-6 leading-relaxed text-body">
          Multi-state payroll compliance covers tax registrations, withholding accuracy, and pay
          rule consistency by state. Workforce compliance covers the HR documentation layer:
          policies, acknowledgments, employee records, and the monitoring processes that keep that
          documentation consistent over time. Both matter for multi-state employers, but they
          address different parts of the compliance picture. For payroll-specific compliance
          support, see our page on{" "}
          <Link href="/who-we-help/multi-state-employers/payroll-compliance/" className="text-brand-700 underline hover:text-brand-800">
            payroll compliance for multi-state employers
          </Link>
          .
        </p>
      </Section>

      {/* Section 5: related services */}
      <RelatedPages
        eyebrow="Where to go next"
        title="Related Services and Support"
        tone="muted"
        items={serviceRefs([
          "compliance-support",
          "workforce-compliance-monitoring",
          "hr-mri-risk-assessment",
          "employee-handbook-creation-management",
        ])}
      />

      {/* Sibling audience links */}
      <Section containerSize="narrow">
        <p className="mt-6 leading-relaxed text-body">
          For broader multi-state HR support, see{" "}
          <Link href="/who-we-help/multi-state-employers/" className="text-brand-700 underline hover:text-brand-800">
            Multi-State Employer HR Support
          </Link>
          ,{" "}
          <Link href="/who-we-help/multi-state-employers/aca-reporting-compliance/" className="text-brand-700 underline hover:text-brand-800">
            ACA Reporting for Multi-State Employers
          </Link>
          ,{" "}
          <Link href="/who-we-help/multi-state-employers/employee-handbooks/" className="text-brand-700 underline hover:text-brand-800">
            Employee Handbooks for Multi-State Employers
          </Link>
          , and{" "}
          <Link href="/who-we-help/multi-state-employers/hr-system-setup/" className="text-brand-700 underline hover:text-brand-800">
            HR System Setup for Multi-State Employers
          </Link>
          .
        </p>
      </Section>

      {/* FAQs: FAQ schema emitted here via FaqSection. No second FAQ schema node. */}
      <FaqSection faqs={faqs} />

      {/* CTA Band */}
      <CtaBand />

      {/* Schema: ProfessionalService via SchemaScript. Breadcrumb and FAQ schema emitted by their components. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "Workforce compliance support for multi-state employers",
          description:
            "Freedom HR Solutions helps multi-state employers maintain consistent HR documentation, policy compliance, and workforce monitoring across every state where they operate.",
          path: "/who-we-help/multi-state-employers/workforce-compliance/",
        })}
      />
    </>
  );
}
