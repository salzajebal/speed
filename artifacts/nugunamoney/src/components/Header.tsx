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
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#111", letterSpacing: "-0.8px" }}>
          누구나<span style={{ color: "#ff6b2c" }}>머니</span>
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <span style={{ fontSize: 13, fontWeight: 500, color: "#999", display: "flex", alignItems: "center", gap: 5 }}>
            <span style={{ color: "#ff6b2c", fontSize: 11 }}>●</span>
            정식 등록 대부업체
          </span>
          <a
            href="#apply"
            style={{
              background: "#ff6b2c",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              padding: "11px 24px",
              borderRadius: 6,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            무료 상담 신청
          </a>
        </nav>
      </div>
    </header>
  );
}
