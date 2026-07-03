import type { Metadata } from "next";
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
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "HR Process Automation for Growing Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps growing businesses identify and automate repetitive HR workflows, connect systems, and reduce manual work so HR operations keep pace with headcount. Las Vegas and nationwide.",
  path: "/who-we-help/growing-businesses/process-automation/",
});

// CHANGE: Pain point cards - manual workflow friction specific to growing businesses
const painPoints = [
  {
    title: "Manual workflows that break under volume",
    description:
      "Processes that worked at ten or fifteen employees start failing when hiring accelerates. What was manageable by hand becomes a source of delays, errors, and inconsistency as the team grows.",
  },
  {
    title: "Data rekeyed across systems that do not connect",
    description:
      "When HR, payroll, and benefits platforms do not share data, someone has to move it manually. That creates rekeying errors, inconsistent records, and time spent on work that should not require human effort.",
  },
  {
    title: "Onboarding and approval processes that slow everything down",
    description:
      "Growing businesses often run onboarding and approvals through email, spreadsheets, or informal handoffs. As headcount increases, these processes become slower, less consistent, and harder to track.",
  },
  {
    title: "No documentation of how processes actually work",
    description:
      "When workflows live in one person's head, growth creates risk. If that person leaves or the team expands, the process breaks. Undocumented workflows are also hard to automate and impossible to improve systematically.",
  },
];

// CHANGE: Scenarios - manual HR workflow and automation situations for growing businesses
const scenarios = [
  "Your HR team is spending significant time each week on tasks that feel like they should run automatically.",
  "New hires are waiting longer for onboarding steps because the process depends on one person manually moving information between systems.",
  "Your HR and payroll platforms do not share data and someone has to rekey information after every payroll cycle.",
  "You know there are automation opportunities in your current systems but no one has had time to identify or implement them.",
  "A key person who managed a critical HR workflow left, and the process has not recovered because it was never documented.",
  "Leadership wants HR to operate more efficiently as the team grows, but the current workflows are not built to scale.",
];

// CHANGE: How we help - four cards specific to process automation for growing businesses
const howWeHelp = [
  {
    title: "HR workflow assessment",
    description:
      "We map your current HR workflows to identify where manual effort is highest, where errors are most common, and where automation would have the most impact for your team size and systems.",
  },
  {
    title: "Process automation support",
    description:
      "We help configure and implement automation within your existing HR, payroll, and benefits platforms so repetitive manual steps are handled by the system rather than by your team.",
  },
  {
    title: "System connection and data flow",
    description:
      "We review how your HR, payroll, and benefits platforms share data and help improve the connections so information flows cleanly without requiring manual transfers or rekeying between systems.",
  },
  {
    title: "Workflow documentation",
    description:
      "We help document your HR processes so the knowledge is not tied to one person, the workflow can be trained and repeated, and future automation or improvement builds on a clear foundation.",
  },
];

// CHANGE: FAQs - 6 AEO-ready questions targeting HR automation/growing business intent
const faqs = [
  {
    question: "How do you automate HR processes in a growing business?",
    answer:
      "Automating HR processes starts with identifying which workflows consume the most manual effort and where errors are most common. From there, the focus shifts to configuring automation within your existing HR, payroll, and benefits platforms before evaluating whether new tools are needed. Freedom HR Solutions helps growing businesses map their current workflows, find the right automation targets, and implement improvements using the systems already in place.",
  },
  {
    question: "What HR workflows can be automated?",
    answer:
      "Common targets include onboarding task sequences, approval routing, data updates between HR and payroll systems, benefits enrollment steps, reporting generation, and offboarding checklists. The right targets depend on which systems your business uses, where manual effort is highest, and which workflows are creating the most friction as your team grows.",
  },
  {
    question: "How does HR automation reduce errors in a growing business?",
    answer:
      "Most HR errors in growing businesses come from manual steps: rekeying data between systems, following up on approvals by email, or running processes differently each time because they are not documented. Automating those steps removes the opportunity for inconsistency and reduces the time your team spends on correction and rework.",
  },
  {
    question: "Do we need new software to automate our HR workflows?",
    answer:
      "Not necessarily. Most HR platforms already include automation capabilities that go unused because they were never configured or the team did not have time to explore them. Freedom HR Solutions evaluates what your current systems can do before recommending any changes. Many growing businesses find significant improvement by better using the tools they already pay for.",
  },
  {
    question: "What causes HR workflow bottlenecks in a growing business?",
    answer:
      "The most common causes are processes that were designed for a smaller team and never updated, manual handoffs between systems that should share data automatically, approval chains that depend on email, and workflows that are undocumented and therefore inconsistent. Growth amplifies all of these because volume increases while the underlying process stays the same.",
  },
  {
    question: "How is HR process automation different from HR system implementation?",
    answer:
      "HR system implementation is about standing up a new platform and configuring it correctly from the start. HR process automation is about improving how your existing systems and workflows operate, identifying manual steps that can be eliminated, and connecting platforms that are not sharing data efficiently. The two can overlap, but automation work often happens within systems that are already in place rather than requiring a new implementation.",
  },
];

