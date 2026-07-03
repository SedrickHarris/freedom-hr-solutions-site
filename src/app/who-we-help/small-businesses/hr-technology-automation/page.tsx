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

const PATH = "/who-we-help/small-businesses/hr-technology-automation/";

// ── Metadata ──────────────────────────────────────────────────────────────────

export const metadata = buildMetadata({
  title: "HR Technology Support for Small Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps small businesses implement, configure, connect, and support HR and payroll systems without a dedicated IT or HR technology team. Las Vegas and nationwide.",
  path: PATH,
});

// ── Page data ─────────────────────────────────────────────────────────────────

// Section 1 - Pain points (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "System chosen under pressure, never fully configured",
    description:
      "Many small businesses select a platform in a hurry and launch before the setup is complete. The gaps stay in place until they cause recurring problems.",
  },
  {
    title: "Manual workarounds replacing platform features",
    description:
      "When configuration is incomplete, teams build workarounds instead. Over time the workarounds become the process, and the platform sits underused.",
  },
  {
    title: "Payroll and HR data in disconnected tools",
    description:
      "Separate systems for HR, payroll, and benefits force manual data entry in multiple places. Errors compound and reconciliation takes time your team does not have.",
  },
  {
    title: "Reports that require manual assembly",
    description:
      "If your system cannot produce the numbers leadership needs without someone pulling data by hand, the reporting infrastructure is not configured correctly.",
  },
  {
    title: "No one internally who owns the technology",
    description:
      "Without a dedicated HR or IT resource, system issues go unresolved, configurations drift, and updates get skipped. Technology stops working for the business.",
  },
  {
    title: "Implementation stalled or went live with gaps",
    description:
      "Partial implementations are common. The system is live but key features are disabled, data is incomplete, or integrations were never finished.",
  },
];

// Section 2 - What we handle (FeatureGrid, 3 columns, card variant)
const whatWeHandle = [
  {
    title: "System Selection and Evaluation",
    description:
      "We help you evaluate HR and payroll platforms based on headcount, payroll structure, benefits, budget, and integration needs so the system fits how your business operates.",
  },
  {
    title: "Setup, Configuration, and Data Migration",
    description:
      "We handle the full implementation process: org structure setup, pay rules, deduction configuration, data migration, validation, and go-live preparation.",
  },
  {
    title: "Payroll and HR System Integration",
    description:
      "We connect your HR, payroll, and benefits platforms so data flows cleanly between systems and manual re-entry is eliminated.",
  },
  {
    title: "Workflow Automation Setup",
    description:
      "We identify repetitive manual steps across onboarding, approvals, time-off, and data updates and configure automation so your team focuses on higher-value work.",
  },
  {
    title: "Reporting and Dashboards",
    description:
      "We build the reports and dashboards your leadership team actually needs, without requiring manual data assembly each time a question is asked.",
  },
  {
    title: "Ongoing Technical Support and Issue Resolution",
    description:
      "We provide continued support after go-live: resolving configuration issues, handling system updates, and making sure the technology keeps pace with how your business grows.",
  },
  {
    title: "System Audits and Optimization",
    description:
      "We review existing configurations to find what is missing, misconfigured, or underused and deliver a clear plan for getting more value from the systems you already pay for.",
  },
];

// Section 3 - Scenarios (trigger list)
const scenarios = [
  "You are running payroll and HR on a system that was set up years ago and no one is sure if it is configured correctly",
  "You evaluated platforms but never made it through a complete implementation",
  "Your HR and payroll systems do not communicate and your team is entering data in multiple places",
  "You are paying for an HR platform and using a fraction of what it can do",
  "You need reports your system should be able to produce but no one knows how to build them",
  "You are adding headcount and need to get the HR technology foundation right before the gaps get harder to fix",
];

// Section 4 - FAQs (also schema emitted via FaqSection)
const pageFaqs = [
  {
    question: "What does HR technology support look like for a small business?",
    answer:
      "It means getting expert help with the systems your business uses to manage HR and payroll: selecting the right platform, configuring it correctly, connecting it to other tools, building the reports you need, and resolving issues when they come up. Small businesses get the same level of system support as larger companies without needing an internal IT or HR technology team to manage it.",
  },
  {
    question: "Does Freedom HR Solutions help small businesses choose an HR or payroll system?",
    answer:
      "Yes. We help small businesses evaluate HR and payroll platforms based on headcount, payroll complexity, benefits structure, budget, and integration requirements so the system selected fits how the business actually operates, rather than requiring the business to adapt to the platform.",
  },
  {
    question: "What HR workflows can be automated for a small business?",
    answer:
      "Onboarding steps, approval routing, time-off requests, data updates, and parts of payroll and benefits processes are commonly automated. The right targets depend on the platform in use and where manual effort is highest. We assess your current setup before making recommendations.",
  },
  {
    question: "Can Freedom HR Solutions help if our HR system was never set up correctly?",
    answer:
      "Yes. We frequently work with small businesses whose HR or payroll system was configured under time pressure, never finished, or launched with gaps that have caused recurring issues. We audit the current configuration, identify what needs to be corrected, and help resolve it without requiring a full reimplementation.",
  },
  {
    question: "Does Freedom HR Solutions help small businesses that do not have an IT team?",
    answer:
      "Yes. Most small businesses do not have dedicated IT or HR technology staff. We serve as the HR technology resource: handling configuration, integration, reporting setup, and ongoing support so your team is not managing these issues alone.",
  },
  {
    question: "How is HR technology consulting different from just buying HR software?",
    answer:
      "Software provides the platform. HR technology consulting provides the expertise to set it up correctly, configure it for your specific workflows, connect it to other systems, and support it when issues arise. Many small businesses buy the right software and still end up with manual workarounds because the implementation was incomplete or misconfigured.",
  },
];

