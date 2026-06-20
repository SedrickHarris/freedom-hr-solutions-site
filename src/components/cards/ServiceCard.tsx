import { CardShell, CardArrow } from "@/components/cards/CardShell";
import { Badge } from "@/components/ui/Badge";

interface ServiceCardProps {
  title: string;
  summary: string;
  href: string;
  category?: string;
  /** Opt-in image placeholder at the top of the card (off by default). */
  withImagePlaceholder?: boolean;
}

export function ServiceCard({ title, summary, href, category, withImagePlaceholder }: ServiceCardProps) {
  return (
    <CardShell href={href}>
      {withImagePlaceholder && (
        /* TODO: Replace with owner-supplied service category image */
        <div
          aria-hidden="true"
          className="mb-5 aspect-[16/10] w-full overflow-hidden rounded-lg bg-brand-50"
        />
      )}
      {category && (
        <Badge tone="muted" className="mb-3 self-start">
          {category}
        </Badge>
      )}
      <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{summary}</p>
      <CardArrow />
    </CardShell>
  );
}