// CHANGE: Schema - ProfessionalService for this specific intersection page
const schema = professionalServiceSchema({
  name: "HR process automation support for growing businesses",
  description:
    "Freedom HR Solutions helps growing businesses identify and automate repetitive HR workflows, connect systems, and reduce manual work so HR operations keep pace with headcount. Las Vegas and nationwide.",
  path: "/who-we-help/growing-businesses/process-automation/",
});

export default function GrowingBusinessesProcessAutomationPage() {
  return (
    <>
      {/* CHANGE: 4-level breadcrumb - Home > Who We Help > Growing Businesses > HR Process Automation */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Growing Businesses", path: "/who-we-help/growing-businesses/" },
          {
            name: "HR Process Automation",
            path: "/who-we-help/growing-businesses/process-automation/",
          },
        ]}
      />

      {/* CHANGE: Hero - HR process automation framing with page-specific CTAs */}
      <Hero
        eyebrow="For your business"
        title="HR Process Automation Support for Growing Businesses"
        description="Identify the manual HR workflows slowing your team down, automate the repetitive ones, and build processes that hold up as your headcount grows."
        primaryCta={{
          label: "Request HR Technology Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* CHANGE: Direct answer block - manual workflow friction framing for growing businesses */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Manual HR workflows that worked at a smaller headcount become real bottlenecks as a
          business grows. Onboarding steps that one person managed by hand cannot scale to thirty
          new hires a year. Approval chains handled by email fail when the team doubles. Data that
          was rekeyed between two systems once a week becomes a daily source of errors. Freedom HR
          Solutions helps growing businesses identify which HR workflows are creating the most
          friction, find the right opportunities for automation, and build processes that are
          documented and repeatable. We work with the systems you already have, and we help you get
          more out of them before recommending anything new. We work with growing businesses in Las
          Vegas, across Nevada, and nationwide.
        </p>
      </Section>

      {/* CHANGE: Pain points section */}
      <Section tone="muted">
        <SectionHeading eyebrow="The challenges" title="Common challenges we hear" />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Scenarios section */}
      <Section>
        <SectionHeading eyebrow="Sound familiar?" title="Situations we help with" />
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

      {/* CHANGE: How we help section */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="How we help"
          title="HR process automation support for growing teams"
        />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Recommended services - HR automation cluster */}
      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services"
        description="The services most relevant to your situation."
        items={[
          {
            title: "HR Technology and Automation",
            href: "/services/hr-technology-automation/",
            description:
              "Automate repetitive workflows, connect HR and payroll systems, and improve the reporting your team depends on.",
          },
          {
            title: "Streamlining HR Processes",
            href: "/services/streamlining-processes/",
            description:
              "Map your current HR workflows, remove redundant manual steps, and document the improvements so they hold up over time.",
          },
          {
            title: "System Audits and Improvements",
            href: "/services/system-audits-improvements/",
            description:
              "A structured review of your existing HR systems to surface configuration gaps and underused automation capabilities.",
          },
          {
            title: "System Setup and Implementation",
            href: "/services/system-setup-implementation/",
            description:
              "Stand up HR and payroll systems correctly from the start so workflows are built on a clean foundation.",
          },
          {
            title: "Reporting and Data Insights",
            href: "/services/reporting-data-insights/",
            description:
              "Build HR and payroll reports that run without manual data assembly so leaders have reliable visibility.",
          },
        ]}
        tone="muted"
      />

      {/* CHANGE: Related audiences - growing businesses cluster */}
      <RelatedPages
        eyebrow="Who we help"
        title="Related audiences"
        items={[
          {
            title: "Growing Businesses",
            href: "/who-we-help/growing-businesses/",
            description:
              "HR systems, payroll, benefits, and compliance support that scales as your headcount grows.",
          },
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
        ]}
      />

      {/* CHANGE: 6 FAQs - HR automation/growing business AEO intent. FaqSection emits FAQ schema. */}
      <FaqSection faqs={faqs} />

      {/* CHANGE: Page-specific CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request HR Technology Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* CHANGE: ProfessionalService schema for this intersection page */}
      <SchemaScript schema={schema} />
    </>
  );
}
