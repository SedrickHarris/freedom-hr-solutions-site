# Brand Notes

## Client Direction

The client wants to keep the branding and colors from the current Freedom HR Solutions website. This project is a strategic rebuild, not a rebrand.

## Preserve

- Current logo direction
- Current red, white, blue, navy, and gray color system
- Current professional HR consulting feel
- Current patriotic but restrained visual identity
- Current abstract textured background style where appropriate
- Current trust-focused business tone

## Improve

- Layout structure, navigation clarity, mobile experience
- SEO architecture, content hierarchy, schema and metadata
- CTA consistency and conversion flow
- Static export build quality and Cloudflare Pages deployment readiness

## Color Rule

Do not invent exact hex codes unless pulled from the current website, logo, stylesheet, or approved client assets. The current implementation uses brand-aligned placeholders (red CTAs, navy/blue accents, gray neutrals) defined in `src/app/globals.css`. Confirm exact values before launch.

## Implementation Notes (current state)

- Primary CTA color: brand red (`--color-red-*`)
- Trust / contrast: navy (`--color-ink`) and brand blue (`--color-brand-*`)
- Success / inclusion marks: navy/blue (no green)
- Fonts: Inter (body) + Plus Jakarta Sans (headings). Swap if the current site font is identified.
- Logo: SVG placeholder wordmark in `src/components/layout/Logo.tsx`. Replace with the real asset.

## Design Rule

The finished site should look like a cleaner, faster, more structured version of Freedom HR Solutions, not a new brand.
