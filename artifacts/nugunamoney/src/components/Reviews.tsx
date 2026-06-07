const reviews = [
  {
    stars: 5,
    text: '"7등급이라 반신반의했는데, 신청 2시간 만에 진짜 입금됐어요."',
    author: "박** / 직장인 / 서울",
  },
  {
    stars: 5,
    text: '"주부도 된다길래 해봤는데 정말 됐습니다. 상담도 친절했어요."',
    author: "이** / 주부 / 경기",
  },
  {
    stars: 4,
    text: '"프리랜서라 서류 걱정했는데 간단하게 처리됐습니다."',
    author: "김** / 프리랜서 / 부산",
  },
];

export default function Reviews() {
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
        }}>
          실제 <em style={{ fontStyle: "normal", color: "#ff6b2c" }}>이용 후기</em>
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          borderTop: "2px solid #222",
        }} className="reviews-grid">
          {reviews.map((r, i) => (
            <blockquote key={i} style={{
              padding: "32px 28px",
              fontStyle: "normal",
              borderBottom: "1px solid #eee",
              borderRight: i < reviews.length - 1 ? "1px solid #eee" : "none",
              margin: 0,
            }}>
              <div style={{ color: "#ff6b2c", fontSize: 15, letterSpacing: 0, marginBottom: 12 }}>
                {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}
              </div>
              <p style={{ fontSize: 17, fontWeight: 500, color: "#555", lineHeight: 1.75, marginBottom: 14 }}>
                {r.text}
              </p>
              <footer style={{ fontSize: 14, fontWeight: 500, color: "#999" }}>{r.author}</footer>
            </blockquote>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
          .reviews-grid blockquote { border-right: none !important; }
        }
      `}</style>
    </section>
  );
}
