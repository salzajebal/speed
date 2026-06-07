---
name: 누구나머니 project setup
description: Key architectural decisions and gotchas for the 누구나머니 loan consultation landing page project
---

## Architecture

- Frontend: React+Vite at `artifacts/nugunamoney` — uses inline styles (matching original site), NOT Tailwind, with SUIT Variable font
- API: Express 5 at `artifacts/api-server` — JWT auth with SESSION_SECRET env, admin password hardcoded as "admin123"
- DB: PostgreSQL + Drizzle at `lib/db` — tables: `consultations`, `settings`
- Settings table stores Telegram bot token + chat_id; persists across redeployments

## Why inline styles on frontend
Original site (today-loan.net) uses CSS variables in plain CSS. To match that precision without fighting Tailwind purging, inline styles were used for the Home page. Admin page uses Tailwind dark theme.

## Telegram detection
`detectTelegramChats(token)` calls `getUpdates` — bot must have received at least one message from the target chat first, otherwise no chats appear.

## DB schema changes workflow
Always run `pnpm --filter @workspace/db run push` then restart the api-server workflow after schema changes.
