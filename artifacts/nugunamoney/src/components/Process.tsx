const steps = [
  { icon: "📱", num: "STEP 1", title: "1분 간편 신청" },
  { icon: "🎧", num: "STEP 2", title: "전담 상담원 연결" },
  { icon: "🔍", num: "STEP 3", title: "맞춤 상품 비교" },
  { icon: "🏦", num: "STEP 4", title: "당일 계좌 입금" },
];

export default function Process() {
  return (
    <section style={{ background: "#f6f6f6", padding: "88px 0" }}>
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
          신청부터 입금까지, <em style={{ fontStyle: "normal", color: "#ff6b2c" }}>딱 4단계</em>
        </h2>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }} className="steps-row">
          {steps.flatMap((step, i) => {
            const items = [
              <div key={step.num} style={{ textAlign: "center", padding: "0 28px", flex: 1, maxWidth: 220 }}>
                <div style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "#111",
                  color: "#fff",
                  fontSize: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}>
                  {step.icon}
                </div>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#ff6b2c", letterSpacing: 1, marginBottom: 6, display: "block" }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: "#222" }}>{step.title}</h3>
              </div>,
            ];
            if (i < steps.length - 1) {
              items.push(
                <div key={`arrow-${i}`} style={{ color: "#ccc", fontSize: 16, marginTop: 22 }} className="step-arrow">→</div>
              );
            }
            return items;
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .steps-row { flex-direction: column; gap: 0; align-items: center !important; }
          .step-arrow { transform: rotate(90deg); margin: 0; }
        }
      `}</style>
    </section>
  );
}
