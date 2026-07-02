import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { ContactForm } from "@/components/forms/ContactForm";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { ctas } from "@/data/shared";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "Contact Freedom HR Solutions | HR Consulting Support, Las Vegas and Nationwide",
  description:
    "Reach Freedom HR Solutions by form or phone for HR compliance, payroll, benefits, ACA reporting, HR technology, and workforce support. We serve Las Vegas and businesses nationwide.",
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
  "You are not sure where to start and want a clear next step.",
];

const contactFaqs = [
  {
    question: "How do I request support from Freedom HR Solutions?",
    answer:
      "Use the contact form on this page, call or email us directly, or request an HR MRI Assessment for a structured review of your HR, payroll, benefits, and compliance operations. We will follow up using the contact details you provide.",
  },
  {
    question: "What happens after I submit the contact form?",
    answer:
      "We review your message and follow up using the contact method you provided, typically by email or phone. If you described a specific challenge or system, we will come prepared to discuss it. There is no obligation and no sales pressure.",
  },
  {
    question: "Can I request an HR MRI Assessment from this page?",
    answer:
      "Yes. You can submit a general message using this form, or go directly to the Request HR MRI Assessment page for the full structured assessment form. The HR MRI Assessment is a detailed review of your HR, payroll, benefits, and compliance operations.",
  },
  {
    question: "Does Freedom HR Solutions work with businesses outside Las Vegas?",
    answer:
      "Yes. We are headquartered in Las Vegas, Nevada and support businesses nationwide through remote consulting and system support. Multi-state employers and businesses in any state are welcome to reach out.",
  },
  {
    question: "What information should I include in my message?",
    answer:
      "Share your company name, the HR or payroll systems you currently use, and the main challenge you need help with. The more context you provide, the better we can prepare for the follow-up conversation.",
  },
  {
    question: "Can Freedom HR Solutions work with my existing HR or payroll platform?",
    answer:
      "Yes. We are platform-agnostic and work alongside the systems you already use, including ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms. You are not required to change your technology to work with us.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }]} />

      <Hero
        eyebrow="Contact"
        title="Contact Freedom HR Solutions"
        description="Tell us what you need help with and we will follow up using the contact details you provide. You can also call or email directly, or request an HR MRI Assessment for a structured review of your HR, payroll, benefits, and compliance operations."
        primaryCta={ctas.assessment}
      />

      <TrustBar />

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

      <CtaBand />

      <SchemaScript
        schema={professionalServiceSchema({
          name: site.name,
          description:
            "Freedom HR Solutions provides HR compliance, payroll, benefits, ACA reporting, HR technology, and workforce support for businesses in Las Vegas, Nevada, and nationwide.",
          path: "/contact/",
        })}
      />
    </>
  );
}
