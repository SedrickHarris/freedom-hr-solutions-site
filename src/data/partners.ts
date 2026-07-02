import type { Partner } from "@/types";

/**
 * Partner / platform support pages.
 *
 * IMPORTANT: Freedom HR Solutions is not an official partner, reseller, or
 * certified provider for these platforms unless the client confirms otherwise.
 * All copy uses safe "supports workflows involving this platform" language.
 */
const safeSupportAreas = (platform: string) => [
  {
    title: "Implementation support",
    description: `Help planning and coordinating ${platform} setup so your configuration reflects how your business actually operates.`,
  },
  {
    title: "Configuration support",
    description: `Support configuring ${platform} settings, rules, and workflows for payroll, HR, and benefits accuracy.`,
  },
  {
    title: "Integration support",
    description: `Help connecting ${platform} with your other systems so data flows more cleanly and reduces duplicate entry.`,
  },
  {
    title: "Optimization support",
    description: `Review how you use ${platform} today and identify ways to streamline workflows and improve reporting.`,
  },
  {
    title: "Troubleshooting support",
    description: `Help diagnosing and resolving recurring workflow issues involving ${platform}, working alongside your existing providers.`,
  },
];

const standardPartnerServices = [
  "system-setup-implementation",
  "payroll-benefits-hr-management",
  "hr-technology-automation",
  "technical-issue-resolution",
  "ongoing-technical-support",
];

const benefitsPartnerServices = [
  "benefits-administration-support",
  "open-enrollment-setup",
  "payroll-benefits-hr-management",
  "technical-issue-resolution",
  "ongoing-technical-support",
];

