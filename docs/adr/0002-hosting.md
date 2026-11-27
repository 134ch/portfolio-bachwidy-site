---
title: "ADR-0002: Host on Cloudflare, Pages or Workers static assets"
sidebar_label: "ADR-0002: Hosting"
sidebar_position: 3
---

**Status:** Proposed. **Date:** 27 Nov 2026. **Decided by:** Bach, pending.

## Context

The site, the read-only API (`/api/v1/*`) and the MCP server (`/mcp`) must all be served from `portfolio.bachwidy.site` at $0. Bach already hosts several sites on Cloudflare Pages. Both options below deploy the same Docusaurus build output, so this decision does not change the repository.

## Options considered

| Option | For | Against |
| --- | --- | --- |
| Cloudflare Pages plus a separate Worker | Familiar; already in use; keeps working | Two deployments; builds share the Pages pool |
| One Worker with static assets | One deployment for site, API and MCP; builds use the separate Workers Builds pool; Cloudflare directs new projects here | New setup to learn; migration work if moved later |

Free-tier facts as of 27 Nov 2026:

- Pages allows 500 builds per month on the Free plan.
- Workers Builds allows 3,000 build minutes per month on the Free plan.
- Static asset requests are unlimited. Dynamic requests (Workers or Pages Functions) share a limit of 100,000 requests per day.

The quota gain is on builds only. At daily-update volume the Pages build limit is unlikely to be reached, unless several Pages projects share it.

## Decision

Pending. Bach chooses.

## Consequences

- Either choice builds from the same `npm run build` output in the `build/` folder.
- The choice is recorded here once made, with the reason.

## Sources

- [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits)
- [Workers Builds limits and pricing](https://developers.cloudflare.com/workers/ci-cd/builds/limits-and-pricing/)
- [Migrate from Pages to Workers](https://developers.cloudflare.com/workers/static-assets/migrate-from-pages/)
