export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-extrabold text-white mb-6 tracking-tight">누구나머니</h2>
            <div className="space-y-2 text-sm text-slate-400">
              <p><span className="font-medium text-slate-300">회사명:</span> 우주캐피탈대부</p>
              <p><span className="font-medium text-slate-300">사업자등록번호:</span> 738-95-01643</p>
              <p><span className="font-medium text-slate-300">대표자:</span> 강윤희, 정충헌</p>
              <p><span className="font-medium text-slate-300">주소:</span> 충청북도 청주시 청원구 내덕동 788-115</p>
              <p><span className="font-medium text-slate-300">대부업등록번호:</span> 2023-충북청주-0011 (대부중개업)</p>
              <p className="pt-2"><span className="font-medium text-slate-300">고객센터:</span> 010-5807-7888</p>
            </div>
          </div>

          <div className="lg:text-right flex flex-col lg:items-end justify-between">
            <div className="space-x-4 mb-8 lg:mb-0">
              <a href="#" className="text-sm font-medium hover:text-white transition-colors" data-testid="link-privacy-policy">개인정보처리방침</a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-sm font-medium hover:text-white transition-colors" data-testid="link-terms">이용약관</a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-xs text-slate-500 leading-relaxed space-y-4">
          <p>
            대출 광고에 따른 금리 및 한도는 개인의 신용 및 소득에 따라 다를 수 있습니다.
            과도한 빚은 신용등급 하락 및 법적 불이익의 위험이 있습니다.
          </p>
          <p>
            대출금리: 연 20% 이내 (연체금리는 약정금리+3%p 이내, 연 20% 이내). 취급수수료 등 기타 부대비용 없음.
            중개수수료를 요구하거나 받는 것은 불법입니다.
          </p>
          <p className="mt-6 pt-4 border-t border-slate-800/50">
            &copy; {new Date().getFullYear()} 누구나머니. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
