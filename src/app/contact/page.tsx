import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { ctas } from "@/data/shared";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Contact Freedom HR Solutions | HR, Payroll, Benefits, and Compliance Support",
  description:
    "Contact Freedom HR Solutions for HR compliance, payroll, benefits, ACA reporting, HR technology, system implementation, and workforce support.",
  path: "/contact/",
});

const reasons = [
  "You need help with HR compliance.",
  "You are preparing for ACA reporting.",
  "You are having payroll or benefits system issues.",
  "You need open enrollment support.",
  "You are implementing a new HR or payroll system.",
  "You want to review employee handbook or policy gaps.",
  "You need ongoing technical support.",
];

const contactFaqs = [
  { question: "How do I request support from Freedom HR Solutions?", answer: "Use the form on this page or request an HR MRI Assessment. We will follow up using the contact details you provide." },
  { question: "Can I request an HR MRI Assessment from this page?", answer: "Yes. You can use this contact form, or go to the Request HR MRI Assessment page for the full assessment form." },
  { question: "Does Freedom HR Solutions work with businesses outside Las Vegas?", answer: "Yes. We are headquartered in Las Vegas and support businesses nationwide through remote consulting and system support." },
  { question: "What information should I include in my message?", answer: "Share your company, the systems you use, and the main challenge you want help with. The more context, the better we can prepare." },
  { question: "Can Freedom HR Solutions support my existing HR or payroll platform?", answer: "Yes. We frequently work alongside your existing systems and providers." },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />

      <Hero
        eyebrow="Contact"
        title="Contact Freedom HR Solutions"
        description="Tell us what you need help with and we will follow up. For a full HR review, you can also request an HR MRI Assessment."
        primaryCta={ctas.assessment}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <SectionHeading eyebrow="Send a message" title="How can we help?" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-8">
            <div className="rounded-card border border-border bg-muted p-6">
              <h3 className="font-display text-lg font-bold text-ink">Contact details</h3>
              <div className="mt-4 space-y-2 text-body">
                <p>
                  <span className="text-muted-text">Email: </span>
                  <a href={`mailto:${site.email}`} className="text-brand-700 hover:text-brand-800">
                    {site.email}
                  </a>
                </p>
                <p>
                  <span className="text-muted-text">Phone: </span>
                  <a href={site.phoneHref} className="text-brand-700 hover:text-brand-800">
                    {site.phone}
                  </a>
                </p>
                <p>
                  <span className="text-muted-text">Serving: </span>
                  {site.serviceArea}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-ink">Reasons to reach out</h3>
              <ul className="mt-4 space-y-2.5">
                {reasons.map((reason) => (
                  <li key={reason} className="flex items-start gap-3 text-sm text-body">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-500" aria-hidden />
                    {reason}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href={ctas.assessment.href}>{ctas.assessment.label}</Button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <FaqSection faqs={contactFaqs} />
    </>
  );
}
