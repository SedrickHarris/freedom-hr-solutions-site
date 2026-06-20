import type { FeatureItem } from "@/types";
import { cn } from "@/lib/utils";

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3;
  /** Visual style for each item. */
  variant?: "card" | "check" | "plain";
  tone?: "default" | "onDark";
}

export function FeatureGrid({
  items,
  columns = 3,
  variant = "card",
  tone = "default",
}: FeatureGridProps) {
  const onDark = tone === "onDark";
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={cn("grid gap-5", cols)}>
      {items.map((item) => (
        <li
          key={item.title}
          className={cn(
            variant === "card" &&
              (onDark
                ? "rounded-card border border-white/10 bg-white/5 p-6"
                : "rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03] transition-shadow hover:shadow-md hover:shadow-ink/5"),
            variant === "check" && "flex gap-3",
            variant === "plain" && "",
          )}
        >
          {variant === "check" ? (
            <>
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                  onDark ? "bg-trust-400/20" : "bg-trust-50",
                )}
                aria-hidden
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke={onDark ? "#bcd2ff" : "#1f4ed6"}
                    strokeWidth="2.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div>
                <h3 className={cn("font-semibold", onDark ? "text-white" : "text-ink")}>
                  {item.title}
                </h3>
                <p className={cn("mt-1 text-sm leading-relaxed", onDark ? "text-white/75" : "text-body")}>
                  {item.description}
                </p>
              </div>
            </>
          ) : (
            <>
              <div
                className={cn(
                  "mb-4 flex h-10 w-10 items-center justify-center rounded-lg",
                  onDark ? "bg-white/10" : "bg-brand-50",
                )}
                aria-hidden
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke={onDark ? "#bcd2ff" : "#1f4ed6"}
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className={cn("font-display text-lg font-bold", onDark ? "text-white" : "text-ink")}>
                {item.title}
              </h3>
              <p className={cn("mt-2 leading-relaxed", onDark ? "text-white/75" : "text-body")}>
                {item.description}
              </p>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}
