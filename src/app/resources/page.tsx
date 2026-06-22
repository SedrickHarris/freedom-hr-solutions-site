import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { ResourceCard } from "@/components/cards/ResourceCard";
import { BlogCard } from "@/components/cards/BlogCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { resourceCategories, featuredResources } from "@/data/resources";
import { publishedPosts, blogCategoriesBySlug } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { blogPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR, Payroll, Benefits, and Compliance Resources | Freedom HR Solutions",
  description:
    "Explore practical resources for HR compliance, ACA reporting, payroll systems, benefits administration, HR technology, open enrollment, and workforce support.",
  path: "/resources/",
});

export default function ResourcesHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Resources", path: "/resources/" }]} />

      <Hero
        eyebrow="Resources"
        title="HR, Payroll, Benefits, and Compliance Resources"
        description="Practical guidance and checklists to help you manage HR compliance, ACA reporting, payroll, benefits, HR technology, and open enrollment. More resources are on the way."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

      <Section>
        <SectionHeading eyebrow="Browse by topic" title="Resource categories" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {resourceCategories.map((category) => (
            <div key={category.slug} className="rounded-card border border-border bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{category.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Checklists"
          title="Featured checklists"
          description="Downloadable checklists are in production. Request an assessment in the meantime for a tailored review."
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

      <Section>
        <SectionHeading
          eyebrow="From the blog"
          title="Latest articles"
          description="Read practical insights on HR, payroll, benefits, and compliance."
        />
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
        <div className="mt-8">
          <Link href="/blog/" className="font-semibold text-brand-700 hover:text-brand-800">
            Visit the blog →
          </Link>
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
