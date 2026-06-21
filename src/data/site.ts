import type { Cta } from "@/types";

/**
 * Global site configuration.
 *
 * Contact details and production domain are client-confirmed.
 */
export const site = {
  name: "Freedom HR Solutions",
  shortName: "Freedom HR",
  url: "https://www.freedomhrsolutions.com",
  tagline: "HR, payroll, benefits, and compliance support for growing businesses",
  description:
    "Freedom HR Solutions is a Las Vegas headquartered HR, payroll, benefits, compliance, ACA reporting, and HR technology consulting firm serving businesses locally in Nevada and nationwide.",
  // Confirmed contact details — client approved.
  email: "soleil@freedomhrsolutions.com",
  phone: "(702) 907-0896",
  phoneHref: "tel:+17029070896",
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
  "By submitting this form, you consent to receive SMS and text notifications, alerts, and occasional marketing communications from Freedom HR Solutions. Message frequency may vary, and message and data rates may apply. You can reply HELP for assistance or STOP to unsubscribe at any time. You may also choose to receive news, feature updates, and exclusive offers from Freedom HR Solutions. We respect your privacy and use your personal information only to deliver the products and services you request. You may unsubscribe from communications at any time.";
