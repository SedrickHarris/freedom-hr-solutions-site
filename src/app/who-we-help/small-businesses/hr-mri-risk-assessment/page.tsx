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

const PATH = "/who-we-help/small-businesses/hr-mri-risk-assessment/";

// -- Metadata --

export const metadata = buildMetadata({
  title: "HR Risk Assessment for Small Businesses | Freedom HR Solutions",
  description:
    "Freedom HR Solutions offers a no-cost HR MRI Risk Assessment for small businesses. Get a structured review of your HR compliance, payroll, benefits, and systems with a prioritized plan to address what we find.",
  path: PATH,
});

// -- Page data --

// Section 1: Why small businesses need this (FeatureGrid, 2 columns, card variant)
const painPoints = [
  {
    title: "Compliance gaps no one is tracking",
    description:
      "When no one is assigned to watch for compliance changes, gaps accumulate quietly. Most small businesses have exposure they are not aware of until it surfaces in a costly way.",
  },
  {
    title: "Payroll configuration that was never reviewed",
    description:
      "Payroll systems are often set up once, under time pressure, and never revisited. Configuration errors and missing rules compound silently over time.",
  },
  {
    title: "Handbook that has not been updated in years",
    description:
      "An outdated handbook creates inconsistency, weakens policy enforcement, and leaves the business exposed when employee situations arise that the current version does not address.",
  },
  {
    title: "I-9 and recordkeeping issues",
    description:
      "I-9 documentation errors are among the most common small business compliance gaps. They are rarely visible until an audit surfaces them.",
  },
  {
    title: "ACA exposure from headcount growth",
    description:
      "Businesses that cross ACA applicable large employer thresholds often do not realize their new reporting obligations until well after the deadline has passed.",
  },
  {
    title: "Informal HR practices that create risk",
    description:
      "Decisions made on the fly, without written policies or consistent process, are a liability. What works at five employees becomes a problem at fifteen.",
  },
];

// Section 2: What the assessment covers (FeatureGrid, 3 columns, card variant)
const coverageAreas = [
  {
    title: "HR Policies and Documentation",
    description:
      "We review your written policies, employee handbook, and documentation practices to identify gaps, outdated content, and missing sections.",
  },
  {
    title: "Payroll Setup and Configuration",
    description:
      "We assess your payroll system configuration, pay rules, deduction setup, and data accuracy to surface errors and inconsistencies.",
  },
  {
    title: "Benefits Administration",
    description:
      "We review your benefits enrollment practices, plan documentation, and administration workflows to identify gaps that affect accuracy and compliance.",
  },
  {
    title: "ACA Reporting Readiness",
    description:
      "We assess your ACA status determination, eligibility tracking, and reporting readiness so you understand your obligations before the filing deadline.",
  },
  {
    title: "Worker Classification Practices",
    description:
      "We review how your workforce is classified to identify potential misclassification exposure across employees and independent contractors.",
  },
  {
    title: "I-9 and Hiring Documentation",
    description:
      "We assess your I-9 completion practices, storage procedures, and related hiring documentation for compliance with federal requirements.",
  },
  {
    title: "Leave Policy Compliance",
    description:
      "We review your leave policies against applicable federal and state requirements to identify gaps and inconsistencies in how leave is administered.",
  },
  {
    title: "HR System Setup and Data Quality",
    description:
      "We assess your HR and payroll system configuration and data integrity to identify setup gaps that affect reporting, accuracy, and audit readiness.",
  },
  {
    title: "Overall Workforce Operations",
    description:
      "We take a broader look at how your HR function operates day to day, including onboarding processes, recordkeeping habits, and policy enforcement consistency.",
  },
];

// Section 3: What you get
const whatYouGet = [
  {
    title: "A Structured Outside Review",
    description:
      "An objective look at your HR, payroll, benefits, and compliance operations from a team that is not inside your day-to-day and is not invested in the status quo.",
  },
  {
    title: "Clear Findings in Plain Language",
    description:
      "A summary of what we found, explained without jargon, so your team understands the gaps and why they matter.",
  },
  {
    title: "A Prioritized Action Plan",
    description:
      "A ranked list of what to address first, so you are not guessing where to start or spending energy on lower-priority issues before the urgent ones are handled.",
  },
  {
    title: "No Cost, No Obligation",
    description:
      "The assessment is offered at no cost and with no obligation. Any next steps after you receive the findings are entirely your decision.",
  },
];

