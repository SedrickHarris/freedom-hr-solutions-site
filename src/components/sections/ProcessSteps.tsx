import type { ProcessStep } from "@/types";
import { cn } from "@/lib/utils";

interface ProcessStepsProps {
  steps: ProcessStep[];
  tone?: "default" | "onDark";
}

export function ProcessSteps({ steps, tone = "default" }: ProcessStepsProps) {
  const onDark = tone === "onDark";
  return (
    <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "relative rounded-card border p-6",
            onDark ? "border-white/10 bg-white/5" : "border-border bg-white shadow-sm shadow-ink/[0.03]",
          )}
        >
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
        </li>
      ))}
    </ol>
  );
}
