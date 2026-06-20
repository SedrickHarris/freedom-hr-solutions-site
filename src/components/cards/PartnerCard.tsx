import { CardShell, CardArrow } from "@/components/cards/CardShell";

interface PartnerCardProps {
  name: string;
  category: string;
  summary: string;
  href: string;
}

export function PartnerCard({ name, category, summary, href }: PartnerCardProps) {
  return (
    <CardShell href={href}>
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 font-display text-base font-extrabold text-brand-700"
          aria-hidden
        >
          {name.charAt(0)}
        </span>
        <div>
          <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">
            {name}
          </h3>
          <p className="text-xs font-medium uppercase tracking-wide text-muted-text">{category}</p>
        </div>
      </div>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-body">{summary}</p>
      <CardArrow label="View support" />
    </CardShell>
  );
}
