import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { audiences, getAudience } from "@/data/audiences";
import { AudiencePageTemplate } from "@/components/templates/AudiencePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { audiencePath } from "@/lib/routes";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return audiences.map((audience) => ({ slug: audience.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) return {};
  return buildMetadata({ title: audience.meta.title, description: audience.meta.description, path: audiencePath(slug) });
}

export default async function AudienceSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const audience = getAudience(slug);
  if (!audience) notFound();
  return <AudiencePageTemplate audience={audience} />;
}
