// src/app/who-we-help/multi-state-employers/hr-system-setup/page.tsx
// Audience-plus-service child page: Multi-State Employers x HR System Setup
// Route: /who-we-help/multi-state-employers/hr-system-setup/
// Service mapping: system-setup-implementation
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
  title: "HR System Setup for Multi-State Employers | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps multi-state employers set up and configure HR, payroll, and benefits systems that work consistently across every state where they operate. Las Vegas and nationwide.",
  path: "/who-we-help/multi-state-employers/hr-system-setup/",
});

// --- Page data ---

// Section 2: what we help with (FeatureGrid, 2 columns, card variant)
const setupSupport = [
  {
    title: "Multi-State Payroll Configuration",
    description:
      "Configuring payroll tax rules, withholding, and registrations for each state where you have employees so payroll runs accurately across locations.",
  },
  {
    title: "Benefits System Alignment",
    description:
      "Aligning benefits eligibility, enrollment rules, and plan structures across locations so employees in each state see the right options.",
  },
  {
    title: "Employee Record Structure",
    description:
      "Organizing employee records to reflect jurisdictional differences so data is accurate and reportable by state.",
  },
  {
    title: "HR Platform Setup and Configuration",
    description:
      "Setting up and configuring your HR platform so it supports your full workforce, not just the employees at headquarters.",
  },
  {
    title: "Reporting Structure Across Locations",
    description:
      "Building reporting that pulls accurate workforce data from every state so leadership gets a reliable company-wide view.",
  },
  {
    title: "Ongoing System Support",
    description:
      "Supporting your systems after setup so configuration stays current as you add employees in new states or your workforce changes.",
  },
];

// Section 3: who this is for (scenario list)
const scenarios = [
  "Your HR or payroll system was configured for your home state and has never been updated to reflect the states where you have since hired.",
  "You are setting up HR systems from scratch as a new multi-state employer and want to get the configuration right before you run your first payroll.",
  "Payroll errors keep appearing across certain locations and no one is sure whether the system is configured correctly for those states.",
  "Benefits enrollment is inconsistent across locations and employees in different states are seeing the wrong options.",
  "You are expanding into a new state and need your systems configured correctly before your first hire there.",
  "Reporting does not give you a reliable company-wide view because data from different states is structured differently.",
];

// FAQs: 5 questions eligible for FAQ schema, emitted via FaqSection
const faqs = [
  {
    question: "What is involved in HR system setup for a multi-state employer?",
    answer:
      "Multi-state HR system setup includes configuring payroll tax rules for each state, aligning benefits eligibility across locations, structuring employee records to reflect jurisdictional differences, and building reporting that works across your full workforce. The goal is a system that runs accurately in every state from the start, not just at headquarters. We help employers work through that configuration with their existing platform.",
  },
  {
    question: "Can Freedom HR Solutions help set up HR systems for a company expanding into new states?",
    answer:
      "Yes. We support multi-state employers at any stage, including businesses expanding into new states for the first time. We help review what your current system configuration covers, identify what needs to change for the new state, and support the configuration process before your first hire there.",
  },
  {
    question: "Which HR platforms does Freedom HR Solutions support for multi-state setup?",
    answer:
      "We work with employers using ADP, isolved, BambooHR, HiBob, and CustomHCM, among others. We provide independent consulting and implementation support and are not a certified or authorized reseller of any platform.",
  },
  {
    question: "What happens if our HR system was only configured for our home state?",
    answer:
      "A system configured for a single state often produces errors when applied to employees in other states, including incorrect tax withholding, missing registrations, or inaccurate benefits enrollment. We help review your current configuration, identify where it falls short for your other locations, and support the updates needed to bring it into alignment.",
  },
  {
    question: "Can Freedom HR Solutions help with ongoing HR system support after setup?",
    answer:
      "Yes. We provide ongoing system support so your configuration stays current as your workforce changes. If you add employees in a new state, update a benefits plan, or encounter a reporting issue, we help you work through it without starting from scratch.",
  },
];

