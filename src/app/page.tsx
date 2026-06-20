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
import { PartnerCard } from "@/components/cards/PartnerCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { serviceHubs } from "@/data/serviceHubs";
import { launchServices } from "@/data/services";
import { audiences } from "@/data/audiences";
import { partners } from "@/data/partners";
import { site } from "@/data/site";
import { standardProcess, ctas } from "@/data/shared";
import { buildMetadata } from "@/lib/seo";
import { professionalServiceSchema } from "@/lib/schema";
import { servicePath, audiencePath, partnerPath } from "@/lib/routes";

export const metadata: Metadata = buildMetadata({
  title: "Freedom HR Solutions | HR, Payroll, Benefits, and Compliance Support",
  description:
    "Freedom HR Solutions is headquartered in Las Vegas and supports businesses locally and nationwide with HR compliance, payroll, benefits, ACA reporting, HR technology, and system support.",
  path: "/",
});

const trustPoints = [
  "Las Vegas headquartered",
  "Nationwide service delivery",
  "HR, payroll, benefits, and compliance support",
  "Founder-led HR technology experience",
  "Support for growing and multi-state employers",
];

const problems = [
  { title: "Payroll errors", description: "Mistakes create employee frustration and hours of administrative rework." },
  { title: "Benefits confusion", description: "Setup and eligibility issues cause problems during open enrollment and beyond." },
  { title: "ACA reporting stress", description: "Reporting errors can lead to notices and penalty exposure." },
  { title: "Disconnected systems", description: "When systems do not talk to each other, reporting and compliance get harder." },
  { title: "Outdated policies", description: "Handbooks and policies that have not kept up create unnecessary risk." },
  { title: "Outgrowing your processes", description: "Growing companies often outgrow their HR processes before they realize it." },
];

const homeFaqs = [
  { question: "What does Freedom HR Solutions do?", answer: "We provide HR compliance, payroll, benefits, ACA reporting, HR technology, system implementation, technical support, and workforce support for growing businesses." },
  { question: "Where is Freedom HR Solutions headquartered?", answer: "We are headquartered in Las Vegas, Nevada." },
  { question: "Does Freedom HR Solutions serve businesses nationwide?", answer: "Yes. We are based in Las Vegas and support businesses locally, statewide, and nationwide through remote consulting and system support." },
  { question: "What is the HR MRI Risk Assessment?", answer: "It is a structured review of your HR, payroll, benefits, and compliance operations that identifies gaps and gives you a prioritized plan to address them." },
  { question: "Can Freedom HR Solutions work with our existing payroll or HR provider?", answer: "Yes. We frequently work alongside your existing systems and providers to support and improve your workflows." },
];

