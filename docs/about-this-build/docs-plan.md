---
title: Documentation plan
sidebar_position: 1
---

This plan says who the site is for, what it covers and how it is organised. It is the first document a technical writer produces for a doc set, and it is revised when the goals change.

## Purpose

The site shows how a technical writer creates documentation from scratch, using its own build as the subject. It also holds case studies, articles, services and contact details for Bachtiar Widyantoro.

## Audience

| Reader | What they need | Where they land |
| --- | --- | --- |
| Hiring managers and recruiters for remote direct-hire roles | Quick proof of writing samples, process and tools | Case studies, build log |
| B2B clients | Services, past results, how to start | Services, case studies |
| Developers and AI agents | A documented read-only API and MCP server | API and MCP sections (Phases 3 and 4) |
| The author | A record of what was built and why | Build log, decision records |

## Goals

- Keep one source of truth: Markdown files in Git.
- Document every step of the build, as it happens.
- Use each tool for real before claiming it as a skill.
- Serve the same content to the site, the API and the MCP server.

## Out of scope for now

- The Euler help-center rebuild at `/euler`. It starts after Phase 2.
- Paid tools. Every piece runs on free tiers.
- Two-way sync between Git and Confluence.

## Content types

The site follows the Diátaxis split of four documentation types, plus three types specific to this project.

| Type | Purpose | Example |
| --- | --- | --- |
| Tutorial | Teach by doing | API quickstart |
| How-to guide | Reach one goal | Connect an MCP client |
| Reference | Look up facts | Endpoint reference |
| Explanation | Give context and reasons | What MCP is and why it exists |
| Case study | Show a result with evidence | Markdown converter test |
| Decision record | Record one decision | Why Docusaurus |
| Build log entry | Record one work session | Phase 0 foundations |

## Planned structure

| Section | Arrives in |
| --- | --- |
| Start here | Phase 0 |
| About this build (plan, style guide, inventory) | Phase 0 |
| Decision records and build log | Phase 0 |
| Case studies and articles | Phase 2 |
| API | Phase 3 |
| MCP | Phase 4 |

## Constraints

- Budget is $0.
- Content is plain Markdown. Pages avoid MDX components so they stay portable.
- The repository starts private. It becomes public when Bach decides, because Git history is permanent.

## How the plan is kept current

- Each phase ends with a check of this plan.
- A change to goals, audience or structure gets a decision record.
- The handover document in Claude Docs records status between sessions.

## Open questions

- Success measures beyond the phase checks. Bach sets these.
- Which case studies come first in Phase 2.
- Whether the site needs a services page at launch or after the first case studies.
