import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { serviceHubs } from "@/data/serviceHubs";
import { launchServices } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { servicePath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR, Payroll, Benefits, and Compliance Services | Freedom HR Solutions",
  description:
    "Explore HR compliance, ACA reporting, payroll, benefits, HR technology, system implementation, technical support, training, and workforce services from Freedom HR Solutions.",
  path: "/services/",
});

const servicesFaqs = [
  { question: "What does Freedom HR Solutions do?", answer: "We provide HR compliance, payroll, benefits, ACA reporting, HR technology, system implementation, technical support, and workforce support for growing businesses." },
  { question: "What if I am not sure which service I need?", answer: "Start with an HR MRI Risk Assessment. It reviews your HR, payroll, benefits, and compliance operations and gives you a prioritized plan." },
  { question: "Can Freedom HR Solutions work with our existing systems?", answer: "Yes. We frequently work alongside your existing HR, payroll, and benefits systems and providers." },
  { question: "Do you support businesses outside Nevada?", answer: "Yes. We are headquartered in Las Vegas and support businesses nationwide through remote consulting and system support." },
];

export default function ServicesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services/" }]} />

      <Hero
        eyebrow="Services"
        title="HR, Payroll, Benefits, Compliance, and Technology Services"
        description="Practical support across the full HR, payroll, benefits, and compliance lifecycle, organized into six service categories so you can find the right help quickly."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      <Section>
        <SectionHeading
          eyebrow="Service categories"
          title="Six categories that cover the HR lifecycle"
          description="Each category is a hub that links to the individual services within it."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {serviceHubs.map((hub) => (
            <ServiceCard
              key={hub.slug}
              title={hub.title}
              summary={hub.summary}
              href={servicePath(hub.slug)}
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
        <SectionHeading eyebrow="Featured services" title="Popular individual services" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {launchServices.map((service) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              summary={service.summary}
              href={servicePath(service.slug)}
            />
          ))}
        </div>
      </Section>

      <FaqSection faqs={servicesFaqs} />

      <CtaBand />
    </>
  );
}
