import { CardShell, CardArrow } from "@/components/cards/CardShell";
import { Badge } from "@/components/ui/Badge";

interface ServiceCardProps {
  title: string;
  summary: string;
  href: string;
  category?: string;
}

export function ServiceCard({ title, summary, href, category }: ServiceCardProps) {
  return (
    <CardShell href={href}>
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
