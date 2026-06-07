import { useState, useEffect } from "react";

const API_BASE = "/api";

export default function KakaoButton() {
  const [url, setUrl] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    fetch(`${API_BASE}/admin/public/kakao-link`)
      .then(r => r.ok ? r.json() : { url: "" })
      .then(data => {
        if (data.url) setUrl(data.url);
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    if (!url) return;
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, [url]);

  if (!url) return null;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      title="카카오톡 상담하기"
      style={{
        position: "fixed",
        bottom: 28,
        right: 28,
        zIndex: 200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 5,
        textDecoration: "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity .35s ease, transform .35s ease",
      }}
    >
      <div style={{
        width: 60,
        height: 60,
        background: "#FEE500",
        borderRadius: 16,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,.22)",
        transition: "transform .15s, box-shadow .15s",
      }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.08)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 28px rgba(0,0,0,.3)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 4px 20px rgba(0,0,0,.22)";
        }}
      >
        {/* KakaoTalk speech bubble icon */}
        <svg width="32" height="30" viewBox="0 0 32 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16 0C7.163 0 0 5.82 0 13c0 4.637 2.9 8.715 7.319 11.117L5.5 30l7.109-4.012C13.384 26.316 14.68 26.5 16 26.5c8.837 0 16-5.82 16-13S24.837 0 16 0z"
            fill="#3C1E1E"
          />
          <text x="16" y="16.5" textAnchor="middle" fontSize="8" fontWeight="800" fill="#FEE500" fontFamily="Arial,sans-serif" letterSpacing="-0.5">TALK</text>
        </svg>
      </div>
      <span style={{
        fontSize: 12,
        fontWeight: 700,
        color: "#3C1E1E",
        background: "#FEE500",
        borderRadius: 10,
        padding: "2px 9px",
        boxShadow: "0 2px 8px rgba(0,0,0,.15)",
        fontFamily: "'SUIT Variable','SUIT',sans-serif",
      }}>
        상담하기
      </span>
    </a>
  );
}
