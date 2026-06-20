import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { PartnerCard } from "@/components/cards/PartnerCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { partners } from "@/data/partners";
import { serviceRefs } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";
import { partnerPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR, Payroll, Benefits, and HCM Platform Support | Freedom HR Solutions",
  description:
    "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR, payroll, benefits, and HCM workflows involving leading workforce technology platforms.",
  path: "/partners/",
});

const partnersFaqs = [
  { question: "Is Freedom HR Solutions an official partner of these platforms?", answer: "We help businesses implement, configure, optimize, and support workflows involving these platforms. We do not claim official partnership, certification, or endorsement unless that status has been confirmed." },
  { question: "Can you work with the platform we already use?", answer: "Yes. We frequently work alongside your existing platform and providers to support and improve your workflows." },
  { question: "Which platforms can Freedom HR Solutions help with?", answer: "We support workflows involving a range of HR, payroll, benefits, and HCM platforms. If you do not see yours listed, contact us to ask." },
];

export default function PartnersHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }]} />

      <Hero
        eyebrow="Platform support"
        title="HR, Payroll, Benefits, and HCM Platform Support"
        description="Freedom HR Solutions helps businesses implement, configure, optimize, and support workflows involving leading HR, payroll, benefits, and HCM platforms. The goal is to help your systems work better for your team."
        primaryCta={ctas.systemReview}
        secondaryCta={ctas.consultation}
      />

      <Section>
        <SectionHeading
          eyebrow="Supported platforms"
          title="Platforms we help businesses get more from"
          description="We support workflows involving these platforms. We do not claim official partnership unless confirmed."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <PartnerCard
              key={partner.slug}
              name={partner.name}
              category={partner.category}
              summary={partner.summary}
              href={partnerPath(partner.slug)}
            />
          ))}
        </div>
      </Section>

      <RelatedPages
        eyebrow="Services"
        title="How platform support connects to our services"
        items={serviceRefs([
          "system-setup-implementation",
          "hr-technology-automation",
          "technical-issue-resolution",
          "ongoing-technical-support",
          "payroll-benefits-hr-management",
          "reporting-data-insights",
        ])}
        tone="muted"
      />

      <FaqSection faqs={partnersFaqs} />

      <CtaBand
        title="Want help getting more from your HR platform?"
        primaryCta={ctas.systemReview}
        secondaryCta={ctas.consultation}
      />
    </>
  );
}
