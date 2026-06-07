import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetCustomers from "@/components/TargetCustomers";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";
import KakaoButton from "@/components/KakaoButton";

export default function Home() {
  return (
    <div style={{ fontFamily: "'SUIT Variable','SUIT',-apple-system,BlinkMacSystemFont,sans-serif", wordBreak: "keep-all" }}>
      <Header />
      <main>
        <Hero />
        <TargetCustomers />
        <Process />
        <Reviews />
        <BottomCTA />
      </main>
      <Footer />
      <KakaoButton />
    </div>
  );
}
