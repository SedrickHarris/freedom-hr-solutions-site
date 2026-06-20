import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  /** Heading level for correct document outline. Defaults to h2. */
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "default",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const onDark = tone === "onDark";
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl",
        className,
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-wide",
            onDark ? "text-brand-200" : "text-brand-600",
          )}
        >
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display font-bold",
          Tag === "h2" ? "text-3xl sm:text-[2.1rem]" : "text-2xl",
          onDark ? "text-white" : "text-ink",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-4 text-lg leading-relaxed", onDark ? "text-white/80" : "text-body")}>
          {description}
        </p>
      )}
    </div>
  );
}
