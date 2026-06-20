import type { PageRef } from "@/types";
import { getService } from "@/data/services";
import { getServiceHub } from "@/data/serviceHubs";
import { getAudience } from "@/data/audiences";
import { getLocation } from "@/data/locations";
import { getPartner } from "@/data/partners";
import { getBlogPost } from "@/data/blog";
import { servicePath, audiencePath, locationPath, partnerPath, blogPath } from "@/lib/routes";

/**
 * Resolve slugs to PageRefs for "related pages" sections.
 * Unknown slugs are filtered out so internal links never break, which lets
 * Phase 2 pages light up automatically as they are added to the data files.
 */

export function serviceRefs(slugs: string[]): PageRef[] {
  return slugs.flatMap((slug) => {
    const service = getService(slug);
    if (!service) return [];
    return [{ title: service.title, href: servicePath(slug), description: service.summary }];
  });
}

export function serviceHubRef(slug: string): PageRef | null {
  const hub = getServiceHub(slug);
  if (!hub) return null;
  return { title: hub.title, href: servicePath(slug), description: hub.summary };
}

export function audienceRefs(slugs: string[]): PageRef[] {
  return slugs.flatMap((slug) => {
    const audience = getAudience(slug);
    if (!audience) return [];
    return [{ title: audience.navLabel, href: audiencePath(slug), description: audience.summary }];
  });
}

export function locationRefs(slugs: string[]): PageRef[] {
  return slugs.flatMap((slug) => {
    const location = getLocation(slug);
    if (!location) return [];
    return [{ title: location.title, href: locationPath(slug), description: location.summary }];
  });
}

export function partnerRefs(slugs: string[]): PageRef[] {
  return slugs.flatMap((slug) => {
    const partner = getPartner(slug);
    if (!partner) return [];
    return [{ title: partner.name, href: partnerPath(slug), description: partner.summary }];
  });
}

export function blogRefs(slugs: string[]): PageRef[] {
  return slugs.flatMap((slug) => {
    const post = getBlogPost(slug);
    if (!post || !post.published) return [];
    return [{ title: post.title, href: blogPath(slug), description: post.excerpt }];
  });
}
