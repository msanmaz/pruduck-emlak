import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import BeforeAfter from "@/components/BeforeAfter";
import Stats from "@/components/Stats";
import PortfolioGrid from "@/components/PortfolioGrid";
import Process from "@/components/Process";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <BeforeAfter />
        <Stats />
        <PortfolioGrid />
        <Process />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
