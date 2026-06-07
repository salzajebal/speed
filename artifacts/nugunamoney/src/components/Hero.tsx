import ConsultationForm from "./ConsultationForm";

export default function Hero() {
  const facts = [
    { num: "3.9%~", label: "최저금리" },
    { num: "1억", label: "최대한도" },
    { num: "당일", label: "입금가능" },
    { num: "0원", label: "수수료" },
  ];
  const list = ["6등급 이하 가능", "주부 · 무직 가능", "대환대출 가능", "평균 승인 2시간"];

  return (
    <section style={{ background: "#111" }} id="apply" className="hero-section">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "center" }}
        className="hero-grid">
        <div className="hero-copy">
          <h1 style={{
            fontSize: "clamp(32px, 5.5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#fff",
            marginBottom: 14,
            letterSpacing: "-1.5px",
          }}>
            오늘 신청하면,<br />
            <em style={{ fontStyle: "normal", color: "#ff6b2c" }}>오늘 입금.</em>
          </h1>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#888", lineHeight: 1.8, marginBottom: 32 }} className="hero-desc">
            복잡한 서류 없이 비대면 1분 신청.<br />
            신용등급 관계없이 누구나 상담 가능합니다.
          </p>

          <div className="facts-row" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "12px 0", marginBottom: 28 }}>
            {facts.map((f, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 28, fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{f.num}</span>
                <span style={{ fontSize: 12, fontWeight: 500, color: "#666", marginTop: 4 }}>{f.label}</span>
              </div>
            ))}
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 20px", margin: 0, padding: 0 }}>
            {list.map((item, i) => (
              <li key={i} style={{ fontSize: 15, fontWeight: 500, color: "#999", display: "flex", alignItems: "center", gap: 7 }}>
                <span style={{ color: "#ff6b2c", fontSize: 12 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="hero-form">
          <ConsultationForm />
        </div>
      </div>

      <style>{`
        .hero-section { padding: 72px 0 80px; }

        @media (max-width: 960px) {
          .hero-section { padding: 48px 0 56px; }
          .hero-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .hero-copy { text-align: center; }
          .hero-copy ul { justify-content: center; }
          .facts-row { justify-content: center; }
          .facts-row > div { align-items: center; }
        }

        @media (max-width: 640px) {
          .hero-section { padding: 36px 0 44px; }
          .hero-desc { font-size: 15px !important; margin-bottom: 24px !important; }
          .facts-row { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; }
          .facts-row > div { align-items: flex-start; background: rgba(255,255,255,.04); border-radius: 10px; padding: 14px 16px; }
        }
      `}</style>
    </section>
  );
}
