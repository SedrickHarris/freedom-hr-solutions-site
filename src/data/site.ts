import type { Cta } from "@/types";

/**
 * Global site configuration.
 *
 * NOTE: The contact details below are placeholders using the reserved
 * 555 phone range. Replace phone, email, and address with the client's
 * confirmed business details before launch, and confirm the production
 * domain used for canonical URLs and Open Graph tags.
 */
export const site = {
  name: "Freedom HR Solutions",
  shortName: "Freedom HR",
  url: "https://www.freedomhrsolutions.com",
  tagline: "HR, payroll, benefits, and compliance support for growing businesses",
  description:
    "Freedom HR Solutions is a Las Vegas headquartered HR, payroll, benefits, compliance, ACA reporting, and HR technology consulting firm serving businesses locally in Nevada and nationwide.",
  // Placeholder contact details — confirm before launch.
  email: "info@freedomhrsolutions.com",
  phone: "(702) 555-0123",
  phoneHref: "tel:+17025550123",
  address: {
    city: "Las Vegas",
    state: "Nevada",
    stateAbbr: "NV",
    region: "Las Vegas Valley",
    country: "United States",
  },
  serviceArea: "Las Vegas, Nevada, and nationwide",
  founder: {
    name: "Soleil Kline",
    role: "Founder",
    // Personal profiles. Used in Person schema only, not Organization sameAs.
    linkedin: "https://www.linkedin.com/in/soleil-kline/",
    // Shown publicly only if the client approves. Kept here for reference.
    facebook: "https://www.facebook.com/soleil.leroy",
  },
  social: {
    // Add official business profiles here when available (used in Organization sameAs).
    linkedin: "",
  },
} as const;

export const primaryCta: Cta = {
  label: "Request HR MRI Assessment",
  href: "/request-assessment/",
};

export const secondaryCta: Cta = {
  label: "Schedule Consultation",
  href: "/contact/",
};

/** SMS and communication consent language shown near forms. */
export const consentLanguage =
  "By submitting this form, you agree that Freedom HR Solutions may contact you using the information provided. Message and data rates may apply. You may opt out of text messages at any time.";
