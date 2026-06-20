import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
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
  { title: "HR and compliance", description: "Policies, documentation, employee handbook, and process consistency." },
  { title: "Payroll and benefits", description: "Configuration, accuracy, eligibility, and enrollment workflows." },
  { title: "Systems and reporting", description: "How your HR, payroll, and benefits systems are set up and connected." },
  { title: "Risk and priorities", description: "Where your exposure is and what to address first." },
];

const steps = [
  { title: "You submit the form", description: "Share a few details about your business and your main challenge." },
  { title: "We review your situation", description: "We look at the information you provide to prepare for a focused conversation." },
  { title: "We follow up", description: "We reach out using your preferred contact method to discuss findings and next steps." },
];

const assessmentFaqs = [
  { question: "What is an HR MRI Risk Assessment?", answer: "It is a structured review of your HR, payroll, benefits, and compliance operations that identifies gaps and gives you a prioritized plan to address them." },
  { question: "Who should request an HR MRI Assessment?", answer: "Business owners, HR teams, payroll teams, and benefits administrators who want a clear picture of their HR health, especially if they are unsure where to start." },
  { question: "What information do I need to provide?", answer: "Basic details about your company, the systems you use, and your primary challenge. The more context you share, the more useful the review." },
  { question: "What happens after I submit the form?", answer: "We review your information and follow up using your preferred contact method to discuss findings and next steps." },
  { question: "Can Freedom HR Solutions support businesses outside Nevada?", answer: "Yes. We are headquartered in Las Vegas and support businesses nationwide through remote consulting and system support." },
];

export default function RequestAssessmentPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Request HR MRI Assessment", path: "/request-assessment/" }]} />

      <Hero
        eyebrow="HR MRI Risk Assessment"
        title="Request Your HR MRI Risk Assessment"
        description="Get a clear, practical view of your HR, payroll, benefits, and compliance health, even if you are not sure what you need yet."
        trustLine="No obligation. A focused review and prioritized next steps."
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
              <SectionHeading eyebrow="What happens next" title="A simple, three-step process" as="h2" />
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
            <h2 className="font-display text-xl font-bold text-ink">Request your assessment</h2>
            <p className="mt-2 text-sm text-body">
              Fields marked with an asterisk are required. We respond using your preferred contact method.
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
