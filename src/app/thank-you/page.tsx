import type { Metadata } from "next";
import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { servicePath, audiencePath } from "@/lib/routes";

export const metadata: Metadata = {
  title: "Thank You | Freedom HR Solutions",
  description: "Thank you for contacting Freedom HR Solutions. Your request has been received.",
  // Conversion confirmation page is intentionally excluded from indexing.
  robots: { index: false, follow: true },
  alternates: { canonical: "/thank-you/" },
};

const nextPages = [
  { title: "Explore our services", href: "/services/" },
  { title: "HR MRI Risk Assessment", href: servicePath("hr-mri-risk-assessment") },
  { title: "ACA Reporting Consultant", href: servicePath("aca-reporting-consultant") },
  { title: "Payroll, Benefits & HR Management", href: servicePath("payroll-benefits-hr-management") },
  { title: "See who we help", href: "/who-we-help/" },
  { title: "For business owners", href: audiencePath("business-owners") },
];

export default function ThankYouPage() {
  return (
    <Section containerSize="narrow" spacing="loose">
      <div className="text-center">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-50" aria-hidden>
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#1f4ed6" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h1 className="mt-6 font-display text-3xl font-extrabold text-ink sm:text-4xl">
          Thank you for contacting Freedom HR Solutions
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-body">
          Your request has been received. We will review the information you submitted and follow up
          using the contact details you provided.
        </p>
        <div className="mt-8">
          <Button href="/" size="lg">
            Return to homepage
          </Button>
        </div>
      </div>

      <div className="mt-14">
        <h2 className="text-center font-display text-xl font-bold text-ink">While you are here</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {nextPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="rounded-lg border border-border bg-white px-5 py-3.5 font-medium text-ink transition-colors hover:border-brand-200 hover:text-brand-700"
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}
