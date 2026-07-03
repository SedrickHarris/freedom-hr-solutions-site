// src/app/who-we-help/hr-teams/system-implementation/page.tsx
// Audience-plus-service intersection page: HR Teams x System Implementation
// Route: /who-we-help/hr-teams/system-implementation/
// Service anchor: system-setup-implementation
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
import { serviceRefs, audienceRefs } from "@/lib/links";
import { professionalServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

const PATH = "/who-we-help/hr-teams/system-implementation/";

// --- Metadata ---

export const metadata: Metadata = buildMetadata({
  title: "HR System Implementation Support for HR Teams | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps HR teams manage HRIS implementation, system configuration, data migration, user training, and go-live readiness. Hands-on support so your rollout does not fall on one person. Las Vegas and nationwide.",
  path: PATH,
});

// --- Page data ---

// Section 1: Pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Implementation project added to an already full workload",
    description:
      "The rollout gets assigned to HR with no reduction in existing responsibilities. Timelines slip, configurations are rushed, and daily work suffers while both compete for the same attention.",
  },
  {
    title: "Vendor configuration templates that do not fit your business",
    description:
      "Default setup wizards do not account for your specific pay rules, deduction structures, or benefits eligibility logic. The system goes live technically correct but operationally wrong.",
  },
  {
    title: "Data migration done without enough validation",
    description:
      "Employee records, historical payroll data, and benefits enrollments migrate with errors that are not caught until the system is live and processing.",
  },
  {
    title: "No internal resource with implementation experience",
    description:
      "HR teams implement an HRIS once every several years. The expertise is not something most teams develop internally, which means the same avoidable mistakes happen on each rollout.",
  },
  {
    title: "User adoption problems after go-live",
    description:
      "Training was thin, documentation was generic, and employees are calling HR with basic system questions because the rollout did not include a practical adoption plan.",
  },
  {
    title: "Post-go-live issues that nobody has bandwidth to resolve",
    description:
      "Configuration gaps that were not caught in testing become recurring problems after launch, and there is no dedicated resource to fix them without pulling staff off other work again.",
  },
];

// Section 2: How we help (FeatureGrid, 2 columns, card variant)
const howWeHelp = [
  {
    title: "Configuration and Setup",
    description:
      "We handle HRIS configuration based on how your business actually operates, not the vendor default template. Pay rules, deduction structures, benefits eligibility, and leave policies are set up correctly before testing begins.",
  },
  {
    title: "Data Migration and Validation",
    description:
      "We prepare, map, and validate employee records, payroll history, and benefits data before migration so errors are caught before the system goes live, not after.",
  },
  {
    title: "Testing and Go-Live Readiness",
    description:
      "We run structured testing across payroll rules, benefits enrollment, and reporting to identify configuration issues before go-live and confirm the system is ready for production.",
  },
  {
    title: "User Training and Adoption Support",
    description:
      "We build practical training for the HR team and employees so the system is used correctly from day one, not worked around because the rollout did not include adequate documentation.",
  },
  {
    title: "Vendor Coordination",
    description:
      "We work alongside your platform vendor's implementation team, translating business requirements into configuration decisions and managing the details that fall outside the vendor's standard scope.",
  },
  {
    title: "Post-Go-Live Support",
    description:
      "We stay available after go-live to resolve configuration issues, answer system questions, and make sure the rollout holds up once real payroll and benefits cycles run through it.",
  },
];

// Section 3: Scenarios
const scenarios = [
  "You are managing an HRIS rollout and the vendor's timeline does not account for how long your configuration actually takes.",
  "Your team is implementing a new system and no one internally has done this before.",
  "The system went live but payroll rules and benefits eligibility are not configured correctly.",
  "You need to migrate employee data to a new platform and want validation before the cutover.",
  "Go-live is approaching and user training has not been planned or resourced.",
  "A system upgrade is coming and your team does not have capacity to manage it alongside daily HR work.",
];

