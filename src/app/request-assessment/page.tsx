import type { Metadata } from "next";
import { HrMriHero } from "@/components/sections/HrMriHero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Request HR MRI Risk Assessment | Freedom HR Solutions",
  description:
    "Request an HR MRI Risk Assessment to identify HR risks, compliance gaps, payroll and benefits process issues, system concerns, and workforce support needs.",
  path: "/request-assessment/",
});

const reviews = [
  { title: "HR policies and documentation", description: "Employee handbook, policies, procedures, and documentation practices reviewed for gaps and consistency." },
  { title: "Payroll and benefits configuration", description: "How your payroll and benefits are set up, administered, and documented." },
  { title: "Compliance areas", description: "I-9 documentation, wage and hour practices, leave administration, EEO recordkeeping, and anti-harassment policy coverage." },
  { title: "ACA reporting readiness", description: "Eligibility tracking, data accuracy, and reporting process gaps." },
  { title: "HR systems and technology", description: "How your HR, payroll, benefits, and time management systems are configured and connected." },
  { title: "Risk priorities", description: "A clear, prioritized findings report with practical recommendations for what to address first." },
];

const steps = [
  { title: "Complete the intake form", description: "Share details about your business, your current systems, and the challenges you want to address." },
  { title: "Secure documentation review", description: "We review your employee handbook, HR policies, procedures, and workforce documentation." },
  { title: "Multi-stakeholder input", description: "Leadership and key stakeholders complete targeted assessments to capture how HR responsibilities are actually handled." },
  { title: "Risk and compliance analysis", description: "We evaluate the information against compliance standards and best practices to identify gaps and risk areas." },
  { title: "Findings summary and recommendations", description: "You receive a clear summary of findings, prioritized risk areas, and practical recommendations." },
  { title: "Decision support and next steps", description: "We walk through results with you and outline potential solutions. Any next steps are entirely up to you." },
];

const assessmentFaqs = [
  { question: "What is an HR MRI Risk Assessment?", answer: "It is a structured evaluation of your HR, payroll, benefits, systems, and compliance operations that identifies gaps and gives you a prioritized plan to address them. It is offered at no cost and with no obligation." },
  { question: "Is this really no cost?", answer: "Yes. The HR MRI Risk Assessment is offered at no cost and with no obligation. Its purpose is to give you clarity and insight, not to pressure you into additional services." },
  { question: "Is this a sales pitch?", answer: "No. The assessment is designed to provide objective insight and decision support. Any next steps after the assessment are entirely optional and up to you." },
  { question: "Who should request an HR MRI Assessment?", answer: "Business owners, HR teams, payroll teams, and benefits administrators who want a clear picture of their HR health. It is especially useful if your company has grown quickly, delegated HR informally, or has not had a formal review recently." },
  { question: "What information do I need to provide?", answer: "Basic details about your company, the HR and payroll systems you use, the number of employees and locations, and your primary challenge. The more context you share, the more focused the review." },
  { question: "What happens after I submit the form?", answer: "We review your information and follow up using your preferred contact method to discuss findings and next steps." },
  { question: "Can Freedom HR Solutions support businesses outside Nevada?", answer: "Yes. We are headquartered in Las Vegas and support businesses nationwide through remote consulting and system support." },
];

export default function RequestAssessmentPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request HR MRI Assessment", path: "/request-assessment/" }]} />

      <HrMriHero
        eyebrow="HR MRI Risk Assessment"
        title="Request Your HR MRI Risk Assessment"
        description="The HR MRI Risk Assessment is a structured evaluation of your HR practices, policies, systems, and compliance operations. We identify your risks, explain why they matter, and give you a prioritized plan to address them."
        trustLine="No cost. No obligation. A prioritized view of your HR, payroll, and compliance health."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-10">
            <div>
              <SectionHeading eyebrow="What it reviews" title="What the assessment covers" as="h2" />
              <div className="mt-8">
                <FeatureGrid items={reviews} columns={2} variant="check" />
              </div>
            </div>
            <div>
              <SectionHeading eyebrow="What happens next" title="How the assessment works" as="h2" />
              <ol className="mt-6 space-y-4">
                {steps.map((step, index) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 font-display text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-body">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <div className="rounded-card border border-border bg-muted p-6 sm:p-8">
            <h2 className="font-display text-xl font-bold text-ink">Request your HR MRI Assessment</h2>
            <p className="mt-2 text-sm text-body">
              Fields marked with an asterisk are required. No cost. No obligation. We follow up using your preferred contact method.
            </p>
            <div className="mt-6">
              <AssessmentForm />
            </div>
          </div>
        </div>
      </Section>

      <FaqSection faqs={assessmentFaqs} />
    </>
  );
}
