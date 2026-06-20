import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { AudienceCard } from "@/components/cards/AudienceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { serviceHubs } from "@/data/serviceHubs";
import { standardProcess } from "@/data/shared";
import { buildMetadata } from "@/lib/seo";
import { servicePath } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "HR Compliance, Payroll, Benefits & HR Consulting | Freedom HR Solutions",
  description:
    "Freedom HR Solutions provides HR compliance, payroll, benefits, ACA reporting, and HR technology support for businesses in Las Vegas and nationwide.",
  path: "/",
});

const whoWeHelp = [
  {
    title: "Business Owners",
    summary: "You need HR, payroll, and compliance handled so you can focus on running the business.",
    href: "/who-we-help/business-owners/",
  },
  {
    title: "Small Businesses",
    summary: "Get the HR and compliance foundation your business needs without a full in-house HR team.",
    href: "/who-we-help/small-businesses/",
  },
  {
    title: "Growing Businesses",
    summary: "Scale your HR, payroll, and benefits operations without outgrowing your systems.",
    href: "/who-we-help/growing-businesses/",
  },
  {
    title: "HR Teams",
    summary: "Support for system implementation, reporting, open enrollment, and technical issues.",
    href: "/who-we-help/hr-teams/",
  },
  {
    title: "Payroll Teams",
    summary: "Resolve payroll system issues, improve reporting accuracy, and support multi-state payroll.",
    href: "/who-we-help/payroll-teams/",
  },
  {
    title: "Multi-State Employers",
    summary: "HR compliance, ACA reporting, and payroll support across multiple states and jurisdictions.",
    href: "/who-we-help/multi-state-employers/",
  },
];

const whyChoose = [
  {
    title: "Platform-Agnostic Support",
    description:
      "We work with ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms. You keep your systems and we help you get more out of them.",
  },
  {
    title: "Las Vegas Based. Nationwide Reach.",
    description:
      "We are headquartered in Las Vegas and support businesses across Nevada and nationwide through remote HR consulting, system support, and ACA reporting assistance.",
  },
  {
    title: "HR, Payroll, Benefits, and ACA Under One Firm",
    description:
      "Instead of managing multiple vendors, you get compliance support, payroll and benefits help, HR technology consulting, and ACA reporting support from one team.",
  },
  {
    title: "Process-First Approach",
    description:
      "We start by understanding how your business operates today before making recommendations. Every engagement begins with a structured review of your current state.",
  },
];

