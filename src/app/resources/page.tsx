import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { resourceCategories, featuredResources } from "@/data/resources";
import { publishedPosts, blogCategoriesBySlug } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { blogPath } from "@/lib/routes";
import { ctas } from "@/data/shared";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "HR Compliance Checklists and Resources for Employers | Freedom HR Solutions",
  description:
    "HR compliance checklists, ACA reporting resources, payroll guides, and benefits administration resources for employers. Serving Las Vegas, Nevada, and nationwide.",
  path: "/resources/",
});

const resourcesFaqs = [
  {
    question: "What types of HR resources does Freedom HR Solutions provide?",
    answer:
      "Freedom HR Solutions is developing practical checklists and guides covering HR compliance, ACA reporting, payroll system implementation, benefits administration, open enrollment, employee handbooks, HR technology, and workforce compliance. Checklists will be available for download when published.",
  },
  {
    question: "Where can I find HR compliance checklists for employers?",
    answer:
      "HR compliance checklists are being developed and will be available on this page. In the meantime, the HR MRI Risk Assessment provides a tailored review of your specific HR compliance, payroll, and benefits situation.",
  },
  {
    question: "Does Freedom HR Solutions have ACA reporting resources for employers?",
    answer:
      "Yes. An ACA Reporting Checklist is in development and will be available here when published. For support now, our ACA reporting consulting service helps employers determine ALE status, organize workforce data, and prepare IRS 1094 and 1095 filings. We provide guidance, not legal or tax advice.",
  },
  {
    question: "How do I access HR checklists and guides from Freedom HR Solutions?",
    answer:
      "Checklists and guides will be available for download directly from this page as they are published. You can also request an HR MRI Assessment for a structured review of your HR, payroll, and compliance needs while resources are being finalized.",
  },
];

const resourcesCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "HR Compliance Checklists and Resources for Employers | Freedom HR Solutions",
  description:
    "HR compliance checklists, ACA reporting resources, payroll guides, and benefits administration resources for employers.",
  url: `${site.url}/resources/`,
  provider: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function ResourcesHubPage() {
  const featuredPosts = publishedPosts.slice(0, 3);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources/" },
        ]}
      />

      <Hero
        eyebrow="Resources"
        backgroundImage={{
          src: "/images/core/freedom-hr-solutions-employer-resource-library-table-hero.webp",
          alt: "Employer resource library",
        }}
        title="HR Compliance Checklists and Resources for Employers"
        description="Practical checklists, guides, and references to help you manage HR compliance, ACA reporting, payroll systems, benefits administration, HR technology, and open enrollment. Checklists are in development and will be available for download when published."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      {/* Direct answer block for LLM and AEO citation */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          This page collects HR compliance checklists, payroll guides, ACA reporting resources,
          benefits administration references, and HR technology guides for employers. Checklists
          are being developed and will be available for download. In the meantime, the{" "}
          <Link
            href="/request-assessment/"
            className="text-brand-700 underline hover:text-brand-800"
          >
            HR MRI Risk Assessment
          </Link>{" "}
          provides a tailored review of your HR, payroll, and compliance situation.
        </p>
      </Section>

      {/* Resource category grid, first content section */}
      <Section>
        <SectionHeading
          eyebrow="Browse by topic"
          title="Nine resource categories"
          description="Covering HR compliance, ACA reporting, payroll systems, benefits administration, HR technology, open enrollment, employee handbooks, workforce compliance, and training and development."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category) => (
            <div
              key={category.slug}
              className="rounded-card border border-border bg-white p-6"
            >
              <h3 className="font-display text-lg font-bold text-ink">
                {category.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-body">
                {category.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Upcoming checklists, renamed and reframed */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Checklists"
          title="Upcoming downloadable checklists"
          description="These checklists are in development. Each covers a practical area of HR, payroll, or compliance operations. Request an HR MRI Assessment for a tailored review while checklists are being finalized."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredResources.map((resource) => (
            <ResourceCard
              key={resource.title}
              title={resource.title}
              description={resource.description}
              status={resource.status}
            />
          ))}
        </div>
      </Section>

      {/* Internal link block */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="Get support now"
          title="Connect resources to services"
        />
        <div className="mt-6 space-y-4">
          <p className="leading-relaxed text-body">
            Each resource category connects to a corresponding service. Explore{" "}
            <Link
              href="/services/compliance-support/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              HR compliance support
            </Link>
            ,{" "}
            <Link
              href="/services/aca-reporting-consultant/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              ACA reporting consulting
            </Link>
            ,{" "}
            <Link
              href="/services/payroll-benefits-hr-management/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              payroll and benefits HR management
            </Link>
            , or{" "}
            <Link
              href="/services/employee-handbook-creation-management/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              employee handbook creation
            </Link>
            . For answers to common employer questions, visit our{" "}
            <Link
              href="/faqs/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              frequently asked questions
            </Link>{" "}
            page.
          </p>
        </div>
      </Section>

      {/* Compact blog callout, max 3 posts */}
      {featuredPosts.length > 0 && (
        <Section tone="muted">
          <SectionHeading
            eyebrow="From the blog"
            title="Related articles"
            description="Practical HR compliance, ACA reporting, payroll, and benefits articles for employers."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                href={blogPath(post.slug)}
                categoryLabel={blogCategoriesBySlug[post.categorySlug]?.title}
              />
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/blog/"
              className="font-semibold text-brand-700 hover:text-brand-800"
            >
              View all articles
            </Link>
          </div>
        </Section>
      )}

      {/* FAQ section */}
      <FaqSection faqs={resourcesFaqs} />

      <CtaBand />

      <SchemaScript schema={resourcesCollectionSchema} />
    </>
  );
}
