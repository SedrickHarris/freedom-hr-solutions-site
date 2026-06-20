import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { partners, getPartner } from "@/data/partners";
import { PartnerPageTemplate } from "@/components/templates/PartnerPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { partnerPath } from "@/lib/routes";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return partners.map((partner) => ({ slug: partner.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) return {};
  return buildMetadata({ title: partner.meta.title, description: partner.meta.description, path: partnerPath(slug) });
}

export default async function PartnerSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const partner = getPartner(slug);
  if (!partner) notFound();
  return <PartnerPageTemplate partner={partner} />;
}
