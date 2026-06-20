import { Badge } from "@/components/ui/Badge";

interface ResourceCardProps {
  title: string;
  description: string;
  /** Optional href. When omitted, the card is shown as upcoming. */
  href?: string;
  status?: string;
}

export function ResourceCard({ title, description, href, status }: ResourceCardProps) {
  const inner = (
    <>
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        {status && (
          <Badge tone="muted" className="shrink-0">
            {status}
          </Badge>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-body">{description}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="group flex h-full flex-col rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03] transition-all hover:border-brand-200 hover:shadow-md hover:shadow-ink/5"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex h-full flex-col rounded-card border border-dashed border-border bg-muted/50 p-6">
      {inner}
    </div>
  );
}
