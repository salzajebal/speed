import { useState, useEffect } from "react";

const API = import.meta.env.BASE_URL.replace(/\/$/, "").replace(/^\/[^/]+/, "") || "";
const BASE = `${API}/api`;

type Consultation = {
  id: number;
  name: string;
  phone: string;
  ageRange: string | null;
  incomeType: string | null;
  amount: string | null;
  createdAt: string;
};

type TelegramChat = { id: number; title: string; type: string };

function getToken() {
  return localStorage.getItem("admin_token") ?? "";
}
function setToken(t: string) {
  localStorage.setItem("admin_token", t);
}

export default function Admin() {
  const [token, setTokenState] = useState(getToken());
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [tab, setTab] = useState<"list" | "telegram">("list");
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [loading, setLoading] = useState(false);

  const [botToken, setBotToken] = useState("");
  const [chatId, setChatId] = useState("");
  const [chats, setChats] = useState<TelegramChat[]>([]);
  const [detecting, setDetecting] = useState(false);
  const [saving, setSaving] = useState(false);
  const [settingsMsg, setSettingsMsg] = useState("");
  const [detectError, setDetectError] = useState("");

  const isLoggedIn = !!token;

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch(`${BASE}/admin/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      const { token: t } = await res.json();
      setToken(t);
      setTokenState(t);
    } else {
      setLoginError("비밀번호가 올바르지 않습니다.");
    }
  }

  function logout() {
    localStorage.removeItem("admin_token");
    setTokenState("");
  }

  async function fetchConsultations() {
    setLoading(true);
    const res = await fetch(`${BASE}/consultations`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      setConsultations(await res.json());
    } else if (res.status === 401) {
      logout();
    }
    setLoading(false);
  }

  async function fetchSettings() {
    const res = await fetch(`${BASE}/admin/settings`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const data = await res.json();
      setBotToken(data.telegram_bot_token ?? "");
      setChatId(data.telegram_chat_id ?? "");
    }
  }

  useEffect(() => {
    if (isLoggedIn) {
      fetchConsultations();
      fetchSettings();
    }
  }, [isLoggedIn]);

  async function detectChats() {
    setDetecting(true);
    setDetectError("");
    setChats([]);
    const res = await fetch(`${BASE}/admin/telegram/detect-chats`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ token: botToken }),
    });
    const data = await res.json();
    if (res.ok) {
      if (data.chats.length === 0) {
        setDetectError("채팅방을 찾을 수 없습니다. 봇에게 메시지를 먼저 보내주세요.");
      }
      setChats(data.chats);
    } else {
      setDetectError(data.error ?? "오류가 발생했습니다.");
    }
    setDetecting(false);
  }

  async function saveSettings(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setSettingsMsg("");
    const res = await fetch(`${BASE}/admin/settings`, {
      method: "PUT",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify({ telegram_bot_token: botToken, telegram_chat_id: chatId }),
    });
    setSaving(false);
    if (res.ok) {
      setSettingsMsg("저장되었습니다.");
      setTimeout(() => setSettingsMsg(""), 3000);
    } else {
      setSettingsMsg("저장에 실패했습니다.");
    }
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center" style={{ fontFamily: "'SUIT Variable','SUIT',sans-serif" }}>
        <div className="bg-[#1a1a1a] border border-white/10 rounded-2xl p-10 w-full max-w-sm shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-[#ff6b2c] text-3xl font-black tracking-tight mb-1">누구나머니</div>
            <div className="text-white/40 text-sm">관리자 로그인</div>
          </div>
          <form onSubmit={login} className="flex flex-col gap-4">
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/25 outline-none focus:border-[#ff6b2c] transition-colors text-sm"
            />
            {loginError && <p className="text-red-400 text-sm">{loginError}</p>}
            <button
              type="submit"
              className="w-full bg-[#ff6b2c] hover:bg-[#e85a1e] text-white font-bold py-3 rounded-lg transition-colors text-sm"
            >
              로그인
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f]" style={{ fontFamily: "'SUIT Variable','SUIT',sans-serif" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#111] border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="text-white font-black text-lg">
            <span className="text-[#ff6b2c]">누구나머니</span> 관리자
          </span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => { setTab("list"); fetchConsultations(); }}
              className={`text-sm font-semibold px-3 py-1.5 rounded-md transition-colors ${tab === "list" ? "bg-[#ff6b2c] text-white" : "text-white/50 hover:text-white"}`}
            >
              상담 신청 목록
            </button>
            <button
              onClick={() => setTab("telegram")}
              className={`text-sm font-semibold px-3 py-1.5 rounded-md transition-colors ${tab === "telegram" ? "bg-[#ff6b2c] text-white" : "text-white/50 hover:text-white"}`}
            >
              텔레그램 설정
            </button>
            <button onClick={logout} className="text-white/30 hover:text-white/60 text-sm transition-colors">
              로그아웃
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {tab === "list" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white text-xl font-bold">
                상담 신청 목록 <span className="text-white/40 text-base font-normal ml-1">({consultations.length}건)</span>
              </h1>
              <button
                onClick={fetchConsultations}
                className="text-sm text-white/50 hover:text-white border border-white/10 hover:border-white/20 px-3 py-1.5 rounded-md transition-colors"
              >
                새로고침
              </button>
            </div>

            {loading ? (
              <div className="text-white/40 text-center py-20">불러오는 중...</div>
            ) : consultations.length === 0 ? (
              <div className="text-white/40 text-center py-20">아직 상담 신청이 없습니다.</div>
            ) : (
              <div className="bg-[#1a1a1a] border border-white/5 rounded-xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/5">
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">번호</th>
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">성함</th>
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">연락처</th>
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">연령대</th>
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">소득유형</th>
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">희망금액</th>
                      <th className="text-left text-white/40 text-xs font-semibold px-5 py-3">신청일시</th>
                    </tr>
                  </thead>
                  <tbody>
                    {consultations.map((c, i) => (
                      <tr key={c.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                        <td className="px-5 py-3.5 text-white/30 text-sm">{consultations.length - i}</td>
                        <td className="px-5 py-3.5 text-white font-semibold text-sm">{c.name}</td>
                        <td className="px-5 py-3.5 text-[#ff6b2c] font-mono text-sm">{c.phone}</td>
                        <td className="px-5 py-3.5 text-white/60 text-sm">{c.ageRange ?? "—"}</td>
                        <td className="px-5 py-3.5 text-white/60 text-sm">{c.incomeType ?? "—"}</td>
                        <td className="px-5 py-3.5 text-white/60 text-sm">{c.amount ?? "—"}</td>
                        <td className="px-5 py-3.5 text-white/40 text-xs whitespace-nowrap">
                          {new Date(c.createdAt).toLocaleString("ko-KR")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {tab === "telegram" && (
          <div className="max-w-xl">
            <h1 className="text-white text-xl font-bold mb-6">텔레그램 알림 설정</h1>

            <div className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 mb-6">
              <h2 className="text-white/70 text-sm font-semibold mb-4">설정 방법</h2>
              <ol className="text-white/40 text-sm space-y-2 list-decimal list-inside leading-relaxed">
                <li>@BotFather에서 봇을 생성하고 토큰을 복사합니다</li>
                <li>봇을 알림받을 채팅방 또는 개인 채팅에 추가합니다</li>
                <li>채팅방에서 봇에게 메시지를 한 번 보냅니다</li>
                <li>아래에 토큰 입력 후 [채팅방 자동 탐지]를 클릭합니다</li>
                <li>채팅방을 선택하고 저장합니다</li>
              </ol>
            </div>

            <form onSubmit={saveSettings} className="bg-[#1a1a1a] border border-white/5 rounded-xl p-6 space-y-5">
              <div>
                <label className="block text-white/60 text-sm font-semibold mb-2">봇 토큰</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={botToken}
                    onChange={(e) => setBotToken(e.target.value)}
                    placeholder="123456789:ABCdef..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 outline-none focus:border-[#ff6b2c] transition-colors text-sm font-mono"
                  />
                  <button
                    type="button"
                    onClick={detectChats}
                    disabled={!botToken || detecting}
                    className="px-4 py-2.5 bg-white/10 hover:bg-white/20 disabled:opacity-40 text-white text-sm font-semibold rounded-lg transition-colors whitespace-nowrap"
                  >
                    {detecting ? "탐지 중..." : "채팅방 자동 탐지"}
                  </button>
                </div>
                {detectError && <p className="text-red-400 text-xs mt-2">{detectError}</p>}
              </div>

              {chats.length > 0 && (
                <div>
                  <label className="block text-white/60 text-sm font-semibold mb-2">
                    탐지된 채팅방 ({chats.length}개) — 선택하면 자동 입력됩니다
                  </label>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {chats.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => setChatId(String(c.id))}
                        className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm transition-colors ${
                          chatId === String(c.id)
                            ? "border-[#ff6b2c] bg-[#ff6b2c]/10 text-white"
                            : "border-white/10 bg-white/5 text-white/60 hover:border-white/20 hover:text-white"
                        }`}
                      >
                        <span className="font-semibold">{c.title}</span>
                        <span className="ml-2 text-xs opacity-50">({c.type})</span>
                        <span className="ml-2 text-xs font-mono opacity-40">{c.id}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <label className="block text-white/60 text-sm font-semibold mb-2">채팅방 ID</label>
                <input
                  type="text"
                  value={chatId}
                  onChange={(e) => setChatId(e.target.value)}
                  placeholder="-100xxxxxxxxxx"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-white placeholder-white/20 outline-none focus:border-[#ff6b2c] transition-colors text-sm font-mono"
                />
              </div>

              <div className="flex items-center gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="px-6 py-2.5 bg-[#ff6b2c] hover:bg-[#e85a1e] disabled:opacity-50 text-white font-bold rounded-lg transition-colors text-sm"
                >
                  {saving ? "저장 중..." : "저장하기"}
                </button>
                {settingsMsg && (
                  <span className={`text-sm ${settingsMsg.includes("실패") ? "text-red-400" : "text-green-400"}`}>
                    {settingsMsg}
                  </span>
                )}
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
