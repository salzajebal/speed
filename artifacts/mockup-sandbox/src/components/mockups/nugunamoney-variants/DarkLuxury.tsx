import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, ShieldCheck, Clock, Percent, Banknote } from 'lucide-react';
import './_group.css';

export function DarkLuxury() {
  const [formData, setFormData] = useState({
    name: '',
    phone1: '010',
    phone2: '',
    phone3: '',
    agreed: false
  });

  const stats = [
    { label: "최저금리", value: "3.9%~", icon: <Percent className="w-5 h-5 text-[#FFDF73]" /> },
    { label: "최대한도", value: "1억", icon: <Banknote className="w-5 h-5 text-[#FFDF73]" /> },
    { label: "당일 입금가능", value: "당일", icon: <Clock className="w-5 h-5 text-[#FFDF73]" /> },
    { label: "수수료", value: "0원", icon: <ShieldCheck className="w-5 h-5 text-[#FFDF73]" /> },
  ];

  const badges = ["6등급 이하 가능", "주부·무직 가능", "대환대출 가능", "평균 승인 2시간"];

  const targets = [
    { title: "개인회생/파산면책", desc: "어려운 상황에서도 가능한 맞춤형 상품" },
    { title: "프리랜서/자영업", desc: "소득 증빙이 어려워도 승인 가능" },
    { title: "주부", desc: "소득이 없어도 본인 명의 진행 가능" },
    { title: "6등급 이하", desc: "저신용자도 당일 상담 및 입금" },
  ];

  const process = [
    { step: "01", title: "상담신청", desc: "1분 간편 신청" },
    { step: "02", title: "서류검토", desc: "빠른 심사 진행" },
    { step: "03", title: "상품매칭", desc: "최적 상품 배정" },
    { step: "04", title: "당일입금", desc: "승인 즉시 송금" },
  ];

  const scrollToForm = () => {
    document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-[#030303] text-white font-sans selection:bg-[#FFDF73] selection:text-black">
      <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <style>{`
        * { font-family: 'Pretendard', sans-serif; }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 dl-glass border-b-0 border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-[#FFDF73] to-[#B8860B] flex items-center justify-center">
              <span className="text-black font-bold text-xl leading-none">N</span>
            </div>
            <span className="text-xl font-bold tracking-tight">누구나머니</span>
          </div>
          <button 
            onClick={scrollToForm}
            data-testid="nav-cta-btn"
            className="hidden md:flex dl-btn px-6 py-2.5 rounded-full text-sm items-center gap-2"
          >
            무료 상담 신청 <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/__mockup/images/dark-luxury-hero.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-transparent to-[#030303]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <div className="flex flex-wrap gap-3 mb-8">
                {badges.map((badge, idx) => (
                  <span key={idx} className="px-4 py-1.5 rounded-full border border-[#FFDF73]/30 text-[#FFDF73] text-sm font-medium bg-[#FFDF73]/5 backdrop-blur-sm">
                    {badge}
                  </span>
                ))}
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-6 tracking-tight">
                오늘 신청하면,<br />
                <span className="dl-gradient-text">오늘 입금.</span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-10 leading-relaxed font-light">
                복잡한 서류 없이 1분 신청.<br />
                신용등급 관계없이 누구나 상담 가능합니다.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10">
                {stats.map((stat, idx) => (
                  <div key={idx} className="flex flex-col gap-2">
                    {stat.icon}
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Form */}
            <motion.div 
              id="consultation-form"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="dl-glass rounded-2xl p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FFDF73] to-[#B8860B]"></div>
              <h3 className="text-2xl font-bold mb-2">무료 상담 신청</h3>
              <p className="text-gray-400 text-sm mb-8">전문 상담사가 1:1 맞춤 상담을 도와드립니다.</p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">성함</label>
                  <input 
                    type="text" 
                    data-testid="input-name"
                    placeholder="홍길동"
                    className="w-full dl-input rounded-lg px-4 py-3 text-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">연락처</label>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      data-testid="input-phone1"
                      className="w-1/3 dl-input rounded-lg px-4 py-3 text-center text-lg"
                      value={formData.phone1}
                      onChange={(e) => setFormData({...formData, phone1: e.target.value})}
                      maxLength={3}
                    />
                    <div className="flex items-center text-gray-500">-</div>
                    <input 
                      type="text" 
                      data-testid="input-phone2"
                      className="w-1/3 dl-input rounded-lg px-4 py-3 text-center text-lg"
                      value={formData.phone2}
                      onChange={(e) => setFormData({...formData, phone2: e.target.value})}
                      maxLength={4}
                    />
                    <div className="flex items-center text-gray-500">-</div>
                    <input 
                      type="text" 
                      data-testid="input-phone3"
                      className="w-1/3 dl-input rounded-lg px-4 py-3 text-center text-lg"
                      value={formData.phone3}
                      onChange={(e) => setFormData({...formData, phone3: e.target.value})}
                      maxLength={4}
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <button 
                    type="button"
                    data-testid="checkbox-agree"
                    onClick={() => setFormData({...formData, agreed: !formData.agreed})}
                    className={`mt-1 flex-shrink-0 w-5 h-5 rounded border flex items-center justify-center transition-colors ${formData.agreed ? 'bg-[#FFDF73] border-[#FFDF73]' : 'border-gray-600'}`}
                  >
                    {formData.agreed && <Check className="w-3 h-3 text-black" />}
                  </button>
                  <label className="text-sm text-gray-400 cursor-pointer" onClick={() => setFormData({...formData, agreed: !formData.agreed})}>
                    개인정보 수집 및 이용에 동의합니다. (필수)
                  </label>
                </div>

                <button 
                  data-testid="submit-btn"
                  className="w-full dl-btn rounded-xl py-4 text-lg mt-4 flex items-center justify-center gap-2"
                >
                  무료 상담 신청하기 <ChevronRight className="w-5 h-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Target Customers */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">이런 분들께 추천합니다</h2>
            <p className="text-gray-400 text-lg">어떤 상황에서도 최적의 솔루션을 찾아드립니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targets.map((target, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-[#111] border border-white/5 p-8 rounded-2xl hover:border-[#FFDF73]/30 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-[#1A1A1A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Check className="w-6 h-6 text-[#FFDF73]" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{target.title}</h3>
                <p className="text-gray-400 leading-relaxed">{target.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FFDF73]/20 to-transparent hidden md:block"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">진행 절차</h2>
            <p className="text-gray-400 text-lg">신청부터 입금까지 단 4단계</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((p, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center relative"
              >
                <div className="w-20 h-20 mx-auto rounded-full bg-[#111] border-2 border-[#333] flex items-center justify-center mb-6 relative z-10">
                  <span className="dl-gradient-text text-2xl font-bold">{p.step}</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{p.title}</h3>
                <p className="text-gray-400">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#080808] to-[#111]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">지금 바로 한도를 확인하세요</h2>
          <button 
            onClick={scrollToForm}
            data-testid="bottom-cta-btn"
            className="dl-btn px-10 py-5 rounded-full text-xl inline-flex items-center gap-3"
          >
            무료 상담 신청하기 <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10 text-gray-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-2">
            <p className="font-bold text-gray-300 text-base mb-4">우주캐피탈대부</p>
            <p>사업자등록번호: 738-95-01643 | 대표자: 강윤희, 정충헌</p>
            <p>주소: 충청북도 청주시 청원구 내덕동 788-115</p>
            <p>대부업등록번호: 2023-충북청주-0011</p>
          </div>
          <div className="text-left md:text-right">
            <p className="mb-2">고객센터</p>
            <p className="text-2xl font-bold text-gray-300">010-5807-7888</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/5 text-center text-xs">
          <p>대출시 귀하의 신용등급이 하락할 수 있습니다. 중개수수료를 요구하거나 받는 것은 불법입니다.</p>
          <p className="mt-2">© 2024 우주캐피탈대부. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}