// Section 4: FAQs (FAQ schema emitted via FaqSection; no second schema node)
const pageFaqs = [
  {
    question: "Can Freedom HR Solutions support an HR team during an HRIS rollout?",
    answer:
      "Yes. We work as hands-on implementation support for HR teams, handling configuration, data migration, testing, and user training so your staff does not have to manage the rollout on top of their regular workload.",
  },
  {
    question: "How long does an HRIS implementation typically take?",
    answer:
      "Implementation timelines vary depending on the platform, the complexity of your payroll and benefits structure, and how much data is being migrated. Most mid-size implementations run between two and six months from kickoff to go-live. Configurations that are more complex or that involve significant data migration typically take longer.",
  },
  {
    question: "What is included in HRIS configuration support?",
    answer:
      "Configuration support covers setting up your organizational structure, pay rules, deduction codes, benefits eligibility rules, leave policies, and reporting so the system reflects how your business actually operates before testing and go-live.",
  },
  {
    question: "How do you prepare employee data for a system migration?",
    answer:
      "We audit the data in your current system, clean up records, map fields to the new platform's structure, validate the migration in a test environment, and confirm accuracy before the production cutover so errors do not carry over into live payroll and benefits processing.",
  },
  {
    question: "What happens if configuration issues are found after go-live?",
    answer:
      "We stay available post-go-live to identify root causes, correct configuration gaps, and validate fixes so issues are resolved before they affect payroll accuracy or benefits enrollment.",
  },
  {
    question: "Do you work with specific HR or payroll platforms?",
    answer:
      "We provide implementation support for ADP, isolved, BambooHR, HiBob, and CustomHCM, as well as other HR and payroll platforms. Freedom HR Solutions provides independent consulting support and is not affiliated with or endorsed by any of the platforms referenced on this page.",
  },
];

// --- Page component ---

export default function HrTeamsSystemImplementationPage() {
  return (
    <>
      {/* Breadcrumbs: 4 levels */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "HR Teams", path: "/who-we-help/hr-teams/" },
          { name: "System Implementation", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For HR teams"
        title="HR System Implementation Support for HR Teams"
        description="Implementation projects land on HR teams that are already at capacity. We handle the configuration, migration, training, and go-live work so your team stays focused without the rollout falling through the gaps."
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Direct answer block (AEO) */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Implementation projects get handed to HR teams that are already running at full
          capacity. The vendor provides a project manager, a timeline, and a default
          configuration template. What they do not provide is someone who understands how your
          payroll rules, benefits eligibility logic, and leave policies actually work, and who
          will make sure the system reflects that before go-live. HR teams end up owning the
          configuration work on top of everything else, with no bandwidth to do it thoroughly.
        </p>
        <div className="mt-8 rounded-card border border-border bg-muted p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">
            How does Freedom HR Solutions support HR teams during system implementation?
          </p>
          <p className="mt-2 text-base leading-relaxed text-body">
            Freedom HR Solutions works alongside HR teams during HRIS and HR platform rollouts,
            handling the hands-on configuration, data migration, testing, and user training work
            that pulls staff off their regular responsibilities. We manage the project details so
            your team stays operational during the transition and the system goes live correctly.
          </p>
        </div>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenges"
          title="Why HRIS Implementation Strains HR Teams"
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
          title="HRIS Implementation Support for HR Teams"
        />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* Platform support block with inline partner links */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Platforms we support"
          title="Platform-Agnostic Implementation Support"
        />
        <p className="mt-5 max-w-2xl text-body leading-relaxed">
          Freedom HR Solutions supports HRIS implementation for{" "}
          <Link
            href="/partners/adp-consulting-support/"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            ADP
          </Link>
          ,{" "}
          <Link
            href="/partners/isolved-consulting-support/"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            isolved
          </Link>
          ,{" "}
          <Link
            href="/partners/bamboohr-consulting-support/"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            BambooHR
          </Link>
          ,{" "}
          <Link
            href="/partners/hibob-consulting-support/"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            HiBob
          </Link>
          ,{" "}
          <Link
            href="/partners/customhcm-consulting-support/"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            CustomHCM
          </Link>
          , and other HR and payroll platforms. We work with the system your team is
          implementing and focus on configuring it to match how your business actually operates,
          not the vendor default path. Freedom HR Solutions provides independent consulting
          support and is not affiliated with or endorsed by any of the platforms referenced on
          this page.
        </p>
      </Section>

      {/* Related services */}
      <RelatedPages
        eyebrow="Related services"
        title="Services That Support HR System Implementation"
        description="The services HR teams use most often alongside or after an HRIS implementation."
        items={serviceRefs([
          "system-setup-implementation",
          "hris-implementation",
          "hr-technology-automation",
          "system-audits-improvements",
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
          "growing-businesses",
          "payroll-teams",
        ])}
      />

      {/* FAQs: FAQ schema emitted via FaqSection. Do not add a second schema node. */}
      <FaqSection faqs={pageFaqs} />

      {/* CTA Band */}
      <CtaBand
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* ProfessionalService schema. BreadcrumbList emitted by Breadcrumbs. FAQ schema emitted by FaqSection. */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "HR system implementation support for HR teams",
          description:
            "Freedom HR Solutions helps HR teams manage HRIS implementation, system configuration, data migration, user training, and go-live readiness. Hands-on support so your rollout does not fall on one person.",
          path: PATH,
        })}
      />
    </>
  );
}
