export default function Footer() {
  return (
    <footer style={{ background: "#080808", padding: "48px 0 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: 36,
          paddingBottom: 28,
          borderBottom: "1px solid rgba(255,255,255,.04)",
        }} className="footer-top">
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: "#fff", letterSpacing: "-0.8px" }}>
              누구나<span style={{ color: "#ff6b2c" }}>머니</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.22)", lineHeight: 2 }}>
              <p>회사명 : 우주캐피탈대부 / 대부업등록번호 : 2023-충북청주-0011 (대부중개업)</p>
              <p>사업자번호 : 738-95-01643 / 대표자 : 강윤희, 정충헌</p>
              <p>주소 : 충청북도 청주시 청원구 내덕동 788-115</p>
              <p>전화번호 : 010-5807-7888</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p style={{
              fontSize: 15,
              fontWeight: 600,
              color: "#e74c3c",
              lineHeight: 2,
              padding: "20px 22px",
              background: "rgba(231,76,60,.04)",
              borderLeft: "3px solid rgba(231,76,60,.3)",
            }}>
              ⚠ 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.
              중개수수료를 요구하거나 받는 것은 불법입니다.
              대출 시 귀하의 신용등급이 하락할 수 있습니다.
            </p>
          </div>
        </div>

        <div style={{ paddingTop: 20 }}>
          <p style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,.18)", lineHeight: 2, marginBottom: 2 }}>
            금리 연20% 이내 (연체이자율 포함 20% 이내), 취급수수료 없음, 중도상환 수수료 없음, 중개수수료 없음.
          </p>
          <p style={{ fontSize: 12, fontWeight: 500, color: "rgba(255,255,255,.18)", lineHeight: 2 }}>
            상환기간 : 12개월 ~ 60개월 / 총 대출 비용 예시 : 100만원을 12개월 기간 동안 최대 금리 연20% 적용하여 원리금균등상환방법으로 이용하는 경우 총 상환금액 1,111,614원.
          </p>
          <p style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.08)", marginTop: 16, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.03)" }}>
            © {new Date().getFullYear()} 누구나머니. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </footer>
  );
}
