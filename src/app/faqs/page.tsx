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
  title: "FAQs | Freedom HR Solutions",
  description:
    "Find answers about Freedom HR Solutions, HR MRI Assessments, HR compliance, payroll, benefits, ACA reporting, HR technology, and nationwide service support.",
  path: "/faqs/",
});

export default function FaqsPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "FAQs", path: "/faqs/" }]} />

      <Hero
        eyebrow="FAQs"
        title="Freedom HR Solutions FAQs"
        description="Answers to common questions about our services, the HR MRI Assessment, compliance, payroll, benefits, HR technology, and how we serve businesses nationwide."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <div className="space-y-12">
          {faqCategories.map((category) => (
            <div key={category.slug}>
              <h2 className="font-display text-2xl font-bold text-ink">{category.title}</h2>
              <div className="mt-5 divide-y divide-border rounded-card border border-border bg-white">
                {category.faqs.map((faq) => (
                  <details key={faq.question} className="group px-5 py-4 sm:px-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
                      {faq.question}
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45" aria-hidden>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 leading-relaxed text-body">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />

      <SchemaScript schema={faqSchema(allFaqs)} />
    </>
  );
}
