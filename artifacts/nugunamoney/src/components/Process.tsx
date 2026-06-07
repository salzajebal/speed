const steps = [
  { icon: "📱", num: "STEP 1", title: "1분 간편 신청" },
  { icon: "🎧", num: "STEP 2", title: "전담 상담원 연결" },
  { icon: "🔍", num: "STEP 3", title: "맞춤 상품 비교" },
  { icon: "🏦", num: "STEP 4", title: "당일 계좌 입금" },
];

export default function Process() {
  return (
    <section style={{ background: "#f6f6f6" }} className="process-section">
      <div style={{ maxWidth: 1080, margin: "0 auto", padding: "0 20px" }}>
        <h2 style={{
          fontSize: "clamp(22px, 4vw, 38px)",
          fontWeight: 700,
          textAlign: "center",
          color: "#222",
          letterSpacing: "-0.3px",
          lineHeight: 1.4,
        }} className="process-title">
          신청부터 입금까지, <em style={{ fontStyle: "normal", color: "#ff6b2c" }}>딱 4단계</em>
        </h2>

        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "center" }} className="steps-row">
          {steps.flatMap((step, i) => {
            const items = [
              <div key={step.num} style={{ textAlign: "center", padding: "0 20px", flex: 1, maxWidth: 200 }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  background: "#111",
                  color: "#fff",
                  fontSize: 20,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 12px",
                }}>
                  {step.icon}
                </div>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#ff6b2c", letterSpacing: 1, marginBottom: 5, display: "block" }}>
                  {step.num}
                </span>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#222" }}>{step.title}</h3>
              </div>,
            ];
            if (i < steps.length - 1) {
              items.push(
                <div key={`arrow-${i}`} style={{ color: "#ccc", fontSize: 16, marginTop: 20 }} className="step-arrow">→</div>
              );
            }
            return items;
          })}
        </div>
      </div>

      <style>{`
        .process-section { padding: 72px 0; }
        .process-title { margin-bottom: 44px; }

        @media (max-width: 640px) {
          .process-section { padding: 48px 0; }
          .process-title { margin-bottom: 32px; }
          .steps-row { flex-direction: column; gap: 0; align-items: center !important; }
          .step-arrow { transform: rotate(90deg); margin: 0; }
        }
      `}</style>
    </section>
  );
}
