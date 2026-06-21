/**
 * Freedom HR Solutions — project icon system
 *
 * Hard rule: no inline checkmark SVG paths anywhere in
 * this project. All icons use Lucide React via this file.
 * Add new icons here. Never inline SVG checkmarks in components.
 *
 * Icons always use currentColor. Size and color are set by the parent.
 */

import {
  ShieldCheck,
  FileText,
  DollarSign,
  BarChart2,
  Settings,
  Users,
  Globe,
  Building2,
  Stethoscope,
  HardHat,
  ShoppingBag,
  Factory,
  GraduationCap,
  Briefcase,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  MapPin,
  Clock,
  Zap,
  Lock,
  Search,
  RefreshCw,
  HeartHandshake,
  TrendingUp,
  Layers,
  Database,
  type LucideIcon,
} from "lucide-react";

export type { LucideIcon };

export const serviceIcons: Record<string, LucideIcon> = {
  "hr-mri-risk-assessment": ClipboardList,
  "compliance-support": ShieldCheck,
  "workforce-compliance-monitoring": ShieldCheck,
  "employee-handbook-creation-management": FileText,
  "aca-reporting-consultant": BarChart2,
  "aca-compliance-review": BarChart2,
  "reporting-data-insights": BarChart2,
  "payroll-benefits-hr-management": DollarSign,
  "open-enrollment-setup": HeartHandshake,
  "hr-technology-automation": Zap,
  "system-setup-implementation": Settings,
  "system-audits-improvements": Search,
  "streamlining-processes": RefreshCw,
  "ongoing-technical-support": Clock,
  "technical-issue-resolution": AlertTriangle,
  "support-service-continuity": Lock,
  "recruiting-onboarding-solutions": Users,
  "training-development-programs": GraduationCap,
  "employee-engagement-performance-management": HeartHandshake,
  default: CheckCircle2,
};

export const audienceIcons: Record<string, LucideIcon> = {
  "business-owners": Briefcase,
  "hr-teams": Users,
  "payroll-teams": DollarSign,
  "benefits-administrators": HeartHandshake,
  "small-businesses": Building2,
  "growing-businesses": TrendingUp,
  "multi-state-employers": Globe,
  "companies-without-hr-departments": AlertTriangle,
  "healthcare-companies": Stethoscope,
  "construction-companies": HardHat,
  "retail-businesses": ShoppingBag,
  "manufacturing-companies": Factory,
  "education-organizations": GraduationCap,
  "professional-services": Briefcase,
  default: Users,
};

export const featureKeywordIcons: Array<[string, LucideIcon]> = [
  ["compliance", ShieldCheck],
  ["audit", Search],
  ["report", BarChart2],
  ["aca", BarChart2],
  ["payroll", DollarSign],
  ["benefit", HeartHandshake],
  ["enrollment", HeartHandshake],
  ["system", Settings],
  ["implement", Settings],
  ["automat", Zap],
  ["integrat", Layers],
  ["data", Database],
  ["document", FileText],
  ["handbook", FileText],
  ["policy", FileText],
  ["training", GraduationCap],
  ["onboard", Users],
  ["recruit", Users],
  ["workforce", Users],
  ["team", Users],
  ["support", Clock],
  ["troubleshoot", AlertTriangle],
  ["risk", AlertTriangle],
  ["gap", Search],
  ["review", Search],
  ["finding", ClipboardList],
  ["recommend", ClipboardList],
  ["location", MapPin],
  ["nationwide", Globe],
  ["multi-state", Globe],
  ["process", RefreshCw],
  ["engagement", HeartHandshake],
  ["performance", TrendingUp],
  ["growth", TrendingUp],
  ["lock", Lock],
  ["secure", Lock],
];

export function getFeatureIcon(title: string): LucideIcon {
  const lower = title.toLowerCase();
  for (const [keyword, icon] of featureKeywordIcons) {
    if (lower.includes(keyword)) return icon;
  }
  return CheckCircle2;
}
