import type { BlogCategory, BlogPost } from "@/types";

export const blogCategories: BlogCategory[] = [
  { slug: "aca-reporting", title: "ACA Reporting", description: "Guides on ACA reporting, ALE status, IRS 1094 and 1095 forms, and penalty response." },
  { slug: "hr-compliance", title: "HR Compliance", description: "Practical HR compliance, policy, handbook, and risk management guidance." },
  { slug: "payroll-systems", title: "Payroll Systems", description: "Payroll platform selection, configuration, and multi-state payroll basics." },
  { slug: "benefits-administration", title: "Benefits Administration", description: "Benefits setup, eligibility, and administration for employers." },
  { slug: "hr-technology", title: "HR Technology", description: "HR system implementation, automation, and integration insights." },
  { slug: "open-enrollment", title: "Open Enrollment", description: "Planning, setup, and communication for a smoother open enrollment." },
  { slug: "employee-handbooks", title: "Employee Handbooks", description: "Creating and maintaining clear, current employee handbooks." },
  { slug: "workforce-compliance", title: "Workforce Compliance", description: "Documentation, monitoring, and consistency across your workforce." },
  { slug: "reporting-data-insights", title: "Reporting and Data Insights", description: "Turning HR and payroll data into useful reporting." },
  { slug: "recruiting-onboarding", title: "Recruiting and Onboarding", description: "Hiring and onboarding processes that help new employees start strong." },
  { slug: "training-development", title: "Training and Development", description: "Building practical training and leadership development programs." },
  { slug: "organizational-change-management", title: "Organizational Change Management", description: "Helping teams navigate organizational and system change." },
];

export const blogCategoriesBySlug = Object.fromEntries(blogCategories.map((c) => [c.slug, c]));

