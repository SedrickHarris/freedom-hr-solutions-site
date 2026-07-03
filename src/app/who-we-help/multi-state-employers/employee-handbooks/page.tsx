// src/app/who-we-help/multi-state-employers/employee-handbooks/page.tsx
// Audience-plus-service child page: Multi-State Employers x Employee Handbooks
// Route: /who-we-help/multi-state-employers/employee-handbooks/
// Service mapping: employee-handbook-creation-management
// Audience mapping: multi-state-employers
// AI Depth: Level 4 Elite

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
  title: "Multi-State Employee Handbook Support | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps multi-state employers create and maintain employee handbooks that address state-specific policy differences across every jurisdiction where they operate. Las Vegas and nationwide.",
  path: "/who-we-help/multi-state-employers/employee-handbooks/",
});

// --- Page data ---

// Section 2: what we help with (FeatureGrid, 2 columns, card variant)
const handbookSupport = [
  {
    title: "Custom Handbook Creation",
    description:
      "We build handbooks that account for multiple jurisdictions from the start, so the structure is right before you add employees in a new state.",
  },
  {
    title: "State-Specific Addenda and Policy Sections",
    description:
      "We add jurisdiction-specific sections or addenda that address the rules in each state where your employees work.",
  },
  {
    title: "Leave Policy Alignment",
    description:
      "We review and align leave policies across jurisdictions, covering PTO, paid sick leave, FMLA, and state-level equivalents where they differ.",
  },
  {
    title: "Annual Review Process",
    description:
      "We build in a structured annual review so state law changes are caught before they create gaps in your handbook.",
  },
  {
    title: "Acknowledgment Tracking",
    description:
      "We support digital distribution and acknowledgment collection so distribution records are maintained across all locations.",
  },
  {
    title: "Version Control",
    description:
      "We maintain a clear record of what changed, when, and why, so there is always a reliable history of your current and prior handbook versions.",
  },
];

// Section 3: who this is for (scenario list)
const scenarios = [
  "You recently hired employees in one or more new states and your handbook has not been updated to reflect those locations.",
  "Your handbook was written for your home state and applied to all locations without modification.",
  "State leave policies differ across your workforce and your handbook does not distinguish between them.",
  "Your handbook has not been reviewed since your last expansion.",
  "Remote employees work across multiple states and your policies do not address their specific jurisdiction.",
  "No one on your team owns the annual review and update process.",
];

// FAQs: 6 questions eligible for FAQ schema, emitted via FaqSection
const faqs = [
  {
    question: "What is a multi-state employee handbook?",
    answer:
      "A multi-state employee handbook addresses the policy differences that apply across every state where an employer has workers. Rather than applying one state's rules everywhere, it includes jurisdiction-specific sections or addenda that reflect each state's leave requirements, employment laws, and other rules. Employers with workers in multiple states generally need this level of coverage to avoid applying the wrong policy in the wrong location.",
  },
  {
    question: "Does every state require a different employee handbook?",
    answer:
      "Not necessarily a separate handbook for every state, but employers with workers in multiple states often need state-specific addenda or sections that address the rules in each jurisdiction. Some states have distinct leave laws, notice requirements, or anti-discrimination protections that differ from the employer's home state. We help identify those differences and build them into a cohesive handbook structure.",
  },
  {
    question: "How often should a multi-state employer update their employee handbook?",
    answer:
      "At minimum, a multi-state handbook should be reviewed annually. State employment laws change more frequently than federal rules, and those changes can affect leave policies, wage and hour language, and other handbook sections. Reviews should also happen when you hire in a new state, change a policy, or experience significant workforce growth.",
  },
  {
    question: "Can Freedom HR Solutions create a multi-state employee handbook from scratch?",
    answer:
      "Yes. We build handbooks tailored to how your business operates and the states where you have employees. We gather information about your workforce, the states involved, and your current policies, then create a handbook structured to reflect each jurisdiction appropriately. We provide guidance and support, not legal advice.",
  },
  {
    question: "What happens when we expand into a new state?",
    answer:
      "When you hire in a new state, your handbook likely needs to be updated before that employee starts. We help review what your current handbook says, identify what needs to change for the new jurisdiction, and add the appropriate language or addendum. We also support ongoing review so future expansions follow the same structured process.",
  },
  {
    question: "Can Freedom HR Solutions help with remote employee handbook policies?",
    answer:
      "Yes. Remote employees working across state lines present the same jurisdictional considerations as on-site employees in those states. We help employers account for remote workforce distribution in their handbook structure so policies reflect the states where remote employees actually work, not just the employer's headquarters state.",
  },
];