export const partners: Partner[] = [
  {
    slug: "adp-consulting-support",
    name: "ADP",
    category: "Payroll & HCM platform",
    meta: {
      title: "ADP Consulting and Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, integrate, and troubleshoot ADP Workforce Now, ADP Run, ADP Vantage, and ADP TotalSource. Payroll, HR, and benefits workflow support.",
    },
    summary:
      "Implementation, configuration, integration, troubleshooting, and ongoing support for ADP Workforce Now, ADP Run, ADP Vantage, and ADP TotalSource.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, integrate, and support HR, payroll, and benefits workflows involving ADP. We work with ADP Workforce Now, ADP Run, ADP Vantage, and ADP TotalSource, helping teams get more from the platform they already have and resolve the issues that slow them down. We are not an official ADP partner or reseller. We are an independent HR consulting firm that works alongside the platforms and providers our clients use.",
    supportAreas: [
      {
        title: "ADP implementation and go-live support",
        description:
          "Help planning, coordinating, and executing ADP setup, including Workforce Now, Run, Vantage, and TotalSource. We support configuration, data migration, testing, and go-live so the system launches accurately and your team is ready to use it.",
      },
      {
        title: "ADP configuration and workflow optimization",
        description:
          "Support configuring ADP payroll, HR, and benefits settings so they reflect how your business actually operates. We review existing configurations, identify setup gaps or errors, and help optimize workflows to reduce manual work and improve accuracy.",
      },
      {
        title: "ADP integration support",
        description:
          "Help connecting ADP with your other systems, including BambooHR, NetSuite, benefits platforms, and third-party tools, so data flows more cleanly, reduces duplicate entry, and stays synchronized across platforms.",
      },
      {
        title: "ADP troubleshooting and issue resolution",
        description:
          "Help diagnosing recurring ADP payroll problems, calculation errors, direct deposit issues, data sync failures, and configuration problems. We work to identify root causes and help resolve issues so they are less likely to return.",
      },
      {
        title: "ADP multi-state payroll and compliance support",
        description:
          "Support configuring ADP for multi-state payroll, including state-specific tax rules, withholding settings, and ACA reporting workflows such as 1095-C setup. We provide guidance and process support, not legal or tax advice.",
      },
    ],
    relatedServiceSlugs: [
      "system-setup-implementation",
      "payroll-benefits-hr-management",
      "hr-technology-automation",
      "system-audits-improvements",
      "technical-issue-resolution",
      "ongoing-technical-support",
      "reporting-data-insights",
      "aca-reporting-consultant",
    ],
    faqs: [
      {
        question: "Is Freedom HR Solutions an official ADP partner?",
        answer:
          "No. Freedom HR Solutions is an independent HR consulting firm. We help businesses implement, configure, optimize, integrate, and support workflows involving ADP, but we are not an official ADP partner, certified reseller, or authorized provider unless that is confirmed.",
      },
      {
        question: "What ADP products does Freedom HR Solutions support?",
        answer:
          "We support workflows involving ADP Workforce Now, ADP Run, ADP Vantage, and ADP TotalSource, covering implementation, configuration, integration, troubleshooting, and ongoing support.",
      },
      {
        question: "Can Freedom HR Solutions help implement ADP Workforce Now?",
        answer:
          "Yes. We help with Workforce Now configuration, data migration, payroll and benefits setup, testing, and go-live support so the system launches accurately and your team is prepared to use it.",
      },
      {
        question: "Can Freedom HR Solutions help fix ADP payroll problems?",
        answer:
          "Yes. We help diagnose recurring ADP payroll errors, calculation issues, direct deposit problems, and configuration gaps. We work to identify root causes so issues are resolved rather than patched.",
      },
      {
        question: "Can Freedom HR Solutions connect ADP to other systems?",
        answer:
          "Yes. We help support ADP integration with third-party platforms such as BambooHR, NetSuite, benefits carriers, and other HR or finance tools so data flows more cleanly between systems.",
      },
      {
        question: "Can Freedom HR Solutions help with ADP multi-state payroll configuration?",
        answer:
          "Yes. We help configure ADP for multi-state payroll, including state tax settings, withholding rules, and ACA reporting workflows such as 1095-C setup. We provide guidance and process support, not legal or tax advice.",
      },
    ],
  },
  {
    slug: "isolved-consulting-support",
    name: "isolved",
    category: "HCM & payroll platform",
    meta: {
      title: "isolved Consulting and Support",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support payroll, HR, and benefits workflows involving isolved.",
    },
    summary:
      "Support for HR, payroll, and benefits workflows involving the isolved platform.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR, payroll, and benefits workflows involving isolved. We help your team get more value from the platform and keep workflows running accurately.",
    supportAreas: safeSupportAreas("isolved"),
    relatedServiceSlugs: standardPartnerServices,
    faqs: [
      { question: "Is Freedom HR Solutions an official isolved partner?", answer: "We help businesses implement, configure, optimize, and support workflows involving isolved. We do not claim official partnership or certification unless confirmed." },
      { question: "Can Freedom HR Solutions help configure isolved?", answer: "Yes. We help configure the platform so it reflects your payroll, HR, and benefits workflows." },
      { question: "Can you help integrate isolved with other systems?", answer: "Yes. We help review integration options so your systems share data more cleanly." },
      { question: "Can you support isolved after implementation?", answer: "Yes. We offer ongoing support and troubleshooting for workflows involving the platform." },
    ],
  },
  {
    slug: "bamboohr-consulting-support",
    name: "BambooHR",
    category: "HR platform",
    meta: {
      title: "BambooHR Consulting and Support",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving BambooHR.",
    },
    summary:
      "Support for HR workflows, onboarding, and data involving the BambooHR platform.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving BambooHR, including onboarding, employee records, and reporting. We help the platform fit how your team works.",
    supportAreas: safeSupportAreas("BambooHR"),
    relatedServiceSlugs: ["system-setup-implementation", "hr-technology-automation", "recruiting-onboarding-solutions", "reporting-data-insights", "ongoing-technical-support"],
    faqs: [
      { question: "Is Freedom HR Solutions an official BambooHR partner?", answer: "We help businesses implement, configure, optimize, and support workflows involving BambooHR. We do not claim official partnership or certification unless confirmed." },
      { question: "Can Freedom HR Solutions help set up BambooHR?", answer: "Yes. We help with configuration, onboarding workflows, and reporting setup." },
      { question: "Can you help connect BambooHR to payroll?", answer: "Yes. We help review integration options between BambooHR and your payroll and benefits systems." },
      { question: "Can you improve our BambooHR reporting?", answer: "Yes. We help build reporting that gives your team clearer visibility." },
    ],
  },
  {
    slug: "hibob-consulting-support",
    name: "HiBob",
    category: "HR platform",
    meta: {
      title: "HiBob Consulting and Support",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving HiBob.",
    },
    summary:
      "Support for HR workflows, people data, and processes involving the HiBob platform.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving HiBob, including people data, workflows, and reporting. We help your team get more from the platform.",
    supportAreas: safeSupportAreas("HiBob"),
    relatedServiceSlugs: ["system-setup-implementation", "hr-technology-automation", "streamlining-processes", "reporting-data-insights", "ongoing-technical-support"],
    faqs: [
      { question: "Is Freedom HR Solutions an official HiBob partner?", answer: "We help businesses implement, configure, optimize, and support workflows involving HiBob. We do not claim official partnership or certification unless confirmed." },
      { question: "Can Freedom HR Solutions help configure HiBob?", answer: "Yes. We help configure workflows and settings so the platform fits your processes." },
      { question: "Can you help automate HR workflows in HiBob?", answer: "Yes. We help identify and set up automation for repetitive HR workflows." },
      { question: "Can you support HiBob over time?", answer: "Yes. We provide ongoing support and improvements for workflows involving the platform." },
    ],
  },
  {
    slug: "customhcm-consulting-support",
    name: "CustomHCM",
    category: "HCM platform",
    meta: {
      title: "CustomHCM Consulting and Support",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support payroll, HR, and benefits workflows involving CustomHCM.",
    },
    summary:
      "Support for payroll, HR, and benefits workflows involving the CustomHCM platform.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR, payroll, and benefits workflows involving CustomHCM. We help your team configure the platform and keep workflows accurate.",
    supportAreas: safeSupportAreas("CustomHCM"),
    relatedServiceSlugs: standardPartnerServices,
    faqs: [
      { question: "Is Freedom HR Solutions an official CustomHCM partner?", answer: "We help businesses implement, configure, optimize, and support workflows involving CustomHCM. We do not claim official partnership or certification unless confirmed." },
      { question: "Can Freedom HR Solutions help implement CustomHCM?", answer: "Yes. We help plan and coordinate implementation, configuration, testing, and training." },
      { question: "Can you support payroll and benefits in CustomHCM?", answer: "Yes. We help configure and support payroll and benefits workflows in the platform." },
      { question: "Can you help after go-live?", answer: "Yes. We provide ongoing support and troubleshooting for workflows involving the platform." },
    ],
  },
  {
    slug: "legalshield-benefits-support",
    name: "LegalShield",
    category: "Legal & benefits",
    meta: {
      title: "LegalShield Benefits Support",
      description:
        "Freedom HR Solutions helps businesses support and administer benefits workflows involving LegalShield as part of their benefits program.",
    },
    summary:
      "Support for administering and communicating benefits workflows involving LegalShield.",
    overview:
      "Freedom HR Solutions helps businesses support and administer benefits workflows involving LegalShield, including setup, employee communication, and ongoing administration as part of a broader benefits program.",
    supportAreas: safeSupportAreas("LegalShield"),
    relatedServiceSlugs: benefitsPartnerServices,
    faqs: [
      { question: "Is Freedom HR Solutions an official LegalShield partner?", answer: "We help businesses support and administer benefits workflows involving LegalShield. We do not claim official partnership or certification unless confirmed." },
      { question: "Can Freedom HR Solutions help administer LegalShield benefits?", answer: "Yes. We help with setup, employee communication, and ongoing administration of benefits workflows." },
      { question: "Can you help during open enrollment?", answer: "Yes. We help configure and communicate benefits options during open enrollment." },
    ],
  },
  {
    slug: "impact-health-benefits-support",
    name: "Impact Health",
    category: "Health benefits",
    meta: {
      title: "Impact Health Benefits Support",
      description:
        "Freedom HR Solutions helps businesses support and administer health benefits workflows involving Impact Health as part of their benefits program.",
    },
    summary:
      "Support for administering and communicating health benefits workflows involving Impact Health.",
    overview:
      "Freedom HR Solutions helps businesses support and administer health benefits workflows involving Impact Health, including setup, eligibility, employee communication, and ongoing administration.",
    supportAreas: safeSupportAreas("Impact Health"),
    relatedServiceSlugs: benefitsPartnerServices,
    faqs: [
      { question: "Is Freedom HR Solutions an official Impact Health partner?", answer: "We help businesses support and administer benefits workflows involving Impact Health. We do not claim official partnership or certification unless confirmed." },
      { question: "Can Freedom HR Solutions help administer Impact Health benefits?", answer: "Yes. We help with setup, eligibility, employee communication, and ongoing administration." },
      { question: "Can you help connect benefits data to payroll?", answer: "Yes. We help review how benefits data flows into your payroll and HR systems." },
    ],
  },
];

export const partnersBySlug = Object.fromEntries(partners.map((partner) => [partner.slug, partner]));

export function getPartner(slug: string): Partner | undefined {
  return partnersBySlug[slug];
}

/** Benefits-focused partners use a benefits-specific CTA. */
export function isBenefitsPartner(slug: string): boolean {
  return slug.endsWith("benefits-support");
}
