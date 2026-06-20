import type { Cta, ProcessStep } from "@/types";

/**
 * Shared content building blocks reused across data files.
 * Reusing the engagement process is intentional: it is the same
 * methodology Freedom HR Solutions applies to every engagement.
 */
export const standardProcess: ProcessStep[] = [
  {
    title: "Discover",
    description:
      "We learn how your business operates today, including your systems, team, workflows, and the goals behind the work.",
  },
  {
    title: "Review",
    description:
      "We review current configurations, documentation, data, and processes to understand what is working and what is not.",
  },
  {
    title: "Assess",
    description:
      "We identify gaps, risks, errors, and improvement opportunities, then prioritize them by impact and urgency.",
  },
  {
    title: "Recommend",
    description:
      "We provide clear, practical recommendations with a plan you can act on, written in language your team can use.",
  },
  {
    title: "Implement",
    description:
      "We help put the changes in place, from system configuration and documentation to testing and training.",
  },
  {
    title: "Support",
    description:
      "We stay available for ongoing questions, troubleshooting, and improvements as your business changes.",
  },
];

/** CTA presets referenced across service, audience, and location pages. */
export const ctas = {
  assessment: { label: "Request HR MRI Assessment", href: "/request-assessment/" },
  consultation: { label: "Schedule Consultation", href: "/contact/" },
  complianceConsult: { label: "Schedule Compliance Consultation", href: "/contact/" },
  acaReview: { label: "Request ACA Reporting Review", href: "/request-assessment/" },
  systemReview: { label: "Request System Review", href: "/request-assessment/" },
  techReview: { label: "Request HR Technology Review", href: "/request-assessment/" },
  technicalSupport: { label: "Request Technical Support", href: "/request-assessment/" },
  workforceConsult: { label: "Schedule Workforce Consultation", href: "/contact/" },
  findRisks: { label: "Find Hidden HR Risks", href: "/request-assessment/" },
  nationwideSupport: { label: "Request Nationwide HR Support", href: "/request-assessment/" },
} satisfies Record<string, Cta>;
