import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { PartnerCard } from "@/components/cards/PartnerCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { partners } from "@/data/partners";
import { serviceRefs } from "@/lib/links";
import { buildMetadata } from "@/lib/seo";
import { collectionPageSchema } from "@/lib/schema";
import { partnerPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR Platform, Benefits, and Consulting Partners | Freedom HR Solutions",
  description:
    "Freedom HR Solutions works with HR platforms, benefits carriers, and consulting partners to support payroll, compliance, and workforce needs in Nevada and nationwide.",
  path: "/partners/",
});

const PLATFORM_SLUGS = [
  "adp-consulting-support",
  "bamboohr-consulting-support",
  "customhcm-consulting-support",
  "hibob-consulting-support",
  "isolved-consulting-support",
  "legalshield-benefits-support",
];

const CONSULTING_SLUGS = [
  "champion-group-insurance",
  "champion-insurance",
  "haniel-consulting",
  "pursuit-pathways",
];

const platformPartners = partners.filter((p) => PLATFORM_SLUGS.includes(p.slug));
const consultingPartners = partners.filter((p) => CONSULTING_SLUGS.includes(p.slug));

const partnersFaqs = [
  {
    question: "Is Freedom HR Solutions an official partner of these platforms?",
    answer:
      "We help businesses implement, configure, optimize, and support workflows involving these platforms. We do not claim official partnership, certification, or endorsement unless that status has been confirmed. Our support is provided as an independent HR consulting firm.",
  },
  {
    question: "What is the difference between a platform partner and a consulting partner on this page?",
    answer:
      "Platform partners are HR, payroll, and benefits software systems, such as ADP, isolved, and BambooHR, where we help businesses configure, implement, and troubleshoot workflows. Consulting and insurance partners are independent firms we collaborate with to extend the scope of support available to clients beyond HR and payroll.",
  },
  {
    question: "Can Freedom HR Solutions work with the platform my business already uses?",
    answer:
      "Yes. We frequently work alongside platforms and providers your business already has in place. If you do not see your platform listed, contact us to ask whether we can support your specific workflows.",
  },
  {
    question: "How does Freedom HR Solutions work with its consulting and insurance partners?",
    answer:
      "We collaborate with Haniel Consulting, PursuitPathways, and Champion Insurance as independent firms that serve clients alongside us when the scope of a client's needs extends beyond HR, payroll, and benefits. Each firm operates independently and we do not share fees, commissions, or endorsements unless confirmed.",
  },
  {
    question: "Does Freedom HR Solutions support businesses in Nevada and nationwide?",
    answer:
      "Yes. We support businesses in Las Vegas, Henderson, North Las Vegas, and across Nevada, as well as clients in other states who need remote HR, payroll, compliance, and platform support. Our partner network supports both local and distributed workforces.",
  },
  {
    question: "How do I get started with Freedom HR Solutions platform or partner support?",
    answer:
      "Start with a system review or schedule a consultation. We will assess your current HR, payroll, and benefits setup and identify where platform support or a partner referral would help most.",
  },
];

export default function PartnersHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Partners", path: "/partners/" }]} />

      <Hero
        eyebrow="Partners and platform support"
        title="HR, Payroll, Benefits, and Consulting Partners"
        description="Freedom HR Solutions works alongside HR platforms, payroll systems, benefits carriers, and trusted business partners to help companies in Nevada and nationwide build and maintain stronger HR and workforce operations."
        primaryCta={ctas.systemReview}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Freedom HR Solutions works alongside HR platforms, payroll systems, benefits carriers, and
          trusted consulting and insurance partners to support businesses in{" "}
          <Link
            href="/locations/las-vegas-nv/"
            className="font-medium text-brand-700 underline-offset-2 hover:underline"
          >
            Las Vegas
          </Link>
          ,{" "}
          <Link
            href="/locations/nevada/"
            className="font-medium text-brand-700 underline-offset-2 hover:underline"
          >
            Nevada
          </Link>
          , and{" "}
          <Link
            href="/locations/nationwide-hr-consulting/"
            className="font-medium text-brand-700 underline-offset-2 hover:underline"
          >
            nationwide
          </Link>
          . Our role is to help your team get more from the systems and relationships you already
          have, and to connect you with the right resources when your needs extend beyond{" "}
          <Link
            href="/services/payroll-benefits-hr-management/"
            className="font-medium text-brand-700 underline-offset-2 hover:underline"
          >
            payroll and benefits
          </Link>
          ,{" "}
          <Link
            href="/services/system-setup-implementation/"
            className="font-medium text-brand-700 underline-offset-2 hover:underline"
          >
            implementation support
          </Link>
          , or{" "}
          <Link
            href="/services/technical-issue-resolution/"
            className="font-medium text-brand-700 underline-offset-2 hover:underline"
          >
            troubleshooting
          </Link>
          .
        </p>
        <p className="mt-4 rounded-card border border-border bg-muted p-4 text-sm text-muted-text">
          Freedom HR Solutions does not claim official partnership, certification, or endorsement
          with any platform or firm listed on this page unless that status has been confirmed. All
          platform support is provided as an independent HR consulting firm.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="HR and payroll platforms"
          title="HR, payroll, and benefits platforms we support"
          description="We help businesses implement, configure, optimize, and troubleshoot workflows involving these platforms. We are not an official partner or reseller unless confirmed."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platformPartners.map((partner) => (
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

      <Section>
        <SectionHeading
          eyebrow="Consulting and insurance partners"
          title="Consulting, insurance, and workforce partners"
          description="Trusted independent firms we collaborate with to give clients access to broader business, insurance, and workforce support alongside HR services."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {consultingPartners.map((partner) => (
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
        title="How partner support connects to our services"
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
        title="Want help getting more from your HR platform or partner network?"
        primaryCta={ctas.systemReview}
        secondaryCta={ctas.consultation}
      />

      <SchemaScript
        schema={collectionPageSchema({
          name: "HR Platform, Benefits, and Consulting Partners",
          description:
            "Freedom HR Solutions works with HR platforms, benefits carriers, and consulting partners to support payroll, compliance, and workforce needs in Nevada and nationwide.",
          path: "/partners/",
        })}
      />
    </>
  );
}
