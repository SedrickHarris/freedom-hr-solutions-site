import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { serviceHubs } from "@/data/serviceHubs";
import { services } from "@/data/services";
import { partners } from "@/data/partners";
import { audiences } from "@/data/audiences";
import { locations } from "@/data/locations";
import { publishedPosts, blogCategories } from "@/data/blog";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const abs = (path: string) => `${site.url}${path}`;

  // Core pages (thank-you is intentionally excluded — it is noindex).
  const corePaths = [
    "/",
    "/about/",
    "/contact/",
    "/faqs/",
    "/request-assessment/",
    "/services/",
    "/partners/",
    "/who-we-help/",
    "/who-we-help/small-businesses/hr-outsourcing/",
    "/locations/",
    "/resources/",
    "/blog/",
    "/privacy-policy/",
  ];

  const hubPaths = serviceHubs.map((hub) => `/services/${hub.slug}/`);
  // Service slugs that collide with a hub slug are already covered above.
  const servicePaths = services
    .filter((service) => !serviceHubs.some((hub) => hub.slug === service.slug))
    .map((service) => `/services/${service.slug}/`);
  const partnerPaths = partners.map((partner) => `/partners/${partner.slug}/`);
  const audiencePaths = audiences.map((audience) => `/who-we-help/${audience.slug}/`);
  const locationPaths = locations.map((location) => `/locations/${location.slug}/`);
  const blogPaths = publishedPosts.map((post) => `/blog/${post.slug}/`);
  const blogCategoryPaths = blogCategories.map((category) => `/blog/category/${category.slug}/`);

  const all = [
    ...corePaths,
    ...hubPaths,
    ...servicePaths,
    ...partnerPaths,
    ...audiencePaths,
    ...locationPaths,
    ...blogCategoryPaths,
    ...blogPaths,
  ];

  return all.map((path) => ({
    url: abs(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/services/") ? 0.8 : 0.6,
  }));
}
