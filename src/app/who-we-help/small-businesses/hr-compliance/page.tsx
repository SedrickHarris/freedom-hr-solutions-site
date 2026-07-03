import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAudienceServicePage } from "@/data/audienceServicePages";
import { AudienceServicePageTemplate } from "@/components/templates/AudienceServicePageTemplate";
import { buildMetadata } from "@/lib/seo";
import { audienceServicePath } from "@/lib/routes";

const AUDIENCE_SLUG = "small-businesses";
const SERVICE_SLUG = "hr-compliance";

const page = getAudienceServicePage(AUDIENCE_SLUG, SERVICE_SLUG);

export const metadata: Metadata = page
  ? buildMetadata({
      title: page.meta.title,
      description: page.meta.description,
      path: audienceServicePath(AUDIENCE_SLUG, SERVICE_SLUG),
    })
  : {};

export default function SmallBusinessHrCompliancePage() {
  if (!page) notFound();
  return <AudienceServicePageTemplate page={page} />;
}
