import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TargetCustomers from "@/components/TargetCustomers";
import Process from "@/components/Process";
import TrustFeatures from "@/components/TrustFeatures";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background font-sans overflow-x-hidden">
      <Header />
      <main className="flex-1">
        <Hero />
        <TargetCustomers />
        <Process />
        <TrustFeatures />
      </main>
      <Footer />
    </div>
  );
}
