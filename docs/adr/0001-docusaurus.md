---
title: "ADR-0001: Build the site with Docusaurus"
sidebar_label: "ADR-0001: Docusaurus"
sidebar_position: 2
---

**Status:** Accepted. **Date:** 27 Nov 2026. **Decided by:** Bach.

## Context

The site needs documentation pages, a blog for articles, versioned API reference pages and an OpenAPI reference. It must run on free tiers and stay portable, because the portfolio is meant to last for years and the tool market keeps changing.

Job-market research on 1,003 technical writer postings showed no static site generator with meaningful demand. Docusaurus had 7 mentions and MkDocs 8, which is sampling noise. The choice is therefore based on functional fit, not on demand.

## Options considered

| Option | For | Against |
| --- | --- | --- |
| Docusaurus 3.10 | Built-in blog and versioning; OpenAPI plugin; React and JavaScript | MDX makes content less portable; 3.10 is the last v3 release |
| Astro Starlight | Light and fast; blog and OpenAPI exist as community plugins | No built-in versioning, as far as we know; more parts to assemble |
| VitePress | Minimal and fast; an OpenAPI plugin exists | No built-in blog or versioning, as far as we know |
| MkDocs with Material | Simple Markdown workflow | Material for MkDocs support was announced to end on 5 Nov 2026; the successor, Zensical, was still reaching feature parity |
| Zensical | Reads existing `mkdocs.yml`; from the Material team | Young; plugin parity was incomplete at its announcement |

## Decision

Use Docusaurus 3.10.1 with TypeScript configuration. Turn on the `future.v4` flag now to prepare for Docusaurus v4.

## Consequences

- Pages are written in plain Markdown with GitHub-style alerts, not MDX components. This keeps content portable to Starlight or another generator, and keeps it compatible with a Confluence sync.
- A plugin converts GitHub alerts into Docusaurus admonitions.
- Docusaurus v4 will need a migration. The future flag reduces the work.
- Starlight is the fallback if the Phase 5 Confluence test shows Docusaurus content cannot be synced cleanly.

## Sources

- [Docusaurus 3.10 release notes](https://docusaurus.io/blog/releases/3.10)
- [Material for MkDocs maintenance notice](https://github.com/squidfunk/mkdocs-material/issues/8523)
- [Zensical roadmap](https://zensical.org/about/roadmap/)
- [Starlight plugins and integrations](https://starlight.astro.build/resources/plugins)
