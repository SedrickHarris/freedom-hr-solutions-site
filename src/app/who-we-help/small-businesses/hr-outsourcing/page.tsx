import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { Button } from "@/components/ui/Button";
import { serviceRefs, audienceRefs } from "@/lib/links";
import { professionalServiceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { ChevronRight } from "lucide-react";

const PATH = "/who-we-help/small-businesses/hr-outsourcing/";

export const metadata = buildMetadata({
  title: "Small Business HR Outsourcing | Outsourced HR Services | Freedom HR Solutions",
  description:
    "Freedom HR Solutions provides outsourced HR services for small businesses: compliance, payroll, benefits, handbooks, and HR technology support. Las Vegas and nationwide.",
  path: PATH,
});

const outsourcedServices = [
  {
    title: "HR Compliance and Policy",
    description:
      "Handbook creation, policy review, compliance gap identification, and documentation support to keep your HR foundation current.",
  },
  {
    title: "Payroll and Benefits Administration",
    description:
      "Payroll system support, benefits setup, enrollment workflows, and ongoing administration so your numbers and deductions stay accurate.",
  },
  {
    title: "Employee Handbook Creation and Updates",
    description:
      "Custom handbook creation, policy updates, annual reviews, multi-state considerations, and acknowledgment tracking.",
  },
  {
    title: "HR System Setup and Support",
    description:
      "HRIS configuration, data migration, integrations, testing, and ongoing technical support for your HR and payroll technology.",
  },
  {
    title: "ACA Reporting",
    description:
      "Eligibility tracking, data preparation, and ACA reporting support so your filings are organized and prepared accurately.",
  },
  {
    title: "Open Enrollment Support",
    description:
      "Benefits plan setup, employee communication, pre-enrollment testing, and post-enrollment reconciliation.",
  },
];

const outsourceTriggers = [
  "No one internally owns HR responsibilities",
  "Compliance gaps are unknown or growing",
  "Payroll or benefits errors are recurring",
  "The business is growing into new states",
  "An HR system needs to be implemented or fixed",
  "HR tasks are consuming time that should go to running the business",
  "You want HR expertise without the cost of a full-time hire",
  "Policies and handbooks have not been reviewed in over a year",
];

const comparisonRows = [
  {
    label: "Cost",
    outsourced: "No salary, benefits, or overhead",
    inHouse: "Full salary plus benefits and overhead",
  },
  {
    label: "Flexibility",
    outsourced: "Scale support up or down as needed",
    inHouse: "Fixed headcount",
  },
  {
    label: "Expertise",
    outsourced: "Access to specialized HR, payroll, benefits, and compliance knowledge",
    inHouse: "Depends on the individual hire",
  },
  {
    label: "Speed to start",
    outsourced: "Engagement begins quickly",
    inHouse: "Hiring and onboarding takes time",
  },
  {
    label: "Best for",
    outsourced: "Small businesses without full-time HR needs",
    inHouse: "Companies with ongoing, high-volume HR workload",
  },
];

const pageFaqs = [
  {
    question: "What is HR outsourcing for small businesses?",
    answer:
      "HR outsourcing for small businesses means working with an outside HR consulting firm to handle compliance, payroll, benefits, handbooks, and HR technology support without a full-time internal HR department. Freedom HR Solutions provides outsourced HR services for small businesses in Las Vegas, Nevada, and nationwide.",
  },
  {
    question: "What HR services can be outsourced?",
    answer:
      "Small businesses can outsource HR compliance, payroll and benefits administration, employee handbook creation and updates, HR system setup and support, ACA reporting, and open enrollment preparation.",
  },
  {
    question: "How much does HR outsourcing cost for a small business?",
    answer:
      "Cost varies based on the scope of services needed. Freedom HR Solutions works with small businesses to provide support based on specific needs rather than a one-size-fits-all package. Contact us to discuss your situation.",
  },
  {
    question: "Should a small business outsource HR?",
    answer:
      "Outsourcing HR makes sense when no one internally owns HR responsibilities, compliance gaps are growing, payroll errors are recurring, or the business is scaling into new states. It provides access to HR expertise without the cost of a full-time hire.",
  },
  {
    question: "What is the difference between HR outsourcing and a PEO?",
    answer:
      "A PEO (Professional Employer Organization) co-employs your workforce and bundles HR services through a shared employer arrangement. HR outsourcing through a consulting firm provides support for specific functions without a co-employment relationship. Freedom HR Solutions is an HR consulting firm, not a PEO.",
  },
  {
    question: "What is the difference between HR outsourcing and HR software?",
    answer:
      "HR software is a tool that helps manage HR processes. HR outsourcing provides people with expertise who help configure, manage, and support those processes. Many small businesses benefit from both: the right software supported by experienced consultants.",
  },
  {
    question: "Can a small business outsource HR without losing control?",
    answer:
      "Yes. Freedom HR Solutions works as an extension of your team, not a replacement. You retain full control over decisions; we provide the expertise, process support, and capacity to handle HR functions effectively.",
  },
  {
    question:
      "What HR outsourcing services does Freedom HR Solutions provide for small businesses?",
    answer:
      "We provide HR compliance support, payroll and benefits administration, employee handbook creation and management, HR system setup and support, ACA reporting, and open enrollment preparation for small businesses in Las Vegas and nationwide.",
  },
  {
    question: "How does Freedom HR Solutions work with small businesses in Las Vegas?",
    answer:
      "We work with Las Vegas small businesses both on-site within the Las Vegas Valley and remotely. We start with a structured review of your current HR setup and build support around what your business actually needs.",
  },
  {
    question: "How do I get started with outsourced HR for my small business?",
    answer:
      "Start with an HR MRI Risk Assessment. It gives you a clear picture of where your HR, payroll, benefits, and compliance gaps are and what to address first, before investing in new systems or processes.",
  },
];

export default function SmallBusinessHrOutsourcingPage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Who We Help", path: "/who-we-help/" },
          { name: "Small Businesses", path: "/who-we-help/small-businesses/" },
          { name: "HR Outsourcing", path: PATH },
        ]}
      />

      <Hero
        eyebrow="For your business"
        title="Outsourced HR Services for Small Businesses"
        description="HR, payroll, benefits, compliance, and HR technology support for small businesses, without the cost of a full-time internal HR team."
        primaryCta={{ label: "Request HR MRI Assessment", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <TrustBar />

      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          Small business HR outsourcing means working with an outside HR consulting firm to
          handle HR compliance, payroll and benefits administration, employee handbooks, HR
          system support, and related workforce functions, without hiring a full-time internal
          HR team. Freedom HR Solutions provides outsourced HR services for small businesses in
          Las Vegas, Nevada, and nationwide.
        </p>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="What we cover"
          title="What HR Services Can Be Outsourced?"
          description="Small businesses can outsource the full range of HR functions without maintaining an in-house team."
        />
        <div className="mt-10">
          <FeatureGrid items={outsourcedServices} columns={3} variant="card" reveal />
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Is it right for you?"
          title="Should a Small Business Outsource HR?"
          description="Outsourcing HR makes sense in specific situations. Here are the signals that it is time to get outside support."
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {outsourceTriggers.map((trigger) => (
            <li
              key={trigger}
              className="flex items-start gap-3 rounded-card border border-border bg-white p-4 shadow-sm"
            >
              <span
                className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-700"
                aria-hidden
              >
                <ChevronRight size={14} strokeWidth={2.4} />
              </span>
              <span className="text-body">{trigger}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Your options"
          title="HR Outsourcing vs. Hiring In-House HR"
          description="Understanding the tradeoffs helps you choose the approach that fits your business today."
        />
        <div className="mt-10 overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="w-1/3 py-3 pr-6 font-semibold text-ink">
                  <span className="sr-only">Factor</span>
                </th>
                <th className="py-3 pr-6 font-semibold text-ink">Outsourced HR</th>
                <th className="py-3 font-semibold text-ink">In-House HR</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label} className="border-b border-border last:border-0">
                  <td className="py-3 pr-6 font-medium text-ink">{row.label}</td>
                  <td className="py-3 pr-6 text-body">{row.outsourced}</td>
                  <td className="py-3 text-body">{row.inHouse}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section>
        <div className="rounded-card bg-ink px-8 py-10 text-center text-white sm:px-12 sm:py-14">
          <p className="font-display text-2xl font-bold sm:text-3xl">
            Not sure where your HR gaps are?
          </p>
          <p className="mx-auto mt-3 max-w-xl text-base text-white/80">
            The HR MRI Risk Assessment gives you a clear picture of your HR, payroll, benefits,
            and compliance health before you invest in new systems or processes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/request-assessment/" variant="primary" size="lg">
              Request HR MRI Assessment
            </Button>
            <Button
              href="/contact/"
              variant="outline"
              size="lg"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20"
            >
              Schedule Consultation
            </Button>
          </div>
        </div>
      </Section>

      <RelatedPages
        eyebrow="Where to start"
        title="Recommended services for small businesses"
        description="The services small businesses use most often when outsourcing HR to Freedom HR Solutions."
        items={serviceRefs([
          "hr-mri-risk-assessment",
          "compliance-support",
          "payroll-benefits-hr-management",
          "employee-handbook-creation-management",
          "system-setup-implementation",
          "aca-reporting-consultant",
        ])}
        tone="muted"
      />

      <RelatedPages
        eyebrow="Also relevant for"
        title="Related audiences"
        items={audienceRefs([
          "small-businesses",
          "business-owners",
          "growing-businesses",
          "companies-without-hr-departments",
        ])}
      />

      <FaqSection faqs={pageFaqs} />

      <CtaBand
        title="Ready to get HR support for your small business?"
        description="Start with an HR MRI Risk Assessment and get a clear picture of your HR, payroll, and compliance health."
        primaryCta={{ label: "Request HR MRI Assessment", href: "/request-assessment/" }}
        secondaryCta={{ label: "Schedule Consultation", href: "/contact/" }}
      />

      <SchemaScript
        schema={professionalServiceSchema({
          name: "Small Business HR Outsourcing",
          description:
            "Outsourced HR services for small businesses including compliance, payroll, benefits, handbooks, and HR technology support.",
          path: PATH,
        })}
      />
    </>
  );
}
