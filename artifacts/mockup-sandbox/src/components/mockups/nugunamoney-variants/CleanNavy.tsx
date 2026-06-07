import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingDown,
  CreditCard,
  Clock,
  FileText,
  Briefcase,
  Users,
  Phone,
  ChevronRight,
  CheckSquare,
  Square,
} from "lucide-react";

export function CleanNavy() {
  const [formData, setFormData] = useState({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    agree: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const anim = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.55, delay },
  });

  return (
    <div className="min-h-screen w-full bg-white" style={{ fontFamily: "'Pretendard', 'Apple SD Gothic Neo', sans-serif" }}>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-sm">N</span>
            </div>
            <span className="text-slate-900 font-black text-xl tracking-tight">누구나머니</span>
          </div>
          <button
            data-testid="header-cta"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-lg transition-colors"
            onClick={() => document.getElementById("form")?.scrollIntoView({ behavior: "smooth" })}
          >
            무료 상담 신청
          </button>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
        </div>
        <div className="max-w-6xl mx-auto px-6 py-20 relative z-10 flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <motion.div {...anim(0)} className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold mb-6">
              <ShieldCheck size={15} />
              정식 등록 대부업체
            </motion.div>
            <motion.h1 {...anim(0.1)} className="text-5xl lg:text-6xl font-black leading-tight mb-5 tracking-tight">
              오늘 신청하면,<br />
              <span className="text-blue-400">오늘 입금.</span>
            </motion.h1>
            <motion.p {...anim(0.2)} className="text-xl text-slate-300 leading-relaxed mb-8 max-w-md">
              복잡한 서류 없이 1분 신청.<br />
              신용등급 관계없이 누구나 상담 가능합니다.
            </motion.p>
            <motion.div {...anim(0.3)} className="flex flex-wrap gap-2 mb-10">
              {["6등급 이하 가능", "주부·무직 가능", "대환대출 가능", "평균 승인 2시간"].map((b, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800 text-slate-200 text-sm font-medium rounded-md border border-slate-700">
                  {b}
                </span>
              ))}
            </motion.div>
            <motion.div {...anim(0.4)} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: TrendingDown, value: "3.9%~", label: "최저금리" },
                { icon: CreditCard, value: "1억", label: "최대한도" },
                { icon: Clock, value: "당일", label: "입금가능" },
                { icon: ShieldCheck, value: "0원", label: "수수료" },
              ].map((item, i) => (
                <div key={i} className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/50">
                  <div className="text-blue-400 mb-2"><item.icon size={22} /></div>
                  <div className="text-2xl font-bold text-white mb-0.5">{item.value}</div>
                  <div className="text-sm text-slate-400">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.div {...anim(0.2)} className="w-full max-w-sm" id="form">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="h-1.5 bg-blue-600" />
              <div className="p-7">
                <h2 className="text-xl font-black text-slate-900 mb-5">무료 안심 상담신청</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">성함</label>
                    <input
                      type="text"
                      required
                      data-testid="input-name"
                      placeholder="홍길동"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5">연락처</label>
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        readOnly
                        data-testid="input-phone1"
                        value="010"
                        className="w-16 px-2 py-3 bg-slate-100 border border-slate-200 rounded-lg text-center text-sm font-medium text-slate-700"
                      />
                      <span className="text-slate-400 font-bold">-</span>
                      <input
                        type="text"
                        maxLength={4}
                        required
                        data-testid="input-phone2"
                        placeholder="0000"
                        className="flex-1 px-2 py-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.phone2}
                        onChange={(e) => setFormData({ ...formData, phone2: e.target.value })}
                      />
                      <span className="text-slate-400 font-bold">-</span>
                      <input
                        type="text"
                        maxLength={4}
                        required
                        data-testid="input-phone3"
                        placeholder="0000"
                        className="flex-1 px-2 py-3 bg-slate-50 border border-slate-200 rounded-lg text-center text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={formData.phone3}
                        onChange={(e) => setFormData({ ...formData, phone3: e.target.value })}
                      />
                    </div>
                  </div>
                  <label className="flex items-start gap-2.5 cursor-pointer pt-1">
                    <div
                      className="mt-0.5 shrink-0"
                      onClick={() => setFormData({ ...formData, agree: !formData.agree })}
                    >
                      {formData.agree
                        ? <CheckSquare className="text-blue-600" size={18} />
                        : <Square className="text-slate-300" size={18} />
                      }
                    </div>
                    <input
                      type="checkbox"
                      className="hidden"
                      required
                      data-testid="checkbox-agree"
                      checked={formData.agree}
                      onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
                    />
                    <span className="text-xs text-slate-600 leading-relaxed">
                      개인정보 수집 및 이용에 동의합니다. (필수)
                      <br />
                      <span className="text-slate-400">신용조회 기록 없음, 안심 상담 가능</span>
                    </span>
                  </label>
                  <button
                    type="submit"
                    data-testid="submit-btn"
                    className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm"
                  >
                    무료 상담 신청하기
                    <ChevronRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-3">이런 분들도 상담 가능합니다</h2>
            <p className="text-slate-500 text-lg">타사에서 거절당하셨어도 포기하지 마세요.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: FileText, title: "개인회생·파산면책", desc: "면책 후 성실상환자" },
              { icon: Briefcase, title: "프리랜서·자영업", desc: "소득증빙이 어려우신 분" },
              { icon: Users, title: "주부", desc: "본인 명의 신용카드 보유" },
              { icon: TrendingDown, title: "6등급 이하", desc: "저신용자 맞춤 상품" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg hover:border-blue-100 transition-all"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={26} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-1.5">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-black text-slate-900 mb-3">단 4단계, 오늘 바로 입금</h2>
            <p className="text-slate-500 text-lg">빠르고 정확하게 진행합니다.</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "상담신청", desc: "1분 온라인 신청" },
              { step: "02", title: "서류검토", desc: "최소한의 서류 확인" },
              { step: "03", title: "상품매칭", desc: "최적의 조건 설계" },
              { step: "04", title: "당일입금", desc: "승인 즉시 송금" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-white shadow-md border border-slate-100 rounded-full flex items-center justify-center text-2xl font-black text-blue-600 mb-5">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-14">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between gap-10 mb-10">
            <div>
              <div className="text-xl font-black text-white mb-4 flex items-center gap-2">
                <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-black text-xs">N</span>
                </div>
                누구나머니
              </div>
              <div className="flex items-center gap-2 text-white font-bold text-lg">
                <Phone size={18} className="text-blue-400" />
                010-5807-7888
              </div>
            </div>
            <div className="text-sm space-y-1.5 leading-relaxed">
              <p><strong className="text-slate-300">회사명:</strong> 우주캐피탈대부</p>
              <p><strong className="text-slate-300">대표자:</strong> 강윤희, 정충헌</p>
              <p><strong className="text-slate-300">사업자등록번호:</strong> 738-95-01643</p>
              <p><strong className="text-slate-300">대부업등록번호:</strong> 2023-충북청주-0011</p>
              <p><strong className="text-slate-300">주소:</strong> 충청북도 청주시 청원구 내덕동 788-115</p>
            </div>
          </div>
          <div className="text-xs text-slate-500 border-t border-slate-800 pt-8 leading-relaxed space-y-1">
            <p>대출금리: 연 20% 이내 (연체금리: 약정금리 + 3%p 이내, 연 20% 이내)</p>
            <p>취급수수료 등 기타 부대비용 없음. 중개수수료를 요구하거나 받는 것은 불법입니다.</p>
            <p>과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 신용등급이 하락할 수 있습니다.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
