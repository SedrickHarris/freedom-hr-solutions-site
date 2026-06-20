import type { Faq } from "@/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { faqSchema } from "@/lib/schema";

interface FaqSectionProps {
  faqs: Faq[];
  title?: string;
  description?: string;
  /** Render schema for these FAQs. Set false if rendered elsewhere on the page. */
  withSchema?: boolean;
  tone?: "default" | "muted";
}

/**
 * Accessible FAQ accordion using native details/summary so it works
 * without client-side JavaScript in the static export.
 */
export function FaqSection({
  faqs,
  title = "Frequently asked questions",
  description,
  withSchema = true,
  tone = "muted",
}: FaqSectionProps) {
  if (faqs.length === 0) return null;

  return (
    <Section tone={tone === "muted" ? "muted" : "default"} containerSize="narrow">
      <SectionHeading eyebrow="FAQs" title={title} description={description} align="center" />
      <div className="mt-10 divide-y divide-border rounded-card border border-border bg-white">
        {faqs.map((faq) => (
          <details key={faq.question} className="group px-5 py-4 sm:px-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink">
              {faq.question}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-transform group-open:rotate-45"
                aria-hidden
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
              </span>
            </summary>
            <p className="mt-3 leading-relaxed text-body">{faq.answer}</p>
          </details>
        ))}
      </div>
      {withSchema && <SchemaScript schema={faqSchema(faqs)} />}
    </Section>
  );
}
