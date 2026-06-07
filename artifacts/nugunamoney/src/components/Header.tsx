export default function Header() {
  return (
    <header style={{
      background: "#fff",
      borderBottom: "1px solid #eee",
      padding: "14px 0",
      position: "sticky",
      top: 0,
      zIndex: 100,
    }}>
      <div style={{
        maxWidth: 1080,
        margin: "0 auto",
        padding: "0 20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontSize: 24, fontWeight: 700, color: "#111", letterSpacing: "-0.8px" }}>
          누구나<span style={{ color: "#ff6b2c" }}>머니</span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <span className="header-badge" style={{ fontSize: 13, fontWeight: 500, color: "#999", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ color: "#ff6b2c", fontSize: 11 }}>●</span>
            정식 등록 대부업체
          </span>
          <a
            href="#apply"
            style={{
              background: "#ff6b2c",
              color: "#fff",
              fontWeight: 700,
              fontSize: 14,
              padding: "10px 18px",
              borderRadius: 6,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              whiteSpace: "nowrap",
            }}
          >
            무료 상담 신청
          </a>
        </nav>
      </div>
      <style>{`
        @media (max-width: 480px) {
          .header-badge { display: none !important; }
        }
      `}</style>
    </header>
  );
}
