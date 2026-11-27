---
title: "27 Nov 2026: Phase 1 CI checks"
sidebar_label: "27 Nov 2026: Phase 1 CI checks"
sidebar_position: 2
---

## Goal

Run the same checks a docs team runs on every pull request: the site builds, the Markdown is clean, the prose follows the style guide and external links work. The first deploy showed why: three Cloudflare builds failed on a problem that a build on every pull request would have caught before merge.

## What was done

1. Installed Vale 3.28.1, lychee 0.24.2 and markdownlint-cli2 0.23.2 locally, to tune the rules on the existing pages before CI enforces them.
2. Configured Vale with the Microsoft style as a base ([ADR-0004](../adr/0004-vale-microsoft-base.md)) and wrote four house rules from the style guide: no em dashes, link text that names its target, no stock phrases and no "honest" as a qualifier.
3. Configured markdownlint with the default rules, minus line length (prose is one paragraph per line) and inline HTML.
4. Configured lychee for external links only. Internal links are already checked by the Docusaurus build.
5. Wrote the workflow `.github/workflows/docs-checks.yml` with four jobs: build, Markdown lint, Vale and links.
6. Updated `CONTRIBUTING.md`, the pull request template and the style guide to point at the checks.

## Commands

```bash
pip install vale
vale sync
vale docs README.md CONTRIBUTING.md
npx markdownlint-cli2
lychee --config lychee.toml 'docs/**/*.md' README.md CONTRIBUTING.md
```

## Tuning Vale on the existing pages

The first Vale run on 13 files gave 48 errors, 7 warnings and 115 suggestions. Most errors were house choices that the Microsoft style treats as mistakes:

| Finding | Count | What was done |
| --- | --- | --- |
| Date format `27 Nov 2026` | 14 | Kept. The house writes day month year. Rule turned off |
| Contractions (`do not`, `it is`) | 15 | Not decided yet. Lowered to a suggestion |
| Punctuation inside quotes | 5 | Not decided yet. Lowered to a suggestion |
| `click here` in the style guide | 1 | The guide quotes the words it bans. Rule turned off around that line only |
| Heading with a lowercase word after a colon | 1 | Fixed the heading |
| `docusaurus` in image alt text | 1 | Fixed the alt text |
| `Widy` flagged as a spelling error | 1 | Added to the project vocabulary |

After tuning: 0 errors, 7 warnings, and the suggestions shown only when asked for.

## Decisions

- `.md` files are now parsed as plain CommonMark (`markdown.format: 'detect'` in `docusaurus.config.ts`). Docusaurus parses `.md` as MDX by default, so the HTML comments Vale uses broke the build with `Unexpected character !`. ADR-0001 already said the pages are plain Markdown; the config now enforces it. Admonitions still render.
- Only Vale errors fail the check. Warnings and suggestions show as annotations, so a new rule can start as a warning and be promoted once the pages comply.
- lychee accepts `403` and `429` responses, because some sites block automated checks or rate-limit them. A real dead link returns `404`.
- Action versions are pinned to major versions found on 27 Nov 2026: `actions/checkout@v7`, `actions/setup-node@v7`, `actions/setup-python@v7`, `DavidAnson/markdownlint-cli2-action@v25`, `lycheeverse/lychee-action@v2`.

## First CI run and its two failures

The first run on pull request 7 passed the build and Markdown lint, and failed Vale and lychee.

- **lychee found a real dead link.** The Vale documentation link added to `CONTRIBUTING.md` in this same pull request returned `404`. Vale's docs moved to `docs.vale.sh`. The link now points to the Markdown page there. The check did its job on its first run.
- **Vale failed without any Vale errors.** The log showed 0 findings at error level. The job used `errata-ai/vale-action`, which passes every finding to reviewdog to post as annotations. Vale reported 141 findings, mostly suggestions. GitHub allows 10 annotations per level per step, and reviewdog stopped with `Too many results (annotations) in diff`.

The fix for Vale: run the Vale command line directly in CI, the same command as a local run. One step prints warnings and never fails. A second step runs with `--minAlertLevel=error` and fails the job on errors. Annotations are gone, but the job now fails for the same reason it fails locally, and for no other.

A third failure showed up after the fix. Cloudflare now builds a preview of every pull request, and that build failed at the deploy step: `wrangler preview` needs a `previews` block in `wrangler.jsonc`. The site itself built fine. The log printed the exact fix, an empty `"previews": {}` block, which was added.

![Cloudflare preview build log: the Wrangler configuration is missing a previews block](/img/build-log/2026-11-27-wrangler-previews-error.png)

Lesson: when a check fails, find the line that says why before changing the rules. Loosening Vale would have hidden a problem that was not in the prose at all.

## Result

- All five checks pass on pull request 7: the four GitHub Actions jobs and the Cloudflare preview build.
- Three of the first failures were in the setup, not in the content: the Vale annotation limit, a dead link added in the same pull request, and the missing `previews` block. Each one is now caught or fixed.
- Vale: 0 errors, 7 warnings across 15 files. The warnings stay visible in the job log.

![Pull request 7 merge box: all five checks passed](/img/build-log/2026-11-27-pr7-checks-passed.png)

## Next

- Turn on branch protection so `main` only accepts pull requests with passing checks. This changes repository settings, so it waits for Bach's go-ahead.
- Set up the Jira project once the Atlassian site is reachable.
- Brainstorm the site's content before Phase 2.
