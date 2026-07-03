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
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const PATH = "/who-we-help/growing-businesses/hr-system-implementation/";

// -- Metadata --

export const metadata = buildMetadata({
  title: "HR System Implementation for Growing Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps growing businesses implement, upgrade, and configure HR and payroll systems as they scale. Expert HRIS implementation support from vendor selection through go-live. Las Vegas and nationwide.",
  path: PATH,
});

// -- Page data --

// Section 1: Pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Current system cannot handle the volume",
    description:
      "A payroll or HR platform that worked at fifteen employees strains under forty. Errors increase, workarounds multiply, and the system becomes a bottleneck rather than an asset.",
  },
  {
    title: "Platform evaluation without a clear framework",
    description:
      "Comparing ADP, isolved, BambooHR, HiBob, and other platforms is difficult without implementation experience. The wrong choice creates a new set of problems at go-live.",
  },
  {
    title: "A previous implementation that never worked correctly",
    description:
      "Many growing businesses are living with the consequences of a rushed implementation: incomplete configuration, unresolved gaps, and workarounds that have become the process.",
  },
  {
    title: "Data spread across disconnected tools",
    description:
      "Payroll in one place, benefits in another, HR records in spreadsheets. Migrating clean data into a new system requires more planning than most teams expect.",
  },
  {
    title: "No internal HRIS implementation experience",
    description:
      "Growing businesses are usually implementing an HRIS for the first time or upgrading for the first time. The internal team has not done this before and the vendor's team focuses on their system, not the business.",
  },
  {
    title: "Go-live pressure creating payroll risk",
    description:
      "When implementation timelines compress, testing gets skipped and go-live happens before the system is ready. First-cycle payroll errors on a new platform are costly and hard to recover from.",
  },
];

// Section 2: What we handle (FeatureGrid, 3 columns, card variant)
const whatWeHandle = [
  {
    title: "Vendor Selection and Platform Evaluation",
    description:
      "We help growing businesses evaluate HR and payroll platforms based on current headcount, expected growth trajectory, payroll complexity, benefits structure, budget, and integration requirements.",
  },
  {
    title: "System Configuration",
    description:
      "We configure the HRIS to match your actual org structure, payroll rules, benefits eligibility logic, leave policies, and reporting needs, not the vendor default template.",
  },
  {
    title: "Data Migration",
    description:
      "We extract, clean, map, and validate employee records, payroll history, and benefits data so what moves into the new system is accurate and complete before go-live.",
  },
  {
    title: "Integration Setup",
    description:
      "We connect your HR, payroll, benefits, and time and attendance platforms so data flows correctly between systems and manual re-entry is eliminated.",
  },
  {
    title: "Testing and Parallel Processing",
    description:
      "We test configurations, run parallel payroll cycles where applicable, and validate results before committing to go-live so first-cycle errors are caught in advance.",
  },
  {
    title: "Training and Documentation",
    description:
      "We prepare your HR and payroll staff to use the system correctly and document key processes so the team has a reference after launch.",
  },
  {
    title: "Go-Live Support",
    description:
      "We are present at launch to resolve issues in real time and ensure the first payroll cycle on the new system runs correctly.",
  },
  {
    title: "Post-Launch Issue Resolution",
    description:
      "Go-live is not the end. We remain available after launch to resolve configuration issues, optimize the setup as usage matures, and support the team as they build confidence with the system.",
  },
];

// Section 3: The growing business implementation challenge (prose)
// Rendered inline in the JSX, not as a data array

// Section 4: Scenarios
const scenarios = [
  "You doubled headcount and your payroll system is straining under the volume",
  "You are evaluating ADP, isolved, BambooHR, or HiBob and need guidance before committing to a platform",
  "Your last HRIS implementation stalled or launched with configuration gaps that were never fixed",
  "You are moving from spreadsheets and manual processes to a real HRIS for the first time",
  "You need to migrate data from an old system and are not sure how to do it without losing records or accuracy",
  "You want go-live support so the first payroll cycle on the new system does not produce errors",
];

// Section 5: FAQs (also emits FAQ schema via FaqSection)
const pageFaqs = [
  {
    question: "What does HR system implementation support include for a growing business?",
    answer:
      "It includes vendor selection guidance, full system configuration aligned to your org structure and workflows, data migration from your current system, integration setup between HR and payroll platforms, testing before go-live, training for your team, and support during the first payroll cycle on the new system. The scope depends on your platform and the complexity of your workforce.",
  },
  {
    question: "When should a growing business replace or upgrade its HR system?",
    answer:
      "Common triggers include payroll errors increasing as headcount grows, manual workarounds consuming more time than the system saves, onboarding processes breaking down under rapid hiring, reporting that cannot answer leadership questions, and compliance requirements the current system cannot support. If the system is consistently causing problems, it is time to evaluate a replacement.",
  },
  {
    question: "Why do HRIS implementations fail at growing businesses?",
    answer:
      "Most failures come from configuration that was rushed to meet a deadline, data that migrated without validation, training that was skipped or minimal, and go-live that happened before the system was ready. Growing businesses are particularly vulnerable because they are moving fast and the internal team often does not have prior implementation experience to draw on.",
  },
  {
    question: "How does Freedom HR Solutions help with HRIS vendor selection?",
    answer:
      "We help growing businesses evaluate HR and payroll platforms based on current headcount, expected growth trajectory, payroll complexity, benefits structure, budget, and integration requirements. The goal is selecting a system that fits where the business is going, not just where it is today.",
  },
  {
    question: "Can Freedom HR Solutions help if our HRIS implementation is already in progress or went wrong?",
    answer:
      "Yes. We frequently step in to support implementations that have stalled, gone off track, or launched with configuration gaps that were never resolved. We assess where things stand and help move the project to a stable go-live or fix the issues that went live uncorrected.",
  },
  {
    question: "Which HR and payroll platforms does Freedom HR Solutions support for growing businesses?",
    answer:
      "We support implementation for ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms. Our support is platform-agnostic and focused on configuring the system to match how the business actually operates, not the vendor default template. Freedom HR Solutions provides independent consulting support and is not affiliated with or endorsed by any of the platforms referenced on this page.",
  },
];

