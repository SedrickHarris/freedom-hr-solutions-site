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
  title: "Payroll and Benefits HR Management for Growing Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps growing businesses fix payroll errors, improve benefits enrollment, and manage HR systems as their teams scale. Las Vegas and nationwide.",
  path: "/who-we-help/growing-businesses/payroll-benefits-hr-management/",
});

// CHANGE: Pain point cards - payroll and benefits specific to growing businesses
const painPoints = [
  {
    title: "Payroll errors that multiply with headcount",
    description:
      "More employees means more deductions, more pay rules, and more opportunities for configuration gaps to produce errors. What was a minor issue at a small team becomes a recurring problem at scale.",
  },
  {
    title: "Benefits enrollment that gets harder to manage",
    description:
      "As your team grows, enrollment windows become more complex to communicate and administer. Eligibility categories, plan rules, and deadline management get harder without a structured process.",
  },
  {
    title: "HR and payroll systems not syncing correctly",
    description:
      "Growing businesses often run HR and payroll on systems that were set up independently. When they do not share data cleanly, deductions, elections, and records drift out of alignment.",
  },
  {
    title: "No documented payroll or benefits process",
    description:
      "When the people who set up the system are the only ones who know how it works, growth creates risk. Undocumented processes are difficult to train, audit, or improve.",
  },
];

// CHANGE: Scenarios - payroll/benefits/scale-specific situations
const scenarios = [
  "Your payroll errors increased after a round of hiring and you are not sure where the problem starts.",
  "Benefits enrollment closed and several employees have incorrect deductions or elections.",
  "Your HR and payroll systems do not share data consistently and reconciliation takes hours each period.",
  "A team member who managed payroll setup left and the process is not documented anywhere.",
  "You are growing into new states and are not sure your payroll setup reflects the right rules.",
  "Leadership wants to know what payroll and benefits are costing and your current reporting cannot answer that.",
];

// CHANGE: How we help - four cards specific to payroll/benefits/growing business
const howWeHelp = [
  {
    title: "Payroll accuracy review",
    description:
      "We review how your payroll is configured, identify where errors are coming from, and help correct the setup so the same mistakes stop repeating each cycle.",
  },
  {
    title: "Benefits enrollment and eligibility support",
    description:
      "We help structure enrollment workflows, align eligibility data across systems, and make sure the right employees are enrolled in the right plans with the correct deductions.",
  },
  {
    title: "HR and payroll system reconciliation",
    description:
      "When HR, payroll, and benefits systems are not sharing data cleanly, we identify the source of the discrepancy and help get your records into alignment.",
  },
  {
    title: "Payroll and benefits process documentation",
    description:
      "We help document how your payroll and benefits processes work so the knowledge does not live with one person and the workflow can be trained, audited, and improved over time.",
  },
];

// CHANGE: FAQs - 6 AEO-ready questions targeting payroll/benefits/growing business intent
const faqs = [
  {
    question: "What causes payroll errors when a business grows?",
    answer:
      "Growth introduces more pay rules, deduction categories, and employee types. When the underlying payroll configuration was not built for that volume or complexity, errors become more frequent. Common causes include incomplete configuration, eligibility rules that were not updated as headcount grew, and data that does not sync correctly between HR and payroll systems. We help identify the root cause rather than just correcting individual errors.",
  },
  {
    question: "How do you improve benefits enrollment for a growing team?",
    answer:
      "Better enrollment starts with organized eligibility data, clear communication windows, and a process that does not rely on manual tracking. We help growing businesses structure their enrollment workflow, align eligibility rules in the system, and reduce the confusion and last-minute corrections that happen when the process has not kept pace with headcount.",
  },
  {
    question: "What is payroll reconciliation and why does it matter?",
    answer:
      "Payroll reconciliation is the process of verifying that deductions, elections, and records match across your HR, payroll, and benefits systems. When they do not match, employees may have incorrect deductions, benefits may not reflect what they elected, and reporting is unreliable. Reconciliation issues usually point to a configuration or data sync problem that needs to be fixed at the source.",
  },
  {
    question: "What is benefits eligibility management?",
    answer:
      "Benefits eligibility management is the process of tracking which employees qualify for which benefits based on their status, hours, location, and plan rules. When eligibility data is inconsistent across systems, enrollment errors follow. As businesses grow and add employees across more categories, eligibility management becomes more complex and more important to get right.",
  },
  {
    question: "Can Freedom HR Solutions help if our HR and payroll systems do not communicate?",
    answer:
      "Yes. We review how your systems are set up and where the data sync is breaking down. In some cases the fix is a configuration adjustment. In others it requires reviewing how data is passed between platforms. We help identify the source of the problem and support the correction so your records stay aligned.",
  },
  {
    question: "When should a growing business review its payroll and benefits setup?",
    answer:
      "A good time to review is when errors start increasing, headcount has grown significantly since the original setup, a key team member who managed the process has left, or you are expanding into new states. Earlier reviews prevent larger problems. A payroll and benefits review can catch configuration gaps before they compound.",
  },
];

