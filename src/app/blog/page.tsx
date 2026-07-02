import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { BlogCard } from "@/components/cards/BlogCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { blogCategories, blogCategoriesBySlug, publishedPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { blogPath, blogCategoryPath } from "@/lib/routes";
import { ctas } from "@/data/shared";
import { site } from "@/data/site";

export const metadata: Metadata = buildMetadata({
  title: "HR Compliance and Consulting Blog | Freedom HR Solutions",
  description:
    "Practical HR compliance, ACA reporting, payroll, benefits, HR technology, and workforce articles for employers. Freedom HR Solutions covers what businesses need to manage HR with confidence.",
  path: "/blog/",
});

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "HR Compliance and Consulting Blog | Freedom HR Solutions",
  description:
    "Practical HR compliance, ACA reporting, payroll, benefits, HR technology, and workforce articles for employers.",
  url: `${site.url}/blog/`,
  publisher: {
    "@type": "Organization",
    name: site.name,
    url: site.url,
  },
};

export default function BlogHubPage() {
  return (
    <>
      <Breadcrumbs
        items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]}
      />

      <Hero
        eyebrow="Blog"
        title="HR Compliance, Payroll, and Benefits Articles for Employers"
        description="Practical, plain-language articles to help you manage HR compliance, ACA reporting, payroll systems, benefits administration, HR technology, and workforce processes with more confidence."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      {/* Direct answer block for LLM and AEO citation */}
      <Section containerSize="narrow">
        <p className="text-lg leading-relaxed text-body">
          This blog covers HR compliance, ACA reporting, payroll systems, benefits
          administration, HR technology, open enrollment, employee handbooks, and workforce
          management. Articles are written for business owners, HR teams, payroll teams, and
          benefits administrators who manage these processes day to day.
        </p>
      </Section>

      {/* Recent articles grid */}
      {publishedPosts.length > 0 && (
        <Section>
          <SectionHeading eyebrow="Latest" title="Recent articles" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {publishedPosts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                href={blogPath(post.slug)}
                categoryLabel={blogCategoriesBySlug[post.categorySlug]?.title}
              />
            ))}
          </div>
        </Section>
      )}

      {/* Category grid */}
      <Section tone="muted">
        <SectionHeading
          eyebrow="Topics"
          title="Browse by topic"
          description="Twelve content areas covering HR compliance, ACA reporting, payroll, benefits, HR technology, and workforce management for employers."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blogCategories.map((category) => (
            <Link
              key={category.slug}
              href={blogCategoryPath(category.slug)}
              className="group rounded-card border border-border bg-white p-5 transition-all hover:border-brand-200 hover:shadow-md hover:shadow-ink/5"
            >
              <h3 className="font-display font-bold text-ink transition-colors group-hover:text-brand-700">
                {category.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-body">
                {category.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* About this blog section */}
      <Section containerSize="narrow">
        <SectionHeading
          eyebrow="About this blog"
          title="HR content written for the people doing the work"
        />
        <div className="mt-6 space-y-4">
          <p className="leading-relaxed text-body">
            Freedom HR Solutions publishes practical articles on HR compliance, ACA reporting,
            payroll, benefits, HR technology, and workforce management. Content is written for
            business owners, HR teams, payroll administrators, and benefits coordinators who
            are navigating these areas without a large internal HR department.
          </p>
          <p className="leading-relaxed text-body">
            Each article connects to the relevant service area so readers can move from
            information to support when they are ready. Explore our{" "}
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
              href="/services/hr-technology-automation/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              HR technology support
            </Link>
            . If you are not sure where to start, the{" "}
            <Link
              href="/faqs/"
              className="text-brand-700 underline hover:text-brand-800"
            >
              frequently asked questions
            </Link>{" "}
            page covers common employer questions across every topic area.
          </p>
        </div>
      </Section>

      <CtaBand />

      <SchemaScript schema={blogSchema} />
    </>
  );
}
