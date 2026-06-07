import { Router } from "express";
import { db } from "@workspace/db";
import { consultations, insertConsultationSchema } from "@workspace/db";
import { sendTelegramAlert } from "../lib/telegram";
import { desc } from "drizzle-orm";

const router = Router();

router.post("/", async (req, res) => {
  const parsed = insertConsultationSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ error: "잘못된 요청입니다.", details: parsed.error.issues });
    return;
  }

  try {
    const [row] = await db.insert(consultations).values(parsed.data).returning();
    await sendTelegramAlert(row).catch(() => {});
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

export default router;
