import Link from "next/link";
import type { PageRef } from "@/types";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/sections/SectionHeading";
import { cn } from "@/lib/utils";

interface RelatedPagesProps {
  title: string;
  description?: string;
  eyebrow?: string;
  items: PageRef[];
  columns?: 2 | 3;
  tone?: "default" | "muted";
}

export function RelatedPages({
  title,
  description,
  eyebrow,
  items,
  columns = 3,
  tone = "default",
}: RelatedPagesProps) {
  if (items.length === 0) return null;
  return (
    <Section tone={tone === "muted" ? "muted" : "default"}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div
        className={cn(
          "mt-10 grid gap-5",
          columns === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-card border border-border bg-white p-6 shadow-sm shadow-ink/[0.03] transition-all hover:border-brand-200 hover:shadow-md hover:shadow-ink/5"
          >
            <h3 className="font-display text-lg font-bold text-ink transition-colors group-hover:text-brand-700">
              {item.title}
            </h3>
            {item.description && (
              <p className="mt-2 flex-1 text-sm leading-relaxed text-body">{item.description}</p>
            )}
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700">
              Learn more
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
