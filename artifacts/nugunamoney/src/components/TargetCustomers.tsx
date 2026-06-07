import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Heart, Home, TrendingUp } from "lucide-react";

export default function TargetCustomers() {
  const targets = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "개인회생 / 파산면책",
      desc: "개인회생/파산면책, 면책 / 신용 상태 무관"
    },
    {
      icon: <Briefcase className="w-8 h-8 text-primary" />,
      title: "프리랜서 / 자영업",
      desc: "사업 1개월 이상, 소득증빙 다양하게 가능"
    },
    {
      icon: <Home className="w-8 h-8 text-primary" />,
      title: "주부",
      desc: "본인 소득없어도, 배우자 소득으로 가능"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-primary" />,
      title: "6등급 이하",
      desc: "낮은 등급 전문, 맞춤 상품 연결"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">이런 분들, 지금 바로 신청하세요</h2>
          <p className="text-lg text-muted-foreground">누구나머니는 모든 상황에 맞는 맞춤형 솔루션을 제공합니다.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {targets.map((target, i) => (
            <motion.div key={i} variants={fadeIn}>
              <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow hover:border-primary/20 bg-background/50">
                <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                    {target.icon}
                  </div>
                  <h3 className="text-xl font-bold">{target.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{target.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
