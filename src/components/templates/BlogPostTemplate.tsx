import type { BlogPost } from "@/types";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FaqSection } from "@/components/sections/FaqSection";
import { RelatedPages } from "@/components/sections/RelatedPages";
import { CtaBand } from "@/components/sections/CtaBand";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { blogCategoriesBySlug } from "@/data/blog";
import { serviceRefs, serviceHubRef, blogRefs } from "@/lib/links";
import { articleSchema } from "@/lib/schema";
import { blogPath, blogCategoryPath } from "@/lib/routes";

export function BlogPostTemplate({ post }: { post: BlogPost }) {
  const category = blogCategoriesBySlug[post.categorySlug];
  const path = blogPath(post.slug);

  const relatedServices = [
    ...(post.primaryServiceSlug ? serviceRefs([post.primaryServiceSlug]) : []),
    ...(post.hubSlug && serviceHubRef(post.hubSlug) ? [serviceHubRef(post.hubSlug)!] : []),
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Home", path: "/" },
          { name: "Blog", path: "/blog/" },
          ...(category ? [{ name: category.title, path: blogCategoryPath(category.slug) }] : []),
          { name: post.title, path },
        ]}
      />

      <Section spacing="compact" containerSize="narrow">
        {category && (
          <Badge tone="brand" className="mb-4">
            {category.title}
          </Badge>
        )}
        <h1 className="font-display text-3xl font-extrabold text-ink sm:text-4xl">{post.title}</h1>
        <p className="mt-4 text-lg leading-relaxed text-body">{post.excerpt}</p>
      </Section>

      <Container size="narrow" className="pb-4">
        <article className="space-y-10">
          {post.body?.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-bold text-ink">{section.heading}</h2>
              <div className="mt-3 space-y-4">
                {section.paragraphs.map((paragraph, index) => (
                  <p key={index} className="leading-relaxed text-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              {section.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3 text-body">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </article>
      </Container>

      {relatedServices.length > 0 && (
        <RelatedPages
          eyebrow="Get help"
          title="Related services"
          items={relatedServices}
          tone="muted"
          columns={2}
        />
      )}

      {post.relatedPostSlugs && blogRefs(post.relatedPostSlugs).length > 0 && (
        <RelatedPages
          eyebrow="Keep reading"
          title="Related articles"
          items={blogRefs(post.relatedPostSlugs)}
        />
      )}

      {post.faqs && post.faqs.length > 0 && <FaqSection faqs={post.faqs} />}

      <CtaBand />

      <SchemaScript
        schema={articleSchema({ title: post.title, description: post.meta.description, path })}
      />
    </>
  );
}
