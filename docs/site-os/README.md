# Freedom HR Solutions Site OS Build Documentation

This folder stores client-specific Site OS documentation for the Freedom HR Solutions website rebuild.

## Source of Truth

Site OS Master remains the workflow, prompt, checklist, schema, routing, and operating system source of truth.

Master repo: https://github.com/SedrickHarris/site-os-master.git

This client repo stores only project-specific inputs, outputs, QA reports, changelog entries, and implementation notes. Do not copy the full Site OS Master prompt system into this repo unless explicitly approved.

## Client Project

- Client: Freedom HR Solutions
- Project owner: Sedrick Harris, Sirius Systems
- Local folder: C:\Users\Welcome\Desktop\client-sites\freedom-hr-solutions-site
- GitHub repo: https://github.com/SedrickHarris/freedom-hr-solutions-site.git

## Folder Structure

- `inputs/` — project brief, brand notes, build requirements, and unresolved items
- `outputs/` — strategy and planning outputs
- `qa/` — QA reports and launch readiness checks
- `changelog/` — build history and major decisions
- `claude-project/` — strategy artifacts (keyword research, page briefs, SEO, AEO, schema, build prompts)

## Critical Build Requirement

This is a static Next.js export for Cloudflare Pages. `npm run build` must generate an `/out` folder.

Cloudflare Pages settings: build command `npm run build`, output directory `out`, root `/`.

See `inputs/unresolved-items.md` for outstanding launch blockers.
