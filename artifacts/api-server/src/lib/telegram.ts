import { db } from "@workspace/db";
import { settings } from "@workspace/db";
import { eq } from "drizzle-orm";
import type { Consultation } from "@workspace/db";

async function getSetting(key: string): Promise<string | null> {
  try {
    const [row] = await db.select().from(settings).where(eq(settings.key, key));
    return row?.value ?? null;
  } catch {
    return null;
  }
}

export async function sendTelegramAlert(c: Consultation): Promise<void> {
  const token = await getSetting("telegram_bot_token");
  const chatId = await getSetting("telegram_chat_id");
  if (!token || !chatId) return;

  const text =
    `📋 *새 상담 신청*\n` +
    `━━━━━━━━━━━━━━\n` +
    `👤 성함: ${c.name}\n` +
    `📞 연락처: ${c.phone}\n` +
    (c.ageRange ? `🗓 연령대: ${c.ageRange}\n` : "") +
    (c.incomeType ? `💼 소득유형: ${c.incomeType}\n` : "") +
    (c.amount ? `💰 희망금액: ${c.amount}\n` : "") +
    `⏰ 신청시각: ${new Date(c.createdAt).toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })}`;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const resp = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" }),
  });
  if (!resp.ok) {
    const body = await resp.text();
    throw new Error(`Telegram API error: ${body}`);
  }
}

export async function detectTelegramChats(token: string): Promise<
  { id: number; title: string; type: string }[]
> {
  const url = `https://api.telegram.org/bot${token}/getUpdates?timeout=0&limit=100`;
  const resp = await fetch(url);
  if (!resp.ok) throw new Error("Invalid bot token");
  const data = (await resp.json()) as {
    ok: boolean;
    result: {
      message?: { chat: { id: number; title?: string; first_name?: string; type: string } };
      channel_post?: { chat: { id: number; title?: string; type: string } };
    }[];
  };
  if (!data.ok) throw new Error("Bot token error");

  const seen = new Map<number, { id: number; title: string; type: string }>();
  for (const update of data.result) {
    const chat = update.message?.chat ?? update.channel_post?.chat;
    if (chat && !seen.has(chat.id)) {
      seen.set(chat.id, {
        id: chat.id,
        title: chat.title ?? chat.first_name ?? String(chat.id),
        type: chat.type,
      });
    }
  }
  return [...seen.values()];
}
