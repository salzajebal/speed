import { useState } from "react";

type Step1 = { name: string; phone1: string; phone2: string; phone3: string };
type Step2 = { ageRange: string; incomeType: string; amount: string; agree: boolean };

const API_BASE = "/api";

const s: Record<string, React.CSSProperties> = {
  card: {
    background: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    boxShadow: "0 12px 40px rgba(0,0,0,.25)",
  },
  head: {
    background: "#ff6b2c",
    padding: "16px 22px",
    color: "#fff",
  },
  headH2: { fontSize: 20, fontWeight: 700, display: "flex", alignItems: "center", gap: 8, marginBottom: 2 },
  headP: { fontSize: 14, fontWeight: 500, color: "rgba(255,255,255,.7)" },
  form: { padding: "20px 22px 16px", display: "flex", flexDirection: "column", gap: 12 },
  fg: { display: "flex", flexDirection: "column", gap: 5 },
  label: { fontSize: 15, fontWeight: 600, color: "#555" },
  req: { color: "#ff6b2c" },
  input: {
    border: "1px solid #ddd",
    borderRadius: 6,
    fontFamily: "inherit",
    fontSize: 16,
    fontWeight: 500,
    padding: "12px 14px",
    color: "#222",
    background: "#fafafa",
    outline: "none",
    transition: "border-color .15s",
  },
  phoneGroup: { display: "flex", alignItems: "center", gap: 6 },
  phoneInput: {
    flex: 1,
    minWidth: 0,
    border: "1px solid #ddd",
    borderRadius: 6,
    fontFamily: "inherit",
    fontSize: 16,
    fontWeight: 500,
    padding: "12px 4px",
    textAlign: "center",
    color: "#222",
    background: "#fafafa",
    outline: "none",
  } as React.CSSProperties,
  phoneSep: { fontSize: 16, color: "#999" },
  btn: {
    width: "100%",
    background: "#ff6b2c",
    color: "#fff",
    fontFamily: "inherit",
    fontSize: 18,
    fontWeight: 700,
    border: "none",
    cursor: "pointer",
    padding: "17px",
    borderRadius: 8,
    marginTop: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    transition: "background .15s",
  },
  btnDisabled: { opacity: 0.45, cursor: "not-allowed" },
  btnPrev: {
    background: "none",
    border: "1px solid #ddd",
    color: "#555",
    fontFamily: "inherit",
    fontSize: 15,
    fontWeight: 600,
    padding: "15px 20px",
    borderRadius: 8,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 6,
    whiteSpace: "nowrap",
    transition: "border-color .15s",
  } as React.CSSProperties,
  chipGroup: { display: "flex", flexWrap: "wrap", gap: 6 } as React.CSSProperties,
  agree: { display: "flex", gap: 8, cursor: "pointer", fontSize: 14, fontWeight: 500, color: "#999", alignItems: "flex-start" },
  agreeCheck: { marginTop: 3, accentColor: "#ff6b2c", width: 16, height: 16 },
  tlink: { color: "#ff6b2c", textDecoration: "underline", fontWeight: 600 },
  err: { fontSize: 13, color: "#d63031", fontWeight: 500 },
  select: {
    border: "1px solid #ddd",
    borderRadius: 6,
    fontFamily: "inherit",
    fontSize: 16,
    fontWeight: 500,
    padding: "12px 14px",
    color: "#222",
    background: "#fafafa",
    outline: "none",
  },
  formBtns: { display: "flex", gap: 8 },
};

function chip(selected: boolean): React.CSSProperties {
  return {
    cursor: "pointer",
    border: `1px solid ${selected ? "#ff6b2c" : "#ddd"}`,
    borderRadius: 6,
    padding: "9px 16px",
    fontSize: 15,
    fontWeight: 600,
    color: selected ? "#fff" : "#555",
    background: selected ? "#ff6b2c" : "#fafafa",
    transition: "all .12s",
    userSelect: "none",
  } as React.CSSProperties;
}

function inputFocus(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#ff6b2c";
  e.currentTarget.style.background = "#fff";
}
function inputBlur(e: React.FocusEvent<HTMLInputElement | HTMLSelectElement>) {
  e.currentTarget.style.borderColor = "#ddd";
  e.currentTarget.style.background = "#fafafa";
}

