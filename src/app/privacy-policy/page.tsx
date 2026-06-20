import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { site } from "@/data/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy | Freedom HR Solutions",
  description:
    "How Freedom HR Solutions collects, uses, and protects the information you provide through this website.",
  path: "/privacy-policy/",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy/" }]} />

      <Section containerSize="narrow">
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">Privacy Policy</h1>
        <p className="mt-4 rounded-card border border-border bg-muted p-4 text-sm text-muted-text">
          This is a starting privacy notice describing how the website forms work. It should be
          reviewed and replaced with final, client-approved legal language before launch.
        </p>

        <div className="mt-8 space-y-8 leading-relaxed text-body">
          <section>
            <h2 className="font-display text-xl font-bold text-ink">Information we collect</h2>
            <p className="mt-2">
              When you submit a form on this website, we collect the information you choose to provide,
              which may include your name, email address, phone number, company name, company details,
              and the message or request you send.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">How we use your information</h2>
            <p className="mt-2">
              We use the information you provide to respond to your request, follow up about HR, payroll,
              benefits, compliance, and related services, and communicate with you using the contact
              details and preferences you share.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">Communication consent</h2>
            <p className="mt-2">
              By submitting a form, you agree that Freedom HR Solutions may contact you using the
              information provided. Message and data rates may apply. You may opt out of text messages
              at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">Service providers</h2>
            <p className="mt-2">
              We may use trusted third-party tools to host this website, deliver messages, and manage
              inquiries. These providers only receive the information needed to perform their services.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">Your choices</h2>
            <p className="mt-2">
              You can request that we update or remove your information, and you can opt out of further
              communication at any time by contacting us.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-bold text-ink">Contact</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${site.email}`} className="text-brand-700 hover:text-brand-800">
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </Section>
    </>
  );
}
