import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  /** Background treatment. */
  tone?: "default" | "muted" | "brand" | "ink";
  /** Vertical padding scale. */
  spacing?: "default" | "compact" | "loose";
  containerSize?: "default" | "narrow" | "wide";
  id?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  tone = "default",
  spacing = "default",
  containerSize = "default",
  id,
}: SectionProps) {
  const toneClass =
    tone === "muted"
      ? "bg-muted"
      : tone === "brand"
        ? "bg-brand-gradient text-white"
        : tone === "ink"
          ? "bg-ink text-white"
          : "bg-surface";

  const spacingClass =
    spacing === "compact"
      ? "py-12 sm:py-16"
      : spacing === "loose"
        ? "py-20 sm:py-28"
        : "py-16 sm:py-20";

  return (
    <section id={id} className={cn(toneClass, spacingClass, className)}>
      <Container size={containerSize} className={containerClassName}>
        {children}
      </Container>
    </section>
  );
}
