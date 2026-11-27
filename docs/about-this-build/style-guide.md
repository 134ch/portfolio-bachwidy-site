---
title: Style guide (v0)
sidebar_position: 2
---

This is version 0 of the rules the writing on this site follows. In Phase 1 it becomes automated checks, so every rule below should be something a tool can test or a reviewer can verify.

## Voice

- Write plain, direct sentences. A slightly rough sentence is better than a polished slogan.
- Give concrete proof: say what was built, tested or measured.
- Do not use em dashes. This is a permanent rule.
- Do not open with filler or generic greetings.
- Avoid stock phrases such as "game-changer", "unleash", "synergy", "delve into" and "testament to".
- Avoid transition lines such as "Here's what matters." and the "not X but Y" pattern.
- Avoid stacks of sentence fragments.
- Do not use "honest" as a qualifier.
- Do not invent urgency.

## Structure

- Every page has one H1, set by the page title.
- The first sentence of a page and of each section states its point.
- Headings use sentence case.
- Keep paragraphs to three sentences or fewer.
- Each page belongs to one content type: tutorial, how-to guide, reference, explanation, case study, decision record or build log entry. Do not mix types on one page.

## Wording

- Use present tense and active voice.
- Address the reader as "you" in tutorials and how-to guides.
- Define a term when it first appears.
- Use numerals for numbers.
- Write link text that names the target. Do not write "click here".

## Markdown rules

- Use plain CommonMark plus GitHub-style alerts. Do not use MDX components in content pages.
- Put a language on every code fence.
- Use relative links between pages.
- Give every image alt text.
- Use a table when you compare items across the same attributes.

Alerts use the GitHub syntax:

```markdown
> [!NOTE]
> A note that adds context.
```

It renders on this site as:

> [!NOTE]
> A note that adds context.

## Technical conventions

- Put commands, file names and code in backticks.
- Write UI labels in bold.
- Write placeholders in capitals inside angle brackets, for example `<API_KEY>`.
- Give an as-of date for any fact that can change, such as a price or a version.

## Sources and claims

- Link the source of every looked-up fact.
- Claim a tool as a skill only after it has produced evidence. The skills ledger in the plan tracks this.

## Open items for Phase 1

- Choose one base style for Vale: Microsoft or Google.
- Turn the voice rules above into custom Vale rules.
