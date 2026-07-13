import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Button } from "@/components/ui/Button";
import { site } from "@/data/site";
import { ctas } from "@/data/shared";
import { buildMetadata } from "@/lib/seo";
import { personSchema, organizationSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  title: "About Freedom HR Solutions | HR Consulting Firm, Las Vegas and Nationwide",
  description:
    "Freedom HR Solutions is an HR consulting firm headquartered in Las Vegas, Nevada. Learn about the firm, founder Soleil Kline, and how we support businesses with HR compliance, payroll, benefits, ACA reporting, and HR technology.",
  path: "/about/",
});

const values = [
  { title: "Service", description: "We lead with genuine help, and we measure our work by whether your business is better off." },
  { title: "Accountability", description: "We do what we say, follow through, and stay reachable when you need us." },
  { title: "Integrity", description: "We give honest, practical guidance, even when it is not what you hoped to hear." },
  { title: "Clarity", description: "We translate complex HR, payroll, and compliance topics into plain language." },
  { title: "Practical support", description: "We focus on what actually moves the needle for your team, not busywork." },
  { title: "Business-first problem solving", description: "We solve HR problems with your broader business goals in mind." },
];

const serviceHubs = [
  { label: "HR Compliance and Risk Management", href: "/services/hr-compliance/" },
  { label: "ACA Reporting and Compliance", href: "/services/aca-reporting-compliance/" },
  { label: "Payroll, Benefits, and HR Systems", href: "/services/payroll-benefits-hr-systems/" },
  { label: "HR Technology and Automation", href: "/services/hr-technology-automation/" },
  { label: "Support and Service Continuity", href: "/services/support-service-continuity/" },
  { label: "Talent and Workforce Development", href: "/services/talent-workforce-development/" },
];

