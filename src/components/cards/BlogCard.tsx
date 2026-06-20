import { CardShell, CardArrow } from "@/components/cards/CardShell";
import { Badge } from "@/components/ui/Badge";

interface BlogCardProps {
  title: string;
  excerpt: string;
  href: string;
  categoryLabel?: string;
}

export function BlogCard({ title, excerpt, href, categoryLabel }: BlogCardProps) {
  return (
    <CardShell href={href}>
      {categoryLabel && (
        <Badge tone="brand" className="mb-3 self-start">
          {categoryLabel}
        </Badge>
      )}
      <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{excerpt}</p>
      <CardArrow label="Read article" />
    </CardShell>
  );
}
