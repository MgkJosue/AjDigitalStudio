import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import CodeShowcase from "@/components/CodeShowcase";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <CodeShowcase />
        <WhyUs />
        <Process />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