const aboutFaqs = [
  {
    question: "What does Freedom HR Solutions do?",
    answer:
      "Freedom HR Solutions is an HR consulting firm that helps businesses manage HR compliance, payroll and benefits administration, ACA reporting, HR technology, system implementation, and workforce support. We work with businesses in Las Vegas, across Nevada, and nationwide through remote consulting.",
  },
  {
    question: "Who is Soleil Kline?",
    answer:
      "Soleil Kline is the founder of Freedom HR Solutions. She brings experience across HR technology, payroll, benefits administration, HR compliance, and HCM systems, and works directly with clients on assessments, implementations, and ongoing support.",
  },
  {
    question: "Where is Freedom HR Solutions located?",
    answer:
      "Freedom HR Solutions is headquartered in Las Vegas, Nevada. We support businesses throughout the Las Vegas Valley, across Nevada, and nationwide through remote consulting and system support.",
  },
  {
    question: "Does Freedom HR Solutions work with businesses outside Nevada?",
    answer:
      "Yes. We support businesses nationwide through remote consulting and system support. Multi-state employers and businesses in any state can work with Freedom HR Solutions without being located in Las Vegas or Nevada.",
  },
  {
    question: "What HR and payroll systems does Freedom HR Solutions support?",
    answer:
      "We are platform-agnostic and work alongside the systems your business already uses, including ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms. You are not required to change your technology to work with us.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about/" }]} />

      <Hero
        eyebrow="About us"
        backgroundImage={{
          src: "/images/core/freedom-hr-solutions-founder-led-hr-advisory-session-about-hero.webp",
          alt: "Founder led HR advisory session",
        }}
        title="About Freedom HR Solutions"
        description="Freedom HR Solutions is an HR consulting firm headquartered in Las Vegas, Nevada. We help businesses across Nevada and nationwide manage HR compliance, payroll, benefits, ACA reporting, HR technology, and workforce operations. The firm is founder-led by Soleil Kline, who brings experience across HR technology, payroll, benefits, compliance, and HCM systems."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      {/* Who We Are */}
      <Section containerSize="narrow">
        <SectionHeading eyebrow="Who we are" title="Practical HR support for growing businesses" />
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-body">
          <p>
            Freedom HR Solutions is an HR consulting firm headquartered in Las Vegas, Nevada. We help
            growing businesses manage the HR, payroll, benefits, and compliance responsibilities that
            keep their workforce running. Our work spans HR compliance support, ACA reporting, payroll
            and benefits system management, HR technology implementation, open enrollment, and ongoing
            workforce support.
          </p>
          <p>
            We serve employers throughout the Las Vegas Valley, across Nevada, and nationwide through
            remote consulting and system support. Many of the businesses we help do not have a
            dedicated HR department, and we are built to fill that gap practically and affordably.
          </p>
          <p>
            We are platform-agnostic. We work alongside the systems you already use, including ADP,
            isolved, BambooHR, HiBob, and other HR and payroll platforms, so you are not required to
            change your technology to work with us.
          </p>
        </div>
      </Section>

      {/* Founder Section */}
      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Founder-led" title="Founder-led support from Soleil Kline" />
          </div>
          <div>
            <div className="space-y-4 text-lg leading-relaxed text-body">
              <p>
                Soleil Kline is the founder of Freedom HR Solutions and brings experience across HR
                technology, payroll, benefits administration, HR compliance, HR operations, and HCM
                systems. Freedom HR Solutions was built on the belief that growing businesses deserve
                the same quality of HR support as large enterprises, without the overhead of a full
                internal HR team.
              </p>
              <p>
                Soleil works directly with clients on assessments, implementations, compliance
                reviews, and ongoing support. The firm&apos;s founder-led model means the person you
                contact is the person doing the work.
              </p>
            </div>
            <div className="mt-6">
              <Button href={site.founder.linkedin} variant="outline">
                Connect with Soleil on LinkedIn
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* What We Do - Service Hub Links */}
      <Section containerSize="narrow">
        <SectionHeading eyebrow="Our services" title="What Freedom HR Solutions does" />
        <p className="mt-4 text-lg leading-relaxed text-body">
          Freedom HR Solutions provides support across six service areas. Each links to a dedicated
          service category with specific services underneath.
        </p>
        <ul className="mt-6 space-y-2">
          {serviceHubs.map((hub) => (
            <li key={hub.href}>
              <Link
                href={hub.href}
                className="text-brand-600 hover:underline text-lg font-medium"
              >
                {hub.label}
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      {/* Values Grid */}
      <Section tone="muted">
        <SectionHeading eyebrow="What we value" title="The principles behind our work" />
        <div className="mt-10">
          <FeatureGrid items={values} columns={3} variant="card" />
        </div>
      </Section>

      {/* Local and Nationwide */}
      <Section containerSize="narrow">
        <SectionHeading eyebrow="Local and nationwide" title="Local roots, nationwide reach" />
        <div className="mt-5 space-y-4 text-lg leading-relaxed text-body">
          <p>
            Our Las Vegas headquarters anchors our local presence in the Las Vegas Valley. We support
            businesses in{" "}
            <Link href="/locations/las-vegas-nv/" className="text-brand-600 hover:underline">
              Las Vegas
            </Link>
            ,{" "}
            <Link href="/locations/henderson-nv/" className="text-brand-600 hover:underline">
              Henderson
            </Link>
            , and{" "}
            <Link href="/locations/north-las-vegas-nv/" className="text-brand-600 hover:underline">
              North Las Vegas
            </Link>{" "}
            directly, and serve Nevada employers statewide on HR compliance, ACA reporting, and
            payroll and benefits system support.
          </p>
          <p>
            Remote delivery extends that reach nationwide. Multi-state employers, businesses without
            a local HR consulting option, and companies that have worked with us locally and expanded
            across states all rely on our remote consulting and system support model. You do not need
            to be in Las Vegas to work with Freedom HR Solutions.
          </p>
        </div>
      </Section>

      {/* FAQ Section */}
      <FaqSection faqs={aboutFaqs} />

      <CtaBand />

      <SchemaScript schema={personSchema()} />
      <SchemaScript schema={organizationSchema()} />
    </>
  );
}