// --- Page component ---
export default function MultiStateEmployersHrSystemSetupPage() {
  return (
    <>
      {/* Breadcrumbs: Home > Who We Help > Multi-State Employers > HR System Setup */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Multi-State Employers", path: "/who-we-help/multi-state-employers/" },
          { name: "HR System Setup", path: "/who-we-help/multi-state-employers/hr-system-setup/" },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For your business"
        title="HR System Setup and Implementation for Multi-State Employers"
        description="Freedom HR Solutions helps multi-state employers set up, configure, and align HR, payroll, and benefits systems so your technology supports your workforce across every jurisdiction."
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* TrustBar: renders as a section below the hero */}
      <TrustBar />

      {/* Direct answer block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Setting up HR systems for a multi-state employer involves more than installing software.
          It requires configuring payroll tax rules for each state, aligning benefits eligibility
          across locations, structuring employee records to reflect jurisdictional differences, and
          ensuring reporting pulls accurate data from every state where you have employees. Freedom
          HR Solutions helps multi-state employers build that foundation so systems work
          consistently across locations from the start.
        </p>
      </Section>

      {/* Section 1: the problem */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenge"
          title="Multi-State HR System Setup Is More Complex Than Single-State"
        />
        <p className="mt-6 leading-relaxed text-body">
          When you operate in multiple states, a basic HR system setup is not enough. Each state
          has its own payroll tax rules, withholding requirements, and sometimes different benefit
          eligibility or leave tracking obligations. If the system is not configured to reflect
          those differences from the start, errors compound over time, in payroll runs, in benefits
          enrollment, and in reporting. Multi-state employers need a setup that accounts for the
          full scope of their workforce distribution, not just their headquarters state.
        </p>
      </Section>

      {/* Section 2: what we help with */}
      <Section>
        <SectionHeading
          eyebrow="How we help"
          title="HR System Setup Support for Multi-State Operations"
        />
        <div className="mt-10">
          <FeatureGrid items={setupSupport} columns={2} variant="card" />
        </div>
      </Section>

      {/* Section 3: who this is for */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="You May Need Multi-State HR System Setup Support If"
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

      {/* Section 4: platforms we work with */}
      <Section>
        <SectionHeading
          eyebrow="Platforms we support"
          title="HR Platforms We Support for Multi-State Setup"
        />
        <p className="mt-6 leading-relaxed text-body">
          We work with employers using{" "}
          <Link href="/partners/adp-consulting-support/" className="text-brand-700 underline hover:text-brand-800">
            ADP
          </Link>
          ,{" "}
          <Link href="/partners/isolved-consulting-support/" className="text-brand-700 underline hover:text-brand-800">
            isolved
          </Link>
          ,{" "}
          <Link href="/partners/bamboohr-consulting-support/" className="text-brand-700 underline hover:text-brand-800">
            BambooHR
          </Link>
          ,{" "}
          <Link href="/partners/hibob-consulting-support/" className="text-brand-700 underline hover:text-brand-800">
            HiBob
          </Link>
          ,{" "}
          <Link href="/partners/customhcm-consulting-support/" className="text-brand-700 underline hover:text-brand-800">
            CustomHCM
          </Link>
          , and other HR and payroll platforms. We help configure these systems for multi-state
          operations, support ongoing adjustments as your workforce grows, and assist with data
          integrity and reporting across locations. We are not a certified or authorized reseller
          of any platform. We provide independent consulting and implementation support.
        </p>
      </Section>

      {/* Section 5: related services */}
      <RelatedPages
        eyebrow="Where to go next"
        title="Related Services and Support"
        tone="muted"
        items={serviceRefs([
          "system-setup-implementation",
          "hr-mri-risk-assessment",
          "hr-technology-automation",
          "reporting-data-insights",
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
          <Link href="/who-we-help/multi-state-employers/employee-handbooks/" className="text-brand-700 underline hover:text-brand-800">
            Employee Handbooks for Multi-State Employers
          </Link>
          ,{" "}
          <Link href="/who-we-help/multi-state-employers/aca-reporting-compliance/" className="text-brand-700 underline hover:text-brand-800">
            ACA Reporting for Multi-State Employers
          </Link>
          , and{" "}
          <Link href="/who-we-help/multi-state-employers/workforce-compliance/" className="text-brand-700 underline hover:text-brand-800">
            Workforce Compliance for Multi-State Employers
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
          name: "HR system setup for multi-state employers",
          description:
            "Freedom HR Solutions helps multi-state employers set up and configure HR, payroll, and benefits systems that work consistently across every state where they operate.",
          path: "/who-we-help/multi-state-employers/hr-system-setup/",
        })}
      />
    </>
  );
}
