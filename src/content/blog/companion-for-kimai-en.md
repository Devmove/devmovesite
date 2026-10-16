---
title: "Building Companion for Kimai: a frictionless quick timer"
description: "How we turned Kimai time-tracking friction into a Quick Timer bar, a productive popup, and system-aware themes."
date: 2026-10-10
lang: en
tags: ["Kimai", "Browser extension", "Firefox", "Chrome", "JavaScript"]
project: "Companion for Kimai"
repo: "https://github.com/mblithium/companion-for-kimai"
---

Anyone who uses [Kimai](https://www.kimai.org/) daily knows the ritual: open the timesheet, hunt for the play button at the top, fill in customer, project, activity, description, tags... and hope you remember to stop the timer at the end.

**Companion for Kimai** was built to remove that friction. It is an unofficial extension for Chrome and Firefox that puts the essentials where your eyes already are: right above your records.

## The problem was navigation, not missing features

Kimai already does everything. The problem was reach. Starting a timer lived far from context, and resuming yesterday's work meant recreating the entry from scratch.

So we decided on:

- **Quick Timer above the records** — description with `Enter` to start, `Shift+Enter` for a line break.
- **Type-to-search** for customer, project, activity, and tags. `Enter` confirms, `Esc` reverts.
- **A “Now” widget** showing the running timer with live duration.
- **Entry grouping** with inline editing, without stopping the timer.

## A popup made for continuing, not just starting

The popup is not a shortcut to the website. It answers three quick questions:

1. What am I doing right now?
2. What was I doing earlier today?
3. What do I usually reuse?

That is why it lets you start timers, **continue today's work**, and **reuse recent entries** in two clicks. Keyboard shortcuts (`Alt+Shift+P/S/K`) cover starting the default timer, stopping, and opening the popup.

## Themes, privacy, and Manifest V3

Three decisions shaped the architecture:

- **7 themes including GNOME/Adwaita**, with light/dark following the system. Logged time should also feel visually comfortable.
- **API-key login, only on your device.** No trackers, no collection. Traffic stays strictly between the extension and your Kimai installation.
- **Manifest V3 with no background worker.** Everything runs in the popup, options page, and content scripts. Chrome requires `background.service_worker` while Firefox uses `background.scripts` — we keep both variants in sync, and a `check-pages` test ensures they differ only there.

For development, there is no compile step:

```sh
npm test          # functional tests
npm run check     # syntax, page integration, and contrast checks
npm run build     # checks + production ZIPs in dist/
```

`npm run build` produces `companion-for-kimai-chrome-<version>.zip` and `companion-for-kimai-firefox-<version>.zip`, each containing only files referenced by the manifest. If versions diverge or a file is missing, the build intentionally fails.

## What we learned

1. **Kimai defaults first, extension second.** We tested against the official demo (`demo.kimai.org`, Kimai 2.68.0) with a logged-in session before optimizing.
2. **Minimal permissions.** Only `storage` plus an optional host permission requested for the configured host. On Firefox, `cookies` to open Kimai in the same container; the Chrome build ships without it.
3. **CI that ships.** Pushes to `main`, PRs, and `v*` tags build both ZIPs as artifacts for 30 days. A `v*` tag must match `package.json` and creates a Release with changelog notes.

## Next steps

- Improve week grouping for people closing timesheets on Fridays.
- Sync theme preferences between popup and content script without reload.
- Document the AMO and Chrome Web Store publishing flow.

The code is open and auditable at [mblithium/companion-for-kimai](https://github.com/mblithium/companion-for-kimai). If you track hours in Kimai, try it and open an issue — bugs and ideas both help.
