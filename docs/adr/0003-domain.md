---
title: "ADR-0003: Serve the site from docs.bachwidy.site"
sidebar_label: "ADR-0003: Domain"
sidebar_position: 4
---

**Status:** Accepted. **Date:** 27 Nov 2026. **Decided by:** Bach.

## Context

The first deploy used `portfolio.bachwidy.site`. After it went live, Bach decided the site should be `docs.bachwidy.site`. The site is built as documentation: decision records, a build log, a style guide, and later an API reference and an MCP server. A reader who sees `docs.` expects that, and the name matches the work being shown.

Nobody had linked to the old address yet, so this was the cheapest moment to change it.

## Options considered

| Option | For | Against |
| --- | --- | --- |
| Keep `portfolio.bachwidy.site` | No work | Name does not match a docs-as-code site |
| Move to `docs.bachwidy.site`, remove the old domain | Clear name; one address only | Old address stops working |
| Move, and redirect the old domain | Old links keep working | Extra redirect rule to maintain, for links that do not exist |

## Decision

Serve the site from `docs.bachwidy.site` and remove `portfolio.bachwidy.site` from the Worker. No redirect, because no links to the old address exist.

The repository and the Worker keep the name `portfolio-bachwidy-site`. Renaming them would change URLs, build settings and history for no gain to readers.

## Consequences

- `url` in `docusaurus.config.ts` is `https://docs.bachwidy.site`.
- Earlier build log entries still mention `portfolio.bachwidy.site`. They are records of what happened then, so they are not rewritten.
- If links to the old address appear later, a redirect can be added then.
