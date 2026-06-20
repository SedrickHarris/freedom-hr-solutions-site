import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locations, getLocation } from "@/data/locations";
import { LocationPageTemplate } from "@/components/templates/LocationPageTemplate";
import { buildMetadata } from "@/lib/seo";
import { locationPath } from "@/lib/routes";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return buildMetadata({ title: location.meta.title, description: location.meta.description, path: locationPath(slug) });
}

export default async function LocationSlugPage({ params }: { params: Params }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  return <LocationPageTemplate location={location} />;
}
