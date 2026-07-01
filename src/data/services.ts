import type { Service } from "@/types";
import { standardProcess, ctas } from "@/data/shared";

const exploreSupport = { label: "Explore System Support", href: "/services/" };
const exploreRelated = { label: "Explore Related Services", href: "/services/" };

/**
 * Individual service pages. The 12 launch-priority pages are marked
 * launch: true. Supporting pages round out each hub so every category has
 * real depth and internal links resolve. Phase 2 services can be appended
 * here and will generate automatically.
 */
export const services: Service[] = [
  // ---------- HR Compliance & Risk ----------
  {
    slug: "hr-mri-risk-assessment",
    hubSlug: "hr-compliance",
    launch: true,
    title: "HR MRI Risk Assessment",
    h1: "HR Risk Assessment Consultant for Growing Businesses",
    meta: {
      title: "HR Risk Assessment Consultant | HR Compliance Audit | Freedom HR Solutions",
      description:
        "Freedom HR Solutions provides HR risk assessments that identify compliance gaps, payroll risks, benefits issues, and documentation weaknesses. Serving Las Vegas, Nevada, and nationwide.",
    },
    summary:
      "A structured review of your HR, payroll, benefits, and compliance operations that surfaces hidden risks and gives you a prioritized plan for what to fix first.",
    trustLine:
      "No cost. No obligation. A clear picture of your HR, payroll, and compliance health before you invest in new systems or processes.",
    intro:
      "Most HR, payroll, and compliance risks stay hidden until they create a problem. The HR MRI Risk Assessment gives your business a clear picture of where your operations stand today across HR policies, payroll configuration, benefits administration, ACA readiness, system setup, and documentation. Freedom HR Solutions serves businesses in Las Vegas, Nevada, and nationwide. You receive a prioritized report of findings with practical recommendations, not just a checklist.",
    problems: [
      "You are not sure where your biggest HR, payroll, or compliance risks are hiding.",
      "Your policies and documentation have not kept up with your growth.",
      "No one has formally reviewed your payroll or benefits configuration.",
      "You are expanding into new states and need to understand your compliance exposure.",
      "You want a clear starting point before investing in new HR systems or processes.",
      "Your company has grown quickly and your HR infrastructure has not kept pace.",
      "Key HR responsibilities are delegated informally with no oversight or documentation.",
      "You are approaching an audit, organizational change, or rapid growth and want to be prepared.",
    ],
    includes: [
      {
        title: "HR Policy and Documentation Review",
        description:
          "We review your employee handbook, HR policies, and documentation practices to identify gaps, outdated language, and missing items.",
      },
      {
        title: "Payroll and Benefits Configuration Review",
        description:
          "We review how your payroll and benefits are set up, administered, and documented to identify configuration gaps and risks.",
      },
      {
        title: "Compliance Area Review",
        description:
          "We review I-9 documentation, wage and hour practices, leave administration, EEO recordkeeping, and anti-harassment policy coverage.",
      },
      {
        title: "ACA Reporting Readiness",
        description:
          "We review eligibility tracking, coverage data accuracy, and reporting process gaps to identify ACA compliance exposure.",
      },
      {
        title: "HR Systems and Technology Review",
        description:
          "We review how your HR, payroll, benefits, and time management systems are configured, connected, and maintained.",
      },
      {
        title: "Multi-Stakeholder Input",
        description:
          "We gather perspective from leadership and key stakeholders to capture a complete picture of how HR responsibilities are actually handled.",
      },
      {
        title: "Prioritized Findings Report",
        description:
          "You receive a clear summary of findings, ranked by priority, with practical recommendations for what to address first.",
      },
    ],
    whoItHelps: [
      "Small and mid-sized businesses without dedicated HR leadership",
      "Business owners managing HR without a dedicated team",
      "Growing businesses whose HR infrastructure has not kept pace",
      "Companies without a dedicated HR department",
      "Multi-state employers with compliance exposure across jurisdictions",
      "Employers preparing for audits, growth, or organizational change",
      "HR teams seeking an objective third-party review",
      "Companies in Las Vegas, Nevada, and nationwide",
    ],
    challenges: [
      "Outdated or missing employee handbooks and HR policies",
      "Payroll configuration that has never been formally reviewed",
      "Benefits enrollment and administration gaps",
      "ACA reporting processes that are not documented or tested",
      "HR systems that were set up years ago without a review since",
      "Growth into new states without a compliance review",
      "HR responsibilities delegated informally with no documentation or oversight",
    ],
    process: [
      {
        title: "Submit the intake form",
        description:
          "Share details about your business, your current systems, and the challenges you want to address.",
      },
      {
        title: "Secure documentation review",
        description:
          "We review your employee handbook, HR policies, procedures, and workforce documentation.",
      },
      {
        title: "Multi-stakeholder input",
        description:
          "Leadership and key stakeholders complete targeted assessments to capture how HR responsibilities are actually handled.",
      },
      {
        title: "Risk and compliance analysis",
        description:
          "We evaluate the information against compliance standards and best practices to identify gaps and risk areas.",
      },
      {
        title: "Findings summary and recommendations",
        description:
          "You receive a clear summary of findings, prioritized risk areas, and practical recommendations.",
      },
      {
        title: "Decision support and next steps",
        description:
          "We walk through results with you and outline potential solutions. Any next steps are entirely up to you.",
      },
    ],
    benefits: [
      {
        title: "Clarity on Your Real Risks",
        description:
          "Understand exactly where your HR, payroll, benefits, and compliance exposure is, in plain language your team can act on.",
      },
      {
        title: "A Prioritized Action Plan",
        description:
          "Leave the assessment with a ranked list of what to address first, so you are not guessing where to start.",
      },
      {
        title: "A Foundation for Better Decisions",
        description:
          "Use the findings to make smarter decisions about HR systems, compliance investments, and process improvements.",
      },
      {
        title: "Fewer Surprises Down the Road",
        description:
          "Catching HR, payroll, and compliance gaps early is far less costly than addressing them after they have caused a problem.",
      },
      {
        title: "An Objective Outside Perspective",
        description:
          "A third-party review surfaces risks that internal teams often miss because they are too close to the day-to-day operations.",
      },
      {
        title: "No Cost, No Obligation",
        description:
          "The assessment is offered at no cost and with no obligation. You receive the findings and decide what to do next.",
      },
    ],
    relatedServiceSlugs: [
      "compliance-support",
      "aca-reporting-consultant",
      "payroll-benefits-hr-management",
      "employee-handbook-creation-management",
      "system-audits-improvements",
    ],
    relatedAudienceSlugs: [
      "business-owners",
      "small-businesses",
      "growing-businesses",
      "companies-without-hr-departments",
    ],
    faqs: [
      {
        question: "What is the HR MRI Risk Assessment?",
        answer:
          "The HR MRI Risk Assessment is a structured evaluation of your organization's HR practices, policies, systems, and workforce operations designed to identify compliance risks, operational gaps, and areas for improvement. You receive a prioritized findings report with practical next steps.",
      },
      {
        question: "Is the HR MRI Risk Assessment really no cost?",
        answer:
          "Yes. The HR MRI Risk Assessment is offered at no cost and with no obligation. Its purpose is to provide clarity and insight so you can make informed decisions, not to pressure you into additional services.",
      },
      {
        question: "What does the HR MRI Risk Assessment include?",
        answer:
          "The assessment covers your HR policies and documentation, payroll and benefits configuration, key compliance areas including I-9s, wage and hour practices, leave administration, and EEO recordkeeping, ACA reporting readiness, HR system setup, and overall workforce operations. You receive a prioritized list of findings with recommended next steps.",
      },
      {
        question: "Who should request an HR MRI Risk Assessment?",
        answer:
          "The assessment is designed for business owners, HR teams, and growing companies that want to understand their compliance exposure before it becomes a problem. It is especially useful for companies that have grown quickly, changed systems, expanded into new states, delegated HR informally, or have not had a formal HR review recently.",
      },
      {
        question: "How is the HR MRI Risk Assessment different from a standard HR audit?",
        answer:
          "A standard HR audit typically checks for regulatory compliance in specific areas. The HR MRI Assessment takes a broader view, covering HR, payroll, benefits, ACA, systems, and documentation together, and delivers a prioritized action plan, not just a checklist of findings.",
      },
      {
        question: "Is this a sales pitch?",
        answer:
          "No. The assessment is designed to provide objective insight and decision support. Any next steps are entirely optional and up to you. There is no obligation to engage additional services after the assessment is complete.",
      },
      {
        question: "What HR risks do growing businesses most commonly miss?",
        answer:
          "Growing businesses most commonly miss outdated or missing employee handbooks, payroll configuration that was set up years ago and never reviewed, I-9 documentation gaps, ACA reporting exposure as headcount crosses thresholds, and benefits administration errors that carry over from year to year. The HR MRI Assessment is designed to surface exactly these kinds of issues.",
      },
      {
        question: "Can Freedom HR Solutions help a small business with an HR risk assessment?",
        answer:
          "Yes. The HR MRI Risk Assessment is designed for businesses of all sizes, including small businesses without a dedicated HR department. We right-size the review to your headcount, systems, and compliance obligations so the findings are practical and actionable.",
      },
      {
        question: "Can the HR MRI Risk Assessment help before a government audit or inspection?",
        answer:
          "Yes. Many businesses request the assessment specifically because they want to identify and address gaps before a formal audit or inspection. The assessment reviews I-9 documentation, wage and hour practices, ACA reporting readiness, and other areas that are commonly reviewed in government audits.",
      },
      {
        question: "Does Freedom HR Solutions provide HR risk assessments in Las Vegas and Nevada?",
        answer:
          "Yes. Freedom HR Solutions is headquartered in Las Vegas, Nevada, and provides HR risk assessments for businesses in Las Vegas, Henderson, North Las Vegas, and throughout Nevada. We also serve businesses nationwide through remote consulting.",
      },
    ],
    primaryCta: { label: "Request HR MRI Assessment", href: "/request-assessment/" },
    secondaryCta: { label: "Schedule Consultation", href: "/contact/" },
  },
  {
    slug: "compliance-support",
    hubSlug: "hr-compliance",
    launch: true,
    title: "Compliance Support",
    h1: "HR, Payroll, and Benefits Compliance Support",
    meta: {
      title: "HR, Payroll, and Benefits Compliance Support",
      description:
        "Get support with HR compliance, payroll compliance, benefits compliance, workforce documentation, and audit readiness from Freedom HR Solutions.",
    },
    summary:
      "Practical help keeping your HR, payroll, and benefits documentation and processes clear, consistent, and current.",
    intro:
      "Compliance responsibilities touch HR, payroll, and benefits, and they change as your business grows. Freedom HR Solutions helps you review requirements, organize documentation, and improve processes so your foundation stays solid.",
    problems: [
      "Documentation is inconsistent or hard to find.",
      "You are unsure whether your processes hold up to review.",
      "Requirements changed as you added employees or states.",
      "No one has time to keep compliance current.",
    ],
    includes: [
      { title: "Documentation review", description: "Organize and improve policies, records, and acknowledgments." },
      { title: "Process review", description: "Identify where compliance steps are missing or inconsistent." },
      { title: "Audit readiness", description: "Get records and processes organized in case of a review." },
      { title: "Practical guidance", description: "Clear recommendations your team can actually follow." },
    ],
    whoItHelps: ["Small businesses", "Growing businesses", "Multi-state employers", "Companies without a dedicated HR department"],
    challenges: [
      "Inconsistent policy documentation",
      "Missing acknowledgments and records",
      "Unclear ownership of compliance tasks",
      "Requirements that grew with the business",
    ],
    process: standardProcess,
    benefits: [
      { title: "Stronger documentation", description: "Records that are organized and easier to rely on." },
      { title: "Fewer avoidable errors", description: "Process improvements that reduce common mistakes." },
      { title: "Audit readiness", description: "Be better prepared if a review ever happens." },
      { title: "Peace of mind", description: "Know the essentials are being handled." },
    ],
    relatedServiceSlugs: ["hr-mri-risk-assessment", "aca-reporting-consultant", "employee-handbook-creation-management", "workforce-compliance-monitoring"],
    relatedAudienceSlugs: ["small-businesses", "multi-state-employers", "companies-without-hr-departments"],
    faqs: [
      { question: "What does HR compliance support include?", answer: "It includes reviewing your documentation and processes, identifying gaps, organizing records, and providing practical recommendations to improve compliance readiness." },
      { question: "Can Freedom HR Solutions help prepare for an audit?", answer: "Yes. We help organize your records and processes so you are better prepared. We do not provide legal advice or guarantee outcomes." },
      { question: "Can Freedom HR Solutions help identify compliance gaps?", answer: "Yes. We review your current setup and highlight gaps along with prioritized recommendations to address them." },
      { question: "Does compliance support include payroll and benefits?", answer: "Yes. Compliance touches HR, payroll, and benefits, and we help review documentation and processes across all three." },
      { question: "How often should compliance processes be reviewed?", answer: "A yearly review is a good practice, along with reviews after major changes such as growth, new states, or new policies." },
    ],
    primaryCta: ctas.assessment,
    secondaryCta: ctas.complianceConsult,
  },
  {
    slug: "employee-handbook-creation-management",
    hubSlug: "hr-compliance",
    launch: true,
    title: "Employee Handbook Creation & Management",
    h1: "Employee Handbook Creation, Review, and Management",
    meta: {
      title: "Employee Handbook Creation, Review, and Updates | Freedom HR Solutions",
      description:
        "Freedom HR Solutions creates, reviews, updates, and manages employee handbooks for small businesses, growing companies, and multi-state employers. Las Vegas and nationwide.",
    },
    summary:
      "Create, review, update, and maintain employee handbooks that reflect how your business actually runs, with support for annual reviews, multi-state policies, and acknowledgment tracking.",
    intro:
      "Most employee handbooks fall behind the moment business changes. Freedom HR Solutions helps you create a handbook from scratch, review and update an existing one, manage annual revisions, account for multi-state policy differences, and maintain version control and acknowledgment records over time. Whether your handbook is missing, outdated, or simply has not been touched in years, we give you a practical path to get it current and keep it that way.",
    problems: [
      "Your handbook is outdated or does not exist.",
      "Policies do not reflect how the business actually operates today.",
      "Multi-state policy differences are hard to track and manage.",
      "No one owns the annual review and update process.",
      "Acknowledgments are not consistently collected or tracked.",
      "The handbook was created once and has not been revisited since.",
    ],
    includes: [
      {
        title: "Custom Handbook Creation",
        description:
          "We build a clear, organized handbook tailored to how your business actually operates, not a generic template that may not fit your team or industry.",
      },
      {
        title: "Policy Review and Updates",
        description:
          "We review your existing handbook, identify outdated language, missing sections, and inconsistencies, and update policies to reflect current operations.",
      },
      {
        title: "Annual Handbook Review",
        description:
          "We conduct a structured annual review so your handbook does not drift between major changes and stays current year over year.",
      },
      {
        title: "Multi-State Policy Support",
        description:
          "We account for state-level policy differences when employees work across jurisdictions so your handbook is appropriate for each location.",
      },
      {
        title: "Digital Distribution and Acknowledgment Tracking",
        description:
          "We support distributing the updated handbook digitally and collecting employee acknowledgments so you have a clear record of who received the current version.",
      },
      {
        title: "Version Control and Ongoing Maintenance",
        description:
          "We maintain a clear record of what changed, when, and why, so there is always a reliable history of your current and prior handbook versions.",
      },
    ],
    whoItHelps: [
      "Small businesses creating their first employee handbook",
      "Growing businesses whose handbook has not kept pace with their size",
      "Multi-state employers managing policy differences across jurisdictions",
      "HR teams that need a structured update and review process",
      "Companies without a dedicated HR department",
      "Business owners who need a practical, documented HR foundation",
    ],
    challenges: [
      "Outdated or missing policies",
      "Inconsistent policy enforcement across managers",
      "Multi-state policy complexity",
      "No annual review process in place",
      "Untracked acknowledgments",
      "Version history that no one can locate",
    ],
    process: standardProcess,
    benefits: [
      {
        title: "Clear Expectations",
        description:
          "Employees and managers work from the same documented playbook, reducing ambiguity and inconsistency.",
      },
      {
        title: "Current Policies",
        description:
          "A handbook that reflects how the business runs today, not how it ran three years ago.",
      },
      {
        title: "Better Consistency",
        description:
          "More consistent application of policies across the team, regardless of which manager is involved.",
      },
      {
        title: "Annual Review Built In",
        description:
          "A structured process that keeps the handbook current year over year without scrambling to catch up.",
      },
      {
        title: "Clean Acknowledgment Records",
        description:
          "A clear record of who received and confirmed the current handbook version.",
      },
      {
        title: "Easier Management",
        description:
          "Version control and a maintained update process so the handbook is never a project that starts from scratch.",
      },
    ],
    relatedServiceSlugs: [
      "compliance-support",
      "workforce-compliance-monitoring",
      "hr-mri-risk-assessment",
    ],
    relatedAudienceSlugs: [
      "small-businesses",
      "multi-state-employers",
      "hr-teams",
      "growing-businesses",
    ],
    faqs: [
      {
        question: "Why does a business need an employee handbook?",
        answer:
          "An employee handbook sets clear expectations, supports consistent policy enforcement, and documents how the business handles key workforce matters. Without one, policies rely on memory and individual interpretation, which creates inconsistency and avoidable risk.",
      },
      {
        question: "How often should an employee handbook be updated?",
        answer:
          "At minimum, review your handbook once a year. You should also update it after significant changes such as growth into a new state, a change in benefits or leave policies, a policy revision, or any organizational change that affects how people are managed.",
      },
      {
        question: "What is an employee handbook review service?",
        answer:
          "A handbook review service is a structured evaluation of your current handbook to identify outdated language, missing sections, policy inconsistencies, and content that no longer matches how the business operates. Freedom HR Solutions reviews what exists and provides practical recommendations and updated content.",
      },
      {
        question: "Can Freedom HR Solutions update an existing employee handbook?",
        answer:
          "Yes. We review your current handbook, identify what needs to change, and update it to reflect your current policies and operations. We handle both targeted updates and full handbook revisions.",
      },
      {
        question: "What should be included in an employee handbook?",
        answer:
          "Core sections typically include your code of conduct, compensation and pay practices, benefits overview, time off and leave policies, anti-harassment and anti-discrimination policies, and an acknowledgment of receipt. The specific content depends on your business, your state, and how your workforce is structured.",
      },
      {
        question: "Can Freedom HR Solutions help with multi-state employee handbooks?",
        answer:
          "Yes. We account for policy differences across the states where you have employees so the handbook is appropriate for each jurisdiction. Multi-state employers often need state-specific addenda or sections to address requirements that vary by location.",
      },
      {
        question: "How are employee handbook acknowledgments tracked?",
        answer:
          "We support digital distribution and acknowledgment tracking so there is a clear record of who received and confirmed the current version. Having documented acknowledgments is important when policies need to be enforced.",
      },
      {
        question: "What is employee handbook version control?",
        answer:
          "Version control is a system for tracking changes to the handbook over time, including what was updated, when, and why. It ensures there is always a reliable record of the current version and a clear history of prior versions.",
      },
      {
        question: "Can Freedom HR Solutions create an employee handbook from scratch?",
        answer:
          "Yes. We build a custom handbook tailored to how your business operates rather than a generic template. We gather input on your policies, structure, and workforce, then create a handbook that reflects your actual operations.",
      },
      {
        question: "What happens if a business does not have an employee handbook?",
        answer:
          "Without a handbook, policies exist only in memory and are applied inconsistently. This makes it harder to enforce expectations, train managers, and demonstrate consistent treatment of employees. An HR MRI Risk Assessment is a good starting point to identify this and other gaps.",
      },
    ],
    primaryCta: {
      label: "Request HR MRI Assessment",
      href: "/request-assessment/",
    },
    secondaryCta: {
      label: "Schedule Consultation",
      href: "/contact/",
    },
  },
  {
    slug: "workforce-compliance-monitoring",
    hubSlug: "hr-compliance",
    title: "Workforce Compliance Monitoring",
    h1: "Workforce Compliance Monitoring and Documentation Support",
    meta: {
      title: "Workforce Compliance Monitoring",
      description:
        "Keep workforce documentation, acknowledgments, and HR processes consistent over time with ongoing workforce compliance monitoring support.",
    },
    summary:
      "Ongoing attention to documentation, acknowledgments, and process consistency so compliance does not drift over time.",
    intro:
      "Compliance is not a one-time project. Freedom HR Solutions helps you keep documentation current, track acknowledgments, and maintain consistent processes as your workforce changes.",
    problems: [
      "Documentation drifts out of date between reviews.",
      "Acknowledgments and records are inconsistent.",
      "New hires and changes are not reflected promptly.",
      "No one is consistently watching for gaps.",
    ],
    includes: [
      { title: "Documentation tracking", description: "Keep policies, records, and acknowledgments current." },
      { title: "Process consistency", description: "Maintain consistent HR processes across the team." },
      { title: "Change monitoring", description: "Reflect new hires, changes, and growth in your records." },
      { title: "Periodic reviews", description: "Regular check-ins to catch gaps before they grow." },
    ],
    whoItHelps: ["Growing businesses", "Multi-state employers", "HR teams", "Companies without a dedicated HR department"],
    challenges: [
      "Records that fall behind",
      "Inconsistent acknowledgment tracking",
      "Process gaps during growth",
      "No clear owner for ongoing compliance",
    ],
    process: standardProcess,
    benefits: [
      { title: "Current records", description: "Documentation that stays organized and up to date." },
      { title: "Consistent processes", description: "HR processes applied the same way across the team." },
      { title: "Early detection", description: "Catch gaps before they become problems." },
      { title: "Less scramble", description: "Avoid last-minute cleanup before a review." },
    ],
    relatedServiceSlugs: ["compliance-support", "employee-handbook-creation-management", "hr-mri-risk-assessment", "reporting-data-insights"],
    relatedAudienceSlugs: ["multi-state-employers", "hr-teams", "growing-businesses"],
    faqs: [
      { question: "What is workforce compliance monitoring?", answer: "It is ongoing support that keeps your documentation, acknowledgments, and HR processes consistent and current over time." },
      { question: "How is this different from a one-time review?", answer: "A one-time review is a snapshot. Monitoring is ongoing attention so your records and processes do not drift out of date." },
      { question: "Can this support multi-state employers?", answer: "Yes. We help keep documentation and processes consistent across the states where you have employees." },
      { question: "Can Freedom HR Solutions work with our HR team?", answer: "Yes. We often work alongside internal HR teams to support ongoing compliance work." },
    ],
    primaryCta: ctas.assessment,
    secondaryCta: ctas.complianceConsult,
  },

  // ---------- ACA Reporting & Compliance ----------
  {
    slug: "aca-reporting-consultant",
    hubSlug: "aca-reporting-compliance",
    launch: true,
    title: "ACA Reporting Consultant",
    h1: "ACA Reporting Consultant Services for Employers",
    meta: {
      title: "ACA Reporting Consultant Services for Employers | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps employers with ACA reporting, Applicable Large Employer reviews, IRS 1094 and 1095 filing preparation, and ACA notice response. Based in Las Vegas. Serving nationwide.",
    },
    summary:
      "Support understanding ACA reporting responsibilities, organizing data, and preparing accurate filing information.",
    intro:
      "ACA reporting is the process employers use to report health coverage offers, employee eligibility, and coverage information to the IRS. Freedom HR Solutions helps you review your requirements, organize workforce data, prepare filing information, and respond to reporting issues.",
    problems: [
      "You are unsure whether you are an Applicable Large Employer.",
      "Workforce and coverage data are spread across systems.",
      "Filing information is hard to assemble accurately.",
      "You received an ACA notice and need a plan.",
    ],
    includes: [
      { title: "ALE review", description: "Help determining Applicable Large Employer status." },
      { title: "Data organization", description: "Pull together the workforce and coverage data you need." },
      { title: "1094 and 1095 preparation", description: "Support preparing accurate filing information." },
      { title: "Penalty response support", description: "Practical help understanding and responding to ACA notices." },
    ],
    whoItHelps: ["Applicable Large Employers", "Growing businesses", "Multi-state employers", "Benefits administrators"],
    challenges: [
      "Unclear ALE status",
      "Disconnected coverage and eligibility data",
      "Filing errors on 1094 and 1095",
      "IRS notices with no clear response plan",
    ],
    process: standardProcess,
    benefits: [
      { title: "Clear requirements", description: "Understand what your business is responsible for." },
      { title: "Organized data", description: "Filing information that is easier to assemble and trust." },
      { title: "Fewer errors", description: "Reduce the avoidable mistakes that lead to notices." },
      { title: "A response plan", description: "Know how to respond if a notice arrives." },
    ],
    relatedServiceSlugs: ["aca-compliance-review", "applicable-large-employer-review", "compliance-support", "benefits-administration-support"],
    relatedAudienceSlugs: ["multi-state-employers", "benefits-administrators", "growing-businesses"],
    faqs: [
      { question: "What is ACA reporting?", answer: "ACA reporting is how employers report health coverage offers, employee eligibility, and coverage information to the IRS. We help you review requirements and prepare filing information." },
      { question: "Who needs to file IRS Forms 1094 and 1095?", answer: "Applicable Large Employers generally have ACA reporting responsibilities. We help you review your status and what it means for filing." },
      { question: "What is an Applicable Large Employer?", answer: "Generally, an employer that averaged 50 or more full-time and full-time equivalent employees in the prior year. We help you review your numbers." },
      { question: "Can Freedom HR Solutions help with ACA penalty notices?", answer: "Yes. We help you understand the notice and organize a practical response. We do not provide legal advice or guarantee outcomes." },
      { question: "What information is needed for ACA reporting?", answer: "Reporting generally relies on workforce data, coverage offers, and eligibility information. We help you organize what is needed." },
      {
        question: "When are IRS Forms 1094 and 1095 due?",
        answer:
          "Filing deadlines for Forms 1094 and 1095 vary by year and filing method. Electronic filers generally have a later deadline than paper filers. We help you organize your data so you are ready ahead of your deadline. Check the IRS website for the current filing year deadline.",
      },
      {
        question: "What is the Employer Shared Responsibility Payment?",
        answer:
          "The Employer Shared Responsibility Payment is a payment the IRS may assess when an Applicable Large Employer does not offer minimum essential coverage to eligible employees or the coverage offered does not meet affordability or minimum value standards. We help employers understand their situation and organize a practical response.",
      },
      {
        question: "What should I do if I receive an ACA penalty notice from the IRS?",
        answer:
          "Do not ignore it. Read the notice carefully, note the response deadline, and gather your coverage and eligibility data. We help you understand what the notice is asking for and organize a practical, organized response. We do not provide legal advice or guarantee outcomes.",
      },
      {
        question: "Does ACA reporting apply to multi-state employers?",
        answer:
          "Yes. ACA reporting responsibilities apply regardless of how many states you operate in. Multi-state employers often have more complex eligibility and coverage data to organize. We help you pull that data together across systems.",
      },
      {
        question: "Do employees need Form 1095-C to file their taxes?",
        answer:
          "Employees generally do not need Form 1095-C to file their personal tax return, but it provides useful coverage information. As an employer, your responsibility is to furnish the form accurately and on time. We help you prepare the underlying data so your forms are accurate.",
      },
    ],
    primaryCta: ctas.acaReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "aca-compliance-review",
    hubSlug: "aca-reporting-compliance",
    title: "ACA Compliance Review",
    h1: "ACA Compliance Review for Employers",
    meta: {
      title: "ACA Compliance Review",
      description:
        "Review your ACA reporting process, workforce data, eligibility tracking, and coverage information to reduce avoidable errors before filing.",
    },
    summary:
      "A focused review of your ACA reporting process and data to catch issues before they reach the IRS.",
    intro:
      "Errors are easier to fix before filing than after. Freedom HR Solutions reviews your ACA reporting process, workforce data, and eligibility tracking so you can file with more confidence.",
    problems: [
      "You are not confident your ACA data is accurate.",
      "Eligibility tracking is inconsistent.",
      "Coverage information is spread across systems.",
      "Past filings raised questions you want to avoid repeating.",
    ],
    includes: [
      { title: "Process review", description: "Look at how your ACA reporting is prepared today." },
      { title: "Data review", description: "Check workforce and coverage data for consistency." },
      { title: "Eligibility review", description: "Review how eligibility is tracked and applied." },
      { title: "Recommendations", description: "Practical steps to reduce avoidable errors." },
    ],
    whoItHelps: ["Applicable Large Employers", "Multi-state employers", "Benefits administrators", "Growing businesses"],
    challenges: [
      "Inconsistent eligibility tracking",
      "Data spread across systems",
      "Questions from prior filings",
      "Limited time to review before deadlines",
    ],
    process: standardProcess,
    benefits: [
      { title: "Cleaner data", description: "More consistent, reliable reporting information." },
      { title: "Fewer surprises", description: "Catch issues before they become notices." },
      { title: "More confidence", description: "File knowing your data has been reviewed." },
      { title: "Repeatable process", description: "Improve the process for future years." },
    ],
    relatedServiceSlugs: ["aca-reporting-consultant", "applicable-large-employer-review", "compliance-support", "reporting-data-insights"],
    relatedAudienceSlugs: ["multi-state-employers", "benefits-administrators"],
    faqs: [
      { question: "What is an ACA compliance review?", answer: "It is a focused review of your ACA reporting process, workforce data, and eligibility tracking to catch issues before filing." },
      { question: "When should we do an ACA compliance review?", answer: "Before filing deadlines is ideal, but a review at any point can improve your process and data quality." },
      { question: "Can this help reduce reporting errors?", answer: "Yes. The goal is to find and correct avoidable errors before they reach the IRS. We do not guarantee outcomes." },
    ],
    primaryCta: ctas.acaReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "applicable-large-employer-review",
    hubSlug: "aca-reporting-compliance",
    title: "Applicable Large Employer Review",
    h1: "Applicable Large Employer (ALE) Review",
    meta: {
      title: "Applicable Large Employer Review",
      description:
        "Determine whether your business is an Applicable Large Employer and understand the ACA reporting responsibilities that come with ALE status.",
    },
    summary:
      "Find out whether your business is an Applicable Large Employer and what that means for your ACA responsibilities.",
    intro:
      "ALE status drives ACA reporting responsibilities, and it is not always obvious. Freedom HR Solutions helps you review your workforce numbers so you understand where you stand and what to expect.",
    problems: [
      "You are not sure if you are an ALE.",
      "Your headcount fluctuates across the year.",
      "Full-time equivalent calculations are confusing.",
      "Growth may have changed your status.",
    ],
    includes: [
      { title: "Headcount review", description: "Review full-time and full-time equivalent counts." },
      { title: "Status determination", description: "Help understanding whether you meet the ALE threshold." },
      { title: "Responsibility overview", description: "Explain what ALE status means for reporting." },
      { title: "Next steps", description: "Clear guidance on what to prepare." },
    ],
    whoItHelps: ["Growing businesses", "Multi-state employers", "Business owners", "Benefits administrators"],
    challenges: [
      "Fluctuating headcount",
      "Full-time equivalent confusion",
      "Status changes from growth",
      "Uncertainty about responsibilities",
    ],
    process: standardProcess,
    benefits: [
      { title: "Clear status", description: "Know whether you are an ALE." },
      { title: "Understood responsibilities", description: "Understand what comes with ALE status." },
      { title: "Better planning", description: "Prepare for reporting with fewer surprises." },
      { title: "Less confusion", description: "Replace guesswork with a clear answer." },
    ],
    relatedServiceSlugs: ["aca-reporting-consultant", "aca-compliance-review", "compliance-support"],
    relatedAudienceSlugs: ["growing-businesses", "multi-state-employers"],
    faqs: [
      { question: "What is an Applicable Large Employer?", answer: "Generally, an employer that averaged 50 or more full-time and full-time equivalent employees in the prior calendar year." },
      { question: "Why does ALE status matter?", answer: "ALE status drives ACA reporting responsibilities, so knowing your status helps you prepare correctly." },
      { question: "Can our status change over time?", answer: "Yes. As your headcount changes, your ALE status can change. We help you review where you stand." },
    ],
    primaryCta: ctas.acaReview,
    secondaryCta: ctas.consultation,
  },

  // ---------- Payroll, Benefits & HR Systems ----------
  {
    slug: "payroll-benefits-hr-management",
    hubSlug: "payroll-benefits-hr-systems",
    launch: true,
    title: "Payroll, Benefits & HR Management",
    h1: "Payroll, Benefits, and HR Management Support",
    meta: {
      title: "Payroll, Benefits, and HR Management Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses set up, configure, and manage payroll and benefits systems with cleaner processes, fewer errors, and better data flow. Based in Las Vegas. Serving nationwide.",
    },
    summary:
      "Better payroll, benefits, and HR administration through stronger systems, cleaner configuration, and reliable processes.",
    intro:
      "Payroll and benefits run on systems and processes that have to work together. Freedom HR Solutions helps you set up, configure, and manage those systems so payroll is accurate, benefits run smoothly, and your team spends less time fixing problems.",
    problems: [
      "Payroll errors create rework and frustration.",
      "Benefits setup is confusing or inconsistent.",
      "Systems do not share data cleanly.",
      "Processes live in people's heads, not documentation.",
    ],
    includes: [
      { title: "System selection and setup", description: "Help choosing and configuring payroll and HR platforms." },
      { title: "Benefits administration", description: "Support benefits setup, eligibility, and enrollment." },
      { title: "Payroll accuracy", description: "Improve configuration and workflows for accurate payroll." },
      { title: "Process documentation", description: "Document workflows so they do not depend on one person." },
    ],
    whoItHelps: ["Growing businesses", "Payroll teams", "Benefits administrators", "Business owners"],
    challenges: [
      "Recurring payroll errors",
      "Benefits eligibility issues",
      "Disconnected systems",
      "Undocumented processes",
    ],
    process: standardProcess,
    benefits: [
      { title: "More accurate payroll", description: "Fewer errors and less rework each cycle." },
      { title: "Smoother benefits", description: "Cleaner setup and enrollment workflows." },
      { title: "Better data flow", description: "Systems that share data more cleanly." },
      { title: "Documented processes", description: "Workflows your team can rely on and repeat." },
    ],
    relatedServiceSlugs: ["benefits-administration-support", "multi-state-payroll-support", "system-setup-implementation", "reporting-data-insights"],
    relatedAudienceSlugs: ["payroll-teams", "benefits-administrators", "growing-businesses"],
    faqs: [
      { question: "Can Freedom HR Solutions help manage payroll and benefits systems?", answer: "Yes. We help set up, configure, and manage payroll and benefits systems and the processes around them." },
      { question: "Can Freedom HR Solutions help choose a payroll platform?", answer: "Yes. We help you compare platforms based on your size, structure, and goals." },
      { question: "Can Freedom HR Solutions help with benefits administration?", answer: "Yes. We support benefits setup, eligibility, enrollment workflows, and ongoing administration." },
      { question: "What causes payroll and benefits errors?", answer: "Common causes include incomplete configuration, data that does not sync between systems, and undocumented processes. We help fix the root cause." },
      { question: "Can Freedom HR Solutions support growing businesses?", answer: "Yes. We help growing businesses build payroll and benefits processes that scale with new employees and locations." },
      {
        question: "How can employers improve payroll accuracy?",
        answer:
          "Payroll accuracy starts with clean system configuration, consistent data across platforms, and documented workflows. We review how your payroll is set up and help you fix the root causes of recurring errors rather than just correcting individual mistakes.",
      },
      {
        question: "Can Freedom HR Solutions help document payroll processes?",
        answer:
          "Yes. We help you document payroll and benefits workflows so the process does not depend on one person. Documented processes are easier to train, audit, and improve over time.",
      },
      {
        question: "What is benefits eligibility management?",
        answer:
          "Benefits eligibility management is the process of tracking which employees qualify for which benefits based on their status, hours, location, and plan rules. When eligibility data is inconsistent, enrollment errors and corrections follow. We help align eligibility data across your systems.",
      },
      {
        question: "Can Freedom HR Solutions help with payroll and benefits reconciliation?",
        answer:
          "Yes. We help reconcile payroll and benefits data across systems so deductions, elections, and records line up correctly. Reconciliation issues often point to configuration or data sync problems we can help address.",
      },
      {
        question: "Does Freedom HR Solutions support multi-state payroll and benefits?",
        answer:
          "Yes. We help employers manage payroll and benefits across multiple states, including configuration, eligibility, and workflow consistency as teams grow and expand into new locations.",
      },
    ],
    primaryCta: ctas.systemReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "benefits-administration-support",
    hubSlug: "payroll-benefits-hr-systems",
    title: "Benefits Administration Support",
    h1: "Benefits Administration Support",
    meta: {
      title: "Benefits Administration Support",
      description:
        "Get help with benefits setup, eligibility, enrollment workflows, employee communication, and ongoing benefits administration support.",
    },
    summary:
      "Support configuring benefits, managing eligibility, and running smoother enrollment workflows.",
    intro:
      "Benefits administration involves setup, eligibility, enrollment, and ongoing maintenance. Freedom HR Solutions helps you keep each of these running smoothly so employees have a clear experience and your data stays accurate.",
    problems: [
      "Benefits setup is inconsistent or unclear.",
      "Eligibility data does not line up across systems.",
      "Enrollment creates confusion for employees.",
      "Maintenance falls behind after enrollment closes.",
    ],
    includes: [
      { title: "Benefits configuration", description: "Set up plans, rules, and eligibility correctly." },
      { title: "Enrollment support", description: "Support a smoother open and new-hire enrollment." },
      { title: "Employee communication", description: "Help employees understand their options." },
      { title: "Ongoing administration", description: "Keep benefits data accurate over time." },
    ],
    whoItHelps: ["Benefits administrators", "HR teams", "Growing businesses", "Multi-state employers"],
    challenges: [
      "Inconsistent benefits setup",
      "Eligibility mismatches",
      "Employee confusion during enrollment",
      "Data that drifts after enrollment",
    ],
    process: standardProcess,
    benefits: [
      { title: "Cleaner setup", description: "Benefits configured to match your plans and rules." },
      { title: "Smoother enrollment", description: "A clearer experience for employees and admins." },
      { title: "Accurate data", description: "Eligibility and elections that line up across systems." },
      { title: "Less rework", description: "Fewer corrections after enrollment closes." },
    ],
    relatedServiceSlugs: ["open-enrollment-setup", "payroll-benefits-hr-management", "aca-reporting-consultant", "technical-issue-resolution"],
    relatedAudienceSlugs: ["benefits-administrators", "hr-teams"],
    faqs: [
      { question: "What does benefits administration support include?", answer: "It includes benefits configuration, eligibility management, enrollment support, employee communication, and ongoing administration." },
      { question: "Can Freedom HR Solutions help during open enrollment?", answer: "Yes. We help configure plans, test settings, support communication, and reconcile data after enrollment." },
      { question: "Can you help with benefits eligibility data?", answer: "Yes. We help review and align eligibility data across your systems." },
    ],
    primaryCta: ctas.systemReview,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "multi-state-payroll-support",
    hubSlug: "payroll-benefits-hr-systems",
    title: "Multi-State Payroll Support",
    h1: "Multi-State Payroll Support for Employers",
    meta: {
      title: "Multi-State Payroll Support",
      description:
        "Manage payroll across multiple states with help configuring systems, organizing workflows, and keeping multi-state payroll consistent.",
    },
    summary:
      "Help managing payroll across states so configurations stay consistent as you expand.",
    intro:
      "Payroll gets more complex with every new state. Freedom HR Solutions helps you configure systems and organize workflows so multi-state payroll stays consistent and manageable.",
    problems: [
      "Each new state adds complexity.",
      "Configurations differ across locations.",
      "Workflows are hard to keep consistent.",
      "Reporting across states is fragmented.",
    ],
    includes: [
      { title: "Multi-state configuration", description: "Set up payroll for the states where you operate." },
      { title: "Workflow organization", description: "Keep payroll workflows consistent across locations." },
      { title: "Data review", description: "Check that multi-state data lines up correctly." },
      { title: "Reporting support", description: "Improve reporting across locations and states." },
    ],
    whoItHelps: ["Multi-state employers", "Payroll teams", "Growing businesses", "Construction companies"],
    challenges: [
      "State-by-state complexity",
      "Inconsistent configurations",
      "Fragmented reporting",
      "Errors that follow expansion",
    ],
    process: standardProcess,
    benefits: [
      { title: "Consistent payroll", description: "Configurations that stay aligned across states." },
      { title: "Less complexity", description: "Organized workflows that are easier to manage." },
      { title: "Better reporting", description: "Clearer visibility across locations." },
      { title: "Smoother expansion", description: "A payroll setup that supports growth." },
    ],
    relatedServiceSlugs: ["payroll-benefits-hr-management", "compliance-support", "reporting-data-insights", "technical-issue-resolution"],
    relatedAudienceSlugs: ["multi-state-employers", "payroll-teams"],
    faqs: [
      { question: "Can Freedom HR Solutions help with multi-state payroll?", answer: "Yes. We help configure systems and organize workflows so payroll stays consistent across the states where you operate." },
      { question: "Can you help as we expand into new states?", answer: "Yes. We help you prepare payroll configurations and workflows as you add locations." },
      { question: "Can you improve multi-state reporting?", answer: "Yes. We help build reporting that gives clearer visibility across locations." },
    ],
    primaryCta: ctas.systemReview,
    secondaryCta: ctas.consultation,
  },

  // ---------- HR Technology & Automation ----------
  {
    slug: "hr-technology-automation",
    hubSlug: "hr-technology-automation",
    launch: true,
    title: "HR Technology & Automation",
    h1: "HR Technology and Automation Consulting",
    meta: {
      title: "HR Technology and Automation Consulting",
      description:
        "Automate HR workflows, improve system integrations, reduce manual work, and strengthen reporting with HR technology consulting.",
    },
    summary:
      "Reduce manual work, connect your systems, and improve the reporting your team depends on.",
    intro:
      "HR technology should make work easier, not harder. Freedom HR Solutions helps you automate repetitive tasks, connect your HR, payroll, and benefits systems, and improve reporting so your team spends less time on manual work.",
    problems: [
      "Too much time goes to manual, repetitive tasks.",
      "Systems do not talk to each other.",
      "Reports are hard to build and trust.",
      "Technology investments are not delivering value.",
    ],
    includes: [
      { title: "Workflow automation", description: "Automate repetitive HR, payroll, and benefits tasks." },
      { title: "System integration", description: "Connect systems so data flows cleanly." },
      { title: "Process improvement", description: "Streamline workflows that slow your team down." },
      { title: "Reporting and visibility", description: "Build reporting that supports better decisions." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Payroll teams", "Multi-state employers"],
    challenges: [
      "Manual data entry",
      "Disconnected systems",
      "Weak or manual reporting",
      "Stalled implementations",
    ],
    process: standardProcess,
    benefits: [
      { title: "Less manual work", description: "Automate the tasks that consume your team's time." },
      { title: "Connected systems", description: "Cleaner data flow between platforms." },
      { title: "Better reporting", description: "Visibility leaders can rely on." },
      { title: "More value", description: "Get more out of the technology you already pay for." },
    ],
    relatedServiceSlugs: ["system-setup-implementation", "streamlining-processes", "reporting-data-insights", "system-audits-improvements"],
    relatedAudienceSlugs: ["hr-teams", "growing-businesses", "payroll-teams"],
    faqs: [
      { question: "What is HR technology consulting?", answer: "It is help choosing, configuring, connecting, and improving the systems that run your HR, payroll, and benefits processes." },
      { question: "Which HR workflows can be automated?", answer: "Onboarding, approvals, data updates, reporting, and parts of payroll and benefits workflows can often be automated." },
      { question: "Can Freedom HR Solutions help connect HR and payroll systems?", answer: "Yes. We review integration options so your systems share data more cleanly." },
      { question: "Can automation reduce payroll and benefits errors?", answer: "Often yes. Reducing manual steps tends to reduce avoidable errors." },
      { question: "Can Freedom HR Solutions help improve HR reporting?", answer: "Yes. We help build reports and dashboards that give leaders clearer visibility." },
    ],
    primaryCta: ctas.techReview,
    secondaryCta: exploreSupport,
  },
  {
    slug: "system-setup-implementation",
    hubSlug: "hr-technology-automation",
    launch: true,
    title: "System Set-Up & Implementation",
    h1: "HR, Payroll, and Benefits System Set-Up and Implementation",
    meta: {
      title: "HR System Set-Up and Implementation | Freedom HR Solutions",
      description:
        "Freedom HR Solutions supports HR, payroll, benefits, and HCM system implementation: configuration, data migration, integrations, testing, training, and go-live. Based in Las Vegas. Serving nationwide.",
    },
    summary:
      "Implement HR, payroll, benefits, and HCM systems accurately, from configuration and data migration through testing and go-live.",
    intro:
      "A new system is only as good as its setup. Freedom HR Solutions helps you implement HR, payroll, benefits, and HCM systems with proper configuration, clean data migration, testing, and training so go-live goes smoothly.",
    problems: [
      "Implementations stall or run over.",
      "Data migration is risky and error prone.",
      "Configurations do not match real workflows.",
      "Go-live arrives before the system is ready.",
    ],
    includes: [
      { title: "Configuration", description: "Set up the system to match how your business works." },
      { title: "Data migration", description: "Move and validate employee and payroll data carefully." },
      { title: "Integration and testing", description: "Connect systems and test before launch." },
      { title: "Training and go-live", description: "Prepare your team and support the launch." },
    ],
    whoItHelps: ["Growing businesses", "HR teams", "Payroll teams", "Multi-state employers"],
    challenges: [
      "Stalled implementations",
      "Risky data migration",
      "Configuration gaps",
      "Rushed go-live",
    ],
    process: standardProcess,
    benefits: [
      { title: "Accurate setup", description: "A system configured to match your workflows." },
      { title: "Clean data", description: "Migrated data that is validated and reliable." },
      { title: "Smoother launch", description: "Testing and training that reduce go-live surprises." },
      { title: "Faster value", description: "Reach a usable, productive system sooner." },
    ],
    relatedServiceSlugs: ["hr-technology-automation", "system-audits-improvements", "technical-issue-resolution", "ongoing-technical-support", "reporting-data-insights"],
    relatedAudienceSlugs: ["growing-businesses", "hr-teams", "payroll-teams"],
    faqs: [
      { question: "Can Freedom HR Solutions help implement a new HR system?", answer: "Yes. We help with configuration, data migration, integration, testing, training, and go-live support." },
      { question: "Can Freedom HR Solutions help migrate employee data?", answer: "Yes. We help move and validate employee and payroll data so it is accurate in the new system." },
      { question: "Can you help test payroll and benefits configurations?", answer: "Yes. We help test configurations before launch to reduce errors at go-live." },
      { question: "What happens after go-live?", answer: "We can provide ongoing support and optimization so the system continues to deliver value." },
      { question: "Can Freedom HR Solutions work with our software provider?", answer: "Yes. We frequently coordinate with your platform provider during implementation." },
      {
        question: "Can Freedom HR Solutions help implement ADP?",
        answer:
          "Yes. We help businesses configure, migrate data, test, and launch ADP payroll and HR systems. Our ADP support page covers the specific workflows we assist with in more detail.",
      },
      {
        question: "Can Freedom HR Solutions help implement isolved or BambooHR?",
        answer:
          "Yes. We support implementation, configuration, and go-live for isolved, BambooHR, and other HCM platforms. Each platform has its own setup requirements and we help you work through them accurately.",
      },
      {
        question: "What is involved in HR system data migration?",
        answer:
          "Data migration involves extracting employee, payroll, and benefits data from your existing system, cleaning and validating it, and loading it accurately into the new platform. We help plan and execute each step so data integrity is maintained through go-live.",
      },
      {
        question: "Can Freedom HR Solutions support multi-state HR system implementation?",
        answer:
          "Yes. Multi-state implementations require additional configuration for state-specific payroll rules, eligibility, and compliance settings. We help ensure those configurations are set up correctly across every state where you have employees.",
      },
      {
        question: "What happens after the system goes live?",
        answer:
          "Go-live is not the end of the engagement. We help your team troubleshoot early issues, refine configurations, and ensure the system is running as expected. Ongoing support is available if your team needs a reliable resource after launch.",
      },
    ],
    primaryCta: ctas.systemReview,
    secondaryCta: exploreSupport,
  },
  {
    slug: "hris-implementation",
    hubSlug: "hr-technology-automation",
    launch: true,
    title: "HRIS Implementation",
    h1: "HRIS Implementation Consultant for Growing Businesses",
    meta: {
      title: "HRIS Implementation Consultant | HR System Setup & Go-Live Support | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps businesses implement HRIS, payroll, and benefits systems with expert configuration, data migration, testing, and go-live support. Serving Las Vegas, Nevada, and nationwide.",
    },
    summary:
      "Expert HRIS implementation support from vendor selection and system configuration through data migration, testing, training, and go-live.",
    trustLine:
      "Platform-agnostic implementation support for ADP, isolved, BambooHR, and other HR and payroll systems. Serving Las Vegas, Nevada, and nationwide.",
    intro:
      "HRIS implementations fail when configuration is rushed, data is migrated without validation, or go-live happens before the system is ready. Freedom HR Solutions manages the full implementation process from vendor selection and system configuration through data migration, testing, training, and go-live support so your system is accurate, your team is prepared, and your launch goes smoothly.",
    problems: [
      "Configuration was rushed to meet a deadline and the system never matched real workflows.",
      "Data was migrated without validation and errors carried into the new system.",
      "The vendor configured the technical setup but no one managed the business logic.",
      "Integrations were skipped or set up incorrectly.",
      "Training was minimal and staff never fully adopted the system.",
      "The implementation stalled mid-project and go-live was delayed or abandoned.",
      "Post-launch issues were never resolved and workarounds compounded over time.",
      "The system went live but the configuration was never completed.",
    ],
    includes: [
      {
        title: "Vendor selection and system readiness",
        description:
          "Help evaluating platforms and confirming the selected system fits your workforce, payroll, and benefits requirements before configuration begins.",
      },
      {
        title: "System configuration",
        description:
          "Configure the HRIS to match your real org structure, payroll rules, benefits eligibility logic, leave policies, and reporting needs.",
      },
      {
        title: "Data migration",
        description:
          "Extract, clean, map, and validate employee records, payroll history, and benefits data so what moves into the new system is accurate.",
      },
      {
        title: "Integration setup",
        description:
          "Connect the HRIS to your payroll, benefits, time and attendance, and other systems so data flows correctly between platforms.",
      },
      {
        title: "Testing and parallel processing",
        description:
          "Test configurations, run parallel payroll cycles where applicable, and validate results before committing to go-live.",
      },
      {
        title: "Training and documentation",
        description:
          "Prepare HR, payroll, and benefits staff to use the system correctly, with documentation that supports the team after launch.",
      },
      {
        title: "Go-live support",
        description:
          "Be present at launch to resolve issues in real time and reduce the risk of first-cycle errors.",
      },
      {
        title: "Post-go-live optimization",
        description:
          "Identify and resolve issues that surface after launch and refine configurations as your team's usage matures.",
      },
    ],
    whoItHelps: [
      "Growing businesses adding their first dedicated HRIS",
      "Companies replacing an outdated or underperforming HR system",
      "Businesses mid-implementation with a stalled or troubled rollout",
      "HR and payroll teams without internal implementation expertise",
      "Multi-state employers needing compliance-aware configuration",
      "Organizations migrating from spreadsheets or basic payroll tools to a full HRIS",
      "Businesses that went live on a system but never completed the configuration",
    ],
    challenges: [
      "Configuration rushed to meet an arbitrary go-live date",
      "Data migrated without validation",
      "System configured by someone unfamiliar with real business workflows",
      "Integrations skipped or set up incorrectly",
      "Training skipped or minimal",
      "Post-launch issues left unresolved",
      "Vendor managed technical setup but no one managed business logic",
    ],
    process: [
      {
        title: "Discovery and scope",
        description:
          "We review your current systems, data sources, workforce structure, and go-live requirements to define the implementation scope.",
      },
      {
        title: "Vendor and platform alignment",
        description:
          "If a platform is not yet selected, we help evaluate options. If it is selected, we confirm the configuration approach with your provider.",
      },
      {
        title: "Configuration and build",
        description:
          "We configure the system to match your real workflows, payroll rules, benefits structure, and reporting requirements.",
      },
      {
        title: "Data extraction and migration",
        description:
          "We extract data from your existing systems, clean and map it, and validate it after migration so records are accurate.",
      },
      {
        title: "Integration and testing",
        description:
          "We connect platforms and run testing cycles including parallel payroll processing where required before go-live.",
      },
      {
        title: "Training and go-live",
        description:
          "We prepare your team, document key processes, and support the launch so your first cycles run correctly.",
      },
      {
        title: "Post-launch support",
        description:
          "We remain available after go-live to resolve issues, optimize configurations, and support your team as they build confidence with the system.",
      },
    ],
    benefits: [
      {
        title: "Accurate from day one",
        description:
          "A system configured to match your real org structure, payroll rules, and benefits logic, not the vendor default template.",
      },
      {
        title: "Clean data migration",
        description:
          "Employee records, payroll history, and benefits data validated before and after migration so you are not starting with errors.",
      },
      {
        title: "Fewer go-live surprises",
        description:
          "Testing, parallel processing, and pre-launch validation reduce the risk of first-cycle problems.",
      },
      {
        title: "A team that knows the system",
        description:
          "Training and documentation so your HR and payroll staff can use the system correctly after launch.",
      },
      {
        title: "Ongoing support after launch",
        description:
          "Post-go-live optimization and support so issues that surface after launch get resolved, not ignored.",
      },
      {
        title: "Platform-agnostic perspective",
        description:
          "Implementation support aligned to your business, not to a vendor preferred configuration path.",
      },
    ],
    relatedServiceSlugs: [
      "system-setup-implementation",
      "hr-technology-automation",
      "system-audits-improvements",
      "technical-issue-resolution",
      "ongoing-technical-support",
    ],
    relatedAudienceSlugs: [
      "growing-businesses",
      "hr-teams",
      "payroll-teams",
      "multi-state-employers",
    ],
    faqs: [
      {
        question: "What does an HRIS implementation consultant do?",
        answer:
          "An HRIS implementation consultant manages the configuration, data migration, integration, testing, training, and go-live process for HR, payroll, and benefits systems. Freedom HR Solutions handles the business logic and workflow alignment that vendors and IT teams often miss, so the system is configured correctly for how your business actually operates.",
      },
      {
        question: "Why do HRIS implementations fail?",
        answer:
          "Most HRIS implementations fail because configuration is driven by the vendor default template rather than the business's real workflows, data is migrated without validation, training is skipped or minimal, or go-live is rushed before the system is ready. An independent implementation consultant manages these risks before they become problems.",
      },
      {
        question: "Can Freedom HR Solutions help if our implementation is already in progress?",
        answer:
          "Yes. We frequently step in to support or rescue implementations that have stalled, gone off track, or launched with unresolved configuration issues. We assess where things stand and help move the project to a stable go-live or resolve post-launch problems.",
      },
      {
        question: "Which HR and payroll platforms does Freedom HR Solutions support?",
        answer:
          "We provide implementation support for ADP, isolved, BambooHR, HiBob, CustomHCM, and other HR, payroll, and benefits platforms. Our support is platform-agnostic and aligned to your business's workflows, not to a single vendor's preferred approach.",
      },
      {
        question: "How is Freedom HR Solutions different from the platform vendor's implementation team?",
        answer:
          "Platform vendor implementation teams focus on the technical configuration of their system. Freedom HR Solutions focuses on the business logic, how your org structure, payroll rules, benefits eligibility, and leave policies should actually be configured inside the system. We bridge the gap between what the vendor sets up and what your business needs.",
      },
      {
        question: "What is included in HRIS data migration support?",
        answer:
          "Data migration support includes extracting records from your current system, cleaning and mapping data to the new system's structure, loading and validating records after migration, and resolving discrepancies before go-live. The goal is accurate data in the new system, not just data that transferred.",
      },
      {
        question: "Does Freedom HR Solutions provide support after go-live?",
        answer:
          "Yes. Post-go-live support includes resolving issues that surface after launch, optimizing configurations as your team's usage matures, and providing ongoing technical support through our support and service continuity services.",
      },
      {
        question: "Can Freedom HR Solutions help a small business implement an HRIS?",
        answer:
          "Yes. Small businesses often benefit most from structured implementation support because they do not have internal HR technology expertise. We help right-size the configuration and data migration process for your headcount and complexity so you do not over-engineer the setup or under-prepare for go-live.",
      },
      {
        question: "How long does an HRIS implementation take?",
        answer:
          "Implementation timelines vary based on the platform selected, the complexity of your workforce and payroll structure, the state of your existing data, and the number of integrations required. We establish a realistic timeline during the discovery phase based on your specific situation.",
      },
      {
        question: "Does Freedom HR Solutions help with HRIS vendor selection?",
        answer:
          "Yes. If a platform has not yet been selected, we help evaluate options based on your workforce size, payroll complexity, benefits structure, budget, and integration requirements so the system you choose fits how your business actually operates.",
      },
    ],
    platformSlugs: [
      "adp-consulting-support",
      "isolved-consulting-support",
      "bamboohr-consulting-support",
      "hibob-consulting-support",
      "customhcm-consulting-support",
    ],
    primaryCta: { label: "Request System Review", href: "/request-assessment/" },
    secondaryCta: { label: "Schedule Consultation", href: "/contact/" },
  },
  {
    slug: "streamlining-processes",
    hubSlug: "hr-technology-automation",
    title: "Streamlining HR Processes",
    h1: "Streamlining HR, Payroll, and Benefits Processes",
    meta: {
      title: "Streamlining HR Processes",
      description:
        "Simplify and streamline HR, payroll, and benefits workflows to reduce manual steps, cut rework, and improve consistency.",
    },
    summary:
      "Simplify the workflows that slow your team down and reduce manual, repetitive steps.",
    intro:
      "Over time, HR processes pick up manual steps and workarounds. Freedom HR Solutions helps you map and streamline those workflows so your team spends less time on busywork and more on meaningful work.",
    problems: [
      "Workflows have grown manual and inconsistent.",
      "Workarounds have replaced real processes.",
      "Tasks are duplicated across systems.",
      "Onboarding and approvals are slow.",
    ],
    includes: [
      { title: "Workflow mapping", description: "Document how key processes work today." },
      { title: "Simplification", description: "Remove redundant and manual steps." },
      { title: "Automation opportunities", description: "Identify where automation will help most." },
      { title: "Documentation", description: "Capture the improved process so it sticks." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Payroll teams", "Companies without a dedicated HR department"],
    challenges: [
      "Manual, repetitive steps",
      "Duplicated data entry",
      "Slow onboarding and approvals",
      "Undocumented workarounds",
    ],
    process: standardProcess,
    benefits: [
      { title: "Less busywork", description: "Fewer manual steps for your team." },
      { title: "Faster processes", description: "Quicker onboarding, approvals, and updates." },
      { title: "More consistency", description: "Processes that run the same way every time." },
      { title: "Documented workflows", description: "Improvements that are captured and repeatable." },
    ],
    relatedServiceSlugs: ["hr-technology-automation", "system-audits-improvements", "reporting-data-insights", "system-setup-implementation"],
    relatedAudienceSlugs: ["hr-teams", "growing-businesses"],
    faqs: [
      { question: "What does streamlining HR processes involve?", answer: "It involves mapping your current workflows, removing manual and redundant steps, and identifying where automation will help most." },
      { question: "Can this reduce errors?", answer: "Often yes. Simpler, documented processes tend to produce fewer avoidable errors." },
      { question: "Do we need new software for this?", answer: "Not always. Many improvements come from better use of the systems you already have." },
    ],
    primaryCta: ctas.techReview,
    secondaryCta: exploreSupport,
  },
  {
    slug: "reporting-data-insights",
    hubSlug: "hr-technology-automation",
    launch: true,
    title: "Reporting & Data Insights",
    h1: "HR, Payroll, and Benefits Reporting and Data Insights",
    meta: {
      title: "HR Reporting and Data Insights",
      description:
        "Turn HR, payroll, benefits, and compliance data into useful reports, dashboards, insights, and decision-support tools.",
    },
    summary:
      "Turn scattered HR and payroll data into clear reports and dashboards leaders can act on.",
    intro:
      "Good decisions need good data. Freedom HR Solutions helps you turn HR, payroll, benefits, and compliance data into reports and dashboards that give leaders clear visibility into costs, trends, and workforce performance.",
    problems: [
      "Reports are hard to build and slow to produce.",
      "Leaders lack visibility into key metrics.",
      "Data is inconsistent across systems.",
      "Reporting errors undermine trust in the numbers.",
    ],
    includes: [
      { title: "Payroll and workforce reporting", description: "Report on payroll costs and workforce trends." },
      { title: "Benefits and compliance reporting", description: "Bring benefits and compliance data into view." },
      { title: "Dashboards", description: "Build dashboards for ongoing decision support." },
      { title: "Data cleanup", description: "Improve the data behind your reports." },
    ],
    whoItHelps: ["HR teams", "Payroll teams", "Growing businesses", "Multi-state employers"],
    challenges: [
      "Manual report building",
      "Limited visibility",
      "Inconsistent data",
      "Reporting errors",
    ],
    process: standardProcess,
    benefits: [
      { title: "Clear visibility", description: "Reporting that shows what matters at a glance." },
      { title: "Better decisions", description: "Data leaders can actually act on." },
      { title: "Time saved", description: "Less manual effort to produce reports." },
      { title: "More trust", description: "Cleaner data behind every number." },
    ],
    relatedServiceSlugs: ["hr-technology-automation", "system-audits-improvements", "streamlining-processes", "payroll-benefits-hr-management"],
    relatedAudienceSlugs: ["hr-teams", "payroll-teams", "growing-businesses"],
    faqs: [
      { question: "What HR reports should a business track?", answer: "Common reports include payroll costs, headcount and turnover, benefits participation, and compliance status. We help you focus on what matters for your business." },
      { question: "Can Freedom HR Solutions build custom payroll reports?", answer: "Yes. We help build reports tailored to the questions your leaders need answered." },
      { question: "Can benefits data be included in dashboards?", answer: "Yes. We help bring benefits and compliance data into your reporting." },
      { question: "Can reporting help with compliance reviews?", answer: "Yes. Better reporting makes it easier to see your compliance status and prepare for reviews." },
      { question: "Can Freedom HR Solutions help clean up reporting errors?", answer: "Yes. We help improve the underlying data so your reports are more reliable." },
    ],
    primaryCta: ctas.techReview,
    secondaryCta: exploreSupport,
  },
  {
    slug: "system-audits-improvements",
    hubSlug: "hr-technology-automation",
    launch: true,
    title: "System Audits & Improvements",
    h1: "HR, Payroll, and Benefits System Audits and Improvements",
    meta: {
      title: "HR System Audits and Improvements",
      description:
        "Review HR, payroll, and benefits system settings, data, workflows, reporting, security, and integrations to identify improvement opportunities.",
    },
    summary:
      "A thorough review of your HR, payroll, and benefits systems to find errors, gaps, and improvement opportunities.",
    intro:
      "Systems drift over time as people, plans, and processes change. Freedom HR Solutions audits your HR, payroll, and benefits systems to surface configuration issues, data problems, and workflow gaps, then gives you a prioritized plan to fix them.",
    problems: [
      "You suspect the system is not set up correctly.",
      "Errors keep appearing without a clear cause.",
      "Reporting does not match reality.",
      "No one has reviewed the configuration in a long time.",
    ],
    includes: [
      { title: "Configuration review", description: "Check system settings against how you operate." },
      { title: "Data and reporting review", description: "Look for data and reporting inconsistencies." },
      { title: "Workflow review", description: "Identify workflow gaps and bottlenecks." },
      { title: "Improvement plan", description: "Prioritized recommendations to address findings." },
    ],
    whoItHelps: ["Growing businesses", "HR teams", "Payroll teams", "Multi-state employers"],
    challenges: [
      "Configuration drift",
      "Recurring errors",
      "Reporting that does not match reality",
      "Workflow bottlenecks",
    ],
    process: standardProcess,
    benefits: [
      { title: "Root-cause clarity", description: "Understand why errors keep happening." },
      { title: "Cleaner configuration", description: "Settings that match how you operate." },
      { title: "A clear plan", description: "Prioritized improvements you can act on." },
      { title: "Fewer surprises", description: "Catch issues before they cause problems." },
    ],
    relatedServiceSlugs: ["hr-technology-automation", "system-setup-implementation", "technical-issue-resolution", "reporting-data-insights"],
    relatedAudienceSlugs: ["growing-businesses", "hr-teams", "payroll-teams"],
    faqs: [
      { question: "What is an HR system audit?", answer: "It is a structured review of your HR, payroll, and benefits system settings, data, workflows, and reporting to find issues and improvement opportunities." },
      { question: "When should a payroll or benefits system be reviewed?", answer: "After major changes, when errors recur, or if it has been a long time since the last review." },
      { question: "Can system audits find payroll errors?", answer: "Yes. Audits often surface the configuration or data issues behind recurring payroll errors." },
      { question: "Can Freedom HR Solutions review integrations?", answer: "Yes. We review how your systems connect and where data flow can be improved." },
      { question: "What happens after the audit?", answer: "You receive a prioritized improvement plan, and we can help implement the changes." },
    ],
    primaryCta: ctas.systemReview,
    secondaryCta: exploreSupport,
  },

  // ---------- Support & Service Continuity ----------
  {
    slug: "ongoing-technical-support",
    hubSlug: "support-service-continuity",
    launch: true,
    title: "Ongoing Technical Support",
    h1: "Ongoing HR, Payroll, and Benefits Technical Support",
    meta: {
      title: "Ongoing HR and Payroll Technical Support",
      description:
        "Get ongoing support for HR, payroll, benefits, system updates, troubleshooting, monitoring, compliance checks, and process improvements.",
    },
    summary:
      "A reliable resource for troubleshooting, updates, and improvements to your HR, payroll, and benefits systems over time.",
    intro:
      "Systems need ongoing attention to stay reliable. Freedom HR Solutions provides ongoing technical support so your team always has somewhere to turn for questions, troubleshooting, updates, and improvements.",
    problems: [
      "Issues pile up because no one has time for them.",
      "Updates and changes are hard to keep up with.",
      "Your team lacks a reliable support resource.",
      "Small problems grow into big ones.",
    ],
    includes: [
      { title: "Troubleshooting", description: "Help diagnosing and resolving system issues." },
      { title: "System updates", description: "Support keeping configurations current." },
      { title: "Monitoring and checks", description: "Periodic checks to catch issues early." },
      { title: "Ongoing improvements", description: "Continuous refinements as your business changes." },
    ],
    whoItHelps: ["HR teams", "Payroll teams", "Benefits administrators", "Companies without a dedicated HR department"],
    challenges: [
      "Issues with no clear owner",
      "Keeping up with updates",
      "Limited internal bandwidth",
      "Small problems that grow",
    ],
    process: standardProcess,
    benefits: [
      { title: "A reliable resource", description: "Somewhere to turn when issues come up." },
      { title: "Less downtime", description: "Faster resolution of system problems." },
      { title: "Current systems", description: "Configurations that stay up to date." },
      { title: "Continuous improvement", description: "Ongoing refinements over time." },
    ],
    relatedServiceSlugs: ["technical-issue-resolution", "system-audits-improvements", "open-enrollment-setup", "hr-technology-automation"],
    relatedAudienceSlugs: ["payroll-teams", "benefits-administrators", "hr-teams"],
    faqs: [
      { question: "What does ongoing technical support include?", answer: "It includes troubleshooting, system updates, periodic checks, and ongoing improvements to your HR, payroll, and benefits systems." },
      { question: "Can Freedom HR Solutions support existing systems?", answer: "Yes. We frequently support systems and providers you already use." },
      { question: "Can ongoing support help reduce downtime?", answer: "Yes. Faster troubleshooting and proactive checks help reduce downtime." },
      { question: "Can Freedom HR Solutions help with system updates?", answer: "Yes. We help keep configurations current as systems and your business change." },
      { question: "Can support include payroll, benefits, and HR workflows?", answer: "Yes. Support can span HR, payroll, and benefits workflows." },
    ],
    primaryCta: ctas.technicalSupport,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "technical-issue-resolution",
    hubSlug: "support-service-continuity",
    launch: true,
    title: "Technical Issue Resolution",
    h1: "HR, Payroll, and Benefits Technical Issue Resolution",
    meta: {
      title: "HR and Payroll Technical Issue Resolution",
      description:
        "Get help diagnosing and resolving HR, payroll, benefits, reporting, configuration, data sync, and system integration issues.",
    },
    summary:
      "Root-cause diagnosis and correction for urgent or recurring HR, payroll, and benefits system issues.",
    intro:
      "When something breaks in payroll or benefits, you need it fixed correctly. Freedom HR Solutions helps diagnose the root cause, correct the issue, validate the fix, and recommend how to prevent it from happening again.",
    problems: [
      "An urgent system issue is affecting payroll or benefits.",
      "The same error keeps coming back.",
      "Data is not syncing between systems.",
      "No one can pinpoint the root cause.",
    ],
    includes: [
      { title: "Root-cause analysis", description: "Find the real source of the problem." },
      { title: "Correction", description: "Fix the configuration or data issue." },
      { title: "Testing and validation", description: "Confirm the fix works as expected." },
      { title: "Prevention", description: "Recommend steps to prevent recurrence." },
    ],
    whoItHelps: ["Payroll teams", "Benefits administrators", "HR teams", "Growing businesses"],
    challenges: [
      "Urgent payroll or benefits errors",
      "Recurring issues",
      "Data sync failures",
      "Unclear root cause",
    ],
    process: standardProcess,
    benefits: [
      { title: "Issues resolved", description: "Problems fixed at the source, not just patched." },
      { title: "Less recurrence", description: "Steps to keep the issue from returning." },
      { title: "Validated fixes", description: "Confirmation that the fix actually works." },
      { title: "Less stress", description: "A clear path to resolution when things break." },
    ],
    relatedServiceSlugs: ["ongoing-technical-support", "system-audits-improvements", "system-setup-implementation", "payroll-benefits-hr-management"],
    relatedAudienceSlugs: ["payroll-teams", "benefits-administrators", "hr-teams"],
    faqs: [
      { question: "Can Freedom HR Solutions help troubleshoot payroll system errors?", answer: "Yes. We help diagnose the root cause, correct the issue, and validate the fix." },
      { question: "Can Freedom HR Solutions help with benefits configuration issues?", answer: "Yes. We help resolve benefits configuration and eligibility issues." },
      { question: "Can Freedom HR Solutions coordinate with software providers?", answer: "Yes. We frequently coordinate with your platform provider to resolve issues." },
      { question: "How are technical issues documented?", answer: "We document the issue, the root cause, the fix, and prevention recommendations so you have a clear record." },
      { question: "Can recurring errors be prevented?", answer: "Often yes. We focus on root cause and prevention so the same issue is less likely to return." },
    ],
    primaryCta: ctas.technicalSupport,
    secondaryCta: ctas.consultation,
  },
  {
    slug: "open-enrollment-setup",
    hubSlug: "support-service-continuity",
    launch: true,
    title: "Open Enrollment Setup",
    h1: "Open Enrollment Setup and Benefits Support",
    meta: {
      title: "Open Enrollment Setup and Benefits Support",
      description:
        "Prepare for open enrollment with benefits plan setup, system configuration, employee communication, testing, support, and reconciliation.",
    },
    summary:
      "Prepare, configure, communicate, and reconcile open enrollment so it runs smoothly for your team and employees.",
    intro:
      "Open enrollment arrives every year, and preparation makes the difference. Freedom HR Solutions helps you set up benefits plans, configure systems, support employee communication, test settings, and reconcile data after enrollment closes.",
    problems: [
      "Enrollment preparation strains the team.",
      "Plan configurations are error prone.",
      "Employees are confused by their options.",
      "Reconciliation after enrollment is messy.",
    ],
    includes: [
      { title: "Plan configuration", description: "Set up benefits plans and rules for enrollment." },
      { title: "Employee communication", description: "Support clear communication about options." },
      { title: "Testing and quality review", description: "Test settings before enrollment opens." },
      { title: "Post-enrollment reconciliation", description: "Reconcile data after enrollment closes." },
    ],
    whoItHelps: ["Benefits administrators", "HR teams", "Growing businesses", "Multi-state employers"],
    challenges: [
      "Tight enrollment timelines",
      "Configuration errors",
      "Employee confusion",
      "Messy reconciliation",
    ],
    process: standardProcess,
    benefits: [
      { title: "Smoother enrollment", description: "A more organized enrollment season." },
      { title: "Fewer errors", description: "Tested configurations before launch." },
      { title: "Clearer communication", description: "Employees who understand their options." },
      { title: "Clean reconciliation", description: "Accurate data after enrollment closes." },
    ],
    relatedServiceSlugs: ["benefits-administration-support", "payroll-benefits-hr-management", "ongoing-technical-support", "technical-issue-resolution"],
    relatedAudienceSlugs: ["benefits-administrators", "hr-teams"],
    faqs: [
      { question: "Can Freedom HR Solutions help set up open enrollment?", answer: "Yes. We help configure plans, test settings, support communication, and reconcile data after enrollment." },
      { question: "What should be reviewed before open enrollment begins?", answer: "Plan setup, eligibility rules, system configuration, and employee communication should all be reviewed before enrollment opens." },
      { question: "Can Freedom HR Solutions help with employee communication?", answer: "Yes. We help support clear communication so employees understand their options." },
      { question: "Can Freedom HR Solutions help test benefits system settings?", answer: "Yes. We help test configurations before enrollment opens to reduce errors." },
      { question: "What happens after open enrollment closes?", answer: "We help reconcile elections and data so your records are accurate going into the new plan year." },
    ],
    primaryCta: ctas.technicalSupport,
    secondaryCta: ctas.consultation,
  },

  // ---------- Talent & Workforce Development ----------
  {
    slug: "recruiting-onboarding-solutions",
    hubSlug: "talent-workforce-development",
    title: "Recruiting & Onboarding Solutions",
    h1: "Recruiting and Onboarding Solutions",
    meta: {
      title: "Recruiting and Onboarding Solutions",
      description:
        "Build consistent recruiting and onboarding processes that help new hires start strong and reach productivity sooner.",
    },
    summary:
      "Consistent recruiting and onboarding processes that give new hires a clear, welcoming start.",
    intro:
      "The first days set the tone for an employee's experience. Freedom HR Solutions helps you build recruiting and onboarding processes that are consistent, welcoming, and efficient so new hires start strong.",
    problems: [
      "Onboarding is inconsistent across hires.",
      "New hires lack a clear first-week experience.",
      "Paperwork and setup are manual and slow.",
      "Roles and expectations are unclear early on.",
    ],
    includes: [
      { title: "Onboarding process design", description: "Build a consistent, welcoming onboarding flow." },
      { title: "Onboarding automation", description: "Reduce manual paperwork and setup steps." },
      { title: "New-hire experience", description: "Create a clear first-week experience." },
      { title: "Documentation", description: "Capture the process so it runs the same way each time." },
    ],
    whoItHelps: ["Retail businesses", "Construction companies", "Growing businesses", "HR teams"],
    challenges: [
      "Inconsistent onboarding",
      "Manual paperwork",
      "Slow time to productivity",
      "Unclear early expectations",
    ],
    process: standardProcess,
    benefits: [
      { title: "Stronger starts", description: "New hires who feel set up to succeed." },
      { title: "Faster productivity", description: "A smoother path to getting up to speed." },
      { title: "Less manual work", description: "Automated steps that save admin time." },
      { title: "Consistency", description: "The same quality experience for every hire." },
    ],
    relatedServiceSlugs: ["training-development-programs", "employee-engagement-performance-management", "streamlining-processes", "hr-technology-automation"],
    relatedAudienceSlugs: ["retail-businesses", "growing-businesses", "hr-teams"],
    faqs: [
      { question: "Can Freedom HR Solutions help improve onboarding?", answer: "Yes. We help build a consistent onboarding process so new hires have a clear, welcoming start." },
      { question: "Can onboarding be automated?", answer: "Many onboarding steps can be automated to reduce manual paperwork and speed up setup." },
      { question: "Can this help reduce early turnover?", answer: "A strong onboarding experience supports retention, though results depend on many factors." },
    ],
    primaryCta: ctas.workforceConsult,
    secondaryCta: exploreRelated,
  },
  {
    slug: "training-development-programs",
    hubSlug: "talent-workforce-development",
    title: "Training & Development Programs",
    h1: "Training and Development Programs",
    meta: {
      title: "Training and Development Programs",
      description:
        "Create practical training and development programs for employees and leaders, including onboarding, role-based, and compliance training.",
    },
    summary:
      "Practical training and development programs that help employees and leaders grow.",
    intro:
      "Training helps employees do their best work and prepares leaders to grow your business. Freedom HR Solutions helps you design practical training and development programs tailored to your team and goals.",
    problems: [
      "Training is informal or inconsistent.",
      "New leaders are promoted without support.",
      "Compliance topics are not reinforced.",
      "There is no clear development path.",
    ],
    includes: [
      { title: "Training design", description: "Build practical, role-based training programs." },
      { title: "Leadership development", description: "Support new and growing leaders." },
      { title: "Compliance training", description: "Reinforce policies through clear training." },
      { title: "Program documentation", description: "Capture training so it can be repeated." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Manufacturing companies", "Healthcare companies"],
    challenges: [
      "Inconsistent training",
      "Unsupported new leaders",
      "Weak policy reinforcement",
      "No development path",
    ],
    process: standardProcess,
    benefits: [
      { title: "Stronger skills", description: "Employees better equipped for their roles." },
      { title: "Better leaders", description: "Support for the people leading your teams." },
      { title: "Reinforced policies", description: "Training that supports consistent practices." },
      { title: "Clear paths", description: "Development opportunities employees can see." },
    ],
    relatedServiceSlugs: ["recruiting-onboarding-solutions", "employee-engagement-performance-management", "compliance-support"],
    relatedAudienceSlugs: ["hr-teams", "manufacturing-companies", "healthcare-companies"],
    faqs: [
      { question: "What training programs can be created?", answer: "We help design onboarding training, role-based training, leadership development, and compliance training tailored to your team." },
      { question: "Can training support compliance?", answer: "Yes. We help create training that reinforces your policies and supports consistent practices." },
      { question: "Can training be tailored to our industry?", answer: "Yes. We tailor training to your roles, industry, and goals." },
    ],
    primaryCta: ctas.workforceConsult,
    secondaryCta: exploreRelated,
  },
  {
    slug: "employee-engagement-performance-management",
    hubSlug: "talent-workforce-development",
    title: "Employee Engagement & Performance Management",
    h1: "Employee Engagement and Performance Management Support",
    meta: {
      title: "Employee Engagement and Performance Management",
      description:
        "Support employee engagement, feedback, and performance management with clear expectations, consistent reviews, and practical processes.",
    },
    summary:
      "Build engagement and performance processes that set clear expectations and support accountability.",
    intro:
      "Engaged employees and clear performance expectations help your business run better. Freedom HR Solutions helps you build practical engagement and performance management processes that support feedback, accountability, and growth.",
    problems: [
      "Performance reviews are inconsistent or informal.",
      "Expectations are unclear to employees.",
      "Feedback happens too rarely.",
      "Engagement is hard to measure.",
    ],
    includes: [
      { title: "Performance process design", description: "Build a consistent review and feedback process." },
      { title: "Goal and expectation setting", description: "Help define clear expectations for roles." },
      { title: "Engagement support", description: "Support feedback and engagement practices." },
      { title: "Manager guidance", description: "Help managers lead consistent conversations." },
    ],
    whoItHelps: ["HR teams", "Growing businesses", "Manufacturing companies", "Professional services firms"],
    challenges: [
      "Inconsistent reviews",
      "Unclear expectations",
      "Infrequent feedback",
      "Hard-to-measure engagement",
    ],
    process: standardProcess,
    benefits: [
      { title: "Clear expectations", description: "Employees understand what success looks like." },
      { title: "Consistent reviews", description: "A repeatable performance process." },
      { title: "Better feedback", description: "More regular, useful conversations." },
      { title: "Stronger accountability", description: "Processes that support follow-through." },
    ],
    relatedServiceSlugs: ["training-development-programs", "recruiting-onboarding-solutions", "compliance-support"],
    relatedAudienceSlugs: ["hr-teams", "manufacturing-companies", "professional-services"],
    faqs: [
      { question: "How does performance management support accountability?", answer: "Clear expectations, regular feedback, and a consistent review process help employees understand goals and stay accountable." },
      { question: "Can Freedom HR Solutions help design a review process?", answer: "Yes. We help build a consistent review and feedback process that fits your team." },
      { question: "Can this help managers?", answer: "Yes. We help managers lead consistent, productive performance conversations." },
    ],
    primaryCta: ctas.workforceConsult,
    secondaryCta: exploreRelated,
  },
];

export const servicesBySlug = Object.fromEntries(services.map((service) => [service.slug, service]));

export function getService(slug: string): Service | undefined {
  return servicesBySlug[slug];
}

export function getServicesByHub(hubSlug: string): Service[] {
  return services.filter((service) => service.hubSlug === hubSlug);
}

export const launchServices = services.filter((service) => service.launch);
