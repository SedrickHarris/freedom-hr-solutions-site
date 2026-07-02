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
      title: "HR Compliance and Risk Management Consulting",
      description:
        "Freedom HR Solutions helps businesses identify HR compliance risks, update employee handbooks, strengthen workforce documentation, and prepare for audits. Serving Las Vegas, Nevada, and businesses nationwide.",
    },
    summary:
      "Find HR compliance risks before they become costly problems, strengthen your policies, and keep documentation current as your team grows.",
    intro:
      "HR compliance is easy to overlook until something goes wrong. As your business adds employees, locations, and policies, small gaps in documentation and process can turn into real risk. Freedom HR Solutions helps you identify those gaps early, organize your HR foundation, and keep it current so your team can focus on running the business. Whether you need a compliance review for a growing company, help updating an employee handbook, or support preparing for a potential audit, this is where to start.",
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
      "HR compliance review for growing companies",
      "Employee handbook consultant",
      "Workforce compliance support",
      "Multi-state HR compliance",
    ],
    faqs: [
      {
        question: "What does HR compliance support include?",
        answer:
          "HR compliance support includes reviewing your policies, documentation, and processes to identify gaps, organizing employee records, updating handbooks, and giving you a prioritized plan for what to address first. It is practical help keeping HR responsibilities clear and current as your business grows.",
      },
      {
        question: "How do I know if my business has HR compliance risks?",
        answer:
          "Common signs include an outdated handbook, inconsistent employee records, growth into new states, or no one clearly responsible for HR. An HR MRI Risk Assessment is a direct way to see where your gaps are and what to address first.",
      },
      {
        question: "What is included in an HR compliance review for a growing company?",
        answer:
          "A compliance review for a growing company typically covers your employee handbook and policies, documentation practices, record-keeping, and how HR responsibilities are assigned as your team expands. You receive a prioritized list of findings and practical next steps.",
      },
      {
        question: "How often should employee handbooks be reviewed?",
        answer:
          "A good practice is to review your handbook at least once a year and after major changes such as new locations, significant growth, or new policies. We help you keep it current without letting it fall behind.",
      },
      {
        question: "Can Freedom HR Solutions help multi-state employers with HR compliance?",
        answer:
          "Yes. Multi-state employers face additional compliance complexity as they expand. We help review documentation, policies, and processes so your HR foundation holds up across the states where you operate.",
      },
      {
        question: "Can Freedom HR Solutions help companies without an HR department?",
        answer:
          "Yes. Many of the businesses we support do not have an internal HR team. We help you build practical HR processes, documentation, and systems so the essentials are covered without needing a full-time hire.",
      },
    ],
    primaryCta: { label: "Request HR Compliance Review", href: "/request-assessment/" },
    secondaryCta: { label: "Schedule Consultation", href: "/contact/" },
  },
  {
    slug: "aca-reporting-compliance",
    navLabel: "ACA Reporting & Compliance",
    title: "ACA Reporting & Compliance",
    h1: "ACA Reporting and Compliance Support for Employers",
    meta: {
      title: "ACA Reporting and Compliance Support for Employers",
      description:
        "Freedom HR Solutions helps employers determine ALE status, organize workforce data, prepare IRS 1094 and 1095 filings, and respond to ACA penalty notices. Serving Las Vegas, Nevada, and nationwide.",
    },
    summary:
      "Understand your ACA reporting responsibilities, determine ALE status, organize workforce data, and prepare accurate IRS filings with experienced support.",
    intro:
      "ACA reporting starts with one question: are you an Applicable Large Employer? If your business averaged 50 or more full-time and full-time equivalent employees in the prior year, reporting requirements likely apply. From there, the process involves organizing coverage and eligibility data, preparing IRS Forms 1094 and 1095, and staying current each filing cycle. Freedom HR Solutions helps employers work through each step, whether you are determining ALE status for the first time, cleaning up data before a deadline, or responding to a notice. We support businesses in Las Vegas, Nevada, and nationwide.",
    problems: [
      { title: "Unclear ALE status", description: "Uncertainty about whether your business qualifies as an Applicable Large Employer and what ACA reporting that triggers." },
      { title: "Messy workforce data", description: "Employee, coverage, and eligibility data spread across systems that do not line up when it is time to file." },
      { title: "Filing errors", description: "Mistakes on IRS Forms 1094 and 1095 that result in notices and follow-up from the IRS." },
      { title: "Penalty notices", description: "IRS ACA notices that arrive without a clear plan for how to review, respond, or correct the underlying issue." },
    ],
    helps: [
      { title: "ALE review", description: "Help determining Applicable Large Employer status and what it means for your reporting." },
      { title: "1094 and 1095 preparation", description: "Support organizing data and preparing accurate filing information." },
      { title: "Affordability review", description: "A review of affordability and eligibility details that affect your reporting." },
      { title: "Penalty response support", description: "Practical help understanding and responding to ACA related notices." },
    ],
    whoItHelps: [
      "Applicable Large Employers",
      "Growing businesses approaching the ALE threshold",
      "Multi-state employers",
      "Benefits administrators",
      "HR teams",
      "Businesses without a dedicated HR department",
    ],
    process: standardProcess,
    serviceSlugs: ["aca-reporting-consultant", "aca-compliance-review", "applicable-large-employer-review"],
    relatedAudienceSlugs: ["multi-state-employers", "benefits-administrators", "growing-businesses", "hr-teams"],
    searchThemes: [
      "ACA reporting consultant",
      "Applicable Large Employer review",
      "ALE status determination",
      "IRS 1094 and 1095 filing help",
      "ACA penalty response",
      "ACA reporting for growing businesses",
      "ACA compliance review",
    ],
    faqs: [
      {
        question: "What is ACA reporting?",
        answer:
          "ACA reporting is the process employers use to report health coverage offers, employee eligibility, and coverage details to the IRS each year. Applicable Large Employers file IRS Forms 1094-C and 1095-C. Freedom HR Solutions helps employers review requirements, organize data, and prepare filing information.",
      },
      {
        question: "Who is considered an Applicable Large Employer?",
        answer:
          "Generally, an employer that averaged 50 or more full-time and full-time equivalent employees in the prior calendar year is considered an Applicable Large Employer under the ACA. Full-time equivalent employees are calculated by combining part-time hours. We help employers review their workforce numbers to understand where they stand.",
      },
      {
        question: "Am I an Applicable Large Employer?",
        answer:
          "Whether you qualify as an Applicable Large Employer depends on your average employee count from the prior year, including full-time equivalent calculations for part-time workers. If you averaged 50 or more, ACA reporting requirements likely apply. Freedom HR Solutions helps you review your workforce data to make that determination.",
      },
      {
        question: "How is the ALE threshold calculated?",
        answer:
          "The ALE threshold is generally 50 full-time and full-time equivalent employees averaged across the prior calendar year. Full-time equivalent employees are calculated by dividing total part-time hours worked in a month by 120. We help employers work through this calculation so they have a clear picture of their status.",
      },
      {
        question: "What are IRS Forms 1094 and 1095?",
        answer:
          "Forms 1094 and 1095 are used to report health coverage information to the IRS and to employees. Form 1095-C is provided to each full-time employee; Form 1094-C is the transmittal filed with the IRS. We help employers organize the data needed to prepare accurate filing information.",
      },
      {
        question: "Can Freedom HR Solutions help with ACA penalty notices?",
        answer:
          "Yes. We help you understand the notice, organize supporting information, and prepare a practical response. We do not provide legal advice or guarantee outcomes.",
      },
      {
        question: "How can employers reduce ACA reporting errors?",
        answer:
          "Clean eligibility data, consistent tracking of full-time and part-time hours, and an annual review of your reporting process all help reduce avoidable errors. We support each of these so your filings are better organized before the deadline.",
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
      title: "Payroll, Benefits & HR System Support",
      description:
        "Freedom HR Solutions helps businesses select, configure, and manage payroll, benefits, and HR systems so data stays accurate and teams spend less time fixing errors.",
    },
    summary:
      "Choose the right systems, configure them correctly, and keep payroll and benefits accurate as your business grows.",
    intro:
      "Payroll and benefits run on systems. When those systems are set up correctly, everything downstream gets easier: deductions are right, enrollment works, and data flows between platforms without manual intervention. When they are not set up correctly, errors compound and corrections take time your team does not have. Freedom HR Solutions helps businesses select, configure, and manage payroll, benefits, and HR systems so operations stay accurate across locations and states. Freedom HR Solutions provides independent consulting support and is not affiliated with or endorsed by any of the platforms referenced on this page.",
    problems: [
      { title: "The wrong fit", description: "A payroll or HR platform that does not match how the business actually operates, creating workarounds from day one." },
      { title: "Configuration errors", description: "Settings, deductions, and rules that were never fully aligned to the real workflow." },
      { title: "Disconnected data", description: "HR, payroll, and benefits systems that do not share data cleanly, requiring manual reconciliation." },
      { title: "Multi-state complexity", description: "Payroll across states that introduces rules the current setup was not built to handle." },
    ],
    helps: [
      { title: "System selection support", description: "Help comparing and choosing payroll, HR, and benefits platforms that fit the business, not just the vendor demo." },
      { title: "Configuration and setup", description: "Setup and configuration so the system reflects real workflows, not default settings." },
      { title: "Benefits administration", description: "Support managing benefits setup, eligibility, and enrollment workflows." },
      { title: "Multi-state payroll support", description: "Help managing payroll across multiple states and locations consistently." },
    ],
    whoItHelps: ["Payroll teams", "Benefits administrators", "HR teams", "Growing businesses", "Multi-state employers"],
    process: standardProcess,
    serviceSlugs: ["payroll-benefits-hr-management", "benefits-administration-support", "multi-state-payroll-support", "open-enrollment-setup", "system-setup-implementation"],
    relatedAudienceSlugs: ["payroll-teams", "benefits-administrators", "growing-businesses", "multi-state-employers"],
    searchThemes: [
      "payroll and benefits system support",
      "HR system configuration support",
      "benefits administration support",
      "payroll system setup consulting",
      "multi-state payroll support",
      "HRIS payroll systems consulting",
      "payroll and HR integration support",
      "benefits enrollment configuration",
      "payroll benefits consultant",
    ],
    faqs: [
      {
        question: "What does payroll and benefits system support include?",
        answer:
          "It includes help selecting the right platforms, configuring payroll and benefits settings, managing eligibility and enrollment workflows, reconciling data across systems, and supporting multi-state payroll consistency.",
      },
      {
        question: "How does Freedom HR Solutions help with payroll configuration?",
        answer:
          "We review your current setup, identify configuration gaps, and work through corrections so deductions, rules, and workflows reflect how your business actually operates.",
      },
      {
        question: "What is benefits administration support?",
        answer:
          "Benefits administration support covers benefits setup, eligibility management, enrollment configuration, employee communication support, and ongoing maintenance so benefits data stays accurate.",
      },
      {
        question: "Can Freedom HR Solutions help connect HR and payroll systems?",
        answer:
          "Yes. We review your systems and integration options so data flows more cleanly between HR, payroll, and benefits platforms and your team spends less time on duplicate entry or manual corrections.",
      },
      {
        question: "Does Freedom HR Solutions support multi-state payroll?",
        answer:
          "Yes. We help employers manage payroll across multiple states, including configuration, eligibility, and workflow consistency as teams grow and expand into new locations.",
      },
      {
        question: "What HR and payroll platforms does Freedom HR Solutions work with?",
        answer:
          "We work with businesses using ADP, isolved, BambooHR, HiBob, and CustomHCM. We help with configuration, audits, troubleshooting, and ongoing support. We are not affiliated with or endorsed by those platforms.",
      },
      {
        question: "What happens when payroll and benefits data does not line up?",
        answer:
          "Misaligned data between HR, payroll, and benefits systems is usually a configuration or integration problem. We help identify the root cause and correct it so deductions, elections, and records are consistent.",
      },
    ],
    primaryCta: { label: "Request Payroll and Benefits Review", href: "/request-assessment/" },
    secondaryCta: { label: "Schedule Consultation", href: "/contact/" },
  },
  {
    slug: "hr-technology-automation",
    navLabel: "HR Technology & Automation",
    title: "HR Technology & Automation",
    h1: "HR Technology and Automation Consulting",
    meta: {
      title: "HR Technology & Automation Consulting",
      description:
        "Freedom HR Solutions helps businesses automate HR workflows, connect systems, improve reporting, and get more value from their HR technology investments.",
    },
    summary:
      "Reduce manual work, connect your systems, and turn HR data into reporting you can actually use.",
    intro:
      "Manual HR work adds up: rekeying data between systems, chasing approvals by email, and building reports by hand each week. Freedom HR Solutions helps businesses automate repetitive HR workflows, connect HR, payroll, and benefits systems so data flows cleanly, and build reporting that gives leadership clear visibility without manual effort. Whether your current system is underused or your workflows never recovered from a rushed implementation, we help you get more value from the technology you already have. Freedom HR Solutions provides independent consulting support and is not affiliated with or endorsed by any of the platforms referenced on this page.",
    problems: [
      { title: "Too much manual work", description: "Repetitive tasks that consume time and introduce errors every time someone re-enters data." },
      { title: "Disconnected systems", description: "Platforms that do not communicate, forcing duplicate entry and manual reconciliation." },
      { title: "Weak reporting", description: "Reports that are slow to build, hard to trust, and require manual data assembly." },
      { title: "Setup that never finished", description: "Implementations that stalled before the system reached its full capability." },
    ],
    helps: [
      { title: "Workflow automation", description: "Identify and automate repetitive HR, payroll, and benefits tasks so your team focuses on higher-value work." },
      { title: "System integration", description: "Connect platforms so data flows cleanly between HR, payroll, and benefits systems." },
      { title: "Reporting and dashboards", description: "Build reports that give leaders clear visibility into workforce costs, trends, and performance." },
      { title: "System implementation and audits", description: "Stand up new systems correctly or surface what is holding back existing ones." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Payroll teams", "Multi-state employers", "Business owners"],
    process: standardProcess,
    serviceSlugs: [
      "system-setup-implementation",
      "reporting-data-insights",
      "system-audits-improvements",
      "streamlining-processes",
      "hris-implementation",
    ],
    relatedAudienceSlugs: ["hr-teams", "growing-businesses", "payroll-teams"],
    searchThemes: [
      "HR technology and automation consulting",
      "HR workflow automation consulting",
      "HR system integration support",
      "HR automation for small business",
      "HR process improvement consulting",
      "HR reporting and dashboards consulting",
      "HCM implementation consultant",
      "HR system audit and optimization",
      "automate HR workflows",
    ],
    faqs: [
      {
        question: "What is HR technology and automation consulting?",
        answer:
          "HR technology and automation consulting is hands-on help choosing, configuring, connecting, and improving the systems that run your HR, payroll, and benefits operations so your team spends less time on manual work.",
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
