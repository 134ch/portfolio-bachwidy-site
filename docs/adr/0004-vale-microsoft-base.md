---
title: "ADR-0004: Use the Microsoft style as the Vale base"
sidebar_label: "ADR-0004: Vale base style"
sidebar_position: 5
---

**Status:** Accepted. **Date:** 27 Nov 2026. **Decided by:** Claude, as an open item in the style guide. Bach can reverse it.

## Context

Vale needs a base style. The style guide left the choice open between the Microsoft and Google styles. Both are maintained Vale packages based on published writing guides.

## Options considered

| Option | For | Against |
| --- | --- | --- |
| Microsoft | Plain, direct tone close to the style guide's voice rules; widely used in docs teams | US date format and contractions by default, which the guide does not follow yet |
| Google | Common in developer docs; strict on headings and lists | Also US conventions; more rules that need tuning for a portfolio |

## Decision

Use Microsoft as the base, with house rules on top and three Microsoft rules adjusted: date format off, contractions and quote punctuation lowered to suggestions.

Running Microsoft over the existing pages gave 48 errors before tuning. Most came from the date format and contractions, which are house choices, not mistakes. After tuning and four real fixes, the count is 0 errors.

## Consequences

- Switching to Google is one line in `.vale.ini` (`Packages` and `BasedOnStyles`) plus retuning.
- Warnings and suggestions do not fail the check, so they need reading in each pull request.
