import Image from "next/image";
import { CardShell, CardArrow } from "@/components/cards/CardShell";
import { Badge } from "@/components/ui/Badge";

interface ServiceCardProps {
  title: string;
  summary: string;
  href: string;
  category?: string;
  /** Opt-in image placeholder at the top of the card (off by default). */
  withImagePlaceholder?: boolean;
  /** Real category image. When omitted, the placeholder background shows. */
  image?: {
    src: string;
    alt: string;
  };
}

export function ServiceCard({ title, summary, href, category, withImagePlaceholder, image }: ServiceCardProps) {
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
