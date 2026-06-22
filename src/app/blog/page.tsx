import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { BlogCard } from "@/components/cards/BlogCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { blogCategories, blogCategoriesBySlug, publishedPosts } from "@/data/blog";
import { buildMetadata } from "@/lib/seo";
import { blogPath, blogCategoryPath } from "@/lib/routes";
import { ctas } from "@/data/shared";

export const metadata: Metadata = buildMetadata({
  title: "HR, Payroll, Benefits, and Compliance Blog | Freedom HR Solutions",
  description:
    "Read insights from Freedom HR Solutions on HR compliance, ACA reporting, payroll systems, benefits administration, HR technology, open enrollment, and workforce support.",
  path: "/blog/",
});

export default function BlogHubPage() {
  return (
    <>
      <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Blog", path: "/blog/" }]} />

      <Hero
        eyebrow="Blog"
        title="HR, Payroll, Benefits, Compliance, and HR Technology Insights"
        description="Practical, plain-language insights to help you manage HR, payroll, benefits, ACA reporting, and HR technology with more confidence."
        primaryCta={ctas.assessment}
        secondaryCta={ctas.consultation}
      />

      <TrustBar />

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

      <Section tone="muted">
        <SectionHeading
          eyebrow="Topics"
          title="Browse by category"
          description="We are building out content clusters across these topics."
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
              <p className="mt-1.5 text-sm leading-relaxed text-body">{category.description}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  );
}