// Section 4: Scenarios
const scenarios = [
  "You have been running HR informally and want to know where the gaps are before they become problems",
  "Your business has grown and you are not sure your HR setup has kept pace with the headcount",
  "You recently changed payroll platforms or benefits providers and want to confirm the transition was done correctly",
  "You have never had a formal HR review and you want an objective outside view of where things stand",
  "A compliance question or employee situation surfaced and you want to understand your broader exposure",
  "You want to make smarter decisions about HR systems or processes and need a clear starting point",
];

// Section 5: Comparison rows (HR Audit vs. HR MRI Risk Assessment)
const comparisonRows = [
  {
    label: "Focus",
    audit: "Regulatory compliance checklist in specific areas",
    mri: "HR, payroll, benefits, systems, and operations together",
  },
  {
    label: "Output",
    audit: "List of compliance findings",
    mri: "Prioritized action plan with practical next steps",
  },
  {
    label: "Scope",
    audit: "Narrow, typically one or two practice areas",
    mri: "Broader review across the full HR function",
  },
  {
    label: "Cost",
    audit: "Often billable",
    mri: "No cost, no obligation",
  },
  {
    label: "Next steps",
    audit: "Findings only",
    mri: "Optional path to implementation support if needed",
  },
];

// Section 6: FAQs (FAQ schema emitted via FaqSection)
const pageFaqs = [
  {
    question: "What is the HR MRI Risk Assessment for small businesses?",
    answer:
      "The HR MRI Risk Assessment is a structured, no-cost review of your HR compliance, payroll, benefits configuration, systems, and documentation. It identifies gaps and produces a prioritized list of findings so you know exactly where your risks are and what to address first. It is designed for businesses of all sizes, including small businesses without a dedicated HR team.",
  },
  {
    question: "How is the HR MRI Risk Assessment different from a standard HR audit?",
    answer:
      "A standard HR audit typically checks for regulatory compliance in specific areas and delivers a findings list. The HR MRI Risk Assessment takes a broader view: it covers HR, payroll, benefits, ACA, systems, and documentation together, and delivers a prioritized action plan rather than just a checklist. The assessment is also offered at no cost and with no obligation.",
  },
  {
    question: "What HR compliance risks do small businesses most commonly miss?",
    answer:
      "Common small business HR compliance gaps include outdated or missing employee handbooks, payroll configuration that was set up years ago and never reviewed, I-9 documentation errors, ACA reporting exposure as headcount grows, leave policy inconsistencies, and worker classification issues. The HR MRI Risk Assessment is designed to surface these before they create larger problems.",
  },
  {
    question: "Does a small business need an HR risk assessment?",
    answer:
      "Most small businesses have HR compliance gaps they are not aware of because no one is assigned to track them. Employment laws, payroll requirements, benefits compliance, and documentation standards apply regardless of size. A structured outside review helps identify where the risks are before they surface in a more costly way.",
  },
  {
    question: "Is the HR MRI Risk Assessment really no cost?",
    answer:
      "Yes. The HR MRI Risk Assessment is offered at no cost and with no obligation. Its purpose is to give you clarity and a practical starting point, not to pressure you toward additional services. Any next steps after the assessment are entirely your decision.",
  },
  {
    question: "How do I request an HR MRI Risk Assessment for my small business?",
    answer:
      "Submit a request through the Request HR MRI Assessment form. We review your information and follow up to discuss your situation and schedule the assessment.",
  },
];

// -- Page component --

