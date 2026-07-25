import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { ShieldCheck, Receipt, UserCheck, Zap } from "lucide-react";

export default function TrustFeatures() {
  const features = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "금융감독원 등록 합법 업체",
      desc: "정식으로 등록된 안전한 업체입니다."
    },
    {
      icon: <Receipt className="w-10 h-10 text-primary" />,
      title: "수수료 0원 보장",
      desc: "상담, 중개 등 어떠한 수수료도 요구하지 않습니다."
    },
    {
      icon: <UserCheck className="w-10 h-10 text-blue-500" />,
      title: "상담 후 불이익 없음",
      desc: "단순 상담은 신용등급에 영향을 주지 않습니다."
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-500" />,
      title: "빠른 처리 시스템",
      desc: "자체 시스템을 통해 최단 시간 승인을 지향합니다."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-border/50">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why 신속대출론?</h2>
          <p className="text-lg text-muted-foreground">믿을 수 있는 든든한 금융 파트너가 되어드리겠습니다.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 gap-8 md:gap-12"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeIn} className="flex gap-6 items-start">
              <div className="shrink-0 p-4 rounded-2xl bg-muted/30">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
