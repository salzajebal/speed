import { Router } from "express";
import { db } from "@workspace/db";
import { settings } from "@workspace/db";
import { eq } from "drizzle-orm";
import { detectTelegramChats } from "../lib/telegram";
import jwt from "jsonwebtoken";

const router = Router();
const ADMIN_PASSWORD = "admin123";
const JWT_SECRET = process.env["SESSION_SECRET"] ?? "nugunamoney-secret-2025";

function authMiddleware(req: any, res: any, next: any) {
  const auth = req.headers["authorization"] as string | undefined;
  if (!auth?.startsWith("Bearer ")) {
    res.status(401).json({ error: "인증이 필요합니다." });
    return;
  }
  try {
    jwt.verify(auth.slice(7), JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ error: "유효하지 않은 토큰입니다." });
  }
}

router.post("/login", (req, res) => {
  const { password } = req.body as { password?: string };
  if (password !== ADMIN_PASSWORD) {
    res.status(401).json({ error: "비밀번호가 올바르지 않습니다." });
    return;
  }
  const token = jwt.sign({ role: "admin" }, JWT_SECRET, { expiresIn: "24h" });
  res.json({ token });
});

router.get("/public/kakao-link", async (req, res) => {
  try {
    const [row] = await db.select().from(settings).where(eq(settings.key, "kakao_link"));
    res.json({ url: row?.value ?? "" });
  } catch (err) {
    res.json({ url: "" });
  }
});

router.get("/settings", authMiddleware, async (req, res) => {
  try {
    const rows = await db.select().from(settings);
    const map: Record<string, string | null> = {};
    for (const r of rows) map[r.key] = r.value;
    res.json({
      telegram_bot_token: map["telegram_bot_token"] ?? "",
      telegram_chat_id: map["telegram_chat_id"] ?? "",
      kakao_link: map["kakao_link"] ?? "",
    });
  } catch (err) {
    req.log.error({ err }, "Failed to fetch settings");
    res.status(500).json({ error: "서버 오류" });
  }
});

router.put("/settings", authMiddleware, async (req, res) => {
  const { telegram_bot_token, telegram_chat_id, kakao_link } = req.body as {
    telegram_bot_token?: string;
    telegram_chat_id?: string;
    kakao_link?: string;
  };
  try {
    const upsert = async (key: string, value: string) => {
      await db
        .insert(settings)
        .values({ key, value, updatedAt: new Date() })
        .onConflictDoUpdate({ target: settings.key, set: { value, updatedAt: new Date() } });
    };
    if (telegram_bot_token !== undefined) await upsert("telegram_bot_token", telegram_bot_token);
    if (telegram_chat_id !== undefined) await upsert("telegram_chat_id", telegram_chat_id);
    if (kakao_link !== undefined) await upsert("kakao_link", kakao_link);
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to update settings");
    res.status(500).json({ error: "서버 오류" });
  }
});

router.post("/telegram/detect-chats", authMiddleware, async (req, res) => {
  const { token } = req.body as { token?: string };
  if (!token) {
    res.status(400).json({ error: "봇 토큰이 필요합니다." });
    return;
  }
  try {
    const chats = await detectTelegramChats(token);
    res.json({ chats });
  } catch (err) {
    res.status(400).json({ error: "유효하지 않은 봇 토큰이거나 업데이트가 없습니다." });
  }
});

export default router;
