import { Router } from "express";
import { db } from "@workspace/db";
import { consultations, insertConsultationSchema } from "@workspace/db";
import { sendTelegramAlert } from "../lib/telegram";
import { desc, eq } from "drizzle-orm";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env["SESSION_SECRET"] ?? "nugunamoney-secret-2025";

function requireAuth(req: any, res: any, next: any) {
  const auth = req.headers["authorization"] as string | undefined;
  if (!auth?.startsWith("Bearer ")) { res.status(401).json({ error: "인증이 필요합니다." }); return; }
  try { jwt.verify(auth.slice(7), JWT_SECRET); next(); }
  catch { res.status(401).json({ error: "유효하지 않은 토큰입니다." }); }
}

const router = Router();

router.post("/", async (req, res) => {
  const parsed = insertConsultationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "잘못된 요청입니다.", details: parsed.error.issues });
    return;
  }

  try {
    const [row] = await db.insert(consultations).values(parsed.data).returning();
    await sendTelegramAlert(row).catch((err) => {
      req.log.error({ err }, "Telegram alert failed");
    });
    res.status(201).json({ ok: true, id: row.id });
  } catch (err) {
    req.log.error({ err }, "Failed to insert consultation");
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

router.get("/", async (req, res) => {
  try {
    const rows = await db.select().from(consultations).orderBy(desc(consultations.createdAt));
    res.json(rows);
  } catch (err) {
    req.log.error({ err }, "Failed to fetch consultations");
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

router.delete("/:id", requireAuth, async (req, res) => {
  const id = parseInt(req.params["id"] ?? "", 10);
  if (isNaN(id)) {
    res.status(400).json({ error: "유효하지 않은 ID입니다." });
    return;
  }
  try {
    const [deleted] = await db.delete(consultations).where(eq(consultations.id, id)).returning();
    if (!deleted) {
      res.status(404).json({ error: "항목을 찾을 수 없습니다." });
      return;
    }
    res.json({ ok: true });
  } catch (err) {
    req.log.error({ err }, "Failed to delete consultation");
    res.status(500).json({ error: "서버 오류가 발생했습니다." });
  }
});

export default router;
