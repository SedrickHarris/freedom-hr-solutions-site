import type { ResourceCategory } from "@/types";

export const resourceCategories: ResourceCategory[] = [
  { slug: "hr-compliance", title: "HR Compliance Resources", description: "Checklists and guides for HR policies, documentation, and risk." },
  { slug: "aca-reporting", title: "ACA Reporting Resources", description: "Practical resources for ACA reporting and Applicable Large Employer reviews." },
  { slug: "payroll-systems", title: "Payroll System Resources", description: "Guidance for selecting, configuring, and improving payroll systems." },
  { slug: "benefits-administration", title: "Benefits Administration Resources", description: "Resources for benefits setup, eligibility, and administration." },
  { slug: "hr-technology", title: "HR Technology Resources", description: "Guides for HR system implementation, automation, and integration." },
  { slug: "open-enrollment", title: "Open Enrollment Resources", description: "Planning and communication resources for open enrollment." },
  { slug: "employee-handbooks", title: "Employee Handbook Resources", description: "Resources for creating and maintaining employee handbooks." },
  { slug: "workforce-compliance", title: "Workforce Compliance Resources", description: "Documentation and monitoring resources for your workforce." },
  { slug: "training-development", title: "Training and Development Resources", description: "Resources for building practical training programs." },
];

export interface ResourceItem {
  title: string;
  description: string;
  categorySlug: string;
  /** Optional href when a downloadable or published resource exists. */
  href?: string;
  status: string;
}

/**
 * Featured resources. These checklists are planned downloadable assets.
 * They are shown as upcoming until the client provides final files, so no
 * links point to pages that do not exist yet.
 */
export const featuredResources: ResourceItem[] = [
  { title: "HR Compliance Checklist", description: "A practical checklist to review policies, documentation, payroll, and benefits.", categorySlug: "hr-compliance", status: "Coming soon" },
  { title: "ACA Reporting Checklist", description: "Organize the data and steps employers need for accurate ACA reporting.", categorySlug: "aca-reporting", status: "Coming soon" },
  { title: "Open Enrollment Planning Checklist", description: "Plan benefits setup, communication, testing, and reconciliation.", categorySlug: "open-enrollment", status: "Coming soon" },
  { title: "Payroll System Implementation Checklist", description: "Key steps for a smoother payroll and HR system implementation.", categorySlug: "payroll-systems", status: "Coming soon" },
  { title: "Employee Handbook Review Checklist", description: "Review your handbook for clarity, consistency, and current policies.", categorySlug: "employee-handbooks", status: "Coming soon" },
  { title: "HR System Audit Checklist", description: "Review system settings, data, workflows, and reporting for improvements.", categorySlug: "hr-technology", status: "Coming soon" },
];
