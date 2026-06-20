import type { Metadata } from "next";
import { site } from "@/data/site";

interface BuildMetadataInput {
  title: string;
  description: string;
  /** Path beginning with "/" used for the canonical URL. */
  path: string;
  /** Optional Open Graph type. Defaults to "website". */
  ogType?: "website" | "article";
}

/**
 * Build a consistent Metadata object with unique title, description,
 * canonical path, and Open Graph tags for every page.
 */
export function buildMetadata({
  title,
  description,
  path,
  ogType = "website",
}: BuildMetadataInput): Metadata {
  const canonicalPath = path === "/" ? "/" : path.endsWith("/") ? path : `${path}/`;
  const url = `${site.url}${canonicalPath}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      type: ogType,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/** Page title formatter used where a raw string title is needed. */
export function pageTitle(title: string): string {
  return title.includes(site.name) ? title : `${title} | ${site.name}`;
}
