/**
 * Shared content types for Freedom HR Solutions.
 * All page content is data-driven so new pages can be added by editing
 * the files in src/data without touching component or routing code.
 */

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface Cta {
  label: string;
  href: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface PageMeta {
  title: string;
  description: string;
}

/** A linkable page reference used in "related pages" grids. */
export interface PageRef {
  title: string;
  href: string;
  description?: string;
}

export interface ServiceHub {
  slug: string;
  /** Short label used in navigation and cards. */
  navLabel: string;
  /** Card/overview title. */
  title: string;
  h1: string;
  meta: PageMeta;
  /** One-line summary for cards and previews. */
  summary: string;
  /** Lead paragraph for the hub intro. */
  intro: string;
  /** Real business problems this category solves. */
  problems: FeatureItem[];
  /** What this category includes / how we help. */
  helps: FeatureItem[];
  whoItHelps: string[];
  process: ProcessStep[];
  /** Child service slugs (the spokes). */
  serviceSlugs: string[];
  relatedAudienceSlugs: string[];
  searchThemes: string[];
  faqs: Faq[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export interface Service {
  slug: string;
  title: string;
  h1: string;
  /** Parent service hub slug. */
  hubSlug: string;
  meta: PageMeta;
  /** Short summary for hero + cards. */
  summary: string;
  /** Trust/relevance line shown under the hero summary. */
  trustLine?: string;
  intro: string;
  problems: string[];
  includes: FeatureItem[];
  whoItHelps: string[];
  challenges: string[];
  process: ProcessStep[];
  benefits: FeatureItem[];
  relatedServiceSlugs: string[];
  relatedAudienceSlugs: string[];
  faqs: Faq[];
  /** Optional platform partner slugs surfaced as an implementation-support callout. */
  platformSlugs?: string[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  /** Marks the highest-priority launch pages. */
  launch?: boolean;
}

export interface Partner {
  slug: string;
  name: string;
  /** Platform category, e.g. "Payroll & HCM platform". */
  category: string;
  meta: PageMeta;
  summary: string;
  overview: string;
  supportAreas: FeatureItem[];
  relatedServiceSlugs: string[];
  faqs: Faq[];
  /** Optional URL to the partner's own website. Rendered as an outbound link with rel="noopener noreferrer". */
  externalUrl?: string;
  /** Optional named principal or primary contact at the partner organization. */
  contactName?: string;
}

export type AudienceType = "role" | "company" | "industry";

export interface Audience {
  slug: string;
  title: string;
  navLabel: string;
  type: AudienceType;
  meta: PageMeta;
  summary: string;
  intro: string;
  painPoints: FeatureItem[];
  scenarios: string[];
  recommendedServiceSlugs: string[];
  relatedAudienceSlugs: string[];
  faqs: Faq[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
  launch?: boolean;
}

export interface Location {
  slug: string;
  title: string;
  /** Region grouping: "local" | "state" | "national". */
  region: "local" | "state" | "national";
  meta: PageMeta;
  summary: string;
  intro: string;
  positioning: string;
  localChallenges: FeatureItem[];
  industries: string[];
  serviceSlugs: string[];
  nearbySlugs: string[];
  relatedAudienceSlugs?: string[];
  faqs: Faq[];
  primaryCta?: Cta;
  secondaryCta?: Cta;
}

export interface BlogCategory {
  slug: string;
  title: string;
  description: string;
}

export interface BlogSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface BlogPost {
  slug: string;
  title: string;
  categorySlug: string;
  excerpt: string;
  meta: PageMeta;
  /** Full article body. Posts without a body are treated as upcoming. */
  body?: BlogSection[];
  faqs?: Faq[];
  primaryServiceSlug?: string;
  hubSlug?: string;
  relatedPostSlugs?: string[];
  published?: boolean;
}

export interface ResourceCategory {
  slug: string;
  title: string;
  description: string;
}