export default function ConsultationForm() {
  const [step, setStep] = useState<1 | 2>(1);
  const [step1, setStep1] = useState<Step1>({ name: "", phone1: "010", phone2: "", phone3: "" });
  const [step2, setStep2] = useState<Step2>({ ageRange: "", incomeType: "", amount: "", agree: false });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  function validateStep1() {
    const e: Record<string, string> = {};
    if (!step1.name.trim() || step1.name.trim().length < 2) e.name = "이름을 입력해주세요.";
    if (!step1.phone2 || step1.phone2.length < 3) e.phone = "올바른 연락처를 입력해주세요.";
    if (!step1.phone3 || step1.phone3.length < 4) e.phone = "올바른 연락처를 입력해주세요.";
    return e;
  }

  function validateStep2() {
    const e: Record<string, string> = {};
    if (!step2.ageRange) e.ageRange = "연령대를 선택해주세요.";
    if (!step2.incomeType) e.incomeType = "소득 유형을 선택해주세요.";
    if (!step2.amount) e.amount = "희망 금액을 선택해주세요.";
    if (!step2.agree) e.agree = "개인정보 수집·이용에 동의해야 합니다.";
    return e;
  }

  function handleNext() {
    const e = validateStep1();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setErrors({});
    setStep(2);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validateStep2();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setSubmitting(true);
    try {
      const phone = `${step1.phone1}-${step1.phone2}-${step1.phone3}`;
      const res = await fetch(`${API_BASE}/consultations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: step1.name.trim(),
          phone,
          ageRange: step2.ageRange,
          incomeType: step2.incomeType,
          amount: step2.amount,
        }),
      });
      if (res.ok) {
        setDone(true);
      } else {
        setErrors({ submit: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." });
      }
    } catch {
      setErrors({ submit: "네트워크 오류가 발생했습니다." });
    }
    setSubmitting(false);
  }

  if (done) {
    return (
      <div style={s.card}>
        <div style={{ padding: "48px 32px", textAlign: "center" }}>
          <div style={{ fontSize: 48, marginBottom: 14, color: "#00b894" }}>✓</div>
          <h3 style={{ fontSize: 24, fontWeight: 700, color: "#222", marginBottom: 8 }}>신청이 완료되었습니다!</h3>
          <p style={{ fontSize: 17, fontWeight: 500, color: "#555", lineHeight: 1.7 }}>
            평균 <strong style={{ color: "#ff6b2c" }}>3분 이내</strong>로 연락드리겠습니다.<br />
            잠시만 기다려주세요.
          </p>
          <button
            onClick={() => { setDone(false); setStep(1); setStep1({ name: "", phone1: "010", phone2: "", phone3: "" }); setStep2({ ageRange: "", incomeType: "", amount: "", agree: false }); }}
            style={{ ...s.btn, marginTop: 24, width: "auto", padding: "12px 32px", fontSize: 16 }}
          >
            다시 신청하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={s.card} id="apply">
        <div style={s.head}>
          <h2 style={s.headH2}>✈ 무료 상담 신청</h2>
          <p style={s.headP}>평균 <strong style={{ color: "#fff" }}>3분 이내</strong> 연락드립니다</p>
        </div>

        {step === 1 && (
          <div style={s.form}>
            <div aria-hidden style={{ position: "absolute", left: -9999, top: -9999, width: 1, height: 1, overflow: "hidden" }}>
              <input type="text" name="website" tabIndex={-1} autoComplete="off" />
            </div>

            <div style={s.fg}>
              <label style={s.label}>성함 <span style={s.req}>*</span></label>
              <input
                type="text"
                placeholder="홍길동"
                maxLength={20}
                autoComplete="name"
                style={s.input}
                value={step1.name}
                onChange={e => setStep1({ ...step1, name: e.target.value })}
                onFocus={inputFocus}
                onBlur={inputBlur}
                data-testid="input-name"
              />
              {errors.name && <span style={s.err}>{errors.name}</span>}
            </div>

            <div style={s.fg}>
              <label style={s.label}>연락처 <span style={s.req}>*</span></label>
              <div style={s.phoneGroup}>
                <input type="tel" maxLength={3} placeholder="010" inputMode="numeric" style={s.phoneInput}
                  value={step1.phone1} onChange={e => setStep1({ ...step1, phone1: e.target.value })}
                  onFocus={inputFocus} onBlur={inputBlur} data-testid="input-phone1" />
                <span style={s.phoneSep}>-</span>
                <input type="tel" maxLength={4} placeholder="0000" inputMode="numeric" style={s.phoneInput}
                  value={step1.phone2} onChange={e => setStep1({ ...step1, phone2: e.target.value })}
                  onFocus={inputFocus} onBlur={inputBlur} data-testid="input-phone2" />
                <span style={s.phoneSep}>-</span>
                <input type="tel" maxLength={4} placeholder="0000" inputMode="numeric" style={s.phoneInput}
                  value={step1.phone3} onChange={e => setStep1({ ...step1, phone3: e.target.value })}
                  onFocus={inputFocus} onBlur={inputBlur} data-testid="input-phone3" />
              </div>
              {errors.phone && <span style={s.err}>{errors.phone}</span>}
            </div>

            <button
              type="button"
              onClick={handleNext}
              style={s.btn}
              onMouseEnter={e => (e.currentTarget.style.background = "#e85a1e")}
              onMouseLeave={e => (e.currentTarget.style.background = "#ff6b2c")}
              data-testid="btn-next"
            >
              다음 →
            </button>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit} style={s.form} noValidate>
            <div style={s.fg}>
              <label style={s.label}>연령대 <span style={s.req}>*</span></label>
              <select
                style={s.select}
                value={step2.ageRange}
                onChange={e => setStep2({ ...step2, ageRange: e.target.value })}
                onFocus={inputFocus}
                onBlur={inputBlur}
                data-testid="select-age-range"
              >
                <option value="">선택해 주세요</option>
                <option>20대</option>
                <option>30대</option>
                <option>40대</option>
                <option>50대</option>
                <option>60대 이상</option>
              </select>
              {errors.ageRange && <span style={s.err}>{errors.ageRange}</span>}
            </div>

            <div style={s.fg}>
              <label style={s.label}>소득 및 연체 여부 <span style={s.req}>*</span></label>
              <div style={s.chipGroup}>
                {["직장 소득 있음", "연체중 (3개월 이상)", "연체 여부 미확정", "무직 (최근 소득)", "무직 (소득 없음)"].map(opt => (
                  <span
                    key={opt}
                    style={chip(step2.incomeType === opt)}
                    onClick={() => setStep2({ ...step2, incomeType: opt })}
                    data-testid={`chip-income-${opt}`}
                  >
                    {opt}
                  </span>
                ))}
              </div>
              {errors.incomeType && <span style={s.err}>{errors.incomeType}</span>}
            </div>

            <div style={s.fg}>
              <label style={s.label}>희망 대출 금액 <span style={s.req}>*</span></label>
              <select
                style={s.select}
                value={step2.amount}
                onChange={e => setStep2({ ...step2, amount: e.target.value })}
                onFocus={inputFocus}
                onBlur={inputBlur}
                data-testid="select-amount"
              >
                <option value="">선택해 주세요</option>
                <option>500만원 이하</option>
                <option>500~1000만원</option>
                <option>1000~3000만원</option>
                <option>3000~5000만원</option>
                <option>5000만원 이상</option>
              </select>
              {errors.amount && <span style={s.err}>{errors.amount}</span>}
            </div>

            <label style={s.agree}>
              <input
                type="checkbox"
                style={s.agreeCheck}
                checked={step2.agree}
                onChange={e => setStep2({ ...step2, agree: e.target.checked })}
                data-testid="checkbox-agree"
              />
              <span>
                <span style={s.tlink} onClick={() => setShowPrivacy(true)}>개인정보 처리방침</span>에 동의하며 대출 상담 목적의 연락에 동의합니다
              </span>
            </label>
            {errors.agree && <span style={s.err}>{errors.agree}</span>}
            {errors.submit && <span style={s.err}>{errors.submit}</span>}

            <div style={s.formBtns}>
              <button
                type="button"
                onClick={() => { setStep(1); setErrors({}); }}
                style={s.btnPrev}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "#999")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "#ddd")}
              >
                ← 이전
              </button>
              <button
                type="submit"
                disabled={submitting}
                style={{ ...s.btn, flex: 1, ...(submitting ? s.btnDisabled : {}) }}
                onMouseEnter={e => { if (!submitting) e.currentTarget.style.background = "#e85a1e"; }}
                onMouseLeave={e => { if (!submitting) e.currentTarget.style.background = "#ff6b2c"; }}
                data-testid="btn-submit"
              >
                {submitting ? "처리 중..." : "무료 상담 신청하기"}
              </button>
            </div>
          </form>
        )}
      </div>

      {showPrivacy && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,.5)", backdropFilter: "blur(3px)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1000 }}
          onClick={() => setShowPrivacy(false)}
        >
          <div style={{ background: "#fff", borderRadius: 12, maxWidth: 500, width: "90%", boxShadow: "0 16px 40px rgba(0,0,0,.15)" }} onClick={e => e.stopPropagation()}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px 24px", borderBottom: "1px solid #eee" }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>📄 개인정보 수집·이용 동의서</h3>
              <button onClick={() => setShowPrivacy(false)} style={{ background: "none", border: "none", fontSize: 20, color: "#999", cursor: "pointer" }}>✕</button>
            </div>
            <div style={{ padding: 24, fontSize: 15, fontWeight: 500, color: "#555", lineHeight: 2.2, display: "flex", flexDirection: "column", gap: 4 }}>
              <p><strong>수집 항목:</strong> 성명, 휴대폰번호, 직업·소득·신용 관련 정보</p>
              <p><strong>수집 목적:</strong> 대출 상담 서비스 제공 및 상담 연락</p>
              <p><strong>보유 기간:</strong> 상담 완료 후 즉시 파기 (관련 법령 최대 1년)</p>
              <p>귀하는 동의를 거부할 권리가 있으며, 거부 시 서비스 이용이 제한됩니다.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
