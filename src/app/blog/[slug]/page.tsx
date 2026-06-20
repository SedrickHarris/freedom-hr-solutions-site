import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { publishedPosts, getBlogPost } from "@/data/blog";
import { BlogPostTemplate } from "@/components/templates/BlogPostTemplate";
import { buildMetadata } from "@/lib/seo";
import { blogPath } from "@/lib/routes";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return publishedPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.title,
    description: post.meta.description,
    path: blogPath(slug),
    ogType: "article",
  });
}

export default async function BlogPostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post || !post.published) notFound();
  return <BlogPostTemplate post={post} />;
}