// ── Page component ─────────────────────────────────────────────────────────────

export default function SmallBusinessHrTechnologyAutomationPage() {
  return (
    <>
      {/* Breadcrumbs - 4 levels */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Small Businesses", path: "/who-we-help/small-businesses/" },
          { name: "HR Technology and Automation", path: PATH },
        ]}
      />

      {/* Hero */}
      <Hero
        eyebrow="For small businesses"
        title="HR Technology and Automation Support for Small Businesses"
        description="HR system setup, configuration, workflow automation, and ongoing technology support for small businesses that do not have an internal IT or HR technology team."
        primaryCta={{ label: "Request HR Technology Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Direct answer block */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          HR technology support for small businesses means getting expert help selecting,
          implementing, configuring, and maintaining the HR and payroll systems your business
          runs on, without needing an internal IT team or HR technology specialist. Freedom HR
          Solutions helps small businesses in Las Vegas, Nevada, and nationwide get more out of
          their HR and payroll technology, or get the right system in place for the first time.
        </p>
      </Section>

      {/* Pain points */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenges"
          title="Common HR Technology Problems for Small Businesses"
          description="Small businesses carry the same HR technology decisions as larger employers but rarely have the staff to manage them."
        />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* What we handle */}
      <Section>
        <SectionHeading
          eyebrow="What we do"
          title="HR Technology Services for Small Businesses"
          description="From system selection through ongoing support, we handle the technology side so your team handles the business."
        />
        <div className="mt-10">
          <FeatureGrid items={whatWeHandle} columns={3} variant="card" reveal />
        </div>
      </Section>

      {/* Scenario trigger list */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations We Help With"
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
      <Section>
        <SectionHeading
          eyebrow="Platforms we support"
          title="Platform-Agnostic HR Technology Support"
          description="We work with the systems you already have, or help you select the right one if you are starting fresh."
        />
        <p className="mt-5 text-body leading-relaxed max-w-2xl">
          Freedom HR Solutions supports HR technology work across{" "}
          <Link href="/partners/adp-consulting-support/" className="font-semibold text-brand-700 hover:text-brand-800">
            ADP
          </Link>
          ,{" "}
          <Link href="/partners/isolved-consulting-support/" className="font-semibold text-brand-700 hover:text-brand-800">
            isolved
          </Link>
          ,{" "}
          <Link href="/partners/bamboohr-consulting-support/" className="font-semibold text-brand-700 hover:text-brand-800">
            BambooHR
          </Link>
          ,{" "}
          <Link href="/partners/hibob-consulting-support/" className="font-semibold text-brand-700 hover:text-brand-800">
            HiBob
          </Link>
          ,{" "}
          <Link href="/partners/customhcm-consulting-support/" className="font-semibold text-brand-700 hover:text-brand-800">
            CustomHCM
          </Link>
          , and other HR and payroll platforms. We are platform-agnostic: our focus is on
          getting the system configured correctly for how your business actually operates, not on
          a single vendor preferred approach. Freedom HR Solutions provides independent consulting
          support and is not affiliated with or endorsed by any of the platforms referenced on
          this page.
        </p>
      </Section>

      {/* Related services */}
      <RelatedPages
        eyebrow="Where to start"
        title="Recommended Services for Small Business HR Technology"
        description="The services most relevant to HR technology setup and support for small businesses."
        items={serviceRefs([
          "hr-mri-risk-assessment",
          "system-setup-implementation",
          "system-audits-improvements",
          "reporting-data-insights",
          "ongoing-technical-support",
          "hr-technology-automation",
        ])}
        tone="muted"
      />

      {/* Related audiences */}
      <RelatedPages
        eyebrow="Also relevant for"
        title="Related Audiences"
        items={audienceRefs([
          "small-businesses",
          "growing-businesses",
          "hr-teams",
          "companies-without-hr-departments",
        ])}
      />

      {/* FAQs - FAQ schema emitted automatically by FaqSection. Do not add a second schema node. */}
      <FaqSection faqs={pageFaqs} />

      {/* CTA Band */}
      <CtaBand
        title="Ready to get your HR technology working for your business?"
        description="Start with a structured review of your HR and payroll systems and find out where the gaps are before they grow."
        primaryCta={{ label: "Request HR Technology Review", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* Schema - ProfessionalService */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "HR Technology and Automation Support for Small Businesses",
          description:
            "HR system setup, configuration, workflow automation, and ongoing technology support for small businesses without an internal IT or HR technology team.",
          path: PATH,
        })}
      />
    </>
  );
}
