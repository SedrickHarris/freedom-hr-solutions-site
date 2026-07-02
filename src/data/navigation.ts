import type { NavLink } from "@/types";
import { primaryCta, secondaryCta } from "@/data/site";

/** Main header navigation. */
export const headerNav: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services/",
    children: [
      { label: "HR Compliance & Risk", href: "/services/hr-compliance/" },
      { label: "ACA Reporting & Compliance", href: "/services/aca-reporting-compliance/" },
      { label: "Payroll, Benefits & HR Systems", href: "/services/payroll-benefits-hr-systems/" },
      { label: "HR Technology & Automation", href: "/services/hr-technology-automation/" },
      { label: "Support & Service Continuity", href: "/services/support-service-continuity/" },
      { label: "Talent & Workforce Development", href: "/services/talent-workforce-development/" },
    ],
  },
  {
    label: "Partners",
    href: "/partners/",
    children: [
      { label: "ADP", href: "/partners/adp-consulting-support/" },
      { label: "isolved", href: "/partners/isolved-consulting-support/" },
      { label: "BambooHR", href: "/partners/bamboohr-consulting-support/" },
      { label: "HiBob", href: "/partners/hibob-consulting-support/" },
      { label: "CustomHCM", href: "/partners/customhcm-consulting-support/" },
      { label: "LegalShield", href: "/partners/legalshield-benefits-support/" },
      { label: "Champion Insurance", href: "/partners/champion-insurance/" },
      { label: "Haniel Consulting", href: "/partners/haniel-consulting/" },
      { label: "PursuitPathways", href: "/partners/pursuit-pathways/" },
    ],
  },
  {
    label: "Who We Help",
    href: "/who-we-help/",
    children: [
      { label: "Business Owners", href: "/who-we-help/business-owners/" },
      { label: "HR Teams", href: "/who-we-help/hr-teams/" },
      { label: "Payroll Teams", href: "/who-we-help/payroll-teams/" },
      { label: "Benefits Administrators", href: "/who-we-help/benefits-administrators/" },
      { label: "Small Businesses", href: "/who-we-help/small-businesses/" },
      { label: "Growing Businesses", href: "/who-we-help/growing-businesses/" },
      { label: "Multi-State Employers", href: "/who-we-help/multi-state-employers/" },
    ],
  },
  {
    label: "Resources",
    href: "/resources/",
    children: [
      { label: "Resource Library", href: "/resources/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQs", href: "/faqs/" },
    ],
  },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

/** Footer is organized into the eight strategic groups from the sitemap. */
export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about/" },
      { label: "Contact", href: "/contact/" },
      { label: "FAQs", href: "/faqs/" },
      { label: "Request HR MRI Assessment", href: "/request-assessment/" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "All Services", href: "/services/" },
      { label: "HR Compliance & Risk", href: "/services/hr-compliance/" },
      { label: "ACA Reporting & Compliance", href: "/services/aca-reporting-compliance/" },
      { label: "Payroll, Benefits & HR Systems", href: "/services/payroll-benefits-hr-systems/" },
      { label: "HR Technology & Automation", href: "/services/hr-technology-automation/" },
      { label: "Support & Service Continuity", href: "/services/support-service-continuity/" },
      { label: "Talent & Workforce Development", href: "/services/talent-workforce-development/" },
    ],
  },
  {
    heading: "Partners",
    links: [
      { label: "All Partners", href: "/partners/" },
      { label: "ADP Support", href: "/partners/adp-consulting-support/" },
      { label: "isolved Support", href: "/partners/isolved-consulting-support/" },
      { label: "BambooHR Support", href: "/partners/bamboohr-consulting-support/" },
      { label: "HiBob Support", href: "/partners/hibob-consulting-support/" },
      { label: "CustomHCM Support", href: "/partners/customhcm-consulting-support/" },
    ],
  },
  {
    heading: "Who We Help",
    links: [
      { label: "All Audiences", href: "/who-we-help/" },
      { label: "Business Owners", href: "/who-we-help/business-owners/" },
      { label: "HR Teams", href: "/who-we-help/hr-teams/" },
      { label: "Payroll Teams", href: "/who-we-help/payroll-teams/" },
      { label: "Benefits Administrators", href: "/who-we-help/benefits-administrators/" },
      { label: "Small Businesses", href: "/who-we-help/small-businesses/" },
      { label: "Multi-State Employers", href: "/who-we-help/multi-state-employers/" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "All Locations", href: "/locations/" },
      { label: "Las Vegas, NV", href: "/locations/las-vegas-nv/" },
      { label: "Henderson, NV", href: "/locations/henderson-nv/" },
      { label: "North Las Vegas, NV", href: "/locations/north-las-vegas-nv/" },
      { label: "Nevada", href: "/locations/nevada/" },
      { label: "Nationwide HR Consulting", href: "/locations/nationwide-hr-consulting/" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Resource Library", href: "/resources/" },
      { label: "Blog", href: "/blog/" },
      { label: "FAQs", href: "/faqs/" },
    ],
  },
];

export const ctaLinks = { primary: primaryCta, secondary: secondaryCta };
