import Image from "next/image";
import { CardShell, CardArrow } from "@/components/cards/CardShell";
import { Badge } from "@/components/ui/Badge";

interface LocationCardProps {
  title: string;
  summary: string;
  href: string;
  regionLabel?: string;
  /** Opt-in image placeholder at the top of the card (off by default). */
  withImagePlaceholder?: boolean;
  /** Real location image. When omitted, the placeholder background shows. */
  image?: {
    src: string;
    alt: string;
  };
}

export function LocationCard({ title, summary, href, regionLabel, withImagePlaceholder, image }: LocationCardProps) {
  return (
    <CardShell href={href}>
      {withImagePlaceholder && (
        <div
          aria-hidden={!image}
          className="relative mb-5 aspect-[7/4] w-full overflow-hidden rounded-lg bg-brand-50"
        >
          {image ? (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          ) : null}
        </div>
      )}
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">
          {title}
        </h3>
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="shrink-0 text-brand-500"
        >
          <path
            d="M12 21s-7-5.2-7-11a7 7 0 1114 0c0 5.8-7 11-7 11z"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="12" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </div>
      {regionLabel && (
        <Badge tone="muted" className="mt-2 self-start">
          {regionLabel}
        </Badge>
      )}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-body">{summary}</p>
      <CardArrow label="View location" />
    </CardShell>
  );
}
