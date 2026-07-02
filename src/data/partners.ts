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
      title: "isolved Consulting and Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support payroll, HR, and benefits workflows involving isolved, including setup, integration, reporting, and ongoing platform support.",
    },
    summary:
      "Implementation, configuration, integration, and ongoing support for isolved payroll, HR, and benefits workflows.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR, payroll, and benefits workflows involving isolved. Whether you are setting up the platform for the first time, configuring payroll and benefits, connecting isolved to other systems, or resolving recurring issues, we help your team get more value from the platform and keep workflows running accurately.",
    supportAreas: [
      {
        title: "isolved implementation",
        description: "Help planning and coordinating isolved setup so your payroll, HR, and benefits configurations reflect how your business actually operates, from go-live preparation through post-launch stabilization.",
      },
      {
        title: "Payroll configuration support",
        description: "Support configuring payroll workflows in isolved, including pay rules, deductions, tax settings, and multi-state configurations so payroll runs accurately.",
      },
      {
        title: "Benefits setup and administration",
        description: "Help configuring benefits plans, eligibility rules, and enrollment workflows in isolved, including open enrollment setup and ongoing benefits administration support.",
      },
      {
        title: "System integration support",
        description: "Help reviewing and connecting isolved with your other systems, including time and attendance, general ledger, and third-party platforms, so data flows more cleanly.",
      },
      {
        title: "Reporting and data accuracy",
        description: "Support building custom reports and improving data accuracy in isolved so HR, payroll, and benefits teams have reliable visibility into workforce and compensation data.",
      },
      {
        title: "Ongoing platform support",
        description: "Continued help troubleshooting issues, maintaining configurations, and supporting isolved workflows as your workforce, payroll structure, or benefits program changes.",
      },
    ],
    relatedServiceSlugs: [
      "system-setup-implementation",
      "payroll-benefits-hr-management",
      "hr-technology-automation",
      "reporting-data-insights",
      "ongoing-technical-support",
    ],
    faqs: [
      {
        question: "Is Freedom HR Solutions an official isolved partner?",
        answer: "We help businesses implement, configure, optimize, and support workflows involving isolved. We do not claim official partnership or certification unless confirmed.",
      },
      {
        question: "Can Freedom HR Solutions help configure isolved?",
        answer: "Yes. We help configure the platform so it accurately reflects your payroll, HR, and benefits workflows, including pay rules, deductions, eligibility, and reporting.",
      },
      {
        question: "Can you help integrate isolved with other systems?",
        answer: "Yes. We help review integration options between isolved and your other platforms, such as time and attendance, general ledger, or benefits carriers, so data flows more cleanly.",
      },
      {
        question: "Can you support isolved after implementation?",
        answer: "Yes. We provide ongoing support and troubleshooting for workflows involving isolved, including post-go-live stabilization, configuration updates, and recurring issue resolution.",
      },
      {
        question: "Can Freedom HR Solutions help set up isolved payroll?",
        answer: "Yes. We help configure payroll settings, pay rules, deductions, and tax configurations in isolved so your payroll runs accurately from the start.",
      },
      {
        question: "Can you help with isolved benefits and open enrollment?",
        answer: "Yes. We help configure benefits plans and eligibility rules in isolved, and we support open enrollment setup, testing, and post-enrollment reconciliation.",
      },
      {
        question: "Can Freedom HR Solutions improve our isolved reporting?",
        answer: "Yes. We help build custom reports and address data accuracy issues in isolved so your team has reliable visibility into payroll, HR, and benefits data.",
      },
      {
        question: "Do you support isolved for multi-state employers?",
        answer: "Yes. isolved supports multi-state payroll configurations, and we help employers set up and maintain those configurations accurately as they operate or expand across multiple states.",
      },
    ],
  },
  {
    slug: "bamboohr-consulting-support",
    name: "BambooHR",
    category: "HR platform",
    meta: {
      title: "BambooHR Consulting and Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support BambooHR workflows, including onboarding setup, payroll integration, reporting, and ongoing platform support.",
    },
    summary:
      "Implementation, configuration, integration, and ongoing support for BambooHR HR workflows.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving BambooHR. Whether you are setting up the platform for the first time, connecting it to payroll, improving onboarding workflows, or getting more from reporting, we help the platform fit how your team actually works.",
    supportAreas: [
      {
        title: "BambooHR implementation",
        description: "Help planning and coordinating BambooHR setup so your configuration reflects how onboarding, records, and workflows actually operate in your business.",
      },
      {
        title: "Onboarding workflow setup",
        description: "Support configuring BambooHR onboarding workflows, including new hire tasks, document collection, and self-service setup, so the process runs consistently.",
      },
      {
        title: "Payroll and benefits integration",
        description: "Help reviewing and connecting BambooHR to your payroll and benefits systems so employee data flows more cleanly and reduces manual entry.",
      },
      {
        title: "Reporting and data visibility",
        description: "Support building custom reports and dashboards in BambooHR that give HR and leadership clearer visibility into headcount, turnover, and workforce data.",
      },
      {
        title: "System optimization",
        description: "Review how your team currently uses BambooHR and identify underutilized features, workflow gaps, or configuration issues worth addressing.",
      },
      {
        title: "Ongoing platform support",
        description: "Continued help troubleshooting issues, maintaining configurations, and supporting BambooHR as your workforce or workflows change over time.",
      },
    ],
    relatedServiceSlugs: [
      "system-setup-implementation",
      "hr-technology-automation",
      "reporting-data-insights",
      "ongoing-technical-support",
      "payroll-benefits-hr-management",
    ],
    faqs: [
      {
        question: "Is Freedom HR Solutions an official BambooHR partner?",
        answer: "We help businesses implement, configure, optimize, and support workflows involving BambooHR. We do not claim official partnership or certification unless confirmed.",
      },
      {
        question: "Can Freedom HR Solutions help set up BambooHR?",
        answer: "Yes. We help with initial configuration, onboarding workflows, employee records setup, and reporting so the platform reflects how your team works from day one.",
      },
      {
        question: "Can you help connect BambooHR to payroll?",
        answer: "Yes. We help review integration options between BambooHR and your payroll and benefits systems so employee data flows more cleanly.",
      },
      {
        question: "Can you improve our BambooHR reporting?",
        answer: "Yes. We help build reporting and dashboards in BambooHR that give your HR team and leadership clearer visibility into workforce data.",
      },
      {
        question: "Can Freedom HR Solutions help optimize an existing BambooHR setup?",
        answer: "Yes. We review your current configuration, identify underutilized features, and help address workflow gaps or settings that are not working well for your team.",
      },
      {
        question: "Do you support BambooHR onboarding workflows?",
        answer: "Yes. We help configure onboarding task lists, new hire workflows, document collection, and self-service settings in BambooHR.",
      },
      {
        question: "Can you help with BambooHR employee data and records?",
        answer: "Yes. We help review data structure, field setup, and records organization in BambooHR so your employee data stays accurate and accessible.",
      },
      {
        question: "Do you support BambooHR for small businesses?",
        answer: "Yes. BambooHR is widely used by small and mid-sized businesses, and we help teams at that scale configure and support the platform without needing a dedicated HRIS administrator.",
      },
    ],
  },
  {
    slug: "hibob-consulting-support",
    name: "HiBob",
    category: "HR platform",
    meta: {
      title: "HiBob Consulting and Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving HiBob, including onboarding, people data, workflow automation, integrations, and ongoing platform support.",
    },
    summary:
      "Implementation, configuration, workflow automation, and ongoing support for HiBob HR platform workflows.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR workflows involving HiBob. Whether you are setting up the platform for the first time, configuring onboarding and approval workflows, connecting HiBob to payroll and benefits systems, or improving people data reporting, we help your team get more from the platform.",
    supportAreas: [
      {
        title: "HiBob implementation",
        description: "Help planning and coordinating HiBob setup so your people data structure, workflows, and configurations reflect how your organization actually operates.",
      },
      {
        title: "Workflow configuration",
        description: "Support configuring HiBob workflows, including onboarding, approvals, and HR processes, so they run consistently and reduce manual follow-up.",
      },
      {
        title: "People data and org setup",
        description: "Help organizing employee records, org structure, and data fields in HiBob so your people data stays accurate and accessible across the platform.",
      },
      {
        title: "Integration support",
        description: "Help reviewing and connecting HiBob with your payroll, benefits, and other systems so data flows more cleanly and reduces duplicate entry.",
      },
      {
        title: "Reporting and analytics",
        description: "Support building HiBob reports and dashboards that give HR leadership clearer visibility into headcount, performance, and workforce trends.",
      },
      {
        title: "Ongoing platform support",
        description: "Continued help troubleshooting issues, maintaining configurations, and supporting HiBob as your team grows or your HR workflows evolve.",
      },
    ],
    relatedServiceSlugs: [
      "system-setup-implementation",
      "hr-technology-automation",
      "reporting-data-insights",
      "ongoing-technical-support",
      "streamlining-processes",
    ],
    faqs: [
      {
        question: "Is Freedom HR Solutions an official HiBob partner?",
        answer: "We help businesses implement, configure, optimize, and support workflows involving HiBob. We do not claim official partnership or certification unless confirmed.",
      },
      {
        question: "Can Freedom HR Solutions help configure HiBob?",
        answer: "Yes. We help configure workflows, settings, and people data structures in HiBob so the platform reflects how your HR team operates.",
      },
      {
        question: "Can you help automate HR workflows in HiBob?",
        answer: "Yes. We help identify repetitive HR workflows in HiBob and configure automation so your team spends less time on manual follow-up.",
      },
      {
        question: "Can you help connect HiBob to payroll or benefits systems?",
        answer: "Yes. We help review integration options between HiBob and your payroll, benefits, and other HR systems so data flows more cleanly.",
      },
      {
        question: "Can Freedom HR Solutions improve our HiBob reporting?",
        answer: "Yes. We help build reports and dashboards in HiBob that give HR leaders clearer visibility into people data, headcount, and workforce trends.",
      },
      {
        question: "Can you support HiBob over time?",
        answer: "Yes. We provide ongoing support and improvements for workflows involving HiBob, including troubleshooting, configuration updates, and platform optimization as your team changes.",
      },
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
