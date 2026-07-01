import Link from "next/link";
import { Layers } from "lucide-react";
import { partnerRefs } from "@/lib/links";

interface PlatformCalloutProps {
  slugs: string[];
}

/**
 * Platform-support note for service pages that carry platformSlugs.
 * Links each supported platform to its partner page and states clearly that
 * support is provided as an independent consulting firm (no partnership claim).
 */
export function PlatformCallout({ slugs }: PlatformCalloutProps) {
  const platforms = partnerRefs(slugs);
  if (platforms.length === 0) return null;

  return (
    <div className="mt-8 flex flex-col gap-4 rounded-card border border-border bg-brand-50/50 p-6 sm:flex-row sm:gap-5">
      <span
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white"
        aria-hidden
      >
        <Layers size={20} strokeWidth={2} />
      </span>
      <div>
        <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-brand-600">
          Platform support
        </p>
        <p className="leading-relaxed text-body">
          Freedom HR Solutions provides implementation support for{" "}
          {platforms.map((platform, index) => (
            <span key={platform.href}>
              <Link
                href={platform.href}
                className="font-medium text-brand-700 underline-offset-2 hover:underline"
              >
                {platform.title}
              </Link>
              {index < platforms.length - 1 ? ", " : ""}
            </span>
          ))}
          , and other HR and payroll platforms. Platform support is provided as an
          independent consulting firm.
        </p>
      </div>
    </div>
  );
}
