import { CardShell, CardArrow } from "@/components/cards/CardShell";

interface AudienceCardProps {
  title: string;
  summary: string;
  href: string;
}

export function AudienceCard({ title, summary, href }: AudienceCardProps) {
  return (
    <CardShell href={href}>
      <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{summary}</p>
      <CardArrow label="See how we help" />
    </CardShell>
  );
}
