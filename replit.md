# 누구나머니

대출 상담 랜딩 페이지 — 우주캐피탈대부의 상담 신청 접수 및 관리자 알림 시스템.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL`, `SESSION_SECRET`

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite (`artifacts/nugunamoney`) — SUIT Variable font, inline styles, wouter routing
- API: Express 5 (`artifacts/api-server`) — JWT auth, Telegram bot
- DB: PostgreSQL + Drizzle ORM (`lib/db`)
- Validation: Zod (`zod/v4`), `drizzle-zod`

## Where things live

- DB schema: `lib/db/src/schema/` — `consultations.ts`, `settings.ts`
- API routes: `artifacts/api-server/src/routes/` — `consultations.ts`, `admin.ts`
- Telegram helper: `artifacts/api-server/src/lib/telegram.ts`
- Frontend pages: `artifacts/nugunamoney/src/pages/` — `Home.tsx`, `Admin.tsx`
- Frontend components: `artifacts/nugunamoney/src/components/`

## Architecture decisions

- Admin auth: JWT signed with `SESSION_SECRET` env var, 24h expiry, stored in localStorage
- Telegram chat detection: calls `getUpdates` on the bot to find recent chat rooms
- Settings (Telegram token + chat ID) stored in `settings` PostgreSQL table → persists across redeployments
- No OpenAPI codegen used for this project — API calls done with raw fetch in the frontend
- All design uses inline styles (matching original site CSS pattern), not Tailwind classes

## Product

- Landing page: dark hero + orange accent (#ff6b2c) matching original today-loan.net structure
- 2-step consultation form: step 1 (name + phone), step 2 (age range + income type + amount + privacy agree)
- Form submissions saved to PostgreSQL, Telegram alert sent if bot is configured
- Admin page at `/admin` (password: `admin123`) — view submissions, configure Telegram bot

## User preferences

- Design matches https://today-loan.net structure but more premium
- Admin password: admin123
- Company: 우주캐피탈대부, 사업자번호: 738-95-01643, 대표: 강윤희·정충헌
- 주소: 충청북도 청주시 청원구 내덕동 788-115
- 대부업번호: 2023-충북청주-0011, 전화: 010-5807-7888

## Gotchas

- After adding new DB tables: run `pnpm --filter @workspace/db run push` before restarting api-server
- After changing api-server code: must restart the `artifacts/api-server: API Server` workflow
- Admin page uses Tailwind classes (bg-[#0f0f0f] etc.) but Home page uses inline styles — don't mix

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
