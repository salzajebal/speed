export default function Footer() {
  return (
    <footer style={{ background: "#080808", padding: "44px 0 24px" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1.2fr .8fr",
          gap: 32,
          paddingBottom: 24,
          borderBottom: "1px solid rgba(255,255,255,.04)",
        }} className="footer-top">
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ fontSize: 20, fontWeight: 700, color: "#fff", letterSpacing: "-0.8px" }}>
              신속대출<span style={{ color: "#ff6b2c" }}>론</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,.22)", lineHeight: 2 }}>
              <p>회사명 : 유앤에스 파이낸셜대부중개 / 대표자 : 정의선</p>
              <p>사업자번호 : 648-20-02701</p>
              <p>대부중개업등록번호 : 2026-부산기장-0003</p>
              <p>주소 : 부산광역시 기장군 일광읍 해송2로 10, 일광역 유림노르웨이아침 306호</p>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "flex-start" }}>
            <p style={{
              fontSize: 13,
              fontWeight: 600,
              color: "#e74c3c",
              lineHeight: 1.9,
              padding: "16px 18px",
              background: "rgba(231,76,60,.04)",
              borderLeft: "3px solid rgba(231,76,60,.3)",
            }}>
              ⚠ 과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다.
              중개수수료를 요구하거나 받는 것은 불법입니다.
              대출 시 귀하의 신용등급이 하락할 수 있습니다.
            </p>
          </div>
        </div>

        <div style={{ paddingTop: 18 }}>
          <p style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.18)", lineHeight: 2, marginBottom: 4 }}>
            금리 연 20% 이내 (연체이자율 포함 연 20% 이내)(단, 2021.7.7부터 체결·갱신·연장되는 계약에 한함), 취급수수료 없음, 중도상환 수수료 없음, 중개수수료 없음, 추가비용 없음.
          </p>
          <p style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.18)", lineHeight: 2, marginBottom: 4 }}>
            상환기간 : 12개월 ~ 60개월 / 총 대출 비용 예시 : 100만원을 12개월 기간 동안 최대 금리 연 20% 적용하여 원리금균등상환방법으로 이용하는 경우 총 상환금액 1,111,614원 (단, 대출상품 및 상환방법 등 대출계약 내용에 따라 달라질 수 있습니다). 채무의 조기상환수수료 등 조기상환조건 없음.
          </p>
          <p style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.18)", lineHeight: 2 }}>
            과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 중개수수료를 요구하거나 받는 것은 불법입니다. 대출 시 귀하의 신용등급이 하락할 수 있습니다.
          </p>
          <p style={{ fontSize: 11, fontWeight: 500, color: "rgba(255,255,255,.08)", marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,.03)" }}>
            © {new Date().getFullYear()} 신속대출론. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 960px) {
          .footer-top { grid-template-columns: 1fr !important; gap: 20px !important; }
        }
      `}</style>
    </footer>
  );
}
