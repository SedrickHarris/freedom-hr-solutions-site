import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { serviceHubs } from "@/data/serviceHubs";
import { services } from "@/data/services";
import { partners } from "@/data/partners";
import { audiences } from "@/data/audiences";
import { locations } from "@/data/locations";
import { audienceServicePages } from "@/data/audienceServicePages";
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
    "/who-we-help/small-businesses/hr-technology-automation/",
    "/who-we-help/small-businesses/hr-mri-risk-assessment/",
    "/who-we-help/growing-businesses/hr-system-implementation/",
    "/locations/",
    "/resources/",
    "/blog/",
    "/privacy-policy/",
    "/who-we-help/multi-state-employers/aca-reporting-compliance/",
    "/who-we-help/multi-state-employers/payroll-compliance/",
    "/who-we-help/multi-state-employers/employee-handbooks/",
    "/who-we-help/multi-state-employers/hr-system-setup/",
    "/who-we-help/multi-state-employers/workforce-compliance/",
    "/who-we-help/growing-businesses/aca-reporting-compliance/",
    "/who-we-help/growing-businesses/payroll-benefits-hr-management/",
    "/who-we-help/growing-businesses/process-automation/",
    "/who-we-help/growing-businesses/system-audits/",
    "/who-we-help/payroll-teams/system-audits/",
    "/who-we-help/benefits-administrators/open-enrollment-setup/",
    "/who-we-help/benefits-administrators/benefits-administration-support/",
  ];

  const hubPaths = serviceHubs.map((hub) => `/services/${hub.slug}/`);
  // Service slugs that collide with a hub slug are already covered above.
  const servicePaths = services
    .filter((service) => !serviceHubs.some((hub) => hub.slug === service.slug))
    .map((service) => `/services/${service.slug}/`);
  const partnerPaths = partners.map((partner) => `/partners/${partner.slug}/`);
  const audiencePaths = audiences.map((audience) => `/who-we-help/${audience.slug}/`);
  const locationPaths = locations.map((location) => `/locations/${location.slug}/`);
  const audienceServicePaths = audienceServicePages.map(
    (p) => `/who-we-help/${p.audienceSlug}/${p.serviceSlug}/`,
  );
  const blogPaths = publishedPosts.map((post) => `/blog/${post.slug}/`);
  const blogCategoryPaths = blogCategories.map((category) => `/blog/category/${category.slug}/`);

  const all = [
    ...corePaths,
    ...hubPaths,
    ...servicePaths,
    ...partnerPaths,
    ...audiencePaths,
    ...locationPaths,
    ...audienceServicePaths,
    ...blogCategoryPaths,
    ...blogPaths,
  ];

  return all.map((path) => ({
    url: abs(path),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority:
      path === "/"
        ? 1
        : path.startsWith("/services/")
          ? 0.8
          : path.match(/^\/who-we-help\/[^/]+\/[^/]+\/$/)
            ? 0.7
            : 0.6,
  }));
}