export default function SmallBusinessHrMriRiskAssessmentPage() {
  return (
    <>
      {/* Breadcrumbs: 4 levels */}
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Small Businesses", path: "/who-we-help/small-businesses/" },
          { name: "HR MRI Risk Assessment", path: PATH },
        ]}
      />

      {/* Hero: standard Hero component, not the reserved MRI hero */}
      <Hero
        eyebrow="For small businesses"
        title="HR MRI Risk Assessment for Small Businesses"
        description="A no-cost, structured review of your HR compliance, payroll, benefits, systems, and documentation. Find out exactly where your risks are and what to address first."
        primaryCta={{ label: "Request HR MRI Assessment", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      {/* Direct answer block */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          The HR MRI Risk Assessment is a structured, no-cost review of your HR policies,
          payroll setup, benefits configuration, compliance practices, and documentation. It
          identifies gaps and risks and gives you a prioritized plan to address them, so you
          know exactly where your small business stands before something goes wrong. Freedom HR
          Solutions offers this assessment to small businesses in Las Vegas, Nevada, and
          nationwide.
        </p>
      </Section>

      {/* Why small businesses need this */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The challenge"
          title="Why Small Businesses Have HR Compliance Gaps"
          description="Small businesses carry the same HR compliance obligations as larger employers but rarely have a dedicated team watching for gaps."
        />
        <div className="mt-10">
          <FeatureGrid items={painPoints} columns={2} variant="card" />
        </div>
      </Section>

      {/* What the assessment covers */}
      <Section>
        <SectionHeading
          eyebrow="What we review"
          title="What the HR MRI Risk Assessment Covers"
          description="The assessment takes a structured look across the full HR function, not just one or two compliance areas."
        />
        <div className="mt-10">
          <FeatureGrid items={coverageAreas} columns={3} variant="card" reveal />
        </div>
      </Section>

      {/* What you get */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="What you receive"
          title="What You Get From the Assessment"
        />
        <div className="mt-10">
          <FeatureGrid items={whatYouGet} columns={2} variant="card" />
        </div>
      </Section>

      {/* Scenario list */}
      <Section>
        <SectionHeading
          eyebrow="Sound familiar?"
          title="Situations Where the Assessment Helps"
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

      {/* Comparison table */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="How it compares"
          title="HR Audit vs. HR MRI Risk Assessment"
          description="The HR MRI Risk Assessment goes beyond a standard compliance checklist."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/4 py-3 pr-6 font-semibold text-ink">
                  <span className="sr-only">Factor</span>
                </th>
                <th className="py-3 pr-6 font-semibold text-ink">Standard HR Audit</th>
                <th className="py-3 font-semibold text-ink">HR MRI Risk Assessment</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="py-3 pr-6 font-medium text-ink">{row.label}</td>
                  <td className="py-3 pr-6 text-body">{row.audit}</td>
                  <td className="py-3 text-body">{row.mri}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* How to get started: inline prose with link to request page */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Get started"
          title="How to Request Your Assessment"
        />
        <p className="mt-5 text-body leading-relaxed">
          Submit a request through the{" "}
          <Link
            href="/request-assessment/"
            className="font-semibold text-brand-700 hover:text-brand-800"
          >
            Request HR MRI Assessment
          </Link>{" "}
          form. We review your information and follow up to discuss your situation and schedule
          the review. The assessment is no cost and no obligation. You receive a clear summary
          of findings and a prioritized plan, and any next steps are entirely your decision.
        </p>
      </Section>

      {/* Related services */}
      <RelatedPages
        eyebrow="After the assessment"
        title="Services That Address Common Findings"
        description="The services small businesses most often engage after completing an HR MRI Risk Assessment."
        items={serviceRefs([
          "hr-mri-risk-assessment",
          "compliance-support",
          "employee-handbook-creation-management",
          "payroll-benefits-hr-management",
          "system-audits-improvements",
        ])}
        tone="muted"
      />

      {/* Related audiences */}
      <RelatedPages
        eyebrow="Also relevant for"
        title="Related Audiences"
        items={audienceRefs([
          "small-businesses",
          "business-owners",
          "companies-without-hr-departments",
          "growing-businesses",
        ])}
      />

      {/* FAQs: emits FAQ schema automatically via FaqSection. Do not add a second schema node. */}
      <FaqSection faqs={pageFaqs} />

      {/* CTA Band */}
      <CtaBand
        title="Find out where your small business stands on HR compliance."
        description="The HR MRI Risk Assessment is no cost and no obligation. You get a clear picture of your risks and a prioritized plan to address them."
        primaryCta={{ label: "Request HR MRI Assessment", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* Schema: ProfessionalService */}
      <SchemaScript
        schema={professionalServiceSchema({
          name: "HR MRI Risk Assessment for Small Businesses",
          description:
            "A no-cost, structured review of HR compliance, payroll, benefits, systems, and documentation for small businesses, with a prioritized findings plan.",
          path: PATH,
        })}
      />
    </>
  );
}
