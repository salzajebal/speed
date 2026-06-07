const cards = [
  {
    icon: "💼",
    title: "개인회생 / 파산면책",
    desc: "면책 / 신용 상태 무관\n성실상환자 환영",
  },
  {
    icon: "💻",
    title: "프리랜서 / 자영업",
    desc: "사업 1개월 이상\n소득증빙 다양하게 가능",
  },
  {
    icon: "🏠",
    title: "주부",
    desc: "본인 소득 없어도\n배우자 소득으로 가능",
  },
  {
    icon: "📉",
    title: "6등급 이하",
    desc: "낮은 등급 전문\n맞춤 상품 연결",
  },
];

export default function TargetCustomers() {
  return (
    <section style={{ padding: "88px 0" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <h2 style={{
          fontSize: "clamp(26px, 4vw, 40px)",
          fontWeight: 700,
          textAlign: "center",
          color: "#222",
          marginBottom: 48,
          letterSpacing: "-0.3px",
          lineHeight: 1.4,
        }}>
          이런 분들, <em style={{ fontStyle: "normal", color: "#ff6b2c" }}>지금 바로 신청하세요</em>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          border: "1px solid #ddd",
          borderRadius: 10,
          overflow: "hidden",
        }} className="target-grid">
          {cards.map((c, i) => (
            <div
              key={i}
              style={{
                padding: "36px 24px",
                textAlign: "center",
                borderRight: i < cards.length - 1 ? "1px solid #ddd" : "none",
              }}
              className="target-card"
            >
              <div style={{ fontSize: 32, marginBottom: 16 }}>{c.icon}</div>
              <h3 style={{ fontSize: 19, fontWeight: 700, marginBottom: 8, color: "#222" }}>{c.title}</h3>
              <p style={{ fontSize: 15, fontWeight: 500, color: "#999", lineHeight: 1.7 }}>{c.desc.split("\n").map((l, j) => <span key={j}>{l}{j < c.desc.split("\n").length - 1 && <br />}</span>)}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .target-grid { grid-template-columns: 1fr 1fr !important; }
          .target-card:nth-child(2) { border-right: none !important; }
          .target-card:nth-child(-n+2) { border-bottom: 1px solid #ddd; }
        }
        @media (max-width: 640px) {
          .target-grid { grid-template-columns: 1fr !important; }
          .target-card { border-right: none !important; border-bottom: 1px solid #ddd; }
          .target-card:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  );
}
