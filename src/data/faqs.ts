import type { Faq } from "@/types";

export interface FaqCategory {
  slug: string;
  title: string;
  faqs: Faq[];
}

/** Grouped FAQs for the /faqs/ page. Supports AEO and FAQ schema. */
export const faqCategories: FaqCategory[] = [
  {
    slug: "general",
    title: "General",
    faqs: [
      { question: "What does Freedom HR Solutions do?", answer: "Freedom HR Solutions provides HR compliance, payroll, benefits, ACA reporting, HR technology, system implementation, technical support, and workforce support for growing businesses." },
      { question: "Where is Freedom HR Solutions headquartered?", answer: "Freedom HR Solutions is headquartered in Las Vegas, Nevada." },
      { question: "Does Freedom HR Solutions serve businesses nationwide?", answer: "Yes. We are based in Las Vegas and support businesses locally, statewide, and nationwide through remote consulting, system support, and HR technology guidance." },
      { question: "Who does Freedom HR Solutions help?", answer: "We help business owners, small and growing businesses, HR teams, payroll teams, benefits administrators, multi-state employers, and companies without a dedicated HR department." },
      { question: "Can Freedom HR Solutions work with our existing provider?", answer: "Yes. We frequently work alongside your existing HR, payroll, and benefits systems and providers to support and improve your workflows." },
    ],
  },
  {
    slug: "hr-mri-assessment",
    title: "HR MRI Assessment",
    faqs: [
      { question: "What is the HR MRI Risk Assessment?", answer: "It is a structured review of your HR, payroll, benefits, and compliance operations that identifies gaps and risks and gives you a prioritized plan to address them." },
      { question: "Who should request an HR MRI Assessment?", answer: "Business owners, HR teams, payroll teams, and benefits administrators who want a clear picture of their HR health, especially if they are unsure where to start." },
      { question: "What does the assessment review?", answer: "It reviews policies, documentation, payroll and benefits configuration, systems, and reporting to surface gaps and improvement opportunities." },
      { question: "What happens after the assessment?", answer: "You receive a clear summary of findings and prioritized recommendations, and we can help you implement the changes if you choose." },
      { question: "Is the HR MRI Assessment only for companies with HR departments?", answer: "No. It is designed for businesses of many sizes, including those without a dedicated HR department." },
    ],
  },
  {
    slug: "aca-reporting",
    title: "ACA Reporting",
    faqs: [
      { question: "What is ACA reporting?", answer: "ACA reporting is how employers report health coverage offers, employee eligibility, and coverage information to the IRS. We help you review requirements and prepare filing information." },
      { question: "Who needs ACA reporting support?", answer: "Applicable Large Employers generally have ACA reporting responsibilities. We help you review your status and prepare." },
      { question: "What are IRS Forms 1094 and 1095?", answer: "They are the forms used to report health coverage information to the IRS and to employees. We help organize the data needed to prepare them." },
      { question: "Can Freedom HR Solutions help with ACA penalty notices?", answer: "Yes. We help you understand the notice and organize a practical response. We do not provide legal advice or guarantee outcomes." },
      { question: "Can Freedom HR Solutions help review ACA reporting data?", answer: "Yes. We review your process and data to catch avoidable errors before filing." },
    ],
  },
  {
    slug: "payroll-benefits",
    title: "Payroll and Benefits",
    faqs: [
      { question: "Can Freedom HR Solutions help choose a payroll platform?", answer: "Yes. We help you compare platforms based on your size, structure, and goals so you choose a system that fits how you operate." },
      { question: "Can you help with benefits administration?", answer: "Yes. We support benefits setup, eligibility, enrollment workflows, and ongoing administration." },
      { question: "What causes payroll and benefits errors?", answer: "Common causes include incomplete configuration, data that does not sync between systems, and undocumented processes. We help fix the root cause." },
      { question: "Can you help with multi-state payroll?", answer: "Yes. We help configure and organize payroll across the states where you have employees." },
    ],
  },
  {
    slug: "hr-technology",
    title: "HR Technology and Implementation",
    faqs: [
      { question: "What is HR technology consulting?", answer: "It is help choosing, configuring, connecting, and improving the systems that run your HR, payroll, and benefits processes." },
      { question: "Which HR workflows can be automated?", answer: "Onboarding, approvals, data updates, reporting, and parts of payroll and benefits workflows can often be automated." },
      { question: "Can Freedom HR Solutions help implement a new HR system?", answer: "Yes. We help with configuration, data migration, integration, testing, training, and go-live support." },
      { question: "Can you help connect our systems?", answer: "Yes. We review integration options so your HR, payroll, and benefits systems share data more cleanly." },
    ],
  },
  {
    slug: "technical-support",
    title: "Technical Support",
    faqs: [
      { question: "Can Freedom HR Solutions troubleshoot payroll system issues?", answer: "Yes. We help diagnose the root cause, correct the issue, validate the fix, and recommend prevention steps." },
      { question: "Can Freedom HR Solutions help with benefits system problems?", answer: "Yes. We help resolve benefits configuration and eligibility issues." },
      { question: "Can Freedom HR Solutions support HR system integrations?", answer: "Yes. We help review and improve how your systems connect and share data." },
      { question: "Can Freedom HR Solutions provide ongoing system support?", answer: "Yes. We offer ongoing technical support so your team always has a reliable resource." },
      { question: "Can Freedom HR Solutions work with our current HR technology provider?", answer: "Yes. We frequently coordinate with your existing providers and platforms." },
    ],
  },
  {
    slug: "locations",
    title: "Locations and Nationwide Service",
    faqs: [
      { question: "Is Freedom HR Solutions headquartered in Las Vegas?", answer: "Yes. Freedom HR Solutions is headquartered in Las Vegas, Nevada and supports businesses locally, statewide, and nationwide." },
      { question: "Does Freedom HR Solutions only serve Las Vegas businesses?", answer: "No. We are based in Las Vegas, but services can be delivered nationwide through remote consulting and system support." },
      { question: "Can Freedom HR Solutions support multi-state employers?", answer: "Yes. We help multi-state employers keep payroll, benefits, and compliance processes consistent across locations." },
      { question: "Can services be delivered remotely?", answer: "Yes. Much of our work is delivered remotely, which lets us support employers across the country." },
    ],
  },
];

export const allFaqs: Faq[] = faqCategories.flatMap((category) => category.faqs);
