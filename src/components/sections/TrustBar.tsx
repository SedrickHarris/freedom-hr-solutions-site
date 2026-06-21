import { MapPin, Globe, Shield, User, Building2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/motion/Reveal";

const trustItems = [
  { label: "Las Vegas Headquartered", Icon: MapPin },
  { label: "Nationwide Service Delivery", Icon: Globe },
  { label: "HR, Payroll, Benefits & Compliance", Icon: Shield },
  { label: "Founder-Led HR Technology", Icon: User },
  { label: "Multi-State Employer Support", Icon: Building2 },
];

/**
 * Sitewide trust bar. Rendered once in the root layout, directly under the
 * header, so it appears on every page.
 */
export function TrustBar() {
  return (
    <Section tone="muted" className="border-y border-border py-2 sm:py-3">
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-body sm:flex-nowrap">
        {trustItems.map((item, index) => (
          <Reveal key={item.label} index={index} className="flex items-center gap-x-8">
            {index > 0 && (
              <span className="hidden text-gray-400 sm:block select-none" aria-hidden>|</span>
            )}
            <span className="flex items-center gap-2 whitespace-nowrap">
              <item.Icon className="h-4 w-4 shrink-0 text-brand-600" aria-hidden />
              {item.label}
            </span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
