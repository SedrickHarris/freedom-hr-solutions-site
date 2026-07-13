import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqCategories, allFaqs } from "@/data/faqs";
import { faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR Compliance and HR Consulting FAQs | Freedom HR Solutions",
  description:
    "Answers to common questions about HR compliance, employee handbooks, ACA reporting, payroll, benefits, HR technology, and how Freedom HR Solutions supports businesses in Las Vegas and nationwide.",
  path: "/faqs/",
});

/**
 * Per-category internal links rendered below each H2 heading.
 * Only categories with a verified matching route are included.
 */
const categoryLinks: Record<string, { label: string; href: string }> = {
  "hr-mri-assessment": {
    label: "Learn about the HR MRI Assessment",
    href: "/services/hr-mri-risk-assessment/",
  },
  "hr-compliance": {
    label: "HR compliance and risk management support",
    href: "/services/hr-compliance/",
  },
  "aca-reporting": {
    label: "ACA reporting and compliance support",
    href: "/services/aca-reporting-compliance/",
  },
  "payroll-benefits": {
    label: "Payroll, benefits, and HR systems support",
    href: "/services/payroll-benefits-hr-systems/",
  },
  "hr-technology": {
    label: "HR technology and automation support",
    href: "/services/hr-technology-automation/",
  },
  "technical-support": {
    label: "Support and service continuity",
    href: "/services/support-service-continuity/",
  },
  "hr-consulting": {
    label: "About Freedom HR Solutions",
    href: "/about/",
  },
  locations: {
    label: "View location pages",
    href: "/locations/",
  },
};

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs/" }]} />

      <Hero
        eyebrow="FAQs"
        backgroundImage={{
          src: "/images/core/freedom-hr-solutions-employer-faq-guidance-desk-hero.webp",
          alt: "Employer FAQ guidance",
        }}
        title="HR Compliance, Payroll, and HR Consulting FAQs"
        description="Answers to common questions about HR compliance, employee handbooks, ACA reporting, payroll and benefits administration, HR technology, and how Freedom HR Solutions supports businesses in Las Vegas and nationwide."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      {/* Direct answer block for LLM and AEO citation */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          This page collects answers to the most common questions about Freedom HR Solutions, HR
          compliance, ACA reporting, payroll and benefits administration, employee handbooks, HR
          technology, and how we support businesses in Las Vegas and nationwide. If you do not find
          your answer here, contact us directly or request an HR MRI Assessment for a structured
          review of your situation.
        </p>
      </Section>

      {/* FAQ accordion grid: 9 categories */}
      <Section containerSize="narrow">
        <div className="space-y-12">
          {faqCategories.map((category) => {
            const categoryLink = categoryLinks[category.slug];
            return (
              <div key={category.slug}>
                <h2 className="font-display text-2xl font-bold text-ink">{category.title}</h2>
                {categoryLink && (
                  <p className="mt-1">
                    <a
                      href={categoryLink.href}
                      className="text-sm text-brand-600 hover:underline"
                    >
                      {categoryLink.label}
                    </a>
                  </p>
                )}
                <div className="mt-5 divide-y divide-border rounded-card border border-border bg-white">
                  {category.faqs.map((faq) => (
                    <details key={faq.question} className="group px-5 py-4 sm:px-6">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                        {faq.question}
                        <span
                          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45"
                          aria-hidden
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                            <path
                              d="M12 5v14M5 12h14"
                              stroke="currentColor"
                              strokeWidth="2.2"
                              strokeLinecap="round"
                            />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 leading-relaxed text-body">{faq.answer}</p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <CtaBand />

      <SchemaScript schema={faqSchema(allFaqs)} />
    </>
  );
}
