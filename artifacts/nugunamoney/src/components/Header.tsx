import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-6xl">
        <button 
          onClick={scrollToTop}
          className="text-2xl font-extrabold text-primary tracking-tight transition-transform hover:scale-105"
          data-testid="button-logo-home"
        >
          누구나머니
        </button>
        <Button 
          onClick={scrollToTop}
          className="rounded-full px-6 font-semibold shadow-md hover:shadow-lg transition-all"
          data-testid="button-nav-consultation"
        >
          무료 상담 신청
        </Button>
      </div>
    </header>
  );
}
