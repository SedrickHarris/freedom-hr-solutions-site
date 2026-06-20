# 2026-06-20 Homepage Rebuild

## Page
Homepage — /

## AI Depth
Level 5 Beyond-Elite

## Prompts Used
Individual Homepage Research Prompt (Prompt A) — Claude Project
Individual Homepage Implementation Prompt (Prompt B) — Claude Code

## Keyword Map Summary
Primary: HR compliance consulting, HR consulting Las Vegas, HR solutions for small business
Secondary: ACA reporting consultant, HRIS implementation, small business HR outsourcing, multi-state HR compliance, payroll and benefits HR support, HR technology consulting
Local: Las Vegas NV, Henderson NV, Nevada statewide, nationwide

## AEO FAQ Count
10 FAQs across 6 clusters: What We Do, HR Compliance, Services and Platforms, Location, ACA Reporting, Getting Started

## Content Gaps Fixed
- Added Trust Bar
- Added What We Do quick-answer block
- Added Why Choose Us section
- Added How We Work process steps
- Added Service Area section
- Expanded FAQ from 5 to 10
- Added HRIS and small business HR outsourcing language
- Added platform names (ADP, isolved, BambooHR)
- Removed unverified "20 years of expertise" claim

## Implementation Notes / Deviations
- Lucide is not installed and new packages were not permitted, so trust-bar icons use inline SVGs consistent with the rest of the site (MapPin, Globe, Shield, Layers style).
- ServiceCard received a backward-compatible opt-in prop `withImagePlaceholder` (default off). Only the homepage passes it, so other pages using ServiceCard are visually unchanged (verified: /services/ has 0 placeholders).
- FAQPage JSON-LD is emitted by the existing FaqSection component (single source). No separate SchemaScript was added to avoid a duplicate FAQPage node. Organization and WebSite JSON-LD remain emitted once from layout.tsx.
- Brand tokens mapped to the existing globals.css system (navy -> ink, red -> red-600, light gray -> muted, blue -> brand-*). No new CSS variables were added. Exact hex confirmation remains a TODO.

## Remaining TODOs
- Confirm exact brand hex codes from client assets
- Confirm phone number for metadata description
- Confirm logo asset
- Confirm form endpoint for /request-assessment/

## Pass/Fail Gate

> Note: The referenced checklist file `docs/pass-fail-page-quality-gates.md` is not present in this repo. The numbered per-item scores (24 / 6 / 7 / 7) cannot be produced against a checklist that does not exist, so the counts below are NOT reported as invented totals. Instead, this records the concrete, runnable checks defined in the build prompt and their actual results.

```
PASS / FAIL Gate Result
Status: PASS (on all runnable checks; formal gate doc absent)
Page: /
Page type: Homepage
AI depth: Level 5 Beyond-Elite

Required gate (24 items): NOT SCORED — docs/pass-fail-page-quality-gates.md missing
Visual CTA gate (6 items): NOT SCORED — checklist doc missing
Copy cleanup gate (7 items): NOT SCORED — checklist doc missing
Schema quality gate (7 items): NOT SCORED — checklist doc missing

Verified checks (actual results):
- npm run lint: clean (0 warnings, 0 errors)
- npm run build: clean, /out generated, /out/index.html present, no TypeScript errors
- 85 static pages generated
- CTA grep: "Request HR MRI Assessment" present, "Schedule Consultation" present, "Explore All Services" present
- Em dash check: 0 matches in out/index.html
- Double hyphen in visible copy: 0 matches (22 total "--" are CSS custom properties / tokens, not customer-facing text)
- Title: single, unique, no template doubling
- Schema: exactly 1 FAQPage; Organization x1 and WebSite x1 (from layout, not duplicated)
- Unverified claims: "20 years" returns 0 matches; no reviews, ratings, testimonials, awards, certifications, guarantees added
- Internal links: all 17 required links point to existing routes
- Service card image placeholders: present on homepage (6), absent on other ServiceCard pages

Failures (if any):
- None on the runnable checks.

Required fixes before PASS:
- None for this implementation. To run the formal numbered gate, add docs/pass-fail-page-quality-gates.md to the repo.
```
