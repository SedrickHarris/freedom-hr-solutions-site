type ClassValue = string | number | null | false | undefined;

/**
 * Lightweight className joiner. Filters out falsy values so conditional
 * classes stay readable without pulling in extra dependencies.
 */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}

/** Ensure a path keeps the site's trailing-slash convention. */
export function withTrailingSlash(path: string): string {
  if (path === "/" || path.startsWith("#") || path.startsWith("http")) return path;
  return path.endsWith("/") ? path : `${path}/`;
}

/** Title-case a slug for use as a readable label fallback. */
export function slugToTitle(slug: string): string {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
