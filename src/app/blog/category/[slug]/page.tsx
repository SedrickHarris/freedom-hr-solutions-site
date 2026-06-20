import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { blogCategories, blogCategoriesBySlug, getPostsByCategory } from "@/data/blog";
import { Hero } from "@/components/sections/Hero";
import { Section } from "@/components/ui/Section";
import { BlogCard } from "@/components/cards/BlogCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { blogCategoryPath, blogPath } from "@/lib/routes";
import { site } from "@/data/site";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return blogCategories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategoriesBySlug[slug];
  if (!category) return {};
  return buildMetadata({
    title: `${category.title} Articles | ${site.name}`,
    description: category.description,
    path: blogCategoryPath(slug),
  });
}

export default async function BlogCategoryPage({ params }: { params: Params }) {
  const { slug } = await params;
  const category = blogCategoriesBySlug[slug];
  if (!category) notFound();
  const posts = getPostsByCategory(slug);

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          { name: category.title, path: blogCategoryPath(slug) },
        ]}
      />

      <Hero eyebrow="Blog category" title={category.title} description={category.description} />

      <Section>
        {posts.length > 0 ? (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <BlogCard
                key={post.slug}
                title={post.title}
                excerpt={post.excerpt}
                href={blogPath(post.slug)}
                categoryLabel={category.title}
              />
            ))}
          </div>
        ) : (
          <p className="rounded-card border border-dashed border-border bg-muted/50 p-8 text-center text-muted-text">
            Articles in this category are on the way. In the meantime, explore our services or
            request an HR MRI Assessment.
          </p>
        )}
      </Section>

      <CtaBand />
    </>
  );
}
