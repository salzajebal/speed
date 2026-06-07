import { motion } from "framer-motion";
import { fadeIn, scaleIn } from "@/lib/animations";
import ConsultationForm from "./ConsultationForm";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  const stats = [
    { label: "최저금리", value: "3.9%~" },
    { label: "최대한도", value: "1억" },
    { label: "입금가능", value: "당일" },
    { label: "수수료", value: "0원" },
  ];

  const badges = [
    "6등급 이하 가능", "주부·무직 가능", "대환대출 가능", "평균 승인 2시간"
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Background Decorative Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[50%] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-orange-400/5 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="flex flex-col space-y-8"
          >
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {badges.map((badge, i) => (
                  <Badge 
                    key={i} 
                    variant="secondary" 
                    className="bg-white border-primary/20 text-primary font-medium px-3 py-1 text-sm shadow-sm"
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.15] tracking-tight">
                오늘 신청하면,<br />
                <span className="text-primary relative inline-block">
                  오늘 입금.
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-primary/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" strokeWidth="3" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                복잡한 서류 없이 <span className="font-semibold text-foreground">1분 신청</span>. 
                신용등급 관계없이 누구나 상담 가능합니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 pt-4 border-t border-border/50">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-sm font-medium text-muted-foreground mb-1">{stat.label}</span>
                  <span className="text-2xl md:text-3xl font-black text-foreground tracking-tight">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            className="lg:pl-10"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
              <ConsultationForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
