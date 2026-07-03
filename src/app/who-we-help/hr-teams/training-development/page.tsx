// src/app/who-we-help/hr-teams/training-development/page.tsx
// Audience-plus-service child page: HR Teams x Training and Development Programs
// Route: /who-we-help/hr-teams/training-development/
// Service mapping: training-development-programs
// Audience mapping: hr-teams
// AI Depth: Level 3 Standard
// SEO pipeline: completed 2026-07-03, primary signal: staff development training / manager training and development

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

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "Training and Development Programs for HR Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps HR teams design and build employee training programs, manager development, compliance training, and staff development plans. Serving businesses in Las Vegas and nationwide.",
  path: "/who-we-help/hr-teams/training-development/",
});

// Page data

// Section 2: pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Training is informal and inconsistent",
    description:
      "New hires and existing staff receive different training depending on who onboards them, leaving gaps that surface during performance reviews or compliance situations.",
  },
  {
    title: "New managers are promoted without support",
    description:
      "Employees move into leadership roles without structured development, and the HR team is left to address the gaps after problems appear.",
  },
  {
    title: "Compliance training has no repeatable structure",
    description:
      "Required training on policies, conduct expectations, and workplace standards happens inconsistently and is difficult to document or verify.",
  },
  {
    title: "Training depends on one person",
    description:
      "When the employee who runs training leaves or is unavailable, the program stalls because nothing is documented well enough to hand off.",
  },
];

// Section 3: what training and development support covers (FeatureGrid, 2 columns, card variant)
const supportCovers = [
  {
    title: "Employee training program design",
    description:
      "Build structured, role-based training programs that give employees a clear path from their first day and a consistent experience regardless of who delivers it.",
  },
  {
    title: "Manager and leadership development",
    description:
      "Create development structures for employees moving into management so new leaders have practical tools, clear expectations, and support from the start.",
  },
  {
    title: "Compliance training support",
    description:
      "Help HR teams build and document required training around workplace policies, conduct standards, and other compliance-relevant topics so the program is consistent and auditable.",
  },
  {
    title: "Training documentation and repeatability",
    description:
      "Capture training content in formats that can be delivered consistently over time, updated as policies change, and handed off without rebuilding from scratch.",
  },
];

// Section 4: scenarios
const scenarios = [
  "You need to build a new hire training program that works the same way regardless of who runs it.",
  "Several employees were recently promoted to manager and there is no structured development program for them.",
  "Leadership is asking for confirmation that required compliance training has been completed across the organization.",
  "Your current training approach relies on one experienced employee and you need to document and formalize it before it is lost.",
];

// FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node anywhere on this page.
const faqs = [
  {
    question: "What does HR training and development support include?",
    answer:
      "HR training and development support covers employee training program design, manager and leadership development, compliance training structure, and training documentation. The goal is to help HR teams build programs that are consistent, repeatable, and do not depend on a single person to deliver.",
  },
  {
    question: "Can Freedom HR Solutions help design a training program for employees?",
    answer:
      "Yes. We help HR teams build role-based training programs that give employees a clear, structured path from onboarding through development milestones. The programs are designed to be documented and deliverable consistently over time.",
  },
  {
    question: "Can Freedom HR Solutions help with manager training for newly promoted employees?",
    answer:
      "Yes. We help build manager development structures for employees moving into leadership for the first time. That includes defining expectations, creating practical development content, and giving new managers tools they can use from day one.",
  },
  {
    question: "Can Freedom HR Solutions help HR teams with compliance training?",
    answer:
      "Yes. We help HR teams build and document required compliance training around workplace policies, conduct standards, and related topics so training is consistent across the organization and there is a clear record of what was delivered and when.",
  },
  {
    question: "What is the difference between training program design and delivering training?",
    answer:
      "Freedom HR Solutions helps design the structure, content, and documentation of training programs. We are not a training delivery platform or learning management system vendor. The programs we help build are designed to be delivered by your HR team or department leads using whatever format works for your organization.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "Training and Development Programs for HR Teams",
  description:
    "Freedom HR Solutions helps HR teams design and build employee training programs, manager development, compliance training, and staff development plans. Serving businesses in Las Vegas and nationwide.",
  path: "/who-we-help/hr-teams/training-development/",
});

export default function HrTeamsTrainingDevelopmentPage() {
  return (
    <>
      {/* CHANGE: Breadcrumbs for HR Teams > Training and Development child page */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "HR Teams", path: "/who-we-help/hr-teams/" },
          { name: "Training and Development", path: "/who-we-help/hr-teams/training-development/" },
        ]}
      />

      {/* CHANGE: Hero - HR Teams x Training and Development intersection */}
      <Hero
        eyebrow="For your role"
        title="Training and Development Programs for HR Teams"
        description="Support for HR teams designing employee training programs, building manager development structures, and creating compliance training that is consistent and documented."
        primaryCta={{ label: "Request Training Support", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* CHANGE: Intro paragraph - direct answer block for AEO */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Freedom HR Solutions helps HR teams design and build employee training programs, manager
          development structures, compliance training, and staff development plans. Support focuses
          on building the program: creating role-based training content, documentation, and
          repeatable delivery structures so training does not depend on a single person and does not
          start from scratch each time. Learn more about the full scope of our{" "}
          <Link
            href="/services/training-development-programs/"
            className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            training and development programs
          </Link>{" "}
          or explore our broader{" "}
          <Link
            href="/services/talent-workforce-development/"
            className="text-brand-700 underline underline-offset-2 hover:text-brand-900"
          >
            talent and workforce development
          </Link>{" "}
          support.
        </p>
      </Section>

      {/* CHANGE: Pain points section - four training challenges HR teams face */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="What HR teams are trying to fix" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: What support covers - four capability areas */}
      <Section>
        <SectionHeading eyebrow="What we provide" title="What training and development support covers" />
        <div className="mt-10">
          <FeatureGrid items={supportCovers} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Scenarios section */}
      <Section tone="muted">
        <SectionHeading eyebrow="Sound familiar?" title="Situations we help HR teams with" />
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

      {/* CHANGE: Related services - talent and workforce development cluster */}
      <RelatedPages
        eyebrow="Where to start"
        title="Related services"
        description="The services most relevant to your situation."
        items={serviceRefs([
          "training-development-programs",
          "recruiting-onboarding-solutions",
          "employee-engagement-performance-management",
          "employee-handbook-creation-management",
        ])}
        tone="muted"
      />

      {/* CHANGE: Related audiences - hr-teams cluster */}
      <RelatedPages
        eyebrow="Who we help"
        title="Related audiences"
        items={[
          {
            title: "HR Teams",
            href: "/who-we-help/hr-teams/",
            description:
              "Support for system implementation, reporting, open enrollment, and technical issues.",
          },
          {
            title: "Growing Businesses",
            href: "/who-we-help/growing-businesses/",
            description:
              "HR systems, payroll, benefits, and compliance support that scales as your headcount grows.",
          },
          {
            title: "HR Teams: Technical Support",
            href: "/who-we-help/hr-teams/technical-support/",
            description:
              "Ongoing technical support for HR teams managing system issues and configuration drift.",
          },
        ]}
      />

      {/* CHANGE: 5 FAQs, training and development AEO intent. FaqSection emits FAQ schema. */}
      <FaqSection faqs={faqs} />

      {/* CHANGE: Page-specific CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request Training Support",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* CHANGE: ProfessionalService schema for this intersection page */}
      <SchemaScript schema={schema} />
    </>
  );
}
