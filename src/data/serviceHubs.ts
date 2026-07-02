import type { ServiceHub } from "@/types";
import { standardProcess, ctas } from "@/data/shared";

/**
 * The six service category hubs. serviceSlugs lists the child service pages
 * that exist today; additional Phase 2 services can be appended later and
 * will appear automatically once added to services.ts.
 */
export const serviceHubs: ServiceHub[] = [
  {
    slug: "hr-compliance",
    navLabel: "HR Compliance & Risk",
    title: "HR Compliance & Risk Management",
    h1: "HR Compliance and Risk Management Support for Growing Businesses",
    meta: {
      title: "HR Compliance and Risk Management Support",
      description:
        "Identify HR risks, improve workforce compliance, update employee handbooks, and strengthen HR policies with practical HR compliance support from Freedom HR Solutions.",
    },
    summary:
      "Find HR risks before they become costly, strengthen your policies, and keep documentation current as your team grows.",
    intro:
      "HR compliance is easy to overlook until something goes wrong. As your business adds employees, locations, and policies, small gaps in documentation and process can turn into real risk. Freedom HR Solutions helps you find those gaps early, organize your HR foundation, and keep it current so your team can focus on running the business.",
    problems: [
      { title: "Outdated or missing policies", description: "Handbooks and policies that no longer match how the business actually operates or current requirements." },
      { title: "Unclear documentation", description: "Inconsistent records, acknowledgments, and employee files that are hard to rely on during a review." },
      { title: "Risks no one is watching", description: "Compliance responsibilities that fall through the cracks when no one formally owns HR." },
      { title: "Growth that outpaces process", description: "New hires and new states that introduce requirements the current setup was never built for." },
    ],
    helps: [
      { title: "HR risk assessment", description: "A structured review that surfaces hidden HR, policy, and process risks across your organization." },
      { title: "Policy and handbook support", description: "Clear, current employee handbooks and policies that match how your business runs." },
      { title: "Workforce compliance monitoring", description: "Ongoing attention to documentation, acknowledgments, and process consistency." },
      { title: "Audit readiness", description: "Organized records and processes so you are prepared if a review ever happens." },
    ],
    whoItHelps: [
      "Small businesses",
      "Growing businesses",
      "Business owners",
      "Companies without a dedicated HR department",
      "Multi-state employers",
    ],
    process: standardProcess,
    serviceSlugs: [
      "hr-mri-risk-assessment",
      "compliance-support",
      "employee-handbook-creation-management",
      "workforce-compliance-monitoring",
    ],
    relatedAudienceSlugs: ["business-owners", "small-businesses", "companies-without-hr-departments", "multi-state-employers"],
    searchThemes: [
      "HR compliance consultant",
      "HR risk assessment",
      "Employee handbook consultant",
      "Workforce compliance support",
      "Employment policy review",
    ],
    faqs: [
      {
        question: "What is HR compliance support?",
        answer:
          "HR compliance support is practical help reviewing your policies, documentation, and processes so they stay clear, consistent, and current. Freedom HR Solutions helps you identify gaps, organize records, and improve how HR responsibilities are handled day to day.",
      },
      {
        question: "How do I know if my business has HR compliance risks?",
        answer:
          "Common signs include an outdated handbook, inconsistent employee records, growth into new states, or no one clearly responsible for HR. An HR MRI Risk Assessment is a straightforward way to see where your risks are.",
      },
      {
        question: "What is included in an HR risk assessment?",
        answer:
          "The assessment reviews your policies, documentation, processes, and systems to identify gaps and improvement opportunities, then gives you a prioritized list of practical next steps.",
      },
      {
        question: "How often should employee handbooks be reviewed?",
        answer:
          "A good practice is to review your handbook at least once a year and after major changes such as new locations, significant growth, or new policies. We help you keep it current.",
      },
      {
        question: "Can Freedom HR Solutions help companies without an HR department?",
        answer:
          "Yes. Many of the businesses we support do not have an internal HR team. We help you build practical HR processes, documentation, and systems so the essentials are covered.",
      },
    ],
    primaryCta: ctas.assessment,
    secondaryCta: ctas.complianceConsult,
  },
  {
    slug: "aca-reporting-compliance",
    navLabel: "ACA Reporting & Compliance",
    title: "ACA Reporting & Compliance",
    h1: "ACA Reporting and Compliance Support for Employers",
    meta: {
      title: "ACA Reporting and Compliance Support",
      description:
        "Get support with ACA reporting, Applicable Large Employer reviews, IRS 1094 and 1095 filing, affordability reviews, and ACA penalty response.",
    },
    summary:
      "Understand your ACA reporting responsibilities, organize the data, and prepare accurate filings with experienced support.",
    intro:
      "ACA reporting can be confusing, especially for employers who are growing or managing coverage across multiple states. Freedom HR Solutions helps you understand your responsibilities, organize workforce and coverage data, prepare filing information, and respond if reporting issues come up.",
    problems: [
      { title: "Unclear ALE status", description: "Uncertainty about whether your business is an Applicable Large Employer and what that requires." },
      { title: "Messy workforce data", description: "Employee, coverage, and eligibility data spread across systems that do not line up cleanly." },
      { title: "Filing errors", description: "Mistakes on IRS Forms 1094 and 1095 that can lead to notices and follow up." },
      { title: "Penalty notices", description: "IRS notices that arrive without a clear plan for how to respond." },
    ],
    helps: [
      { title: "ALE review", description: "Help determining Applicable Large Employer status and what it means for your reporting." },
      { title: "1094 and 1095 preparation", description: "Support organizing data and preparing accurate filing information." },
      { title: "Affordability review", description: "A review of affordability and eligibility details that affect your reporting." },
      { title: "Penalty response support", description: "Practical help understanding and responding to ACA related notices." },
    ],
    whoItHelps: [
      "Applicable Large Employers",
      "Growing businesses",
      "Multi-state employers",
      "Benefits administrators",
      "HR teams",
    ],
    process: standardProcess,
    serviceSlugs: ["aca-reporting-consultant", "aca-compliance-review", "applicable-large-employer-review"],
    relatedAudienceSlugs: ["multi-state-employers", "benefits-administrators", "growing-businesses", "hr-teams"],
    searchThemes: [
      "ACA reporting consultant",
      "IRS 1094 1095 filing",
      "ACA penalty response",
      "Applicable Large Employer review",
      "ACA compliance review",
    ],
    faqs: [
      {
        question: "What is ACA reporting?",
        answer:
          "ACA reporting is the process employers use to report health coverage offers, employee eligibility, and coverage information to the IRS. We help employers review requirements, organize data, and prepare filing information.",
      },
      {
        question: "Who is considered an Applicable Large Employer?",
        answer:
          "Generally, an employer that averaged 50 or more full-time and full-time equivalent employees in the prior year may be an Applicable Large Employer. We help you review your numbers so you understand where you stand.",
      },
      {
        question: "What are IRS Forms 1094 and 1095?",
        answer:
          "Forms 1094 and 1095 are used to report health coverage information to the IRS and to employees. We help you organize the data needed and prepare accurate filing information.",
      },
      {
        question: "Can Freedom HR Solutions help with ACA penalty notices?",
        answer:
          "Yes. We help you understand the notice, organize supporting information, and prepare a practical response. We do not provide legal advice or guarantee outcomes.",
      },
      {
        question: "How can employers reduce ACA reporting errors?",
        answer:
          "Clean data, clear eligibility tracking, and an annual review of your reporting process all help. We support each of these so your filings are better organized.",
      },
    ],
    primaryCta: ctas.acaReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "payroll-benefits-hr-systems",
    navLabel: "Payroll, Benefits & HR Systems",
    title: "Payroll, Benefits & HR Systems",
    h1: "Payroll, Benefits, and HR System Support",
    meta: {
      title: "Payroll, Benefits, and HR System Support",
      description:
        "Freedom HR Solutions helps businesses select, configure, manage, and optimize payroll, benefits, and HR systems for better accuracy and efficiency.",
    },
    summary:
      "Choose the right systems, configure them correctly, and keep payroll and benefits accurate as you grow.",
    intro:
      "Payroll and benefits run on systems, and when those systems are set up well, everything downstream gets easier. Freedom HR Solutions helps you select the right platforms, configure them for how your business operates, and keep payroll and benefits accurate across locations and states.",
    problems: [
      { title: "The wrong fit", description: "A payroll or HR platform that does not match how your business actually works." },
      { title: "Configuration errors", description: "Settings, deductions, and rules that were never fully aligned to your needs." },
      { title: "Disconnected data", description: "HR, payroll, and benefits systems that do not share data cleanly." },
      { title: "Multi-state complexity", description: "Payroll across states that introduces rules the current setup struggles with." },
    ],
    helps: [
      { title: "System selection", description: "Help comparing and choosing payroll, HR, and benefits platforms that fit your business." },
      { title: "Configuration support", description: "Setup and configuration so the system reflects your real workflows." },
      { title: "Benefits administration", description: "Support managing benefits setup, eligibility, and enrollment workflows." },
      { title: "Multi-state payroll", description: "Help managing payroll across multiple states and locations." },
    ],
    whoItHelps: ["Growing businesses", "Payroll teams", "Benefits administrators", "Multi-state employers", "Business owners"],
    process: standardProcess,
    serviceSlugs: ["payroll-benefits-hr-management", "benefits-administration-support", "multi-state-payroll-support"],
    relatedAudienceSlugs: ["payroll-teams", "benefits-administrators", "growing-businesses", "multi-state-employers"],
    searchThemes: [
      "Payroll system consultant",
      "Benefits administration support",
      "HCM system consulting",
      "Multi-state payroll support",
      "HR management systems",
    ],
    faqs: [
      {
        question: "Can Freedom HR Solutions help choose a payroll system?",
        answer:
          "Yes. We help you compare platforms based on your size, structure, and goals so you can choose a system that fits how your business actually operates.",
      },
      {
        question: "Can Freedom HR Solutions help with benefits administration setup?",
        answer:
          "Yes. We help configure benefits plans, eligibility rules, and enrollment workflows, and we support you through open enrollment.",
      },
      {
        question: "What causes payroll and benefits system errors?",
        answer:
          "Common causes include incomplete configuration, data that does not sync between systems, and processes that were never documented. We help identify and correct the root cause.",
      },
      {
        question: "Can payroll, HR, and benefits systems be connected?",
        answer:
          "In many cases, yes. We help review integration options so your systems share data more cleanly and reduce duplicate manual work.",
      },
      {
        question: "Can Freedom HR Solutions help with multi-state payroll support?",
        answer:
          "Yes. We help employers manage payroll workflows across multiple states and keep configurations consistent as they expand.",
      },
    ],
    primaryCta: ctas.systemReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "hr-technology-automation",
    navLabel: "HR Technology & Automation",
    title: "HR Technology & Automation",
    h1: "HR Technology and Automation Consulting",
    meta: {
      title: "HR Technology and Automation Consulting",
      description:
        "Freedom HR Solutions helps businesses automate HR workflows, connect payroll and HR systems, streamline operations, and improve reporting. HR technology consulting for teams in Las Vegas and nationwide.",
    },
    summary:
      "Reduce manual work, connect your systems, and turn HR data into reporting you can actually use.",
    intro:
      "HR technology should reduce work, not create it. When systems do not connect, reporting is manual, and workflows require constant rekeying, your team pays the price in time and errors. Freedom HR Solutions helps businesses streamline HR operations by automating repetitive tasks, connecting HR and payroll platforms, and building the reporting leaders need to make decisions. Whether you are trying to get more out of existing technology or need help getting a stalled implementation across the finish line, we bring structure and accountability to the process.",
    problems: [
      { title: "Too much manual work", description: "Repetitive tasks that consume time and introduce errors." },
      { title: "Disconnected systems", description: "Platforms that do not talk to each other, forcing duplicate data entry." },
      { title: "Weak reporting", description: "Reports that are hard to build and difficult to trust." },
      { title: "Setup that never finished", description: "Implementations that stalled before the system was fully usable." },
    ],
    helps: [
      { title: "Workflow automation", description: "Identify and automate repetitive HR, payroll, and benefits tasks." },
      { title: "System implementation", description: "Stand up new systems with proper configuration, testing, and training." },
      { title: "Integrations", description: "Connect systems so data flows cleanly between them." },
      { title: "Reporting and dashboards", description: "Build reporting that gives leaders clear visibility." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Payroll teams", "Multi-state employers", "Business owners"],
    process: standardProcess,
    serviceSlugs: [
      "hr-technology-automation",
      "system-setup-implementation",
      "streamlining-processes",
      "reporting-data-insights",
      "system-audits-improvements",
    ],
    relatedAudienceSlugs: ["hr-teams", "growing-businesses", "payroll-teams"],
    searchThemes: [
      "HR technology consultant",
      "HR automation consultant",
      "HCM implementation support",
      "HR system integration",
      "HR reporting dashboards",
    ],
    faqs: [
      {
        question: "What is HR technology and automation consulting?",
        answer:
          "HR technology and automation consulting is hands-on help choosing, connecting, configuring, and improving the systems that run your HR, payroll, and benefits operations so your team spends less time on manual work.",
      },
      {
        question: "Which HR workflows can be automated?",
        answer:
          "Onboarding steps, approval routing, data updates, reporting generation, and parts of payroll and benefits workflows are commonly automated. The right targets depend on your current systems and where manual effort is highest.",
      },
      {
        question: "Can Freedom HR Solutions help connect HR and payroll systems?",
        answer:
          "Yes. We review your current platforms and integration options and help configure or improve the connections so data flows more cleanly between systems.",
      },
      {
        question: "Can HR automation help reduce payroll and benefits errors?",
        answer:
          "Often yes. Automating manual steps reduces the opportunities for rekeying errors and inconsistent data across platforms.",
      },
      {
        question: "Can Freedom HR Solutions help improve HR reporting?",
        answer:
          "Yes. We help build reports and dashboards that give leaders clearer visibility into workforce costs, trends, and performance without requiring manual data assembly each time.",
      },
      {
        question: "How do system audits improve HR operations?",
        answer:
          "A system audit surfaces configuration gaps, data issues, and workflow problems, then gives you a prioritized plan to fix them and improve accuracy.",
      },
      {
        question: "Do we need to switch systems to benefit from HR technology consulting?",
        answer:
          "Not necessarily. Many improvements come from better configuration and use of the platforms you already have. We evaluate what you have in place before recommending any changes.",
      },
    ],
    primaryCta: ctas.techReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "support-service-continuity",
    navLabel: "Support & Service Continuity",
    title: "Support & Service Continuity",
    h1: "HR, Payroll, and Benefits Support and Service Continuity",
    meta: {
      title: "HR, Payroll, and Benefits Support Services",
      description:
        "Get ongoing technical support, troubleshooting, open enrollment support, and service continuity for HR, payroll, and benefits systems.",
    },
    summary:
      "Keep your systems running smoothly after launch with troubleshooting, open enrollment support, and ongoing help.",
    intro:
      "Implementation is the beginning, not the end. Systems need maintenance, issues come up, and open enrollment arrives every year. Freedom HR Solutions provides ongoing support so your HR, payroll, and benefits systems stay reliable and your team always has somewhere to turn.",
    problems: [
      { title: "Issues with no owner", description: "System problems that linger because no one has time to dig in." },
      { title: "Open enrollment pressure", description: "An annual deadline that strains the team and the systems." },
      { title: "Downtime and delays", description: "Errors that slow payroll, benefits, or HR operations." },
      { title: "Lost momentum after launch", description: "A new system that never reached its full value after go-live." },
    ],
    helps: [
      { title: "Ongoing technical support", description: "A reliable resource for questions, troubleshooting, and improvements." },
      { title: "Technical issue resolution", description: "Root-cause analysis and correction for urgent or recurring problems." },
      { title: "Open enrollment support", description: "Setup, testing, communication, and reconciliation help for enrollment." },
      { title: "System maintenance", description: "Regular attention so configurations and data stay accurate." },
    ],
    whoItHelps: ["HR teams", "Payroll teams", "Benefits administrators", "Growing businesses", "Companies without a dedicated HR department"],
    process: standardProcess,
    serviceSlugs: ["ongoing-technical-support", "technical-issue-resolution", "open-enrollment-setup"],
    relatedAudienceSlugs: ["payroll-teams", "benefits-administrators", "hr-teams"],
    searchThemes: [
      "Ongoing HR system support",
      "Payroll technical support",
      "Benefits technical support",
      "Open enrollment setup support",
      "HCM support services",
    ],
    faqs: [
      {
        question: "What is ongoing HR system support?",
        answer:
          "Ongoing support gives your team a reliable resource for troubleshooting, updates, and improvements to your HR, payroll, and benefits systems over time.",
      },
      {
        question: "Can Freedom HR Solutions help troubleshoot payroll errors?",
        answer:
          "Yes. We help diagnose the root cause of payroll errors, correct the issue, test the fix, and recommend ways to prevent it from recurring.",
      },
      {
        question: "Can Freedom HR Solutions help during open enrollment?",
        answer:
          "Yes. We help set up benefits plans, test configurations, support employee communication, and reconcile data after enrollment closes.",
      },
      {
        question: "What happens after system implementation?",
        answer:
          "After launch, we can provide ongoing support, maintenance, and optimization so the system continues to deliver value as your business changes.",
      },
      {
        question: "Can Freedom HR Solutions work with existing payroll and HR providers?",
        answer:
          "Yes. We frequently work alongside your existing providers and systems to support your workflows and resolve issues.",
      },
    ],
    primaryCta: ctas.technicalSupport,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "talent-workforce-development",
    navLabel: "Talent & Workforce Development",
    title: "Talent & Workforce Development",
    h1: "Talent, Training, and Workforce Development Support",
    meta: {
      title: "Talent and Workforce Development Support",
      description:
        "Support recruiting, onboarding, employee engagement, performance management, training, leadership development, and organizational change.",
    },
    summary:
      "Strengthen the employee experience with better onboarding, training, engagement, and performance support.",
    intro:
      "Your people are the business. Freedom HR Solutions helps you improve how you recruit, onboard, train, engage, and develop employees so your team is set up to succeed and your organization is ready for change.",
    problems: [
      { title: "Rough onboarding", description: "New hires who start without a clear, consistent onboarding experience." },
      { title: "Limited training", description: "Few structured opportunities for employees and leaders to grow." },
      { title: "Unclear performance process", description: "Reviews and expectations that are inconsistent or informal." },
      { title: "Change without a plan", description: "Reorganizations and system changes that are hard on employees." },
    ],
    helps: [
      { title: "Recruiting and onboarding", description: "Build consistent, welcoming processes for hiring and onboarding." },
      { title: "Training and development", description: "Create practical training and leadership development programs." },
      { title: "Engagement and performance", description: "Support engagement, feedback, and performance management processes." },
      { title: "Change management", description: "Help your team navigate organizational and system change." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Healthcare companies", "Retail businesses", "Manufacturing companies"],
    process: standardProcess,
    serviceSlugs: ["recruiting-onboarding-solutions", "training-development-programs", "employee-engagement-performance-management"],
    relatedAudienceSlugs: ["hr-teams", "growing-businesses", "retail-businesses"],
    searchThemes: [
      "Recruiting and onboarding solutions",
      "Employee engagement consulting",
      "Performance management support",
      "Training and development programs",
      "Organizational change management",
    ],
    faqs: [
      {
        question: "Can Freedom HR Solutions help improve onboarding?",
        answer:
          "Yes. We help you build a consistent onboarding process so new hires have a clear, welcoming start and reach productivity sooner.",
      },
      {
        question: "What training programs can be created?",
        answer:
          "We help design practical training for employees and leaders, including onboarding training, role-based training, and leadership development.",
      },
      {
        question: "How does performance management support employee accountability?",
        answer:
          "Clear expectations, regular feedback, and a consistent review process help employees understand goals and stay accountable. We help you put that structure in place.",
      },
      {
        question: "Can Freedom HR Solutions help with organizational change?",
        answer:
          "Yes. We help plan and support organizational and system changes so they are clearer and less disruptive for your team.",
      },
      {
        question: "Can Freedom HR Solutions help with compliance training?",
        answer:
          "Yes. We help create practical training that reinforces your policies and supports a consistent, compliant workplace.",
      },
    ],
    primaryCta: ctas.workforceConsult,
    secondaryCta: ctas.consultation,
  },
];

export const serviceHubsBySlug = Object.fromEntries(serviceHubs.map((hub) => [hub.slug, hub]));

export function getServiceHub(slug: string): ServiceHub | undefined {
  return serviceHubsBySlug[slug];
}
