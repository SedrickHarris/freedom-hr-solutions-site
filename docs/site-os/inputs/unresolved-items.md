# Unresolved Items

These items use placeholder values in the build and must be confirmed before production launch. Do not consider launch-ready until the critical blockers are resolved.

Format: Item | Status | Needed from | Impact | Can build continue? | Resolution notes

## Critical launch blockers

- **Phone number** | AWAITING CLIENT CONFIRMATION | Client | Footer, contact page, schema | Yes | Placeholder `(702) 555-0123` (reserved 555 range) in `src/data/site.ts`. Replace `phone` and `phoneHref`.
- **Email address** | AWAITING CLIENT CONFIRMATION | Client | Footer, contact page, schema | Yes | Placeholder `info@freedomhrsolutions.com` in `src/data/site.ts`. Confirm the real inbox.
- **Public address decision** | AWAITING CLIENT CONFIRMATION | Client | LocalBusiness schema | Yes | Currently using headquarters language only (Las Vegas, NV). If a public street address is approved, add LocalBusiness schema on the Las Vegas page.
- **Form endpoint** | AWAITING INFRASTRUCTURE | Client / Sirius | Lead capture | Yes | Forms are front-end only. Set `NEXT_PUBLIC_LEAD_ENDPOINT` to a webhook/GoHighLevel URL to activate submissions. Until then, submissions route to `/thank-you/` without delivering a lead.
- **Production domain** | AWAITING CLIENT CONFIRMATION | Client | Canonicals, sitemap, schema | Yes | Using `https://www.freedomhrsolutions.com` in `src/data/site.ts`. Confirm www vs root and keep consistent.
- **Cloudflare project settings** | AWAITING INFRASTRUCTURE | Sirius | Deployment | Yes | Build command `npm run build`, output directory `out`, root `/`.
- **Approved privacy policy** | AWAITING APPROVAL | Client | Legal | Yes | A starting privacy notice exists at `/privacy-policy/`. Replace with client-approved legal language before launch.
- **Approved business social links** | AWAITING APPROVAL | Client | Organization schema | Yes | Organization `sameAs` is empty. Add official business profiles to `site.social` when available.
- **Approved logo asset** | AWAITING CLIENT CONFIRMATION | Client | Header, footer, OG image | Yes | Using an SVG placeholder wordmark in `src/components/layout/Logo.tsx`. Drop the real logo into `public/images/brand/freedom-hr-solutions-logo.webp` and wire it in.
- **Exact brand hex codes** | AWAITING CLIENT CONFIRMATION | Client / current site | Visual fidelity | Yes | Tailwind theme in `src/app/globals.css` uses brand-aligned red / white / blue / navy / gray placeholders. Confirm exact values from the current site, logo, or stylesheet.

## Founder profile

- **Soleil Kline Facebook link** | AWAITING APPROVAL | Client | Person schema | Yes | LinkedIn is shown on the About page and in Person schema. Facebook is kept in `site.founder.facebook` for reference only and is NOT displayed or in schema until approved.

## Resolved / decided

- **Service hub vs service slug collision** (`hr-technology-automation`) | RESOLVED | Build | Routing | n/a | The slug is treated as the service category HUB. The duplicate service entry is excluded from self-linking. Confirm this is the intended treatment.
- **CTA primary offer** | RESOLVED (default) | Build | Conversion | n/a | Using "Request HR MRI Assessment" sitewide per brief. Client may prefer existing "Get Started Today" / "Request a Free Consultation" language.
