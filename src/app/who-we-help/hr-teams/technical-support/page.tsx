// src/app/who-we-help/hr-teams/technical-support/page.tsx
// Audience-plus-service child page: HR Teams x Ongoing Technical Support
// Route: /who-we-help/hr-teams/technical-support/
// Service mapping: ongoing-technical-support
// Audience mapping: hr-teams
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
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { serviceRefs } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

// Metadata
export const metadata: Metadata = buildMetadata({
  title: "HR System Technical Support for HR Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions provides ongoing technical support for HR teams managing system issues, configuration drift, and platform troubleshooting. Serving businesses in Las Vegas and nationwide.",
  path: "/who-we-help/hr-teams/technical-support/",
});

// Page data

// Section 2: pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Issues with no clear owner",
    description:
      "HR teams are responsible for daily operations and systems simultaneously, leaving technical issues without the bandwidth to diagnose them properly.",
  },
  {
    title: "Configuration drift over time",
    description:
      "System settings change as policies, plans, and staff evolve, and without regular maintenance they fall out of sync with what the business actually needs.",
  },
  {
    title: "No internal technical escalation path",
    description:
      "When a system error surfaces, HR teams often have no reliable internal resource to escalate to and depend entirely on vendor support queues.",
  },
  {
    title: "Post-implementation gaps",
    description:
      "A new platform handed off without a support plan leaves the HR team managing issues they were never trained to resolve.",
  },
];

// Section 3: what ongoing technical support covers (FeatureGrid, 2 columns, card variant)
const supportCovers = [
  {
    title: "Troubleshooting and issue resolution",
    description:
      "Diagnose and resolve HR, payroll, and benefits system issues as they come up so problems do not linger or escalate into larger errors.",
  },
  {
    title: "Configuration updates and maintenance",
    description:
      "Keep system settings current as your policies, plans, and workforce structure change so configurations reflect how the business actually operates.",
  },
  {
    title: "Proactive system monitoring",
    description:
      "Periodic reviews to catch configuration gaps, data issues, and workflow problems before they reach payroll or benefits processing.",
  },
  {
    title: "Platform-agnostic support",
    description:
      "Support delivered across the HR and payroll platforms your team already uses, including ADP, isolved, BambooHR, HiBob, and others.",
  },
];

// Section 4: scenarios
const scenarios = [
  "Your HR system has recurring configuration issues and the vendor support queue takes days to respond.",
  "A system update changed how a workflow behaved and no one on the team has time to investigate.",
  "You went live on a new platform six months ago and configurations set at launch are no longer accurate.",
  "Your HR team manages daily operations and technical issues at the same time, and neither gets the attention it needs.",
];

// FAQs: FaqSection emits FAQ schema. Do not add a second FAQ schema node anywhere on this page.
const faqs = [
  {
    question: "What does ongoing HR system technical support include?",
    answer:
      "Ongoing HR system technical support includes troubleshooting system issues as they come up, keeping configurations current as your policies and plans change, performing periodic reviews to catch problems before they escalate, and providing a reliable resource your team can reach when technical questions arise.",
  },
  {
    question: "Can Freedom HR Solutions provide ongoing support for the HR platform we already use?",
    answer:
      "Yes. We provide technical support across the HR and payroll platforms your team currently uses, including ADP, isolved, BambooHR, HiBob, and others. You do not need to change platforms to work with us.",
  },
  {
    question: "How is ongoing technical support different from calling the software vendor?",
    answer:
      "Vendor support handles bugs and product issues within their platform. Ongoing consulting support covers configuration problems, workflow issues, data integrity questions, and process improvements that are specific to how your organization uses the system. These are areas vendors typically do not troubleshoot on your behalf.",
  },
  {
    question: "Can ongoing technical support help prevent HR system errors from affecting payroll?",
    answer:
      "Yes. Proactive configuration reviews and monitoring help catch issues before they reach payroll processing. When errors do occur, having an established support relationship means faster diagnosis and resolution compared to starting fresh each time.",
  },
  {
    question: "Can an HR team use ongoing technical support even if they already have internal IT staff?",
    answer:
      "Yes. Internal IT typically handles infrastructure and hardware. HR system technical support covers HR, payroll, and benefits platform configuration, data accuracy, and workflow issues, which is a different domain that most IT teams are not staffed to support at the application level.",
  },
];

// Schema
const schema = professionalServiceSchema({
  name: "HR System Technical Support for HR Teams",
  description:
    "Freedom HR Solutions provides ongoing technical support for HR teams managing system issues, configuration drift, and platform troubleshooting. Serving businesses in Las Vegas and nationwide.",
  path: "/who-we-help/hr-teams/technical-support/",
});

export default function HrTeamsTechnicalSupportPage() {
  return (
    <>
      {/* CHANGE: Breadcrumbs for HR Teams > Technical Support child page */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "HR Teams", path: "/who-we-help/hr-teams/" },
          { name: "Technical Support", path: "/who-we-help/hr-teams/technical-support/" },
        ]}
      />

      {/* CHANGE: Hero - HR Teams x Technical Support intersection */}
      <Hero
        eyebrow="For your role"
        title="Ongoing HR System Technical Support for HR Teams"
        description="A reliable external resource for HR teams managing system issues, configuration drift, and platform troubleshooting across HR, payroll, and benefits systems."
        primaryCta={{ label: "Request Technical Support", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* CHANGE: Intro paragraph - direct answer block for AEO */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Freedom HR Solutions provides ongoing technical support for internal HR teams managing system issues, configuration drift, and troubleshooting across HR, payroll, and benefits platforms. Support covers routine issue resolution, configuration maintenance, proactive monitoring, and post-implementation help so HR teams always have a reliable external resource to turn to. We work in the{" "}
          <Link href="/services/ongoing-technical-support/" className="text-brand-700 underline underline-offset-2 hover:text-brand-900">
            ongoing technical support
          </Link>{" "}
          model alongside the platforms your team already uses.
        </p>
      </Section>

      {/* CHANGE: Pain points section - four challenges HR teams face */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="What HR teams run into" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: What support covers - four capability areas */}
      <Section>
        <SectionHeading eyebrow="What we provide" title="What ongoing technical support covers" />
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

      {/* CHANGE: Related services - ongoing-technical-support cluster */}
      <RelatedPages
        eyebrow="Where to start"
        title="Related services"
        description="The services most relevant to your situation."
        items={serviceRefs([
          "ongoing-technical-support",
          "technical-issue-resolution",
          "system-audits-improvements",
          "open-enrollment-setup",
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
            title: "Payroll Teams",
            href: "/who-we-help/payroll-teams/",
            description:
              "Resolve payroll system issues, improve accuracy, and support multi-state payroll workflows.",
          },
          {
            title: "Benefits Administrators",
            href: "/who-we-help/benefits-administrators/",
            description:
              "Open enrollment support, eligibility management, and benefits workflow consulting.",
          },
        ]}
      />

      {/* CHANGE: 5 FAQs, HR system technical support AEO intent. FaqSection emits FAQ schema. */}
      <FaqSection faqs={faqs} />

      {/* CHANGE: Page-specific CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request Technical Support",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* CHANGE: ProfessionalService schema for this intersection page */}
      <SchemaScript schema={schema} />
    </>
  );
}
