import Link from "next/link";
import { cn } from "@/lib/utils";

interface CardShellProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

/** Shared link-card container used by the typed card components. */
export function CardShell({ href, children, className }: CardShellProps) {
  return (
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03] transition-all hover:border-brand-200 hover:shadow-md hover:shadow-ink/5",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function CardArrow({ label = "Learn more" }: { label?: string }) {
  return (
    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
      {label}
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="transition-transform group-hover:translate-x-1"
      >
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