export default function HomePage() {
  const featuredAudiences = audiences.filter((a) =>
    ["business-owners", "small-businesses", "growing-businesses", "hr-teams", "payroll-teams", "multi-state-employers"].includes(a.slug),
  );

  return (
    <>
      <Hero
        variant="home"
        eyebrow="Headquartered in Las Vegas. Serving businesses nationwide."
        title="HR, Payroll, Benefits, and Compliance Support for Growing Businesses"
        description="Freedom HR Solutions helps businesses identify HR risks, improve payroll and benefits processes, manage ACA reporting, implement HR systems, and strengthen workforce operations."
        trustLine="Not sure where to start? The HR MRI Risk Assessment gives you a clear next step."
        primaryCta={ctas.assessment}
        secondaryCta={{ label: "Explore Services", href: "/services/" }}
        aside={
          <div className="rounded-card border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
            <p className="text-sm font-semibold uppercase tracking-wide text-white/70">How we help</p>
            <ul className="mt-4 space-y-3">
              {serviceHubs.slice(0, 6).map((hub) => (
                <li key={hub.slug} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400" aria-hidden />
                  {hub.title}
                </li>
              ))}
            </ul>
          </div>
        }
      />

      <div className="border-b border-border bg-white">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-5 py-5 sm:px-6 lg:px-8">
          {trustPoints.map((point) => (
            <span key={point} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path d="M20 6L9 17l-5-5" stroke="#c8252b" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {point}
            </span>
          ))}
        </div>
      </div>

      <Section tone="muted">
        <SectionHeading
          eyebrow="The problem"
          title="HR, payroll, and benefits problems become business problems fast"
          description="Small gaps in systems, documentation, and compliance create real costs over time. We help you find and fix them."
        />
        <div className="mt-10">
          <FeatureGrid items={problems} columns={3} variant="card" />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Services"
          title="Practical support across the HR, payroll, benefits, and compliance lifecycle"
          description="Six service categories that cover the work of running and growing a workforce."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHubs.map((hub) => (
            <ServiceCard key={hub.slug} title={hub.title} summary={hub.summary} href={servicePath(hub.slug)} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/services/" variant="outline">
            Explore all services
          </Button>
        </div>
      </Section>

      <Section tone="brand">
        <div className="grid items-center gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <Badge tone="onDark" className="mb-4">Start here</Badge>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              Start with an HR MRI Risk Assessment
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-white/85">
              If you are not sure where your biggest HR, payroll, benefits, or compliance risks are,
              the HR MRI Risk Assessment gives your business a practical starting point. We review key
              areas of your HR operations, identify potential gaps, and help you understand what to
              address first.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href={ctas.assessment.href} variant="white" size="lg">
                {ctas.assessment.label}
              </Button>
              <Button href={ctas.consultation.href} variant="outline" size="lg" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                {ctas.consultation.label}
              </Button>
            </div>
          </div>
          <ul className="space-y-3 rounded-card border border-white/15 bg-white/10 p-6">
            {["HR and compliance review", "Payroll and benefits review", "Systems and reporting review", "Prioritized, practical findings"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-white/90">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M20 6L9 17l-5-5" stroke="#bcd2ff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Who we help" title="Support built around your role and business" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredAudiences.map((audience) => (
            <AudienceCard key={audience.slug} title={audience.navLabel} summary={audience.summary} href={audiencePath(audience.slug)} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/who-we-help/" variant="outline">
            See everyone we help
          </Button>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Platform support"
          title="Support for the HR, payroll, benefits, and HCM platforms you use"
          description="We help businesses implement, configure, optimize, and support workflows involving leading platforms. The goal is to help your systems work better, not replace the tools you rely on."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.slice(0, 6).map((partner) => (
            <PartnerCard key={partner.slug} name={partner.name} category={partner.category} summary={partner.summary} href={partnerPath(partner.slug)} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Our process"
          title="A clear, practical way of working"
          description="From the first conversation through ongoing support, you always know what comes next."
        />
        <div className="mt-10">
          <ProcessSteps steps={standardProcess} />
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Badge className="mb-4">Founder-led</Badge>
            <h2 className="font-display text-3xl font-bold text-ink">Founder-led support from Soleil Kline</h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-body">
              Soleil Kline, founder of Freedom HR Solutions, brings experience across HR technology,
              payroll, benefits, compliance, HR operations, and HCM systems. Freedom HR Solutions was
              created to help businesses make sense of the systems, processes, and compliance
              responsibilities that keep their workforce running.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/about/" className="font-semibold text-brand-700 hover:text-brand-800">
                Learn more about us →
              </Link>
              <a href={site.founder.linkedin} target="_blank" rel="noopener noreferrer" className="font-semibold text-brand-700 hover:text-brand-800">
                Connect with Soleil on LinkedIn →
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Featured services" title="Popular ways we help" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {launchServices.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} title={service.title} summary={service.summary} href={servicePath(service.slug)} />
          ))}
        </div>
      </Section>

      <FaqSection faqs={homeFaqs} />

      <CtaBand />

      <SchemaScript schema={professionalServiceSchema({ path: "/" })} />
    </>
  );
}
