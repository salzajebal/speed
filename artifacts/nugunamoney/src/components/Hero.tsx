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
    <section style={{ background: "#111", padding: "72px 0 80px" }} id="apply">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "1fr 380px", gap: 48, alignItems: "center" }}
        className="hero-grid">
        <div className="hero-copy">
          <h1 style={{
            fontSize: "clamp(36px, 5.5vw, 56px)",
            fontWeight: 700,
            lineHeight: 1.2,
            color: "#fff",
            marginBottom: 18,
            letterSpacing: "-1.5px",
          }}>
            오늘 신청하면,<br />
            <em style={{ fontStyle: "normal", color: "#ff6b2c" }}>오늘 입금.</em>
          </h1>
          <p style={{ fontSize: 19, fontWeight: 500, color: "#888", lineHeight: 1.8, marginBottom: 40 }}>
            복잡한 서류 없이 비대면 1분 신청.<br />
            신용등급 관계없이 누구나 상담 가능합니다.
          </p>

          <div style={{ display: "flex", gap: 36, marginBottom: 36 }}>
            {facts.map((f, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 32, fontWeight: 700, color: "#fff", lineHeight: 1.1, letterSpacing: "-0.5px" }}>{f.num}</span>
                <span style={{ fontSize: 13, fontWeight: 500, color: "#666", marginTop: 4 }}>{f.label}</span>
              </div>
            ))}
          </div>

          <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 24px", margin: 0, padding: 0 }}>
            {list.map((item, i) => (
              <li key={i} style={{ fontSize: 16, fontWeight: 500, color: "#999", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#ff6b2c", fontSize: 13 }}>✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ConsultationForm />
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .hero-copy { text-align: center; }
          .hero-copy ul { justify-content: center; }
          .hero-copy > div { justify-content: center; }
        }
      `}</style>
    </section>
  );
}
