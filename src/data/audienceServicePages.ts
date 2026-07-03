import type { AudienceServicePage } from "@/types";

export const audienceServicePages: AudienceServicePage[] = [
  {
    audienceSlug: "small-businesses",
    serviceSlug: "hr-compliance",
    primaryServiceDataSlug: "compliance-support",
    hubSlug: "hr-compliance",
    title: "HR Compliance Support for Small Businesses",
    h1: "HR Compliance Support for Small Businesses",
    eyebrow: "For small businesses",
    meta: {
      title: "HR Compliance for Small Businesses | Freedom HR Solutions",
      description:
        "Freedom HR Solutions helps small businesses find and fix HR compliance gaps across policies, documentation, worker classification, and recordkeeping. Las Vegas and nationwide.",
    },
    summary:
      "Find and fix HR compliance gaps before they become problems. Right-sized compliance support for small businesses without a full-time HR team.",
    intro:
      "Small businesses carry the same HR compliance obligations as large employers but rarely have the staff to manage them. Documentation requirements, worker classification rules, recordkeeping obligations, and policy requirements apply to your business regardless of headcount. Freedom HR Solutions helps small businesses identify where their HR setup has gaps, understand what needs to be addressed, and build a compliance foundation that holds up as the business grows. We work with small businesses in Las Vegas, across Nevada, and nationwide.",
    directAnswer: {
      question: "What does HR compliance mean for a small business?",
      answer:
        "HR compliance for a small business means meeting employment law requirements for documentation, policies, payroll practices, worker classification, and recordkeeping. Small businesses face the same federal and state obligations as larger employers but typically handle them without dedicated HR staff. Common gaps include missing or outdated handbooks, misclassified workers, incomplete hiring documentation, and recordkeeping errors that go unnoticed until they create problems.",
    },
    painPoints: [
      {
        title: "Same rules, fewer resources",
        description:
          "Employment laws, recordkeeping requirements, and documentation obligations apply to small businesses the same as large ones. Without a dedicated HR team, gaps build quietly until they become costly problems.",
      },
      {
        title: "No one tracking compliance day to day",
        description:
          "When HR responsibilities fall to the owner or an office manager alongside other duties, compliance items get missed. Worker classification, leave requirements, and recordkeeping rules drift out of date without anyone noticing.",
      },
      {
        title: "Growth creates new obligations",
        description:
          "Crossing certain headcount thresholds can trigger additional compliance requirements. Small businesses that grow without reviewing their HR setup can find themselves out of step with obligations they did not know applied.",
      },
      {
        title: "Errors that compound over time",
        description:
          "A payroll configuration mistake or a missing new hire notice does not announce itself. These gaps accumulate quietly until an audit, a termination dispute, or an employee situation forces a review.",
      },
    ],
    scenarios: [
      "You have grown past a handful of employees and HR processes are still informal or undocumented.",
      "Your employee handbook has not been reviewed in over a year and may no longer reflect how the business operates.",
      "A worker classification question has come up and you are not sure how to evaluate your current setup.",
      "Recordkeeping has been inconsistent and you are not confident your documentation would hold up under scrutiny.",
      "A compliance issue surfaced and you want to know where else you might have exposure before something else comes up.",
      "You want to know where your HR compliance setup stands before you keep growing.",
    ],
    siblingServiceSlugs: [
      "employee-handbooks",
      "hr-mri-risk-assessment",
      "payroll-benefits-support",
    ],
    faqs: [
      {
        question: "What HR compliance requirements apply to small businesses?",
        answer:
          "Small businesses must meet federal and state employment law requirements regardless of size, including documentation, payroll practices, worker classification, leave policies, and recordkeeping. Specific obligations can vary by headcount, state, and industry. An HR MRI Risk Assessment helps identify which requirements are most relevant to your business.",
      },
      {
        question: "What are the most common HR compliance gaps in small businesses?",
        answer:
          "Common gaps include missing or outdated employee handbooks, misclassified employees or contractors, incomplete new hire documentation, inconsistent recordkeeping, and leave policies that do not reflect current requirements. Most small businesses are unaware of these gaps until something surfaces that forces a review.",
      },
      {
        question: "Does a small business need an HR compliance review?",
        answer:
          "If your business has grown past a handful of employees, has not reviewed its handbook recently, or has never had a structured review of HR documentation and processes, a compliance review gives you a clear picture of where your gaps are before they create a more serious problem.",
      },
      {
        question: "Can Freedom HR Solutions help a small business with HR compliance if we have no HR staff?",
        answer:
          "Yes. Most small businesses we support do not have a dedicated HR person. We conduct a structured review of your HR setup, identify gaps, and give you a prioritized plan to address them without requiring you to hire a full-time HR employee.",
      },
      {
        question: "What is the difference between HR compliance support and legal advice?",
        answer:
          "HR compliance support helps you identify gaps in documentation, policies, and processes and gives you practical next steps to address them. It is not legal advice and does not replace employment counsel. Freedom HR Solutions does not provide legal advice. If your situation involves active legal exposure, we recommend consulting an employment attorney alongside our support.",
      },
      {
        question: "How long does it take to address HR compliance gaps in a small business?",
        answer:
          "It depends on the number and severity of gaps identified. Some items, like updating a handbook section or organizing employee records, can be addressed quickly. Others, like reviewing worker classifications or reconfiguring payroll settings, take more time. The HR MRI Risk Assessment gives you a prioritized list so you know what to address first.",
      },
      {
        question: "Does Freedom HR Solutions provide HR compliance support outside of Las Vegas?",
        answer:
          "Yes. We are headquartered in Las Vegas and support small businesses across Nevada and nationwide through remote HR consulting, compliance reviews, and ongoing support.",
      },
    ],
    primaryCta: { label: "Request HR Compliance Review", href: "/request-assessment/" },
    secondaryCta: { label: "Schedule Consultation", href: "/contact/" },
  },
];

export const audienceServicePagesByKey: Record<string, AudienceServicePage> = Object.fromEntries(
  audienceServicePages.map((p) => [`${p.audienceSlug}/${p.serviceSlug}`, p]),
);

export function getAudienceServicePage(
  audienceSlug: string,
  serviceSlug: string,
): AudienceServicePage | undefined {
  return audienceServicePagesByKey[`${audienceSlug}/${serviceSlug}`];
}
