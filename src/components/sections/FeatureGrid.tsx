import type { FeatureItem } from "@/types";
import { cn } from "@/lib/utils";
import { getFeatureIcon } from "@/lib/icons";
import { Reveal } from "@/components/motion/Reveal";

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3;
  /** Visual style for each item. */
  variant?: "card" | "check" | "plain";
  tone?: "default" | "onDark";
  /** Opt in to staggered scroll-reveal entrance and hover lift for each item. */
  reveal?: boolean;
}

export function FeatureGrid({
  items,
  columns = 3,
  variant = "card",
  tone = "default",
  reveal = false,
}: FeatureGridProps) {
  const onDark = tone === "onDark";
  const cols = columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <ul className={cn("grid gap-5", cols)}>
      {items.map((item, index) => {
        const itemClass = cn(
          variant === "card" &&
            (onDark
              ? "rounded-card border border-white/10 bg-white/5 p-6"
              : "rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03] transition-shadow hover:shadow-md hover:shadow-ink/5"),
          variant === "check" && "flex gap-3",
          variant === "plain" && "",
          // Hover lift reuses the Reveal wrapper's transform transition.
          reveal && variant === "card" && "hover:-translate-y-0.5",
        );
        const inner = variant === "check" ? (
            <>
              <span
                className={cn(
                  "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full",
                  onDark ? "bg-trust-400/20 text-brand-200" : "bg-trust-50 text-brand-600",
                )}
                aria-hidden
              >
                {(() => {
                  const Icon = getFeatureIcon(item.title);
                  return <Icon size={13} strokeWidth={2.2} />;
                })()}
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
                  onDark ? "bg-white/10 text-brand-200" : "bg-brand-50 text-brand-600",
                )}
                aria-hidden
              >
                {(() => {
                  const Icon = getFeatureIcon(item.title);
                  return <Icon size={20} strokeWidth={2} />;
                })()}
              </div>
              <h3 className={cn("font-display text-lg font-bold", onDark ? "text-white" : "text-ink")}>
                {item.title}
              </h3>
              <p className={cn("mt-2 leading-relaxed", onDark ? "text-white/75" : "text-body")}>
                {item.description}
              </p>
            </>
        );

        if (reveal) {
          return (
            <Reveal as="li" key={item.title} index={index} className={itemClass}>
              {inner}
            </Reveal>
          );
        }
        return (
          <li key={item.title} className={itemClass}>
            {inner}
          </li>
        );
      })}
    </ul>
  );
}
