import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SchemaScript } from "@/components/seo/SchemaScript";
import { breadcrumbSchema } from "@/lib/schema";

export interface Crumb {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

/**
 * Visible breadcrumb trail plus matching BreadcrumbList schema.
 * The final item is rendered as the current page (not a link).
 */
export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-border-soft bg-muted/60">
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-text">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="font-medium text-ink">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className="transition-colors hover:text-brand-700"
                    >
                      {item.name}
                    </Link>
                    <span aria-hidden className="text-border">
                      /
                    </span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
      <SchemaScript schema={breadcrumbSchema(items)} />
    </nav>
  );
}
