/** Centralized route constants for the main site sections. */
export const routes = {
  home: "/",
  about: "/about/",
  contact: "/contact/",
  faqs: "/faqs/",
  requestAssessment: "/request-assessment/",
  thankYou: "/thank-you/",
  services: "/services/",
  partners: "/partners/",
  whoWeHelp: "/who-we-help/",
  locations: "/locations/",
  resources: "/resources/",
  blog: "/blog/",
  privacyPolicy: "/privacy-policy/",
} as const;

export const servicePath = (slug: string) => `/services/${slug}/`;
export const partnerPath = (slug: string) => `/partners/${slug}/`;
export const audiencePath = (slug: string) => `/who-we-help/${slug}/`;
export const locationPath = (slug: string) => `/locations/${slug}/`;
export const blogPath = (slug: string) => `/blog/${slug}/`;
export const blogCategoryPath = (slug: string) => `/blog/category/${slug}/`;
export const audienceServicePath = (audienceSlug: string, serviceSlug: string) =>
  `/who-we-help/${audienceSlug}/${serviceSlug}/`;
