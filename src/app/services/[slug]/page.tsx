import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceHubs, getServiceHub } from "@/data/serviceHubs";
import { services, getService } from "@/data/services";
import { ServiceHubTemplate } from "@/components/templates/ServiceHubTemplate";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { servicePath } from "@/lib/routes";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  const slugs = new Set<string>();
  serviceHubs.forEach((hub) => slugs.add(hub.slug));
  services.forEach((service) => slugs.add(service.slug));
  return Array.from(slugs).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const hub = getServiceHub(slug);
  if (hub) return buildMetadata({ title: hub.meta.title, description: hub.meta.description, path: servicePath(slug) });
  const service = getService(slug);
  if (service) return buildMetadata({ title: service.meta.title, description: service.meta.description, path: servicePath(slug) });
  return {};
}

export default async function ServicesSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  // Hub takes precedence when a slug exists as both a hub and a service.
  const hub = getServiceHub(slug);
  if (hub) return <ServiceHubTemplate hub={hub} />;
  const service = getService(slug);
  if (service) return <ServicePageTemplate service={service} />;
  notFound();
}
