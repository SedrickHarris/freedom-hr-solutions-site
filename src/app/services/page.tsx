import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Button } from "@/components/ui/Button";
import { serviceHubs } from "@/data/serviceHubs";
import { launchServices } from "@/data/services";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";
import { servicePath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR, Payroll, Benefits, and Compliance Services | Freedom HR Solutions",
  description:
    "Explore HR compliance, ACA reporting, payroll and benefits, HR technology, system implementation, technical support, and HR advisory services from Freedom HR Solutions. Serving Las Vegas and nationwide.",
  path: "/services/",
});

const servicesFaqs = [
  {
    question: "What does Freedom HR Solutions do?",
    answer:
      "We provide HR compliance, payroll, benefits, ACA reporting, HR technology, system implementation, technical support, and workforce support for growing businesses.",
  },
  {
    question: "What HR services does Freedom HR Solutions offer?",
    answer:
      "We offer HR compliance support, ACA reporting consulting, payroll and benefits HR management, employee handbook creation and management, HRIS implementation, system setup and implementation, open enrollment setup, system audits, reporting and data insights, technical issue resolution, and ongoing technical support. Services are organized into six categories on this page. If you are unsure where to start, the HR MRI Risk Assessment can help you identify which areas to prioritize.",
  },
  {
    question: "Does Freedom HR Solutions provide ongoing or advisory HR support?",
    answer:
      "Yes. In addition to project-based engagements, we provide ongoing HR advisory and technical support for businesses that need consistent access to guidance, troubleshooting, and process support without a full-time HR hire. The HR MRI Risk Assessment is a good starting point if you want a clear picture of where to focus first.",
  },
  {
    question: "What if I am not sure which service I need?",
    answer:
      "Start with an HR MRI Risk Assessment. It reviews your HR, payroll, benefits, and compliance operations and gives you a prioritized plan.",
  },
  {
    question: "Can Freedom HR Solutions work with our existing systems?",
    answer:
      "Yes. We frequently work alongside your existing HR, payroll, and benefits systems and providers.",
  },
  {
    question: "Do you support businesses outside Nevada?",
    answer:
      "Yes. We are headquartered in Las Vegas and support businesses nationwide through remote consulting and system support.",
  },
];

const servicesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HR, Payroll, Benefits, and Compliance Services",
  description:
    "A directory of HR compliance, ACA reporting, payroll, benefits, HR technology, and system support services offered by Freedom HR Solutions.",
  url: `${site.url}/services/`,
  provider: {
    "@type": "ProfessionalService",
    name: site.name,
    url: site.url,
  },
};

export default function ServicesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

      <Hero
        eyebrow="Services"
        title="HR, Payroll, Benefits, Compliance, and Technology Services"
        description="Practical HR, payroll, benefits, compliance, ACA reporting, and technology support organized into six service categories. Whether you need a single service or ongoing advisory support, start here."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          If you are not sure where to start, the{" "}
          <Link href="/request-assessment/" className="text-brand-700 underline hover:text-brand-800">
            HR MRI Risk Assessment
          </Link>{" "}
          gives you a prioritized view of your HR, payroll, and compliance health before you select a
          service. You can also explore{" "}
          <Link href="/who-we-help/" className="text-brand-700 underline hover:text-brand-800">
            who we help
          </Link>{" "}
          or view our{" "}
          <Link href="/partners/" className="text-brand-700 underline hover:text-brand-800">
            supported platforms and partners
          </Link>
          .
        </p>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Service categories"
          title="Six service categories covering the full HR lifecycle"
          description="Each category is a hub that links to the individual services within it."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHubs.map((hub) => (
            <ServiceCard
              key={hub.slug}
              title={hub.title}
              summary={hub.summary}
              href={servicePath(hub.slug)}
              withImagePlaceholder
              image={hub.image}
            />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <div className="rounded-card border border-border bg-white p-8 text-center sm:p-12">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
            Not sure which service you need?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-body">
            That is exactly what the HR MRI Risk Assessment is for. We review your HR, payroll,
            benefits, and compliance operations and show you what to prioritize first.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={ctas.assessment.href} size="lg">
              {ctas.assessment.label}
            </Button>
            <Button href={ctas.consultation.href} variant="outline" size="lg">
              {ctas.consultation.label}
            </Button>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Featured services" title="Featured HR and compliance services" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {launchServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              summary={service.summary}
              href={servicePath(service.slug)}
              withImagePlaceholder
              image={service.image}
            />
          ))}
        </div>
      </Section>

      <FaqSection faqs={servicesFaqs} />

      <CtaBand />

      <SchemaScript schema={servicesCollectionSchema} id="schema-collection" />
    </>
  );
}
