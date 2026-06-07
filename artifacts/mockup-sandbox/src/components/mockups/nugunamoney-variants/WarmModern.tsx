import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, Shield, Clock, TrendingUp, HandHeart, Users, ArrowRight, Phone } from "lucide-react";

export function WarmModern() {
  const [formData, setFormData] = useState({
    name: "",
    phone1: "010",
    phone2: "",
    phone3: "",
    agree: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted", formData);
  };

  return (
    <div className="min-h-screen w-full bg-[#FAFAFA] font-sans text-gray-900" style={{ fontFamily: "'Noto Sans KR', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
      
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-orange-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 text-orange-500 font-black text-2xl tracking-tight">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center text-white">
              <HandHeart size={20} />
            </div>
            누구나머니
          </div>
          <button 
            data-testid="header-cta"
            onClick={() => document.getElementById('consultation-form')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-6 py-2.5 rounded-full font-medium transition-transform hover:scale-105 shadow-sm shadow-orange-200"
          >
            무료 상담 신청
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-orange-300/30 blur-3xl"></div>
        <div className="absolute top-40 left-0 -ml-40 w-80 h-80 rounded-full bg-pink-300/20 blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100 text-orange-700 font-semibold text-sm mb-6 shadow-sm">
              당신 편에 서 있는 든든한 파트너
            </div>
            <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
              오늘 신청하면,<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">오늘 입금.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
              복잡한 서류 없이 1분 신청. <br className="hidden sm:block"/>
              신용등급 관계없이 누구나 상담 가능합니다.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              {['6등급 이하 가능', '주부·무직 가능', '대환대출 가능', '평균 승인 2시간'].map((badge, idx) => (
                <span key={idx} className="flex items-center gap-1.5 text-sm font-medium text-pink-700 bg-pink-50 px-3 py-1.5 rounded-full border border-pink-100 shadow-sm">
                  <Check size={14} className="text-pink-500" />
                  {badge}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="/__mockup/images/warm-hero.png" 
              alt="따뜻한 금융 서비스 일러스트" 
              className="w-full h-auto rounded-3xl shadow-2xl shadow-orange-500/10 object-cover aspect-video lg:aspect-square"
            />
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">최저금리</p>
                  <p className="text-xl font-bold text-gray-900">3.9% ~</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="text-center px-4">
              <p className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 mb-2">3.9%~</p>
              <p className="text-gray-600 font-medium">최저금리</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-black text-gray-900 mb-2">1억</p>
              <p className="text-gray-600 font-medium">최대한도</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-black text-gray-900 mb-2">당일</p>
              <p className="text-gray-600 font-medium">입금가능</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl font-black text-gray-900 mb-2">0원</p>
              <p className="text-gray-600 font-medium">수수료</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Customers Section */}
      <section className="py-24 bg-orange-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">누구나 신청할 수 있습니다</h2>
            <p className="text-gray-600">상황이 어려워도 포기하지 마세요. 저희가 돕겠습니다.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "개인회생/파산면책", icon: <Shield className="w-8 h-8 text-orange-500" /> },
              { title: "프리랜서/자영업", icon: <TrendingUp className="w-8 h-8 text-pink-500" /> },
              { title: "주부", icon: <Users className="w-8 h-8 text-orange-400" /> },
              { title: "6등급 이하", icon: <HandHeart className="w-8 h-8 text-pink-400" /> }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-orange-100/50 text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg text-gray-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">가장 빠르고 편안한 진행</h2>
            <p className="text-gray-600">복잡한 절차 없이 오늘 바로 해결하세요.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-orange-100 -z-10 -translate-y-1/2"></div>
            
            {[
              { step: 1, title: "상담신청", desc: "1분 간편 신청" },
              { step: 2, title: "서류검토", desc: "빠른 비대면 심사" },
              { step: 3, title: "상품매칭", desc: "최적의 조건 탐색" },
              { step: 4, title: "당일입금", desc: "승인 즉시 송금" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center relative bg-white px-4 py-6 md:py-0 mb-8 md:mb-0 w-full md:w-auto">
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-orange-200">
                  {item.step}
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-1">{item.title}</h4>
                <p className="text-sm text-gray-500">{item.desc}</p>
                {idx < 3 && (
                  <div className="md:hidden mt-6 text-orange-200">
                    <ArrowRight />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section id="consultation-form" className="py-24 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2rem] shadow-xl shadow-orange-900/5 p-8 sm:p-12 border border-orange-100">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">무료 상담 신청</h2>
              <p className="text-gray-600">전문 상담원이 친절하게 안내해 드립니다.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">성함</label>
                <input 
                  type="text" 
                  required
                  data-testid="input-name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                  placeholder="이름을 입력해주세요"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">연락처</label>
                <div className="flex gap-3">
                  <input 
                    type="text" 
                    required
                    data-testid="input-phone1"
                    maxLength={3}
                    value={formData.phone1}
                    onChange={(e) => setFormData({...formData, phone1: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-center"
                  />
                  <span className="flex items-center text-gray-400">-</span>
                  <input 
                    type="text" 
                    required
                    data-testid="input-phone2"
                    maxLength={4}
                    value={formData.phone2}
                    onChange={(e) => setFormData({...formData, phone2: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-center"
                  />
                  <span className="flex items-center text-gray-400">-</span>
                  <input 
                    type="text" 
                    required
                    data-testid="input-phone3"
                    maxLength={4}
                    value={formData.phone3}
                    onChange={(e) => setFormData({...formData, phone3: e.target.value})}
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 text-center"
                  />
                </div>
              </div>

              <div className="pt-2 pb-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input 
                    type="checkbox" 
                    required
                    data-testid="checkbox-agree"
                    checked={formData.agree}
                    onChange={(e) => setFormData({...formData, agree: e.target.checked})}
                    className="mt-1 w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500"
                  />
                  <span className="text-sm text-gray-600 leading-relaxed">
                    개인정보 수집 및 이용에 동의합니다. <br/>
                    <span className="text-xs text-gray-400">(상담 목적 외에는 절대 사용되지 않습니다)</span>
                  </span>
                </label>
              </div>

              <button 
                type="submit"
                data-testid="submit-form"
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-lg py-5 rounded-xl shadow-lg shadow-orange-200 transition-transform hover:-translate-y-1 active:translate-y-0 flex items-center justify-center gap-2"
              >
                무료 상담 신청하기
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 border-b border-gray-800 pb-12 mb-8">
            <div>
              <div className="flex items-center gap-2 text-white font-bold text-2xl mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-400 to-pink-500 flex items-center justify-center">
                  <HandHeart size={18} className="text-white" />
                </div>
                누구나머니
              </div>
              <p className="mb-2">당신 편에 서 있는 든든한 파트너</p>
              <div className="flex items-center gap-2 text-orange-400 font-bold text-2xl mt-6">
                <Phone size={24} />
                010-5807-7888
              </div>
            </div>
            
            <div className="text-sm leading-loose">
              <p>회사명: 우주캐피탈대부 | 대표자: 강윤희, 정충헌</p>
              <p>사업자등록번호: 738-95-01643</p>
              <p>대부업등록번호: 2023-충북청주-0011</p>
              <p>주소: 충청북도 청주시 청원구 내덕동 788-115</p>
            </div>
          </div>
          <div className="text-xs text-gray-600 text-center">
            <p>대출금리: 연 20% 이내 (연체금리: 약정금리 + 3%p, 법정 최고금리 연 20% 이내)</p>
            <p>취급수수료 등 기타 부대비용 및 조기상환조건 없음 (단, 담보대출은 해지비용 발생할 수 있음)</p>
            <p className="mt-2 text-gray-500">과도한 빚은 당신에게 큰 불행을 안겨줄 수 있습니다. 대출 시 신용등급 또는 개인신용평점이 하락할 수 있습니다.</p>
            <p className="mt-4">© {new Date().getFullYear()} 우주캐피탈대부. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
