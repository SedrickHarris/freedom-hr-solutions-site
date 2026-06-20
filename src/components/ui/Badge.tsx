import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  tone?: "brand" | "trust" | "muted" | "onDark";
}

export function Badge({ children, className, tone = "brand" }: BadgeProps) {
  const toneClass =
    tone === "trust"
      ? "bg-trust-50 text-trust-700 ring-trust-100"
      : tone === "muted"
        ? "bg-muted-deep text-ink-soft ring-border"
        : tone === "onDark"
          ? "bg-white/10 text-white ring-white/20"
          : "bg-brand-50 text-brand-700 ring-brand-100";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-inset",
        toneClass,
        className,
      )}
    >
      {children}
    </span>
  );
}