const homeFaqs = [
  {
    question: "What does Freedom HR Solutions do?",
    answer:
      "Freedom HR Solutions provides HR compliance, payroll and benefits support, ACA reporting, HR technology implementation, system audits, open enrollment setup, and ongoing HR technical support for businesses in Las Vegas, Nevada, and nationwide.",
  },
  {
    question: "Who does Freedom HR Solutions work with?",
    answer:
      "We work with business owners, HR teams, payroll teams, benefits administrators, small businesses, growing companies, and multi-state employers that need HR, payroll, benefits, or compliance support.",
  },
  {
    question: "How do I know if my business has HR compliance gaps?",
    answer:
      "The HR MRI Risk Assessment is a structured review of your HR, payroll, benefits, and compliance operations that identifies gaps and gives you a prioritized list of what to address first.",
  },
  {
    question: "What is an HR compliance consultant?",
    answer:
      "An HR compliance consultant reviews your HR policies, documentation, payroll practices, and benefits administration to help identify risks and support your readiness for regulatory requirements.",
  },
  {
    question: "What HR platforms does Freedom HR Solutions support?",
    answer:
      "We work with businesses using ADP, isolved, BambooHR, HiBob, and CustomHCM, among others. We help with implementation, configuration, audits, troubleshooting, and ongoing support.",
  },
  {
    question: "Can Freedom HR Solutions work with our existing payroll or HR system?",
    answer:
      "Yes. We frequently work alongside your existing systems and providers to improve configuration, reporting, and workflows without requiring a platform change.",
  },
  {
    question: "Where is Freedom HR Solutions located?",
    answer:
      "Freedom HR Solutions is headquartered in Las Vegas, Nevada, and supports businesses locally, statewide, and nationwide through remote consulting and system support.",
  },
  {
    question: "Does Freedom HR Solutions serve businesses outside Nevada?",
    answer:
      "Yes. We support businesses across multiple states and nationwide through remote HR consulting, ACA reporting support, system implementation, and ongoing technical support.",
  },
  {
    question: "What is ACA reporting and does my business need it?",
    answer:
      "ACA reporting refers to the Affordable Care Act employer reporting requirements, including Forms 1094-C and 1095-C. Applicable large employers and certain self-insured plans are generally required to file. Freedom HR Solutions helps businesses review requirements, prepare data, and support the reporting process.",
  },
  {
    question: "What is the HR MRI Risk Assessment?",
    answer:
      "The HR MRI Risk Assessment is a structured review of your HR, compliance, payroll, and benefits operations. It identifies gaps, risks, and priorities so you have a clear plan before investing in new systems or processes.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero
        variant="home"
        eyebrow="Headquartered in Las Vegas. Serving businesses nationwide."
        title="HR, Payroll, Benefits, and Compliance Support for Growing Businesses"
        description="Freedom HR Solutions helps businesses identify HR risks, improve payroll and benefits processes, manage ACA reporting, implement HR systems, and strengthen workforce operations."
        trustLine="Not sure where to start? The HR MRI Risk Assessment gives you a clear next step."
        primaryCta={{ label: "Request HR MRI Assessment", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      {/* 2. Trust Bar */}
      <Section tone="muted" className="py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-body">
          <span className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z" stroke="#0A2240" strokeWidth="1.8" />
              <circle cx="12" cy="10" r="2.4" stroke="#0A2240" strokeWidth="1.8" />
            </svg>
            Las Vegas Headquartered
          </span>
          <span className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="12" cy="12" r="9" stroke="#1B4F8A" strokeWidth="1.8" />
              <path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18" stroke="#1B4F8A" strokeWidth="1.6" />
            </svg>
            Nevada and Nationwide Support
          </span>
          <span className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 3l7 3v5c0 4.4-3 8.4-7 9.6C8 19.4 5 15.4 5 11V6l7-3z" stroke="#C8102E" strokeWidth="1.8" strokeLinejoin="round" />
            </svg>
            HR, Payroll, Benefits and ACA
          </span>
          <span className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M12 3l8 4-8 4-8-4 8-4z" stroke="#0A2240" strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke="#0A2240" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
            ADP, isolved, BambooHR and More
          </span>
        </div>
      </Section>

      {/* 3. What We Do (Quick Answer Block) */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="What We Do"
          title="HR, Payroll, Benefits, and Compliance Support Under One Firm"
        />
        <p className="mt-5 text-lg leading-relaxed text-body">
          Freedom HR Solutions is an HR consulting firm headquartered in Las Vegas, Nevada. We help
          businesses identify compliance gaps, manage payroll and benefits, prepare ACA reporting,
          implement HR systems, and support workforce operations. We work with business owners, HR
          teams, payroll teams, benefits administrators, and companies that do not have a dedicated HR
          department. Our support covers Las Vegas, Henderson, North Las Vegas, Nevada statewide, and
          businesses nationwide.
        </p>
      </Section>

      {/* 4. Services Preview */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Six Service Areas That Cover the HR Lifecycle"
          description="From compliance and ACA reporting to payroll, benefits, HR technology, and workforce development, we cover every stage of the HR and payroll lifecycle."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHubs.map((hub) => (
            <ServiceCard
              key={hub.slug}
              title={hub.title}
              summary={hub.summary}
              href={servicePath(hub.slug)}
              withImagePlaceholder
            />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services/">Explore All Services</Button>
        </div>
      </Section>

      {/* 5. Who We Help */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for the Teams and Businesses That Carry the HR Load"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeHelp.map((audience) => (
            <AudienceCard
              key={audience.href}
              title={audience.title}
              summary={audience.summary}
              href={audience.href}
            />
          ))}
        </div>
      </Section>

      {/* 6. Why Choose Freedom HR Solutions */}
      <Section>
        <SectionHeading
          eyebrow="Why Freedom HR"
          title="What Makes Freedom HR Solutions Different"
        />
        <div className="mt-10">
          <FeatureGrid items={whyChoose} columns={2} variant="check" />
        </div>
      </Section>

      {/* 7. How We Work (Process Steps) */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work With You"
          description="Every engagement starts with understanding your business before we recommend anything."
        />
        <div className="mt-10">
          <ProcessSteps steps={standardProcess.slice(0, 4)} />
        </div>
      </Section>

      {/* 8. Service Area */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Service Area"
          title="Headquartered in Las Vegas. Available Nationwide."
        />
        <p className="mt-5 text-lg leading-relaxed text-body">
          Freedom HR Solutions is based in Las Vegas, Nevada. We serve businesses in Las Vegas,
          Henderson, and North Las Vegas directly, and provide statewide support across Nevada. For
          businesses outside Nevada, we offer remote HR consulting, ACA reporting support, system
          implementation, and ongoing technical support nationwide.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-body">
          Learn more about our{" "}
          <Link href="/locations/las-vegas-nv/" className="font-semibold text-brand-700 hover:text-brand-800">
            Las Vegas HR consulting
          </Link>{" "}
          services or explore{" "}
          <Link href="/locations/nationwide-hr-consulting/" className="font-semibold text-brand-700 hover:text-brand-800">
            nationwide HR support
          </Link>
          .
        </p>
      </Section>

      {/* 9. AEO FAQ Section (FaqSection also emits FAQPage JSON-LD) */}
      <FaqSection faqs={homeFaqs} />

      {/* 10. Final CTA Band */}
      <CtaBand />
    </>
  );
}
