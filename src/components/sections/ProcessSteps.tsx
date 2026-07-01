import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

interface ProcessStepsProps {
  steps: ProcessStep[];
  tone?: "default" | "onDark";
  columns?: 2 | 3;
  /** Opt in to staggered scroll-reveal entrance and hover lift for each step. */
  reveal?: boolean;
}

export function ProcessSteps({ steps, tone = "default", columns = 3, reveal = false }: ProcessStepsProps) {
  const onDark = tone === "onDark";
  return (
    <ol
      className={cn(
        "grid gap-6 sm:grid-cols-2",
        columns === 3 && "lg:grid-cols-3",
      )}
    >
      {steps.map((step, index) => {
        const stepClass = cn(
          "relative rounded-card border p-6",
          onDark ? "border-white/10 bg-white/5" : "border-border bg-white shadow-sm shadow-ink/[0.03]",
          reveal && "hover:-translate-y-0.5",
        );
        const inner = (
          <>
          <span
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-lg font-display text-lg font-bold",
              onDark ? "bg-white/10 text-white" : "bg-brand-600 text-white",
            )}
          >
            {index + 1}
          </span>
          <h3 className={cn("mt-4 font-display text-lg font-bold", onDark ? "text-white" : "text-ink")}>
            {step.title}
          </h3>
          <p className={cn("mt-2 text-sm leading-relaxed", onDark ? "text-white/75" : "text-body")}>
            {step.description}
          </p>
          </>
        );

        if (reveal) {
          return (
            <Reveal as="li" key={step.title} index={index} className={stepClass}>
              {inner}
            </Reveal>
          );
        }
        return (
          <li key={step.title} className={stepClass}>
            {inner}
          </li>
        );
      })}
    </ol>
  );
}
