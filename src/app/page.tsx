import type { Metadata } from "next";
import Link from "next/link";
import {
  Globe,
  AlertCircle,
  HelpCircle,
  FileWarning,
  Unplug,
  BookX,
  TrendingUp,
  Layers,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";
import { HomepageHero } from "@/components/sections/HomepageHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FaqSection } from "@/components/sections/FaqSection";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { AudienceCard } from "@/components/cards/AudienceCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";
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

const problems = [
  { title: "Payroll errors", description: "Mistakes create employee frustration and hours of administrative rework.", Icon: AlertCircle },
  { title: "Benefits confusion", description: "Setup and eligibility issues cause problems during open enrollment and beyond.", Icon: HelpCircle },
  { title: "ACA reporting stress", description: "Reporting errors can lead to notices and penalty exposure.", Icon: FileWarning },
  { title: "Disconnected systems", description: "When systems do not talk to each other, reporting and compliance get harder.", Icon: Unplug },
  { title: "Outdated policies", description: "Handbooks and policies that have not kept up create unnecessary risk.", Icon: BookX },
  { title: "Outgrowing your processes", description: "Growing companies often outgrow their HR processes before they realize it.", Icon: TrendingUp },
];

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
    Icon: Layers,
    description:
      "We work with ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms. You keep your systems and we help you get more out of them.",
  },
  {
    title: "Las Vegas Based. Nationwide Reach.",
    Icon: Globe,
    description:
      "We are headquartered in Las Vegas and support businesses across Nevada and nationwide through remote HR consulting, system support, and ACA reporting assistance.",
  },
  {
    title: "HR, Payroll, Benefits, and ACA Under One Firm",
    Icon: ShieldCheck,
    description:
      "Instead of managing multiple vendors, you get compliance support, payroll and benefits help, HR technology consulting, and ACA reporting support from one team.",
  },
  {
    title: "Process-First Approach",
    Icon: ClipboardList,
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

/** Maps each service hub slug to its real category image. */
const serviceHubImages: Record<string, { src: string; alt: string }> = {
  "hr-compliance": {
    src: "/images/services/freedom-hr-solutions-hr-compliance-risk-management-service-section.webp",
    alt: "HR compliance and risk management consulting",
  },
  "aca-reporting-compliance": {
    src: "/images/services/freedom-hr-solutions-aca-reporting-compliance-service-section.webp",
    alt: "ACA reporting and compliance consulting",
  },
  "payroll-benefits-hr-systems": {
    src: "/images/services/freedom-hr-solutions-payroll-benefits-hr-systems-service-section.webp",
    alt: "Payroll, benefits, and HR systems support",
  },
  "hr-technology-automation": {
    src: "/images/services/freedom-hr-solutions-hr-technology-automation-service-section.webp",
    alt: "HR technology and automation consulting",
  },
  "support-service-continuity": {
    src: "/images/services/freedom-hr-solutions-support-service-continuity-service-section.webp",
    alt: "HR support and service continuity",
  },
  "talent-workforce-development": {
    src: "/images/services/freedom-hr-solutions-talent-workforce-development-service-section.webp",
    alt: "Talent and workforce development consulting",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <HomepageHero
        eyebrow="Headquartered in Las Vegas. Serving businesses nationwide."
        title="HR, Payroll, Benefits, and Compliance Support for Growing Businesses"
        description="Freedom HR Solutions helps businesses identify HR risks, improve payroll and benefits processes, manage ACA reporting, implement HR systems, and strengthen workforce operations."
        trustLine="Not sure where to start? The HR MRI Risk Assessment gives you a clear next step."
        primaryCta={{ label: "Request HR MRI Assessment", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

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

      {/* 4. Common Problems */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="The problem"
          title="HR, Payroll, and Benefits Problems Become Business Problems Fast"
          description="Small gaps in systems, documentation, and compliance create real costs over time. We help you find and fix them."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} index={index} className="h-full">
              <div className="flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03]">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-50" aria-hidden>
                  <problem.Icon className="h-6 w-6 text-red-600" />
                </span>
                <h3 className="font-display text-lg font-bold text-ink">{problem.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{problem.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 5. Services Preview */}
      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Six Service Areas That Cover the HR Lifecycle"
          description="From compliance and ACA reporting to payroll, benefits, HR technology, and workforce development, we cover every stage of the HR and payroll lifecycle."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHubs.map((hub, index) => (
            <Reveal key={hub.slug} index={index} className="h-full">
              <ServiceCard
                title={hub.title}
                summary={hub.summary}
                href={servicePath(hub.slug)}
                withImagePlaceholder
                image={serviceHubImages[hub.slug]}
              />
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/services/">Explore All Services</Button>
        </div>
      </Section>

      {/* 6. Who We Help */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Who We Help"
          title="Built for the Teams and Businesses That Carry the HR Load"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whoWeHelp.map((audience, index) => (
            <Reveal key={audience.href} index={index} className="h-full">
              <AudienceCard title={audience.title} summary={audience.summary} href={audience.href} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 7. Why Choose Freedom HR Solutions */}
      <Section>
        <SectionHeading
          eyebrow="Why Freedom HR"
          title="What Makes Freedom HR Solutions Different"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {whyChoose.map((item, index) => (
            <Reveal key={item.title} index={index} className="h-full">
              <div className="flex h-full gap-4 rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03]">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50" aria-hidden>
                  <item.Icon size={18} strokeWidth={2} className="text-brand-600" />
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-body">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* 8. How We Work (Process Steps) */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Our Process"
          title="How We Work With You"
          description="Every engagement starts with understanding your business before we recommend anything."
        />
        <div className="mt-10">
          <ProcessSteps steps={standardProcess.slice(0, 4)} columns={2} />
        </div>
      </Section>

      {/* 9. Service Area */}
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

      {/* 10. AEO FAQ Section (FaqSection also emits FAQPage JSON-LD) */}
      <FaqSection faqs={homeFaqs} />

      {/* 11. Final CTA Band */}
      <CtaBand />
    </>
  );
}