// CHANGE: Schema - ProfessionalService for this specific intersection page
const schema = professionalServiceSchema({
  name: "Payroll and benefits HR management support for growing businesses",
  description:
    "Freedom HR Solutions helps growing businesses fix payroll errors, improve benefits enrollment, and manage HR systems as their teams scale. Las Vegas and nationwide.",
  path: "/who-we-help/growing-businesses/payroll-benefits-hr-management/",
});

export default function GrowingBusinessesPayrollBenefitsPage() {
  return (
    <>
      {/* CHANGE: 4-level breadcrumb - Home > Who We Help > Growing Businesses > Payroll and Benefits HR Management */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Growing Businesses", path: "/who-we-help/growing-businesses/" },
          {
            name: "Payroll and Benefits HR Management",
            path: "/who-we-help/growing-businesses/payroll-benefits-hr-management/",
          },
        ]}
      />

      {/* CHANGE: Hero - page-specific title, summary, and CTAs */}
      <Hero
        eyebrow="For your business"
        title="Payroll and Benefits HR Management Support for Growing Businesses"
        description="Payroll accuracy, benefits enrollment, and HR system support that keeps pace as your team and headcount grow."
        primaryCta={{
          label: "Request Payroll and Benefits Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* CHANGE: Direct answer block - growing business payroll/benefits framing */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Growing businesses run into payroll and benefits problems that smaller teams never noticed.
          A configuration that worked at twelve employees starts producing errors at thirty. Benefits
          enrollment becomes harder to manage when more employees are enrolling across different
          eligibility categories. HR and payroll systems that once felt adequate start showing gaps
          as data volume increases. Freedom HR Solutions helps growing businesses improve payroll
          accuracy, strengthen benefits enrollment and eligibility workflows, and get their HR and
          payroll systems working correctly as the business scales. We work with growing businesses
          in Las Vegas, across Nevada, and nationwide.
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
        <SectionHeading eyebrow="How we help" title="Payroll and benefits support for growing teams" />
        <div className="mt-10">
          <FeatureGrid items={howWeHelp} columns={2} variant="card" />
        </div>
      </Section>

      {/* CHANGE: Recommended services - payroll/benefits/growing business cluster */}
      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services"
        description="The services most relevant to your situation."
        items={[
          {
            title: "Payroll, Benefits, and HR Management",
            href: "/services/payroll-benefits-hr-management/",
            description:
              "Support configuring and managing payroll and benefits systems so they work accurately and consistently.",
          },
          {
            title: "System Audits and Improvements",
            href: "/services/system-audits-improvements/",
            description:
              "A structured review of your HR and payroll systems to identify configuration gaps and data issues.",
          },
          {
            title: "Open Enrollment Setup",
            href: "/services/open-enrollment-setup/",
            description:
              "Help preparing benefits enrollment workflows and eligibility data before the enrollment window opens.",
          },
          {
            title: "Reporting and Data Insights",
            href: "/services/reporting-data-insights/",
            description:
              "Build payroll and benefits reports that give leadership clear visibility into costs and workforce data.",
          },
          {
            title: "System Setup and Implementation",
            href: "/services/system-setup-implementation/",
            description:
              "Configure HR and payroll systems correctly from the start so errors do not compound as your team grows.",
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

      {/* CHANGE: 6 FAQs - payroll/benefits/growing business AEO intent. FaqSection emits FAQ schema. */}
      <FaqSection faqs={faqs} />

      {/* CHANGE: Page-specific CTA band */}
      <CtaBand
        primaryCta={{
          label: "Request Payroll and Benefits Review",
          href: "/request-assessment/",
        }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* CHANGE: ProfessionalService schema for this intersection page */}
      <SchemaScript schema={schema} />
    </>
  );
}
