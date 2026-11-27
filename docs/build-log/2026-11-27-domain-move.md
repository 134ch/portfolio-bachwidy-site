---
title: "27 Nov 2026: Move to docs.bachwidy.site"
sidebar_label: "27 Nov 2026: Domain move"
sidebar_position: 3
---

## Goal

Move the live site from `portfolio.bachwidy.site` to `docs.bachwidy.site`. See [ADR-0003](../adr/0003-domain.md) for why.

## What was done

1. Checked that `docs.bachwidy.site` had no DNS record, using Google's public DNS API (`dns.google/resolve`). The check was done through the API, not by opening the address in a browser. Opening it before the record existed is what got a "not found" answer stuck in the local DNS cache during the first deploy.
2. Added `docs.bachwidy.site` as a custom domain on the Worker, in **Workers & Pages > portfolio-bachwidy-site > Domains > Add Domain**.
3. Removed `portfolio.bachwidy.site` from the same page.
4. Changed `url` in `docusaurus.config.ts` and the address in `README.md`.
5. Wrote ADR-0003.

![The Add domain dialog with the subdomain docs on bachwidy.site, enabled for Production](/img/build-log/2026-11-27-add-docs-domain.png)

![Custom domains after the move: only docs.bachwidy.site remains](/img/build-log/2026-11-27-domains-after-move.png)

## Decisions

- No redirect from the old address. Nothing links to it yet.
- The repository and Worker names stay `portfolio-bachwidy-site`.

## Result

- `docs.bachwidy.site` returned `200 OK` from 56 locations on check-host.net, including two in Jakarta, a few minutes after it was added. One check-host location reported its own server as down, which is a problem on their side.
- The certificate was issued without any manual step.
- `npm run build` passes with the new `url`.

## Next

Set up the Jira project, then Phase 1.
