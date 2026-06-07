export default function BottomCTA() {
  return (
    <section style={{ background: "#111" }} className="cta-section">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px", textAlign: "center" }}>
        <h2 style={{
          fontSize: "clamp(20px, 3.5vw, 30px)",
          fontWeight: 700,
          color: "#fff",
          marginBottom: 10,
        }}>
          지금 바로 무료 상담 받아보세요
        </h2>
        <p style={{ fontSize: 16, fontWeight: 500, color: "#666", marginBottom: 24 }}>
          신용등급, 직업 관계없이 누구나 신청 가능합니다
        </p>
        <a
          href="#apply"
          style={{
            background: "#ff6b2c",
            color: "#fff",
            fontWeight: 700,
            fontSize: 16,
            padding: "15px 36px",
            borderRadius: 8,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            transition: "background .15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "#e85a1e")}
          onMouseLeave={e => (e.currentTarget.style.background = "#ff6b2c")}
        >
          ↑ 상담 신청하러 가기
        </a>
      </div>

      <style>{`
        .cta-section { padding: 56px 0; }
        @media (max-width: 640px) {
          .cta-section { padding: 44px 0; }
        }
      `}</style>
    </section>
  );
}