// --- Page component ---
export default function MultiStateEmployersEmployeeHandbooksPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Multi-State Employers > Employee Handbooks */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Multi-State Employers", path: "/who-we-help/multi-state-employers/" },
          { name: "Employee Handbooks", path: "/who-we-help/multi-state-employers/employee-handbooks/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For your business"
        title="Employee Handbook Support for Multi-State Employers"
        description="Freedom HR Solutions helps multi-state employers build, update, and maintain employee handbooks that account for the policy differences across every state where you have employees."
        primaryCta={{ label: "Request Handbook Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Direct answer block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          A multi-state employee handbook needs to address policy differences that vary by state,
          including leave requirements, at-will employment language, anti-discrimination
          protections, and wage and hour rules. Employers with workers in more than one state
          typically need either state-specific addenda or jurisdiction-specific sections so the
          handbook reflects the rules that apply in each location, not just the employer&apos;s
          home state.
        </p>
      </Section>

      {/* Section 1: the problem */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenge" title="One Handbook Rarely Covers Every State" />
        <p className="mt-6 leading-relaxed text-body">
          Most employers write a handbook for the state they started in and apply it everywhere.
          That creates gaps when they hire in states with different leave laws, notice
          requirements, or anti-discrimination language. Multi-state employers need a handbook
          that accounts for jurisdictional differences, not one that assumes all locations
          operate under the same rules.
        </p>
      </Section>

      {/* Section 2: what we help with */}
      <Section>
        <SectionHeading
          eyebrow="How we help"
          title="Handbook Support Built for Multi-State Operations"
        />
        <div className="mt-10">
          <FeatureGrid items={handbookSupport} columns={2} variant="card" />
        </div>
      </Section>

      {/* Section 3: who this is for */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="You May Need Multi-State Handbook Support If"
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

      {/* Section 4: how it works */}
      <Section>
        <SectionHeading
          eyebrow="Our approach"
          title="How Freedom HR Solutions Approaches Multi-State Handbooks"
        />
        <p className="mt-6 leading-relaxed text-body">
          We start by reviewing your current handbook alongside the states where you have
          employees. We identify gaps between what your handbook says and what each state
          requires. Then we build state-specific sections or addenda, update leave and wage
          policies, and create a version that reflects your actual workforce distribution. We
          also set up a review process so you have a path to keep it current when laws change or
          you expand to a new state. We provide guidance and support, not legal advice.
        </p>
      </Section>

      {/* Section 5: related services */}
      <RelatedPages
        eyebrow="Where to go next"
        title="Related Services and Support"
        tone="muted"
        items={serviceRefs([
          "employee-handbook-creation-management",
          "compliance-support",
          "workforce-compliance-monitoring",
          "hr-mri-risk-assessment",
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
          <Link href="/who-we-help/multi-state-employers/workforce-compliance/" className="text-brand-700 underline hover:text-brand-800">
            Workforce Compliance for Multi-State Employers
          </Link>
          , and{" "}
          <Link href="/who-we-help/multi-state-employers/aca-reporting-compliance/" className="text-brand-700 underline hover:text-brand-800">
            ACA Reporting for Multi-State Employers
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
          name: "Multi-state employee handbook support",
          description:
            "Freedom HR Solutions helps multi-state employers create and maintain employee handbooks that address state-specific policy differences across every jurisdiction where they operate.",
          path: "/who-we-help/multi-state-employers/employee-handbooks/",
        })}
      />
    </>
  );
}