// -- Page component --

export default function GrowingBusinessHrSystemImplementationPage() {
  return (
    <>
      {/* Breadcrumbs: 4 levels */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Growing Businesses", path: "/who-we-help/growing-businesses/" },
          { name: "HR System Implementation", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For growing businesses"
        title="HR System Implementation Support for Growing Businesses"
        description="Expert HRIS implementation support for businesses that have outgrown their current HR or payroll system. From vendor selection and configuration through data migration, testing, and go-live."
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Direct answer block */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          For a growing business, HR system implementation means getting expert help selecting
          the right HRIS or payroll platform for your current stage, configuring it to match
          your actual workflows, migrating clean data from your old system, testing before
          go-live, and having support at launch so the first payroll cycle runs correctly.
          Freedom HR Solutions provides independent HRIS implementation support for growing
          businesses in Las Vegas, Nevada, and nationwide.
        </p>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenge"
          title="Why Growing Businesses Struggle with HRIS Implementation"
          description="Growing businesses face a specific version of the HRIS problem: moving to a new system fast, without disrupting payroll or benefits."
        />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* What we handle */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="HRIS Implementation Services for Growing Businesses"
          description="From vendor selection through post-launch support, we manage the full implementation process so your team does not have to learn it the hard way."
        />
        <div className="mt-10">
          <FeatureGrid items={whatWeHandle} columns={3} variant="card" reveal />
        </div>
      </Section>

      {/* The growing business implementation challenge: prose */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Why it matters"
          title="What Makes Growing Business Implementations Different"
        />
        <div className="mt-6 max-w-2xl space-y-4 text-body leading-relaxed">
          <p>
            Growing businesses are not small businesses anymore, but they are not enterprise
            either. The HRIS vendor default template rarely fits. Payroll complexity has
            increased. Benefits may have changed. Headcount is moving fast. An implementation
            that does not account for where the business is going creates problems six months
            after go-live, when the team is too busy to fix them properly.
          </p>
          <p>
            Freedom HR Solutions configures the system for the next stage of the business, not
            just the current one. We bring the implementation experience your internal team has
            not had the chance to develop, and we manage the details that vendor implementation
            teams typically do not, including the business logic behind your payroll rules,
            benefits eligibility, and leave policies.
          </p>
        </div>
      </Section>

      {/* Scenario list */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations Where We Help"
        />
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
                <ChevronRight size={14} strokeWidth={2.4} />
              </span>
              <span className="text-body">{scenario}</span>
            </li>
          ))}
        </ul>
      </Section>

      {/* Platforms we support */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Platforms we support"
          title="Platform-Agnostic Implementation Support"
          description="We work with the platforms your business is evaluating or already using."
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
          , and other HR and payroll platforms. Our support is platform-agnostic: we focus on
          configuring the system to match how your business actually operates, not the vendor
          preferred path. Freedom HR Solutions provides independent consulting support and is
          not affiliated with or endorsed by any of the platforms referenced on this page.
        </p>
      </Section>

      {/* Related services */}
      <RelatedPages
        eyebrow="Related services"
        title="Services That Support HR System Implementation"
        description="The services growing businesses use most often alongside or after an HRIS implementation."
        items={serviceRefs([
          "hris-implementation",
          "system-setup-implementation",
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
          "growing-businesses",
          "hr-teams",
          "payroll-teams",
          "small-businesses",
        ])}
      />

      {/* FAQs: FAQ schema emitted automatically via FaqSection. Do not add a second schema node. */}
      <FaqSection faqs={pageFaqs} />

      {/* CTA Band */}
      <CtaBand
        title="Ready to implement the right HR system for your growing business?"
        description="Get expert support from vendor selection through go-live so your system is configured correctly from day one."
        primaryCta={{ label: "Request System Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* Schema: ProfessionalService */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "HR System Implementation Support for Growing Businesses",
          description:
            "Expert HRIS implementation support for growing businesses including vendor selection, configuration, data migration, testing, go-live support, and post-launch optimization.",
          path: PATH,
        })}
      />
    </>
  );
}
