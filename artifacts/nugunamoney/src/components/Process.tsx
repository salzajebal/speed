import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Process() {
  const steps = [
    { num: "01", title: "상담신청", desc: "간편하게 1분 만에 신청" },
    { num: "02", title: "서류검토", desc: "전문 상담사의 빠른 확인" },
    { num: "03", title: "상품매칭", desc: "최적의 맞춤 상품 안내" },
    { num: "04", title: "당일입금", desc: "승인 즉시 신속한 송금" },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 md:px-6 max-w-6xl">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">신청부터 입금까지 단 2시간</h2>
          <p className="text-lg text-muted-foreground">복잡한 절차 없이 빠르고 정확하게 진행됩니다.</p>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="relative max-w-5xl mx-auto"
        >
          {/* Connector Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-border/80"></div>
          
          <div className="grid md:grid-cols-4 gap-10 md:gap-4 relative z-10">
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-white shadow-md border-4 border-primary/20 flex items-center justify-center mb-6 relative">
                  <span className="text-2xl font-black text-primary">{step.num}</span>
                  {/* Mobile connector */}
                  {i !== steps.length - 1 && (
                    <div className="md:hidden absolute -bottom-10 left-1/2 w-0.5 h-10 bg-border/80 -translate-x-1/2"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
