import type { Partner } from "@/types";

/**
 * Partner / platform support pages.
 *
 * IMPORTANT: Freedom HR Solutions is not an official partner, reseller, or
 * certified provider for these platforms unless the client confirms otherwise.
 * All copy uses safe "supports workflows involving this platform" language.
 */
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
    externalUrl: "https://www.customhcm.com",
    contactName: "Michael Migdol",
    meta: {
      title: "CustomHCM Consulting and Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses implement, configure, optimize, and support payroll, HR, and benefits workflows involving CustomHCM, including setup, integration, reporting, and ongoing platform support.",
    },
    summary:
      "Implementation, configuration, integration, and ongoing support for CustomHCM payroll, HR, and benefits workflows.",
    overview:
      "Freedom HR Solutions helps businesses implement, configure, optimize, and support HR, payroll, and benefits workflows involving CustomHCM. Michael Migdol leads the Custom HCM team and works alongside Freedom HR Solutions to support clients using the platform. Whether you are setting up the platform for the first time, configuring payroll and benefits, connecting CustomHCM to other systems, or resolving recurring issues, we help your team configure the platform and keep workflows accurate.",
    supportAreas: [
      {
        title: "CustomHCM implementation",
        description: "Help planning and coordinating CustomHCM setup so your payroll, HR, and benefits configurations are accurate and reflect how your business actually operates.",
      },
      {
        title: "Payroll configuration support",
        description: "Support configuring payroll workflows in CustomHCM, including pay rules, deductions, tax settings, and workflow sequencing so payroll runs accurately.",
      },
      {
        title: "Benefits setup and administration",
        description: "Help configuring benefits plans, eligibility rules, and enrollment workflows in CustomHCM, including open enrollment preparation and ongoing benefits administration.",
      },
      {
        title: "System integration support",
        description: "Help reviewing and connecting CustomHCM with your other systems so data flows more cleanly between payroll, HR, and benefits platforms.",
      },
      {
        title: "Reporting and data accuracy",
        description: "Support building reports and improving data accuracy in CustomHCM so payroll, HR, and benefits teams have reliable visibility into workforce data.",
      },
      {
        title: "Ongoing platform support",
        description: "Continued help troubleshooting issues, maintaining configurations, and supporting CustomHCM workflows as your workforce or payroll structure changes over time.",
      },
    ],
    relatedServiceSlugs: [
      "system-setup-implementation",
      "payroll-benefits-hr-management",
      "hr-technology-automation",
      "technical-issue-resolution",
      "ongoing-technical-support",
    ],
    faqs: [
      {
        question: "Is Freedom HR Solutions an official CustomHCM partner?",
        answer: "We help businesses implement, configure, optimize, and support workflows involving CustomHCM. We do not claim official partnership or certification unless confirmed.",
      },
      {
        question: "Can Freedom HR Solutions help implement CustomHCM?",
        answer: "Yes. We help plan and coordinate CustomHCM implementation, including configuration, data migration, testing, and go-live support so the platform reflects your payroll and HR workflows from the start.",
      },
      {
        question: "Can you support payroll and benefits in CustomHCM?",
        answer: "Yes. We help configure and support payroll and benefits workflows in CustomHCM, including pay rules, deductions, eligibility, and enrollment setup.",
      },
      {
        question: "Can you help integrate CustomHCM with other systems?",
        answer: "Yes. We help review integration options between CustomHCM and your other platforms so data flows more cleanly and reduces duplicate manual work.",
      },
      {
        question: "Can Freedom HR Solutions improve our CustomHCM reporting?",
        answer: "Yes. We help build reports and address data accuracy issues in CustomHCM so your team has reliable visibility into payroll, HR, and benefits data.",
      },
      {
        question: "Can you help after CustomHCM go-live?",
        answer: "Yes. We provide ongoing support and troubleshooting for CustomHCM workflows after implementation, including configuration updates and recurring issue resolution.",
      },
    ],
  },
  {
    slug: "legalshield-benefits-support",
    name: "LegalShield",
    category: "Legal & voluntary benefits",
    meta: {
      title: "LegalShield Benefits Administration Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses set up, administer, and communicate employee benefits workflows involving LegalShield. Support for open enrollment, payroll deduction coordination, and ongoing administration. Las Vegas and nationwide.",
    },
    summary:
      "Support for setting up, administering, and communicating employee benefits workflows involving LegalShield as part of a broader voluntary benefits program.",
    overview:
      "LegalShield offers legal and identity protection benefits that employers can make available to their workforce. Freedom HR Solutions helps businesses support the administration side: setting up the benefit, communicating it clearly to employees, coordinating payroll deduction, and managing the workflow through open enrollment and beyond. We work alongside your existing HR and payroll systems to help the benefit run accurately and without unnecessary friction.",
    supportAreas: [
      {
        title: "Benefits setup support",
        description:
          "Help coordinating the initial setup of LegalShield as an employee benefit, including how it fits into your existing benefits package and systems.",
      },
      {
        title: "Open enrollment support",
        description:
          "Support configuring, communicating, and administering LegalShield benefit options during open enrollment so employees understand what is available and how to enroll.",
      },
      {
        title: "Payroll deduction coordination",
        description:
          "Help reviewing how LegalShield payroll deductions are set up and flow through your payroll system to reduce errors and reconciliation issues.",
      },
      {
        title: "Employee communication support",
        description:
          "Support developing clear, consistent communication so employees understand their LegalShield benefit, how to activate it, and how to use it.",
      },
      {
        title: "Ongoing administration support",
        description:
          "Ongoing help managing benefits workflows involving LegalShield throughout the plan year, including enrollment changes, deduction adjustments, and employee questions.",
      },
    ],
    relatedServiceSlugs: [
      "benefits-administration-support",
      "open-enrollment-setup",
      "payroll-benefits-hr-management",
      "technical-issue-resolution",
      "ongoing-technical-support",
    ],
    faqs: [
      {
        question: "Is Freedom HR Solutions an official LegalShield partner?",
        answer:
          "We help businesses support and administer benefits workflows involving LegalShield. We do not claim official partnership or certification unless confirmed.",
      },
      {
        question: "Can Freedom HR Solutions help set up LegalShield as an employee benefit?",
        answer:
          "Yes. We help coordinate the setup process, review how LegalShield fits into your existing benefits package, and support configuration of payroll deductions and enrollment workflows.",
      },
      {
        question: "Can you help administer LegalShield benefits during open enrollment?",
        answer:
          "Yes. We support open enrollment by helping configure available benefit options, preparing employee communications, and managing the workflow so employees can enroll accurately.",
      },
      {
        question: "How does Freedom HR Solutions help with LegalShield payroll deductions?",
        answer:
          "We review how LegalShield deductions are configured in your payroll system and help identify and resolve setup issues that cause errors or reconciliation problems.",
      },
      {
        question: "Can you help communicate LegalShield benefits to employees?",
        answer:
          "Yes. We help develop clear communication that explains what LegalShield covers, how to enroll, and how to activate the benefit so employees actually understand and use it.",
      },
      {
        question: "What types of businesses does Freedom HR Solutions help with LegalShield benefits?",
        answer:
          "We work with small businesses, growing companies, HR teams, benefits administrators, and business owners across Nevada and nationwide that need support administering voluntary benefits like LegalShield.",
      },
      {
        question: "Can Freedom HR Solutions help with LegalShield benefits year-round?",
        answer:
          "Yes. Beyond open enrollment, we provide ongoing support for enrollment changes, deduction adjustments, and employee questions related to LegalShield throughout the plan year.",
      },
    ],
  },
  {
    slug: "haniel-consulting",
    name: "Haniel Consulting",
    category: "Business and leadership coaching partner",
    externalUrl: "https://www.hanielconsulting.com",
    contactName: "Claudia Esser Brown, MBA",
    meta: {
      title: "Haniel Consulting Business Coaching Partner | Freedom HR Solutions",
      description:
        "Freedom HR Solutions works alongside Haniel Consulting to give business owner clients access to strategic business coaching and leadership support alongside HR, payroll, and compliance services.",
    },
    summary:
      "A business and leadership coaching partnership that gives Freedom HR Solutions clients access to strategic coaching support for scaling, leadership, and work-life alignment.",
    overview:
      "Freedom HR Solutions works alongside Haniel Consulting to support business owners who need more than HR infrastructure. Claudia Esser Brown, MBA, founded Haniel Consulting and brings over 18 years of experience helping established business owners scale with strategy, strengthen their leadership, and build businesses that do not consume their lives. For Freedom HR Solutions clients who are managing HR and payroll challenges alongside broader questions about leadership direction, team structure, or sustainable growth, Haniel Consulting offers a trusted next step. Freedom HR Solutions handles the HR, payroll, benefits, and compliance foundation. Haniel Consulting helps business owners work on the leadership and strategy layer that sits above it. Both firms operate independently and collaborate on behalf of shared clients.",
    supportAreas: [
      {
        title: "Strategic business coaching",
        description:
          "Claudia Esser Brown works with established business owners to clarify growth strategy, build systems that reduce owner dependency, strengthen team performance, and create a business that operates without requiring constant owner involvement.",
      },
      {
        title: "Leadership development and clarity",
        description:
          "Coaching support to help business owners lead with more intention, make higher-impact decisions, identify blind spots, and build the leadership foundation their growing team needs.",
      },
      {
        title: "Scaling without overwhelm",
        description:
          "Practical coaching for business owners who are growing but feeling stretched thin. Haniel Consulting helps identify where to delegate, how to build sustainable systems, and how to scale without adding more hours.",
      },
      {
        title: "Business and life alignment coaching",
        description:
          "Support for business owners who have built external success but feel disconnected from their personal goals. Claudia helps clients align their business strategy with a life that works on their own terms.",
      },
    ],
    relatedServiceSlugs: [
      "hr-mri-risk-assessment",
      "compliance-support",
      "employee-handbook-creation-management",
      "payroll-benefits-hr-management",
    ],
    faqs: [
      {
        question: "What is the relationship between Freedom HR Solutions and Haniel Consulting?",
        answer:
          "Freedom HR Solutions and Haniel Consulting are independent firms that collaborate to support shared clients. Freedom HR Solutions provides HR, payroll, benefits, and compliance support. Haniel Consulting provides strategic business coaching and leadership development for business owners who want to scale and lead more effectively.",
      },
      {
        question: "Who leads Haniel Consulting?",
        answer:
          "Claudia Esser Brown, MBA, founded Haniel Consulting and brings over 18 years of experience helping established business owners clarify their strategy, strengthen their leadership, and build businesses that work without consuming their lives.",
      },
      {
        question: "What does Haniel Consulting help business owners with?",
        answer:
          "Haniel Consulting offers strategic business coaching, leadership development, and life alignment coaching for established business owners. The focus is on scaling with strategy, reducing owner dependency, and building a business that supports the life the owner actually wants.",
      },
      {
        question: "How does Freedom HR Solutions decide when to refer a client to Haniel Consulting?",
        answer:
          "When a Freedom HR Solutions client is managing HR and payroll challenges alongside broader questions about leadership, growth strategy, or team structure, Haniel Consulting may be a relevant next step. We do not require clients to use any partner firm.",
      },
      {
        question: "Where is Haniel Consulting based and who do they work with?",
        answer:
          "Haniel Consulting is based in New Hampshire and works with business owners worldwide through coaching programs focused on strategic growth and leadership alignment.",
      },
    ],
  },
  {
    slug: "pursuit-pathways",
    name: "PursuitPathways",
    category: "Workplace violence defensibility partner",
    externalUrl: "https://www.pursuitpathways.com",
    contactName: "Dave Miller",
    meta: {
      title: "PursuitPathways Workplace Violence Defensibility Partner | Freedom HR Solutions",
      description:
        "Freedom HR Solutions works alongside PursuitPathways to help clients identify workplace violence preparedness gaps and build the documentation, plans, and training records needed for legal defensibility.",
    },
    summary:
      "A workplace violence defensibility partnership that helps Freedom HR Solutions clients identify exposure gaps in planning, training, and documentation before those gaps are tested in a post-incident review.",
    overview:
      "Freedom HR Solutions works alongside PursuitPathways to support clients who need to address workplace violence preparedness as part of a broader HR and compliance foundation. Dave Miller leads PursuitPathways, a workplace violence defensibility platform that helps organizations identify exposure across planning, training, and documentation, and build the site-specific systems needed to demonstrate preparedness under legal and regulatory scrutiny. For Freedom HR Solutions clients who surface Emergency Action Plan gaps, incomplete workplace violence policies, or unvalidated training records during an HR review, PursuitPathways provides a structured path to close those gaps. Freedom HR Solutions handles the HR, payroll, benefits, and compliance foundation. PursuitPathways handles the workplace violence defensibility layer. Both firms operate independently and collaborate on behalf of shared clients.",
    supportAreas: [
      {
        title: "Liability exposure identification",
        description:
          "PursuitPathways runs a Liability Exposure Scan that evaluates an organization's planning, training, documentation, and response readiness gaps, producing a profile that reflects the same structure used to evaluate organizations after a workplace incident occurs.",
      },
      {
        title: "Defensibility system structuring",
        description:
          "Site-specific Emergency Action Plans, threat response protocols, and operational plans aligned to the actual environment, built to hold up under legal and regulatory review, not just check-the-box compliance.",
      },
      {
        title: "Training validation and conditioning",
        description:
          "Micro-drills, scenario-based response exercises, and ongoing conditioning that produce documented, validated training records, so organizations can demonstrate preparedness, not just assert it.",
      },
      {
        title: "Documentation and defensibility records",
        description:
          "Centralized documentation of plans, training, and response systems that creates an audit-ready defensibility record for use in post-incident legal and regulatory review.",
      },
    ],
    relatedServiceSlugs: [
      "hr-mri-risk-assessment",
      "compliance-support",
      "employee-handbook-creation-management",
      "ongoing-technical-support",
    ],
    faqs: [
      {
        question: "What is the relationship between Freedom HR Solutions and PursuitPathways?",
        answer:
          "Freedom HR Solutions and PursuitPathways are independent firms that collaborate to support shared clients. Freedom HR Solutions provides HR, payroll, benefits, and compliance support. PursuitPathways provides workplace violence defensibility systems, including exposure scanning, site-specific planning, and validated training documentation.",
      },
      {
        question: "Who leads PursuitPathways?",
        answer:
          "Dave Miller leads PursuitPathways, a workplace violence defensibility platform that helps organizations identify preparedness gaps and build the documentation, plans, and training records needed to demonstrate defensibility under legal and regulatory scrutiny.",
      },
      {
        question: "What does PursuitPathways help organizations with?",
        answer:
          "PursuitPathways helps organizations identify exposure across workplace violence planning, training, and documentation, and build site-specific systems that hold up under post-incident review. Their platform covers liability exposure scanning, defensibility structuring, and training validation.",
      },
      {
        question: "How does Freedom HR Solutions decide when to refer a client to PursuitPathways?",
        answer:
          "When a Freedom HR Solutions client surfaces gaps in workplace violence policies, Emergency Action Plans, or training documentation during an HR review, PursuitPathways may be a relevant next step. We do not require clients to engage any partner firm.",
      },
      {
        question: "Does Freedom HR Solutions provide workplace violence training or defensibility services?",
        answer:
          "No. Freedom HR Solutions provides HR, payroll, benefits, and compliance support. Workplace violence defensibility planning, exposure scanning, and training validation are PursuitPathways' scope. We refer clients when that need surfaces.",
      },
    ],
  },
  {
    slug: "champion-insurance",
    name: "Champion Insurance",
    category: "Medicare and employee benefits transition partner",
    externalUrl: "https://www.championinsurances.com",
    contactName: "Ron Filice",
    meta: {
      title: "Champion Insurance Medicare Partner | Freedom HR Solutions",
      description:
        "Freedom HR Solutions works alongside Champion Insurance to help connect employees approaching Medicare eligibility with licensed guidance on Medicare plan options, enrollment, and coverage decisions.",
    },
    summary:
      "A Medicare guidance partnership that gives Freedom HR Solutions clients a trusted resource when employees are approaching 65 and need help navigating Medicare plan options and enrollment.",
    overview:
      "Freedom HR Solutions works alongside Champion Insurance to support clients whose employees are approaching Medicare eligibility and need guidance that falls outside the scope of HR and payroll consulting. Ron Filice leads Champion Insurance Agency Inc, DBA Insurance Champion Services, Medicare Division, and works as a licensed independent Medicare agent helping individuals turning 65 understand their coverage options, avoid enrollment mistakes, and choose the right plan for their doctors, prescriptions, and budget. For Freedom HR Solutions clients whose HR teams are fielding employee Medicare questions, navigating Medicare coordination with employer group health plans, or supporting employees through COBRA-to-Medicare transitions, Champion Insurance provides a knowledgeable and licensed resource. Freedom HR Solutions provides HR, payroll, benefits, and compliance support for employers. Champion Insurance provides individual Medicare guidance for employees. Both firms operate independently and collaborate on behalf of shared clients.",
    supportAreas: [
      {
        title: "Medicare plan selection guidance",
        description:
          "Ron Filice helps individuals turning 65 compare Original Medicare, Medicare Advantage, Prescription Drug Plans, and Medigap supplement options based on their specific doctors, prescriptions, and budget, so coverage decisions are made with full information.",
      },
      {
        title: "Medicare enrollment support",
        description:
          "Guidance through Medicare enrollment timelines, paperwork, and deadlines so employees avoid coverage gaps, late enrollment penalties, and costly mistakes during their transition to Medicare.",
      },
      {
        title: "Medicare and employer coverage coordination",
        description:
          "Support understanding how Medicare interacts with employer-sponsored group health plans, when employees should take Medicare Part B versus staying on employer coverage, and how to navigate the transition without disruption.",
      },
      {
        title: "Ongoing Medicare advocacy and plan reviews",
        description:
          "Annual plan reviews, support for plan changes, and ongoing advocacy so employees have a knowledgeable resource to call when Medicare questions arise after enrollment.",
      },
    ],
    relatedServiceSlugs: [
      "payroll-benefits-hr-management",
      "hr-mri-risk-assessment",
      "compliance-support",
      "open-enrollment-setup",
    ],
    faqs: [
      {
        question: "What is the relationship between Freedom HR Solutions and Champion Insurance?",
        answer:
          "Freedom HR Solutions and Champion Insurance are independent firms that collaborate to support shared clients. Freedom HR Solutions provides HR, payroll, benefits, and compliance support for employers. Champion Insurance provides individual Medicare guidance for employees approaching Medicare eligibility.",
      },
      {
        question: "Who leads Champion Insurance?",
        answer:
          "Ron Filice leads Champion Insurance Agency Inc, DBA Insurance Champion Services, Medicare Division. He works as a licensed independent Medicare agent helping individuals turning 65 navigate Medicare plan options, enrollment timelines, and coverage decisions.",
      },
      {
        question: "What does Champion Insurance help employees with?",
        answer:
          "Champion Insurance helps individuals approaching Medicare eligibility understand their plan options, compare coverage based on their doctors and prescriptions, navigate enrollment timelines, and avoid costly mistakes during the transition to Medicare.",
      },
      {
        question: "How does Freedom HR Solutions decide when to refer a client to Champion Insurance?",
        answer:
          "When Freedom HR Solutions clients have employees approaching 65 who need Medicare guidance, or when HR teams are navigating Medicare coordination with employer group health coverage, Champion Insurance may be a relevant referral. We do not require clients to engage any partner firm.",
      },
      {
        question: "Does Freedom HR Solutions provide Medicare advice or enrollment support?",
        answer:
          "No. Freedom HR Solutions provides HR, payroll, benefits, and compliance support for employers. Individual Medicare guidance and enrollment support is Champion Insurance's scope. We refer clients when that need surfaces.",
      },
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