export const blogPosts: BlogPost[] = [
  {
    slug: "what-is-aca-reporting",
    title: "What Is ACA Reporting? A Practical Guide for Employers",
    categorySlug: "aca-reporting",
    excerpt:
      "ACA reporting can feel confusing. Here is a clear, practical overview of what it is, who it applies to, and how employers can prepare.",
    meta: {
      title: "What Is ACA Reporting? A Guide for Employers",
      description:
        "A practical guide to ACA reporting requirements, Applicable Large Employer status, IRS 1094 and 1095 forms, and how employers can prepare accurate filings.",
    },
    published: true,
    primaryServiceSlug: "aca-reporting-consultant",
    hubSlug: "aca-reporting-compliance",
    relatedPostSlugs: ["hr-compliance-checklist-for-small-businesses", "open-enrollment-planning-checklist"],
    body: [
      {
        heading: "ACA reporting in plain language",
        paragraphs: [
          "ACA reporting is the process employers use to report health coverage offers, employee eligibility, and coverage information to the IRS. It exists so the IRS can confirm whether applicable employers offered coverage that meets certain standards.",
          "For many employers, the hardest part is not the concept. It is organizing accurate data across payroll, benefits, and HR systems so the filing reflects what actually happened during the year.",
        ],
      },
      {
        heading: "Who needs to file",
        paragraphs: [
          "ACA reporting responsibilities generally apply to Applicable Large Employers. An Applicable Large Employer is, in general terms, an employer that averaged 50 or more full-time and full-time equivalent employees in the prior calendar year.",
          "Because headcount can change throughout the year, it is worth reviewing your numbers rather than assuming. A short review can tell you whether you are likely an Applicable Large Employer and what that means for filing.",
        ],
      },
      {
        heading: "The forms involved",
        paragraphs: [
          "ACA reporting typically involves IRS Forms 1094 and 1095. These forms report coverage information to the IRS and provide information to employees.",
          "Accurate forms depend on clean underlying data, including coverage offers, eligibility, and enrollment details. When that data is scattered or inconsistent, errors become more likely.",
        ],
      },
      {
        heading: "How to prepare",
        paragraphs: [
          "Start by confirming your Applicable Large Employer status. Then organize your workforce, coverage, and eligibility data so it lines up across systems. Reviewing this information before filing is the most reliable way to reduce avoidable errors.",
          "Freedom HR Solutions helps employers review requirements, organize data, prepare filing information, and respond if reporting issues come up. We do not provide legal advice or guarantee outcomes, but we help you approach reporting with a clear, organized process.",
        ],
      },
    ],
    faqs: [
      { question: "When are ACA forms typically due?", answer: "Deadlines are set by the IRS and can change year to year. Confirm current deadlines for the applicable tax year and plan your data review well ahead of them." },
      { question: "What if we already received an IRS notice?", answer: "We help you understand the notice and organize a practical response. We do not provide legal advice or guarantee outcomes." },
    ],
  },
  {
    slug: "hr-compliance-checklist-for-small-businesses",
    title: "HR Compliance Checklist for Small Businesses",
    categorySlug: "hr-compliance",
    excerpt:
      "A practical HR compliance checklist to help small businesses find gaps in policies, documentation, payroll, and benefits before they become problems.",
    meta: {
      title: "HR Compliance Checklist for Small Businesses",
      description:
        "A practical HR compliance checklist for small businesses covering policies, documentation, payroll, benefits, and the steps to reduce avoidable risk.",
    },
    published: true,
    primaryServiceSlug: "compliance-support",
    hubSlug: "hr-compliance",
    relatedPostSlugs: ["what-is-aca-reporting", "open-enrollment-planning-checklist"],
    body: [
      {
        heading: "Why small businesses face hidden HR risk",
        paragraphs: [
          "Small businesses often handle HR alongside everything else. That is normal, but it means policies and documentation can quietly fall behind as the company grows.",
          "A simple checklist helps you see where the gaps are before they create real problems.",
        ],
      },
      {
        heading: "Policies and documentation",
        paragraphs: ["Start with the foundation. Clear, current documentation supports consistency and makes reviews far less stressful."],
        bullets: [
          "Confirm you have a current employee handbook.",
          "Review policies so they match how the business actually operates.",
          "Make sure acknowledgments are collected and stored.",
          "Check that employee records are complete and organized.",
        ],
      },
      {
        heading: "Payroll and benefits",
        paragraphs: ["Payroll and benefits are where small errors become visible quickly. A periodic review keeps them accurate."],
        bullets: [
          "Verify employee classifications are reviewed.",
          "Confirm payroll configurations match current pay practices.",
          "Check benefits eligibility and enrollment data for consistency.",
          "Review whether ACA reporting responsibilities may apply.",
        ],
      },
      {
        heading: "Putting it together",
        paragraphs: [
          "If several items on this checklist raise questions, that is useful information. It tells you where to focus first.",
          "An HR MRI Risk Assessment can turn this checklist into a prioritized plan. Freedom HR Solutions helps small businesses identify gaps and improve their HR foundation without building a full internal HR department.",
        ],
      },
    ],
    faqs: [
      { question: "How often should we run through this checklist?", answer: "At least once a year, and after major changes such as significant growth or expanding into a new state." },
      { question: "Do we need an HR department to act on this?", answer: "No. Many small businesses work through these items with outside support rather than a full internal HR team." },
    ],
  },
  {
    slug: "open-enrollment-planning-checklist",
    title: "Open Enrollment Planning Checklist",
    categorySlug: "open-enrollment",
    excerpt:
      "Use this open enrollment planning checklist to prepare benefits plans, systems, communication, and reconciliation for a smoother enrollment season.",
    meta: {
      title: "Open Enrollment Planning Checklist",
      description:
        "An open enrollment planning checklist covering plan setup, system configuration, employee communication, testing, and post-enrollment reconciliation.",
    },
    published: true,
    primaryServiceSlug: "open-enrollment-setup",
    hubSlug: "support-service-continuity",
    relatedPostSlugs: ["what-is-aca-reporting", "hr-compliance-checklist-for-small-businesses"],
    body: [
      {
        heading: "Start earlier than you think",
        paragraphs: [
          "Open enrollment runs more smoothly when preparation starts well before the window opens. Rushing setup is where errors tend to creep in.",
          "This checklist breaks preparation into clear stages so nothing important gets missed.",
        ],
      },
      {
        heading: "Before enrollment opens",
        paragraphs: ["Get the foundation right before employees ever log in."],
        bullets: [
          "Confirm plan options, rates, and eligibility rules.",
          "Configure benefits plans in your system.",
          "Test the employee enrollment experience end to end.",
          "Prepare clear employee communication about options and deadlines.",
        ],
      },
      {
        heading: "During enrollment",
        paragraphs: ["Stay close to the process so questions and issues are handled quickly."],
        bullets: [
          "Monitor enrollment progress and completion.",
          "Provide a clear channel for employee questions.",
          "Watch for configuration issues that affect elections.",
        ],
      },
      {
        heading: "After enrollment closes",
        paragraphs: [
          "The work is not done when the window closes. Reconciliation keeps your data accurate going into the new plan year.",
          "Freedom HR Solutions helps employers set up, test, communicate, and reconcile open enrollment so the season is less stressful for everyone involved.",
        ],
        bullets: [
          "Reconcile elections against payroll deductions.",
          "Confirm data flowed correctly to carriers and systems.",
          "Document any issues and fixes for next year.",
        ],
      },
    ],
    faqs: [
      { question: "How early should open enrollment planning start?", answer: "Several weeks ahead is a good target so there is time to configure, test, and communicate before the window opens." },
      { question: "What is the most overlooked step?", answer: "Post-enrollment reconciliation. Confirming elections against payroll and carrier data prevents problems in the new plan year." },
    ],
  },
];

export const blogPostsBySlug = Object.fromEntries(blogPosts.map((post) => [post.slug, post]));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPostsBySlug[slug];
}

export const publishedPosts = blogPosts.filter((post) => post.published);

export function getPostsByCategory(categorySlug: string): BlogPost[] {
  return publishedPosts.filter((post) => post.categorySlug === categorySlug);
}
