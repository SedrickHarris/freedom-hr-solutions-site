import type { Faq } from "@/types";

export interface FaqCategory {
  slug: string;
  title: string;
  faqs: Faq[];
}

/** Grouped FAQs for the /faqs/ page. Supports AEO and FAQPage schema. */
export const faqCategories: FaqCategory[] = [
  {
    slug: "general",
    title: "General",
    faqs: [
      {
        question: "What does Freedom HR Solutions do?",
        answer:
          "Freedom HR Solutions is an HR consulting firm that helps businesses manage HR compliance, payroll and benefits administration, ACA reporting, HR technology, system implementation, and workforce support. We serve businesses in Las Vegas, across Nevada, and nationwide through remote consulting and system support.",
      },
      {
        question: "Where is Freedom HR Solutions located?",
        answer:
          "Freedom HR Solutions is headquartered in Las Vegas, Nevada. We support businesses throughout the Las Vegas Valley, across Nevada, and nationwide through remote consulting.",
      },
      {
        question: "Does Freedom HR Solutions serve businesses nationwide?",
        answer:
          "Yes. We are based in Las Vegas and support businesses locally, statewide, and nationwide through remote consulting, system support, and HR technology guidance. You do not need to be located in Nevada to work with us.",
      },
      {
        question: "Who does Freedom HR Solutions help?",
        answer:
          "We help business owners, small and growing businesses, HR teams, payroll teams, benefits administrators, multi-state employers, and companies without a dedicated HR department. Many of the businesses we support do not have an internal HR team.",
      },
      {
        question: "What HR and payroll platforms does Freedom HR Solutions support?",
        answer:
          "We are platform-agnostic and work alongside the systems your business already uses, including ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms. You are not required to change your technology to work with us.",
      },
      {
        question: "Can Freedom HR Solutions work with our existing HR or payroll provider?",
        answer:
          "Yes. We frequently work alongside your existing HR, payroll, and benefits systems and providers to support and improve your workflows. We coordinate directly with your technology rather than replacing it.",
      },
      {
        question: "How do I get started with Freedom HR Solutions?",
        answer:
          "The best starting point is an HR MRI Assessment, a structured review of your HR, payroll, benefits, and compliance operations that gives you a clear picture of where things stand and what to prioritize. You can also contact us directly to describe your situation and we will recommend the right next step.",
      },
    ],
  },
  {
    slug: "hr-mri-assessment",
    title: "HR MRI Assessment",
    faqs: [
      {
        question: "What is the HR MRI Risk Assessment?",
        answer:
          "The HR MRI Risk Assessment is a structured review of your HR, payroll, benefits, and compliance operations that identifies gaps and risks and gives you a prioritized plan to address them. It is designed to give business owners and HR teams a clear, practical picture of where they stand.",
      },
      {
        question: "Who should request an HR MRI Assessment?",
        answer:
          "Business owners, HR teams, payroll teams, and benefits administrators who want a clear picture of their HR health, especially if they are unsure where to start. It is particularly useful before implementing a new system, after a period of rapid growth, or when preparing for a compliance review.",
      },
      {
        question: "What does the assessment review?",
        answer:
          "It reviews policies, documentation, payroll and benefits configuration, systems, and reporting to surface gaps and improvement opportunities. The review covers both operational practices and documentation quality.",
      },
      {
        question: "What happens after the assessment?",
        answer:
          "You receive a clear summary of findings and prioritized recommendations. If you choose, we can help you implement the changes and provide ongoing support as your business evolves.",
      },
      {
        question: "Is the HR MRI Assessment only for companies with HR departments?",
        answer:
          "No. It is designed for businesses of many sizes, including those without a dedicated HR department. Many of our assessment clients are business owners managing HR on their own or with a small team.",
      },
      {
        question: "How is the HR MRI Assessment different from an HR audit?",
        answer:
          "An HR audit typically focuses on regulatory compliance and documentation gaps. The HR MRI Assessment is broader: it reviews compliance, but also systems, processes, data, and operational gaps that affect how well your HR function performs day to day. The goal is a practical action plan, not just a checklist.",
      },
    ],
  },
  {
    slug: "hr-compliance",
    title: "HR Compliance",
    faqs: [
      {
        question: "What is HR compliance?",
        answer:
          "HR compliance is the practice of aligning your business's HR policies, documentation, and workforce practices with applicable employment laws, regulations, and requirements. It covers areas such as employee handbooks, hiring and termination practices, payroll accuracy, benefits administration, recordkeeping, and reporting obligations.",
      },
      {
        question: "Why is HR compliance important for small businesses?",
        answer:
          "Small businesses face the same employment law requirements as larger companies, but often without a dedicated HR team to manage them. Gaps in documentation, policy, or payroll practices can create avoidable risk. Building a basic HR compliance foundation early makes it easier to scale without catching up later.",
      },
      {
        question: "What are the most common HR compliance gaps?",
        answer:
          "Common gaps include outdated or missing employee handbooks, inconsistent documentation of hiring and termination, payroll configuration errors, benefits eligibility issues, and missing policy acknowledgments. Many gaps are discovered during an HR review or when a specific situation brings them to the surface.",
      },
      {
        question: "What is an employee handbook and why does a business need one?",
        answer:
          "An employee handbook is a document that communicates your company's policies, expectations, and procedures to employees. It covers topics such as time off, code of conduct, compensation practices, benefits, and workplace behavior standards. A current handbook helps set consistent expectations and supports compliance with employment requirements.",
      },
      {
        question: "What should be included in an employee handbook?",
        answer:
          "A well-structured employee handbook typically includes policies on attendance and time off, compensation and payroll practices, benefits, code of conduct, anti-harassment and discrimination, remote work if applicable, disciplinary procedures, and acknowledgment of receipt. The specific contents depend on your industry, state, and workforce size.",
      },
      {
        question: "How often should an employee handbook be updated?",
        answer:
          "A practical approach is to review your handbook at least once a year and after significant changes such as new locations, state expansions, policy changes, or notable growth. Multi-state employers should review handbook language each time they expand into a new state, as requirements vary.",
      },
      {
        question: "Can Freedom HR Solutions help with HR compliance?",
        answer:
          "Yes. We help businesses identify HR compliance gaps, update documentation, review policies, and improve processes to reduce avoidable risk. We provide guidance and process support, not legal advice.",
      },
    ],
  },
  {
    slug: "aca-reporting",
    title: "ACA Reporting",
    faqs: [
      {
        question: "What is ACA reporting?",
        answer:
          "ACA reporting is how employers report health coverage offers, employee eligibility, and coverage information to the IRS under the Affordable Care Act. Applicable Large Employers file IRS Forms 1094-C and 1095-C to report this information annually. We help you review requirements and prepare your filing information.",
      },
      {
        question: "Who needs to file ACA reporting forms?",
        answer:
          "Employers that qualify as Applicable Large Employers under the ACA generally have annual reporting obligations. An ALE is typically an employer that averaged 50 or more full-time and full-time equivalent employees in the prior calendar year. We help you review your status and understand what applies.",
      },
      {
        question: "What are IRS Forms 1094-C and 1095-C?",
        answer:
          "Form 1094-C is the transmittal form submitted to the IRS summarizing employer health coverage information. Form 1095-C is provided to each full-time employee and reports individual coverage offers and enrollment details. We help organize the data needed to prepare these forms accurately.",
      },
      {
        question: "What is Applicable Large Employer status?",
        answer:
          "ALE status is determined by whether your business averaged 50 or more full-time and full-time equivalent employees in the prior calendar year. ALE status drives ACA reporting obligations, so knowing your status early helps you prepare correctly. Your status can change as your workforce grows or contracts.",
      },
      {
        question: "Can Freedom HR Solutions help with ACA penalty notices?",
        answer:
          "Yes. We help you understand the notice, organize supporting information, and prepare a practical response. We do not provide legal advice or guarantee outcomes.",
      },
      {
        question: "How can employers reduce ACA reporting errors?",
        answer:
          "Clean eligibility data, consistent tracking of full-time and part-time hours, accurate coverage offer records, and an annual review of your reporting process all help reduce avoidable errors. We support each of these steps so your filings are better organized before the deadline.",
      },
    ],
  },
  {
    slug: "payroll-benefits",
    title: "Payroll and Benefits",
    faqs: [
      {
        question: "Can Freedom HR Solutions help choose a payroll platform?",
        answer:
          "Yes. We help you compare platforms based on your size, structure, and goals so you choose a system that fits how you operate. We work with ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR and payroll platforms.",
      },
      {
        question: "Can Freedom HR Solutions help with benefits administration?",
        answer:
          "Yes. We support benefits setup, eligibility configuration, enrollment workflows, and ongoing administration. Accurate benefits administration requires both correct system configuration and documented processes.",
      },
      {
        question: "What causes payroll and benefits errors?",
        answer:
          "Common causes include incomplete system configuration, data that does not sync between HR and payroll platforms, undocumented processes, and eligibility rules that were set up incorrectly at implementation. We help identify and fix the root cause rather than patching individual errors.",
      },
      {
        question: "Can Freedom HR Solutions help with multi-state payroll?",
        answer:
          "Yes. We help configure and organize payroll across the states where you have employees. Multi-state payroll introduces additional tax, reporting, and compliance requirements that need to be reflected in your system setup.",
      },
      {
        question: "What is open enrollment and how does it work?",
        answer:
          "Open enrollment is the annual period when employees can elect, change, or waive their benefits for the coming plan year. We help set up plan options, configure eligibility rules, test enrollment workflows, and support employee communication so the process runs accurately.",
      },
      {
        question: "Can Freedom HR Solutions help after open enrollment closes?",
        answer:
          "Yes. After enrollment closes, elections need to be reconciled against payroll deductions and carrier data to confirm records are accurate for the new plan year. We help with this reconciliation so discrepancies are caught and corrected before they affect payroll or coverage.",
      },
    ],
  },
  {
    slug: "hr-technology",
    title: "HR Technology and Implementation",
    faqs: [
      {
        question: "What is HR technology consulting?",
        answer:
          "HR technology consulting is help choosing, configuring, connecting, and improving the systems that run your HR, payroll, and benefits processes. It includes system selection, implementation support, data migration, integration, and ongoing optimization.",
      },
      {
        question: "What is an HRIS?",
        answer:
          "An HRIS, or Human Resource Information System, is software that manages employee data, HR processes, and workforce records. Common HRIS platforms include isolved, BambooHR, HiBob, and similar tools. We help businesses select, configure, and get full value from their HRIS.",
      },
      {
        question: "Which HR workflows can be automated?",
        answer:
          "Onboarding, approvals, data updates, reporting, and parts of payroll and benefits workflows can often be automated within modern HR platforms. The right automation depends on your system, your processes, and where manual steps create the most friction.",
      },
      {
        question: "Can Freedom HR Solutions help implement a new HR system?",
        answer:
          "Yes. We help with configuration, data migration, integration, testing, training, and go-live support. A structured implementation reduces the risk of errors that are harder to fix after the system is in production.",
      },
      {
        question: "Can Freedom HR Solutions help connect HR and payroll systems?",
        answer:
          "Yes. We review integration options so your HR, payroll, and benefits systems share data more cleanly. Disconnected systems lead to duplicate data entry, reconciliation errors, and reporting gaps.",
      },
      {
        question: "What is the difference between ADP, isolved, and BambooHR?",
        answer:
          "ADP, isolved, and BambooHR are all HR and payroll platforms but they are designed for different business sizes and needs. ADP is a large, established payroll and HCM provider. isolved is a full-suite HCM platform popular with mid-size businesses. BambooHR is known for its ease of use and is common in small to mid-size companies. We help businesses compare platforms and select the best fit.",
      },
    ],
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    faqs: [
      {
        question: "Can Freedom HR Solutions troubleshoot payroll system issues?",
        answer:
          "Yes. We help diagnose the root cause, correct the issue, validate the fix, and recommend steps to prevent recurrence. Payroll issues often have a configuration or data root cause that surfaces repeatedly if not addressed at the source.",
      },
      {
        question: "Can Freedom HR Solutions help with benefits system problems?",
        answer:
          "Yes. We help resolve benefits configuration errors, eligibility issues, and enrollment problems. Benefits system issues often originate from how plans were set up during implementation.",
      },
      {
        question: "Can Freedom HR Solutions support HR system integrations?",
        answer:
          "Yes. We help review and improve how your systems connect and share data. Integration issues frequently cause downstream errors in payroll, benefits, and reporting.",
      },
      {
        question: "Can Freedom HR Solutions provide ongoing system support?",
        answer:
          "Yes. We offer ongoing technical support so your team has a reliable resource when system issues, configuration questions, or data problems arise. Ongoing support is available after initial implementation or as a standalone engagement.",
      },
      {
        question: "Can Freedom HR Solutions work with our current HR technology provider?",
        answer:
          "Yes. We frequently coordinate with your existing providers and platforms. We can support your team directly or work alongside your vendor to resolve issues faster.",
      },
      {
        question: "What kinds of HR system problems does Freedom HR Solutions help with?",
        answer:
          "We help with configuration errors, data migration problems, integration failures, reporting issues, payroll calculation errors, benefits eligibility misconfigurations, and system performance concerns. If a problem lives inside your HR, payroll, or benefits platform, we can help diagnose and fix it.",
      },
    ],
  },
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    faqs: [
      {
        question: "What does an HR consultant do?",
        answer:
          "An HR consultant helps businesses manage HR operations, compliance, systems, and processes without the overhead of a full-time internal HR team. Depending on the engagement, an HR consultant may review compliance gaps, implement HR systems, support payroll and benefits operations, build policies, or provide ongoing operational support.",
      },
      {
        question: "What is the difference between an HR consultant and a PEO?",
        answer:
          "A PEO, or Professional Employer Organization, co-employs your staff and handles payroll, benefits, and some HR functions as a shared employer. An HR consultant works alongside your business without co-employment: we help you improve your own processes, systems, and compliance without taking on employer responsibilities. The right choice depends on your business size, goals, and existing infrastructure.",
      },
      {
        question: "Do small businesses need HR support?",
        answer:
          "Most businesses with employees benefit from some level of HR structure, even without a dedicated HR department. Employment law requirements apply regardless of company size. Small businesses often need support with employee handbooks, payroll setup, benefits administration, and basic compliance documentation.",
      },
      {
        question: "Can HR consulting be delivered remotely?",
        answer:
          "Yes. Much of our work is delivered remotely through consulting calls, system access, and document review. Remote delivery lets us support businesses throughout Nevada and nationwide without requiring on-site presence.",
      },
      {
        question: "How is Freedom HR Solutions different from a staffing agency?",
        answer:
          "We are an HR consulting firm, not a staffing agency. We do not place employees at your company. We help you manage and improve your own HR, payroll, benefits, and compliance operations so your existing team and processes work better.",
      },
      {
        question: "What industries does Freedom HR Solutions work with?",
        answer:
          "We work with businesses across a range of industries including healthcare, retail, construction, manufacturing, professional services, and education. Our support focuses on HR, payroll, benefits, and compliance operations rather than industry-specific technical expertise.",
      },
    ],
  },
  {
    slug: "locations",
    title: "Locations and Nationwide Service",
    faqs: [
      {
        question: "Is Freedom HR Solutions headquartered in Las Vegas?",
        answer:
          "Yes. Freedom HR Solutions is headquartered in Las Vegas, Nevada. We support businesses throughout the Las Vegas Valley, including Henderson and North Las Vegas, as well as employers across Nevada and nationwide.",
      },
      {
        question: "Does Freedom HR Solutions only serve Las Vegas businesses?",
        answer:
          "No. We are based in Las Vegas but deliver services nationwide through remote consulting and system support. Businesses in any state can work with Freedom HR Solutions.",
      },
      {
        question: "Can Freedom HR Solutions support multi-state employers?",
        answer:
          "Yes. We help multi-state employers keep payroll, benefits, and compliance processes consistent across locations. Multi-state operations introduce additional requirements that need to be reflected in your systems and documentation.",
      },
      {
        question: "Can HR consulting services be delivered remotely?",
        answer:
          "Yes. The majority of our work is delivered remotely through consulting calls, system access, and document review. Remote delivery is effective for HR compliance support, system implementation, ACA reporting, and payroll and benefits consulting.",
      },
      {
        question: "Does Freedom HR Solutions serve businesses in Henderson and North Las Vegas?",
        answer:
          "Yes. We support businesses throughout the Las Vegas Valley, including Henderson and North Las Vegas, in addition to employers statewide and nationwide.",
      },
      {
        question: "Can Freedom HR Solutions help businesses expanding into Nevada?",
        answer:
          "Yes. We help businesses expanding into Nevada understand state-specific employment and payroll requirements, update their HR documentation, and configure systems to reflect Nevada-specific rules. We also support businesses already operating in Nevada that need a compliance or systems review.",
      },
    ],
  },
];

export const allFaqs: Faq[] = faqCategories.flatMap((category) => category.faqs);
